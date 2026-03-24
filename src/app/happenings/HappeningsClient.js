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
  const [activeTab, setActiveTab] = useState("news");
  const [programId, setProgramId] = useState(null);
  const [visibleTabs, setVisibleTabs] = useState([ALL_TABS[0]]);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const type = pathname.split("/")[1] === "schools" ? "school" : "department";
  const program = pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        // Step 1: Get school/department ID
        const idRes = await fetch(`${BASE_URL}${type}/${program}`);
        if (!idRes.ok) throw new Error(`Failed to fetch ID`);
        const idData = await idRes.json();

        const id = type === "school" ? idData.school_id : idData.departments_id;
        setProgramId(id);

        // Step 2: Get happening counts using that ID
        const countRes = await fetch(
          `${BASE_URL}happening/count?${type}=${id}`,
        );
        if (!countRes.ok) throw new Error(`Failed to fetch counts`);
        const countData = await countRes.json();

        // Step 3: Show press tab only if press_release_count > 0
        if (countData.press_release_count > 0) {
          setVisibleTabs(ALL_TABS);
        } else {
          setVisibleTabs([ALL_TABS[0]]);
        }
      } catch (err) {
        console.error("HappeningsClient error:", err);
        setVisibleTabs([ALL_TABS[0]]);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, program]);

  return (
    <div className={`${styles.happeningsContainer} ${styles[className]}`}>
      <p className={`${styles.happeningsSubTitle} text-center`}>HAPPENINGS</p>
      <h1 className={styles.happeningsTitle}>
        STAY UP-TO-DATE ON CAMPUS NEWS AND EVENTS
      </h1>

      <div className={styles.tabHeaders}>
        {loading ? (
          // Show only news tab as placeholder while loading
          <button className={`${styles.tabButton} ${styles.activeTab}`}>
            News & Events
          </button>
        ) : (
          visibleTabs.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tabButton} ${
                activeTab === tab.id ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))
        )}
      </div>

      <div className={styles.tabContent}>
        {ALL_TABS.map((tab) => (
          <div
            key={tab.id}
            style={{ display: activeTab === tab.id ? "block" : "none" }}
          >
            <tab.component
              className={className}
              programId={programId}
              type={type}
              onDataStatus={() => {}}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
