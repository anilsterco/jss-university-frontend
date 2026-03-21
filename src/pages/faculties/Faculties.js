"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./faculties.module.css";
import FacultyCards from "@/component/sections/FacultyCards";
import { BASE_URL } from "@/config/config";
import { usePathname } from "next/navigation";

export default function Faculties({ data }) {
  const pathname = usePathname();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [facultyData, setFacultyData] = useState(data || []);
  const [typesList, setTypesList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  const firstLoad = useRef(true);

  // --------------------------
  // Build API URL from pathname
  // e.g. /department/mechanical-engineering/faculties
  //   -> department-pages/mechanical-engineering/faculties
  // e.g. /schools/college-of-pharmacy/faculties
  //   -> school-pages/college-of-pharmacy/faculties
  // --------------------------
  const buildApiUrl = (search = "", type = "", page = 1) => {
    const parts = pathname.split("/").filter(Boolean);
    // parts[0] = "department" or "schools"
    // parts[1] = slug e.g. "mechanical-engineering"

    const segmentMap = {
      department: "department-pages",
      schools: "school-pages",
    };

    const segment = segmentMap[parts[0]] || parts[0];
    const slug = parts[1] || "";

    const params = new URLSearchParams();
    if (search) params.set("search", search);
    if (type) params.set("type", type);
    if (page > 1) params.set("page", page);

    return `${BASE_URL}${segment}/${slug}/faculties?${params.toString()}`;
  };

  // --------------------------
  // Accumulate unique types
  // --------------------------
  // Fix accumulateTypes — use type string as key since no type_id in this API
  const accumulateTypes = (newFaculty) => {
    setTypesList((prev) => {
      const existingTypes = new Map(prev.map((t) => [t.type, t]));
      newFaculty.forEach((f) => {
        if (f.type && !existingTypes.has(f.type)) {
          existingTypes.set(f.type, { type_id: f.id, type: f.type }); // ← f.id as the filter value
        }
      });
      return Array.from(existingTypes.values());
    });
  };

  // --------------------------
  // Fetch Faculty
  // --------------------------
  const fetchFaculty = async (search = "", type = "", page = 1) => {
    try {
      setLoading(true);
      const url = buildApiUrl(search, type, page);
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Faculty API error: ${res.status}`);
      const json = await res.json();

      const faculty = json.data?.faculty || json.data || [];
      const pagination = json.data?.pagination;

      setFacultyData(faculty);
      setNextPageUrl(pagination?.next_page_url || null);
      accumulateTypes(faculty);
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
      if (searchTerm) params.set("search", searchTerm);
      if (selectedType) params.set("type", selectedType);

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
      accumulateTypes(newFaculty);
    } catch (err) {
      console.error("Load More error:", err);
    } finally {
      setIsLoadingMore(false);
    }
  };

  // --------------------------
  // Initial load
  // --------------------------
  useEffect(() => {
    fetchFaculty();
  }, []);

  // --------------------------
  // Filter change — debounced
  // --------------------------
  useEffect(() => {
    if (firstLoad.current) {
      firstLoad.current = false;
      return;
    }

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
                        <option key={f?.id} value={f?.id}>
                          {f?.type}
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
