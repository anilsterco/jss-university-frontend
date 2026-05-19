"use client";

import styles from "./faculty-list.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import AOS from "aos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";

export default function FacultyList({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const facultyData = data || {};

  return (
    <div
      className={`${styles.dep_faculty} faculty_section`}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <div className="container">
        {/* Header */}
        <div className={styles.headerSection}>
          <p className={styles.subtitle}>
            {facultyData.subtitle}
          </p>

          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{
              __html: facultyData.title,
            }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          />
        </div>

        {/* Slider */}
        <div
          className={`${styles.sliderContainer} d-flex align-items-center gap-5`}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".faculty-next",
              prevEl: ".faculty-prev",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={false}
            loop={false}
            speed={1000}
            spaceBetween={45}
            slidesPerView={4}
            className={styles.slider}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {Object.values(facultyData?.members || {}).map(
              (slide) => (
                <SwiperSlide
                  key={slide.id}
                  className={styles.facultyCard}
                >
                  <Link href={`/faculty/${slide.url}`}>
                    <Image
                      src={slide.img}
                      alt={slide.name || "Faculty Image"}
                      width={500}
                      height={500}
                      priority
                      className={styles.slideImage}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />

                    <div className={styles.facultyInfo}>
                      <h3 className={styles.facultyName}>
                        {slide.name}
                      </h3>

                      <p
                        className={
                          styles.facultyDesignation
                        }
                      >
                        {slide.designation}
                      </p>

                      <div
                        className={styles.underline}
                      ></div>
                    </div>
                  </Link>
                </SwiperSlide>
              )
            )}
          </Swiper>
        </div>

        {/* Navigation */}
        <div >
          <CiCircleChevLeft
            className="faculty-prev"
            fontSize={24}
            color="#002238b5"
            style={{
              cursor: "pointer",
              marginRight: "0.4rem",
            }}
          />

          <CiCircleChevRight
            className="faculty-next"
            fontSize={24}
            color="#002238b5"
            style={{
              cursor: "pointer",
            }}
          />
        </div>
      </div>
    </div>
  );
}