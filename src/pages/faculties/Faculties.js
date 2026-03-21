"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./faculties.module.css";
import FacultyCards from "@/component/sections/FacultyCards";
import { BASE_URL } from "@/config/config";
import { usePathname } from "next/navigation";
import { RxReset } from "react-icons/rx";

export default function Faculties({ data }) {
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [facultyData, setFacultyData] = useState(data || []);
  const [typesList, setTypesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const initialized = useRef(false);

  // --------------------------
  // Reset filters
  // --------------------------
  const handleReset = () => {
    setSearchTerm("");
    setSelectedType("");
  };

  // --------------------------
  // Build API URL from pathname
  // --------------------------
  const buildApiUrl = (search = "", type = "", page = 1) => {
    const parts = pathname.split("/").filter(Boolean);

    const segmentMap = {
      department: "department-pages",
      schools: "school-pages",
    };

    const segment = segmentMap[parts[0]] || parts[0];
    const slug = parts[1] || "";

    const params = new URLSearchParams();
    if (search && search.trim() !== "") params.set("search", search);
    if (type) params.set("type", String(type));
    if (page > 1) params.set("page", page);

    return `${BASE_URL}${segment}/${slug}/faculties?${params.toString()}`;
  };

  // --------------------------
  // Fetch Types
  // --------------------------
  const fetchTypes = async () => {
    try {
      const parts = pathname.split("/").filter(Boolean);
      // parts[0] = "schools" or "department"
      // parts[1] = slug e.g. "college-of-pharmacy"

      const segmentMap = {
        schools: "school",
        department: "department",
      };

      const segment = segmentMap[parts[0]] || parts[0];
      const slug = parts[1] || "";

      const res = await fetch(`${BASE_URL}faculties/types/${segment}/${slug}`);
      if (!res.ok) throw new Error(`Types API error: ${res.status}`);
      const json = await res.json();

      // API now returns json.data instead of json.types
      const types = (json.data || []).map((t) => ({
        type_id: t.id,
        type: t.name,
      }));

      setTypesList(types);
    } catch (err) {
      console.error("Types fetch error:", err);
      setTypesList([]);
    }
  };

  // --------------------------
  // Fetch Faculty
  // --------------------------
  const fetchFaculty = async (search = "", type = "", page = 1) => {
    try {
      setLoading(true);
      const url = buildApiUrl(search, type, page);
      console.log("Fetching faculty URL:", url); // ← debug
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Faculty API error: ${res.status}`);
      const json = await res.json();

      const faculty = json.data?.faculty || json.data || [];
      const pagination = json.data?.pagination;

      setFacultyData(faculty);
      setNextPageUrl(pagination?.next_page_url || null);
    } catch (err) {
      console.error("Faculty fetch error:", err);
      setFacultyData([]);
    } finally {
      setLoading(false);
    }
  };

  // --------------------------
  // Load More
  // --------------------------
  const loadMore = async () => {
    if (!nextPageUrl) return;
    try {
      setIsLoadingMore(true);

      const urlObj = new URL(nextPageUrl);
      const params = urlObj.searchParams;
      if (searchTerm && searchTerm.trim() !== "")
        params.set("search", searchTerm);
      if (selectedType) params.set("type", String(selectedType));

      const proxiedUrl = urlObj
        .toString()
        .replace("https://project-demo.in/jss/api", "/api");

      const res = await fetch(proxiedUrl);
      if (!res.ok) throw new Error(`Load More error: ${res.status}`);
      const json = await res.json();

      const newFaculty = json.data?.faculty || json.data || [];
      const pagination = json.data?.pagination;

      setFacultyData((prev) => [...prev, ...newFaculty]);
      setNextPageUrl(pagination?.next_page_url || null);
    } catch (err) {
      console.error("Load More error:", err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // --------------------------
  // Single initial load — fixes the double useEffect bug
  // --------------------------
  useEffect(() => {
    const init = async () => {
      await fetchTypes();
      await fetchFaculty();
      initialized.current = true; // ← mark ready AFTER both complete
    };
    init();
  }, []); // ← only ONE useEffect for initial load

  // --------------------------
  // Filter change — debounced
  // --------------------------
  useEffect(() => {
    if (!initialized.current) return; // ← skip on mount

    setNextPageUrl(null);
    setFacultyData([]);

    const timeout = setTimeout(() => {
      fetchFaculty(searchTerm, selectedType, 1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm, selectedType]);

  return (
    <section className={styles.inner_page}>
      <div className="container">
        <h1 className={`${styles.innerPage_title} text-center`}>Faculties</h1>

        {/* Filters */}
        <section className="program-search faulty-sec inner_faculties_search">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-8">
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
                      alt=""
                      className="search-icon"
                    />
                  </div>

                  {/* Type Dropdown */}
                  <div className="faulty-drop-down">
                    <select
                      className="form-select"
                      value={selectedType}
                      onChange={(e) => setSelectedType(e.target.value)}
                    >
                      <option value="">Select Designation</option>
                      {typesList.map((f) => (
                        <option key={f.type_id} value={f.type_id}>
                          {f.type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Reset Button */}
                  {(searchTerm || selectedType) && (
                    <button
                      className="faculty-reset-btn"
                      onClick={handleReset}
                      type="button"
                    >
                      <RxReset size={16} />
                      Reset
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Faculty List */}
        {loading ? (
          <div className="text-center py-5">
            <p>Loading faculty...</p>
          </div>
        ) : facultyData.length === 0 ? (
          <div className="text-center py-5">
            <p>No faculty found.</p>
          </div>
        ) : (
          <>
            <FacultyCards data={facultyData} />

            {nextPageUrl && (
              <div className="load-more-container text-center mt-4">
                <button onClick={loadMore} disabled={isLoadingMore}>
                  {isLoadingMore ? "Loading..." : "Load More"}
                  <i className="bi bi-arrow-down ps-2"></i>
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
