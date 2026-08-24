"use client";

import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;

export default function GrantsReceived1({ data = [] }) {
  const [activeTabMap, setActiveTabMap] = useState({});
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

  // ACTIVE TAB
  const getActiveTab = (sectionIndex, fallbackTitle) => {
    return activeTabMap[sectionIndex] ?? fallbackTitle;
  };

  const handleTabClick = (sectionIndex, tabTitle) => {
    setActiveTabMap((prev) => ({
      ...prev,
      [sectionIndex]: tabTitle,
    }));
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
              {/* ================= DESKTOP TABS ================= */}
              {!isMobile && (
                <>
                  {/* TAB NAV */}
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

                  {/* TAB CONTENT */}
                  <div className="grand_tabs_content">
                    {tabs.map((tab, tabIndex) => (
                      <div
                        key={tabIndex}
                        className={`grand_tab_panel ${
                          activeTab === tab.title ? "active" : ""
                        }`}
                      >
                        <div
                          dangerouslySetInnerHTML={{
                            __html: tab?.Data,
                          }}
                        ></div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {/* ================= MOBILE ACCORDION ================= */}
              {isMobile && (
                <div className="mobile_accordion_main">
                  {tabs.map((tab, tabIndex) => {
                    const isOpen = openAccordion === tabIndex;

                    return (
                      <details
                        key={tabIndex}
                        className="faqItem tabs_accordion"
                        open={isOpen}
                        onToggle={(e) => {
                          if (e.target.open) {
                            setOpenAccordion(tabIndex);
                          } else if (openAccordion === tabIndex) {
                            setOpenAccordion(null);
                          }
                        }}
                      >
                        {/* ACCORDION TITLE */}
                        <summary className="faqQuestion">
                          <span className="faq_heading">{tab.title}</span>

                          <span className="icon"></span>
                        </summary>

                        {/* ACCORDION CONTENT */}
                        <div className="faqAnswer">
                          <div
                            dangerouslySetInnerHTML={{
                              __html: tab?.Data,
                            }}
                          ></div>
                        </div>
                      </details>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </section>
      );
    });
  };

  return <>{data.map((section, index) => renderSection(section, index))}</>;
}
