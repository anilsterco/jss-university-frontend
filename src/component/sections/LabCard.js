"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "@/styles/style.css";
import "@/styles/custom.style.css";

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
                          suppressHydrationWarning
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
