"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChevronDownOutline, IoMenu, IoClose } from "react-icons/io5";
import styles from "./DepartmentHeader.module.css";
import "@/styles/custom.style.css";

export default function DepartmentHeader({ className, data }) {
  const [activeSection, setActiveSection] = useState(data?.[0]?.slug);
  const [engineeringDropdown, setEngineeringDropdown] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(0);
  const [selectedSchoolName, setSelectedSchoolName] = useState("");
  const [selectedDepartmentName, setSelectedDepartmentName] = useState("");
  const [engineeringData, setEngineeringData] = useState([]);
  const [hoveredSchool, setHoveredSchool] = useState(0);
  const [hoveredDepartments, setHoveredDepartments] = useState([]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const engineeringRef = useRef(null);
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const currentPage = pathParts[1]; // "schools" or "department"
  const currentSlug = pathParts[2];
  const currentProgram = pathParts[3];

  const isSchoolPage = currentPage === "schools";

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch("/api/school-department-list");
        const json = await res.json();

        if (json.status && json.data.length > 0) {
          setEngineeringData(json.data);

          if (isSchoolPage && currentSlug) {
            const matchedSchoolIdx = json.data.findIndex(
              (s) => s.slug === currentSlug,
            );

            if (matchedSchoolIdx !== -1) {
              const matchedSchool = json.data[matchedSchoolIdx];
              setSelectedSchool(matchedSchoolIdx);
              setHoveredSchool(matchedSchoolIdx);
              setSelectedSchoolName(matchedSchool.name);
              setHoveredDepartments(matchedSchool.departments || []);
              setSelectedDepartmentName("");
            } else {
              setSelectedSchoolName(json.data[0].name);
              setHoveredDepartments(json.data[0].departments || []);
            }
          } else {
            setSelectedSchoolName(json.data[0].name);
            setHoveredSchool(0);
            setHoveredDepartments(json.data[0].departments || []);

            if (json.data[0].departments?.length > 0) {
              setSelectedDepartmentName(json.data[0].departments[0].name);
            }
          }
        }
      } catch (err) {
        console.error("API Error:", err);
      }
    };
    fetchSchools();
  }, [isSchoolPage, currentSlug]);

  /* ================= Click Outside ================= */
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const dropdownLabel = isSchoolPage ? "Schools Of" : "Departments Of";

  const displayName = isSchoolPage
    ? selectedSchoolName
    : selectedDepartmentName || selectedSchoolName;

  return (
    <div className={`${styles.departmentHeaderWrapper} ${className}`}>
      <div className={styles.stickyHeader}>
        <nav className="containerXl">
          <div className={styles.departmentMenu}>
            <div className={styles.schoolDeptWrapper}>
              <div
                className={styles.schoolToggle}
                onClick={() => setEngineeringDropdown(!engineeringDropdown)}
              >
                <span>{dropdownLabel}</span>
                <span>
                  <span className={styles.selectedName}>{displayName}</span>
                  <IoChevronDownOutline />
                </span>
              </div>
              <div className={styles.mobileToggle}>
                <button
                  className={styles.hamburgerBtn}
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  {mobileMenuOpen ? <IoClose /> : <IoMenu />}
                </button>
              </div>

              {engineeringDropdown && engineeringData.length > 0 && (
                <div
                  className={styles.engineeringDropdownContainer}
                  ref={engineeringRef}
                >
                  <div className={styles.engineeringDropdown}>
                    <div className={styles.schoolsList}>
                      <h6>Schools</h6>
                      {engineeringData.map((school, idx) => (
                        <Link
                          key={idx}
                          href={`/schools/${school.slug}`}
                          className={`${styles.schoolItem} ${
                            (isSchoolPage && school.slug === currentSlug) ||
                            hoveredSchool === idx
                              ? styles.active
                              : ""
                          }`}
                          onMouseOver={() => {
                            setHoveredSchool(idx);
                            setHoveredDepartments(school.departments || []);
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
                            className={`${styles.departmentLink} ${
                              !isSchoolPage && dept.slug === currentSlug
                                ? styles.active
                                : ""
                            }`}
                            onClick={() => {
                              setSelectedSchool(hoveredSchool);
                              setSelectedSchoolName(
                                engineeringData[hoveredSchool].name,
                              );
                              setSelectedDepartmentName(dept.name);
                              setEngineeringDropdown(false);
                              setMobileMenuOpen(false);
                            }}
                          >
                            {dept.name}
                          </Link>
                        ))
                      ) : (
                        <p className={styles.noDept}>
                          No departments available
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div
              className={`${styles.navLinksWrapper} ${
                mobileMenuOpen ? styles.open : ""
              }`}
            >
              {data.map((section) => (
                <Link
                  key={section.title}
                  href={
                    "/" + currentPage + "/" + currentSlug + "/" + section.slug
                  }
                  className={`${styles.navItem} ${
                    section.slug.includes(currentProgram)
                      ? styles.activeNav
                      : ""
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {section.title}
                </Link>
              ))}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
