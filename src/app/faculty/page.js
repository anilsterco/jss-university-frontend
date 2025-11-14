"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RxCaretRight } from "react-icons/rx";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Link from "next/link";

const BASE_URL = "https://project-demo.in/jss/api";
// const BASE_URL = "http://sd7:8080/jss/api";
const SCHOOLS_API_URL = "https://project-demo.in/jss/api/schools/all";

export default function FacultyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedType, setSelectedType] = useState("");

  const [facultyListData, setFacultyListData] = useState([]);

  // Pagination States
  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(1);
  const [nextPageUrl, setNextPageUrl] = useState(null);

  const [schoolsList, setSchoolsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiLoading, setApiLoading] = useState(false);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [schoolsLoading, setSchoolsLoading] = useState(true);

  const firstLoad = useRef(true);

  // Fetch schools data
  const fetchSchoolsData = async () => {
    try {
      setSchoolsLoading(true);
      const res = await fetch(SCHOOLS_API_URL);

      const data = await res.json();
      setSchoolsList(data.data || []);
    } catch (err) {
      console.error(err);
      setSchoolsList([]);
    } finally {
      setSchoolsLoading(false);
    }
  };

  // Fetch faculty for page 1 (with filters)
  const fetchFacultyData = async (
    page = 1,
    search = "",
    schoolId = "",
    type = ""
  ) => {
    try {
      setApiLoading(true);
      setLoading(true);

      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (schoolId) params.append("school", schoolId);
      if (type) params.append("type", type);

      params.append("page", page);

      const url = `${BASE_URL}/faculties?${params.toString()}`;

      const res = await fetch(url);
      const data = await res.json();

      const faculty = data.data?.faculty || [];
      const pagination = data.data?.pagination;

      setFacultyListData(faculty);
      setCurrentPage(pagination.current_page);
      setLastPage(pagination.last_page);
      setNextPageUrl(pagination.next_page_url);
    } catch (err) {
      console.error("Faculty fetch error:", err);
      setFacultyListData([]);
    } finally {
      setApiLoading(false);
      setLoading(false);
    }
  };

  // Load More Faculty
  const loadMore = async () => {
    if (!nextPageUrl) return;

    try {
      setIsLoadingMore(true);

      const res = await fetch(nextPageUrl);
      const data = await res.json();

      const newFaculty = data.data?.faculty || [];
      const pagination = data.data?.pagination;

      // Append new faculty
      setFacultyListData((prev) => [...prev, ...newFaculty]);

      setCurrentPage(pagination.current_page);
      setNextPageUrl(pagination.next_page_url);
    } catch (err) {
      console.error("Load More error:", err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // Initial Data Load (schools & faculty page 1)
  useEffect(() => {
    fetchSchoolsData();
    fetchFacultyData(1);
  }, []);

  // Filter changes (search → school → type)
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

    const timeoutId = setTimeout(() => {
      fetchFacultyData(1, searchTerm, selectedSchool, selectedType);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedSchool, selectedType]);

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
                  MEET OUR <span>FACULTY</span>
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
                    placeholder="Search by keywords"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <img
                    src="/images/custom-page/facility/serch-icon.svg"
                    alt=""
                    className="search-icon "
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
                    {facultyListData.map((f, i) => (
                      <option key={i} value={f.type_id}>
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
                  {/* Faculty Cards */}
                  <div className="program-list-boxs faulty-list">
                    {facultyListData.map((faculty) => (
                      <div className="faulty-list-box" key={faculty.id}>
                        <div className="faulty-img">
                          <figure>
                            <img
                              src={faculty.image}
                              alt={faculty.name}
                              className="img-fluid w-100"
                              style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover",
                              }}
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
                        ></Link>
                      </div>
                    ))}
                  </div>

                  {/* No Results */}
                  {facultyListData.length === 0 && (
                    <div className="text-center py-5">
                      <p>No faculty found.</p>
                    </div>
                  )}

                  {/* Load More */}
                  {nextPageUrl && (
                    <div className="load-more-container text-center mt-4">
                      <button
                        onClick={loadMore}
                        style={{ cursor: "pointer" }}
                        disabled={isLoadingMore}
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
