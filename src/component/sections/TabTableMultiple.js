"use client";

import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function TabTableMultiple({ data }) {
  const [activeTabs, setActiveTabs] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const handleTabClick = (sectionIndex, tabIndex) => {
    setActiveTabs((prev) => ({ ...prev, [sectionIndex]: tabIndex }));
  };

  return (
    <>
      {data?.map((section, sectionIndex) => {
        if (section.type !== "tabTableMultiple") return null;
        if (!section.items?.length) return null;

        const item = section.items[0];
        const tabs = item?.tab || [];
        const activeTabIndex = activeTabs[sectionIndex] ?? 0;

        return (
          <div
            key={sectionIndex}
            className={`tab_table_multiple_section ${item?.sectionType || ""}`}
            data-aos="fade-up"
          >
            <div className="container">
              <div className="grand_tabs_main">
                <nav className="growth-tabs">
                  <ul>
                    {tabs.length > 0 && (
                      <div className="tab_nav_wrapper">
                        {tabs.map((tab, tabIndex) => (
                          <li>
                            <button
                              key={tabIndex}
                              className={`tab_nav_btn ${activeTabIndex === tabIndex ? "active" : ""}`}
                              onClick={() =>
                                handleTabClick(sectionIndex, tabIndex)
                              }
                            >
                              {tab.tabName ||
                                tab.tabname ||
                                `Tab ${tabIndex + 1}`}
                            </button>
                          </li>
                        ))}
                      </div>
                    )}
                  </ul>
                </nav>

                {/* ── Tab Content Panels ── */}
                {tabs.map((tab, tabIndex) => {
                  const isActive = activeTabIndex === tabIndex;

                  const tableTitle = tab.tableTitle || tab.tabletitle || null;
                  const tableHead = tab.tableHead || tab.tablehead || [];
                  const tableDataOne =
                    tab.tableDataOne || tab.tabledataone || [];

                  const tableTitleTwo =
                    tab.tableTitleTwo || tab.tabletitletwo || null;
                  const tableHeadTwo =
                    tab.tableHeadTwo || tab.tableheadtwo || [];
                  const tableDataTwo =
                    tab.TableDataTwo || tab["Table Data Two"] || [];

                  return (
                    <div
                      key={tabIndex}
                      className={`tab_panel ${isActive ? "active" : ""}`}
                      style={{ display: isActive ? "block" : "none" }}
                    >
                      {/* ── Table One ── */}
                      {tableTitle && tableDataOne?.length > 0 && (
                        <div className="table_section">
                          <h4 className="heading ">{tableTitle}</h4>
                          <div className="table_responsive">
                            <table className="grand_proj_table">
                              {tableHead?.length > 0 && (
                                <thead>
                                  <tr>
                                    {tableHead.map((col, colIdx) => (
                                      <th key={colIdx}>{col.name}</th>
                                    ))}
                                  </tr>
                                </thead>
                              )}
                              <tbody
                                dangerouslySetInnerHTML={{
                                  __html: tableDataOne
                                    .map((r) => r.data)
                                    .join(""),
                                }}
                              />
                            </table>
                          </div>
                        </div>
                      )}

                      {/* ── Table Two ── */}
                      {tableTitleTwo && tableDataTwo?.length > 0 && (
                        <div className="table_section">
                          <h4 className="heading">{tableTitleTwo}</h4>
                          <div className="table_responsive">
                            <table className="grand_proj_table">
                              {tableHeadTwo?.length > 0 && (
                                <thead>
                                  <tr>
                                    {tableHeadTwo.map((col, colIdx) => (
                                      <th key={colIdx}>{col.name}</th>
                                    ))}
                                  </tr>
                                </thead>
                              )}
                              <tbody
                                dangerouslySetInnerHTML={{
                                  __html: tableDataTwo
                                    .map((r) => r.data)
                                    .join(""),
                                }}
                              />
                            </table>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
