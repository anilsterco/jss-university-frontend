"use client";

import { useState, useEffect, useRef } from "react";

import styles from "./page.module.css";
import "@/styles/style.css";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import ProgramBox from "@/component/programBox/ProgramBox";
import { BASE_URL } from "@/config/config.mjs";
import { Skeleton } from "@/component/common/skeleton/Skeleton";

function useIsMobile(breakpoint = 768){
  const [isMobile, setIsMobile] = useState(false);

  useEffect(()=>{
    const check = ()=>setIsMobile(window.innerWidth <= breakpoint)
    check();

    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint])

  return isMobile;
}

export default function ProgramClient() {
  const params = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useIsMobile();

  const [activeProgram, setActiveProgram] = useState(
    () => params.get("type") || "under-graduate",
  );
  const [activeSchoolId, setActiveSchoolId] = useState(() =>
    params.get("school_id") ? Number(params.get("school_id")) : null,
  );
  const [activeDepartmentId, setActiveDepartmentId] = useState(() =>
    params.get("department_id") ? Number(params.get("department_id")) : null,
  );
  const [selectedSchool, setSelectedSchool] = useState(() =>
    params.get("school_id") ? Number(params.get("school_id")) : null,
  );
  const [selectedDepartment, setSelectedDepartment] = useState(() =>
    params.get("department_id") ? Number(params.get("department_id")) : null,
  );

  const [schoolData, setSchoolData] = useState([]);
  const [programData, setProgramData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [programsLoading, setProgramsLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);
  const [searchProgram, setSearchProgram] = useState("");
  const [programListingData, setProgramListingData] = useState([]);
  
  const timeoutRef = useRef(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!schoolData.length || !activeDepartmentId) return;

    const parentSchool = schoolData.find((school) =>
      school.departments?.some(
        (dept) => dept.id === Number(activeDepartmentId),
      ),
    );

    if (parentSchool) {
      setActiveSchoolId(parentSchool.id);
      setSelectedSchool(parentSchool.id);
    }
  }, [schoolData, activeDepartmentId]);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}school-department-list`)
      .then((response) => response.json())
      .then((data) => {
        setSchoolData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });

    fetch(`${BASE_URL}program-list`)
      .then((response) => response.json())
      .then((data) => {
        setProgramData(data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    setPage(1);
  }, [selectedSchool, selectedDepartment, activeProgram, searchProgram]);

  useEffect(() => {
    fetchPrograms();
  }, [selectedSchool, selectedDepartment, activeProgram, searchProgram, page]);
  // ✅ REMOVED `params` from the dependency array — it was causing a double fetch

  const fetchPrograms = async () => {
    if (page === 1) {
      setProgramsLoading(true);
    } else {
      setLoadingMore(true);
    }
    let url = `${BASE_URL}programs/${activeProgram}`;
    const queryParams = []; // ✅ renamed to avoid shadowing the `params` from useSearchParams

    if (selectedSchool) {
      queryParams.push(`school_id=${encodeURIComponent(selectedSchool)}`);
    }
    if (selectedDepartment) {
      queryParams.push(
        `department_id=${encodeURIComponent(selectedDepartment)}`,
      );
    }
    if (searchProgram) {
      queryParams.push(`search=${encodeURIComponent(searchProgram)}`);
    }
    if (page) {
      queryParams.push(`page=${encodeURIComponent(page)}`);
    }

    if (queryParams.length > 0) {
      url += `?${queryParams.join("&")}`;
    }

    const response = await fetch(url);
    const data = await response.json();


    if (page === 1) {
      setProgramListingData(data.data);
      setProgramsLoading(false);
    } else {
      setProgramListingData((prevData) => ({
        ...data.data,
        data: [...(prevData.data || []), ...(data.data.data || [])],
      }));
      setLoadingMore(false);
    }
  };
  const programs = programListingData.data;

  const tabs = programData;
  const handleSchoolToggle = (schoolId) => {
    setSelectedSchool(schoolId);
    setActiveSchoolId(schoolId);
    setSelectedDepartment(null); // ← reset department
    setActiveDepartmentId(null); // ← reset active department highlight
  };

  const handleDepartmentToggle = (departmentId) => {
    setSelectedDepartment(departmentId);
    setActiveDepartmentId(departmentId);
  };

  const handleSearch = (value) => {
    setSearchProgram(value);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      console.log("Searching for:", value);
    }, 300);
  };
  const handleLoadMore = () => {
    if (!programListingData?.total || !programListingData?.per_page) {
      return;
    }

    const totalPages = Math.ceil(
      programListingData.total / programListingData.per_page,
    );

    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const getFilteredDepartments = () => {
    if (!selectedSchool) return []; // returns empty — we handle message in JSX
    const school = schoolData.find((s) => s.id === selectedSchool);
    return school?.departments || [];
  };

  const filteredDepartments = getFilteredDepartments();
  const hasMorePages =
    programListingData?.total && programListingData?.per_page
      ? page < Math.ceil(programListingData.total / programListingData.per_page)
      : false;
  return (
    <>
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">
                <h1>PROGRAMME</h1>
                <h3>
                  COMPREHENSIVE <span>ACADEMIC PROGRAMME</span> <br />
                  FOR <span>LIFELONG LEARNING</span>
                </h3>
                <ul>
                  {tabs.map((tab) => (
                    <li
                      key={tab.id}
                      className={activeProgram === tab.slug ? "active" : ""}
                    >
                      <a
                        onClick={() => setActiveProgram(tab.slug)}
                        style={{ cursor: "pointer" }}
                      >
                        {tab.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className={styles.programSearch}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className={styles.searchBox}>
                <>
                  <input
                    type="text"
                    placeholder="Search Programmes"
                    name="search"
                    value={searchProgram}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <button type="button" aria-label="Search programmes">
                    <i className="bi bi-search"></i>
                  </button>
                </>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program List */}
      <section className={styles.programSec1}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className={styles.programList}>
                {/* Filters Sidebar */}
                <div className={styles.programCategory}>
                  {/* Schools Filter */}
                  <div className={styles.programCategoryBox}>
                    <p>Browse by Schools</p>
                    {loading ? (
                      <div>Loading schools...</div>
                    ) : isMobile ?(
                      <select
                        value={activeSchoolId ?? ''}
                        className="programs_select_dropdown"
                        onChange={(e)=>{
                          const val = e.target.value;
                          handleSchoolToggle(val == '' ? null : Number(val))
                        }}
                      >
                        <option value="" selected disabled>--Select--</option>
                        {schoolData.map((school, idx)=>(
                          <option key={idx} value={school.id}>
                            {school.name}
                          </option>
                        ))}
                      </select>
                    ) : (
                      schoolData.map((school) => (
                        <div
                          key={school.id}
                          className={`form-check ${styles.formCheck}`}
                        >
                          <input
                            className="check-box"
                            type="radio"
                            name="school"
                            checked={activeSchoolId == school.id}
                            onChange={() => handleSchoolToggle(school.id)}
                            id={`school-${school.id}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`school-${school.id}`}
                          >
                            {school.name}
                          </label>
                        </div>
                      ))
                    )}
                  </div>

                  {/* Departments Filter */}
                  {/* Departments Filter */}
                  <div className={styles.programCategoryBox}>
                    <p>Filter by Departments</p>
                    {loading ? (
                      <div>Loading departments...</div>
                    ) : isMobile ? (
                      <select
                        value={activeDepartmentId ?? ""}
                        className="programs_select_dropdown"
                        disabled={!selectedSchool}
                        onChange={(e) => {
                          const val = e.target.value;
                          handleDepartmentToggle(val === "" ? null : Number(val));
                        }}
                      >
                        <option value="" selected disabled>--Select--</option>
                        {filteredDepartments.map((department) => (
                          <option key={department.id} value={department.id}>
                            {department.name}
                          </option>
                        ))}
                      </select>
                    ) :  !selectedSchool ? (
                      <div className="select-school-msg">
                        Please select a school first
                      </div>
                    ) : filteredDepartments.length > 0 ? (
                      filteredDepartments.map((department) => (
                        <div
                          key={department.id}
                          className={`form-check ${styles.formCheck}`}
                        >
                          <input
                            className="check-box"
                            type="radio"
                            name="department"
                            checked={activeDepartmentId == department.id}
                            onChange={() =>
                              handleDepartmentToggle(department.id)
                            }
                            id={`department-${department.id}`}
                          />
                          <label
                            className="form-check-label"
                            htmlFor={`department-${department.id}`}
                          >
                            {department.name}
                          </label>
                        </div>
                      ))
                    ) : (
                      <div>No departments available</div>
                    )}
                  </div>
                </div>

                {/* Programs Grid */}
                {/* Programs Grid */}
                <div className={styles.programMainList}>
                  {programsLoading && (
                    <div className="row">
                      {Array.from({ length: 6 }).map((_, idx) => (
                        <div className="col-md-4 mb-4" key={idx}>
                          <Skeleton height="30rem" className="" />
                        </div>
                      ))}
                    </div>
                  )}

                  {!programsLoading && programs && programs.length === 0 && (
                    <h6 className="text-center">No Programme available</h6>
                  )}

                  {!programsLoading && programs && programs.length > 0 && (
                    <div className={styles.programListBoxs}>
                      {programs.map((program, index) => (
                        <ProgramBox key={index} data={program} />
                      ))}
                    </div>
                  )}

                  {!programsLoading && programs && programs.length > 0 && hasMorePages && (
                    <div className={styles.loadMoreContainer}>
                      <a
                        id="loadMore"
                        onClick={loadingMore ? undefined : handleLoadMore}
                        style={{ opacity: loadingMore ? 0.6 : 1, pointerEvents: loadingMore ? "none" : "auto" }}
                      >
                        {loadingMore ? "Loading..." : (<>Load More <i className="bi bi-arrow-down"></i></>)}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
