// components/school-components/DepartmentSection/index.js
"use client";
import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
import Link from "next/link";
import styles from "./department.module.css";

export default function DepartmentSection() {
  const departmentSection = {
    title: "Start Your JSS Journey",
    desc: "Leading the revolution in integrated learning where students shape their own future.",
    programsCount: "200",
    programsText: "SED UT PERSPICIATIS UNDE",
    imageContent: [
      {
        name: "UNDER GRADUTE",
        img: "/images/school-page/department-dummy-banner.png",
        url: "#a",
      },
      {
        name: "POST GRADUTE",
        img: "/images/school-page/department-dummy-banner.png",
        url: "#b",
      },
      {
        name: "PHD",
        img: "/images/school-page/department-dummy-banner.png",
        url: "#c",
      },
    ],
    browseDepartmentSection: [
      {
        name: "ELECTRICAL ENGINEERING",
        url: "#1",
      },
      {
        name: "MECHANICAL ENGINEERING",
        url: "#2",
      },
      {
        name: "COMPUTER SCIENCE AND ENGINEERING",
        url: "#3",
      },
      {
        name: "ROBOTICS AND ARTIFICIAL INTELLIGENCE",
        url: "#4",
      },
      {
        name: "ELECTRICAL & ELECTRONICS ENGINEERING",
        url: "#5",
      },
      {
        name: "ELECTRONICS AND COMMUNICATION ENGINEERING",
        url: "#6",
      },
    ],
  };

  return (
    <div className={styles.departmentSection}>
      <div className={`container-fluid ${styles.container}`}>
        <div className="row justify-content-center">
          {/* LEFT SIDE */}
          <div className="col-md-3">
            <div className={styles.leftSide}>
              <div>
                <h1 className={`highlighted-title-top-to-botom  ${styles.title}`}>
                  {departmentSection.title}
                </h1>
                <p className={styles.description}>{departmentSection.desc}</p>
              </div>

              <div>
                <h3 className={styles.programsCount}>
                  {departmentSection.programsCount}+
                </h3>
                <p className={styles.programsText}>
                  {departmentSection.programsText}
                </p>
                <button className={styles.viewAllButton}>
                  VIEW ALL PROGRAMMES →
                </button>
                <br />
                <button className={styles.applyButton}>APPLY NOW</button>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-9">
            {/* Program Cards */}
            <div className="row mb-5 w-100 m-auto">
              {departmentSection.imageContent.map((prog, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <Link href={prog.url}>
                    <div
                      className={`card text-white border-0 position-relative ${styles.programCard}`}
                    >
                      <Image
                        src={prog.img}
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

            <div className="row">
              {departmentSection.browseDepartmentSection.map((dept, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <Link href={dept.url} className={styles.departmentItem}>
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
