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

export default function DepartmentSection({ data }) {
  const departmentSection = data;

  return (
    <div className={styles.departmentSection}>
      <div className={`container ${styles.container}`}>
        <div className={`${styles.courseRow}`}>
          <div className="deparCol">
            <div className={styles.leftSide}>
              <div data-aos="fade-up" data-aos-delay="100">
                <span className={styles.smallHeadline}>COURSES OFFERED</span>
                <h1
                  className={`${styles.title}`}
                  dangerouslySetInnerHTML={{ __html: departmentSection.title }}
                ></h1>

                <div
                  className="search-wrapper position-relative"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <div className="input-group programs_search overflow-hidden">
                    <input
                      type="text"
                      className="form-control border-0"
                      placeholder="Search Course"
                    />
                    <span className="input-group-text bg-white border-0">
                      <img
                        src="/images/home-page/icon-search.svg"
                        alt="search"
                      />
                    </span>
                  </div>
                </div>

                <div
                  className={`d-flex align-items-center ${styles.programsCountSection}`}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <div
                    className={`program-hide ${styles.programsCountWrapper}`}
                  >
                    <h1 className={`display-4 ${styles.programsCount}`}>
                      {departmentSection.programs_count}
                      <sup className={styles.Plusicon}>+</sup>
                    </h1>
                  </div>

                  <p className={`program-hide ${styles.programsText}`}>
                    {departmentSection.description}
                  </p>
                </div>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <div className="depar-button">
                  <Link href={`/programs`}>
                    <button className={styles.viewAllButton}>
                      VIEW ALL PROGRAMMES <GoArrowRight />
                    </button>
                  </Link>
                </div>
              </div>
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
                <h2>
                  Admission <span> 2025-26</span>
                </h2>
                <p>Sed ut perspiciatis unde omnis</p>
              </div>
              <Link href={`/apply-now`} className=" btn btn-warning">
                Apply Now
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.departSec}>
          <div
            className={styles.browseHeader}
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <p>BROWSE BY</p>
            <h2>
              DEPARTMENT OF <span>PHARMACY</span>
            </h2>
          </div>

          <div className={styles.departmentRow}>
            {departmentSection.departments?.slice(0, 4).map((dept, index) => (
              <div
                className={styles.departmentCol}
                key={index}
                data-aos="fade-up"
              >
                <Image
                  src="/images/custom-page/departPla.webp"
                  alt="Dummy Department"
                  width={330}
                  height={330}
                  className={styles.departmentImage}
                />
                <div className={styles.departData}>
                  <h4>{dept.name}</h4>
                  <SlArrowRightCircle className={styles.departmentArrow} />
                </div>
                <Link
                  href={`/department/${dept.slug}`}
                  className={styles.fullLink}
                  aria-label={dept.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
