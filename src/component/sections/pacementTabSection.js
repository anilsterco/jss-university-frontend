"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

export default function PacementTabSection({ data }) {
  const [activeGrowthTab, setActiveGrowthTab] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  useEffect(() => {
    const section = data?.find(
      (sec) => sec.type === "pacementTabSection"
    );
    if (section?.items?.length) {
      setActiveGrowthTab(`growthTab${section.items[0].position}`);
    }
  }, [data]);

  const handleGrowthTabClick = (tabId) => {
    setActiveGrowthTab(tabId);
  };

  const renderSection = (section, index) => {
    if (section.type !== "pacementTabSection") return null;
    const items =
      section.items?.sort(
        (a, b) => Number(a.position) - Number(b.position)
      ) || [];

    return (
      <section className="about_two tabs_group_section" key={index}>
        <div className="container">
          <div className="abou_t_sec">
            <h5 className="about_subtitle">{items[0].heading}</h5>
            {items?.length > 1 && (
               <nav className="growth-tabs">
                  <ul>
                    {items.map((item, idx) => (
                      <li key={idx}>
                        <button
                          type="button"
                          className={
                            activeGrowthTab === `growthTab${item.position}`
                              ? "active"
                              : ""
                          }
                          onClick={() =>
                            handleGrowthTabClick(
                              `growthTab${item.position}`
                            )
                          }
                        >
                          {item.tab_name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
           

            <div className={`grow_tb_contsec ${items?.length < 2 ? 'pt-0' : ''}`}>
              {items.map((item) => (
                <div
                  key={item.item_uuid}
                  id={`growthTab${item.position}`}
                  className={`growth-item ${activeGrowthTab === `growthTab${item.position}`
                      ? "active"
                      : ""
                    }`}
                >
                  <div className="growth-content">
                    <div className="growth-list place_logos">
                      {item.images && item.images.length > 0 ? (
                        <div className="early-grid" data-aos="fade-up">
                          {item.images.map((img, i) => (
                            <figure key={i}>
                              <Image
                                src={img.image || "/images/about-page/adobe_logo.png"}
                                alt={item.tab_name}
                                width={180}
                                height={100}
                                className="img-fluid"
                              />
                              {img.title && (
                                <h5 className="name">{img.title}</h5>
                              )}
                            </figure>
                          ))}
                        </div>
                      ) : (
                        <div className="early-grid" data-aos="fade-up">
                          <p>No slider content available</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <>
      {data?.map((section, index) =>
        renderSection(section, index)
      )}
    </>
  );
}
