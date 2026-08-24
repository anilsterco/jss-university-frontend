"use client";

import { useMemo } from "react";
import MediaSwiper from "@/component/common/MediaSwiper";

export default function Fosteringcreativity({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "fosteringcreativity") return null;

        const sortedItems = useMemo(
          () => [...(section.items || [])].sort((a, b) => a.position - b.position),
          [section.items]
        );

        return sortedItems.map((item, index) => {
          const uid = `${sectionIndex}-${index}-fostering`;

          return (
            <section
              id="equal-opportunity-cell"
              className="about_fost_sec"
              key={uid}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ab_fost_grid">
                      <div
                        className="ab_fost_lft_col"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <h5>{item.title}</h5>

                        {item.paragraph?.map((para, i) => (
                          <p key={i}>{para.paragraph}</p>
                        ))}

                        {item.button_name && (
                          <a
                            target="_blank"
                            href={item.button_url || "#"}
                            className="learn_more"
                          >
                            {item.button_name}
                          </a>
                        )}
                      </div>

                      <div className="grid_em_rigt">
                        <div className="empo_rgt_imgsec">
                          <MediaSwiper
                            media={item.imageVideo}
                            uid={uid}
                            width={683}
                            height={750}
                            alt={item.title || "About Section"}
                            fallbackImage="/images/about-page/ab_fostering.webp"
                            imgClassName="img-fluid w-100"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        });
      })}
    </>
  );
}