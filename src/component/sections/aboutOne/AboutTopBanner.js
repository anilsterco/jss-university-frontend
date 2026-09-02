"use client"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";

function BannerVideo({ src, poster, priority }) {
  return (
    <video
      src={src}
      poster={poster}
      width={1390}
      height={550}
      autoPlay
      muted
      loop
      playsInline
      preload={priority ? "metadata" : "none"}
      className="img-fluid"
      style={{
        width: "100%",
        height: "auto",
        objectFit: "cover",
      }}
    />
  );
}

export default function AboutTopBanner({ section, extraClass }) {
  return (
    <section
      className={`about_one ${extraClass}`}
      id={section?.items?.[0]?.sectionId}
    >
      <div className="container">
        <div
          className={`row justify-content-center about_top ${section?.items?.[0]?.sectionType} ${section?.items?.[0]?.sectionClass?.map((item) => item.sectionClass).join(" ")}`}
          data-aos="fade-up"
          data-aos-duration="1200"
        >
          {section.items
            .sort((a, b) => a.position - b.position)
            .map((item, index) => {
              const isFirst = index === 0;

              return (
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
                    {item.Subdescription?.map((sub, subIdx) => (
                      <span key={subIdx}>{sub.Subdescription}</span>
                    ))}

                    <div className="atm_g_imgsec">
                      {item?.imageVideo?.length > 0 ? (
                        item.imageVideo.length === 1 ? (
                          <figure className="shine-effect image-overlay-figure">
                            {item.imageVideo[0].video ? (
                              <BannerVideo
                                src={item.imageVideo[0].video}
                                poster={
                                  item.imageVideo[0].videoThumbnail ||
                                  item.imageVideo[0].image
                                }
                                priority={isFirst}
                              />
                            ) : (
                              <Image
                                src={item.imageVideo[0].image}
                                alt={item.title?.slice(0, 50) || "Research Lab"}
                                width={1390}
                                height={550}
                                className="img-fluid"
                                style={{ width: "100%", height: "auto" }}
                                sizes="(max-width: 768px) 100vw, 1390px"
                                priority={isFirst}
                                fetchPriority={isFirst ? "high" : "auto"}
                                loading={isFirst ? "eager" : "lazy"}
                              />
                            )}

                            <div className="overlap_contents">
                              {item?.countGroup?.map((singleItem, idx) => (
                                <figcaption
                                  key={idx}
                                  className="image-overlay-caption"
                                >
                                  <h5>{singleItem.counter}</h5>
                                  <p>{singleItem.countDesc}</p>
                                </figcaption>
                              ))}
                            </div>
                          </figure>
                        ) : (
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
                                nextEl: ".swiper-next-placement",
                                prevEl: ".swiper-prev-placement",
                              }}
                              loop={true}
                              slidesPerView={1}
                            >
                              {item.imageVideo.map((media, idx) => (
                                <SwiperSlide key={idx}>
                                  <figure className="shine-effect image-overlay-figure">
                                    {media.video ? (
                                      <BannerVideo
                                        src={media.video}
                                        poster={media.videoThumbnail || media.image}
                                        priority={isFirst && idx === 0}
                                      />
                                    ) : (
                                      <Image
                                        src={media.image}
                                        alt={item.title?.slice(0, 50) || "Research Lab"}
                                        width={1390}
                                        height={550}
                                        style={{
                                          width: "100%",
                                          height: "auto",
                                          objectFit: "cover",
                                        }}
                                        sizes="(max-width: 768px) 100vw, 1390px"
                                        priority={isFirst && idx === 0}
                                        fetchPriority={
                                          isFirst && idx === 0 ? "high" : "auto"
                                        }
                                        loading={
                                          isFirst && idx === 0 ? "eager" : "lazy"
                                        }
                                      />
                                    )}

                                    <div className="overlap_contents">
                                      {item?.countGroup?.map((singleItem, i) => (
                                        <figcaption
                                          key={i}
                                          className="image-overlay-caption"
                                        >
                                          <h5>{singleItem.counter}</h5>
                                          <p>{singleItem.countDesc}</p>
                                        </figcaption>
                                      ))}
                                    </div>
                                  </figure>
                                </SwiperSlide>
                              ))}
                            </Swiper>

                            <button
                              type="button"
                              className="swiper-button-prev swiper-prev-placement"
                              aria-label="Previous slide"
                            >
                              <MdChevronLeft />
                            </button>
                            <button
                              type="button"
                              className="swiper-button-next swiper-next-placement"
                              aria-label="Next slide"
                            >
                              <MdChevronRight />
                            </button>
                          </div>
                        )
                      ) : item.file || item.video ? (
                        <figure
                          className="shine-effect image-overlay-figure"
                          data-aos="zoom-in"
                          data-aos-duration="1000"
                        >
                          {item.video ? (
                            <BannerVideo
                              src={item.video}
                              poster={item.videoThumbnail || item.file}
                              priority={isFirst}
                            />
                          ) : (
                            <Image
                              src={item.file}
                              alt={item.title || "About JSS Academy"}
                              width={1390}
                              height={550}
                              className="img-fluid w-100"
                              sizes="(max-width: 768px) 100vw, 1390px"
                              priority={isFirst}
                              fetchPriority={isFirst ? "high" : "auto"}
                              loading={isFirst ? "eager" : "lazy"}
                            />
                          )}

                          <div className="overlap_contents">
                            {item?.countGroup?.map((singleItem, itemIdx) => (
                              <figcaption
                                key={itemIdx}
                                className="image-overlay-caption"
                              >
                                <h5>{singleItem.counter}</h5>
                                <p>{singleItem.countDesc}</p>
                              </figcaption>
                            ))}
                          </div>
                        </figure>
                      ) : null}
                    </div>
                  </div>

                  {item.description && (
                    <div
                      className="estblish"
                      data-aos="fade-in"
                      data-aos-delay="300"
                      data-aos-duration="900"
                    >
                      <p id="mentoring-scheme">{item.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}