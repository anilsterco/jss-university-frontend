"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import NewsEvents from "@/component/happening-components/news-events/NewsEvents";
import NoticeAnnouncement from "@/component/happening-components/notice-announcement/NoticeAnnouncement";
import { usePathname } from "next/navigation";
import { BASE_URL } from "@/config/config";
import Gallery from "@/component/happening-components/gallery/Gallery";
import MediaCoverage from "@/component/happening-components/media-coverage/MediaCoverage";
import NewsLetter from "@/component/happening-components/news-letter/NewsLetter";

const ALL_TABS = [
  { id: "news", label: "News & Events", component: NewsEvents },
  { id: "press", label: "Press Release", component: NoticeAnnouncement },
  { id: "gallery", label: "Gallery", component: Gallery },
  { id: "media", label: "Media Coverage", component: MediaCoverage },
  { id: "newsletter", label: "News Letter", component: NewsLetter },
];

const TAB_COUNT_MAP = {
  press: "press_release_count",
  gallery: "gallery_count",
  media: "media_coverage_count",
  newsletter: "newsletter",
};

export default function HappeningsClient({ className }) {
  const [activeTab, setActiveTab] = useState("news");
  const [programId, setProgramId] = useState(null);
  const [visibleTabs, setVisibleTabs] = useState([ALL_TABS[0]]);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();
  const isGlobalHappenings = pathname === "/happenings";
  const type = pathname.split("/")[1] === "schools" ? "school" : "department";
  const program = pathname.split("/")[2];

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        let countData;

        if (isGlobalHappenings) {
          // Global happenings page — no type/program, call count API directly
          const countRes = await fetch(`${BASE_URL}happening/count`);
          if (!countRes.ok) throw new Error(`Failed to fetch counts`);
          countData = await countRes.json();
        } else {
          // School/department page — fetch ID first, then counts
          const idRes = await fetch(`${BASE_URL}${type}/${program}`);
          if (!idRes.ok) throw new Error(`Failed to fetch ID`);
          const idData = await idRes.json();

          const id =
            type === "school" ? idData.school_id : idData.departments_id;
          setProgramId(id);

          const countRes = await fetch(
            `${BASE_URL}happening/count?${type}=${id}`,
          );
          if (!countRes.ok) throw new Error(`Failed to fetch counts`);
          countData = await countRes.json();
        }

        // Build visible tabs: always show "news", then add others based on count
        const tabs = ALL_TABS.filter((tab) => {
          if (tab.id === "news") return true; // always visible
          const countKey = TAB_COUNT_MAP[tab.id];
          return countKey && countData[countKey] > 0;
        });

        setVisibleTabs(tabs);

        // Reset activeTab if it's no longer visible
        const tabIds = tabs.map((t) => t.id);
        setActiveTab((prev) => (tabIds.includes(prev) ? prev : "news"));
      } catch (err) {
        console.error("HappeningsClient error:", err);
        setVisibleTabs([ALL_TABS[0]]);
        setActiveTab("news");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [isGlobalHappenings, type, program]);

  const ActiveTab = ALL_TABS.find((tab) => tab.id === activeTab);

  return (
    <div className={`${styles.happeningsContainer} ${styles[className]}`}>
      <p className={`${styles.happeningsSubTitle} text-center`}>HAPPENINGS</p>
      <h1 className={styles.happeningsTitle}>
        STAY UP-TO-DATE ON CAMPUS NEWS AND EVENTS
      </h1>

      <div className={styles.tabHeaders}>
        {loading ? (
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
        {!loading && ActiveTab && (
          <ActiveTab.component
            className={className}
            programId={programId}
            type={type}
          />
        )}
      </div>
    </div>
  );
}
