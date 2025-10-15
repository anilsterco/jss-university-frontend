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

const legacyData = {
  title: "SRI SUTTUR MATH THE 1000-YEAR LEGACY",
  subtitle: "ABOUT JSS UNIVERSITY",
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  url: "/",
  chancellor: {
    img: "/images/home-page/fifth-section-banner.png",
    name: "Jagadguru Sri Shivarathri Deshikendra Mahaswamiji",
    message: "Message From Chancellor",
  },
  highlights: [
    {
      number: "#37",
      text: "#201-300 IN ENGINEERING IN 2024",
      source: "Outlook 2020",
    },
    {
      number: "#9",
      text: "AMONG TOP EMERGING PRIVATE INSTITUTIONS 2016 BY",
      source: "Times of India",
    },
  ],
  buttons: [
    { text: "360 VIEW", link: "#" },
    { text: "WHY JSS", link: "#" },
    { text: "APPLY NOW", link: "#" },
  ],
  accreditations: [
    {
      name: "UGC",
      img: "/images/home-page/fifth-slider-first-img.png",
      text: "JSS Academy of Technical Education, Noida is recognized under UGC",
    },
    {
      name: "AICTE",
      img: "/images/home-page/fifth-slider-second-img.png",
      text: "Approved by All India Council for Technical Education (AICTE)",
    },
    {
      name: "NAAC",
      img: "/images/home-page/fifth-slider-first-img.png",
      text: "National Assessment and Accreditation Council (NAAC)",
    },
  ],
};

export default function LegacySection() {
  return (
    <section className={`container-fluid ${styles.fifthSection}`}>
      <div className="container-fluid">
        <div className={`mb-3 ${styles.topSection}`}>
          <p className="fw-bold small text-uppercase">{legacyData.subtitle}</p>
          <h2
            className={`fw-bold display-6 highlighted-title-top-to-botom ${styles.topSectionHeading}`}
          >
            {legacyData.title}
          </h2>
        </div>

        <div className={`row g-4 ${styles.fifthMiddleSection}`}>
          {/* Chancellor Image */}
          <div className={`col-lg-5 ${styles.leftColumn}`}>
            <div className="position-relative">
              <Image
                src={legacyData.chancellor.img}
                alt={legacyData.chancellor.name}
                width={500}
                height={350}
                className={`img-fluid rounded ${styles.chancellorImage}`}
              />
              {/* Play Button Overlay */}
              <div className={styles.contentPart}>
                <IoPlayCircleOutline fontSize={30} className="text-warning" />
                <div className="">
                  <strong>{legacyData.chancellor.message}</strong>
                  <br />
                  {legacyData.chancellor.name}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className={`col-lg-7 ${styles.rightColumn}`}>
            <p className={`fw-light ${styles.description}`}>
              {legacyData.description}
            </p>
            <div className="divider mb-4">
              <Link href={legacyData.url} className="nav-buttons">
                <BsArrowRightCircle
                  className="fw-light"
                  color="rgba(146, 142, 142, 1)"
                />
              </Link>
            </div>
            {/* Highlight Boxes */}
            <div className="row g-3 mb-4 d-flex gap-4">
              {legacyData.highlights.map((h, i) => (
                <div key={i} className={`col-md-5 ${styles.highlightBox}`}>
                  <h1 className={`fw-bold ${styles.highlightNumber}`}>
                    {h.number}
                  </h1>
                  <div className="left-content">
                    <p className="mb-1">{h.text}</p>
                    <p className={styles.sourceText}>{h.source}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3 about-home-buttons">
              {legacyData.buttons.map((btn, i) => (
                <Link key={i} href={btn.link} className={styles.navButtons}>
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Accreditation Logos Slider */}
        <div className="mt-5 pt-4 fifth-section-slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            spaceBetween={30}
            pagination={{ clickable: true }}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {legacyData.accreditations.map((acc, i) => (
              <SwiperSlide key={i}>
                <div className="gap-3 px-3 d-flex align-items-center content">
                  <Image
                    src={acc.img}
                    alt={acc.name}
                    width={80}
                    height={80}
                    className="img-fluid mb-2"
                  />
                  <p className="small w-50">{acc.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
