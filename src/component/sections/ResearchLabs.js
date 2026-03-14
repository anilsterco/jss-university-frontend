"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function ResearchLabs({ data }) {
  if (!Array.isArray(data)) return null;

  const researchLabs = data.find((s) => s.type === "researchLabs");
  const researchSecond = data.find(
    (s) => s.type === "researchSectionSecond"
  );
  const objectiveSection = data.find(
    (s) => s.type === "objectiveSection"
  );

  return (
    <>
      {researchLabs?.items
        ?.sort((a, b) => Number(a.position || 0) - Number(b.position || 0))
        .map((item, idx) => (
          <section key={`researchLabs-${idx}`} className="research_labmain pb-0">
            <div className="container">
              <div className="amenities_title">
                {item.title && <h5>{item.title}</h5>}
                {item.subtitle && <p>{item.subtitle}</p>}
              </div>
            </div>

            <div className="container">
              <div className="research_grid_one">
                <div className="researh_imgsec">
                  <figure className="shine-effect img-full">
                    <Image
                      src={
                        item.image ||
                        "/images/about-page/research_lab_01.webp"
                      }
                      alt={item.title || "Research Labs"}
                      className="w-100"
                      width={683}
                      height={520}
                    />
                  </figure>
                </div>

                <div className="research_cont">
                  {Array.isArray(item.decs) &&
                    item.decs.map((d, i) => (
                      <p key={i}>{d.paragraph}</p>
                    ))}
                </div>
              </div>
            </div>
          </section>
        ))}

    
      {researchSecond?.items
        ?.sort((a, b) => Number(a.position || 0) - Number(b.position || 0))
        .map((item, idx) => (
          <section
            key={`researchSecond-${idx}`}
            className="research_labmain pb-0 pt-0"
          >
            <div className="container">
              <div className="research_grid_two research_at">
                <div className="research_cont">
                  {item.title && <h2>{item.title}</h2>}

                  {Array.isArray(item.desc) &&
                    item.desc.map((d, i) => (
                      <p key={i}>{d.paragraph}</p>
                    ))}
                </div>

                <div className="researh_imgsec">
                  {item.image && (
                    <figure className="shine-effect img-full">
                      <Image
                        src={item.image}
                        alt={item.title || "Research"}
                        className="w-100"
                        width={683}
                        height={520}
                      />
                    </figure>
                  )}
                </div>
              </div>
            </div>
          </section>
        ))}

     
      {objectiveSection?.items
        ?.sort((a, b) => Number(a.position || 0) - Number(b.position || 0))
        .map((item, idx) => (
          <section key={`objective-${idx}`} className="research_labmain  pt-0">
            <div className="container">
              <div className="re_lab_objective">
                {item.heading && <h4>{item.heading}</h4>}

                <div className="re_obj_grid">
                  {Array.isArray(item.boxes) &&
                    item.boxes.map((box, bidx) => (
                      <div className="re_obj_card" key={bidx}>
                        <p>{box.desc}</p>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        ))}
    </>
  );
}
