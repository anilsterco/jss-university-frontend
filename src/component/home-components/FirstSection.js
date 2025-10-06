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
  return (
    <div className="first-banner-slide">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        pagination={{ clickable: true }}
        // autoplay={{ delay: 3000 }}
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
            <div className="banner-content">
              <h1>{slide.title}</h1>
              <p>{slide.desc}</p>
              {slide.url && (
                <Link href={slide.url}>
                  Learn more about JSS{" "}
                  <FiArrowRightCircle style={{ marginLeft: "20px" }} />
                </Link>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <style jsx>{`
        .first-banner-slide {
          position: relative;
        }
        .banner-content a {
          padding-bottom: 8px;
          border-bottom: 1px solid;
          font-size: 18px;
        }
        .first-banner-slide .banner-content h1 {
          font-size: 60px;
          margin-bottom: 2rem;
        }
        .first-banner-slide .banner-content p {
          font-size: 16px;
          font-weight: 300;
          margin-bottom: 2rem;
        }
        .first-banner-slide .banner-content {
          color: #fff;
          width: 30%;
          position: absolute;
          bottom: 20%;
          left: 10%;
        }
        @media (min-width: 1024px) and (max-width: 1420px) {
          .first-banner-slide .banner-content {
            width: 50%;
          }
        }
      `}</style>
    </div>
  );
}