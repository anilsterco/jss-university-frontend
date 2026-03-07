"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function EligibilityPrograms({ data }) {
  const [activeTab, setActiveTab] = useState("eligi_tab_01");

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  if (!data || data.length === 0) return null;

  const eligibilitySection = data.find((sec) => sec.type === "eligibilityData");
  const programsSection = data.find((sec) => sec.type === "programsDesc");
  const programs = programsSection?.items || [];

  const tabMapping = {
    eligi_tab_01: "Undergraduate Programs",
    eligi_tab_02: "Post graduate programs",
    eligi_tab_03: "Pharmacy Programs",
  };

  const apiTabNameMapping = {
    eligi_tab_01: "Under Graduate",
    eligi_tab_02: "Post graduate programs",
    eligi_tab_03: "Pharmacy Programs",
  };

  const getProgramsByTab = (tabId) => {
    const tabName = apiTabNameMapping[tabId];
    return programs
      .filter((p) => p.tabName === tabName)
      .sort((a, b) => a.position - b.position);
  };

  return (
    <section
      className={`eligibilty_main `}
      id={`${eligibilitySection?.items[0]?.sectionId}`}
    >
      <div className="container">
        <div className="eligib_grid_ad">
          <div className="eligib_cont">
            {eligibilitySection?.items[0]?.subheading && (
              <h5>{eligibilitySection.items[0].subheading}</h5>
            )}
            {eligibilitySection?.items[0]?.heading && (
              <h2
                dangerouslySetInnerHTML={{
                  __html: eligibilitySection.items[0].heading,
                }}
              />
            )}

            <div className="edigiblity_tabs">
              <nav className="growth-tabs">
                <ul>
                  {Object.entries(tabMapping).map(([tabId, tabLabel]) => (
                    <li key={tabId}>
                      <button
                        type="button"
                        className={activeTab === tabId ? "active" : ""}
                        onClick={() => setActiveTab(tabId)}
                      >
                        {tabLabel}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="eligi_tab_con">
                {Object.keys(tabMapping).map((tabId) => {
                  const tabPrograms = getProgramsByTab(tabId);
                  return (
                    <div
                      key={tabId}
                      id={tabId}
                      className={`growth-item ${activeTab === tabId ? "active" : ""}`}
                    >
                      {activeTab === tabId &&
                        tabPrograms.map((program, i) => (
                          <div key={i}>
                            {program.points[0].length >
                            (
                              <ul>
                                {program.points.map((point, idx) => (
                                  <li key={idx}>{point.text}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {eligibilitySection?.items[0]?.image && (
            <div className="eligib_imgsec">
              <figure className="shine-effect">
                <Image
                  src={eligibilitySection.items[0].image}
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
