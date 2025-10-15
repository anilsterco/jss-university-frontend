"use client";
import styles from "./page.module.css";
import { useState } from "react";
import NewsEvents from "@/component/happening-components/news-events/NewsEvents";
import Gallery from "@/component/happening-components/gallery/Gallery";
import MediaCoverage from "@/component/happening-components/media-coverage/MediaCoverage";
import NoticeAnnouncement from "@/component/happening-components/notice-announcement/NoticeAnnouncement";
export default function Happenings() {
  const [activeTab, setActiveTab] = useState("news");
  const tabs = [
    { id: "news", label: "News & Events", component: <NewsEvents /> },
    { id: "gallery", label: "Gallery", component: <Gallery /> },
    { id: "media", label: "Media Coverage", component: <MediaCoverage /> },
    { id: "press", label: "Press Release", component: <NoticeAnnouncement /> },
  ];

  const activeComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  return (
    <div className={styles.happeningsContainer}>
      <p className={`${styles.happeningsSubTitle} text-center`}>HAPPENINGS</p>
      <h1 className={`${styles.happeningsTitle} `}>
        STAY UP-TO-DATE ON CAMPUS NEWS AND EVENTS
      </h1>
      <div></div>
      <div className={styles.tabHeaders}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${
              activeTab === tab.id ? styles.activeTab : ""
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>{activeComponent}</div>
    </div>
  );
}
