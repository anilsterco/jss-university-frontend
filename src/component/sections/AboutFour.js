"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutFour({ data }) {
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

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "leftSection") return null;

        return (
          <section
            key={`left-section-${sectionIndex}`}
            className="about_four"
            data-aos="fade-up"
          >
            <div className="container">
              {section.items
                ?.sort((a, b) => a.position - b.position)
                .map((item, idx) => (
                  <div key={idx} className="about_f_value">
                    {item.image && (
                      <div
                        className="ab_fo_imgsec"
                        data-aos="fade-left"
                        data-aos-delay="300"
                      >
                        <figure className="shine-effect">
                          <Image
                            src={item.image}
                            alt={
                              item.title
                                ? item.title.slice(0, 50)
                                : "About Section"
                            }
                            width={600}
                            height={400}
                            style={{
                              width: "100%",
                              height: "auto",
                            }}
                          />
                        </figure>
                      </div>
                    )}
                    <div
                      className="ab_f_content"
                      data-aos="fade-right"
                      data-aos-delay="200">
                      {item.title && <h3>{item.title}</h3>}
                      {item.paragraph?.length > 0 &&
                        item.paragraph.map((p, i) => <p key={i}>{p.text}</p>)}
                    </div>
                  </div>
                ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
