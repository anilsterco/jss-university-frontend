"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./banner.module.css";

export default function HeroSlider() {
  const bannerData = [
    {
      id: 1,
      title: "A TRADITION OF INNOVATION AND LEADERSHIP",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      display_order: 100,
      linked_text: "Learn more about JSS",
      url: "#",
      img: "/images/home-page/placeholder-banner.png",
    },
  ];

  return (
    <div >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
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
              width={1920}
              height={400}
              priority
              style={{ width: "100%", height: "100%" }}
              className={styles.slideImage}
            />
            <div className={styles.bannerOverlay}>
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
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
