"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutThree({ data }) {
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
      {data.map((section, index) => {
        if (section.type !== "vision") return null;

        const item = section.items?.[0];
        if (!item) return null;

        return (
          <section
            key={`vision-${index}`}
            className="about_three"
            data-aos="fade-up"
          >
            <div className="container">
              <div className="vsn_msn_grid">
                <div
                  className="miss-rgt"
                  data-aos="fade-right"
                  data-aos-delay="200"
                >
                  <div className="vsn">
                    {item.title && (
                      <h4
                        dangerouslySetInnerHTML={{ __html: item.title }}
                        data-aos="fade-up"
                        data-aos-delay="300"
                      />
                    )}

                    {item.subtitle && (
                      <p data-aos="fade-up" data-aos-delay="400">
                        {item.subtitle}
                      </p>
                    )}

                    {item.points?.length > 0 && (
                      <ul className="custom-list">
                        {item.points.map((point, i) => (
                          <li
                            key={i}
                            data-aos="fade-up"
                            data-aos-delay={500 + i * 100}
                          >
                            {point.text}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>

                {item.image && (
                  <div
                    className="vsn-lft shine-effect"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                  >
                    <Image
                      src={item.image}
                      alt={
                        item.title
                          ? item.title.replace(/<[^>]+>/g, "")
                          : "Vision"
                      }
                      height={750}
                      width={683}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
