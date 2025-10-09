"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const testimonialsData = [
  {
    name: "NAMAN SUKHIJA",
    batch: "B. Tech (CE), 2012-16 Batch",
    role: "Designer & Certifier, Passive House Institute, Germany",
    quote: "Studying at JSS Noida has been a transformative journey...",
    img: "/images/home-page/sixth-section-first-banner.png",
    videoUrl: "https://www.youtube.com/embed/8pARSE8wytw?si=Z1u43drelLPclwBc",
    url: "#1",
  },
  {
    name: "APOORV SHIKHAR",
    batch: "B. Tech (ES), 2013-17 Batch",
    role: "Junior Research Fellow, GB Pant National Institute of Himalayan Environment, Uttarakhand",
    img: "/images/home-page/sixth-section-second-banner.png",
    quote:
      "I have gained both theoretical and practical knowledge and was exposed to real-world challenges.",
    videoUrl: "",
    url: "#2",
  },
  {
    name: "YASHIKA MATHUR",
    batch: "B. Tech (CE), 2013-17 Batch",
    role: "Counsellor – Engineering Design, Design2Occupancy Services LLP",
    img: "/images/home-page/sixth-section-third-banner.png",
    videoUrl: "",
    url: "#3",
  },
  {
    name: "NADEEM KHAN",
    batch: "B. Tech (ME), 2015-19 Batch",
    role: "Project Mechanical Engineer, JK Paper Ltd, Unit CPM, Gujarat",
    img: "/images/home-page/sixth-section-fourth-banner.png",
    videoUrl:
      "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    url: "#4",
  },
  {
    name: "RITIKA SHARMA",
    batch: "B. Tech (CSE), Batch of 2024",
    img: "/images/home-page/sixth-section-fifth-banner.png",
    quote:
      "JSS University has truly shaped my journey—both academically and personally.",
    videoUrl: "",
    url: "#5",
  },
];

export default function TestimonialsSection() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  // distribute testimonials dynamically into columns
  const column1 = testimonialsData.slice(0, 1);
  const column2 = testimonialsData.slice(1, 3);
  const column3 = testimonialsData.slice(3);

  return (
    <section style={styles.testimonialsSection}>
      <div style={styles.testimonialsContainer}>
        {/* LEFT COLUMN */}
        <div style={styles.columnLeft}>
          <div style={styles.headerContent}>
            <p style={styles.testimonialsLabel}>TESTIMONIALS</p>
            <h2 style={styles.mainHeading}>
              IN <span style={styles.blueText}>CONVERSATION</span>
              <br />
              WITH THE{" "}
              <span style={styles.blueText}>
                JSS
                <br />
                COMMUNITY
              </span>
            </h2>
            <button style={styles.circleArrowBtn}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {column1.map((item, i) => (
            <TestimonialCard
              key={i}
              data={item}
              onPlay={() => setSelectedVideo(item.videoUrl)}
            />
          ))}
        </div>

        {/* MIDDLE COLUMN */}
        <div style={styles.columnMiddle}>
          {column2.map((item, i) => (
            <TestimonialCard
              key={i}
              data={item}
              onPlay={() => setSelectedVideo(item.videoUrl)}
            />
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div style={styles.columnRight}>
          {column3.map((item, i) => (
            <TestimonialCard
              key={i}
              data={item}
              onPlay={() => setSelectedVideo(item.videoUrl)}
            />
          ))}
        </div>
      </div>

      {/* ✅ Video Popup */}
      {selectedVideo && (
        <div
          style={styles.videoModalOverlay}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            style={styles.videoModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo}
              title="Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ border: "none", borderRadius: "10px" }}
            ></iframe>
            <button
              style={styles.closeBtn}
              onClick={() => setSelectedVideo(null)}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function TestimonialCard({ data, onPlay }) {
  const hasVideo = data.videoUrl && data.videoUrl.length > 0;

  return (
    <article style={styles.testimonialCard}>
      <div style={styles.cardImgContainer}>
        <Link href={data.url}>
          <Image
            src={data.img}
            alt={data.name}
            width={380}
            height={380}
            style={styles.cardImg}
          />
        </Link>
        {/* Play Button if video exists */}
        {hasVideo && (
          <div style={styles.playBtn} onClick={onPlay}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}

        {/* Optional Quote */}
        {data.quote && (
          <div style={styles.quoteBar}>
            <div style={styles.yellowLine}></div>
            <p style={styles.quoteTextOverlay}>{data.quote}</p>
          </div>
        )}
      </div>
      <Link href={data.url}>
        <div style={styles.cardInfo}>
          <h3 style={styles.personName}>{data.name}</h3>
          <p style={styles.personBatch}>{data.batch}</p>
          {data.role && <p style={styles.personRole}>{data.role}</p>}
        </div>
      </Link>
    </article>
  );
}

/* --- STYLES --- */
const styles = {
  testimonialsSection: {
    background: "#f5f5f5",
    padding: "80px 60px",
  },
  testimonialsContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "5rem",
    flexWrap: "wrap",
  },
  columnLeft: {
    flex: "0 0 auto",
    width: "330px",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  columnMiddle: {
    flex: "0 0 auto",
    width: "290px",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  columnRight: {
    flex: "0 0 auto",
    width: "330px",
    display: "flex",
    flexDirection: "column",
    gap: "28px",
    marginTop: "5rem",
  },
  headerContent: {
    marginBottom: "40px",
  },
  testimonialsLabel: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#000",
    marginBottom: "16px",
  },
  mainHeading: {
    fontSize: "3rem",
    fontWeight: "700",
    lineHeight: "1.2",
    color: "#000",
    marginBottom: "24px",
  },
  blueText: { color: "#4a90e2" },
  circleArrowBtn: {
    cursor: "pointer",
    color: "#666",
    background: "transparent",
    border: "2px solid #ccc",
    borderRadius: "50%",
    width: "24px",
    height: "24px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  testimonialCard: {
    borderTopLeftRadius: "30px",
    borderBottomRightRadius: "30px",
    overflow: "hidden",
    background: "white",
    position: "relative",
  },
  cardImgContainer: {
    position: "relative",
    width: "100%",
    height: "100%",
    overflow: "hidden",
  },
  cardImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  quoteBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "20px 24px",
    background:
      "linear-gradient(to top, rgba(0,0,0,0.75), rgba(0,0,0,0.4) 60%, transparent 100%)",
  },
  yellowLine: {
    width: "40px",
    height: "3px",
    background: "#fbbf24",
    marginBottom: "10px",
  },
  quoteTextOverlay: {
    color: "#fff",
    fontSize: "13px",
    margin: 0,
  },
  playBtn: {
    position: "absolute",
    top: "18px",
    right: "18px",
    width: "35px",
    height: "35px",
    background: "#fbbf24de",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    transition: "transform 0.2s ease",
  },
  cardInfo: {
    padding: "18px 22px",
    background: "#fff",
  },
  personName: {
    fontSize: "15px",
    fontWeight: "700",
    color: "#000",
    marginBottom: "4px",
  },
  personBatch: {
    fontSize: "12px",
    color: "#666",
    marginBottom: "4px",
  },
  personRole: {
    fontSize: "12px",
    color: "#000",
    margin: 0,
    lineHeight: "1.4",
  },
  /* --- Video Modal --- */
  videoModalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
  },
  videoModalContent: {
    width: "80%",
    maxWidth: "900px",
    height: "70vh",
    position: "relative",
  },
  closeBtn: {
    position: "absolute",
    top: "-35px",
    right: "0",
    background: "transparent",
    border: "none",
    color: "white",
    fontSize: "28px",
    cursor: "pointer",
  },
};
