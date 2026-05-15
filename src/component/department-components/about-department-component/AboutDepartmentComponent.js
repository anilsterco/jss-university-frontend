// components/department-components/AboutDepartment/index.js
"use client";
import { useEffect } from "react";
import styles from "./about-department.module.css";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { ASSETS_URL, WEB_URL } from "@/config/config";

export default function AboutDepartmentComponent({ data, params }) {
  // 🔹 Dummy Data (Fallback)
  const dummyCoursesData = {
    title: "COMPUTER SCIENCE & ENGINEERING",
    subtitle: "ABOUT DEPARTMENT OF",
    description:
      "The CSE program equips students with a strong foundation in computer science principles, programming languages, algorithms, and data structures. Graduates are prepared for careers in software development, systems engineering, and various other IT fields.",
    stats: [
      { id: 1, value: "63+", label: "International journal papers", logo: "" },
      { id: 2, value: "3K+", label: "Alumni Network", logo: "" },
      {
        id: 3,
        value: "",
        label: "National Board of Accreditation (NBA)",
        logo: `${ASSETS_URL}img/facts/1762853705_6913034925b8c.png`,
      },
    ],
    vision: {
      title: "Vision",
      description:
        "To spark the imagination of the Computer Science Engineers with values, skills and creativity to solve real-world problems.",
    },
    mission: {
      title: "Mission",
      points: [
        "To inculcate creative thinking and problem-solving skills through effective teaching, learning and research.",
        "To empower professionals with core competency in the field of Computer Science and Engineering.",
        "To foster independent and lifelong learning with ethical and social responsibilities.",
      ],
    },
    image:
      `${ASSETS_URL}img/departments/1762856534_69130e56601ae.png`,
  };

  const departmentData = data || dummyCoursesData;

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className={`about_page_section ${styles.aboutDepartment}`}>
      <div className="container">
        <div
          className={`${styles.header} header`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {departmentData?.subtitle && (
            <p className={styles.subtitle}>{departmentData.subtitle}</p>
          )}
          {departmentData?.title && (
            <h1 className={`blue-text ${styles.title}`}>
              {departmentData.title}
            </h1>
          )}
          {departmentData?.description && (
            <h6 className={styles.description}>{departmentData.description}</h6>
          )}

          {departmentData?.points?.map((point, index) => (
            <p key={index} className={styles.points}>
              {point}
            </p>
          ))}
          {departmentData?.about_url && (
            <Link
            href={`${WEB_URL}department/${params}/${departmentData.about_url}`}
            className={styles.arrowLink}
          >
            <Image
              src="/images/about-page/about-arrow.svg"
              alt="arrow"
              width={30}
              height={30}
            />
          </Link>
          )}
          
        </div>

        {/* <div className={styles.statsSection}>
          {departmentData.stats.map((stat, index) => (
            <div
              key={stat.id}
              className={`${styles.statCard} ${
                index === 0
                  ? styles.onecard
                  : index === 1
                  ? styles.twocard
                  : index === 2
                  ? styles.threecard
                  : ""
              }`}
              data-aos="fade-up"
              data-aos-delay={200 + index * 200}
            >
              <div className={styles.statCardBody}>
                {stat.logo && (
                  <Image
                    src={stat.logo}
                    alt="Stat Logo"
                    width={120}
                    height={90}
                    priority
                  />
                )}
                <h2 className={styles.statValue}>{stat.value}</h2>
                <p className={styles.nbaLabel}>{stat.label}</p>
              </div>
            </div>
          ))}
        </div> */}

        {/* <div className={styles.contentSection}>
          <div className="vission px-0" data-aos="fade-right" data-aos-delay="600">
            <div className={`shine-effect card border-0 h-100 ${styles.imagePlaceholder}`}>
              <Image
                src={departmentData.image}
                alt="Department Image"
                width={500}
                height={500}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
                className={styles.shineImage} 
                priority
              />
            </div>
          </div>

          <div className={`mission ps-0 ${styles.visionMission}`}>
            <div className={styles.visionCard} data-aos="fade-up" data-aos-delay="700">
              <h3 className={styles.visionTitle}>{departmentData.vision.title}</h3>
              <p className={styles.visionDescription}>{departmentData.vision.description}</p>
            </div>

            <div className={styles.missionSection} data-aos="fade-up" data-aos-delay="900">
              <h3 className={styles.missionTitle}>{departmentData.mission.title}</h3>
              <ul className={styles.missionList}>
                {departmentData.mission.points && (
                  departmentData.mission.points.map((point, idx) => (
                    <li key={idx} className={styles.missionItem}>
                      <span className={styles.missionBullet}>•</span>
                      <span className={styles.missionText}>{point}</span>
                    </li>
                  ))
                )}
              </ul>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
