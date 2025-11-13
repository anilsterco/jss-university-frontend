// components/home-components/BelowBannerSection/index.js
import Link from "next/link";
import styles from "./below-banner.module.css";

export default function BelowBannerSection() {
  const listOfLinks = [
    { label: "Scholarships Criteria & Success", url: "#" },
    { label: "Student Cells Activities Coverage", url: "#" },
    { label: "Recruitment Vacancies Internships", url: "#" },
  ];

  return (
    <div className={`${styles.belowBannerSection} school-below-banner-section`}>
      <div className='container'>
      <div className={styles.borderBelow}>
        <h4 className={styles.yellowText}>Admission 2025-26</h4>        
        <ul className={styles.linksContainer}>
          {listOfLinks.map((link, i) => (
            <li key={i} className={styles.linksList}>
              <Link href={link.url} className={styles.link}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        
        <div className={styles.buttonContainer}>
          <button className={styles.button}>DOWNLOAD BROCHURE</button>
          <button className={`${styles.button} ${styles.buttonPrimary}`}>
            APPLY NOW
          </button>
        </div>
      </div>
      </div>
    </div>
  );
}