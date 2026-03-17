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
      ? "Schools of"
      : currentSlug == "college-of-pharmacy"
        ? "College of"
        : "Departments of";

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
      label: "SCHOOL OF ENGINEERING1",
      title:
        "A1 TRADITION OF <span>INNOVATION</span> AND <span>LEADERSHIP</span>",
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
          <div className={styles.slideWrapper}>
            <Image
              src={slide.desktop_banner}
              alt="banner image"
              fill
              priority
              className={styles.desktopBanner}
            />
            <Image
              src={slide.mobile_banner}
              alt="mobile banner"
              fill
              priority
              className={styles.mobileBanner}
            />
            <div className={styles.overlay}>
              <div className="container">
                <div className={styles.bannerContent}>
                  <div className={styles.bannerLabel}>
                    {isDepartment ? name : slide.label}
                  </div>
                  <span className={styles.bannerSmall}>{isSchoolPage}</span>
                  <h1
                    className={styles.bannerContentH1}
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                  />
                  <p className={styles.bannerContentP}>{slide.desc}</p>
                  {slide.url && (
                    <Link
                      href={`${WEB_URL + "schools/" + slug + slide.url}`}
                      className={styles.bannerContentA}
                    >
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
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
