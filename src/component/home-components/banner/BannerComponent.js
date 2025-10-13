// components/home-components/Banner/index.js
"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./banner.module.css";

export default function HeroSlider({ data }) {
  // Show loading if no data
  if (!data) {
    return (
      <section className="container-fluid">
        <div className="text-center py-5">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p className="mt-2">Loading banners...</p>
        </div>
      </section>
    );
  }

  // Show banners
  const bannerData = data.data.banners;
  console.log(bannerData);

  if (data.status === 200) {
    return (
      <div className={styles.firstBannerSlide}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={false}
          pagination={{ clickable: true }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          className={styles.swiperContainer}
        >
          {bannerData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <Image
                src={slide.img}
                alt="slide image"
                fill
                priority
                className={styles.slideImage}
              />
              <div className={styles.bannerContent}>
                <h1 className={styles.bannerContentH1}>{slide.title}</h1>
                <p className={styles.bannerContentP}>{slide.desc}</p>
                {slide.url && (
                  <Link href={slide.url} className={styles.bannerContentA}>
                    {slide.linked_text}
                    <FiArrowRightCircle className={styles.iconSpacing} />
                  </Link>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  }
}
