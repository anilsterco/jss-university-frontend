"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaChevronRight } from "react-icons/fa";
import { PiArrowCircleRightThin } from "react-icons/pi";
import styles from "./courses-offered.module.css";

const dummyCoursesData = {
  title:
    '<span class="blue-text">Start Your</span> <span class="dark-blue-text ">JSS Journey</span>',
  subtitle: "Courses Offered",
  programs_count: "200",
  programs_text: "academic programs and pave the way to your ideal future.",
  programs: [
    {
      image: "/images/home-page/second-section-banner.png",
      name_short: "UG",
      slug: "/",
    },
    {
      image: "/images/home-page/second-section-banner.png",
      name_short: "PG",
      slug: "/",
    },
    {
      image: "/images/home-page/second-section-banner.png",
      name_short: "PHD",
      slug: "/",
    },
  ],
  departments: [
    { short_name: "Engineering", slug: "#" },
    { short_name: "Pharmacy", slug: "#" },
    { short_name: "Management", slug: "#" },
    { short_name: "Computer Applications", slug: "#" },
    { short_name: "Applied Sciences", slug: "#" },
    { short_name: "Humanities", slug: "#" },
  ],
  admission: { year: "2025-26", desc: "Sed ut perspiciatis unde omnis" },
  academic_year: {
    year: `<span class="dark-blue-text ">Admission</span><span class="blue-text"> 2025-26</span>`,
    description: "Sed ut perspiciatis unde omnis",
  },
  buttons: [
    { text: "Apply Now", url: "https://project-demo.in/jss/api/homepage" },
  ],
};

export default function CoursesOffered({ data }) {
  const coursesData = data ? data : dummyCoursesData;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false); // New state to track if search has been performed

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setLoading(false);
      setHasSearched(false);
      return;
    }

    const delayDebounce = setTimeout(() => {
      setHasSearched(true);
      setLoading(true);
      searchCourses(query);
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [query]);

  const searchCourses = async (keyword) => {
    try {
      const response = await fetch(
        `https://project-demo.in/jss/api/courses/search?search=${keyword}`
      );
      const data = await response.json();

      setResults(data?.data || []);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const ProgramsCount = () => (
    <div className={`program-hide ${styles.programsCountWrapper}`} >
      <h1 className={`display-4 programs-count ${styles.programsCount}`}>
        {coursesData.programs_count}
      </h1>
      <span className={styles.programsCountPlus}>+</span>
    </div>
  );

  return (
    <section className={`second-section cource-sec ${styles.secondSection}`}>
      <div className="container">
        <div className={`row cource_top ${styles.topSection}`}>
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className={`${styles.topSectionH5}`}>{coursesData.subtitle}</h5>
            <h1
              className={`fw-bold ${styles.topSectionH1}`}
              dangerouslySetInnerHTML={{ __html: coursesData.title }}
            ></h1>
            <p className={styles.showOnlyMobileSubHeading}>
              {coursesData.programs_text}
            </p>

            <div className="search-wrapper position-relative">
              <div
                className={`input-group shadow-sm rounded-pill overflow-hidden`}
              >
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search Course"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <span className="input-group-text bg-white border-0">
                  <img
                    src="images/home-page/icon-search.svg"
                    className="img-fluid"
                    alt="search"
                  />
                </span>
              </div>

              {query.trim() !== "" && (
                <div className="search-results">
                  {loading ? (
                    <div className="loading">
                      <div className="d-flex align-items-center justify-content-center">
                        <div className="spinner-border spinner-border-sm me-2" role="status">
                          <span className="visually-hidden">Loading...</span>
                        </div>
                        <span>Searching...</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      {results.length > 0 ? (
                        results.map((item) => (
                          <div className="search-item" key={item.id}>
                            <Link href={`/programs/${item.slug}`} className="search-link">
                              {item.name}
                            </Link>
                          </div>
                        ))
                      ) : (
                        hasSearched && (
                          <div className="no-results">No courses found</div>
                        )
                      )}
                    </>
                  )}
                </div>
              )}
            </div>

            {/* Programs count */}
            <div
              className={`d-flex align-items-center ${styles.programsCountSection}`}
            >
              <ProgramsCount />
              <p className={styles.programsText}>{coursesData.programs_text}</p>
            </div>
          </div>

          {/* Right side cards */}
          <div
            className={`col-lg-8 d-flex gap-3 ${styles.programsCardsSection}`}
          >
            {coursesData.programs.map((level, i) => (
              <Link
                href={`/programs`}
                key={i}
                className="second-section-cards-image position-relative"
              >
                <Image
                  src={level.image}
                  alt="slide image"
                  width={200}
                  height={300}
                  className={styles.cardImage}
                  priority
                />
                <div className={styles.cardOverlay}>
                  <span
                    className={`banner-label d-flex align-items-center gap-2 ${styles.bannerLabel}`}
                  >
                    {level.name_short}
                    <FaChevronRight
                      fontSize={15}
                      color="#b08f29"
                      className={styles.rightDesktopArrow}
                    />
                    <PiArrowCircleRightThin
                      fontSize={20}
                      color="#fff"
                      className={styles.rightMobileArrow}
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div
          className={`row align-items-center program-row m-auto ${styles.exploreProgramSectionWrapper}`}
        >
          <div className="col-lg-8">
            <h6 className={`fw-bold ${styles.bottomSectionH6}`}>
              Explore Programs by School of
            </h6>
            <div
              className={`d-flex flex-wrap explore-program-section gap-3 ${styles.schoolsList}`}
            >
              {coursesData.departments.map((school, i) => (
                <Link
                  href={`/schools/${school.slug}`}
                  key={i}
                  className=" d-flex justify-content-between align-items-center"
                >
                  {school.short_name}{" "}
                  <FaChevronRight fontSize={10} color="#16344ec4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Admission section */}
          <div
            className={`col-lg-4 d-flex gap-5 align-items-center ${styles.admissionSection}`}
          >
            <div className="addmission-col">
              <h4
                className="fw-bold add-item"
                dangerouslySetInnerHTML={{
                  __html: coursesData.academic_year.year,
                }}
              ></h4>
              <p className="small">{coursesData.academic_year.description}</p>
            </div>
            {coursesData.buttons[0].url && (
              <Link
                href={coursesData.buttons[0].url}
                className="btn btn-warning rounded-pill"
              >
                {coursesData.buttons[0].text}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}