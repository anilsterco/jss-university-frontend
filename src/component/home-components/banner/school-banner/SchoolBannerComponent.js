"use client";

import { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./schoolBanner.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { WEB_URL } from "@/config/config";
import { usePathname } from "next/navigation";

export default function SchoolSlider({
  data,
  name,
  isDepartment = false,
  slug,
}) {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const currentPage = pathParts[1];
  const currentSlug = pathParts[2];

  const isSchoolPage =
    currentPage === "schools" && currentSlug !== "college-of-pharmacy"
      ? "School of"
      : currentSlug === "college-of-pharmacy"
        ? "College of"
        : "Department of";

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

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

  const bannerData = data?.length ? data : defaultBanner;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      loop
      autoplay={{ delay: 5000 }}
      slidesPerView={1}
      className={styles.swiperContainer}
    >
      {bannerData.map((slide, index) => (
        <SwiperSlide key={slide.id || index}>
          {/* Desktop Layout */}
          <div className={styles.bannerGrid}>
            <div className={styles.bannerLeft}>
              <div className={`${styles.bannerOverlay}`}>
                <div className="containerMD">
                  <div className={styles.bannerContent}>
                    <div className={styles.bannerLabel}>
                      {isDepartment ? name : slide.label}
                    </div>

                    <span className={styles.bannerSmall}>
                      {isSchoolPage}
                    </span>
                    <h1
                      className={styles.bannerContentH1}
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    />
                    <p className={styles.bannerContentP}>
                      {slide.desc}
                    </p>
                    {slide.url && (
                      <Link
                        href={`${WEB_URL + "schools/" + slug + slide.url}`}
                        className={styles.bannerContentA}>
                        {slide.linked_text || "Learn more"}
                        <Image
                          src="/images/header/banner-arrow.svg"
                          alt="arrow"
                          width={22}
                          height={22}
                          className={styles.iconSpacing}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>

            </div>

            <div className={styles.bannerRight}>
              <Image
                src={slide.desktop_banner}
                alt="banner image"
                width={1920}
                height={810}
                priority
                className={styles.desktopBanner}
              />
            </div>
          </div>

          {/* Mobile Layout */}
          <Image
            src={slide.mobile_banner}
            alt="mobile banner"
            width={400}
            height={500}
            className={styles.mobileBanner}
          />

          <div className={styles.mobileContent}>
            <div className={styles.mobileOverlay}>
              <div className="container">
                <div className={styles.bannerContent}>
                  <div className={styles.bannerLabel}>
                    {isDepartment ? name : slide.label}
                  </div>

                  <span className={styles.bannerSmall}>
                    {isSchoolPage}
                  </span>

                  <h1
                    className={styles.bannerContentH1}
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />

                  <p className={styles.bannerContentP}>
                    {slide.desc}
                  </p>

                  {slide.url && (
                    <Link
                      href={`${WEB_URL + "schools/" + slug + slide.url}`}
                      className={styles.bannerContentA}
                    >
                      {slide.linked_text || "Learn more"}

                      <Image
                        src="/images/header/banner-arrow.svg"
                        alt="arrow"
                        width={22}
                        height={22}
                        className={styles.iconSpacing}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}