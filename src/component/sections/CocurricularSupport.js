"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityOne({ data }) {
  if (!data || data.length === 0) return null;
  const sections = data.filter(
    (section) =>
      section.type === "socioEconomically" ||
      section.type === "cocurricularSupport"
  );

  if (!sections.length) return null;

  return (
    <section className="socio_econo_sec pt-0">
         <div className="containerMD border_bottom">
             {sections.map((section, sectionIndex) =>
            section.items?.map((item, index) => {
              const descriptions = item.desc || item.decs || [];
              return (
                <div
                  className="sedg_row_block sedg_block pt-0"
                  key={`${sectionIndex}-${index}`}
                >
                  <div className="sedg_img_col">
                    {item.image && (
                      <figure className="shine-effect">
                        <Image
                          src={item.image}
                          alt={item.title || "Section Image"}
                          width={600}
                          height={600}
                          className="img-fluid"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                    )}
                  </div>
                  <div className="sedg_content_col">
                    {item.title && (
                      <h3 className="sedg_title">{item.title}</h3>
                    )}
                    {descriptions.length > 0 &&
                      descriptions.map((para, i) => {
                        const text = para.desc || para.Decs || "";
                        return <p key={i}>{text}</p>;
                      })}
                  </div>
                  {sectionIndex !== sections.length - 1 && <hr />}
                </div>
              );
            })
          )}
         </div>
        </section>
  );
}
