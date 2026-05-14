"use client";

import { useState } from "react";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function GrantsReceived1({ data = [] }) {
  const [activeTabMap, setActiveTabMap] = useState({});

  const getActiveTab = (sectionIndex, fallbackTitle) => {
    return activeTabMap[sectionIndex] ?? fallbackTitle;
  };

  const handleTabClick = (sectionIndex, tabTitle) => {
    setActiveTabMap((prev) => ({ ...prev, [sectionIndex]: tabTitle }));
  };

  const renderSection = (section, sectionIndex) => {
    if (section.type !== "tab_with_custom_data") return null;

    return section.items?.map((item, itemIndex) => {
      const tabs = item.tabs || [];
      const activeTab = getActiveTab(
        `${sectionIndex}-${itemIndex}`,
        tabs[0]?.title,
      );

      return (
        <section
          className="grans_tab_mainsec"
          key={`${sectionIndex}-${itemIndex}`}
        >
          <div className="container">
            <div className="grand_tabs_main faci_diff_tabs">
              {/* Tab Nav */}
              <nav className="growth-tabs">
                <ul>
                  {tabs.map((tab, tabIndex) => (
                    <li key={tabIndex}>
                      <button
                        className={activeTab === tab.title ? "active" : ""}
                        onClick={() =>
                          handleTabClick(
                            `${sectionIndex}-${itemIndex}`,
                            tab.title,
                          )
                        }
                      >
                        {tab.title}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Tab Panels */}
              <div className="grand_tabs_content">
                {tabs.map((tab, tabIndex) => (
                  <div
                    key={tabIndex}
                    className={`grand_tab_panel ${activeTab === tab.title ? "active" : ""}`}
                  >
                    <div dangerouslySetInnerHTML={{__html:tab?.Data}}></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      );
    });
  };

  return <>{data.map((section, index) => renderSection(section, index))}</>;
}
