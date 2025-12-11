"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./schoolBanner.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function SchoolSlider({ data }) {
  console.log("School Banner Data:", data);
  const bannerData = data?.length
    ? data
    : [
        {
          id: 1,
          label: "SCHOOL OF ENGINEERING",
          title: "A TRADITION OF <span>INNOVATION</span> AND <span>LEADERSHIP</span>",
          desc: "A long-standing history of fostering new ideas and guiding students to become leaders in their fields.",
          linked_text: "Learn more about JSS",
          url: "about-us",
          desktop_banner: "/images/header/school-banner.png",
          mobile_banner: "/images/home-page/mobile-main-banner.png",
        },
      ];

  return (
    <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className={styles.swiperContainer}
    >
      {bannerData.map((slide) => (
        <SwiperSlide key={slide.id}>
          <div className={styles.slideWrapper}>
            {/* Left Section - Text Content */}
        
            <div className={styles.leftSection}>
              <div className={styles.bannerContent}>
                    <div className={styles.bannerLabel}>{slide.label ?? "SCHOOL OF ENGINEERING"}</div>
                <h1
                  className={styles.bannerContentH1}
                  dangerouslySetInnerHTML={{ __html: slide.title }}
                ></h1>
                <p className={styles.bannerContentP}>{slide.desc}</p>
                {slide.url && (
                  <Link href={"about-jss"} className={styles.bannerContentA}>
                    {slide.linked_text ?? "Learn more about JSS"}
                    <FiArrowRightCircle className={styles.iconSpacing} />
                  </Link>
                )}
              </div>
            </div>

            {/* Right Section - Image */}
            <div className={styles.rightSection}>
              <Image
                src={!slide.desktop_banner ? slide.desktop_banner : "/images/header/school-banner.png"}
                alt={slide.title.replace(/<[^>]*>/g, '')}
                width={1200}
                height={600}
                priority
                className={styles.desktopBanner}
              />
              <Image
                src={!slide.mobile_banner ? slide.mobile_banner : "/images/home-page/mobile-main-banner.png"}
                alt={slide.title.replace(/<[^>]*>/g, '')}
                width={1200}
                height={1200}
                priority
                className={styles.mobileBanner}
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}