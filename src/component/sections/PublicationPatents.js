"use client";

import { useEffect } from "react";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Link from "next/link";
import Image from "next/image";

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
              {item?.rightTitle && <p>{item.rightTitle}</p>}
              {item?.table && (
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
                        {item.table.map((row, i) => (
                          <tr key={i}>
                            <td>{row.year}</td>
                            <td>{row.scopus}</td>
                            <td>{row.wos}</td>
                            <td>
                              {row.total?.map((totalItem, totalIdx) => (
                                <Link
                                  key={totalIdx}
                                  target="_blank"
                                  href={totalItem.url}
                                >
                                  <Image
                                    src={"/images/icons/pdf.png"}
                                    alt="PDF"
                                    width={30}
                                    height={40}
                                  />
                                </Link>
                              ))}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return <>{data.map((section, index) => renderSection(section, index))}</>;
}
