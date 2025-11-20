"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "@/styles/style.css";

const BASE_URL = "https://project-demo.in/jss/api";

export default function Programs() {
  const [activeTab, setActiveTab] = useState("UnderGraduate");
  const [selectedSchool, setSelectedSchool] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [schoolData, setSchoolData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}/school-department-list`)
      .then((response) => response.json())
      .then((data) => {
        setSchoolData(data.data);
        // Set first school as default selected
        if (data.data && data.data.length > 0) {
          setSelectedSchool(data.data[0].id);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, []);

  console.log(selectedSchool, selectedDepartment)

  const programs = [
    {
      id: 1,
      image: "/images/programs/program-img.webp",
      degree: "B.Tech in",
      title: "Computer Science and Engineering",
      link: "/programs/computer-science-engineering",
    },
    {
      id: 2,
      image: "/images/programs/program-img.webp",
      degree: "B.Tech in",
      title: "Electrical Engineering",
      link: "/programs/electrical-engineering",
    },
    {
      id: 3,
      image: "/images/programs/program-img.webp",
      degree: "B.Tech in",
      title: "Mechanical Engineering",
      link: "/programs/mechanical-engineering",
    },
    {
      id: 4,
      image: "/images/programs/program-img.webp",
      degree: "B.Tech in",
      title: "B.Tech Electronics & Communication Engineering",
      link: "/programs/electronics-communication",
    },
    {
      id: 5,
      image: "/images/programs/program-img.webp",
      degree: "B.Tech in",
      title: "Civil Engineering",
      link: "/programs/civil-engineering",
    },
    {
      id: 6,
      image: "/images/programs/program-img.webp",
      degree: "MBA in",
      title: "Business Administration",
      link: "/programs/business-administration",
    },
    {
      id: 7,
      image: "/images/programs/program-img.webp",
      degree: "MCA in",
      title: "Computer Applications",
      link: "/programs/computer-applications",
    },
    {
      id: 8,
      image: "/images/programs/program-img.webp",
      degree: "B.Pharma in",
      title: "Pharmaceutical Sciences",
      link: "/programs/pharmaceutical-sciences",
    },
    {
      id: 9,
      image: "/images/programs/program-img.webp",
      degree: "MCA in",
      title: "Computer Applications",
      link: "/programs/computer-applications",
    },
  ];

  const tabs = ["UnderGraduate", "PostGraduate", "PhD"];

  const handleSchoolToggle = (schoolId) => {
    // Radio button behavior - only one school at a time
    setSelectedSchool(schoolId);
    // Clear selected department when school changes
    setSelectedDepartment(null);
  };

  const handleDepartmentToggle = (departmentId) => {
    // Radio button behavior - only one department at a time
    setSelectedDepartment(departmentId);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search functionality to be implemented");
  };

  const handleLoadMore = () => {
    console.log("Load more functionality to be implemented");
  };

  // Get departments from selected school only
  const getFilteredDepartments = () => {
    if (!selectedSchool) {
      return [];
    }
    // Show departments only from selected school
    const school = schoolData.find((s) => s.id === selectedSchool);
    return school?.departments || [];
  };

  const filteredDepartments = getFilteredDepartments();

  return (
    <>
      {/* Title Section */}
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
                    <li key={tab} className={activeTab === tab ? "active" : ""}>
                      <a
                        onClick={() => setActiveTab(tab)}
                        style={{ cursor: "pointer" }}
                      >
                        {tab}
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
                <form onSubmit={handleSearch}>
                  <input
                    type="text"
                    placeholder="Search Course"
                    name="search"
                  />
                  <button type="submit">
                    <i className="bi bi-search"></i>
                  </button>
                </form>
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
                  <div className={styles.programListBoxs}>
                    {programs.map((program, index) => (
                      <div key={index} className={styles.cusProgramBox}>
                        <a href={program.link} className={styles.strechedLink}>
                          <figure>
                            <Image
                              src={program.image}
                              alt="program"
                              width={400}
                              height={250}
                              className="img-fluid w-100"
                            />
                          </figure>
                          <div className={styles.cusProgramText}>
                            <p>{program.degree}</p>
                            <h6>{program.title}</h6>
                            <span>
                              Know More <i className="bi bi-chevron-right"></i>
                            </span>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>

                  {/* Load More Button */}
                  <div className={styles.loadMoreContainer}>
                    <a id="loadMore" onClick={handleLoadMore}>
                      Load More <i className="bi bi-arrow-down"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
