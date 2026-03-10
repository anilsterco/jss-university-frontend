"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Placements({ data }) {
  const [visibleCounts, setVisibleCounts] = useState({});

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const handleLoadMore = (sectionIndex, itemIndex, totalCount) => {
    setVisibleCounts((prev) => ({
      ...prev,
      [`${sectionIndex}-${itemIndex}`]: totalCount,
    }));
  };

  return (
    <>
      {data?.map((section, sectionIndex) => {
        if (section.type !== "whiteboxes") return null;
        if (!section.items?.length) return null;

        return (
          <section
            key={sectionIndex}
            className={`placement_page ${section.items?.[0]?.category || ""}`}
          >
            <div className="container">
              {section.items.map((item, itemIndex) => {
                const key = `${sectionIndex}-${itemIndex}`;
                const boxes =
                  item.boxes?.filter((box) => box?.title || box?.subtitle) ||
                  [];
                const visibleCount = visibleCounts[key] ?? 4;
                const visibleItems = boxes.slice(0, visibleCount);
                const hasMore = visibleCount < boxes.length;

                return (
                  <div
                    key={itemIndex}
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
                      {visibleItems.map((box, i) => (
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

                    {hasMore && (
                      <div className="placements_loader">
                        <button
                          className="btn btn-outline-primary"
                          onClick={() =>
                            handleLoadMore(
                              sectionIndex,
                              itemIndex,
                              boxes.length,
                            )
                          }
                        >
                          Load More <i className="bi bi-arrow-down"></i>
                        </button>
                      </div>
                    )}

                    {item?.description && (
                      <div className="placeBottom">
                        <p>{item.description}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}
