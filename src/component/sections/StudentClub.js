"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function StudentClub({ data }) {
  const [scuActiveTab, setScuActiveTab] = useState("tab0");
  const [activeTabData, setActiveTabData] = useState(null);

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

  const handleScuTabChange = (tabId, tabData) => {
    setScuActiveTab(tabId);
    setActiveTabData(tabData);
  };

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "studentClub") return null;

        return (
          <section
            key={`student-club-${sectionIndex}`}
            className="student_clubsmain"
            data-aos="fade-up"
            id="student-clubs"
          >
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  {section.items
                    ?.sort((a, b) => a.position - b.position)
                    .map((item, itemIdx) => (
                      <div key={itemIdx}>
                        <div className="stu_clubs_title" data-aos="fade-up">
                          <h5 className="heading_title">{item.title}</h5>
                          <p>{item.subtitle}</p>
                        </div>

                        {item.tabs && item.tabs.length > 0 && (
                          <div className="scu_tabs_main">
                            <nav className="scu_tabs_nav">
                              <ul className="scu_tabs_ul">
                                {item.tabs.map((tab, tabIdx) => (
                                  <li className="scu_tabs_li" key={tabIdx}>
                                    <button
                                      type="button"
                                      className={scuActiveTab === `tab${tabIdx}` ? "active" : ""}
                                      onClick={() => handleScuTabChange(`tab${tabIdx}`, tab)}
                                    >
                                      {tab.tabname}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </nav>

                            {/* -------- CONTENT -------- */}
                            <div className="scu_tabs_content">
                              {item.tabs.map((tab, tabIdx) => (
                                <div
                                  key={tabIdx}
                                  className={`scu_tab_panel ${scuActiveTab === `tab${tabIdx}` ? "active" : ""}`}
                                >
                                  <div className="scu_tab_inner">
                                    <div className="scu_gridmain">
                                      {tab.image && (
                                        <div
                                          className="scu_imgsec"
                                          data-aos="fade-right"
                                          data-aos-delay="200"
                                        >
                                          <figure className="shine-effect">
                                            <Image
                                              src={tab.image}
                                              alt={tab.tabname}
                                              width={800}
                                              height={520}
                                              className="img-fluid"
                                            />
                                          </figure>
                                        </div>
                                      )}

                                      <div
                                        className="scu_content"
                                        data-aos="fade-left"
                                        data-aos-delay="300"
                                      >
                                        {tab.sidetitle && <h4>{tab.sidetitle}</h4>}
                                        {tab.sidedesc && <p>{tab.sidedesc}</p>}
                                        
                                        {tab.objective && tab.objective.length > 0 && (
                                          <>
                                            <h6>Objective</h6>
                                            <ul>
                                              {tab.objective.map((obj, objIdx) => (
                                                <li key={objIdx}>{obj.list}</li>
                                              ))}
                                            </ul>
                                          </>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Benefits Section - Now shows benefits of active tab */}
                        {activeTabData && activeTabData.benifits && activeTabData.benifits.length > 0 && (
                          <div className="scu_benfits" data-aos="fade-up">
                            <h5>Benefits</h5>
                            <div className="scu_benift_grid">
                              {activeTabData.benifits.map((benefit, benIdx) => (
                                <div className="scu_benifit_col" key={benIdx}>
                                  <p>{benefit.list}</p>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}