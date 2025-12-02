"use client";

import Image from "next/image";
import Link from "next/link";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityFour({ data }) {
  
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "librarySection":
        return (
          <section key={`library-section-${sectionIndex}`} className="facilities-sec5">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {section.items
                    .sort((a, b) => a.position - b.position)
                    .map((item, i) => (
                      <div className="library" key={item.item_uuid || i}>
                        <div className="library-box">
                          <div className="left-library">
                            <div className="top-library-text">
                              <h5>{item.title}</h5>
                              <p>{item.description}</p>
                              <div className="learn-text">
                                <h6>{item.quote_text}</h6>
                                <span>- { item.quote_author}</span>
                              </div>
                              <Link href={item.link} className="library-link">
                                <i className="bi bi-arrow-right-short"></i>
                              </Link>
                            </div>

                            <div className="bottom-library-text">
                              <div className="library-timing">
                                <h6>{item.timings_title}</h6>
                                <ul>
                                  {[
                                    item.schedule_1,
                                    item.schedule_2,
                                    item.schedule_3,
                                    item.schedule_4
                                  ]
                                    .filter(schedule => schedule && schedule.trim() !== "")
                                    .map((schedule, index) => (
                                      <li key={index}>
                                        <span>{schedule}</span>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                              <div className="bottom-library-img">
                                <figure>
                                  <Image
                                    src={item.file}
                                    alt="Library"
                                    width={300}
                                    height={200}
                                    className="img-fluid w-100"
                                  />
                                </figure>
                              </div>
                            </div>
                          </div>
                          <div className="right-library">
                            <div className="right-library-top">
                              <figure>
                                <Image
                                  src={item.icon}
                                  alt="Library Interior"
                                  width={400}
                                  height={300}
                                  className="img-fluid w-100"
                                />
                              </figure>
                            </div>
                            <div className="right-library-bottom">
                              <figure>
                                <Image
                                  src={item.photo}
                                  alt="Library Collection"
                                  width={400}
                                  height={200}
                                  className="img-fluid w-100"
                                />
                              </figure>
                              <div className="right-library-text">
                                <h2>{item.stats_number}</h2>
                                <p>{item.stats_description}</p>
                              </div>
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

      default:
        return null;
    }
  };

  return (
    <>
      {/* Map every section dynamically */}
      {data.map((section, index) => renderSection(section, index))}

      {/* Fallback */}
      {data.length === 0 && (
        <section className="facilities-sec5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="text-center">No library information available</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}