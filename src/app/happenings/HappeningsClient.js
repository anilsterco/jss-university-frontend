"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import NewsEvents from "@/component/happening-components/news-events/NewsEvents";
import NoticeAnnouncement from "@/component/happening-components/notice-announcement/NoticeAnnouncement";
import { usePathname } from "next/navigation";
import { BASE_URL } from "@/config/config";

const ALL_TABS = [
  { id: "news", label: "News & Events", component: NewsEvents },
  { id: "press", label: "Press Release", component: NoticeAnnouncement },
];

export default function HappeningsClient({ className }) {
  const [activeTab, setActiveTab] = useState(null);
  const [programId, setProgramId] = useState(null);
  const [visibleTabs, setVisibleTabs] = useState(ALL_TABS); // start with all, hide empties later

  const pathname = usePathname();
  const type = pathname.split("/")[1] == "schools" ? "school" : "department";
  const program = pathname.split("/")[2];

  const ActiveComponent = ALL_TABS.find(
    (tab) => tab.id === activeTab,
  )?.component;

  const getProgramId = async () => {
    const response = await fetch(`${BASE_URL}${type}/${program}`);
    if (!response.ok)
      throw new Error(
        `Failed to fetch Id for ${type} (status ${response.status})`,
      );
    const data = await response.json();
    setProgramId(type === "school" ? data.school_id : data.departments_id);
  };

  useEffect(() => {
    getProgramId();
  }, []);

  // Called by each tab component when it knows if it has data
  const handleTabDataStatus = (tabId, hasData) => {
    setVisibleTabs((prev) => {
      const updated = ALL_TABS.filter((tab) => {
        if (tab.id === tabId) return hasData;
        const existing = prev.find((t) => t.id === tab.id);
        return existing !== undefined;
      });
      return updated;
    });
  };

  // Set first visible tab as active once tabs are resolved
  useEffect(() => {
    if (visibleTabs.length > 0 && !activeTab) {
      setActiveTab(visibleTabs[0].id);
    }
    // If active tab got hidden, switch to first visible
    if (activeTab && !visibleTabs.find((t) => t.id === activeTab)) {
      setActiveTab(visibleTabs[0]?.id || null);
    }
  }, [visibleTabs]);

  return (
    <div className={`${styles.happeningsContainer} ${styles[className]}`}>
      <p className={`${styles.happeningsSubTitle} text-center`}>HAPPENINGS</p>
      <h1 className={styles.happeningsTitle}>
        STAY UP-TO-DATE ON CAMPUS NEWS AND EVENTS
      </h1>

      <div className={styles.tabHeaders}>
        {visibleTabs.map((tab) => (
          <button
            key={tab.id}
            className={`${styles.tabButton} ${activeTab === tab.id ? styles.activeTab : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className={styles.tabContent}>
        {/* Render all tab components but hide inactive ones */}
        {ALL_TABS.map((tab) => (
          <div
            key={tab.id}
            style={{ display: activeTab === tab.id ? "block" : "none" }}
          >
            <tab.component
              className={className}
              programId={programId}
              type={type}
              onDataStatus={(hasData) => handleTabDataStatus(tab.id, hasData)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
