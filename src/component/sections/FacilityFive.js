"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "swiper/css/navigation";
import "swiper/css";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityFive({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "bankAtm") return null;

        const items = [...section.items].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0),
        );

        return items.map((item, idx) => (
          <section
            className="atm_mainsec consultancy_main"
            key={`bankatm-${sectionIndex}-${idx}`}
          >
            <div className="container">
              <div className="atm_fac_grid">
                <div className="atm_g_cont">
                  {item.title && <h5>{item.title}</h5>}

                  {Array.isArray(item.desc) &&
                    item.desc.map((para, pidx) => (
                      <p key={pidx}>{para.desc}</p>
                    ))}

                  <div className=" downlo_guides">
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf_link"
                    >
                      {item.pdf && (
                        <figure className="shine-effect">
                          <Image
                            src="/images/icons/pdf.png"
                            alt="PDF Icon"
                            width={15}
                            height={20}
                            className="img-fluid"
                          />
                        </figure>
                      )}
                      {item.pdfText}
                    </a>
                  </div>
                </div>

                {item.image && (
                  <div className="atm_g_imgsec">
                    {item?.imageVideo?.length > 0 ? (
                      item.imageVideo.length === 1 ? (
                        // Single media item
                        <figure className="shine-effect">
                          {item.imageVideo[0].video ? (
                            <video
                              src={item.imageVideo[0].video}
                              width={683}
                              height={750}
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
                              height={750}
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
                              nextEl: `.swiper-next-research-${idx}`,
                              prevEl: `.swiper-prev-research-${idx}`,
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
                                        : "Research Lab"
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

                          {/* Unique nav buttons per slide instance */}
                          <button
                            className={`swiper-button-prev swiper-prev-research-${idx}`}
                          >
                            <MdChevronLeft />
                          </button>
                          <button
                            className={`swiper-button-next swiper-next-research-${idx}`}
                          >
                            <MdChevronRight />
                          </button>
                        </div>
                      )
                    ) : item?.image ? (
                      // Case 2: fallback to item.image
                      <figure className="shine-effect img-full">
                        <Image
                          src={item.image}
                          alt={item.title || "Bank ATM"}
                          className="w-100"
                          width={683}
                          height={750}
                          style={{ objectFit: "cover" }}
                        />
                      </figure>
                    ) : null}
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
