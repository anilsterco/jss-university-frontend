"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutFive({ data }) {

  // 🔹 AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // 🔹 Refresh AOS when data updates
  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const renderSection = (section, index) => {
    switch (section.type) {

      case "qualityPolicy":
        const item = section.items[0];

        return (
          <section
            key={`quality-policy-${index}`}
            className="about_five"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="container">
              <div className="quality_grid">

                {/* 🔹 LEFT IMAGE */}
                <figure
                  className="shine-effect"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <Image
                    src={item.file}
                    alt="Quality Policy"
                    width={700}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>

                {/* 🔹 RIGHT CONTENT */}
                <div
                  className="qty-rgt"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  <h3 data-aos="fade-up" data-aos-delay="300">
                    {item.title}
                  </h3>

                  <p data-aos="fade-up" data-aos-delay="400">
                    {item.description}
                  </p>

                  <h5 data-aos="fade-up" data-aos-delay="450">
                    {item.subtitle}
                  </h5>

                  <ul className="custom-list">
                    {[
                      item.point1,
                      item.point2,
                      item.point3,
                      item.point4,
                    ]
                      .filter(Boolean)
                      .map((point, i) => (
                        <li
                          key={`quality-point-${i}`}
                          data-aos="fade-up"
                          data-aos-delay={500 + i * 100}
                        >
                          {point}
                        </li>
                      ))}
                  </ul>
                </div>

              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return <>{data.map((section, index) => renderSection(section, index))}</>;
}
