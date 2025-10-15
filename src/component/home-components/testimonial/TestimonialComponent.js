// components/home-components/TestimonialsSection/index.js
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "./testimonial.module.css";

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
    <section className={styles.testimonialsSection}>
      <div className={styles.testimonialsContainer}>
        {/* LEFT COLUMN */}
        <div className={styles.columnLeft}>
          <div className={styles.headerContent}>
            <p className={styles.testimonialsLabel}>TESTIMONIALS</p>
            <h2 className={`highlighted-title-top-to-botom ${styles.mainHeading}`}>
              IN CONVERSATION
              <br />
              WITH THE JSS
              <br />
              COMMUNITY
            </h2>
            <button className={styles.circleArrowBtn}>
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
        <div className={styles.columnMiddle}>
          {column2.map((item, i) => (
            <TestimonialCard
              key={i}
              data={item}
              onPlay={() => setSelectedVideo(item.videoUrl)}
            />
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.columnRight}>
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
          className={styles.videoModalOverlay}
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className={styles.videoModalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <iframe
              width="100%"
              height="100%"
              src={selectedVideo}
              title="Testimonial Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoIframe}
            ></iframe>
            <button
              className={styles.closeBtn}
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
    <article className={styles.testimonialCard}>
      <div className={styles.cardImgContainer}>
        <Link href={data.url}>
          <Image
            src={data.img}
            alt={data.name}
            width={380}
            height={380}
            className={styles.cardImg}
          />
        </Link>
        {/* Play Button if video exists */}
        {hasVideo && (
          <div className={styles.playBtn} onClick={onPlay}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}

        {/* Optional Quote */}
        {data.quote && (
          <div className={styles.quoteBar}>
            <div className={styles.yellowLine}></div>
            <p className={styles.quoteTextOverlay}>{data.quote}</p>
          </div>
        )}
      </div>
      <Link href={data.url}>
        <div className={styles.cardInfo}>
          <h3 className={styles.personName}>{data.name}</h3>
          <p className={styles.personBatch}>{data.batch}</p>
          {data.role && <p className={styles.personRole}>{data.role}</p>}
        </div>
      </Link>
    </article>
  );
}
