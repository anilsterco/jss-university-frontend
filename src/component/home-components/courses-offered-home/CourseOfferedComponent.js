"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { FaChevronRight } from "react-icons/fa";
import { PiArrowCircleRightThin } from "react-icons/pi";
import styles from "./courses-offered.module.css";
import { APPLY_NOW, WEB_URL } from "@/config/config";


export const Counter = ({ start = 1, end = 200, duration = 2000 }) => {
  const [count, setCount] = useState(start);

  useEffect(() => {
    let startTime = null;

    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);

      const value = Math.floor(start + (end - start) * progress);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [start, end, duration]);

  return <>{count.toLocaleString("en-IN")}</>;
};
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
  academic_year: {
    year: `<span class="dark-blue-text ">Admission</span><span class="blue-text"> 2026-27</span>`,
    description: "Sed ut perspiciatis unde omnis",
  },
  buttons: [{ text: "Apply Now", url: APPLY_NOW }],
};

export default function CoursesOffered({ data }) {
  const coursesData = data ? data : dummyCoursesData;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const searchRef = useRef(null);


  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      setHasSearched(false);
      return;
    }

    const delay = setTimeout(() => {
      setHasSearched(true);
      setLoading(true);
      fetch(`/api/courses/search?search=${query}`)
        .then((res) => res.json())
        .then((data) => setResults(data?.data || []))
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(delay);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setResults([]);
        setHasSearched(false);
        // keeps the query text intact, just hides dropdown
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <section className={`second-section cource-sec ${styles.secondSection}`}>
      <div className="container">
        <div className={`cource_top ${styles.topSection}`}>
          {/* LEFT CONTENT */}
          <div className="cource_col">
            <h5
              className={styles.topSectionH5}
              // data-aos="fade-up"
              // data-aos-delay="0"
            >
              {coursesData.subtitle}
            </h5>

            <h2
              className={`fw-bold ${styles.topSectionH1}`}
              dangerouslySetInnerHTML={{ __html: coursesData.title }}
              // data-aos="fade-up"
              // data-aos-delay="100"
            />

            <p
              className={styles.showOnlyMobileSubHeading}
              // data-aos="fade-up"
              // data-aos-delay="200"
            >
              {coursesData.programs_text}
            </p>

            {/* SEARCH */}
            <div
              className="search-wrapper position-relative"
              // data-aos="fade-up"
              // data-aos-delay="300"
              ref={searchRef}
            >
              <div className="input-group programs_search overflow-hidden">
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search Programmes"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  style={{ padding: "10px 16px" }}
                />
                <span className="input-group-text bg-white border-0">
                  <img src="images/home-page/icon-search.svg" alt="search" />
                </span>
              </div>

              {query && (
                <div className="search-results">
                  {loading ? (
                    <div className="loading">Searching...</div>
                  ) : results.length ? (
                    results.map((item) => (
                      <div className="search-item" key={item.id}>
                        <Link
                          href={`/programs/${item.slug}`}
                          className="search-link"
                          onClick={() => {
                            setResults([]);
                            setQuery("");
                          }}
                        >
                          {item.name}
                        </Link>
                      </div>
                    ))
                  ) : (
                    hasSearched && (
                      <div className="no-results">No Programs found</div>
                    )
                  )}
                </div>
              )}
            </div>

            {/* COUNT */}
            <div
              className={`d-flex align-items-center ${styles.programsCountSection}`}
              // data-aos="fade-up"
              // data-aos-delay="400"
            >
              <div className={`program-hide ${styles.programsCountWrapper}`}>
                <h2
                  className={`display-4 programs-count ${styles.programsCount}`}
                >
                  <Counter start={1} end={coursesData.programs_count} duration={2500} />
                  <span className={styles.programsCountPlus}>+</span>
                </h2>
              </div>

              <p className={`program-hide ${styles.programsText}`}>
                {coursesData.programs_text}
              </p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className={`cource_col ${styles.programsCardsSection}`}>
            {coursesData.programs.map((level, i) => (
              <Link
                key={i}
                href={{
                  pathname: "/programs",
                  query: {
                    type: level.slug.toLowerCase().replace(/\s+/g, "-"),
                  },
                }}
                className="second-section-cards-image position-relative"
                // data-aos="fade-up"
                // data-aos-delay={i * 150}
              >
                <Image
                  src={level.image}
                  alt="slide image"
                  width={302}
                  height={389}
                  className={styles.cardImage}
                />

                <div className={styles.cardOverlay}>
                  <span
                    className={`banner-label d-flex align-items-center gap-2 ${styles.bannerLabel}`}
                  >
                    {level.name_short}
                    <img
                      src="images/home-page/course_list_icon.svg"
                      alt="slide image"
                      className={styles.cardIcons}
                    />
                    <PiArrowCircleRightThin
                      className={styles.rightMobileArrow}
                    />
                  </span>
                </div>
              </Link>
            ))}
            <div className={`course-items ${styles.showOnlyMobileCard}`}>
              <Link
                href={WEB_URL + "programs"}
                className={styles.exploreAllLink}
              >
                <div className={styles.lastCardContentSection}>
                  <p>Explore All</p>
                  <h2
                    className={`blue-text counter_heading ${styles.counter_heading}`}
                  >
                    <Counter start={1} end={coursesData.programs_count} duration={2500} />+
                  </h2>
                  <h5>ACADEMIC PROGRAMS</h5>
                </div>
                <div className={styles.lastCardArrow}>
                  <PiArrowCircleRightThin fontSize={20} color="#16344E" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM SECTION ================= */}
        <div className="program_heading">
          <h6 className={` ${styles.bottomSectionH6}`}>
            Explore Programs by School of
          </h6>
        </div>
        <div
          className={`programsList_row align-items-center program-row ${styles.exploreProgramSectionWrapper}`}
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="programs_col">
            <div className={`explore-program-section ${styles.schoolsList}`}>
              {coursesData.departments?.slice(0, 6).map((school, i) => (
                <Link
                  key={i}
                  href={`${WEB_URL}schools/${school.slug}/programs`}
                  className="d-flex justify-content-between align-items-center"
                >
                  {school.short_name}
                  <FaChevronRight fontSize={8} color="#16344ec4" />
                </Link>
              ))}
            </div>
          </div>
          <div
            className={`programs_col admission_btn ${styles.admissionSection}`}
            data-aos="fade-up"
            data-aos-delay="350"
          >
            <div className="addmission-col">
              <h4
                className="add-item"
                dangerouslySetInnerHTML={{
                  __html: coursesData.academic_year.year,
                }}
              />
              <p className="small">{coursesData.academic_year.description}</p>
            </div>

            <div className="add_btn">
              <Link
                href={coursesData.buttons[0].url}
                className="btn btn-warning CTA_Applynow"
                target="_blank"
              >
                {coursesData.buttons[0].text}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
