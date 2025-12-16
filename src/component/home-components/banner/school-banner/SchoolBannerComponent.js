"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import styles from "./schoolBanner.module.css";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SchoolSlider({ data, name, isDepartment = false }) {
  // 🔹 Default Banner Fallback
  const defaultBanner = [
    {
      id: 1,
      label: "SCHOOL OF ENGINEERING",
      title:
        "A TRADITION OF <span>INNOVATION</span> AND <span>LEADERSHIP</span>",
      desc: "A long-standing history of fostering new ideas and guiding students.",
      linked_text: "Learn more about JSS",
      url: "/about-us",
      desktop_banner: "/images/header/school-banner.png",
      mobile_banner: "/images/home-page/mobile-main-banner.png",
    },
  ];

  // 🔹 Decide banner array
  const bannerData = data?.length ? data : defaultBanner;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop
      autoplay={{ delay: 5000 }}
      slidesPerView={1}
      className={styles.swiperContainer}
    >
      {bannerData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={styles.slideWrapper}>
            {/* LEFT CONTENT */}
            <div className={styles.leftSection}>
              <div className={styles.bannerContent}>
                <div className={styles.bannerLabel}>{name || slide.label}</div>
                <h1
                  className={styles.bannerContentH1}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                />
                <p className={styles.bannerContentP}>{slide.desc}</p>
                {slide.url && (
                  <Link href={slide.url} className={styles.bannerContentA}>
                    {slide.linked_text || "Learn more"}
                    <img
                      src="/images/header/banner-arrow.svg"
                      alt="arrow"
                      className={styles.iconSpacing}
                    />
                  </Link>
                )}
              </div>
            </div>

            {/* RIGHT IMAGE */}
            <div className={styles.rightSection}>
              <div className={styles.imageWrapper}>
                <Image
                  src={
                    slide.desktop_banner || "/images/header/school-banner.png"
                  }
                  alt={name || slide.label}
                  width={1100}
                  height={600}
                  priority
                  className={`w-100 ${styles.desktopBanner}`}
                />
                <Image
                  src={
                    slide.mobile_banner ||
                    "/images/home-page/mobile-main-banner.png"
                  }
                  alt={name || slide.label}
                  width={600}
                  height={600}
                  priority
                  className={styles.mobileBanner}
                />

                {isDepartment && (
                  <div className={styles.departmentOverlay}>
                    <span>DEPARTMENT OF</span>
                    <h2>{name}</h2>
                  </div>
                )}
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
