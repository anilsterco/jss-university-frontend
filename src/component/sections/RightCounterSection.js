"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "swiper/css/navigation";
import "swiper/css";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Link from "next/link";

export default function FacilitySix({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "rightCounterSection") return null;
        const items = [...section.items].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0),
        );
        return items.map((item, idx) => (
          <section
            id="complaint-committee"
            className={`lib_cen_main pt-0 ${item.sectionType}`}
            key={`${sectionIndex}-${idx}`}
          >
            <div
              className={`${item?.containerSize ? item.containerSize : "container"}`}
            >
              <div className="row">
                <div className="col-lg-12">
                  <div
                    className={`campu_grid_main capus_grid_two ${item?.pageType == "placement" && "pb-0 border-0"}`}
                  >
                    <div
                      className={`campu_con_rgt ${item.direction == "reverse" && "order-2"}`}
                    >
                      {item.paragraph?.map((para, i) => (
                        <p key={i}>{para.text}</p>
                      ))}
                      {item.countBox?.length > 0 && (
                        <div className="ab_jss_coutsec">
                          {item.countBox.map((box, i) => (
                            <div className="ab_jss_c_col" key={i}>
                              <h4>{box.count}</h4>
                              <p>{box.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className={`cumpus_left_img`}>
                      {item?.imageVideo?.length > 0 ? (
                        item.imageVideo.length === 1 ? (
                          // Single media item
                          <figure className="shine-effect">
                            {item.imageVideo[0].video ? (
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
                                    : "Research Lab"
                                }
                                width={683}
                                height={520}
                                style={{ width: "100%", height: "auto" }}
                              />
                            )}
                          </figure>
                        ) : (
                          // Multiple media items → Swiper
                          <div
                            className="research_swiper_wrapper"
                            style={{ position: "relative" }}
                          >
                            <Swiper
                              modules={[Autoplay, Navigation]}
                              autoplay={{
                                delay: 3000,
                                disableOnInteraction: false,
                              }}
                              navigation={{
                                nextEl: `.swiper-next-right-counter-${idx}`,
                                prevEl: `.swiper-prev-right-counter-${idx}`,
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
                                          : "Research Lab"
                                      }
                                      width={683}
                                      height={520}
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

                            {/* Unique nav buttons per slide instance */}
                            <button
                              className={`swiper-button-prev swiper-prev-right-counter-${idx}`}
                            >
                              <MdChevronLeft />
                            </button>
                            <button
                              className={`swiper-button-next swiper-next-right-counter-${idx}`}
                            >
                              <MdChevronRight />
                            </button>
                          </div>
                        )
                      ) : item?.image ? (
                        // Case 2: fallback to item.image
                        <figure className="shine-effect">
                          <Image
                            src={item.image}
                            alt="Library Image"
                            width={800}
                            height={520}
                            className={`img-fluid w-100  ${item.direction == "reverse" && "rounded-0"}`}
                            data-aos="fade-up"
                            data-aos-delay="200"
                          />
                        </figure>
                      ) : null}
                      {item.imageDesc && <p>{item.imageDesc}</p>}

                      {item.pdf && item.pdf.length > 0 && (
                        <div className="studends_pdf">
                          <ul>
                            {item?.pdf.map((pdfItem, i) => {
                              return (
                                pdfItem.pdf && (
                                  <li key={i}>
                                    <Link href={pdfItem.pdf} target="_blank">
                                      <Image
                                        src={"/images/icons/pdf.png"}
                                        alt={pdfItem.pdfName || "PDF Icon"}
                                        width={25}
                                        height={25}
                                      />
                                      <span>{pdfItem.pdfName}</span>
                                    </Link>
                                  </li>
                                )
                              );
                            })}
                          </ul>
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
