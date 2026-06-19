"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

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
                  id="eligibilitySec"
                >
                  <div className="container">
                    <div
                      className={`${item?.category === "research"
                        ? "mt_3xl_10"
                        : item?.category === "placement"
                          ? "mt_3xl_7"
                          : ""
                        }`}
                    >
                      {item?.heading && (
                        <h5 className="section_title">{item.heading}</h5>
                      )}
                      {item?.italicHeading && (
                        <h5 className="section_title italic">
                          {item.italicHeading}
                        </h5>
                      )}
                      {item?.subDescription && (
                        <h6 className="section_subDescription">
                          {item.subDescription}
                        </h6>
                      )}
                      {item?.subTitle && (
                        <h6 className="section_subTitle">{item.subTitle}</h6>
                      )}

                      <div className={`placement_stats ${item?.totalColumns && "column-" + item?.totalColumns}`}>
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
                              {box.title && (
                                <h3
                                  dangerouslySetInnerHTML={{
                                    __html: box.title,
                                  }}
                                />
                              )}
                              {box.designation && (
                                <p
                                  dangerouslySetInnerHTML={{
                                    __html: box.designation,
                                  }}
                                  className="designation"
                                />
                              )}
                              {box.mail && (
                                <Link
                                  href={`mailto:${box.mail}`}
                                  className="mail CTA_Email"
                                  dangerouslySetInnerHTML={{
                                    __html: box.mail,
                                  }}
                                />
                              )}
                              {box.subtitle && <p>{box.subtitle}</p>}
                              {box.eligibility && (
                                <p>
                                  <strong>Eligibility : </strong>{" "}
                                  {box.eligibility}
                                </p>
                              )}

                              {box.listGroup && (
                                <ul className="box_ul">
                                  {box.listGroup.map((list, listIdx) => (
                                    <li
                                      key={listIdx}
                                      dangerouslySetInnerHTML={{ __html: list.list }}
                                    />
                                  ))}
                                </ul>
                              )}
                              {box.subdecs && <p>{box.subdecs}</p>}


                            </div>
                          </div>
                        ))}
                      </div>
                      {item?.description && (
                        <div className="placeBottom">
                          <p>{item.description}</p>
                        </div>
                      )}

                      {item?.bottomdesc && (
                        <div className="placeBottom">
                          <p
                            dangerouslySetInnerHTML={{
                              __html: item.bottomdesc,
                            }}
                          ></p>
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
