"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IoChevronDownOutline, IoMenu, IoClose } from "react-icons/io5";
import styles from "./DepartmentHeader.module.css";
import "@/styles/custom.style.css";
import { BASE_URL, WEB_URL } from "@/config/config";
import { Skeleton } from "@/component/common/skeleton/Skeleton";

// Converts slug to readable label while API loads
// e.g. "computer-science-and-engineering-it" → "Computer Science And Engineering It"
const slugToLabel = (slug) =>
  slug
    ?.split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ") || "";

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
  const [loading, setLoading] = useState(true);

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
        const res = await fetch(`${BASE_URL}school-department-list`);
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
              setSelectedSchoolName(matchedSchool.name_short);
              setHoveredDepartments(matchedSchool.departments || []);
              setSelectedDepartmentName("");
            } else {
              setSelectedSchoolName(json.data[0].name_short);
              setHoveredDepartments(json.data[0].departments || []);
            }
          } else {
            // Department page — find which school contains the current department slug
            let matchedSchoolIdx = 0;
            let matchedDeptName = "";

            for (let i = 0; i < json.data.length; i++) {
              const dept = json.data[i].departments?.find(
                (d) => d.slug === currentSlug,
              );
              if (dept) {
                matchedSchoolIdx = i;
                matchedDeptName = dept.name;
                break;
              }
            }

            setSelectedSchool(matchedSchoolIdx);
            setSelectedSchoolName(json.data[matchedSchoolIdx].name);
            setHoveredSchool(matchedSchoolIdx);
            setHoveredDepartments(
              json.data[matchedSchoolIdx].departments || [],
            );
            setSelectedDepartmentName(matchedDeptName);
          }
        }
      } catch (err) {
        console.error("API Error:", err);
      } finally {
        setLoading(false);
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

  const dropdownLabel =
    isSchoolPage && pathParts[2] !== "college-of-pharmacy"
      ? "School of"
      : pathParts[2] == "college-of-pharmacy"
        ? "College of"
        : "Department of";

  const displayName = isSchoolPage
    ? selectedSchoolName
    : selectedDepartmentName || selectedSchoolName;

  // While API loads, derive a readable label from the URL slug
  const fallbackLabel = slugToLabel(currentSlug);

  // Replace the static Home Link with this:
  const homeHref =
    currentPage === "schools"
      ? `/schools/${currentSlug}`
      : currentPage === "department"
        ? `/department/${currentSlug}`
        : WEB_URL;

  // Home is active when there's no program segment in the URL
  const isHomeActive = !currentProgram;

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
                <span style={{ fontWeight: "normal" }}>{dropdownLabel}</span>
                <span>
                  <span className={styles.selectedName}>
                    {loading ? (
                      <Skeleton width="100px" height="20px" />
                    ) : (
                      displayName || fallbackLabel
                    )}
                  </span>
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
              <Link
                href={homeHref}
                onClick={() => setMobileMenuOpen(false)}
                className={`${styles.navItem} ${isHomeActive ? styles.activeNav : ""}`}
              >
                Home
              </Link>
              {data?.map((section, idx) => (
                <Link
                  key={idx}
                  href={WEB_URL + currentPage + "/" + section.slug}
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
