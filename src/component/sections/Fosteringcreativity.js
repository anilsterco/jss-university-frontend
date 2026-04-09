"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "swiper/css/navigation";
import "swiper/css";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function Fosteringcreativity({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "fosteringcreativity") return null;

        return section.items
          ?.sort((a, b) => a.position - b.position)
          .map((item, index) => (
            <section
              id="equal-opportunity-cell"
              className="about_fost_sec"
              key={`${sectionIndex}-${index}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ab_fost_grid">
                      <div
                        className="ab_fost_lft_col"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <h5>{item.title}</h5>

                        {item.paragraph?.map((para, i) => (
                          <p key={i}>{para.paragraph}</p>
                        ))}

                        {item.button_name && (
                          <a
                            target="_blank"
                            href={item.button_url || "#"}
                            className="learn_more"
                          >
                            {item.button_name}
                          </a>
                        )}
                      </div>
                      <div className="grid_em_rigt">
                        <div className="empo_rgt_imgsec">
                          {!item?.imageVideo && (
                            <figure className="shine-effect">
                              <Image
                                src="/images/about-page/ab_fostering.webp"
                                alt={item.title}
                                width={683}
                                height={750}
                                className="img-fluid w-100"
                                data-aos="fade-up"
                                data-aos-delay="200"
                              />
                            </figure>
                          )}

                          {item?.imageVideo?.length > 0 && (
                            <figure className="shine-effect">
                              {item.imageVideo.length === 1 ? (
                                // Single item - show directly
                                item.imageVideo[0].video ? (
                                  <video
                                    src={item.imageVideo[0].video}
                                    width={683}
                                    height={750}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    style={{
                                      // width: "100%",
                                      // height: "auto",
                                      objectFit: "cover",
                                    }}
                                  />
                                ) : (
                                  <Image
                                    src={item.imageVideo[0].image}
                                    alt={
                                      item.title
                                        ? item.title.slice(0, 50)
                                        : "About Section"
                                    }
                                    width={683}
                                    height={750}
                                    style={{
                                      // width: "100%",
                                      // height: "auto",
                                      objectFit: "cover",
                                    }}
                                  />
                                )
                              ) : (
                                <div style={{ position: "relative" }}>
                                  <Swiper
                                    modules={[Autoplay, Navigation]}
                                    autoplay={{
                                      delay: 3000,
                                      disableOnInteraction: false,
                                    }}
                                    navigation={{
                                      nextEl: `.swiper-next-${index}`,
                                      prevEl: `.swiper-prev-${index}`,
                                    }}
                                    loop={true}
                                    slidesPerView={1}
                                  >
                                    {item.imageVideo.map((media, mediaIdx) => (
                                      <SwiperSlide key={mediaIdx}>
                                        {media.video ? (
                                          <video
                                            src={media.video}
                                            width={683}
                                            height={750}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                            style={{
                                              // width: "100%",
                                              // height: "auto",
                                              objectFit: "cover",
                                            }}
                                          />
                                        ) : (
                                          <Image
                                            src={media.image}
                                            alt={
                                              item.title
                                                ? item.title.slice(0, 50)
                                                : "About Section"
                                            }
                                            width={683}
                                            height={750}
                                            style={{
                                              // width: "100%",
                                              // height: "auto",
                                              objectFit: "cover",
                                            }}
                                          />
                                        )}
                                      </SwiperSlide>
                                    ))}
                                  </Swiper>

                                  {/* Custom Nav Buttons */}
                                  <button
                                    type="button"
                                    className={`swiper-button-prev swiper-prev-${index}`}
                                    aria-label="Previous slide"
                                  >
                                    <MdChevronLeft />
                                  </button>
                                  <button
                                    type="button"
                                    className={`swiper-button-next swiper-next-${index}`}
                                    aria-label="Next slide"
                                  >
                                    <MdChevronRight />
                                  </button>
                                </div>
                              )}
                            </figure>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ));
      })}
    </>
  );
}
