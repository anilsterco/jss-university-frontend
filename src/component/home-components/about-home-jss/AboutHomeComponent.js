"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BsArrowRightCircle } from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa6";
import styles from "./about-home-jss.module.css";
import { useState, useEffect } from "react";

import { WEB_URL } from "@/config/config.mjs";

const dummyLegacyData = {
  title:
    '<span class="dark-blue-text ">SRI SUTTUR MATH THE</span> <span class="blue-text">1000-YEAR LEGACY </span>',
  subtitle: "ABOUT JSS UNIVERSITY1",
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


  const getYouTubeEmbedUrl = (url) => {
    if (!url) return "";

    // Already an embed URL
    if (url.includes("/embed/")) return url;

    let videoId = "";
    // Handle https://youtu.be/VIDEO_ID
    if (url.includes("youtu.be/")) {
      videoId = url.split("youtu.be/")[1].split("?")[0];
    }

    // Handle https://www.youtube.com/watch?v=VIDEO_ID
    else if (url.includes("watch?v=")) {
      videoId = url.split("watch?v=")[1].split("&")[0];
    }

    return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
  };

  return (
    <section className={`${styles.fifthSection}`}>
      <div className="container">
        <div className={`${styles.fifthContainerSection}`}>
          <div className={` ${styles.topSection}`} data-aos="fade-bottom">
            <p className="fw-bold text-uppercase">{legacyData.subtitle}</p>
            <h2
              className={` ${styles.topSectionHeading}`}
              dangerouslySetInnerHTML={{ __html: legacyData.title }}
              data-aos="fade-up"
              data-aos-delay="100"
            ></h2>
          </div>

          <div className={`${styles.fifthMiddleSection}`}>
            <div className={`${styles.leftColumn}`}>
              <Link
                href={`${WEB_URL}leadership/jagadguru-sri-shivarathri-deshikendra-mahaswamiji`}
              >
                <div
                  className={`position-relative contentPart shineEffect ${styles.leftColumn}`}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Image
                    src={legacyData.chancellor_img}
                    alt="chancellor image"
                    width={600}
                    height={370}
                    style={{ height: "100%", width: "100%" }}
                    className={`rounded ${styles.chancellorImage}`}
                  />
                  {/* Play Button Overlay */}
                  <div className={`${styles.contentPart}`}>
                    <div
                      className="chance-msg"
                      data-aos="fade-up"
                      data-aos-delay="300"
                    >
                      {legacyData.video_url && (
                        <IoPlayCircleOutline
                          fontSize={36}
                          className="text-warning"
                          style={{ cursor: "pointer" }}
                          onClick={(e) => {
                            e.stopPropagation();
                            e.preventDefault();
                            setVideoPopup(true);
                          }}
                        />
                      )}
                      <div className="chance-msg-contant">
                        <p>{legacyData.chancellor_title}</p>
                        <h6>{legacyData.chancellor_name}</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>

            <div
              className={`about-imgcol ${styles.rightColumn}`}
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <p className={`fw-light ${styles.description}`}>
                {legacyData.description}
              </p>
              <div className={`divider ${styles.rightArrowIconDiv}`}>
                {legacyData?.url && (
                  <Link href={legacyData.url}>
                    <Image
                      src="images/home-page/about_arrow.svg"
                      alt="chancellor image"
                      width={22}
                      height={22}
                    />
                  </Link>
                )}
              </div>

              {/* Highlight Boxes */}
              <div className={`highlight-col ${styles.onlyDesktop}`}>
                {legacyData.highlights.map((h, i) => (
                  <div
                    key={i}
                    className={`item ${styles.highlightBox}`}
                    data-aos="fade-up"
                    data-aos-delay={i * 200}
                  >
                    <h3 className={`${styles.highlightNumber}`}>
                      <span>#</span> {h.rank}
                    </h3>
                    <div className="left-content">
                      <p className={styles.cardTitle}>{h.text}</p>
                      <div className="d-flex align-items-center gap-2">
                        <Image
                          src={h?.source}
                          alt="Source Logo"
                          width={118}
                          height={24}
                          className={styles.sourceText}
                        />
                      </div>
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
                    <h3 className={`fw-bold ${styles.highlightNumber}`}>
                      {h.rank}
                    </h3>
                    <div className="left-content">
                      <p className={styles.cardTitle}>{h.text}</p>
                      <Image
                        src={h.source}
                        alt="Accreditation Logo"
                        width={88}
                        height={33}
                        className={styles.sourceText}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Buttons */}
              <div
                className={`d-flex gap-3 about-home-buttons mt-3 ${styles.aboutBtnDiv}`}
                data-aos="fade-up"
                data-aos-delay="600"
              >
                {legacyData?.buttons.map((btn, i) => (
                  <Link key={i} href={btn.url ? btn.url : '#'} className={`${styles.navButtons} CTA_Applynow`} target={`${btn.text == 'APPLY NOW' ? '_blank' : '_self'}`}>
                    {btn.text}
                    {i == 1 && <FaArrowRight className={styles.arrowIcon} />}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div
            className={styles.fifthSectionSlider}
            data-aos="fade-up"
            data-aos-delay="700"
          >
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
                  <div className="gap-2 gap-lg-5 d-flex align-items-center content custom-gap">
                    <Image
                      src={acc?.image ? acc.image : null}
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

        {/* Video Popup */}
        {videoPopup && (
          <div className={styles.videoModalOverlay}>
            <div className={styles.videoModalContent}>
              <iframe
                width="100%"
                height="100%"
                src={getYouTubeEmbedUrl(legacyData?.video_url)}
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
