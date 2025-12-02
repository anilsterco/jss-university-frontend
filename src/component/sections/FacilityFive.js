"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityFive({ data }) {
  
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "sideSection":
        return (
          <div key={`side-section-${sectionIndex}`} className="facilities-sec6">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {section.items
                    .sort((a, b) => a.position - b.position)
                    .map((item, i) => (
                      <div className="initiatives" key={item.item_uuid || i}>
                        <div className="initiatives-img">
                          <figure>
                            <Image
                              src={item.file}
                              alt={item.Title}
                              width={600}
                              height={400}
                              className="img-fluid w-100"
                            />
                          </figure>
                        </div>
                        <div className="initiatives-text">
                          <div className="initiatives-top-text">
                            <h5>{item.Title}</h5>
                            <h6>{item.Subtitle}</h6>
                            <p>{item.Desc}</p>
                          </div>
                          <div className="initiatives-bottom-text">
                            <span>{item.point_title}</span>
                            <ul>
                              {[
                                item.Point1,
                                item.Point2,
                                item.Point3,
                                item.Point4
                              ]
                                .filter(point => point && point.trim() !== "")
                                .map((point, index) => (
                                  <li key={index}>{point}</li>
                                ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="facilities-sec6">
      {/* Map every section dynamically */}
      {data.map((section, index) => renderSection(section, index))}

      {/* Fallback */}
      {data.length === 0 && (
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <p className="text-center">No content available</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}