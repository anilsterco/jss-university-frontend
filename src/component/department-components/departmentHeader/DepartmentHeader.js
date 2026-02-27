"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";
import styles from "./DepartmentHeader.module.css";

export default function DepartmentHeader({ className, STATIC_SECTIONS }) {
  const [activeSection, setActiveSection] = useState(STATIC_SECTIONS[0].slug);
  const [engineeringDropdown, setEngineeringDropdown] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(0);
  const [selectedSchoolName, setSelectedSchoolName] = useState("");
  const [selectedDepartmentName, setSelectedDepartmentName] = useState("");
  const [engineeringData, setEngineeringData] = useState([]);
  const [hoveredSchool, setHoveredSchool] = useState(0);
  const [hoveredDepartments, setHoveredDepartments] = useState([]);
  const engineeringRef = useRef(null);

  /* ================= Fetch Data ================= */

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch("/api/school-department-list");
        const json = await res.json();

        if (json.status && json.data.length > 0) {
          setEngineeringData(json.data);
          setSelectedSchoolName(json.data[0].name);
          setHoveredSchool(0);
          setHoveredDepartments(json.data[0].departments || []);

          if (json.data[0].departments?.length > 0) {
            setSelectedDepartmentName(json.data[0].departments[0].name);
          }
        }
      } catch (err) {
        console.error("API Error:", err);
      }
    };

    fetchSchools();
  }, []);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        engineeringRef.current &&
        !engineeringRef.current.contains(e.target)
      ) {
        setEngineeringDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);


  // useEffect(() => {
  //   const handleScroll = () => {
  //     STATIC_SECTIONS.forEach((section) => {
  //       const el = document.getElementById(section.id);
  //       if (el) {
  //         const rect = el.getBoundingClientRect();
  //         if (rect.top <= 100 && rect.bottom >= 100) {
  //           setActiveSection(section.id);
  //         }
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);

  // const scrollToSection = (id) => {
  //   const el = document.getElementById(id);
  //   if (el) {
  //     window.scrollTo({
  //       top: el.offsetTop - 80,
  //       behavior: "smooth",
  //     });
  //   }
  // };


  return (
    <div className={styles.departmentHeaderWrapper}>
      <div className={styles.stickyHeader}>
        <nav className="containerXl">
          <div className={styles.departmentMenu}>

            <div className={styles.schoolDeptWrapper}>
              <div
                className={styles.schoolToggle}
                onClick={() => setEngineeringDropdown(!engineeringDropdown)}
              >
                <span>Departments Of</span>
                <span>
                  <span className={styles.selectedName}>{selectedDepartmentName || selectedSchoolName}</span>
                  <IoChevronDownOutline />
                </span>
              </div>

              {engineeringDropdown && engineeringData.length > 0 && (
                <div
                  className={styles.engineeringDropdownContainer}
                  ref={engineeringRef}
                >
                  <div className={styles.engineeringDropdown}>

                    {/* ===== Schools ===== */}
                    <div className={styles.schoolsList}>
                      <h6>Schools</h6>
                      {engineeringData.map((school, idx) => (
                        <Link
                          key={idx}
                          href={`/department/${school.slug}`}
                          className={`${styles.schoolItem} ${selectedSchool === idx ? styles.active : ""
                            }`}
                          onMouseOver={() => {
                            setHoveredSchool(idx);
                            setHoveredDepartments(school.departments || []);
                            // if (school.departments?.length > 0) {
                            //   setSelectedDepartmentName(
                            //     school.departments[0].name
                            //   );
                            // }
                          }}
                          onMouseOut={() => {

                          }}
                        >
                          {school.name}
                        </Link>
                      ))}
                    </div>

                    <div className={styles.departmentsList}>
                      <h6>Departments</h6>
                      {hoveredDepartments.length > 0 ? (
                        hoveredDepartments.map((dept, i) => (
                          <Link
                            key={i}
                            href={`/department/${dept.slug}`}
                            className={styles.departmentLink}
                            onClick={() => {
                              setSelectedSchoolName(engineeringData[hoveredSchool].name);
                              setSelectedDepartmentName(dept.name);
                              setEngineeringDropdown(false);
                            }}
                          >
                            {dept.name}
                          </Link>
                        ))
                      ) : (
                        <p className={styles.noDept}>No departments available</p>
                      )}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* ===== Static Menu ===== */}
            {STATIC_SECTIONS.map((section) => (
              <Link
                key={section.title}
                href={section.slug}
                className={`${styles.navItem} `}
              // ${activeSection === section.slug ? styles.activeNav : ""}
              // onClick={() => scrollToSection(section.id)}
              >
                {section.title}
              </Link>
            ))}

          </div>
        </nav>
      </div>
    </div>
  );
}