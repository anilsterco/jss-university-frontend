"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutOne({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const renderSection = (section, sectionIndex) => {
    if (section.type === "thefollowingfacilities") {
      const listItems = section.items[0]?.list || [];
      const firstSix = listItems.slice(0, 6);
      const restItems = listItems.slice(6);

      return (
        <section className="resea_facili_main" key={sectionIndex}>
          <div className="container">
            <div className="exte_mainsec">
              {section.items[0]?.title && <h6>{section.items[0].title}</h6>}

              <div className="exten_grid">
                {section.items[0]?.image && (
                  <div className="exte_imgsec">
                    <figure className="shine-effect">
                      <Image
                        src={section.items[0].image}
                        alt={section.items[0].title || "Facility Image"}
                        width={1390}
                        height={550}
                        className="img-fluid"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </figure>
                  </div>
                )}

                {/* First 6 list items */}
                <div className="exten_listyle">
                  {firstSix.length > 0 && (
                    <ul>
                      {section.items[0]?.heading && (
                        <h4 className="text-left">
                          {section.items[0].heading}
                        </h4>
                      )}
                      {firstSix.map((item, i) => (
                        <li key={i}>
                          <span
                            dangerouslySetInnerHTML={{ __html: item.list }}
                          />
                        </li>
                      ))}
                    </ul>


                  )}
                  {section.items[0]?.title && <p>{section.items[0].description}</p>}
                  {section.items[0]?.pdfIcons?.length > 0 && (
                    <div className="downlo_guides">
                      {section.items[0]?.pdfIcons.map((pdf, i) => (
                        <a key={i} href={pdf.pdf} target="_blank">
                          <figure className="shine-effect">
                            <Image
                              alt="PDF Icon"
                              loading="lazy"
                              width="15"
                              height="20"
                              decoding="async"
                              data-nimg="1"
                              className="img-fluid"
                              style={{ color: "transparent" }}
                              src="/images/icons/pdf.png"
                            />
                          </figure>
                          {pdf.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Remaining items below image */}
              {restItems.length > 0 && (
                <div className="exten_listyle below_list">
                  <ul>
                    {restItems.map((item, i) => (
                      <li key={i}>
                        <span dangerouslySetInnerHTML={{ __html: item.list }} />
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </section>
      );
    }

    return null;
  };

  return <>{data?.map((section, index) => renderSection(section, index))}</>;
}
