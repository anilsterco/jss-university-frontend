"use client";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function TabsDataContent({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "tabsData") return null;

        return (
          <section key={`tabs-data-${sectionIndex}`} data-aos="fade-up">
            <div className="container">
              {section.items
                ?.sort((a, b) => a.position - b.position)
                .map((item, itemIdx) => {
                  if (!item.tabs || item.tabs.length === 0) return null;

                  return (
                    <div key={itemIdx}>
                      {/* Section heading */}


                      {/* Tab nav */}
                      <div className="patent_tab_main">
                        {/* {item.heading && (
                          <div data-aos="fade-up">
                            <h5 className="heading_title">{item.heading}</h5>
                          </div>
                        )} */}
                        <nav className="pate_tab_grp">
                          <ul className="pate_tab_ul">
                            {item.tabs.map((tab, tabIdx) => (
                              <li className="pate_tab_li" key={tabIdx}>
                                <span
                                  className={
                                    activeTab === tabIdx ? "active" : ""
                                  }
                                  onClick={() => setActiveTab(tabIdx)}
                                >
                                  {tab.tabname}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </nav>

                        {/* Tab panels */}
                        <div className="scu_tabs_content">
                          {item.tabs.map((tab, tabIdx) => (
                            <div
                              key={tabIdx}
                              className={`scu_tab_panel ${activeTab === tabIdx ? "active" : ""}`}
                            >
                              <div
                                className="scu_tab_inner"
                                dangerouslySetInnerHTML={{
                                  __html: tab.tabdata,
                                }}
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </section>
        );
      })}
    </>
  );
}
