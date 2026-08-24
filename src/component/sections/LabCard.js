"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import MediaSwiper from "@/component/common/MediaSwiper";

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
  return data?.map((section, sectionIndex) => {
    if (section.type !== "labCard") return null;
    if (!section.items?.length) return null;

    const shouldAddClass = Math.floor(sectionIndex / 2) % 2 === 0;

    return (
      <section
        className={`about_two labs_group_section ${
          section?.items?.[0]?.customClass || ""
        }`}
        key={sectionIndex}
      >
        <div className="container">
          <div className={`about_two ${shouldAddClass ? "reverse" : ""}`}>
            <div className="container">
              {section.items.map((item, itemIndex) => {
                const uid = `${sectionIndex}-${itemIndex}-labcard`;

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
                          <MediaSwiper
                            media={item.imageVideo}
                            uid={uid}
                            width={685}
                            height={450}
                            alt={item.title || "Lab Card"}
                            fallbackImage={item.image}
                            imgClassName="imgsli_left img-fluid"
                            mediaStyle={{ width: "100%", objectFit: "cover" }}
                          />
                        </div>
                      )}

                      <div
                        className="early_rgt"
                        style={{ flex: 1 }}
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="400"
                        suppressHydrationWarning
                      >
                        {item.subTitle && <h5>{item.subTitle}</h5>}
                        {item.title && (
                          <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                        )}
                        {item.titlebottom && (
                          <blockquote>{item.titlebottom}</blockquote>
                        )}

                        {item?.description?.length > 0 &&
                          item.description.map((singleDes, desIdx) => (
                            <p
                              key={desIdx}
                              dangerouslySetInnerHTML={{
                                __html: singleDes.description,
                              }}
                            />
                          ))}

                        {item?.listTitle && (
                          <p
                            dangerouslySetInnerHTML={{ __html: item.listTitle }}
                            className="mb-0"
                          />
                        )}

                        <ListGroup
                          listGroup={item?.listGroup}
                          className={item?.listTitle ? "no_margin" : ""}
                          description1={item?.description1}
                        />

                        {item?.linkGroup?.length > 0 &&
                          item.linkGroup.map((link, idx) => (
                            <Link
                              key={idx}
                              href={link.linkUrl}
                              target="_blank"
                              className="read_more_btn px-5 mt-4 d-inline-block"
                            >
                              {link.linkText}
                            </Link>
                          ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    );
  });
}