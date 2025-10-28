// components/school-components/AboutSchool/index.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
import styles from "./about-school.module.css";

export default function AboutSchool() {
  const aboutSchoolContent = {
    title: "EMPOWERING INNOVATION. ENGINEERING EXCELLENCE.",
    subtitle: "ABOUT SCHOOL OF ENGINEERING",
    description:
      "Located in the heart of Noida's academic corridor, the School of Engineering at JSS University stands as a beacon of technical education, innovation, and industry readiness.",
    url: "/",
    chancellor: {
      img: "/images/school-page/about-school-banner.png",
      logo: "/images/home-page/fifth-slider-second-img.png",
      logoContent:
        "Approved by All India Council for Technical Education (AICTE)",
      statsNumber: "28+",
      statsContent: "ACRES CAMPUS AREA",
    },
    highlights: [
      {
        rank: "#20",
        text: "ENGINEERING COLLEGES IN UTTAR PRADESH",
        source: "Outlook 2020",
      },
      {
        rank: "#201-250",
        text: "NATIONALLY ENGINEERING RANK (2024)",
        source: "Nirf ",
      },
    ],
    buttons: [
      { text: "360 VIEW", url: "#1" },
      { text: "WHY JSS", url: "#2" },
      { text: "APPLY NOW", url: "#3" },
    ],
  };

  return (
    <div className={styles.aboutSchoolSection}>
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* LEFT COLUMN */}
          <div className="col-md-6 mb-4">
            <h6 className={styles.subtitle}>{aboutSchoolContent.subtitle}</h6>

            <h1 className={`${styles.title} highlighted-title-top-to-botom `}>
              {aboutSchoolContent.title}
            </h1>

            <p className={styles.description}>
              {aboutSchoolContent.description}
            </p>

            <div>
              <button className={styles.arrowButton}>
                <SlArrowRightCircle />
              </button>
            </div>

            {/* Ranking Cards */}
            <div className="row mt-4 w-100 m-auto">
              {aboutSchoolContent.highlights.map((item, index) => (
                <div className="col-md-6 mb-3" key={index}>
                  <div className={styles.rankingCard}>
                    <span className={styles.rankNumber}>{item.rank}</span>
                    <div>
                      <p className={styles.rankText}>{item.text}</p>
                      <p className={styles.rankSource}>{item.source}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className={styles.buttonsContainer}>
              {aboutSchoolContent.buttons.map((btn, i) => (
                <Link key={i} href={btn.url} className={styles.navButtons}>
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN (IMAGE CARD) */}
          <div className="col-md-6 px-5 py-5">
            <div className={styles.imageCard}>
              <Image
                src={aboutSchoolContent.chancellor.img}
                alt="School campus"
                width={350}
                height={476}
                className={styles.cardImage}
                priority
              />

              {/* Gradient Overlay */}
              <div className={styles.gradientOverlay}></div>

              {/* Bottom Left Text */}
              <div className={styles.statsContainer}>
                <span className={styles.statsNumber}>
                  {aboutSchoolContent.chancellor.statsNumber}
                </span>
                <span className={styles.statsText}>
                  {aboutSchoolContent.chancellor.statsContent}
                </span>
                <div className={styles.yellowLine}></div>
              </div>

              {/* Bottom Right Badge */}
              <div className={styles.badgeContainer}>
                <Image
                  src={aboutSchoolContent.chancellor.logo}
                  alt="AICTE Logo"
                  width={350}
                  height={476}
                  className={styles.badgeLogo}
                  priority
                />
                <p className={styles.badgeText}>
                  {aboutSchoolContent.chancellor.logoContent}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
