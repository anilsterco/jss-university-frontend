"use client";

import MediaSwiper from "@/component/common/MediaSwiper";

export default function ResearchLabs({ data }) {
  if (!Array.isArray(data)) return null;

  const researchLabs = data.find((s) => s.type === "researchLabs");
  const researchSecond = data.find((s) => s.type === "researchSectionSecond");
  const objectiveSection = data.find((s) => s.type === "objectiveSection");

  const sortByPosition = (items) =>
    [...(items || [])].sort(
      (a, b) => Number(a.position || 0) - Number(b.position || 0)
    );

  return (
    <>
      {sortByPosition(researchLabs?.items).map((item, idx) => {
        const uid = `researchlabs-${idx}`;

        return (
          <section key={uid} className="research_labmain pb-0">
            <div className="container">
              <div className="amenities_title">
                {item.title && <h5>{item.title}</h5>}
                {item.subtitle && <p>{item.subtitle}</p>}
              </div>
            </div>

            <div className="container">
              <div className="research_grid_one">
                <div className="researh_imgsec">
                  <MediaSwiper
                    media={item.imageVideo}
                    uid={uid}
                    width={683}
                    height={520}
                    alt={item.title || "Research Lab"}
                    fallbackImage={item.image}
                    imgClassName="img-fluid"
                    mediaStyle={{ width: "100%", height: "auto", objectFit: "cover" }}
                  />
                </div>

                <div className="research_cont">
                  {Array.isArray(item.decs) &&
                    item.decs.map((d, i) => <p key={i}>{d.paragraph}</p>)}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {sortByPosition(researchSecond?.items).map((item, idx) => {
        const uid = `researchsecond-${idx}`;

        return (
          <section
            key={uid}
            className={`research_labmain second pb-0 pt-0 ${
              idx % 2 === 0 ? "section_right" : "left"
            }`}
          >
            <div className="container">
              <div className="research_grid_two research_at">
                <div className="research_cont">
                  {item.title && (
                    <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
                  )}
                  {Array.isArray(item.desc) &&
                    item.desc.map((d, i) => <p key={i}>{d.paragraph}</p>)}
                </div>

                <div className="researh_imgsec">
                  <MediaSwiper
                    media={item.imageVideo}
                    uid={uid}
                    width={683}
                    height={520}
                    alt={item.title || "Research Lab"}
                    fallbackImage={item.image}
                    imgClassName="img-fluid"
                    mediaStyle={{ width: "100%", height: "auto", objectFit: "cover" }}
                  />
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {sortByPosition(objectiveSection?.items).map((item, idx) => (
        <section key={`objective-${idx}`} className="research_labmain pt-0">
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