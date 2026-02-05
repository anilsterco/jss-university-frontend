"use client";

import { useState } from "react";
import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityTwo({ data }) {
  const [visibleCount, setVisibleCount] = useState(3);

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "amenitiescentre") return null;

        const headerItem = section.items?.[0];
        const boxes = headerItem?.boxex || [];

        const visibleBoxes = boxes.slice(0, visibleCount);
        const hasMore = visibleCount < boxes.length;

        return (
          <section
            className="ameminites_listmain"
            key={`amenities-${sectionIndex}`}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {/* TITLE & SUBTITLE */}
                  {(headerItem?.title || headerItem?.subtitle) && (
                    <div className="amenities_title">
                      {headerItem.title && <h5>{headerItem.title}</h5>}
                      {headerItem.subtitle && <p>{headerItem.subtitle}</p>}
                    </div>
                  )}

                  {/* GRID */}
                  <div className="amenities_gridmain">
                    {visibleBoxes.map((box, idx) => (
                      <div className="ameniti_item_col" key={idx}>
                        {box.image && (
                          <figure className="shine-effect">
                            <Image
                              src={box.image}
                              alt={box.heading || "Amenity"}
                              width={800}
                              height={520}
                              className="img-fluid w-100"
                            />
                          </figure>
                        )}

                        {box.heading && (
                          <figcaption>
                            <p>{box.heading}</p>
                          </figcaption>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* LOAD MORE */}
                  {(hasMore || headerItem?.desc) && (
                    <div className="amenities_loadmore">
                      {hasMore && (
                        <div className="load_m_btnsec">
                          <button
                            type="button"
                            onClick={() =>
                              setVisibleCount((prev) => prev + 3)
                            }
                          >
                            <a>LOAD MORE <i className="bi bi-arrow-down"></i></a> 
                          </button>
                        </div>
                      )}

                      {headerItem?.desc && <p>{headerItem.desc}</p>}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
