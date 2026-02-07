"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

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
                    <h5 className="about_subtitle">{item.title}</h5>
                    {item.subtitle && <p>{item.subtitle}</p>}

                    {item.file && (
                      <figure
                        className="shine-effect image-overlay-figure"
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
                        {(item.count || item.count_description) && (
                          <figcaption className="image-overlay-caption">
                            {item.count && <h5>{item.count}</h5>}
                            {item.count_description && (
                              <p>{item.count_description}</p>
                            )}
                          </figcaption>
                        )}
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
              <div className="ab_estab_slider">
                <Swiper
                  modules={[Navigation, Autoplay, Pagination]}
                  spaceBetween={30}
                  slidesPerView={4}
                  loop={true}
                  pagination={{ clickable: true }}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    576: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    992: { slidesPerView: 4 },
                  }}
                >
                  {section.items
                    ?.sort(
                      (a, b) =>
                        Number(a.position || 0) - Number(b.position || 0),
                    )
                    .map((item, i) => {
                      const hasFigure =
                        item.figure !== null &&
                        item.figure !== undefined &&
                        item.figure !== "";

                      return (
                        <SwiperSlide key={item.id || item.item_uuid || i}>
                          <div className="estab_slide_item">
                            <figure
                              data-aos="fade-up"
                              data-aos-delay={i * 150}
                              data-aos-duration="800"
                            >
                              {hasFigure ? (
                                <>
                                  <figcaption>
                                    <h4 className="estab_figure">
                                      <span> #</span>{String(item.figure)}
                                    </h4>
                                    {item.description && (
                                      <p>{item.description}</p>
                                    )}
                                  </figcaption>
                                  {item.file && (
                                    <Image
                                      src={item.file}
                                      alt={item.description || "figure"}
                                      width={120}
                                      height={30}
                                    />
                                  )}
                                </>
                              ) : (
                                <>
                                  {item.file && (
                                    <Image
                                      src={item.file}
                                      alt={item.description || "logo"}
                                      width={72}
                                      height={72}
                                    />
                                  )}
                                  {item.description && (
                                    <figcaption>
                                      <p>{item.description}</p>
                                    </figcaption>
                                  )}
                                </>
                              )}
                            </figure>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                </Swiper>
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
