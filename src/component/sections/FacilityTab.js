"use client";

import { useState } from "react";
import Image from "next/image";

function FacilityTabsBlock({ tabs }) {
  const [activeTab, setActiveTab] = useState(0);
  const [activeAccordion, setActiveAccordion] = useState(0);

  if (!tabs || tabs.length === 0) return null;

  const handleTabClick = (tabIdx) => {
    setActiveTab(tabIdx);
    setActiveAccordion(0);
  };

  const toggleAccordion = (accIdx) => {
    setActiveAccordion((prev) => (prev === accIdx ? null : accIdx));
  };

  return (
    <div className="faci_diff_tabs">
      <nav className="growth-tabs">
        <ul>
          {tabs.map((tab, tabIdx) => (
            <li key={tabIdx}>
              <button
                type="button"
                className={activeTab === tabIdx ? "active" : ""}
                onClick={() => handleTabClick(tabIdx)}
              >
                {tab.tabname}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <div className="grow_tb_contsec">
        {tabs.map((tab, tabIdx) => (
          <div
            key={tabIdx}
            id={`faci_di_tab${tabIdx + 1}`}
            className={`growth-item ${activeTab === tabIdx ? "active" : ""}`}
          >
            <div className="fac_tab_con">
              {tab.image && (
                <div className="fac_dif_tbimg">
                  <figure className="shine-effect">
                    <Image
                      src={tab.image}
                      alt={tab.tabname}
                      width={800}
                      height={520}
                      loading="lazy"
                      className="img-fluid w-100"
                    />
                  </figure>
                </div>
              )}

              {tab.accordian?.length > 0 && (
                <div className="faci_accordion">
                  {tab.accordian.map((accordionItem, accIdx) => (
                    <div className="faci_acc_item" key={accIdx}>
                      <button
                        className={`faci_acc_header ${
                          activeAccordion === accIdx ? "active" : ""
                        }`}
                        onClick={() => toggleAccordion(accIdx)}
                      >
                        <span className="faci_acc_icon">
                          <figure className="shine-effect">
                            <Image
                              src={
                                activeAccordion === accIdx
                                  ? "/images/about-page/accodin_minus.svg"
                                  : "/images/about-page/accodin_plus.svg"
                              }
                              alt="Toggle"
                              width={18}
                              height={18}
                      loading="lazy"
                              className="img-fluid w-100"
                            />
                          </figure>
                        </span>
                        <span>{accordionItem.title}</span>
                      </button>

                      <div
                        className={`faci_acc_body ${
                          activeAccordion === accIdx ? "open" : ""
                        }`}
                      >
                        <p>{accordionItem.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function FacilityTab({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "facilitiesTab") return null;

        const items = [...(section.items || [])].sort(
          (a, b) => a.position - b.position
        );

        return (
          <section
            key={`facilities-tab-${sectionIndex}`}
            className="facilities_diffent"
          >
            <div className="container">
              {items.map((item, itemIdx) => (
                <div key={itemIdx}>
                  <div className="fac_diff_title">
                    <h5>{item.heading}</h5>
                    <p>{item.subheading}</p>
                  </div>

                  <FacilityTabsBlock tabs={item.tabs} />

                  <p className="fac_accbtm" data-aos="fade-up">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}