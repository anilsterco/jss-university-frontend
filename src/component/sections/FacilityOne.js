"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityOne({ data }) {
  if (!data || data.length === 0) return null;

  const percentSub = data.find((s) => s.type === "percentSub");
  const boxes = data.find((s) => s.type === "boxes");

  return (
    <section className="campu_facilities">
      <div className="containerMD">
        <div className="row">
          <div className="col-lg-12">
            
            <div className="campu_grid_main capus_grid_one">
              <div className="cumpus_left_img">
                {boxes?.items?.[0]?.photo && (
                  <figure className="shine-effect">
                    <Image
                      src={boxes.items[0].photo}
                      alt={boxes.items[0].title || "Hostel"}
                      width={800}
                      height={520}
                      className="img-fluid w-100"
                    />
                  </figure>
                )}
              </div>
              <div className="campu_con_rgt">
                {boxes?.items?.[0]?.subtitle && (
                  <p>{boxes.items[0].subtitle}</p>
                )}
                {percentSub?.items?.[0]?.subtitle && (
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: percentSub.items[0].subtitle,
                    }}
                  />
                )}
              </div>
            </div>
            <div className="campu_grid_main capus_grid_two">
              <div className="campu_con_rgt">
                {boxes?.items?.[1]?.subtitle && (
                  <p>{boxes.items[1].subtitle}</p>
                )}
                {boxes?.items?.[1]?.figure?.length > 0 && (
                  <div className="ab_jss_coutsec">
                    {boxes.items[1].figure.map((fig, idx) => (
                      <div className="ab_jss_c_col" key={idx}>
                        <h4>{fig.counter}</h4>
                        <p
                          dangerouslySetInnerHTML={{ __html: fig.desc }}
                        />
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
                      alt={boxes.items[1].title || "Hostel"}
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
  );
}
