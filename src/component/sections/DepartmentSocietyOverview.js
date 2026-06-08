"use client";

import React, { useEffect } from "react";
import parse from "html-react-parser";
import AOS from "aos";

import "aos/dist/aos.css";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import "@/styles/globals.css"
import Image from "next/image";

export default function DepartmentSocietyOverview({ data }) {
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
        if (section.type !== "department_society_overview") return null;
        if (!section.items?.length) return null;

        return (

          <React.Fragment key={sectionIndex}>

            {section.items.map((item, itemIndex) => {
              // if (!item.content) return null;
              console.log('item>>>', item)
              return (
                <div className="department_society_overview" key={itemIndex}>
                  <div className="container">
                    <div className="society_overview_grid">
                      <div className="right_side_menus">
                        {item?.side_menus?.map((menu, index) => {
                          return (
                            <div key={index} className="society_links">
                              <a href={menu?.slug} target="_blank">{menu?.name}</a>
                            </div>
                          )
                        })}
                      </div>
                      <div className="left_side_content">
                        <h1 dangerouslySetInnerHTML={{ __html: item?.heading }} />
                        <h2>{item?.sub_heading}</h2>
                        <p>{item?.description}</p>
                      </div>
                    </div>
                      <div className="overview_bottom_data">
                          <div className="">
                            <Image
                              src={item?.image}
                              alt="Society Overview Image"
                              width={683}
                              height={520}
                              style={{ width: "100%", height: "auto" }}
                            />
                          </div>
                          <div className="content_pdf_wrapper">
                            <p>{item?.bottom_description}</p>
                            <div className="pdf_div">
                             <a href="https://project-demo.in/jss/assets/img/courses/curriculum/1774443137_69c3da81c1884.pdf" target="_blank" rel="noopener noreferrer"><Image alt="PDF" loading="lazy" width="20" height="20" decoding="async" data-nimg="1" className="img-fluid" src="/images/custom-page/red-pdf-icon.png" style="color: transparent;"/>{item?.pdf_name}</a>
                            </div>
                          </div>
                      </div>
                  </div>
                </div>
              );
            })}

          </React.Fragment>
        );
      })}
    </>
  );
}