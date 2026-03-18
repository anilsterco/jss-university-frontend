"use client";

import React, { useEffect } from "react";
import parse from "html-react-parser";
import AOS from "aos";

import "aos/dist/aos.css";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function DepartmentResearch({ data }) {
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

  return (
        <>
          {data?.map((section, sectionIndex) => {
              if (section.type !== "departmentResearch") return null;
              if (!section.items?.length) return null;

              return (
                
                    <React.Fragment key={sectionIndex}>
                    
                    {section.items.map((item, itemIndex) => {
                      if (!item.content) return null;

                      return (
                        <div key={itemIndex} className={item.sectionType || ""}>
                          {parse(item.content)}
                        </div>
                      );
                    })}
                    
                    </React.Fragment>
              );
            })}
        </>
  );
}