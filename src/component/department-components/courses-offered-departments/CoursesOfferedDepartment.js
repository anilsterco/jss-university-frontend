"use client";

import styles from "./courses-offered.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { APPLY_NOW, BASE_URL, WEB_URL } from "@/config/config";
import { usePathname } from "next/navigation";
import { GoArrowRight } from "react-icons/go";

const CoursesOffered = ({ data }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const pathname = usePathname();
  const departmentSlug = pathname.split("/").filter(Boolean).pop();

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    if (!query) return;

    const delay = setTimeout(() => {
      setHasSearched(true);
      setLoading(true);
      fetch(
        `${BASE_URL}courses/search-by-department/${departmentSlug}?search=${encodeURIComponent(query)}`,
      )
        .then((res) => res.json())
        .then((data) => setResults(data?.data || []))
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(delay);
  }, [query, departmentSlug]);

  return (
    <>
    
    {data?.programs &&
      data.programs.length > 0 && (
        <section
          className={`second-section cource-sec ${styles.secondSection}`}
        >
          <div className="container">
            <div
              className={`cource_top ${styles.topSection} program_section_${data.programs.length}`}
            >
              <div className={`cource_col ${styles.left_col}`}>
                <h5 className={styles.topSectionH5} data-aos="fade-up">
                  Programs Offered
                </h5>
                {data?.title && (
                  <h1
                    className={`fw-bold ${styles.topSectionH1}`}
                    data-aos="fade-up"
                    data-aos-delay="100"
                    dangerouslySetInnerHTML={{ __html: data?.title }}
                  />
                )}
                {data?.desc && (
                  <p
                    className={styles.showOnlyMobileSubHeading}
                    data-aos="fade-up"
                    data-aos-delay="200"
                    dangerouslySetInnerHTML={{ __html: data.desc }}
                  />
                )}

                {/* SEARCH */}
                {data?.course_count && data.course_count > 0 ? (
                  <div
                    className="search-wrapper position-relative"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="input-group programs_search overflow-hidden">
                      <input
                        type="text"
                        className="form-control border-0"
                        placeholder="Search Programs"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        style={{ padding: "10px 20px" }}
                      />

                      <span className="input-group-text bg-white border-0">
                        <img
                          src="/images/home-page/icon-search.svg"
                          alt="search"
                        />
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
                              >
                                {item.name}
                              </Link>
                            </div>
                          ))
                        ) : (
                          hasSearched && (
                            <div className="no-results">
                              No Programe found
                            </div>
                          )
                        )}
                      </div>
                    )}
                  </div>
                ) : null}

                {/* COUNT */}
                {data?.course_count && data.course_count > 0 ? (
                  <div
                    className={`d-flex align-items-center ${styles.programsCountSection}`}
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div
                      className={`program-hide ${styles.programsCountWrapper}`}
                    >
                      <h1 className={`display-4 ${styles.programsCount}`}>
                        {data.course_count}
                      </h1>

                      <span className={styles.programsCountPlus}>+</span>
                    </div>

                    {data?.desc && (
                      <p
                        className={`program-hide ${styles.programsText}`}
                        dangerouslySetInnerHTML={{ __html: data.desc }}
                      />
                    )}
                  </div>
                ) : null}

                {/* VIEW ALL BUTTON */}
                {data?.course_count && data.course_count > 0 ? (
                  <div data-aos="fade-up" data-aos-delay="300">
                    <div className={styles.programButton}>
                      <Link
                        href={`${
                          WEB_URL + "department/" + departmentSlug
                        }/programs`}
                        className={styles.link}
                      >
                        VIEW ALL PROGRAMES <GoArrowRight />
                      </Link>
                    </div>
                  </div>
                ) : null}
              </div>

              {/* RIGHT CARDS */}
              <div className={`right_col ${styles.rightCol}`}>
                <div
                  className={`cource_col ${styles.programsCardsSection} programs-${data.programs.length}`}
                >
                  {/* PROGRAMS */}
                  {data?.programs &&
                    data.programs.map((program, programIdx) => (
                      <Link
                        key={programIdx}
                        href={`${WEB_URL}programs?type=${program.slug}&department_id=${program.department_id}`}
                        className="second-section-cards-image position-relative"
                        data-aos="fade-up"
                        data-aos-delay="0"
                      >
                        <Image
                          src={program.image}
                          alt={program.name}
                          width={252}
                          height={387}
                          className={styles.cardImage}
                        />

                        <div className={styles.cardOverlay}>
                          <span
                            className={`banner-label d-flex align-items-center gap-2 ${styles.bannerLabel}`}
                          >
                            {program.name_short}

                            <img
                              src="/images/home-page/course_list_icon.svg"
                              alt="icon"
                              className={styles.cardIcons}
                            />

                            <PiArrowCircleRightThin
                              className={styles.rightMobileArrow}
                            />
                          </span>
                        </div>
                      </Link>
                    ))}
                </div>

                {(data?.academic_year_desc || data?.course_text) && (
                  <div className={`add_btn ${styles.admistion_heading}`}>
                    <div className={styles.admiCol}>
                      {data?.academic_year_desc && (
                        <h2>
                          Admission{" "}
                          <span>{data?.academic_year_desc}</span>
                        </h2>
                      )}

                      {data?.course_text && (
                        <p>{data?.course_text}</p>
                      )}
                    </div>

                    <Link
                      href={APPLY_NOW}
                      className={`btn btn-warning ${styles.applyNow} CTA_Applynow`}
                      target="_blank"
                    >
                      Apply Now
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      )}
  </>
  );
};

export default CoursesOffered;
