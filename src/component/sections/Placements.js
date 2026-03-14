"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Placements({ data }) {

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
    <>
      {data?.map((section, sectionIndex) => {
        if (section.type !== "whiteboxes") return null;
        if (!section.items?.length) return null;

        return (
          <React.Fragment key={`${sectionIndex}`}>
            {section.items.map((item, itemIndex) => {
              const key = `${sectionIndex}-${itemIndex}`;
              const boxes =
                item.boxes?.filter((box) => box?.title || box?.subtitle) || [];

              return (
                <section
                  key={itemIndex}
                  className={`placement_page ${item?.category || ""} ${item?.sectionType}`}
                >
                  <div className="container">
                    <div
                      className={`${
                        item?.category === "research"
                          ? "mt_3xl_10"
                          : item?.category === "placement"
                            ? "mt_3xl_7"
                            : ""
                      }`}
                    >
                      {item?.heading && (
                        <h5 className="section_title">{item.heading}</h5>
                      )}
                      {item?.subDescription && (
                        <h6 className="section_subDescription">
                          {item.subDescription}
                        </h6>
                      )}
                      {item?.subTitle && (
                        <h6 className="section_subTitle">{item.subTitle}</h6>
                      )}

                      <div className="placement_stats">
                        {boxes.map((box, i) => (
                          <div
                            key={i}
                            className="curriculum_box"
                            data-aos="zoom-in"
                          >
                            {box?.icon && (
                              <div className="icon">
                                <Image
                                  src={box.icon}
                                  width={56}
                                  height={53}
                                  alt="icon"
                                />
                              </div>
                            )}
                            <div className="content">
                              {box.title && <h3>{box.title}</h3>}
                              {box.subtitle && <p>{box.subtitle}</p>}
                              {box.eligibility && (
                                <p>
                                  <strong>Eligibility : </strong>{" "}
                                  {box.eligibility}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>

                   

                      {item?.description && (
                        <div className="placeBottom">
                          <p>{item.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </section>
              );
            })}
          </React.Fragment>
        );
      })}
    </>
  );
}
