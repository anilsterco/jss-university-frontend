"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilitySix({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "guestHouse") return null;

        const items = [...section.items].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0)
        );

        return items.map((item, idx) => (
          <section
            className="cafe_gues_mainsec pt-0"
            key={`guesthouse-${sectionIndex}-${idx}`}
          >
            <div className="container">
              <div className="guest_gridmain">
                <div className="gue_leftcontent">
                  {item.title && <h5>{item.title}</h5>}
                  {item.subtitle && <h4>{item.subtitle}</h4>}
                  {item.desc && <p>{item.desc}</p>}
                </div>
                {item.image && (
                  <div className="gue_img_rgt">
                    <figure className="shine-effect img-full">
                      <Image
                        src={item.image}
                        alt={item.title || "Guest House"}
                        className="w-100"
                        width={800}
                        height={520}
                      />
                    </figure>
                  </div>
                )}
              </div>
            </div>
          </section>
        ));
      })}
    </>
  );
}
