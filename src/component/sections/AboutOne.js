"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, Pagination } from "swiper/modules";
import Link from "next/link";

export default function AboutOne({ data, extraClass }) {
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
          <section
            key={sectionIndex}
            className={`about_one ${extraClass}`}
            id={section?.items?.[0]?.sectionId}
          >
            <div className="container">
              <div
                className={`row justify-content-center about_top ${section?.items?.[0]?.sectionType} ${section?.items?.[0]?.sectionClass?.map((item) => item.sectionClass).join(" ")}`}
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
                        // id={item?.sectionId}
                      >
                        <h5 className="about_subtitle">{item.title}</h5>
                        {item.subtitle && <p>{item.subtitle}</p>}

                        <div className="atm_g_imgsec">
                          {item?.imageVideo?.length > 0 ? (
                            item.imageVideo.length === 1 ? (
                              // ✅ Single media
                              <figure className="shine-effect image-overlay-figure">
                                {item.imageVideo[0].video ? (
                                  <video
                                    src={item.imageVideo[0].video}
                                    width={1390}
                                    height={550}
                                    autoPlay
                                    muted
                                    loop
                                    playsInline
                                    className="img-fluid"
                                    style={{
                                      width: "100%",
                                      height: "auto",
                                      objectFit: "cover",
                                    }}
                                  />
                                ) : (
                                  <Image
                                    src={item.imageVideo[0].image}
                                    alt={item.title?.slice(0, 50) || "Research Lab"}
                                    width={1390}
                                    height={550}
                                    className="img-fluid"
                                    style={{ width: "100%", height: "auto" }}
                                  />
                                )}

                                {/* ✅ KEEP OVERLAY */}
                                <div className="overlap_contents">
                                  {item?.countGroup?.map((singleItem, idx) => (
                                    <figcaption key={idx} className="image-overlay-caption">
                                      <h5>{singleItem.counter}</h5>
                                      <p>{singleItem.countDesc}</p>
                                    </figcaption>
                                  ))}
                                </div>
                              </figure>
                            ) : (
                              // ✅ Multiple media (Swiper)
                              <div className="research_swiper_wrapper" style={{ position: "relative" }}>
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
                                          <video
                                            src={media.video}
                                            width={1390}
                                            height={550}
                                            autoPlay
                                            muted
                                            loop
                                            playsInline
                                    className="img-fluid"
                                            style={{
                                              width: "100%",
                                              height: "auto",
                                              objectFit: "cover",
                                            }}
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
                                          />
                                        )}

                                        {/* ✅ KEEP OVERLAY IN EACH SLIDE */}
                                        <div className="overlap_contents">
                                          {item?.countGroup?.map((singleItem, i) => (
                                            <figcaption key={i} className="image-overlay-caption">
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
                          ) : (item.file || item.video) ? (
                            // ✅ ORIGINAL FALLBACK (UNCHANGED + OVERLAY KEPT)
                            <figure
                              className="shine-effect image-overlay-figure"
                              data-aos="zoom-in"
                              data-aos-duration="1000"
                            >
                              {item.video ? (
                                <video
                                  src={item.video}
                                  width={1390}
                                  height={550}
                                  autoPlay
                                  muted
                                  loop
                                    className="img-fluid"
                                  playsInline
                                  style={{ objectFit: "cover" }}
                                />
                              ) : (
                                <Image
                                  src={item.file}
                                  alt={item.title || "About JSS Academy"}
                                  width={1390}
                                  height={550}
                                  className="img-fluid w-100"
                                />
                              )}

                              {/* ✅ IMPORTANT: PRESERVED */}
                              <div className="overlap_contents">
                                {item?.countGroup?.map((singleItem, itemIdx) => (
                                  <figcaption key={itemIdx} className="image-overlay-caption">
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
                  ))}
              </div>
            </div>
          </section>
        );

      case "logoDesc":
        return (
          <div className="container" key={`logo-section-${sectionIndex}`}>
            <div className="row justify-content-center">
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
                      1: { slidesPerView: 1 },
                      576: { slidesPerView: 2 },
                      768: { slidesPerView: 3 },
                      999: { slidesPerView: 3 },
                      1080: { slidesPerView: 4 },
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
                                        <span> #</span>
                                        {String(item.figure)}
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
                                        style={{ objectFit: "contain" }}
                                      />
                                    )}
                                  </>
                                ) : (
                                  <>
                                    {item.file && (
                                      <Image
                                        src={item.file}
                                        alt={item.description || "logo"}
                                        width={100}
                                        height={100}
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
                              {item?.url && (
                                <Link href={item.url} target="_blank" />
                              )}
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        );

      case "logoDescGrid":
        return (
          <div className="container" key={`logo-grid-section-${sectionIndex}`}>
            <div className="row justify-content-center">
              {section.items
                ?.sort(
                  (a, b) => Number(a.position || 0) - Number(b.position || 0),
                )
                .map((item, i) => {
                  const hasFigure =
                    item.figure !== null &&
                    item.figure !== undefined &&
                    item.figure !== "";

                  return (
                    <div
                      className="col-12 col-sm-6 col-lg-3 mb-4"
                      key={item.id || item.item_uuid || i}
                    >
                      <div className="estab_slide_item h-100 position-relative">
                        <figure
                          data-aos="fade-up"
                          data-aos-delay={i * 150}
                          data-aos-duration="800"
                          className="h-100"
                        >
                          {hasFigure ? (
                            <>
                              <figcaption>
                                <h4 className="estab_figure">
                                  <span> #</span>
                                  {String(item.figure)}
                                </h4>
                                {item.description && <p>{item.description}</p>}
                              </figcaption>
                              {item.file && (
                                <Image
                                  src={item.file}
                                  alt={item.description || "figure"}
                                  width={120}
                                  height={30}
                                  style={{ objectFit: "contain" }}
                                />
                              )}
                            </>
                          ) : (
                            <>
                              {item.file && (
                                <Image
                                  src={item.file}
                                  alt={item.description || "logo"}
                                  width={100}
                                  height={100}
                                />
                              )}
                              {item?.title && (
                                <h5 className="mt-4 grid_title">
                                  {item.title}
                                </h5>
                              )}
                              {item.description && (
                                <figcaption
                                  className={item?.title ? "mt-1" : "mt-3"}
                                >
                                  <p>{item.description}</p>
                                </figcaption>
                              )}
                            </>
                          )}
                        </figure>

                        {item?.url && (
                          <Link
                            href={item.url}
                            className="links"
                            target="_blank"
                            aria-label={`View ${item.title}`}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {data && data.length > 0 ? (
        data.map((section, index) => renderSection(section, index))
      ) : (
        <div className="abt_cntnt" data-aos="fade-up">
          <p>Welcome to JSS Academy of Technical Education</p>
        </div>
      )}
    </>
  );
}
