"use client";

import Link from "next/link";
import { useState } from "react";

export default function TitleSection({ title, subtitle, tabs, slug }) {
  console.log(slug);
  
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
              <li
                key={i}
                className={tab.url === activeTab ? "active" : ""}
                onClick={() => onTabClick(tab.url)}
              >
                <Link href={tab.url}>{tab.text}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
