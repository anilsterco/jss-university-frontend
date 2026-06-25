// components/school-components/DepartmentSection/index.js
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiArrowCircleRightThin } from "react-icons/pi";
import styles from "./department.module.css";
import { usePathname } from "next/navigation";
import { APPLY_NOW, BASE_URL, WEB_URL } from "@/config/config";

export default function DepartmentSection({
  data,
  departments,
  schoolName,
  schoolSlug,
}) {
  const departmentSection = data;

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [programsCount, setProgramsCount] = useState(0);

  const pathname = usePathname();
  const pathParts = pathname.split("/").filter(Boolean);

  const pageType = pathParts[0];
  const departmentSlug = pathParts[1];

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    if (!query) return;

    const delay = setTimeout(() => {
      setHasSearched(true);
      setLoading(true);
      fetch(
        `${BASE_URL}courses/search-by-school/${departmentSlug}?search=${encodeURIComponent(query)}`,
      )
        .then((res) => res.json())
        .then((data) => setResults(data?.data || []))
        .catch(() => setResults([]))
        .finally(() => setLoading(false));
    }, 300);

    return () => clearTimeout(delay);
  }, [query, departmentSlug]);

  return (
    <div className={styles.departmentSection}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.courseRow}  ${departments?.length == 0 ? styles.bottom_space : ''}`}>
          <div className="deparCol">
            <div className={styles.leftSide}>
              <div data-aos="fade-up" data-aos-delay="100">
                <span className={styles.smallHeadline}>PROGRAMME OFFERED</span>
                <h1
                  className={`${styles.title}`}
                  dangerouslySetInnerHTML={{ __html: departmentSection.title }}
                ></h1>

                {departmentSection?.programs_count &&
                  departmentSection.programs_count.length > 0 && (
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
                                No Programme found
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>
                  )}

                <div
                  className={`d-flex align-items-center ${styles.programsCountSection}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div
                    className={`program-hide ${styles.programsCountWrapper}`}
                  >
                    <h1 className={`display-4 ${styles.programsCount}`}>
                      {departmentSection?.programs_count
                        ? departmentSection.programs_count
                        : "0"}
                      {departmentSection?.programs_count && (
                        <sup className={styles.Plusicon}>+</sup>
                      )}
                    </h1>
                  </div>

                  <p className={`program-hide ${styles.programsText}`}>
                    {departmentSection.description}
                  </p>
                </div>
              </div>

              {departmentSection.programs_count > 0 && (
                <div data-aos="fade-up" data-aos-delay="300">
                  <div className="depar-button">
                    <Link
                      href={`${WEB_URL + pageType + "/" + departmentSlug}/programs`}
                    >
                      <button className={styles.viewAllButton}>
                        VIEW ALL PROGRAMES <GoArrowRight />
                      </button>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="deparCol">
            <div className={styles.courseItemsRow}>
              {departmentSection.programs.map((prog, index) => (
                <div
                  className="courseItemsCol"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <Link
                    href={{
                      pathname: "/programs",
                      query: {
                        type: prog.slug.toLowerCase().replace(/\s+/g, "-"),
                        school_id: prog?.school_id
                          ? prog.school_id
                          : prog?.department_id,
                      },
                    }}
                  >
                    <div
                      className={`card text-white border-0 position-relative ${styles.programCard}`}
                    >
                      <Image
                        src={prog.image}
                        alt={prog.name}
                        width={350}
                        height={476}
                        className={` ${styles.cardImage}`}
                        priority
                      />

                      <div className={styles.cardOverlay}>
                        <span
                          className={`banner-label d-flex align-items-center gap-2 ${styles.bannerLabel}`}
                        >
                          {prog.name}
                          <img
                            src="/images/home-page/course_list_icon.svg"
                            alt="icon"
                            className={styles.cardIcons}
                          />
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className={`add_btn ${styles.admistion_heading}`}>
              <div className={styles.admiCol}>
                {departmentSection?.academic_year && (
                  <h2>
                    Admission <span>{departmentSection.academic_year}</span>
                  </h2>
                )}

                {departmentSection?.programs_text && (
                  <p>{departmentSection.programs_text}</p>
                )}
              </div>
              <Link
                href={APPLY_NOW}
                className=" btn btn-warning CTA_Applynow"
                target="_blank"
                aria-label="Apply Now"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        {departments?.length > 0 && (
          <div className={styles.departSec}>
            <div
              className={styles.browseHeader}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <p>BROWSE BY</p>
              <h2>
                {(() => {
                  const isPharmacy = (departmentSlug == 'college-of-pharmacy')
                  const words = isPharmacy ? schoolName?.split(" ") || [] : schoolName.replace('School of ', '');
                  const last = isPharmacy ? words.pop() : null;

                  return (
                    <>
                      Departments
                       {/* of <span>{isPharmacy ? last : words}</span> */}
                    </>
                  );
                })()}
              </h2>
            </div>

            <div className={styles.departmentRow}>
              {departments?.map((dept, index) => (
                <div
                  className={styles.departmentCol}
                  key={index}
                  data-aos="fade-up"
                >
                  <Link href={`/department/${dept.slug}`}>
                    <Image
                      src={dept.image}
                      alt={dept.name}
                      width={330}
                      height={330}
                      className={styles.departmentImage}
                    />
                    <div className={styles.departData}>
                      <h4>{dept.name}</h4>
                      <SlArrowRightCircle className={styles.departmentArrow} />
                    </div>
                  </Link>
                  {/* <Link
                    href={`/department/${dept.slug}`}
                    className={styles.fullLink}
                    aria-label={dept.name}
                  /> */}
                </div>
              ))}
            </div>
          </div>
        )}

        
      </div>
    </div>
  );
}
