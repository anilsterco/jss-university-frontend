// components/school-components/DepartmentSection/index.js
"use client";
import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
import Link from "next/link";
import styles from "./department.module.css";
import { GoArrowRight } from "react-icons/go";

export default function DepartmentSection({ data }) {
  const departmentSection = data;

  return (
    <div className={styles.departmentSection}>
      <div className={`container ${styles.container}`}>
        <div className="grid_2">
          {/* LEFT SIDE */}
          <div className="deparCol">
            <div className={styles.leftSide}>
              <div>
                <h1
                  className={`${styles.title}`}
                  dangerouslySetInnerHTML={{ __html: departmentSection.title }}
                ></h1>
                <p className={styles.description}>
                  {departmentSection.description}
                </p>
              </div>

              <div>
                <h3 className={styles.programsCount}>
                  {departmentSection.programs_count}
                </h3>
                <p className={styles.programsText}>
                  {departmentSection.programs_text}
                </p>
                <Link href={`/program`}>
                  <button className={styles.viewAllButton}>
                    VIEW ALL PROGRAMMES <GoArrowRight />
                  </button>
                </Link>
                <br />
                <Link href={`/apply-now`}>
                  <button className={styles.applyButton}>APPLY NOW</button>
                </Link>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="deparCol">
            {/* Program Cards */}
            <div className="row mb-5">
              {departmentSection.programs.map((prog, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <Link href={`/program/${prog.slug}`}>
                    <div
                      className={`card text-white border-0 position-relative ${styles.programCard}`}
                    >
                      <Image
                        src={prog.image}
                        alt={prog.name}
                        width={350}
                        height={476}
                        className={styles.cardImage}
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
            <div className={styles.browseHeader}>
              <p className="m-0">BROWSE BY DEPARTMENT</p>
              <span className={styles.browseLine} />
            </div>

            <hr className={styles.divider} />

            <div className="row g-2">
              {departmentSection.departments.map((dept, index) => (
                <div className="col-md-4" key={index}>
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
