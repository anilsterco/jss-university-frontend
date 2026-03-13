"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function Fosteringcreativity({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "fosteringcreativity") return null;

        return section.items
          ?.sort((a, b) => a.position - b.position)
          .map((item, index) => (
            <section
              id="equal-opportunity-cell"
              className="about_fost_sec"
              key={`${sectionIndex}-${index}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="ab_fost_grid">
                      
                      <div
                        className="ab_fost_lft_col"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        <h5>{item.title}</h5>

                        {item.paragraph?.map((para, i) => (
                          <p key={i}>{para.paragraph}</p>
                        ))}

                        {item.button_name && (
                          <a target="_blank"
                            href={item.button_url || "#"}
                            className="learn_more"
                          >
                            {item.button_name}
                          </a>
                        )}
                      </div>
                      <div className="grid_em_rigt">
                        <div className="empo_rgt_imgsec">
                          <figure className="shine-effect">
                            <Image
                              src="/images/about-page/ab_fostering.webp"
                              alt={item.title}
                              width={683}
                              height={750}
                              className="img-fluid w-100"
                              data-aos="fade-up"
                              data-aos-delay="200"
                            />
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ));
      })}
    </>
  );
}
