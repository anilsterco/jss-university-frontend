"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutFour({ data }) {
  
  // Render dynamically based on section type
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "values":
        return (
          <div key={`values-section-${sectionIndex}`} className="values-section">
            <div className="col-lg-10 mx-auto">
              <h3 className="section-title text-center">Values</h3>

              <div className="values-grid">
                {section.items
                  .sort((a, b) => a.position - b.position)
                  .map((item, i) => (
                    <div className="value-box" key={item.item_uuid || i}>
                      <figure>
                        <Image
                          src={item.file}
                          alt={item.title}
                          width={70}
                          height={70}
                        />
                      </figure>
                      <h3>{item.title}</h3>
                      <p>{item.description}</p>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="about_four">
      <div className="container">
        <div className="row justify-content-center">
          {/* Map every section dynamically */}
          {data.map((section, index) => renderSection(section, index))}

          {/* Fallback */}
          {data.length === 0 && (
            <div className="col-lg-10 mx-auto">
              <p className="text-center">No values available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
