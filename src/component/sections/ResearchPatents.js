import React from "react";
import HODMessage from "../department-components/hod-message-component/HodMessageComponent";
import Image from "next/image";
import Link from "next/link";
import PlacementComponent from "../home-components/placement/PlacementComponent";
import TabSection from "./TabSection";
import TabsGridComponent from "./TabsGridComponent";

export default function ResearchPatents({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "ResearchPatents":
        return (
          <div
            key={sectionIndex}
            className={`containerXl paddingTopBottom ${section.items[0]?.extraClass}`}
          >
            {section?.items &&
              section.items.length >= -1 &&
              section.items.map((item, idx) => (
                <React.Fragment key={idx}>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-11 mx-auto">
                        {item?.heading && (
                          <h5 className="patent_heading">{item.heading}</h5>
                        )}
                        {item?.subHeading && (
                          <p className="patent_subHeading">{item.subHeading}</p>
                        )}
                        <div className="researchPatents">
                          {/* LEFT COLUMN */}
                          <div className="researchPatents__left">
                            {item?.leftHeading && (
                              <p className="researchPatents__subtitle">
                                {item.leftHeading}
                              </p>
                            )}

                            {item?.leftTitle && (
                              <h6 className="research_leftTitle">
                                {item.leftTitle}
                              </h6>
                            )}
                            {item?.leftDesc && (
                              <p className="research_leftDesc">
                                {item.leftDesc}
                              </p>
                            )}
                            {item?.leftBoxes && (
                              <div className="researchPatents__statsGrid">
                                {item.leftBoxes?.map((stat, i) => (
                                  <div
                                    key={i}
                                    className="researchPatents__statCard"
                                  >
                                    <span className="researchPatents__statNumber">
                                      {stat.counter}
                                    </span>
                                    <span className="researchPatents__statLabel">
                                      {stat.counterTitle}
                                    </span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>

                          {/* RIGHT COLUMN */}
                          <div className="researchPatents__right">
                            {item?.rightHeading && (
                              <p className="researchPatents__subtitle">
                                {item.rightHeading}
                              </p>
                            )}
                            {item?.rightTitle && (
                              <p className="tableTitle">{item.rightTitle}</p>
                            )}
                            <table className="researchPatents__table">
                              <thead>
                                <tr>
                                  <th>Year</th>
                                  <th>SCOPUS</th>
                                  <th>WOS</th>
                                  <th>Total</th>
                                </tr>
                              </thead>
                              <tbody>
                                {item.tableGroupData?.map((row, i) => (
                                  <tr key={i}>
                                    <td>{row.YearData}</td>
                                    <td>{row.ScopData}</td>
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
                </React.Fragment>
              ))}
          </div>
        );
    }
  };

  return (
    <section
      className={`research_patents_section ${data[0]?.items[0]?.extraClass}`}
    >
      {data && data.length > 0 ? (
        data.map((section, index) => renderSection(section, index))
      ) : (
        <div className="abt_cntnt" data-aos="fade-up">
          <p>There is no data!</p>
        </div>
      )}
    </section>
  );
}
