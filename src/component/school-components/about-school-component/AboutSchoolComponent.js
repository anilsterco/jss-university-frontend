// components/school-components/AboutSchool/index.js
"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./about-school.module.css";

export default function AboutSchool({ data }) {
  // 🔹 AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const dummyAboutSchoolContent = {
    title:
      '<span class="blue-text">EMPOWERING INNOVATION.</span><span class="dark-blue-text">ENGINEERING EXCELLENCE.</span>',
    subtitle: "ABOUT SCHOOL OF ENGINEERING",
    description:
      "Located in the heart of Noida's academic corridor, the School of Engineering at JSS University stands as a beacon of technical education, innovation, and industry readiness.",
    url: "/",
    chancellor_img: "/images/school-page/about-school-banner.png",
    chancellor_logo: "/images/home-page/fifth-slider-second-img.png",
    logo_content:
      "Approved by All India Council for Technical Education (AICTE)",
    stats_number: "28+",
    stats_content: "ACRES CAMPUS AREA",
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

  const aboutSchoolContent = data ? data : dummyAboutSchoolContent;

  return (
    <div
      className={styles.aboutSchoolSection}
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="container">
        <div className="school_row align-items-center">

          {/* LEFT COLUMN */}
          <div className="school_about">
            <div className="about_school_left">
              <h6
                className={styles.subtitle}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {aboutSchoolContent.subtitle}
              </h6>

              <h1
                className={styles.title}
                dangerouslySetInnerHTML={{ __html: aboutSchoolContent.title }}
                data-aos="fade-up"
                data-aos-delay="200"
              ></h1>

              <p
                className={styles.description}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {aboutSchoolContent.description}
              </p>

              <div data-aos="fade-up" data-aos-delay="400">
                <button className={styles.arrowButton}>
                  <SlArrowRightCircle />
                </button>
              </div>

              {/* Ranking Cards */}
              <div className="row mt-4">
                {aboutSchoolContent.highlights &&
                  aboutSchoolContent.highlights.map((item, index) => (
                    <div
                      className="col-xl-6 col-lg-6 col-sm-6 about_rnk"
                      key={index}
                      data-aos="fade-up"
                      data-aos-delay={500 + index * 100}
                    >
                      <div className={styles.rankingCard}>
                        <div className="counter_dfe d-flex">
                          <span className={styles.rankNumber}>{item.rank}</span>
                          <p className={styles.rankText}>{item.text}</p>
                        </div>
                        <div>
                          <p className={styles.rankSource}>{item.source}</p>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Buttons */}
              <div
                className={styles.buttonsContainer}
                data-aos="fade-up"
                data-aos-delay="800"
              >
                {aboutSchoolContent.buttons &&
                  aboutSchoolContent.buttons.map((btn, i) => (
                    <div key={i}>
                      {btn.url && (
                        <Link
                          key={i}
                          href={btn.url}
                          className={styles.navButtons}
                        >
                          {btn.text}
                        </Link>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN (IMAGE CARD) */}
          <div className="school_about">
            <div
              className={styles.imageCard}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Image
                src={aboutSchoolContent.chancellor_img}
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
                  {aboutSchoolContent.stats_number}
                </span>
                <span className={styles.statsText}>
                  {aboutSchoolContent.stats_content}
                </span>
                <div className={styles.yellowLine}></div>
              </div>

              {/* Bottom Right Badge */}
              <div className={styles.badgeContainer}>
                <Image
                  src={aboutSchoolContent.chancellor_logo}
                  alt="AICTE Logo"
                  width={350}
                  height={476}
                  className={styles.badgeLogo}
                  priority
                />
                <p className={styles.badgeText}>
                  {aboutSchoolContent.logo_content}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
