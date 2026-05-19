"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityThree({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "sportsfacilities") return null;

        const item = section.items?.[0];
        const slides = item?.boxex || [];

        if (slides.length === 0) return null;

        return (
          <section
            className="sport_fac_swiper"
            key={`sports-${sectionIndex}`}
           id={`${item?.sectionId || "library"}`}
          >
            <Swiper
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 3500 }}
              navigation
              pagination={{ clickable: true }}
            >
              {slides.map((slide, idx) => (
                <SwiperSlide key={idx}>
                  <div className="sports_fac_slider">
                    {slide.images && (
                      <figure className="shine-effect img-full">
                        <Image
                          src={slide.images}
                          alt={slide.title || "Sports Facility"}
                          className="w-100"
                          width={1920}
                          height={790}
                          style={{ objectFit: "cover" }}
                        />
                      </figure>
                    )}

                    {slide.video && (
                      <figure className="shine-effect img-full">
                        <video
                          src={slide.video}
                          alt={slide.title || "Sports Facility"}
                          className="w-100"
                          width={1920}
                          height={790}
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{ objectFit: "cover" }}
                        />
                      </figure>
                    )}
                    <div className="container">
                      <div className="spo_fa_content">
                        <div className="spo_sli_hed">
                          {slide.title && <h5>{slide.title}</h5>}
                          {slide.subtitle && <h6>{slide.subtitle}</h6>}
                        </div>

                        {(slide.counter || slide.counterdec) && (
                          <div className="spo_fa_counsec">
                            {slide.counter && <h4>{slide.counter}</h4>}
                            {slide.counterdec && <p>{slide.counterdec}</p>}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </section>
        );
      })}
    </>
  );
}
