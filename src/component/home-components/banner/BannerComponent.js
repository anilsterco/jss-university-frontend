"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./banner.module.css";

export default function HeroSlider() {
  const banners = [
    {
      id: 1,
      title: "A TRADITION OF INNOVATION AND LEADERSHI",
      desc: "Perfect 👍 You want to use a Bootstrap modal (confirmation popup) for deletion instead of the default JavaScript confirm() — integrated cleanly with your Inertia + React banner carousel.",
      display_order: 100,
      linked_text: "Learn More About JSS",
      url: "#",
      img: "http://sd7:8080/jss/assets/img/banners/1760163859_68e9f81352a2d.png",
    },
  ];

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
