"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutThree({ data }) {
  // RENDER SECTIONS DYNAMICALLY
  const renderSection = (section, index) => {
    switch (section.type) {
      case "visionMission":
        const item = section.items[0]; // Only one item inside array

        return (
          <section
            key={`vision-mission-${index}`}
            className="about_three"
          >
            <div className="container">
              <div className="vsn_msn_grid">
                {/* LEFT IMAGE */}
                <div className="vsn-lft">
                  <Image
                    src={item.file}
                    alt="Vision & Mission"
                    width={700}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>

                {/* RIGHT CONTENT */}
                <div className="miss-rgt">
                  
                  {/* VISION */}
                  <div className="vsn">
                    <h4>{item.visionTitle}</h4>
                    <h5>{item.visionDesc}</h5>

                    <ul className="custom-list">
                      {[
                        item.visionPoint1,
                        item.visionPoint2,
                        item.visionPoint3,
                        item.visionPoint4,
                      ]
                        .filter(Boolean)
                        .map((point, i) => (
                          <li key={`vision-point-${i}`}>{point}</li>
                        ))}
                    </ul>
                  </div>

                  {/* MISSION */}
                  <div className="msn">
                    <h4>{item.missionTitle}</h4>
                    <p>{item.missionDesc}</p>

                    <h6>{item.missionSubtitle}</h6>

                    <ul className="custom-list">
                      {[
                        item.missionPoint1,
                        item.missionPoint2,
                        item.missionPoint3,
                        item.missionPoint4,
                      ]
                        .filter(Boolean)
                        .map((point, i) => (
                          <li key={`mission-point-${i}`}>{point}</li>
                        ))}
                    </ul>
                  </div>
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
