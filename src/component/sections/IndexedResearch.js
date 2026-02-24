"use client";

import { useEffect } from "react";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function IndexedResearch({ data }) {
  useEffect(() => {
    import("aos").then(AOS => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    });
  }, []);

  useEffect(() => {
    import("aos").then(AOS => AOS.refresh());
  }, [data]);

  const renderSection = (section, sectionIndex) => {
    if (section.type === "indexedResearch") {
      const counts = section.items[0]?.count || [];
      const tableData = section.items[0]?.table || [
        { year: 2024, scopus: 69, wos: 39, total: 108 },
        { year: 2023, scopus: 149, wos: 90, total: 239 },
        { year: 2022, scopus: 165, wos: 91, total: 256 },
        { year: 2021, scopus: 78, wos: 23, total: 101 },
        { year: 2020, scopus: 76, wos: 43, total: 119 },
      ];

      return (
        <section className="research_cre_main" key={sectionIndex}>
          <div className="containerMD">
            <div className="res_cre_bor"></div>
          </div>

          <div className="container">
            <div className="index_res_grid">
              <div className="resea_cre_items">
                {section.items[0]?.subtitle && <h3>{section.items[0].subtitle}</h3>}
                <div className="ab_jss_coutsec">
                  {counts.map((item, i) => (
                    <div className="ab_jss_c_col" key={i}>
                      <h4>{item.count}</h4>
                      <p>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="resea_cre_items2">
                {section.items[0]?.subtitleRight && <h3>{section.items[0].subtitleRight}</h3>}
                <div className="fee_strcu_table">
                  <div className="fee_table_wrapper">
                    <table className="fee_table">
                      <thead>
                        <tr>
                          <th>Year</th>
                          <th>SCOPUS</th>
                          <th>WOS</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.map((row, i) => (
                          <tr key={i}>
                            <td>{row.year}</td>
                            <td>{row.scopus}</td>
                            <td>{row.wos}</td>
                            <td>{row.total}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="containerMD">
            <div className="res_cre_bor"></div>
          </div>
        </section>
      );
    }

    return null;
  };

  return <>{data?.map((section, index) => renderSection(section, index))}</>;
}
