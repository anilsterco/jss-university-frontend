"use client";

import styles from "./courses-offered.module.css";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiArrowCircleRightThin } from "react-icons/pi";

const CoursesOffered = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className={`second-section cource-sec ${styles.secondSection}`}>
      <div className="container">
        <div className={`cource_top ${styles.topSection}`}>
          {/* LEFT CONTENT */}
          <div className="cource_col">
            {data?.subtitle && (
              <h5 className={styles.topSectionH5} data-aos="fade-up">
                {data.subtitle}
              </h5>
            )}

            <h1
              className={`fw-bold ${styles.topSectionH1}`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Start Your <span>JSS Journey</span>
            </h1>

            <p
              className={styles.showOnlyMobileSubHeading}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Explore our academic programs and pave the way to your ideal
              future.
            </p>

            {/* SEARCH (STATIC UI) */}
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
                  <img src="/images/home-page/icon-search.svg" alt="search" />
                </span>
              </div>
            </div>

            {/* COUNT */}
            <div
              className={`d-flex align-items-center ${styles.programsCountSection}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className={`program-hide ${styles.programsCountWrapper}`}>
                <h1 className={`display-4 ${styles.programsCount}`}>200</h1>
                <span className={styles.programsCountPlus}>+</span>
              </div>
              <p className={`program-hide ${styles.programsText}`}>
                academic programs and pave the way to your ideal future.
              </p>
            </div>
          </div>

          {/* RIGHT CARDS */}
          <div className={`cource_col ${styles.programsCardsSection}`}>
            {/* Undergraduate */}
            <Link
              href="#"
              className="second-section-cards-image position-relative"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Image
                src="/images/school-page/course01.webp"
                alt="Undergraduate Programs"
                width={252}
                height={387}
                className={styles.cardImage}
              />

              <div className={styles.cardOverlay}>
                <span
                  className={`banner-label d-flex align-items-center gap-2 ${styles.bannerLabel}`}
                >
                  UG
                  <img
                    src="/images/home-page/course_list_icon.svg"
                    alt="icon"
                    className={styles.cardIcons}
                  />
                  <PiArrowCircleRightThin className={styles.rightMobileArrow} />
                </span>
              </div>
            </Link>

            <Link
              href="#"
              className="second-section-cards-image position-relative"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <Image
                src="/images/school-page/course02.webp"
                alt="Undergraduate Programs"
                width={252}
                height={387}
                className={styles.cardImage}
              />

              <div className={styles.cardOverlay}>
                <span
                  className={`banner-label d-flex align-items-center gap-2 ${styles.bannerLabel}`}
                >
                  PHD
                  <img
                    src="/images/home-page/course_list_icon.svg"
                    alt="icon"
                    className={styles.cardIcons}
                  />
                  <PiArrowCircleRightThin className={styles.rightMobileArrow} />
                </span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesOffered;
