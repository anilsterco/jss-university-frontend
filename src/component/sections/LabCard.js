"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function LabCard({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const renderSlider = (items, sectionIndex) => {
    if (!items || items.length === 0) return <p>No slider content available</p>;

    return (
      <div
        className="earlygrowth-slider-wrapper"
        style={{ position: "relative" }}
      >
        <Swiper
          modules={[Navigation, EffectFade, Autoplay]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          spaceBetween={30}
          slidesPerView={1}
          loop={items.length > 1}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          navigation={{
            nextEl: `.earlygrowth-next-${sectionIndex}`,
            prevEl: `.earlygrowth-prev-${sectionIndex}`,
          }}
        >
          {items.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div
                className="early-slide"
                style={{ display: "flex", gap: "2rem" }}
              >
                {item.image && (
                  <div style={{ flex: 1 }}>
                    <Image
                      src={item.image}
                      alt={
                        item.title
                          ? item.title.replace(/<[^>]+>/g, "")
                          : "Early Growth"
                      }
                      className="imgsli_left"
                      width={600}
                      height={400}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
                <div
                  className="early_rgt"
                  style={{ flex: 1 }}
                  data-aos="fade-left"
                  data-aos-delay="200"
                  data-aos-duration="900"
                >
                  {item.subtitle && <h5>{item.subtitle}</h5>}
                  {item.title && (
                    <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                  )}

                  {/* Navigation Buttons */}
                  <div className="nav_buttons">
                    <div
                      className={`earlygrowth-prev-${sectionIndex} earlygrowth-nav earlygrowth-nav-prev`}
                    >
                      <Image
                        src="/images/icons/circle-arrow-left.svg"
                        alt="Arrow"
                        width={22}
                        height={22}
                      />
                    </div>
                    <div
                      className={`earlygrowth-next-${sectionIndex} earlygrowth-nav earlygrowth-nav-next`}
                    >
                      <Image
                        src="/images/icons/circle-arrow-right.svg"
                        alt="Arrow"
                        width={22}
                        height={22}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
  };

  return (
    <section className="about_two labs_group_section">
      <div className="container">
        {data?.map((section, sectionIndex) => {
          if (section.type !== "labCard") return null;
          if (!section.items?.length) return null;

          return (
            <section key={sectionIndex} className={`about_two `}>
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
                        {item.image && (
                          <div style={{ flex: 1 }} className="image_col">
                            <Image
                              src={item.image}
                              alt={
                                item.title
                                  ? item.title.replace(/<[^>]+>/g, "")
                                  : "Early Growth"
                              }
                              className="imgsli_left"
                              width={600}
                              height={400}
                              style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                              }}
                            />
                          </div>
                        )}
                        <div
                          className="early_rgt"
                          style={{ flex: 1 }}
                          data-aos="fade-left"
                          data-aos-delay="200"
                          data-aos-duration="900"
                        >
                          {item.subTitle && <h5>{item.subTitle}</h5>}
                          {item.title && (
                            <h4
                              dangerouslySetInnerHTML={{ __html: item.title }}
                            />
                          )}
                          {item?.description &&
                            item?.description.length > 0 &&
                            item.description?.map((singleDes, desIdx) => (
                              <p key={desIdx}>{singleDes.description}</p>
                            ))}
                          {item?.listGroup && (
                            <ul>
                              {item.listGroup?.map((listItem, listIdx) => (
                                <li key={listIdx}>{listItem.list}</li>
                              ))}
                            </ul>
                          )}
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
