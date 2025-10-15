"use client";
import styles from "./laboratory.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";

export default function Laboratories() {
  // Dynamic data structure
  const laboratoriesData = {
    subtitle: "LABORATORIES",
    title: "CUTTING-EDGE & SPECIALIZED THE CSE DEPARTMENT",
    description:
      "futurns several specialized labs, each focused on critical technical domains.",
    url: "#",
    labs: [
      {
        id: 1,
        title: "CORE LABS",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#1",
      },
      {
        id: 2,
        title: "OPERATING SYSTEM & MULTIMEDIA LAB",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#2",
      },
      {
        id: 3,
        title: "SOFTWARE ENGINEERING & WEB DEVELOPMENT LAB",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#3",
      },
      {
        id: 4,
        title: "COMPUTATIONAL & PROGRAMMING LAB",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#4",
      },
      {
        id: 5,
        title: "ARTIFICIAL INTELLIGENCE LAB",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#5",
      },
    ],
    applyButton: {
      text: "APPLY NOW",
      url: "#",
    },
  };

  return (
    <div className={styles.container}>
      <div className="container-fluid">
        {/* Header Section */}
        <div className={styles.headerSection}>
          <p className={styles.subtitle}>{laboratoriesData.subtitle}</p>
          <h2 className={styles.title}>{laboratoriesData.title}</h2>
          <p className={styles.description}>{laboratoriesData.description}</p>
          <Link href={laboratoriesData.url}>
            <SlArrowRightCircle fontSize={20} color="white" />
          </Link>
        </div>

        {/* Slider Container */}
        <div className={styles.sliderWrapper}>
          {/* Lab Cards Slider */}

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            pagination={false}
            loop={true}
            spaceBetween={25}
            slidesPerView={3.5}
            className={styles.slider}
          >
            {laboratoriesData.labs.map((lab) => (
              <SwiperSlide key={lab.id} className={styles.facultyCard}>
                <Link href={lab.url} key={lab.id}>
                  <Image
                    src={lab.img}
                    alt="slide image"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "100%" }}
                    priority
                    className={styles.slideImage}
                  />
                  <div className={styles.gradientOverlay}></div>
                  <div className={styles.labInfo}>
                    <h3 className={styles.labTitle}>{lab.title}</h3>
                    <SlArrowRightCircle fontSize={20} color="white" />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Apply Button */}
        <div className={styles.buttonWrapper}>
          <button className={styles.applyButton}>
            <Link
              href={laboratoriesData.applyButton.url}
              style={{ color: "inherit" }}
            >
              {laboratoriesData.applyButton.text}
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
