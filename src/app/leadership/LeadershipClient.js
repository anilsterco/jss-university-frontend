"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import { BASE_URL } from "@/config/config.mjs";

// ── Shimmer base style ─────────────────────────────────────────
const shimmer = {
  background: "linear-gradient(90deg, #e0e0e0 25%, #f0f0f0 50%, #e0e0e0 75%)",
  backgroundSize: "200% 100%",
  animation: "shimmer 1.5s infinite",
  borderRadius: "4px",
};

export default function LeadershipClient() {
  const [managementLeaders, setManagementLeaders] = useState([]);
  const [otherLeaders, setOtherLeaders] = useState({});
  const [featuredLeader, setFeaturedLeader] = useState(null);
  const [loading, setLoading] = useState(true);
  const [aboutPage, setAboutPage] = useState(null);

  const pathname = usePathname();

  const currentSlug = pathname.split("/").filter(Boolean).pop();

  const pageName = currentSlug.replace(/-/g, ' ');
  const titleCase = pageName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

  useEffect(() => {
    setLoading(true);

    const fetchPageData = fetch(`${BASE_URL}pages/leadership`)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.tabs) setAboutPage(resJson.tabs);
      })
      .catch((err) => console.error("Page API fetch error:", err));

    const fetchLeadershipData = fetch(`${BASE_URL}leadership`)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.success && resJson.data) {
          const data = resJson.data;
          setFeaturedLeader(data.featured || null);
          setManagementLeaders(data.management || []);
          setOtherLeaders(data.others || {});
        }
      })
      .catch((err) => console.error("Leadership API fetch error:", err));

    Promise.all([fetchPageData, fetchLeadershipData]).finally(() =>
      setLoading(false),
    );
  }, []);

  return (
    <>
      <style>{`
        @keyframes shimmer {
          0%   { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* ── Inner Title & Tabs ── */}
      {loading ? (
        // Skeleton for header/tabs section
        <section className="inner-title">
          <div className="container">
            <div className="innnr_head text-center">
              {/* Subtitle */}
              <div
                style={{
                  ...shimmer,
                  height: "16px",
                  width: "120px",
                  margin: "0 auto 12px",
                }}
              />
              {/* Title */}
              <div
                style={{
                  ...shimmer,
                  height: "28px",
                  width: "280px",
                  margin: "0 auto 20px",
                }}
              />
              {/* Tabs */}
              <ul
                style={{
                  display: "flex",
                  justifyContent: "center",
                  gap: "16px",
                  padding: 0,
                  listStyle: "none",
                  margin: 0,
                }}
              >
                {[100, 90, 110, 95, 85].map((width, i) => (
                  <li
                    key={i}
                    style={{
                      ...shimmer,
                      height: "14px",
                      width: `${width}px`,
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                ))}
              </ul>
            </div>
          </div>
        </section>
      ) : (
        aboutPage && (
          <section className="inner-title">
            <div className="container">
              <div className="innnr_head text-center">
                <h2>{aboutPage.subTitle}</h2>
                <h3 dangerouslySetInnerHTML={{ __html: aboutPage.title }} />
                <ul>
                  {aboutPage.tabs.map((tab, i) => (
                    <li
                      key={i}
                      className={pathname === tab.url ? "active" : ""}
                      style={{ cursor: "pointer" }}
                    >
                      <Link href={tab.url}>{tab.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        )
      )}

      {/* ── Leadership Content ── */}
      {loading ? (
        // Skeleton for leadership content
        <div className="container" style={{ padding: "40px 0" }}>
          {/* Featured leader skeleton */}
          <div
            style={{
              ...shimmer,
              height: "480px",
              width: "100%",
              marginBottom: "40px",
            }}
          />

          {/* Management grid skeleton */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "24px",
            }}
          >
            {Array(6)
              .fill(null)
              .map((_, i) => (
                <div key={i} style={{ animationDelay: `${i * 0.1}s` }}>
                  <div
                    style={{
                      ...shimmer,
                      height: "260px",
                      width: "100%",
                      marginBottom: "12px",
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                  <div
                    style={{
                      ...shimmer,
                      height: "16px",
                      width: "70%",
                      marginBottom: "8px",
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                  <div
                    style={{
                      ...shimmer,
                      height: "14px",
                      width: "50%",
                      animationDelay: `${i * 0.1}s`,
                    }}
                  />
                </div>
              ))}
          </div>
        </div>
      ) : !featuredLeader ? (
        <div className="text-center p-10">
          <p>No Leadership Data Found</p>
        </div>
      ) : (
        <>
          {/* Featured Leader */}
          <section className="leadership_one">
            <div className="container">
              <div className="top_img">
                <figure>
                  <Image
                    src={featuredLeader.image}
                    alt={featuredLeader.name}
                    width={1200}
                    height={600}
                    className="img-fluid w-100"
                  />
                  <figcaption>
                    <h3>
                      {featuredLeader.name}
                      <span>{featuredLeader.subtitle || ""}</span>
                    </h3>
                    <div className="d-flex gap-3">
                      <p>{featuredLeader.designation}</p>
                      <Image
                        src="/images/icons/circularArrow.svg"
                        alt="arrow"
                        width={20}
                        height={20}
                        className="arrow-icon"
                      />
                    </div>
                  </figcaption>
                  <Link
                    href={`/leadership/${featuredLeader.slug}`}
                    className="links"
                    aria-label={`View leadership: ${featuredLeader.name}`}
                  />
                </figure>
              </div>
            </div>
          </section>

          {/* Management Leaders */}
          {managementLeaders.length > 0 && (
            <section className="leadership_two">
              <div className="container">
                <div className="leader-category-block">
                  <div className="leadership_grid">
                    {managementLeaders.map((leader) => {
                      if (featuredLeader && leader.id === featuredLeader.id)
                        return null;
                      return <LeaderCard key={leader.id} leader={leader} />;
                    })}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Other Leaders */}
          {Object.entries(otherLeaders).map(
            ([categoryName, categoryLeaders]) => {
              if (!categoryLeaders?.length) return null;
              return (
                <section key={categoryName} className="leadership_two pt-0">
                  <div className="container">
                    <div className="leader-category-block">
                      <h2 className="leader-category-title">
                        {categoryName.charAt(0).toUpperCase() +
                          categoryName.slice(1)}
                      </h2>
                      <div className="leadership_grid">
                        {categoryLeaders.map((leader) => (
                          <LeaderCard key={leader.id} leader={leader} />
                        ))}
                      </div>
                    </div>
                  </div>
                </section>
              );
            },
          )}
        </>
      )}
    </>
  );
}

// ── Reusable Leader Card ───────────────────────────────────────
function LeaderCard({ leader }) {
  return (
    <div className="leadership_grid_Bx">
      <figure>
        <span>
          <Image
            src={leader.image}
            alt={leader.name}
            width={400}
            height={400}
          />
        </span>
        <figcaption>
          <h3>{leader.name}</h3>
          <p>{leader.designation}</p>
          <Image
            src="/images/icons/leder-arrow.svg"
            alt="arrow"
            width={20}
            height={20}
            className="arrow-icon"
          />
        </figcaption>
      </figure>
      <Link href={`/leadership/${leader.slug}`} className="links" aria-label={`View leadership: ${leader.name}`} />
    </div>
  );
}
