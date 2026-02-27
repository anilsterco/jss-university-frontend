"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PlacementProcedure({ data }) {

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  const renderSection = (section, index) => {
    if (section.type !== "placementProcedure") return null;

    const item = section.items?.[0];
    if (!item) return null;

    const boxes =
      item.boxes?.filter(
        (box) => box?.title || box?.subtitle
      ) || [];

    return (
      <div key={index}>
        {item.heading && (
          <div className="procedure_heading text-center">
            <h2>{item.heading}</h2>
          </div>
        )}
        <div className="placement_procedure">
          {boxes.map((box, i) => (
            <div key={i} className="procedure_box" data-aos="zoom-in">
              {box.title && <h3>{box.title}</h3>}
              {box.subtitle && <p>{box.subtitle}</p>}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="placement_proSec">
      <div className="container">
        {data?.map((section, index) => renderSection(section, index))}
      </div>
    </section>
  );
}
