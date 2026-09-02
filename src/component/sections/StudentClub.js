"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const MOBILE_BREAKPOINT = 768;

export default function StudentClub({ data }) {
  const [scuActiveTab, setScuActiveTab] = useState("tab0");
  const [activeTabData, setActiveTabData] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  // MOBILE ACCORDION
  const [isMobile, setIsMobile] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(0);

  // MOBILE CHECK
  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    };

    check();

    window.addEventListener("resize", check);

    return () => window.removeEventListener("resize", check);
  }, []);

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
                        {/* TITLE */}
                        <div className="stu_clubs_title" data-aos="fade-up">
                          <h5 className="heading_title">{item.title}</h5>
                          <p>{item.subtitle}</p>
                        </div>

                        {/* ================= DESKTOP TABS ================= */}
                        {!isMobile &&
                          item.tabs &&
                          item.tabs.length > 0 && (
                            <div className="scu_tabs_main">
                              {/* TAB BUTTONS */}
                              <nav className="scu_tabs_nav">
                                <ul className="scu_tabs_ul">
                                  {item.tabs.map((tab, tabIdx) => (
                                    <li
                                      className="scu_tabs_li"
                                      key={tabIdx}
                                    >
                                      <button
                                        type="button"
                                        className={
                                          scuActiveTab === `tab${tabIdx}`
                                            ? "active"
                                            : ""
                                        }
                                        onClick={() =>
                                          handleScuTabChange(
                                            `tab${tabIdx}`,
                                            tab
                                          )
                                        }
                                      >
                                        {tab.tabname}
                                      </button>
                                    </li>
                                  ))}
                                </ul>
                              </nav>

                              {/* TAB CONTENT */}
                              <div className="scu_tabs_content">
                                {item.tabs.map((tab, tabIdx) => (
                                  <div
                                    key={tabIdx}
                                    className={`scu_tab_panel ${
                                      scuActiveTab === `tab${tabIdx}`
                                        ? "active"
                                        : ""
                                    }`}
                                  >
                                    <div className="scu_tab_inner">
                                      <div className="scu_gridmain">
                                        {/* IMAGE */}
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
                                                loading="lazy"
                                              />
                                            </figure>
                                          </div>
                                        )}

                                        {/* CONTENT */}
                                        <div
                                          className="scu_content"
                                          data-aos="fade-left"
                                          data-aos-delay="300"
                                        >
                                          {tab.sidetitle && (
                                            <h4>{tab.sidetitle}</h4>
                                          )}

                                          {tab.sidedesc && (
                                            <p>
                                              {isExpanded
                                                ? tab.sidedesc
                                                : tab.sidedesc.substring(
                                                    0,
                                                    300
                                                  ) + "..."}

                                              {tab.sidedesc.length >
                                                100 && (
                                                <span
                                                  onClick={() =>
                                                    setIsExpanded(
                                                      !isExpanded
                                                    )
                                                  }
                                                  style={{
                                                    color: "#018ce8",
                                                    fontWeight: "bold",
                                                    cursor: "pointer",
                                                    marginLeft: "5px",
                                                  }}
                                                >
                                                  {isExpanded
                                                    ? "Read Less"
                                                    : "Read More"}
                                                </span>
                                              )}
                                            </p>
                                          )}

                                          {tab.objective &&
                                            tab.objective.length >
                                              0 && (
                                              <>
                                                <h6>Objective</h6>

                                                <ul>
                                                  {tab.objective.map(
                                                    (
                                                      obj,
                                                      objIdx
                                                    ) => (
                                                      <li
                                                        key={
                                                          objIdx
                                                        }
                                                      >
                                                        {
                                                          obj.list
                                                        }
                                                      </li>
                                                    )
                                                  )}
                                                </ul>
                                              </>
                                            )}
                                        </div>
                                      </div>
                                    </div>

                                    {/* BOTTOM DESC */}
                                    {tab?.bottomDesc && (
                                      <div className="bottom_desc">
                                        <p>
                                          {tab.bottomDesc}
                                        </p>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                        {/* ================= MOBILE ACCORDION ================= */}
                        {isMobile &&
                          item.tabs &&
                          item.tabs.length > 0 && (
                            <div className="mobile_accordion_main">
                              {item.tabs.map((tab, tabIdx) => {
                                const isOpen =
                                  openAccordion === tabIdx;

                                return (
                                  <details
                                    key={tabIdx}
                                    className="faqItem tabs_accordion"
                                    open={isOpen}
                                    onToggle={(e) => {
                                      if (e.target.open) {
                                        setOpenAccordion(
                                          tabIdx
                                        );
                                      } else if (
                                        openAccordion ===
                                        tabIdx
                                      ) {
                                        setOpenAccordion(
                                          null
                                        );
                                      }
                                    }}
                                  >
                                    {/* ACCORDION TITLE */}
                                    <summary className="faqQuestion">
                                      <span className="faq_heading">
                                        {tab.tabname}
                                      </span>

                                      <span className="icon"></span>
                                    </summary>

                                    {/* ACCORDION CONTENT */}
                                    <div className="faqAnswer">
                                      <div className="scu_tab_inner">
                                        <div className="scu_gridmain">
                                          {/* IMAGE */}
                                          {tab.image && (
                                            <div className="scu_imgsec">
                                              <figure className="shine-effect">
                                                <Image
                                                  src={
                                                    tab.image
                                                  }
                                                  alt={
                                                    tab.tabname
                                                  }
                                                  width={800}
                                                  height={520}
                                                  className="img-fluid"
                                                  loading="lazy"
                                                />
                                              </figure>
                                            </div>
                                          )}

                                          {/* CONTENT */}
                                          <div className="scu_content">
                                            {tab.sidetitle && (
                                              <h4>
                                                {
                                                  tab.sidetitle
                                                }
                                              </h4>
                                            )}

                                            {tab.sidedesc && (
                                              <p>
                                                {
                                                  tab.sidedesc
                                                }
                                              </p>
                                            )}

                                            {tab.objective &&
                                              tab.objective
                                                .length >
                                                0 && (
                                                <>
                                                  <h6>
                                                    Objective
                                                  </h6>

                                                  <ul>
                                                    {tab.objective.map(
                                                      (
                                                        obj,
                                                        objIdx
                                                      ) => (
                                                        <li
                                                          key={
                                                            objIdx
                                                          }
                                                        >
                                                          {
                                                            obj.list
                                                          }
                                                        </li>
                                                      )
                                                    )}
                                                  </ul>
                                                </>
                                              )}
                                          </div>
                                        </div>
                                      </div>

                                      {/* BOTTOM DESC */}
                                      {tab?.bottomDesc && (
                                        <div className="bottom_desc">
                                          <p>
                                            {
                                              tab.bottomDesc
                                            }
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  </details>
                                );
                              })}
                            </div>
                          )}

                        {/* ================= BENEFITS ================= */}
                        {activeTabData &&
                          activeTabData.benifits &&
                          activeTabData.benifits.length >
                            0 &&
                          !isMobile && (
                            <div
                              className="scu_benfits"
                              data-aos="fade-up"
                            >
                              <h5>Benefits</h5>

                              <div className="scu_benift_grid">
                                {activeTabData.benifits.map(
                                  (benefit, benIdx) => (
                                    <div
                                      className="scu_benifit_col"
                                      key={benIdx}
                                    >
                                      <p>
                                        {benefit.list}
                                      </p>
                                    </div>
                                  )
                                )}
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