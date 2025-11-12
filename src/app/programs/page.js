"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import "@/styles/style.css";

export default function Programs() {
  const [activeTab, setActiveTab] = useState("UnderGraduate");
  const [selectedSchools, setSelectedSchools] = useState([
    "School Of Engineering",
  ]);
  const [selectedDepartments, setSelectedDepartments] = useState([]);

  // const programs = Array(15).fill({
  //   image: "/images/programs/program-img.webp",
  //   degree: "B.Tech in",
  //   title: "Computer Science and Engineering",
  //   link: "#",
  // });
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

  const schools = [
    "School Of Engineering",
    "School Of Pharmacy",
    "School Of Management",
    "School Of Computer Applications",
    "School Of Applied Sciences",
    "School Of Humanities",
  ];

  const departments = [
    "Electrical Engineering",
    "Mechanical Engineering",
    "Computer Science and Engineering",
    "Robotics and Artificial Intelligence",
    "Electrical & Electronics Engineering",
  ];

  const tabs = ["UnderGraduate", "PostGraduate", "PhD"];

  const handleSchoolToggle = (school) => {
    setSelectedSchools((prev) =>
      prev.includes(school)
        ? prev.filter((s) => s !== school)
        : [...prev, school]
    );
  };

  const handleDepartmentToggle = (department) => {
    setSelectedDepartments((prev) =>
      prev.includes(department)
        ? prev.filter((d) => d !== department)
        : [...prev, department]
    );
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search functionality to be implemented");
  };

  const handleLoadMore = () => {
    console.log("Load more functionality to be implemented");
  };

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
                    {schools.map((school, index) => (
                      <div
                        key={school}
                        className={`form-check ${styles.formCheck}`}
                      >
                        <input
                          className="check-box"
                          type="checkbox"
                          checked={selectedSchools.includes(school)}
                          onChange={() => handleSchoolToggle(school)}
                          id={`school-${index}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`school-${index}`}
                        >
                          {school}
                        </label>
                      </div>
                    ))}
                  </div>

                  {/* Departments Filter */}
                  <div className={styles.programCategoryBox}>
                    <p>Filter by Departments</p>
                    {departments.map((department, index) => (
                      <div
                        key={department}
                        className={`form-check ${styles.formCheck}`}
                      >
                        <input
                          className="check-box"
                          type="checkbox"
                          checked={selectedDepartments.includes(department)}
                          onChange={() => handleDepartmentToggle(department)}
                          id={`department-${index}`}
                        />
                        <label
                          className="form-check-label"
                          htmlFor={`department-${index}`}
                        >
                          {department}
                        </label>
                      </div>
                    ))}
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
