"use client";

// components/home-components/BelowBannerSection/index.js
import { useEffect } from "react";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./below-banner.module.css";

export default function BelowBannerSection() {

  const listOfLinks = [
    { label: "Scholarships Criteria & Success", url: "#" },
    { label: "Student Cells Activities Coverage", url: "#" },
    { label: "Recruitment Vacancies Internships", url: "#" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className={`${styles.belowBannerSection} school-below-banner-section`}
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="container">
        <div className={styles.borderBelow}>
          <h4
            className={styles.yellowText}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Admission 2025-26
          </h4>
          <ul className={styles.linksContainer}>
            {listOfLinks.map((link, i) => (
              <li
                key={i}
                className={styles.linksList}
                data-aos="fade-up"
                data-aos-delay={300 + i * 100}
              >
                <Link href={link.url} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div
            className={styles.buttonContainer}
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <button className={styles.button}>
              DOWNLOAD BROCHURE
            </button>
            <button
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              APPLY NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
