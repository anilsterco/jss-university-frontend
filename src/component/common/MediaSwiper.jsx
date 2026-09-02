// component/common/MediaSwiper.jsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "swiper/css/navigation";
import "swiper/css";

export default function MediaSwiper({
  media,
  uid,
  width = 800,
  height = 520,
  alt = "media",
  fallbackImage,
  imgClassName,
  loading = "lazy",
  mediaStyle = { objectFit: "cover" }
}) {
  // No media at all -> optional fallback image
  if (!media || media.length === 0) {
    if (!fallbackImage) return null;
    return (
      <figure className="shine-effect">
        <Image
          src={fallbackImage}
          alt={alt}
          width={width}
          height={height}
          loading={loading}
          className={imgClassName}
        />
      </figure>
    );
  }

  // Single item -> render directly, no Swiper needed
  if (media.length === 1) {
    const item = media[0];
    return (
      <figure className="shine-effect">
        {item.video ? (
          <video
            src={item.video}
            width={width}
            height={height}
            autoPlay
            muted
            loop
            playsInline
            style={mediaStyle}
          />
        ) : (
          <Image
            src={item.image}
            alt={alt.slice(0, 50)}
            width={width}
            height={height}
            loading={loading}
            style={mediaStyle}
          />
        )}
      </figure>
    );
  }

  // Multiple items -> Swiper carousel with uniquely-scoped nav buttons
  return (
    <figure className="shine-effect">
      <div style={{ position: "relative" }}>
        <Swiper
          modules={[Autoplay, Navigation]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          navigation={{
            nextEl: `.swiper-next-${uid}`,
            prevEl: `.swiper-prev-${uid}`,
          }}
          loop
          slidesPerView={1}
        >
          {media.map((item, i) => (
            <SwiperSlide key={i}>
              {item.video ? (
                <video
                  src={item.video}
                  width={width}
                  height={height}
                  autoPlay
                  muted
                  loop
                  playsInline
                  style={mediaStyle}
                />
              ) : (
                <Image
                  src={item.image}
                  alt={alt.slice(0, 50)}
                  width={width}
                  height={height}
                  loading={loading}
                  style={mediaStyle}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        <button
          type="button"
          className={`swiper-button-prev swiper-prev-${uid}`}
          aria-label="Previous slide"
        >
          <MdChevronLeft />
        </button>
        <button
          type="button"
          className={`swiper-button-next swiper-next-${uid}`}
          aria-label="Next slide"
        >
          <MdChevronRight />
        </button>
      </div>
    </figure>
  );
}