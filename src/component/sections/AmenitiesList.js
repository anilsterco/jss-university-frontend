"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AmenitiesList({ data }) {
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
        if (section.type !== "amenities_list") return null;
        if (!section.items?.length) return null;

        return (
          <section
            key={sectionIndex}
            className={`amenities_section ${section.items?.[0]?.category || ""}`}
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
                  <div key={itemIndex}>
                    {item?.heading && (
                      <h5 class="about_subtitle">{item.heading}</h5>
                    )}
                    {item?.subDescription && (
                      <h6 className="section_subDescription">
                        {item.subDescription}
                      </h6>
                    )}
                    {item?.subTitle && (
                      <h6 className="section_subTitle">{item.subTitle}</h6>
                    )}

                    <div className="grid_group">
                      {item?.leftListing && (
                        <div className="left_col">
                          <ul>
                            {item.leftListing?.map((list, listIdx) => (
                              <li key={listIdx}>{list.list}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {item?.rightListing && (
                        <div className="right_col">
                          <ul>
                            {item.rightListing?.map((list, listIdx) => (
                              <li key={listIdx}>{list.list}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
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
