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
  const [facultyData, setFacultyData] = useState(data || []); // ✅ use SSR data immediately
  const [typesList, setTypesList] = useState([]);
  const [loading, setLoading] = useState(!data?.length); // ✅ skip loading if SSR data exists
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [departmentsList, setDepartmentsList] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState("");

  const initialized = useRef(false);

  const parts = pathname.split("/").filter(Boolean);

  const segmentMap = {
    department: "department-pages",
    schools: "school-pages",
  };

  const segment = segmentMap[parts[0]] || parts[0];
  const slug = parts[1] || "";

  const handleReset = () => {
    setSearchTerm("");
    setSelectedType("");
    setSelectedDepartment("");
  };

  const buildApiUrl = (search = "", type = "", department = "", page = 1) => {
    const params = new URLSearchParams();
    if (search && search.trim() !== "") params.set("search", search);
    if (type) params.set("type", String(type));
    if (department) params.set("department", String(department));
    if (page > 1) params.set("page", page);

    return `${BASE_URL}${segment}/${slug}/faculties?${params.toString()}`;
  };

  const fetchDepartments = async () => {
    try {
      const res = await fetch(`${BASE_URL}school-department-list`);
      if (!res.ok) throw new Error(`Departments API error: ${res.status}`);
      const json = await res.json();
      const matchedSchool = (json.data || []).find((s) => s.slug === slug);
      setDepartmentsList(matchedSchool?.departments || []);
    } catch (err) {
      console.error("Departments fetch error:", err);
      setDepartmentsList([]);
    }
  };

  const fetchTypes = async () => {
    try {
      const segmentMap = { schools: "school", department: "department" };
      const seg = segmentMap[parts[0]] || parts[0];

      const res = await fetch(`${BASE_URL}faculties/types/${seg}/${slug}`);
      if (!res.ok) throw new Error(`Types API error: ${res.status}`);
      const json = await res.json();

      setTypesList(
        (json.data || []).map((t) => ({ type_id: t.id, type: t.name })),
      );
    } catch (err) {
      console.error("Types fetch error:", err);
      setTypesList([]);
    }
  };

  const fetchFaculty = async (
    search = "",
    type = "",
    department = "",
    page = 1,
  ) => {
    try {
      setLoading(true);
      const url = buildApiUrl(search, type, department, page);
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

  // ✅ Single init useEffect — was duplicated before causing double fetch
  useEffect(() => {
    const init = async () => {
      // Run these in parallel — no need to await sequentially
      await Promise.all([
        fetchTypes(),
        parts[0] === "schools" ? fetchDepartments() : Promise.resolve(),
        fetchFaculty(),
      ]);
      initialized.current = true;
    };
    init();
  }, []); // ✅ only one useEffect with []

  // ✅ Filter effect — only runs after init is done
  useEffect(() => {
    if (!initialized.current) return;

    setNextPageUrl(null);
    setFacultyData([]);

    const timeout = setTimeout(() => {
      fetchFaculty(searchTerm, selectedType, selectedDepartment, 1);
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchTerm, selectedType, selectedDepartment]);

  return (
    <section className={styles.inner_page}>
      <div className="container">
        <h1 className={`${styles.innerPage_title} text-center`}>Faculty</h1>

        {/* Filters */}
        <section className="program-search faulty-sec inner_faculties_search">
          <div className="container">
            <div className="row justify-content-center">
              <div
                className={`${parts?.[0] === "schools" ? "col-lg-12" : "col-lg-8"}`}
              >
                <div
                  className={`faulty-box ${parts?.[0] === "schools" ? "school-faculties" : ""}`}
                >
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

                  {parts?.[0] === "schools" && (
                    <div className="faulty-drop-down">
                      <select
                        className="form-select"
                        value={selectedDepartment}
                        onChange={(e) => setSelectedDepartment(e.target.value)}
                      >
                        <option value="">Select Department</option>
                        {departmentsList.map((d) => (
                          <option key={d.id} value={d.id}>
                            {d.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  {(searchTerm || selectedType || selectedDepartment) && (
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
