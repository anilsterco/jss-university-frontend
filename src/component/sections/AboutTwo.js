"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutTwo({ data }) {
  // Render sections in the exact order they come from the API
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "slider":
        return (
          <div key={`slider-section-${sectionIndex}`} className="early-grid">
            <Swiper
              modules={[Navigation, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: `.earlygrowth-next-${sectionIndex}`,
                prevEl: `.earlygrowth-prev-${sectionIndex}`,
              }}
            >
              {section.items
                .sort((a, b) => a.position - b.position)
                .map((item, index) => (
                  <SwiperSlide key={item.item_uuid || index} className="early-slide">
                    <figure>
                      <Image
                        src={item.file || "/default-image.jpg"}
                        alt={item.title || "Early Growth"}
                        width={700}
                        height={400}
                        style={{ width: "100%", height: "auto" }}
                      />
                    </figure>
                    <div className="early_rgt">
                      <h4>{item.title}</h4>
                      <h5>{item.subtitle}</h5>
                      <div className="inst-reg">
                        <h5>{item.bottomTitle}</h5>
                        <h3>{item.bottomSubTitle}</h3>
                      </div>
                      <div className="early-arrows">
                        <BsArrowLeftCircle className={`earlygrowth-prev-${sectionIndex}`} />
                        <BsArrowRightCircle className={`earlygrowth-next-${sectionIndex}`} />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="about_two">
      <div className="container">
        {/* Render all sections in the exact order from API */}
        {data.map((section, index) => renderSection(section, index))}
        
        {/* Fallback if no sections at all */}
        {data.length === 0 && (
          <div className="early-grid">
            <p>No slider content available</p>
          </div>
        )}
      </div>
    </section>
  );
}