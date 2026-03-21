"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./banner.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { WEB_URL } from "@/config/config";
import { usePathname } from "next/navigation";
export default function HeroSlider({ data, slug }) {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const currentPage = pathParts[1];
  const currentSlug = pathParts[2];

  const isDepartmentPage = currentPage === "department" && true;

  useEffect(() => {
    AOS.init({
      once: true,
      easing: "ease-in-out",
      duration: 800,
    });
  }, []);
  const bannerData = data?.length
    ? data
    : [
        {
          id: 1,
          title: "No Data Found",
          desc: "",
          linked_text: "",
          url: "about-us",
          desktop_banner: "/images/home-page/placeholder-banner.png",
          mobile_banner: "/images/home-page/mobile-main-banner.png",
        },
      ];

  return (
    <>
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
            <Image
              src={slide.desktop_banner}
              alt="slide image"
              width={1920}
              height={810}
              priority
              style={{ width: "100%", objectFit: "cover" }}
              className={styles.desktopBanner}
            />
            <Image
              src={slide.mobile_banner}
              alt="slide image"
              width={1920}
              height={810}
              priority
              style={{ width: "100%", height: "100%" }}
              className={styles.mobileBanner}
            />
            <div className={` departBanner ${styles.bannerOverlay}`} >
              <div className="container">
                <div className={` departtext ${styles.bannerContent}`}>
                  {isDepartmentPage && (
                    <span className={styles.bannerSmall}>Department of</span>
                  )}

                  <h1
                    className={styles.bannerContentH1}
                    dangerouslySetInnerHTML={{ __html: slide.title }}
                    data-aos="fade-right"
                    data-aos-delay="0"
                  ></h1>
                  <p
                    className={styles.bannerContentP}
                    data-aos="fade-right"
                    data-aos-delay="200"
                  >
                    {slide.desc}
                  </p>
                  {slide.url && (
                    <Link
                      href={`${slug ? WEB_URL + "department/" + slug + slide.url : WEB_URL + slide.url}`}
                      className={styles.bannerContentA}
                      data-aos="fade-right"
                      data-aos-delay="300"
                    >
                      {slide.linked_text}
                      <Image
                        src="/images/home-page/jss_bannerIcon.svg"
                        alt="visit icons"
                        width={22}
                        height={22}
                        className={styles.iconSpacing}
                      />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
