"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from "swiper/modules";

export default function AboutOne({ data }) {


  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);


  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {


      case "topBanner":
        return (
          <div
            className="row justify-content-center about_top"
            key={`about-section-${sectionIndex}`}
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            {section.items
              .sort((a, b) => a.position - b.position)
              .map((item, index) => (
                <div
                  className="col-lg-12"
                  key={item.id || item.item_uuid || index}
                >
                  <div
                    className="abt_cntnt"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <h5 className="about_subtitle">A New Chapter in a Legacy of Excellence </h5>
                    {item.title && <p>{item.title}</p>}

                    {item.file && (
                      <figure
                        className="shine-effect"
                        data-aos="zoom-in"
                        data-aos-duration="1000"
                      >
                        <Image
                          src={item.file}
                          alt={item.title || "About JSS Academy"}
                          width={800}
                          height={500}
                          className="img-fluid w-100"
                        />
                      </figure>
                    )}
                  </div>

                  {item.description && (
                    <div
                      className="estblish"
                      data-aos="fade-in"
                      data-aos-delay="300"
                      data-aos-duration="900"
                    >
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        );


      case "logoDesc":
        return (
          <div
            className="row justify-content-center"
            key={`logo-section-${sectionIndex}`}
          >
            <div className="col-lg-12">
              {/* <div className="top_log_grid">
                {section.items
                  .sort((a, b) => a.position - b.position)
                  .map((item, i) => (
                    <figure
                      key={item.id || i}
                      data-aos="fade-up"
                      data-aos-delay={i * 150}
                      data-aos-duration="800"
                    >
                      <Image
                        src={item.file}
                        alt={item.description}
                        width={100}
                        height={100}
                      />
                      <figcaption>
                        <p>{item.description}</p>
                      </figcaption>
                    </figure>
                  ))}
              </div> */}
              <div className="ab_estab_slider" >
                <Swiper
                  pagination={true}
                  modules={[Navigation, Autoplay]}
                  spaceBetween={30}
                  slidesPerView={4}
                  loop={true}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 }
                  }}
                >
                  {section.items
                    .sort((a, b) => a.position - b.position)
                    .map((item, i) => (
                      <SwiperSlide key={item.id || i}>
                        <div
                          className="estab_slide_item"
                          style={{
                          
                          }}
                        >
                          <figure
                            data-aos="fade-up"
                            data-aos-delay={i * 150}
                            data-aos-duration="800"
                          >
                            <Image
                              src={item.file}
                              alt={item.description || "logo"}
                              width={72}
                              height={72}
                            />

                            <figcaption>
                              <p>{item.description}</p>
                            </figcaption>
                          </figure>
                        </div>
                      </SwiperSlide>
                    ))}
                </Swiper>
              </div>

            </div>
          </div>
        );


      case "figureDesc":
        return (
          <div
            className="row justify-content-center about_bottom"
            key={`figure-section-${sectionIndex}`}
          >
            <div className="col-lg-10">
              <div className="btm_log_grid">
                {section.items
                  .sort((a, b) => a.position - b.position)
                  .map((item, i) => (
                    <figure
                      key={item.item_uuid || i}
                      data-aos="fade-right"
                      data-aos-delay={i * 200}
                      data-aos-duration="900"
                    >
                      <figcaption>
                        <h4>
                          <sup>#</sup>
                          {item.figure.replace("#", "")}
                        </h4>
                        <p>{item.facts}</p>
                      </figcaption>

                      <Image
                        src={item.file}
                        alt={item.facts}
                        width={120}
                        height={25}
                      />
                    </figure>
                  ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="about_one">
      <div className="container">
        {data && data.length > 0 ? (
          data.map((section, index) => renderSection(section, index))
        ) : (
          <div className="abt_cntnt" data-aos="fade-up">
            <p>Welcome to JSS Academy of Technical Education</p>
          </div>
        )}
      </div>
    </section>
  );
}
