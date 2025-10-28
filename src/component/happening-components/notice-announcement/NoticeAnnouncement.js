"use client";
import styles from "./notice-announcement.module.css";
import { SiAdobeacrobatreader } from "react-icons/si";

export default function NoticeAnnouncement() {
  // Dynamic data structure - This will come from API in future
  const documentsData = [
    {
      id: 1,
      title: "UGC e-samadhan portal",
      date: "1 May 2023",
      pdfUrl: "/documents/dummy-pdf.pdf",
      isHighlighted: false,
    },
    {
      id: 2,
      title: "https://www.gkudde.in/ is not the authorised website of GKU",
      date: "1 May 2023",
      pdfUrl: "/documents/dummy-pdf.pdf",
      isHighlighted: false,
    },
    {
      id: 3,
      title: "GKU Journal of Multidisciplinary Research",
      date: "2 May 2023",
      pdfUrl: "/documents/dummy-pdf.pdf",
      isHighlighted: true,
    },
    {
      id: 4,
      title: "UGC-DEB online programmes Application",
      date: "27 June 2023",
      pdfUrl: "/documents/dummy-pdf.pdf",
      isHighlighted: false,
    },
    {
      id: 5,
      title: "Letter of recognition from UGC",
      date: "21 January 2024",
      pdfUrl: "/documents/dummy-pdf.pdf",
      isHighlighted: false,
    },
  ];

  const handleDocumentClick = (pdfUrl) => {
    // Open PDF in new tab
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.documentsList}>
          {documentsData.map((doc) => (
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
