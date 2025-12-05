"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import "@/styles/style.css";

const BASE_URL = "https://project-demo.in/jss/api";

export default function ProgramClient() {
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [schoolData, setSchoolData] = useState([]);
  const [programData, setProgramData] = useState([]);
  const [activeProgram, setActiveProgram] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchProgram, setSearchProgram] = useState("");
  const [programListingData, setProgramListingData] = useState([]);
  const timeoutRef = useRef(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/school-department-list`)
      .then((response) => response.json())
      .then((data) => {
        setSchoolData(data.data);
        if (data.data && data.data.length > 0) {
          setSelectedSchool(data.data[0].id);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
    fetch(`${BASE_URL}/program-list`)
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

  const fetchPrograms = async () => {
    let url = `${BASE_URL}/programs/${activeProgram}`;
    const params = [];
  
    if (selectedSchool) {
      params.push(`school_id=${encodeURIComponent(selectedSchool)}`);
    }
    if (selectedDepartment) {
      params.push(`department_id=${encodeURIComponent(selectedDepartment)}`);
    }
    if (searchProgram) {
      params.push(`search=${encodeURIComponent(searchProgram)}`);
    }
    if (page) {
      params.push(`page=${encodeURIComponent(page)}`);
    }

    if (params.length > 0) {
      url += `?${params.join("&")}`;
    }

    const response = await fetch(url);
    const data = await response.json();
    if (page === 1) {
      setProgramListingData(data.data);
    } else {
      setProgramListingData((prevData) => ({
        ...data.data,
        data: [...(prevData.data || []), ...(data.data.data || [])],
      }));
    }
  };
  const programs = programListingData.data;

  const tabs = programData;

  const handleSchoolToggle = (schoolId) => {
    setSelectedSchool(schoolId);
    setSelectedDepartment(null);
  };

  const handleDepartmentToggle = (departmentId) => {
    setSelectedDepartment(departmentId);
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
      programListingData.total / programListingData.per_page
    );

    if (page < totalPages) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const getFilteredDepartments = () => {
    if (!selectedSchool) {
      return [];
    }
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
                <h2>PROGRAMS</h2>
                <h3>
                  COMPREHENSIVE <span>ACADEMIC PROGRAMS</span> <br />
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
                    placeholder="Search Course"
                    name="search"
                    value={searchProgram}
                    onChange={(e) => handleSearch(e.target.value)}
                  />
                  <button type="submit">
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
                    <p>Browse by School</p>
                    {loading ? (
                      <div>Loading schools...</div>
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
                            checked={selectedSchool === school.id}
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
                  <div className={styles.programCategoryBox}>
                    <p>Filter by Departments</p>
                    {loading ? (
                      <div>Loading departments...</div>
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
                            checked={selectedDepartment === department.id}
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
                <div className={styles.programMainList}>
                  {programs && programs.length > 0 ? (
                    <div className={styles.programListBoxs}>
                      {programs.map((program, index) => (
                        <div key={index} className={styles.cusProgramBox}>
                          <Link
                            href={`/programs/${program.slug ?? ""}`}
                            className={styles.strechedLink}
                          >
                            <figure>
                              {program.banner && (
                                <Image
                                  src={program.banner}
                                  alt="program-image"
                                  width={400}
                                  height={250}
                                  className="img-fluid w-100"
                                />
                              )}
                            </figure>
                            <div className={styles.cusProgramText}>
                              <p>{program.degree_name}</p>
                              <h6>{program.name}</h6>
                              <span>
                                Know More{" "}
                                <i className="bi bi-chevron-right"></i>
                              </span>
                            </div>
                          </Link>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <h6 className="text-center">No programs available</h6>
                  )}

                  {programs && programs.length > 0 && hasMorePages && (
                    <div className={styles.loadMoreContainer}>
                      <a id="loadMore" onClick={handleLoadMore}>
                        Load More <i className="bi bi-arrow-down"></i>
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
