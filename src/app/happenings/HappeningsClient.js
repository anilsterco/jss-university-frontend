"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import NewsEvents from "@/component/happening-components/news-events/NewsEvents";
import Gallery from "@/component/happening-components/gallery/Gallery";
import MediaCoverage from "@/component/happening-components/media-coverage/MediaCoverage";
import NoticeAnnouncement from "@/component/happening-components/notice-announcement/NoticeAnnouncement";
import { usePathname } from "next/navigation";
import { BASE_URL } from "@/config/config";

export default function HappeningsClient({ className }) {
  const [activeTab, setActiveTab] = useState("news");
  const [programId, setProgramId] = useState(null);

  const pathname = usePathname();
  const type = pathname.split("/")[1] == "schools" ? "school" : "university";
  const program = pathname.split("/")[2];

  const tabs = [
    { id: "news", label: "News & Events", component: NewsEvents },
    // { id: "gallery", label: "Gallery", component: Gallery },
    // { id: "media", label: "Media Coverage", component: MediaCoverage },
    { id: "press", label: "Press Release", component: NoticeAnnouncement },
  ];

  const ActiveComponent = tabs.find((tab) => tab.id === activeTab)?.component;

  const getProgramId = async () => {
    const response = await fetch(`${BASE_URL}${type}/${program}`);

    if (!response.ok) {
      throw new Error(
        `Failed to fetch Id for ${type} (status ${response.status})`,
      );
    }

    const data = await response.json();
    setProgramId(data.school_id);
  };

  useEffect(() => {
    getProgramId();
  }, []);

  return (
    <div className={`${styles.happeningsContainer} ${styles[className]}`}>
      <p className={`${styles.happeningsSubTitle} text-center`}>HAPPENINGS</p>
      <h1 className={`${styles.happeningsTitle} `}>
        STAY UP-TO-DATE ON CAMPUS NEWS AND EVENTS
      </h1>

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

      <div className={styles.tabContent}>
        {ActiveComponent && (
          <ActiveComponent className={className} programId={programId} />
        )}
      </div>
    </div>
  );
}
