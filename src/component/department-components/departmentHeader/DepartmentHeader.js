"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { IoChevronDownOutline } from "react-icons/io5";
import styles from "./DepartmentHeader.module.css";

const STATIC_SECTIONS = [
  { id: "about", label: "About The Department" },
  { id: "programs", label: "Programs" },
  { id: "research", label: "Research" },
  { id: "labs", label: "Labs" },
  { id: "facilities", label: "Facilities" },
  { id: "placements", label: "Placements" },
  { id: "faculties", label: "Faculties" },
  { id: "alumni", label: "Alumni" },
  { id: "innovations", label: "Innovations" },
  { id: "faqs", label: "FAQ's" },
  { id: "happenings", label: "Happenings" },
];

export default function DepartmentHeader({ className }) {
  const [activeSection, setActiveSection] = useState(STATIC_SECTIONS[0].id);
  const [engineeringDropdown, setEngineeringDropdown] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(0);
  const [selectedSchoolName, setSelectedSchoolName] = useState("");
  const [selectedDepartmentName, setSelectedDepartmentName] = useState("");
  const [engineeringData, setEngineeringData] = useState([]);
  const engineeringRef = useRef(null);

  /* ================= Fetch Data ================= */

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch("/api/school-department-list");
        const json = await res.json();

        if (json.status && json.data.length > 0) {
          setEngineeringData(json.data);

          // Default first school
          setSelectedSchoolName(json.data[0].name);

          // Default first department
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

  /* ================= Close Dropdown Outside Click ================= */

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

  /* ================= Scroll Active Section ================= */

  useEffect(() => {
    const handleScroll = () => {
      STATIC_SECTIONS.forEach((section) => {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  /* ================= JSX ================= */

  return (
    <div className={styles.departmentHeaderWrapper}>
      <div className={styles.stickyHeader}>
        <nav className="containerXl">
          <div className={styles.departmentMenu}>

            {/* ===== Dropdown ===== */}
            <div className={styles.schoolDeptWrapper}>
              <div
                className={styles.schoolToggle}
                onClick={() => setEngineeringDropdown(!engineeringDropdown)}
              >
                <span>Departments Of</span>
                <span>
                  {selectedDepartmentName || selectedSchoolName}
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
                        <div
                          key={idx}
                          className={`${styles.schoolItem} ${selectedSchool === idx ? styles.active : ""
                            }`}
                          onClick={() => {
                            setSelectedSchool(idx);
                            setSelectedSchoolName(school.name);

                            // Reset department to first of selected school
                            if (school.departments?.length > 0) {
                              setSelectedDepartmentName(
                                school.departments[0].name
                              );
                            }
                          }}
                        >
                          {school.name}
                        </div>
                      ))}
                    </div>

                    {/* ===== Departments ===== */}
                    <div className={styles.departmentsList}>
                      <h6>Departments</h6>
                      {engineeringData[selectedSchool]?.departments?.map(
                        (dept, i) => (
                          <Link
                            key={i}
                            href={`/department/${dept.slug}`}
                            className={styles.departmentLink}
                            onClick={() => {
                              setSelectedDepartmentName(dept.name);
                              setEngineeringDropdown(false);
                            }}
                          >
                            {dept.name}
                          </Link>
                        )
                      )}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* ===== Static Menu ===== */}
            {STATIC_SECTIONS.map((section) => (
              <button
                key={section.id}
                className={`${styles.navItem} ${activeSection === section.id ? styles.activeNav : ""
                  }`}
                onClick={() => scrollToSection(section.id)}
              >
                {section.label}
              </button>
            ))}

          </div>
        </nav>
      </div>
    </div>
  );
}