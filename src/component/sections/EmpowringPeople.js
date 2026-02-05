"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function EmpowringPeople({ data }) {
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
        if (section.type !== "empowringPeople") return null;
        return section.items
          ?.sort((a, b) => a.position - b.position)
          .map((item, index) => (
            <section
              className="about_jsstwo"
              key={`${sectionIndex}-${index}`}
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="grid_emaboutjss">
                      <div
                        className="grid_em_leftsec"
                        data-aos="fade-right"
                      >
                        <div className="about_subtitle">
                          <h5>{item.title}</h5>
                          {item.subtitle && <p>{item.subtitle}</p>}
                        </div>

                        {item.paragraph?.map((para, i) => (
                          <p key={i}>{para.paragraph}</p>
                        ))}
                      </div>

                      <div
                        className="grid_em_rigt"
                        data-aos="fade-left"
                      >
                        {item.image && (
                          <div className="empo_rgt_imgsec">
                            <figure className="shine-effect">
                              <Image
                                src={item.image}
                                alt={item.title}
                                width={800}
                                height={520}
                                className="img-fluid w-100"
                              />
                            </figure>
                          </div>
                        )}

                        {item.boxes?.length > 0 && (
                          <div className="ab_jss_coutsec">
                            {item.boxes.map((box, i) => (
                              <div
                                className="ab_jss_c_col"
                                key={i}
                              >
                                <h4>{box.number}</h4>
                                <p>{box.description}</p>
                              </div>
                            ))}
                          </div>
                        )}
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
