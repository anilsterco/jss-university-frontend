"use client";
import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutOne({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "topBanner":
        return (
          <div
            className="row justify-content-center about_top"
            key={`about-section-${sectionIndex}`} 
          >
              {section.items
              .sort((a, b) => a.position - b.position)
              .map((item, index) => (
                <div
                  className="col-lg-12"
                  key={item.id || item.item_uuid || index}
                >
                  <div className="abt_cntnt">
                    {item.title && <p>{item.title}</p>}
                    {item.file && (
                      <figure>
                        <Image
                          src={item.file}
                          alt={item.title || "About JSS Academy"}
                          width={800}
                          height={500}
                          className="img-fluid w-100"
                        />
                      </figure>
                    )}
                  </div>

                  {item.description && (
                    <div className="estblish">
                      <p>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
          </div>
        );

      case "logoDesc":
        return (
          <div
            className="row justify-content-center"
            key={`logo-section-${sectionIndex}`}  
          >
            <div className="col-lg-10">
              <div className="top_log_grid">
                {section.items
                  .sort((a, b) => a.position - b.position)
                  .map((item, i) => (
                    <figure key={item.id || i}>
                      <Image
                        src={item.file}
                        alt={item.description}
                        width={100}
                        height={100}
                      />
                      <figcaption>
                        <p>{item.description}</p>
                      </figcaption>
                    </figure>
                  ))}
              </div>
            </div>
          </div>
        );

      case "figureDesc":
        return (
          <div
            className="row justify-content-center about_bottom"
            key={`figure-section-${sectionIndex}`} 
          >
            <div className="col-lg-10">
              <div className="btm_log_grid">
                {section.items
                  .sort((a, b) => a.position - b.position)
                  .map((item, i) => (
                    <figure key={item.item_uuid || i}>
                      <figcaption>
                        <h4>
                          <sup>#</sup>
                          {item.figure.replace("#", "")}
                        </h4>
                        <p>{item.facts}</p>
                      </figcaption>
                      <Image
                        src={item.file}
                        alt={item.facts}
                        width={120}
                        height={25}
                      />
                    </figure>
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
    <section className="about_one">
      <div className="container">
        {data.map((section, index) => renderSection(section, index))}

        {data.length === 0 && (
          <div className="abt_cntnt">
            <p>Welcome to JSS Academy of Technical Education</p>
          </div>
        )}
      </div>
    </section>
  );
}
