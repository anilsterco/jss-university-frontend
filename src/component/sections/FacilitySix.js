"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilitySix({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "cafeteriaGuest") return null;

        const items = [...section.items].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0)
        );

        return items.map((item, idx) => (
          <section
            className="cafe_gues_mainsec pb-0"
            key={`cafeguest-${sectionIndex}-${idx}`}
          >
            <div className="container">
              <div className="cafe_gues_gridone">
                {item.image && (
                  <div className="cafe_imgsec">
                    <figure className="shine-effect img-full">
                      <Image
                        src={item.image}
                        alt={item.title || "Cafeteria"}
                        className="w-100"
                        width={600}
                        height={400}
                      />
                    </figure>
                  </div>
                )}

                <div className="cafe_contentsec">
                  {item.title && <h5>{item.title}</h5>}
                  {Array.isArray(item.desc) &&
                    item.desc.map((d, didx) => (
                      <p key={didx}>{d.paragraph}</p>
                    ))}
                </div>
              </div>
            </div>
          </section>
        ));
      })}
    </>
  );
}
