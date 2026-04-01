"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "swiper/css/navigation";
import "swiper/css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function ResearchLabs({ data }) {
  if (!Array.isArray(data)) return null;

  const researchLabs = data.find((s) => s.type === "researchLabs");
  const researchSecond = data.find((s) => s.type === "researchSectionSecond");
  const objectiveSection = data.find((s) => s.type === "objectiveSection");

  return (
    <>
      {researchLabs?.items
        ?.sort((a, b) => Number(a.position || 0) - Number(b.position || 0))
        .map((item, idx) => (
          <section
            key={`researchLabs-${idx}`}
            className="research_labmain pb-0"
          >
            <div className="container">
              <div className="amenities_title">
                {item.title && <h5>{item.title}</h5>}
                {item.subtitle && <p>{item.subtitle}</p>}
              </div>
            </div>

            <div className="container">
              <div className="research_grid_one">
                <div className="researh_imgsec">
                  <figure className="shine-effect img-full">
                    {item?.image && (
                      <Image
                        src={
                          item.image ||
                          "/images/about-page/research_lab_01.webp"
                        }
                        alt={item.title || "Research Labs"}
                        className="w-100"
                        width={683}
                        height={520}
                      />
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
                  </figure>
                </div>

                <div className="research_cont">
                  {Array.isArray(item.decs) &&
                    item.decs.map((d, i) => <p key={i}>{d.paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>
        ))}

      {researchSecond?.items
        ?.sort((a, b) => Number(a.position || 0) - Number(b.position || 0))
        .map((item, idx) => (
          <section
            key={`researchSecond-${idx}`}
            className="research_labmain pb-0 pt-0"
          >
            <div className="container">
              <div className="research_grid_two research_at">
                <div className="research_cont">
                  {item.title && (
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: item.title,
                      }}
                    />
                  )}
                  {Array.isArray(item.desc) &&
                    item.desc.map((d, i) => <p key={i}>{d.paragraph}</p>)}
                </div>
                <div className="researh_imgsec">
                  {item.image && (
                    <figure className="shine-effect img-full">
                      <Image
                        src={item.image}
                        alt={item.title || "Research"}
                        className="w-100"
                        width={683}
                        height={520}
                      />
                    </figure>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

      {objectiveSection?.items
        ?.sort((a, b) => Number(a.position || 0) - Number(b.position || 0))
        .map((item, idx) => (
          <section key={`objective-${idx}`} className="research_labmain  pt-0">
            <div className="container">
              <div className="re_lab_objective">
                {item.heading && <h4>{item.heading}</h4>}
                <div className="re_obj_grid">
                  {Array.isArray(item.boxes) &&
                    item.boxes.map((box, bidx) => (
                      <div className="re_obj_card" key={bidx}>
                        <p>{box.desc}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
}
