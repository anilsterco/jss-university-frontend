"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutThree({ data }) {
  // 🔹 AOS INIT
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // 🔹 Refresh AOS when API data changes
  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const renderSection = (section, index) => {
    switch (section.type) {
      case "visionMission":
        const item = section.items[0];

        return (
          <section
            key={`vision-mission-${index}`}
            className="about_three"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div className="container">
              <div className="vsn_msn_grid">
                {/* 🔹 LEFT IMAGE */}
                <div
                  className="miss-rgt"
                  data-aos="fade-left"
                  data-aos-delay="200"
                >
                  {/* 🔹 VISION */}
                  <div className="vsn">
                    <h4 data-aos="fade-up" data-aos-delay="300">
                      {item.visionTitle}
                    </h4>

                    <h5 data-aos="fade-up" data-aos-delay="400">
                      {item.visionDesc}
                    </h5>

                    <ul className="custom-list">
                      {[
                        item.visionPoint1,
                        item.visionPoint2,
                        item.visionPoint3,
                        item.visionPoint4,
                      ]
                        .filter(Boolean)
                        .map((point, i) => (
                          <li
                            key={`vision-point-${i}`}
                            data-aos="fade-up"
                            data-aos-delay={500 + i * 100}
                          >
                            {point}
                          </li>
                        ))}
                    </ul>
                  </div>

                  {/* 🔹 MISSION */}
                  {/* <div className="msn">
                    <h4 data-aos="fade-up" data-aos-delay="300">
                      {item.missionTitle}
                    </h4>

                    <p data-aos="fade-up" data-aos-delay="400">
                      {item.missionDesc}
                    </p>

                    <h6 data-aos="fade-up" data-aos-delay="450">
                      {item.missionSubtitle}
                    </h6>

                    <ul className="custom-list">
                      {[
                        item.missionPoint1,
                        item.missionPoint2,
                        item.missionPoint3,
                        item.missionPoint4,
                      ]
                        .filter(Boolean)
                        .map((point, i) => (
                          <li
                            key={`mission-point-${i}`}
                            data-aos="fade-up"
                            data-aos-delay={500 + i * 100}
                          >
                            {point}
                          </li>
                        ))}
                    </ul>
                  </div> */}
                </div>

                {/* 🔹 RIGHT CONTENT */}
                <div
                  className="vsn-lft shine-effect"
                  data-aos="zoom-in"
                  data-aos-duration="1000"
                >
                  <Image
                    src={item.file}
                    alt="Vision & Mission"
                    width={700}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
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
