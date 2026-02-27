"use client";

import Link from "next/link";
import { useState } from "react";

export default function TabSection({ title, subtitle, tabs, slug, pageType }) {
  const [activeTab, setActiveTab] = useState(tabs[0].category);

  const onTabClick = (url) => {
    setActiveTab(url);
  };

  return (
    <section className={`inner-title ${pageType == 'faculty' && 'faculty_tabs'}`}>
      <div className="container">
        <div className="innnr_head text-center">
          {subtitle && <h2>{subtitle}</h2>}
          {title && <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>}
          {tabs.length > 1 && (
            <ul>
              {tabs.map((tab, i) => (
                pageType == 'faculty' ? (
                  <button key={i} >
                    <li
                      key={i}
                      className={tab.category === activeTab ? "active" : ""}
                      onClick={() => onTabClick(tab.category)}
                    >
                      {tab.text || tab.category}
                    </li>
                  </button>
                ) : (
                  <Link key={i} href={tab.url}>
                    <li
                      key={i}
                      className={tab.url === activeTab ? "active" : ""}
                      onClick={() => onTabClick(tab.url)}
                    >
                      {tab.text || tab.category}
                    </li>
                  </Link>
                )

              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
