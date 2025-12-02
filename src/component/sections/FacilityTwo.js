"use client";
import { useState } from "react";
import Link from "next/link";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityTwo({ data }) {
  const [activeLab, setActiveLab] = useState(0);

  const handleLabClick = (index) => {
    setActiveLab(index);
  };

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "heading":
        return (
          <section
            className="facilities-sec2"
            key={`heading-section-${sectionIndex}`}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="academics-labs-text">
                    {section.items
                      .sort((a, b) => a.position - b.position)
                      .map((item, index) => (
                        <div key={item.item_uuid || index}>
                          {item.title && <h6>{item.title}</h6>}
                          {item.subtitle && <p>{item.subtitle}</p>}
                        </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "dataSlider":
        // Get the items for the dataSlider
        const labItems = section.items.sort((a, b) => a.position - b.position);
        
        return (
          <section
            className="facilities-sec3"
            key={`dataslider-section-${sectionIndex}`}
          >
            <div className="labs-wrapper">
              {/* Background image from active lab */}
              {labItems.length > 0 && labItems[activeLab]?.file && (
                <div
                  className="labs-bg"
                  id="labs-bg"
                  style={{
                    backgroundImage: `url(${labItems[activeLab].file})`,
                  }}
                ></div>
              )}
              <div className="labs-overlay"></div>

              <div className="labs-container">
                {/* Left Side - Labs Menu */}
                <div className="labs-menu">
                  {labItems.map((lab, index) => (
                    <div
                      key={lab.item_uuid || index}
                      className={`menu-item ${activeLab === index ? "active" : ""}`}
                      onClick={() => handleLabClick(index)}
                    >
                      <div className="menu-header">{lab.header || lab.title}</div>
                      <div className="menu-content">
                        <h4>{lab.title}</h4>
                        <p>{lab.description}</p>
                        {lab.link && (
                          <Link href={lab.link}>
                            <i className="bi bi-arrow-right-short"></i>
                          </Link>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Right Side - Lab Info */}
                {labItems.length > 0 && (
                  <div className="labs-info">
                    <h2 className="labs-title">{labItems[activeLab].title}</h2>
                    <p className="labs-desc">{labItems[activeLab].description}</p>
                    {labItems[activeLab].link && (
                      <Link
                        href={labItems[activeLab].link}
                        className="labs-link"
                      >
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      default:
        console.warn(`Unknown section type in FacilityTwo: ${section.type}`);
        return null;
    }
  };

  return (
    <>
      {data.map((section, index) => renderSection(section, index))}

      {data.length === 0 && (
        <section className="facilities-sec2">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="academics-labs-text">
                  <h6>Academic Labs</h6>
                  <p>No lab data available.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
}