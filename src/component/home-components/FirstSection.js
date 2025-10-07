"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      title: "A TRADITION OF INNOVATION AND LEADERSHIP",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      img: "/images/home-page/placeholder-banner.png",
      url: "/",
    },
    {
      id: 2,
      title: "INNOVATION AND LEADERSHIP A TRADITION OF",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      img: "/images/home-page/placeholder-banner.png",
      url: "/",
    },
    {
      id: 3,
      title: "TRADITION OF INNOVATION AND LEADERSHIP",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
      img: "/images/home-page/placeholder-banner.png",
      url: "/",
    },
  ];

  // Styles object
  const styles = {
    firstBannerSlide: {
      position: 'relative'
    },
    bannerContent: {
      color: '#fff',
      width: '30%',
      position: 'absolute',
      bottom: '20%',
      left: '10%'
    },
    bannerContentH1: {
      fontSize: '60px',
      marginBottom: '2rem'
    },
    bannerContentP: {
      fontSize: '16px',
      fontWeight: 300,
      marginBottom: '2rem'
    },
    bannerContentA: {
      paddingBottom: '8px',
      borderBottom: '1px solid',
      fontSize: '18px'
    },
    // Media query styles would need to be handled differently
    // since inline styles don't support media queries
  };

  return (
    <div className="first-banner-slide" style={styles.firstBannerSlide}>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        pagination={{ clickable: true }}
        loop={true}
        spaceBetween={20}
        slidesPerView={1}
        style={{ width: "100%", height: "700px" }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <Image
              src={slide.img}
              alt="slide image"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            <div className="banner-content" style={styles.bannerContent}>
              <h1 style={styles.bannerContentH1}>{slide.title}</h1>
              <p style={styles.bannerContentP}>{slide.desc}</p>
              {slide.url && (
                <Link href={slide.url} style={styles.bannerContentA}>
                  Learn more about JSS{" "}
                  <FiArrowRightCircle style={{ marginLeft: "20px" }} />
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}