"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import "./tabsContent.css";

const TabsContent = ({ item }) => {
  const [activeTab, setActiveTab] = useState(0);

  const activeData = item?.tabsGroup?.[activeTab];
  // 🔹 Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="tabs_content_section">
      <div className="container">
        {/* Tab Navigation */}
        <ul className="tabs_group">
          {item?.tabsGroup &&
            item.tabsGroup.map((tabItem, tabIdx) => (
              <li
                key={tabIdx}
                className={`tabs_item ${activeTab === tabIdx ? "active" : ""}`}
                onClick={() => setActiveTab(tabIdx)}
              >
                {tabItem.tabName}
              </li>
            ))}
        </ul>

        {/* Tab Content */}
        {activeData && (
          <div className="tabs_content">
            {activeData.title && (
              <h2 className="tabs_content_title">{activeData.title}</h2>
            )}
            {activeData.listGroup && activeData.listGroup.length > 0 && (
              <ul className="tabs_list">
                {activeData.listGroup.map((listItem, listIdx) => (
                  <li key={listIdx} className="tabs_list_item">
                    {listItem.list}
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TabsContent;
