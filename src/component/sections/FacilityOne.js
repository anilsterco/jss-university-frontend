"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilitiesOne({ data }) {
  if (!data || data.length === 0) return null;

  // Extract sections from API data
  const titleBanner = data.find((s) => s.type === "titleBanner");
  const percentSub = data.find((s) => s.type === "percentSub");
  const boxes = data.find((s) => s.type === "boxes");

  if (!titleBanner) return null;

  return (
    <>
      {titleBanner.items
        .sort((a, b) => a.position - b.position)
        .map((item, sectionIndex) => (
          <section
            className="campu_facilities"
            key={item.item_uuid || sectionIndex}
          >
            <div className="containerMD">
              <div className="row">
                <div className="col-lg-12">
                  {/* TITLE */}
                  <div className="campus_titlemain">
                    <h5>{item.title}</h5>
                    <p>{item.subtitle}</p>
                  </div>

                  {/* GRID ONE */}
                  <div className="campu_grid_main capus_grid_one">
                    <div className="cumpus_left_img">
                      {item.file && (
                        <figure className="shine-effect">
                          <Image
                            src={item.file}
                            alt={item.title}
                            width={800}
                            height={520}
                            className="img-fluid w-100"
                          />
                        </figure>
                      )}
                    </div>

                    <div className="campu_con_rgt">
                      {/* First box description */}
                      {boxes?.items?.[0]?.subtitle && (
                        <p>{boxes.items[0].subtitle}</p>
                      )}

                      {/* PercentSub headline */}
                      {percentSub?.items?.[0] && (
                        <h2
                          dangerouslySetInnerHTML={{
                            __html: percentSub.items[0].subtitle,
                          }}
                        />
                      )}
                    </div>
                  </div>

                  {/* GRID TWO */}
                  <div className="campu_grid_main capus_grid_two">
                    <div className="campu_con_rgt">
                      {/* Second box description */}
                      {boxes?.items?.[1]?.subtitle && (
                        <p>{boxes.items[1].subtitle}</p>
                      )}

                      {/* Box figure counters */}
                      {boxes?.items?.[1]?.figure && boxes.items[1].figure.length > 0 && (
                        <div className="ab_jss_coutsec">
                          {boxes.items[1].figure.map((fig, idx) => (
                            <div className="ab_jss_c_col" key={idx}>
                              <h4>{fig.counter}</h4>
                              <p dangerouslySetInnerHTML={{ __html: fig.desc }} />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="cumpus_left_img">
                      {boxes?.items?.[1]?.photo && (
                        <figure className="shine-effect">
                          <Image
                            src={boxes.items[1].photo}
                            alt={boxes.items[1].title}
                            width={800}
                            height={520}
                            className="img-fluid w-100"
                          />
                        </figure>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
}
