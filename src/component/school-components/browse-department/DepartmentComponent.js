// components/school-components/DepartmentSection/index.js
"use client";
import { useEffect } from "react";
import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./department.module.css";

export default function DepartmentSection({ data }) {
  const departmentSection = data;

  // 🔹 AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className={styles.departmentSection}>
      <div className={`container ${styles.container}`}>
        <div className="grid_2">

          {/* LEFT SIDE */}
          <div className="deparCol">
            <div className={styles.leftSide}>
              <div data-aos="fade-up" data-aos-delay="100">
                <h1
                  className={`${styles.title}`}
                  dangerouslySetInnerHTML={{ __html: departmentSection.title }}
                ></h1>
                <p className={styles.description}>
                  {departmentSection.description}
                </p>
              </div>

              <div data-aos="fade-up" data-aos-delay="300">
                <h3 className={styles.programsCount}>
                  {departmentSection.programs_count}
                </h3>
                <p className={styles.programsText}>
                  {departmentSection.programs_text}
                </p>
                <div className="depar-button">
                  <Link href={`/programs`}>
                    <button className={styles.viewAllButton}>
                      VIEW ALL PROGRAMMES <GoArrowRight />
                    </button>
                  </Link>

                  <Link href={`/apply-now`}>
                    <button className={styles.applyButton}>APPLY NOW</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="deparCol">

            {/* Program Cards */}
            <div className="row mb-5">
              {departmentSection.programs.map((prog, index) => (
                <div
                  className="col-md-4 mb-4"
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
                      <div className={styles.gradientOverlay}></div>
                      <h3 className={styles.cardTitle}>{prog.name}</h3>
                      <div className={styles.cardArrow}>
                        <SlArrowRightCircle fontWeight={300} />
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            {/* Browse by Department */}
            <div
              className={styles.browseHeader}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <p className="m-0">BROWSE BY DEPARTMENT</p>
              <span className={styles.browseLine} />
            </div>

            <hr className={styles.divider} data-aos="fade-up" data-aos-delay="700" />

            <div className="row g-2">
              {departmentSection.departments.map((dept, index) => (
                <div
                  className="col-xl-4 col-lg-6 col-sm-12"
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={800 + index * 100}
                >
                  <Link
                    href={`/department/${dept.slug}`}
                    className={styles.departmentItem}
                  >
                    <span>{dept.name}</span>
                    <span className={styles.departmentArrow}>
                      <SlArrowRightCircle />
                    </span>
                  </Link>
                </div>
              ))}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
