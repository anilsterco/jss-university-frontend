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

export default function EmpowringPeople({ data }) {
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
        if (section.type !== "empowringPeople") return null;
        return section.items
          ?.sort((a, b) => a.position - b.position)
          .map((item, index) => (
            <section className="about_jsstwo" key={`${sectionIndex}-${index}`}>
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="grid_emaboutjss">
                      <div className="grid_em_leftsec" data-aos="fade-right">
                        <div className="about_subtitle">
                          <h5>{item.title}</h5>
                          {item.subtitle && <p>{item.subtitle}</p>}
                        </div>

                        <div className="para">
                          {item.paragraph?.map((para, i) => (
                            <p key={i}>{para.paragraph}</p>
                          ))}
                        </div>
                      </div>

                      <div className="grid_em_rigt" data-aos="fade-left">
                        {item.image && (
                          <div className="empo_rgt_imgsec">
                            <figure className="shine-effect">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={800}
                                height={520}
                                className=""
                              />
                            </figure>
                          </div>
                        )}

                        {item?.imageVideo?.length > 0 && (
                          <figure className="shine-effect">
                            {item.imageVideo.length === 1 ? (
                              // Single item - show directly
                              item.imageVideo[0].video ? (
                                <video
                                  src={item.imageVideo[0].video}
                                  width={800}
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
                                  src={item.imageVideo[0].image}
                                  alt={
                                    item.title
                                      ? item.title.slice(0, 50)
                                      : "About Section"
                                  }
                                  width={800}
                                  height={520}
                                  // style={{ width: "100%", height: "auto" }}
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
                                    nextEl: `.swiper-next-${index}-empowering`,
                                    prevEl: `.swiper-prev-${index}-empowering`,
                                  }}
                                  loop={true}
                                  slidesPerView={1}
                                >
                                  {item.imageVideo.map((media, mediaIdx) => (
                                    <SwiperSlide key={mediaIdx}>
                                      {media.video ? (
                                        <video
                                          src={media.video}
                                          width={800}
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
                                          width={800}
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
                                  className={`swiper-button-prev swiper-prev-${index}-empowering`}
                                >
                                  <MdChevronLeft />
                                </button>
                                <button
                                  className={`swiper-button-next swiper-next-${index}-empowering`}
                                >
                                  <MdChevronRight />
                                </button>
                              </div>
                            )}
                          </figure>
                        )}

                        {item.boxes?.length > 0 && (
                          <div className="ab_jss_coutsec">
                            {item.boxes.map((box, i) => (
                              <div className="ab_jss_c_col" key={i}>
                                <h4>{box.number}</h4>
                                <p>{box.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
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
