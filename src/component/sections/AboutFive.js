"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutFive({ data }) {
  const renderSection = (section, index) => {
    switch (section.type) {
      case "qualityPolicy":
        const item = section.items[0]; // only 1 item in array

        return (
          <section key={`quality-policy-${index}`} className="about_five">
            <div className="container">
              <div className="quality_grid">
                
                {/* LEFT IMAGE */}
                <figure>
                  <Image
                    src={item.file}
                    alt="Quality Policy"
                    width={700}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </figure>

                {/* RIGHT SIDE TEXT */}
                <div className="qty-rgt">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>

                  <h5>{item.subtitle}</h5>

                  <ul className="custom-list">
                    {[
                      item.point1,
                      item.point2,
                      item.point3,
                      item.point4
                    ]
                      .filter(Boolean)
                      .map((point, i) => (
                        <li key={`quality-point-${i}`}>{point}</li>
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
