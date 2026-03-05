"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function Placements({ data }) {
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const renderSection = (section, index) => {
    if (section.type !== "whiteboxes") return null;

    const item = section.items?.[0];
    if (!item) return null;

    const boxes =
      item.boxes?.filter((box) => box?.title || box?.subtitle) || [];

    const visibleItems = boxes.slice(0, visibleCount);
    const hasMore = visibleCount < boxes.length;

    return (
      <div
        key={index}
        className={`${item?.category == "research" ? "mt_3xl_10" : item?.category == "placement" && "mt_3xl_7"}`}
      >
        {item?.heading && <h5 className="section_title">{item.heading}</h5>}
        {item?.subTitle && (
          <h6 className="section_subTitle">{item.subTitle}</h6>
        )}
        <div className="placement_stats">
          {visibleItems.map((box, i) => (
            <div key={i} className="curriculum_box" data-aos="zoom-in">
              {box?.icon && (
                <div className="icon">
                  <Image src={box.icon} width={56} height={53} alt="icon" />
                </div>
              )}

              <div className="content">
                {box.title && <h3>{box.title}</h3>}
                {box.subtitle && <p>{box.subtitle}</p>}
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="placements_loader">
            <button
              className="btn btn-outline-primary"
              onClick={() => setVisibleCount(boxes.length)}
            >
              Load More <i className="bi bi-arrow-down"></i>
            </button>
          </div>
        )}
        <div className="placeBottom">
          <p>{item.description}</p>
        </div>
      </div>
    );
  };

  return (
    <section className="placement_page">
      <div className="container">
        {data?.map((section, index) => renderSection(section, index))}
      </div>
    </section>
  );
}
