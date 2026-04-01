"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

export default function AboutFour({ data }) {
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

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "leftSection") return null;

        return (
          <section
            key={`left-section-${sectionIndex}`}
            className={`about_four ${section?.items[0]?.pageType}`}
            data-aos="fade-up"
          >
            <div className="container">
              {section.items
                ?.sort((a, b) => a.position - b.position)
                .map((item, idx) => (
                  <div key={idx} className="about_f_value">
                    {(item.image || item.imageVideo?.length > 0) && (
                      <div
                        className="ab_fo_imgsec"
                        data-aos="fade-left"
                        data-aos-delay="300"
                      >
                        {item?.image && (
                          <figure className="shine-effect">
                            <Image
                              src={item.image}
                              alt={
                                item.title
                                  ? item.title.slice(0, 50)
                                  : "About Section"
                              }
                              width={683}
                              height={520}
                              style={{
                                width: "100%",
                                height: "auto",
                              }}
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
                                  height={520}
                                  autoPlay
                                  muted
                                  loop
                                  playsInline
                                  style={{
                                    width: "100%",
                                    height: "auto",
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
                                  height={520}
                                  style={{ width: "100%", height: "auto" }}
                                />
                              )
                            ) : (
                              // Multiple items - Swiper slider
                              <div style={{ position: "relative" }}>
                                <Swiper
                                  modules={[Autoplay, Navigation]}
                                  autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                  }}
                                  navigation={{
                                    nextEl: `.swiper-next-${idx}`,
                                    prevEl: `.swiper-prev-${idx}`,
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
                                          height={520}
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
                                          height={520}
                                          style={
                                            {
                                              // width: "100%",
                                              // height: "auto",
                                            }
                                          }
                                        />
                                      )}
                                    </SwiperSlide>
                                  ))}
                                </Swiper>

                                {/* Custom Nav Buttons */}
                                <button
                                  className={`swiper-button-prev swiper-prev-${idx}`}
                                >
                                  <MdChevronLeft />
                                </button>
                                <button
                                  className={`swiper-button-next swiper-next-${idx}`}
                                >
                                  <MdChevronRight />
                                </button>
                              </div>
                            )}
                          </figure>
                        )}
                      </div>
                    )}
                    <div
                      className="ab_f_content"
                      data-aos="fade-right"
                      data-aos-delay="200"
                    >
                      {item.title && <h3>{item.title}</h3>}
                      {item.paragraph?.length > 0 && (
                        <div className="des_group">
                          {item.paragraph.map((p, i) => (
                            <p key={i}>{p.text}</p>
                          ))}
                        </div>
                      )}
                      {item?.linkUrl && (
                        <Link className="read_more_btn" href={item.linkUrl} target="_blank">
                          {item.linkText}
                        </Link>
                      )}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
