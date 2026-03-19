"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function Accordion({ data }) {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  return (
    <section className="accordion_section">
      <div className="container">
        {data?.map((section, sectionIndex) => {
          if (section.type !== "accordion") return null;
          if (!section.items?.length) return null;

          return (
            <>
              {section.items.map((item, itemIndex) => {
                return (
                  item?.accordions.length > 0 &&
                  item?.accordions.map((acc, index) => (
                    <details key={index} className="faqItem">
                      <summary className="faqQuestion">
                        <span className="faq_heading">{acc.mainTitle}</span>
                        <span className="icon"></span>
                      </summary>
                      <div className="faqAnswer">
                        {acc?.title && (
                          <h5 className="sub_title">{acc.title}</h5>
                        )}
                        {acc?.description &&
                          acc.description.map((desc, descIdx) => (
                            <p key={descIdx}>{desc.desc}</p>
                          ))}

                        {acc?.listsGroup && acc.listsGroup.length > 0 && (
                          <ul className="">
                            {acc.listsGroup.map((accItem, accIdx) => (
                              <li key={accIdx}>{accItem.list}</li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </details>
                  ))
                );
              })}
            </>
          );
        })}
      </div>
    </section>
  );
}
