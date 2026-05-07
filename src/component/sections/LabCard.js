"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "swiper/css/navigation";
import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Link from "next/link";

const ITEMS_LIMIT = 5;

function ListGroup({ listGroup, className, description1 }) {
  const [expanded, setExpanded] = useState(false);

  if (!listGroup?.length) return null;

  const hasMore = listGroup.length > ITEMS_LIMIT;
  const visibleItems = expanded ? listGroup : listGroup.slice(0, ITEMS_LIMIT);

  return (
    <>
      <ul className={className}>
        {visibleItems.map((listItem, listIdx) => (
          <li
            key={listIdx}
            dangerouslySetInnerHTML={{ __html: listItem.list }}
          />
        ))}
      </ul>
      {description1?.length > 0 && (
        <div className="description1">
          {description1.map((singleDes, desIdx) => (
            <p
              key={desIdx}
              dangerouslySetInnerHTML={{ __html: singleDes.description1 }}
            />
          ))}
        </div>
      )}
      {hasMore && (
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="read-more-btn"
        >
          {expanded ? "Read Less" : "Read More"}
          <Image
            src="/images/icons/read_more.png"
            alt="arrow"
            width={22}
            height={22}
            style={{
              transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </button>
      )}
    </>
  );
}

export default function LabCard({ data }) {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  return (
    <section className="about_two labs_group_section">
      <div className="container">
        {data?.map((section, sectionIndex) => {
          if (section.type !== "labCard") return null;
          if (!section.items?.length) return null;

          const shouldAddClass = Math.floor(sectionIndex / 2) % 2 === 0;

          return (
            <section
              key={sectionIndex}
              className={`about_two ${shouldAddClass ? "reverse" : ""}`}
            >
              <div className="container">
                {section.items.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className={`single_lab_card ${item.sectionType}`}
                    >
                      <div
                        className="early-slide"
                        style={{ display: "flex", gap: "2rem" }}
                      >
                        {(item.image || item?.imageVideo?.length > 0) && (
                          <div style={{ flex: 1 }} className="image_col">
                            {item?.imageVideo?.length > 0 ? (
                              item.imageVideo.length === 1 ? (
                                // Single media item
                                <figure className="shine-effect">
                                  {item.imageVideo[0].video ? (
                                    <video
                                      src={item.imageVideo[0].video}
                                      width={685}
                                      height={450}
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
                                      width={685}
                                      height={450}
                                      className="img-fluid"
                                      style={{
                                        width: "100%",
                                        objectFit: "cover",
                                      }}
                                    />
                                  )}
                                </figure>
                              ) : (
                                // Multiple media items → Swiper
                                <div
                                  className="research_swiper_wrapper"
                                  style={{ position: "relative" , width: "100%", overflow: "hidden"  }}
                                >
                                  <Swiper
                                    modules={[Autoplay, Navigation]}
                                    autoplay={{
                                      delay: 3000,
                                      disableOnInteraction: false,
                                    }}
                                    navigation={{
                                      nextEl: `.swiper-next-lab-card`,
                                      prevEl: `.swiper-prev-lab-card`,
                                    }}
                                    loop={true}
                                    slidesPerView={1}
                                    style={{ width: "100%" }}
                                  >
                                    {item.imageVideo.map((media, mediaIdx) => (
                                      <SwiperSlide key={mediaIdx}>
                                        <figure className="shine-effect">
                                          {media.video ? (
                                            <video
                                              src={media.video}
                                              width={685}
                                              height={450}
                                              autoPlay
                                              muted
                                              loop
                                              playsInline
                                              className="img-fluid"
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
                                              width={685}
                                              height={450}
                                              className="img-fluid"
                                              style={{
                                                // width: "100%",
                                                // height: "auto",
                                                objectFit: "cover",
                                              }}
                                            />
                                          )}
                                        </figure>
                                      </SwiperSlide>
                                    ))}
                                  </Swiper>

                                  {/* Unique nav buttons per slide instance */}
                                  <button
                                    type="button"
                                    className={`swiper-button-prev swiper-prev-lab-card`}
                                    aria-label="Previous slide"
                                  >
                                    <MdChevronLeft />
                                  </button>
                                  <button
                                    type="button"
                                    className={`swiper-button-next swiper-next-lab-card`}
                                    aria-label="Next slide"
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
                                  alt={
                                    item.title
                                      ? item.title.replace(/<[^>]+>/g, "")
                                      : "Early Growth"
                                  }
                                  className="imgsli_left img-fluid"
                                  width={685}
                                  height={450}
                                  style={{
                                    width: "100%",
                                    // height: "100%",
                                    objectFit: "cover",
                                  }}
                                />
                              </figure>
                            ) : null}
                          </div>
                        )}
                        <div
                          className="early_rgt"
                          style={{ flex: 1 }}
                          data-aos="fade-left"
                          data-aos-delay="200"
                          data-aos-duration="900"
                          suppressHydrationWarning
                        >
                          {item.subTitle && <h5>{item.subTitle}</h5>}
                          {item.title && (
                            <h4
                              dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                          )}
                          {item.titlebottom && (
                            <>
                              <blockquote>{item.titlebottom}</blockquote>
                            </>
                          )}

                          {item?.description?.length > 0 &&
                            item.description.map((singleDes, desIdx) => (
                              <p key={desIdx}>{singleDes.description}</p>
                            ))}

                          {item?.listTitle && (
                            <p
                              dangerouslySetInnerHTML={{
                                __html: item?.listTitle,
                              }}
                              className="mb-0"
                            />
                          )}
                          <ListGroup
                            listGroup={item?.listGroup}
                            className={item?.listTitle ? "no_margin" : ""}
                            description1={item?.description1}
                          />

                          {item?.linkGroup?.length > 0 &&
                            item.linkGroup.map((item, idx) => (
                              <Link
                                key={idx}
                                href={item.linkUrl}
                                target="_blank"
                                className="read_more_btn px-5 mt-4 d-inline-block"
                              >
                                {item.linkText}
                              </Link>
                            ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
