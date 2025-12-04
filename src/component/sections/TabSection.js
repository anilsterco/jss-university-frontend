"use client";

import Link from "next/link";
import { useState } from "react";

export default function TabSection({ title, subtitle, tabs, slug }) {
  
  const [activeTab, setActiveTab] = useState(`/${slug}`);

  const onTabClick = (url) => {
    setActiveTab(url);
  };

  return (
    <section className="inner-title">
      <div className="container">
        <div className="innnr_head text-center">
          <h2>{subtitle}</h2>
          <h3 dangerouslySetInnerHTML={{ __html: title }}></h3>
          <ul>
            {tabs.map((tab, i) => (
              <Link href={tab.url}>
              <li
                key={i}
                className={tab.url === activeTab ? "active" : ""}
                onClick={() => onTabClick(tab.url)}
              >
                {tab.text}
              </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
