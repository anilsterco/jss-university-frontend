// components/home-components/LegacySection/index.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BsArrowRightCircle } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import styles from "./about-home-jss.module.css";
import "swiper/css";
import { useState } from "react";

const dummyLegacyData = {
  title:
    '<span class="dark-blue-text ">SRI SUTTUR MATH THE</span> <span class="blue-text">1000-YEAR LEGACY </span>',
  subtitle: "ABOUT JSS UNIVERSITY",
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  url: "/",
  chancellor_img: "/images/home-page/fifth-section-banner.png",
  chancellor_name: "Jagadguru Sri Shivarathri Deshikendra Mahaswamiji",
  chancellor_title: "Message From Chancellor",
  video_url: "https://www.youtube.com/embed/D0UnqGm_miA?si=DACPYBmxQB1fz4nK",
  highlights: [
    {
      rank: "#37",
      text: "#201-300 IN ENGINEERING IN 2024",
      source: "Outlook 2020",
    },
    {
      rank: "#9",
      text: "AMONG TOP EMERGING PRIVATE INSTITUTIONS 2016 BY",
      source: "Times of India",
    },
  ],
  buttons: [
    { text: "360 VIEW", url: "#" },
    { text: "WHY JSS", url: "#" },
    { text: "APPLY NOW", url: "#" },
  ],
  logo_content: [
    {
      image: "/images/home-page/fifth-slider-first-img.png",
      description:
        "JSS Academy of Technical Education, Noida is recognized under UGC",
    },
    {
      image: "/images/home-page/fifth-slider-second-img.png",
      description:
        "Approved by All India Council for Technical Education (AICTE)",
    },
    {
      image: "/images/home-page/fifth-slider-first-img.png",
      description: "National Assessment and Accreditation Council (NAAC)",
    },
  ],
};

export default function LegacySection({ data }) {
  const [videoPopup, setVideoPopup] = useState(false);
  const legacyData = data ? data : dummyLegacyData;
  return (
    <section className={`${styles.fifthSection}`}>
      <div className="container">
        <div className={`${styles.fifthContainerSection}`}>
          <div className={`mb-3 ${styles.topSection}`}>
            <p className="fw-bold text-uppercase">{legacyData.subtitle}</p>
            <h2
              className={` ${styles.topSectionHeading}`}
              dangerouslySetInnerHTML={{ __html: legacyData.title }}
            ></h2>
          </div>

          <div className={`row message-row ${styles.fifthMiddleSection}`}>
            {/* Chancellor Image */}
            <div className={`col-lg-5 msg-row ${styles.leftColumn}`}>
              <div className="position-relative contentPart">
                <Image
                  src={legacyData.chancellor_img}
                  alt={legacyData.chancellor_name}
                  width={500}
                  height={350}
                  style={{ height: "100%", width: "100%" }}
                  className={`rounded ${styles.chancellorImage}`}
                />
                {/* Play Button Overlay */}
                <div className={` contant-row ${styles.contentPart}`}>
                  <div className="chance-msg">
                    {legacyData.video_url && (
                      <IoPlayCircleOutline
                        fontSize={40}
                        className="text-warning"
                        style={{ cursor: "pointer" }}
                        onClick={() => setVideoPopup(true)}
                      />
                    )}
                    <div className="chance-msg-contant">
                    <p>{legacyData.chancellor_title}</p>
                     <strong>{legacyData.chancellor_name}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content */}
            <div className={`col-lg-7 ${styles.rightColumn}`}>
              <p className={`fw-light ${styles.description}`}>
                {legacyData.description}
              </p>
              <div className={`divider ${styles.rightArrowIconDiv}`}>
                <Link href={legacyData.url} className="nav-buttons">
                  <BsArrowRightCircle
                    className={`fw-light ${styles.rightArrowIcon}`}
                    color="rgb(153 83 158)"
                  />
                </Link>
              </div>
              {/* Highlight Boxes */}
              <div
                className={`highlight-col ${styles.onlyDesktop}`}
              >
                {legacyData.highlights.map((h, i) => (
                  <div key={i} className={`item ${styles.highlightBox}`}>
                    <h1 className={`fw-bold ${styles.highlightNumber}`}>
                      {h.rank}
                    </h1>
                    <div className="left-content">
                      <p className={styles.cardTitle}>{h.text}</p>
                      <p className={styles.sourceText}>{h.source}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Swiper
                spaceBetween={100}
                slidesPerView={1}
                className={styles.onlyMobile}
              >
                {legacyData.highlights.map((h, i) => (
                  <SwiperSlide
                    key={i}
                    className={`col-md-5 ${styles.highlightBox}`}
                  >
                    <h1 className={`fw-bold ${styles.highlightNumber}`}>
                      {h.rank}
                    </h1>
                    <div className="left-content">
                      <p className={styles.cardTitle}>{h.text}</p>
                      <p className={styles.sourceText}>{h.source}</p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Buttons */}
              <div
                className={`d-flex gap-3 about-home-buttons ${styles.aboutBtnDiv}`}
              >
                {legacyData.buttons.map((btn, i) => (
                  <Link key={i} href={btn.url} className={styles.navButtons}>
                    {btn.text}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Accreditation Logos Slider */}
          <div className={styles.fifthSectionSlider}>
            <p
              className={`${styles.accreditationHeading} ${styles.onlyMobile}`}
            >
              GLOBAL PARTNERSHIPS AND ACADEMIC COLLABORATIONS
            </p>
            <Swiper
              modules={[Autoplay, Pagination]}
              autoplay={{ delay: 500000 }}
              spaceBetween={100}
              pagination={{ clickable: true, el: ".about-pagination" }}
              slidesPerView={3}
              breakpoints={{
                0: { slidesPerView: 1 },
                576: { slidesPerView: 1 },
                800: { slidesPerView: 2 },
                992: { slidesPerView: 2 },
                1040: { slidesPerView: 2 },
                1280: { slidesPerView: 3 },
              }}
            >
              {legacyData.logo_content.map((acc, i) => (
                <SwiperSlide key={i} className={styles.accreditationSlide}>
                  <div className="gap-5 d-flex align-items-center content">
                    <Image
                      src={acc.image}
                      alt="Accreditation Logo"
                      width={80}
                      height={80}
                      className={styles.accreditationLogo}
                    />
                    <p className="small w-100">{acc.description}</p>
                  </div>
                </SwiperSlide>
              ))}
              <div className="about-pagination"></div>
            </Swiper>
          </div>
        </div>

        {/* ✅ Video Popup */}
        {videoPopup && (
          <div className={styles.videoModalOverlay}>
            <div className={styles.videoModalContent}>
              <iframe
                width="100%"
                height="100%"
                src={legacyData.video_url}
                title="Testimonial Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.videoIframe}
              ></iframe>
              <button
                className={styles.closeBtn}
                onClick={() => setVideoPopup(false)}
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
