"use client"
import React, {useState } from "react";
export default function TabCustomTableMultiple({ data }) {
  const [activeTabs, setActiveTabs] = useState({});


  const handleTabClick = (sectionIndex, tabIndex) => {
    setActiveTabs((prev) => ({ ...prev, [sectionIndex]: tabIndex }));
  };

  return (
    <>
      {data?.map((section, sectionIndex) => {
        if (section.type !== "tabCustomTableMultiple") return null;
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

                  return (
                    <div
                      key={tabIndex}
                      className={`pdf_list_section tab_panel ${isActive ? "active" : ""}`}
                      style={{ display: isActive ? "block" : "none" }}
                    >
                      {tab?.tableGroup?.length > 0 && tab?.tableGroup.map((tabContent, tabContentIdx)=>(
                        <React.Fragment key={tabContentIdx}>
                          <div className="table_section">
                            {tabContent?.tableTitle && <h4 className="heading ">{tabContent.tableTitle}</h4>}
                            {tabContent?.tableData && (
                              <div dangerouslySetInnerHTML={{__html:tabContent.tableData}} />
                            )}
                            
                          </div>

                          {tabContent?.pdfGroup && (
                            <div
                              className="pdf_group"
                              dangerouslySetInnerHTML={{ __html: tabContent.pdfGroup }}
                            ></div>
                          )}
                        </React.Fragment>
                      ))}
                      
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
