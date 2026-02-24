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
                {section.items[0]?.list && section.items[0].list.length > 0 && (
                  <div className="exten_listyle">
                    <ul>
                      {section.items[0].list.map((item, i) => (
                        <li key={i}>{item.list}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      );
    }

    return null;
  };

  return <>{data?.map((section, index) => renderSection(section, index))}</>;
}
