"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EligibilityPrograms({ data }) {
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  if (!data || data.length === 0) return null;

  const eligibilitySection = data.find((sec) => sec.type === "eligibilityData");
  const eligibilityItem = eligibilitySection?.items[0];
  const tabs = eligibilityItem?.tabsGroup || [];

  // Set initial active tab to first tab's name on first render
  if (activeTab === null && tabs.length > 0) {
    setActiveTab(tabs[0].tabName);
  }

  const activeTabData = tabs.find((tab) => tab.tabName === activeTab);

  return (
    <section className="eligibilty_main" id={eligibilityItem?.sectionId}>
      <div className="container">
        <div className="eligib_grid_ad">
          <div className="eligib_cont">
            {eligibilityItem?.subheading && (
              <h5>{eligibilityItem.subheading}</h5>
            )}
            {eligibilityItem?.heading && (
              <h2
                dangerouslySetInnerHTML={{ __html: eligibilityItem.heading }}
              />
            )}

            <div className="edigiblity_tabs">
              {/* — Dynamic Tab Nav — */}
              <nav className="growth-tabs">
                <ul>
                  {tabs.map((tab) => (
                    <li key={tab.tabName}>
                      <button
                        type="button"
                        className={activeTab === tab.tabName ? "active" : ""}
                        onClick={() => setActiveTab(tab.tabName)}
                      >
                        {tab.tabName}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* — Dynamic Tab Content — */}
              <div className="eligi_tab_con">
                {activeTabData && (
                  <div className="growth-item active">
                    {/* Tab title */}
                    {activeTabData.tabTitle && (
                      <h3>{activeTabData.tabTitle}</h3>
                    )}

                    {/* Tab descriptions */}
                    {activeTabData.tabDesc?.length > 0 && (
                      <div className="tab-desc">
                        {activeTabData.tabDesc.map((item, idx) => (
                          <p key={idx}>{item.desc}</p>
                        ))}
                      </div>
                    )}

                    {/* Tab list items */}
                    {activeTabData.tabLists?.length > 0 && (
                      <ul>
                        {activeTabData.tabLists.map((item, idx) => (
                          <li key={idx}>{item.list}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* — Eligibility Image — */}
          {eligibilityItem?.image && (
            <div className="eligib_imgsec">
              <figure className="shine-effect">
                <Image
                  src={eligibilityItem.image}
                  alt="Eligibility"
                  width={1390}
                  height={550}
                  className="img-fluid w-100"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
              </figure>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
