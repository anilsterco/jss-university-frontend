"use client";

import { useEffect, useState } from "react";
import parse from "html-react-parser";

import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function DepartmentResearch({ data }) {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  return (
    <section className="about_two labs_group_section">
      <div className="container">
        {data?.map((section, sectionIndex) => {
          if (section.type !== "departmentResearch") return null;
          if (!section.items?.length) return null;

          return (
            <section
              key={sectionIndex}
              className={`department_research_section`}
            >
              <div className="container">
                {section.items.map((item, itemIndex) => {
                  return (
                    <div key={itemIndex} className={`${item.sectionType}`}>
                      {parse(item.content)}
                    </div>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </section>
  );
}
