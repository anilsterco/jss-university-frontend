"use client";

import React, { useState } from "react";

export default function TabTableMultiple({ data }) {
  const [activeTabs, setActiveTabs] = useState({});

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
                          <li key={tabIndex}>
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

                  const tableTitleThree =
                    tab.tableTitleThree || tab.tabletitlethree || null;
                  const tableHeadThree =
                    tab.tableHeadThree || tab.tableheadthree || [];
                  const tableDataThree =
                    tab.TableDataThree || tab["Table Data Three"] || [];

                  const tableTitleFour =
                    tab.tableTitleFour || tab.tabletitlefour || null;
                  const tableHeadFour =
                    tab.tableHeadFour || tab.tableheadfour || [];
                  const tableDataFour =
                    tab.TableDataFour || tab["Table Data Four"] || [];

                  const tableTitleFive =
                    tab.tableTitleFive || tab.tabletitlefive || null;
                  const tableHeadFive =
                    tab.tableHeadFive || tab.tableheadfive || [];
                  const tableDataFive =
                    tab.TableDataFive || tab["Table Data Five"] || [];

                  const tableTitleSix =
                    tab.tableTitleSix || tab.tabletitlesix || null;
                  const tableHeadSix =
                    tab.tableHeadSix || tab.tableheadsix || [];
                  const tableDataSix =
                    tab.TableDataSix || tab["Table Data Six"] || [];

                  const tableTitleSeven =
                    tab.tableTitleSeven || tab.tabletitleseven || null;
                  const tableHeadSeven =
                    tab.tableHeadSeven || tab.tableheadseven || [];
                  const tableDataSeven =
                    tab.TableDataSeven || tab["Table Data Seven"] || [];

                  return (
                    <div
                      key={tabIndex}
                      className={`pdf_list_section tab_panel ${isActive ? "active" : ""}`}
                      style={{ display: isActive ? "block" : "none" }}
                    >
                      {/* ── Table One ── */}
                      {tableTitle && tableDataOne?.length > 0 && (
                        <div className="table_section">
                          <h4 className="heading ">{tableTitle}</h4>
                          <div className="table-responsive">
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

                      {tab?.pdfGroup1 && (
                        <div
                          className="pdf_group pdf_group_1"
                          dangerouslySetInnerHTML={{ __html: tab.pdfGroup1 }}
                        ></div>
                      )}

                      {/* ── Table Two ── */}
                      {tableTitleTwo && tableDataTwo?.length > 0 && (
                        <div className="table_section">
                          <h4 className="heading">{tableTitleTwo}</h4>
                          <div className="table-responsive">
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

                      {tab?.pdfGroup2 && (
                        <div
                          className="pdf_group pdf_group_2"
                          dangerouslySetInnerHTML={{ __html: tab.pdfGroup2 }}
                        ></div>
                      )}

                      {/* ── Table Three ── */}
                      {tableTitleThree && tableDataThree?.length > 0 && (
                        <div className="table_section">
                          <h4 className="heading">{tableTitleThree}</h4>
                          <div className="table-responsive">
                            <table className="grand_proj_table">
                              {tableHeadThree?.length > 0 && (
                                <thead>
                                  <tr>
                                    {tableHeadThree.map((col, colIdx) => (
                                      <th key={colIdx}>{col.name}</th>
                                    ))}
                                  </tr>
                                </thead>
                              )}
                              <tbody
                                dangerouslySetInnerHTML={{
                                  __html: tableDataThree
                                    .map((r) => r.data)
                                    .join(""),
                                }}
                              />
                            </table>
                          </div>
                        </div>
                      )}

                      {tab?.pdfGroup3 && (
                        <div
                          className="pdf_group pdf_group_3"
                          dangerouslySetInnerHTML={{ __html: tab.pdfGroup3 }}
                        ></div>
                      )}

                      {/* ── Table Four ── */}
                      {tableTitleFour && tableDataFour?.length > 0 && (
                        <div className="table_section">
                          <h4 className="heading">{tableTitleFour}</h4>
                          <div className="table-responsive">
                            <table className="grand_proj_table">
                              {tableHeadFour?.length > 0 && (
                                <thead>
                                  <tr>
                                    {tableHeadFour.map((col, colIdx) => (
                                      <th key={colIdx}>{col.name}</th>
                                    ))}
                                  </tr>
                                </thead>
                              )}
                              <tbody
                                dangerouslySetInnerHTML={{
                                  __html: tableDataFour
                                    .map((r) => r.data)
                                    .join(""),
                                }}
                              />
                            </table>
                          </div>
                        </div>
                      )}

                      {tab?.pdfGroup4 && (
                        <div
                          className="pdf_group pdf_group_4"
                          dangerouslySetInnerHTML={{ __html: tab.pdfGroup4 }}
                        ></div>
                      )}

                      {/* ── Table Five ── */}
                      {tableTitleFive && tableDataFive?.length > 0 && (
                        <div className="table_section">
                          <h4 className="heading">{tableTitleFive}</h4>
                          <div className="table-responsive">
                            <table className="grand_proj_table">
                              {tableHeadFive?.length > 0 && (
                                <thead>
                                  <tr>
                                    {tableHeadFive.map((col, colIdx) => (
                                      <th key={colIdx}>{col.name}</th>
                                    ))}
                                  </tr>
                                </thead>
                              )}
                              <tbody
                                dangerouslySetInnerHTML={{
                                  __html: tableDataFive
                                    .map((r) => r.data)
                                    .join(""),
                                }}
                              />
                            </table>
                          </div>
                        </div>
                      )}

                      {tab?.pdfGroup5 && (
                        <div
                          className="pdf_group pdf_group_5"
                          dangerouslySetInnerHTML={{ __html: tab.pdfGroup5 }}
                        ></div>
                      )}

                      {/* ── Table Six ── */}
                      {tableTitleSix && tableDataSix?.length > 0 && (
                        <div className="table_section">
                          <h4 className="heading">{tableTitleSix}</h4>
                          <div className="table-responsive">
                            <table className="grand_proj_table">
                              {tableHeadSix?.length > 0 && (
                                <thead>
                                  <tr>
                                    {tableHeadSix.map((col, colIdx) => (
                                      <th key={colIdx}>{col.name}</th>
                                    ))}
                                  </tr>
                                </thead>
                              )}
                              <tbody
                                dangerouslySetInnerHTML={{
                                  __html: tableDataSix
                                    .map((r) => r.data)
                                    .join(""),
                                }}
                              />
                            </table>
                          </div>
                        </div>
                      )}

                      {tab?.pdfGroup6 && (
                        <div
                          className="pdf_group pdf_group_6"
                          dangerouslySetInnerHTML={{ __html: tab.pdfGroup6 }}
                        ></div>
                      )}

                      {/* ── Table Seven ── */}
                      {tableTitleSeven && tableDataSeven?.length > 0 && (
                        <div className="table_section">
                          <h4 className="heading">{tableTitleSeven}</h4>
                          <div className="table-responsive">
                            <table className="grand_proj_table">
                              {tableHeadSeven?.length > 0 && (
                                <thead>
                                  <tr>
                                    {tableHeadSeven.map((col, colIdx) => (
                                      <th key={colIdx}>{col.name}</th>
                                    ))}
                                  </tr>
                                </thead>
                              )}
                              <tbody
                                dangerouslySetInnerHTML={{
                                  __html: tableDataSeven
                                    .map((r) => r.data)
                                    .join(""),
                                }}
                              />
                            </table>
                          </div>
                        </div>
                      )}

                      {tab?.pdfGroup7 && (
                        <div
                          className="pdf_group pdf_group_7"
                          dangerouslySetInnerHTML={{ __html: tab.pdfGroup7 }}
                        ></div>
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
