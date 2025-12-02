"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilitySix({ data }) {
  
  // Render dynamically based on section type
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "featuresSection":
        return (
          <section key={`features-section-${sectionIndex}`} className="facilities-sec7">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {section.items
                    .sort((a, b) => a.position - b.position)
                    .map((item, i) => (
                      <div className="transport" key={item.item_uuid || i}>
                        <div className="transport-box">
                          <div className="transport-box-text">
                            <span>{item.Title}</span>
                            <h3>{item.Subtitle}</h3>
                            <p>{item.Desc}</p>
                            {item.link && (
                              <Link href={item.link} className="library-link">
                                <i className="bi bi-arrow-right-short"></i>
                              </Link>
                            )}
                          </div>
                          <div className="transport-box-img">
                            <figure>
                              <Image
                                src={item.file}
                                alt={item.Title}
                                width={500}
                                height={300}
                                className="img-fluid w-100"
                              />
                            </figure>
                          </div>
                        </div>
                        <div className="right-transport">
                          <div className="right-transport-img">
                            <figure>
                              <Image
                                src={item.photo}
                                alt={`${item.Title} Fleet`}
                                width={300}
                                height={200}
                                className="img-fluid w-100"
                              />
                            </figure>
                          </div>
                          <div className="right-transport-text">
                            <div className="right-transport-titel">
                              <p>{item.additional}</p>
                            </div>
                            <div className="right-transport-heading">
                              <h3>{item.number}</h3>
                              <p>{item.quote}</p>
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
        <section className="facilities-sec7">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <p className="text-center">No transport information available</p>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}