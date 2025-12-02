"use client";
import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityThree({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "researchSection":
        return (
          <section
            className="facilities-sec4"
            key={`research-section-${sectionIndex}`}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {section.items
                    .sort((a, b) => a.position - b.position)
                    .map((item, index) => (
                      <div className="res-center" key={item.item_uuid || index}>
                        <div className="res-center-img">
                          {item.photo && (
                            <figure>
                              <Image
                                src={item.photo}
                                alt={item.title || "Research Center"}
                                width={600}
                                height={400}
                                className="img-fluid w-100"
                              />
                            </figure>
                          )}
                        </div>
                        <div className="res-center-text">
                          <div className="top-res-text">
                            {item.title && <h6>{item.title}</h6>}
                            {item.subtitle && <p>{item.subtitle}</p>}
                            {item.quote && (
                              <blockquote>{item.quote}</blockquote>
                            )}
                            {item.description && <p>{item.description}</p>}
                          </div>
                          <div className="bottom-res-box">
                            {item.icon && (
                              <div className="bottom-res-img">
                                <figure>
                                  <Image
                                    src={item.icon}
                                    alt="Research Stats"
                                    width={200}
                                    height={150}
                                    className="img-fluid w-100"
                                  />
                                </figure>
                              </div>
                            )}
                            <div className="bottom-res-text">
                              {item.percent && <h3>{item.percent}</h3>}
                              {item.quote && <p>{item.quote}</p>}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        );

      case "objectives":
        return (
          <section
            className="facilities-sec4"
            key={`objectives-section-${sectionIndex}`}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="objectives-titel">
                    <span>Objectives</span>
                  </div>
                  <div className="objectives">
                    {section.items
                      .sort((a, b) => a.position - b.position)
                      .map((item, index) => (
                        <div key={item.item_uuid || index} className="objectives-box">
                          {item.points && <p>{item.points}</p>}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        console.warn(`Unknown section type in FacilityThree: ${section.type}`);
        return null;
    }
  };

  return (
    <>
      {data.map((section, index) => renderSection(section, index))}

      {data.length === 0 && (
        <section className="facilities-sec4">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="res-center">
                  <div className="res-center-text">
                    <h6>Research Center</h6>
                    <p>No research data available.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}