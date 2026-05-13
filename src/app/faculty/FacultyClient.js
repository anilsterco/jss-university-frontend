"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RxCaretRight } from "react-icons/rx";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Link from "next/link";
import { BASE_URL } from "@/config/config";

const SCHOOLS_API_URL = "/api/schools/all";

export default function FacultyClient() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const [facultyListData, setFacultyListData] = useState([]);
  const [typesList, setTypesList] = useState([]);

  // Pagination
  const [nextPageUrl, setNextPageUrl] = useState(null);

  const [schoolsList, setSchoolsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const firstLoad = useRef(true);

  // --------------------------
  // Accumulate unique types
  // --------------------------
  const accumulateTypes = (newFaculty) => {
    setTypesList((prev) => {
      const existingIds = new Map(prev.map((t) => [t.type_id, t]));
      newFaculty.forEach((f) => {
        if (f.type_id && !existingIds.has(f.type_id)) {
          existingIds.set(f.type_id, { type_id: f.type_id, type: f.type });
        }
      });
      return Array.from(existingIds.values());
    });
  };

  // --------------------------
  // Fetch Schools
  // --------------------------
  const fetchSchoolsData = async () => {
    try {
      const res = await fetch(SCHOOLS_API_URL);
      if (!res.ok) throw new Error(`Schools API error: ${res.status}`);
      const data = await res.json();
      setSchoolsList(data.data || []);
    } catch (err) {
      console.error("Schools fetch error:", err);
      setSchoolsList([]);
    }
  };

  // --------------------------
  // Fetch Faculty (page 1 or filters)
  // --------------------------
  const fetchFacultyData = async (
    page = 1,
    search = "",
    schoolId = "",
    type = "",
  ) => {
    try {
      setLoading(true);

      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (schoolId) params.append("school", schoolId);
      if (type) params.append("type", type);
      params.append("page", page);

      const res = await fetch(`${BASE_URL}faculties?${params.toString()}`);
      if (!res.ok) throw new Error(`Faculty API error: ${res.status}`);
      const data = await res.json();

      const faculty = data.data?.faculty || [];
      const pagination = data.data?.pagination;

      setFacultyListData(faculty);
      setNextPageUrl(pagination?.next_page_url || null);
      accumulateTypes(faculty);
    } catch (err) {
      console.error("Faculty fetch error:", err);
      setFacultyListData([]);
    } finally {
      setLoading(false);
    }
  };

  // --------------------------
  // Load More Faculty (pagination)
  // --------------------------
  const loadMore = async () => {
    if (!nextPageUrl) return;

    try {
      setIsLoadingMore(true);

      // ✅ Build URL with current active filters instead of trusting nextPageUrl blindly
      const urlObj = new URL(nextPageUrl);
      const params = urlObj.searchParams;

      if (searchTerm) params.set("search", searchTerm);
      if (selectedSchool) params.set("school", selectedSchool);
      if (selectedType) params.set("type", selectedType);

      const proxiedUrl = urlObj
        .toString()
        .replace(`${BASE_URL}`, "/api");

      const res = await fetch(proxiedUrl);
      if (!res.ok) throw new Error(`Load More API error: ${res.status}`);
      const data = await res.json();

      const newFaculty = data.data?.faculty || [];
      const pagination = data.data?.pagination;

      setFacultyListData((prev) => [...prev, ...newFaculty]);
      setNextPageUrl(pagination?.next_page_url || null);
      accumulateTypes(newFaculty);
    } catch (err) {
      console.error("Load More error:", err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // --------------------------
  // Initial Load
  // --------------------------
  useEffect(() => {
    fetchSchoolsData();
    fetchFacultyData(1);
  }, []);

  // --------------------------
  // Filter change effect
  // --------------------------
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    // ✅ Reset immediately to prevent stale loadMore calls
    setNextPageUrl(null);
    setFacultyListData([]);

    const timeoutId = setTimeout(() => {
      fetchFacultyData(1, searchTerm, selectedSchool, selectedType);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedSchool, selectedType]);

  // --------------------------
  // JSX Render
  // --------------------------
  return (
    <main className="site_main">
      {/* Title Section */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">
                <h2>FACULTY</h2>
                <h3>
                TEACHING <span>FACULTY</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="program-search faulty-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="faulty-box">
                {/* Search */}
                <div className="search-box">
                  <input
                    type="text"
                    className="input-fild"
                    placeholder="Search by Name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <img
                    src="/images/custom-page/facility/serch-icon.svg"
                    alt="Search"
                    className="search-icon"
                  />
                </div>

                {/* School Dropdown */}
                <div className="faulty-drop-down">
                  <select
                    className="form-select"
                    value={selectedSchool}
                    onChange={(e) => setSelectedSchool(e.target.value)}
                  >
                    <option value="">Select School</option>
                    {schoolsList.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Type Dropdown */}
                <div className="faulty-drop-down">
                  <select
                    className="form-select"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="">Select Faculty Type</option>
                    {typesList.map((f) => (
                      <option key={f.type_id} value={f.type_id}>
                        {f.type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty List */}
      <section className="faulty-sec1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {loading ? (
                <div className="text-center py-5">
                  <p>Loading faculty...</p>
                </div>
              ) : (
                <>
                  {facultyListData.length === 0 ? (
                    <div className="text-center py-5">
                      <p>No faculty found.</p>
                    </div>
                  ) : (
                    <div className="program-list-boxs faulty-list">
                      {facultyListData.map((faculty) => (
                        <div className="faulty-list-box" key={faculty.id}>
                          <div className="faulty-img">
                            <figure>
                              <Image
                                src={faculty.image}
                                alt={faculty.name}
                                className="img-fluid w-100"
                                width={300}
                                height={300}
                                style={{ objectFit: "cover" }}
                              />
                            </figure>
                          </div>
                          <div className="faulty-text">
                            <h4>{faculty.name}</h4>
                            <p>{faculty.designation || faculty.type}</p>
                            <span>
                              <RxCaretRight className="right-arrow" />
                            </span>
                          </div>
                          <Link
                            href={`/faculty/${faculty.slug}`}
                            className="streched_link"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Load More */}
                  {nextPageUrl && (
                    <div className="load-more-container text-center mt-4">
                      <button
                        onClick={loadMore}
                        disabled={isLoadingMore}
                        style={{ cursor: "pointer" }}
                      >
                        {isLoadingMore ? "Loading..." : "Load More"}{" "}
                        <i className="bi bi-arrow-down ps-2"></i>
                      </button>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
