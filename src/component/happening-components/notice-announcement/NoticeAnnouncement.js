"use client";
import styles from "./notice-announcement.module.css";
import React, { useState, useEffect } from "react";
import { SiAdobeacrobatreader } from "react-icons/si";

const BASE_URL = "http://sd7:8080/jss/api/happenings/press-release" || [];

export default function NoticeAnnouncement() {
  const [documents, setDocuments] = useState([]);

  const handleDocumentClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };
  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setDocuments(data))
      .catch((error) => console.error("Error:", error));
  }, []);
  const documentsData = documents || [];

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.documentsList}>
          {documentsData &&
            documentsData.map((doc) => (
              <div
                key={doc.id}
                className={`${styles.documentItem} `}
                onClick={() => handleDocumentClick(doc.pdfUrl)}
              >
                <div className={styles.leftBorder}></div>
                <div className={styles.documentContent}>
                  <h3 className={styles.documentTitle}>{doc.title}</h3>
                  <p className={styles.documentDate}>{doc.date}</p>
                </div>
                <div className={styles.pdfIcon}>
                  <SiAdobeacrobatreader color="#e74c3c" size={20} />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Bootstrap CSS CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </div>
  );
}
