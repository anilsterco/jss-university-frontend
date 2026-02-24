"use client";

import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
      item.boxes?.filter(
        (box) => box?.title || box?.subtitle
      ) || [];

    const visibleItems = boxes.slice(0, visibleCount);
    const hasMore = visibleCount < boxes.length;

    return (
      <div key={index}>
        <div className="placement_stats">
          {visibleItems.map((box, i) => (
            <div key={i} className="curriculum_box" data-aos="zoom-in">
              {box.title && <h3>{box.title}</h3>}
              {box.subtitle && <p>{box.subtitle}</p>}
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
