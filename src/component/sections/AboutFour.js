"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutFour({ data }) {

  // 🔹 AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // 🔹 Refresh AOS on data update
  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {

      case "values":
        return (
          <div
            key={`values-section-${sectionIndex}`}
            className="values-section"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="col-lg-10 mx-auto">
              <h3
                className="section-title text-center"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Values
              </h3>
              <div className="values-grid">
                {section.items
                  .sort((a, b) => a.position - b.position)
                  .map((item, i) => (
                    <div
                      className="value-box"
                      key={item.item_uuid || i}
                      data-aos="fade-up"
                      data-aos-delay={300 + i * 150}
                    >
                      <figure >
                        <Image
                          src={item.file}
                          alt={item.title}
                          width={70}
                          height={70}
                       data-aos="fade-right"
                data-aos-delay="200" />
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
          {data && data.length > 0 ? (
            data.map((section, index) => renderSection(section, index))
          ) : (
            <div
              className="col-lg-10 mx-auto"
              data-aos="fade-up"
            >
              <p className="text-center">No values available</p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
