"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutOne({ data }) {
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

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "tableSection":
        return (
          <section className="fee_sturc_admain" id="feestructure" key={sectionIndex}>
            <div className="container">
              <div className="fee_stru_title">
                {section.items[0]?.heading && (
                  <h5>{section.items[0].heading}</h5>
                )}
                {section.items[0]?.subheading && (
                  <span
                    className=" sub_heading"
                    dangerouslySetInnerHTML={{
                      __html: section.items[0].subheading,
                    }}
                  />
                )}
              </div>
              <div className="fee_strcu_table">
                <div className="fee_table_wrapper">
                  <table className="fee_table">
                    <thead>
                      <tr>
                        <th>Sl. No</th>
                        <th>Branch</th>
                        <th>Year 1</th>
                        <th>Year 2</th>
                        <th>Year 3</th>
                        <th>Year 4</th>
                      </tr>
                    </thead>
                    <tbody>
                      {section.items[0]?.table?.map((row, idx) => (
                        <tr key={idx}>
                          <td>{idx + 1}</td>
                          <td>{row.branch || "-"}</td>
                          <td>{row.year1 || "-"}</td>
                          <td>{row.year2 || "-"}</td>
                          <td>{row.year3 || "-"}</td>
                          <td>{row.year4 || "-"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
              {section.items[0]?.description && (
                <div className="description" dangerouslySetInnerHTML={{__html:section.items[0]?.description}} />
              )}
            </div>
          </section>
        );
      default:
        return null;
    }
  };

  return <>{data?.map((section, index) => renderSection(section, index))}</>;
}
