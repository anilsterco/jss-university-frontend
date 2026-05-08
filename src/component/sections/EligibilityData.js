"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { WEB_URL } from "@/config/config";
import { Skeleton } from "../common/skeleton/Skeleton";

const MOBILE_BREAKPOINT = 768;

export default function EligibilityPrograms({ data }) {
  const [activeTab, setActiveTab] = useState(null);
  const [tabApiData, setTabApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const eligibilitySection = data?.find(
    (sec) => sec.type === "eligibilityData"
  );
  const eligibilityItem = eligibilitySection?.items[0];
  const tabs = eligibilityItem?.tabsGroup || [];

  useEffect(() => {
    if (tabs.length > 0) {
      setActiveTab(tabs[0].tabName);
      setOpenAccordion(tabs[0].tabName);
    }
  }, [eligibilityItem?.sectionId]);

  useEffect(() => {
    if (!activeTab) return;

    const activeTabData = tabs.find((tab) => tab.tabName === activeTab);
    const slug = activeTabData?.tab_slug;

    if (!slug) return;

    const fetchTabData = async () => {
      setLoading(true);
      setError(null);
      setTabApiData(null);

      try {
        const res = await fetch(
          `https://project-demo.in/jss/api/programs/section/${slug}`
        );
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        const json = await res.json();
        setTabApiData(json.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTabData();
  }, [activeTab]);

  if (!data || data.length === 0) return null;

  const activeTabData = tabs.find((tab) => tab.tabName === activeTab);

  const renderTabContent = (tabData) => (
    <div className="growth-item active">
      <div className="program_tabs">
        {loading && <Skeleton height="400px" className="transparent" />}
        {tabApiData &&
          tabApiData.degrees.map(
            (apiItem, apiIdx) =>
              apiItem.courses.length > 0 && (
                <div key={apiIdx} className="program_box">
                  {apiItem?.degree_name && (
                    <h6 className="degree_name">{apiItem.degree_name}</h6>
                  )}
                  {apiItem?.courses && apiItem.courses.length > 0 ? (
                    <ul className="courses">
                      {apiItem.courses.map((courseItem, courseIdx) => (
                        <li key={courseIdx} className="position-relative">
                          {courseItem.name}
                          <Link
                            className="links"
                            href={`${WEB_URL}programs/${courseItem.slug}`}
                          />
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="not_found">No Courses Found!</p>
                  )}
                  {apiItem?.eligibility && (
                    <h6 className="eligibility">{apiItem.eligibility}</h6>
                  )}
                </div>
              )
          )}
      </div>

      {tabData.tabTitle && <h3>{tabData.tabTitle}</h3>}

      {tabData.tabDesc?.length > 0 && (
        <div className="tab-desc">
          {tabData.tabDesc.map((item, idx) => (
            <p key={idx}>{item.desc}</p>
          ))}
        </div>
      )}

      {tabData.tabLists?.length > 0 ? (
        <ul>
          {tabData.tabLists.map((item, idx) => (
            <li key={idx}>{item.list}</li>
          ))}
        </ul>
      ) : tabData.tabHTML ? (
        <div dangerouslySetInnerHTML={{ __html: tabData.tabHTML }} />
      ) : null}
    </div>
  );

  return (
    <section className="eligibilty_main" id={eligibilityItem?.sectionId}>
      <div className="container">
        <div
          className={`eligib_grid_ad ${
            eligibilityItem?.type == "programs" ? "programs" : null
          }`}
        >
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

              {/* ── DESKTOP: Tab layout ── */}
              {!isMobile && (
                <>
                  <nav className="growth-tabs">
                    <ul>
                      {tabs.map((tab) => (
                        <li key={tab.tabName}>
                          <button
                            type="button"
                            className={
                              activeTab === tab.tabName ? "active" : ""
                            }
                            onClick={() => setActiveTab(tab.tabName)}
                          >
                            {tab.tabName}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  <div className="eligi_tab_con">
                    {activeTabData && renderTabContent(activeTabData)}
                  </div>
                </>
              )}

              {/* ── MOBILE: Accordion layout ── */}
              {/* ── MOBILE: Accordion layout ── */}
              {isMobile && (
                <div>
                  {tabs.map((tab) => (
                    <details
                      key={tab.tabName}
                      className="faqItem tabs_accordion"
                      open={openAccordion === tab.tabName}
                      onToggle={(e) => {
                        if (e.target.open) {
                          setOpenAccordion(tab.tabName);
                          setActiveTab(tab.tabName);

                          setTimeout(()=>{
                            e.target.scrollIntoView({behavior:"smooth", block:"start"})
                          }, 100)
                        } else if (openAccordion === tab.tabName) {
                          setOpenAccordion(null);
                        }
                      }}
                    >
                      <summary className="faqQuestion">
                        <span className="faq_heading">{tab.tabName}</span>
                        <span className="icon"></span>
                      </summary>
                      <div className="faqAnswer">
                        <div className="eligi_tab_con">
                          {renderTabContent(tab)}
                        </div>
                      </div>
                    </details>
                  ))}
                </div>
              )}

            </div>
          </div>

          {/* ── Eligibility Image ── */}
          {eligibilityItem?.type !== "programs" && eligibilityItem?.image && (
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