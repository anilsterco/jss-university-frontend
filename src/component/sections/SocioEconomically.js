"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityOne({ data }) {
  if (!data || data.length === 0) return null;

  const socioSection = data.find(
    (section) => section.type === "socioEconomically"
  );

  if (!socioSection || !socioSection.items?.length) return null;

  return (
    <>
      {socioSection.items.map((item, index) => (
        <section className="socio_econo_sec" key={index}>
          <div className="containerMD">
            <section className="sedg_section_wrap">
              <div className="sedg_row_block border_bottom">

                {/* Image Column */}
                <div className="sedg_img_col">
                  {item.image && (
                    <figure className="shine-effect">
                      <Image
                        src={item.image}
                        alt={item.title || "Socio Economically"}
                        width={600}
                        height={600}
                        className="img-fluid"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </figure>
                  )}
                </div>

                {/* Content Column */}
                <div className="sedg_content_col">
                  {item.title && (
                    <h3 className="sedg_title">{item.title}</h3>
                  )}

                  {item.desc?.length > 0 &&
                    item.desc.map((para, i) => (
                      <p key={i}>{para.desc}</p>
                    ))}
                </div>

              </div>
            </section>
          </div>
        </section>
      ))}
    </>
  );
}
