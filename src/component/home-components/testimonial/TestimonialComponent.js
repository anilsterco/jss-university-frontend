// components/home-components/TestimonialsSection/index.js
"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import styles from "./testimonial.module.css";

const dummyTestimonialsData = {
  title:
    '<span class="dark-blue-text ">IN</span> <span class="blue-text">CONVERSATION</span> <span class="dark-blue-text ">WITH THE</span>  <span class="blue-text">JSS COMMUNITY</span>',

  subtitle: "TESTIMONIALS",
  testimonials: [
    {
      name: "NAMAN SUKHIJA",
      course: "B. Tech (ME)",
      batch: "2012-16 Batch",
      designation: "Designer & Certifier",
      company: "Passive House Institute",
      location: "Germany",
      short_description:
        "Studying at JSS Noida has been a transformative journey...",
      image: "/images/home-page/sixth-section-second-banner.png",
      alt_text: "",
      video_url:
        "https://www.youtube.com/embed/8pARSE8wytw?si=Z1u43drelLPclwBc",
    },
    {
      name: "APOORV SHIKHAR",
      course: "B. Tech (ME)",
      batch: "2012-16 Batch",
      designation: "Junior Research Fellow",
      company: "GB Pant National Institute of Himalayan Environment",
      location: " Uttarakhand",
      image: "/images/home-page/sixth-section-second-banner.png",
      alt_text: "",
      short_description:
        "I have gained both theoretical and practical knowledge and was exposed to real-world challenges.",
      video_url: "",
    },
    {
      name: "YASHIKA MATHUR",
      course: "B. Tech (ME)",
      batch: "2012-16 Batch",
      designation: "Counsellor – Engineering Design",
      company: "Design2Occupancy Services LLP",
      location: "Uttarakhand",
      image: "/images/home-page/sixth-section-third-banner.png",
      alt_text: "",
      short_description: "",
      video_url: "",
    },
    {
      name: "NADEEM KHAN",
      course: "B. Tech (ME)",
      batch: "2012-16 Batch",
      designation: "Project Mechanical Engineer",
      company: "JK Paper Ltd, Unit CPM",
      location: "Gujarat",
      image: "/images/home-page/sixth-section-fourth-banner.png",
      alt_text: "",
      short_description: "",
      video_url:
        "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    },
    {
      name: "RITIKA SHARMA",
      course: "B. Tech (ME)",
      batch: "2012-16 Batch",
      designation: "Counsellor – Engineering Design",
      company: "Design2Occupancy Services LLP",
      location: "Gujarat",
      image: "/images/home-page/sixth-section-fifth-banner.png",
      alt_text: "",
      short_description:
        "JSS University has truly shaped my journey—both academically and personally.",
      video_url: "",
    },
  ],
};

export default function TestimonialsSection({ data }) {
  const testimonialsData = data ? data : dummyTestimonialsData;
  const [selectedVideo, setSelectedVideo] = useState(null);

  // distribute testimonials dynamically into columns
  const column1 = testimonialsData.testimonials.slice(0, 1);
  const column2 = testimonialsData.testimonials.slice(1, 3);
  const column3 = testimonialsData.testimonials.slice(3);

  const columnForMobile = [...column1, ...column2];
  return (
    <section className={styles.testimonialsSection}>
     <div className="container">
       <div className={`${styles.testimonialsContainer} ${styles.desktopView}`}>
        {/* LEFT COLUMN */}
        <div className={styles.columnLeft}>
          <div className={styles.headerContent}>
            <p className={styles.testimonialsLabel}>
              {testimonialsData.subtitle}
            </p>
            <h2
              className={`${styles.mainHeading}`}
              dangerouslySetInnerHTML={{ __html: testimonialsData.title }}
            ></h2>
            <Link href="#testimonials">
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
            </Link>
          </div>

          {column1.map((item, i) => (
            <TestimonialCard
              key={i}
              data={item}
              onPlay={() => setSelectedVideo(item.video_url)}
            />
          ))}
        </div>

        {/* MIDDLE COLUMN */}
        <div className={styles.columnMiddle}>
          {column2.map((item, i) => (
            <TestimonialCard
              key={i}
              data={item}
              onPlay={() => setSelectedVideo(item.video_url)}
            />
          ))}
        </div>

        {/* RIGHT COLUMN */}
        <div className={styles.columnRight}>
          {column3.map((item, i) => (
            <TestimonialCard
              key={i}
              data={item}
              onPlay={() => setSelectedVideo(item.video_url)}
            />
          ))}
        </div>
      </div>
      <div className={styles.mobileView}>
        <p className={`${styles.testimonialsLabel} text-center`}>
          TESTIMONIALS
        </p>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          style={{ paddingBottom: "1.1rem" }}
        >
          {columnForMobile.map((item, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard
                key={i}
                data={item}
                onPlay={() => setSelectedVideo(item.video_url)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <Swiper spaceBetween={100} slidesPerView={1}>
          {column3.map((item, i) => (
            <SwiperSlide key={i}>
              <TestimonialCard
                key={i}
                data={item}
                onPlay={() => setSelectedVideo(item.video_url)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={`${styles.mobileViewArrow}`}>
          <Link href="#testimonials">
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
          </Link>
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
     </div>
    </section>
  );
}

function TestimonialCard({ data, onPlay }) {
  const hasVideo = data.video_url && data.video_url.length > 0;

  return (
    <article className={styles.testimonialCard}>
      <div className={styles.cardImgContainer}>
        <Image
          src={data.image}
          alt={data.alt_text}
          width={380}
          height={380}
          className={styles.cardImg}
        />
        {/* Play Button if video exists */}
        {hasVideo && (
          <div className={styles.playBtn} onClick={onPlay}>
            <svg width="25" height="25" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        )}

        {/* Optional Quote */}
        {data.short_description && (
          <div className={styles.quoteBar}>
            <div className={styles.yellowLine}></div>
            <p className={styles.quoteTextOverlay}>{data.short_description}</p>
          </div>
        )}
      </div>
      <div className={styles.cardInfo}>
        <h3 className={styles.personName}>{data.name}</h3>
        <p className={styles.personBatch}>
          {data.course}, {data.batch}
        </p>
        <p className={styles.personRole}>
          {data.designation && data.designation} {data.company && data.company}
           {data.location && data.location}
        </p>
      </div>
    </article>
  );
}
