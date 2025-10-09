import Link from "next/link";
// import { useState } from "react";
export default function BelowBannerSection() {
  const listOfLinks = [
    { label: "Scholarships Criteria & Success", url: "#" },
    { label: "Student Cells Activities Coverage", url: "#" },
    { label: "Recruitment Vacancies Internships", url: "#" },
  ];
  return (
    <div
      style={styles.belowBannerSection}
      className="school-below-banner-section "
    >
      <div
        className="d-flex align-items-center justify-content-between"
        style={styles.borderBelow}
      >
        <h4 className="yellow-text m-0 fw-bold">Admission 2025-26</h4>
        <ul className="d-flex gap-5 m-0">
          {listOfLinks &&
            listOfLinks.map((link, i) => (
              <li key={i} style={styles.linksList}>
                <Link href={link.url}>{link.label}</Link>
              </li>
            ))}
        </ul>
        <div className="d-flex gap-3">
          <button style={styles.button}>DOWNLOAD BROCHURE</button>
          <button style={styles.button} className="text-dark bg-warning border">
            APPLY NOW
          </button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  borderBelow: {
    borderBottom: "1px solid rgb(227 225 220)",
    paddingBottom: "1.5rem",
  },
  belowBannerSection: {
    padding: "1rem 12rem",
    background: "#f6f6f6",
  },
  button: {
    padding: "0.5rem 1rem",
    background: "none",
    border: "1px solid #b08f29",
    color: "#b08f29",
    fontWeight: "600",
    fontSize: "14px",
  },
  linksList: {
    fontWeight: "600",
  },
};
