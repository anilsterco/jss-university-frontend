"use client";

import { useEffect } from "react";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function PublicationPatents({ data = [] }) {
  useEffect(() => {
    import("aos").then((AOS) => {
      AOS.init({
        duration: 1000,
        easing: "ease-in-out",
        once: true,
      });
    });
  }, []);

  useEffect(() => {
    import("aos").then((AOS) => AOS.refresh());
  }, [data]);

  const renderSection = (section, index) => {
    if (section.type !== "publicationPatents") return null;

    const item = section.items?.[0] || {};
    return (
      <section className="pulication_patent" key={index}>
        <div className="container">
          <div className="publi_title">
            <h5 className="heading_title">{item.title}</h5>
            <h4>{item.subtitle}</h4>
          </div>
          <div className="publi_gridmain">
            <div className="publi_content">
              <h6>{item.heading}</h6>
              <p>{item.decs}</p>
            </div>
            <div className="public_table">
              <p>SUMMARY OF PATENT PUBLISHED AND GRANT DETAILS</p>
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
                      <tr>
                        <td>2024</td>
                        <td>69</td>
                        <td>39</td>
                        <td>108</td>
                      </tr>
                      <tr>
                        <td>2023</td>
                        <td>149</td>
                        <td>90</td>
                        <td>239</td>
                      </tr>
                      <tr>
                        <td>2022</td>
                        <td>165</td>
                        <td>91</td>
                        <td>256</td>
                      </tr>
                      <tr>
                        <td>2021</td>
                        <td>78</td>
                        <td>23</td>
                        <td>101</td>
                      </tr>
                      <tr>
                        <td>2020</td>
                        <td>76</td>
                        <td>43</td>
                        <td>119</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return <>{data.map((section, index) => renderSection(section, index))}</>;
}
