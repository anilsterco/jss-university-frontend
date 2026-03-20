"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

export default function AcademicLabs({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "academicLabs") return null;

        const items = [...section.items].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0),
        );

        return items.map((item, idx) => (
          <section
            key={`academicLabs-${sectionIndex}-${idx}`}
            className="academic_labmain"
            id={`${item?.sectionId}`}
          >
            <div className="container max-content-lg pe-lg-0 me-lg-0">
              <div className="academic_grid">
                <div className="academic_lab_leftsec">
                  {item.title && <h5>{item.title}</h5>}
                  {item.subtitle && <h4>{item.subtitle}</h4>}
                  {item.desc && <p>{item.desc}</p>}

                  {Array.isArray(item.countBox) && (
                    <div className="ab_jss_coutsec">
                      {item.countBox.map((box, bidx) => (
                        <div className="ab_jss_c_col" key={bidx}>
                          <h4>{box.count}</h4>
                          <p>{box.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {Array.isArray(item.sliderBox) && item.sliderBox.length > 0 && (
                  <div className="acade_lab_slider">
                    <Swiper
                        modules={[Navigation, EffectFade, Pagination, Autoplay]}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}
                        fadeEffect={{ crossFade: true }}
                        spaceBetween={30}
                        slidesPerView={1.75}
                        loop={true}
                        navigation={{
                          prevEl: ".academic_labs_prev",
                          nextEl: ".academic_labs_next",
                        }}
                        breakpoints={{
                          0: {
                            slidesPerView: 1,
                          },
                          768: {
                            slidesPerView: 1.75, 
                          },
                        }}
                      >
                        {item.sliderBox.map((slide, sidx) => (
                          <SwiperSlide key={sidx}>
                            <figure className="shine-effect img-full">
                              <Image
                                src={slide.image}
                                alt={item.title || "Academic Lab"}
                                className="w-100"
                                width={800}
                                height={520}
                                style={{ objectFit: "cover" }}
                              />
                               <figcaption>
                                {slide.title}
                               </figcaption>
                            </figure>
                          </SwiperSlide>
                        ))}

                   
                        <div className="ac_pagination">
                          <button className="ac_swi_btn academic_labs_next">
                            <img
                              src="/images/about-page/academic_lab_next.svg"
                              alt="Next"
                              className="img-fluid"
                            />
                          </button>
                          <button className="ac_swi_btn academic_labs_prev">
                            <img
                              src="/images/about-page/academic_lab_next.svg"
                              alt="Previous"
                              className="img-fluid"
                            />
                          </button>
                        </div>
                      </Swiper>
                  </div>
                )}
              </div>
            </div>
          </section>
        ));
      })}
    </>
  );
}
