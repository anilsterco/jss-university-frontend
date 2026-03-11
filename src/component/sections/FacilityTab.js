"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityTab({ data }) {
  const [activeTab, setActiveTab] = useState("tab0");
  const [activeAccordion, setActiveAccordion] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
    setActiveAccordion(0); // Reset accordion to first item when tab changes
  };

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "facilitiesTab") return null;

        return (
          <section
            key={`facilities-tab-${sectionIndex}`}
            className="facilities_diffent"
            data-aos="fade-up"
          >
            <div className="container">
              {section.items
                ?.sort((a, b) => a.position - b.position)
                .map((item, itemIdx) => (
                  <div key={itemIdx}>
                    <div className="fac_diff_title" data-aos="fade-up">
                      <h5>{item.heading}</h5>
                      <p>{item.subheading}</p>
                    </div>

                    {item.tabs && item.tabs.length > 0 && (
                      <div className="faci_diff_tabs">
                        <nav className="growth-tabs">
                          <ul>
                            {item.tabs.map((tab, tabIdx) => (
                              <li key={tabIdx}>
                                <button
                                  type="button"
                                  className={activeTab === `tab${tabIdx}` ? "active" : ""}
                                  onClick={() => handleTabClick(`tab${tabIdx}`)}
                                >
                                  {tab.tabname}
                                </button>
                              </li>
                            ))}
                          </ul>
                        </nav>

                        <div className="grow_tb_contsec">
                          {item.tabs.map((tab, tabIdx) => (
                            <div
                              key={tabIdx}
                              id={`faci_di_tab${tabIdx + 1}`}
                              className={`growth-item ${activeTab === `tab${tabIdx}` ? "active" : ""}`}
                            >
                              <div className="fac_tab_con">
                                {tab.image && (
                                  <div
                                    className="fac_dif_tbimg"
                                    data-aos="fade-left"
                                    data-aos-delay="300"
                                  >
                                    <figure className="shine-effect">
                                      <Image
                                        src={tab.image}
                                        alt={tab.tabname}
                                        width={800}
                                        height={520}
                                        className="img-fluid w-100"
                                      />
                                    </figure>
                                  </div>
                                )}

                                {tab.accordian && tab.accordian.length > 0 && (
                                  <div
                                    className="faci_accordion"
                                    data-aos="fade-right"
                                    data-aos-delay="200"
                                  >
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
                    )}

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