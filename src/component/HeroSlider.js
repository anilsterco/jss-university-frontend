"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

export default function HeroSlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      // autoplay={{ delay: 3000 }}
      loop={true}
      spaceBetween={20}
      slidesPerView={1}
      style={{ width: "100%", height: "700px" }}
    >
      <SwiperSlide>
        <Image
          src="/images/home-page/placeholder-banner.png"
          alt="Slide 1"
          fill
          style={{ objectFit: "cover" }}
        />
        <h1>Slide 1</h1>
      </SwiperSlide>
      <SwiperSlide>
        <h1>Slide 2</h1>
        <Image
          src="/images/home-page/home-banner.png"
          alt="Slide 2"
          fill
          style={{ objectFit: "cover" }}
        />
      </SwiperSlide>
    </Swiper>
  );
}
