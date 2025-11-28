"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function LeadershipClient() {
  const [activeTab, setActiveTab] = useState("/leadership");
  const [leaders, setLeaders] = useState([]);
  const [topLeader, setTopLeader] = useState(null);
  const [loading, setLoading] = useState(true);

  const aboutPage = {
    title: "SRI SUTTUR MATH THE <span>1000-YEAR LEGACY</span>",
    subTitle: "ABOUT",
    tabs: [
      { text: "About JSS", url: "/about-us" },
      { text: "About JSSMVP", url: "/about-jssmvp" },
      { text: "Leadership", url: "/leadership" },
    ],
  };

  

  // ================= API CALL =================
  useEffect(() => {
    setLoading(true);
    fetch("https://project-demo.in/jss/api/leadership")
      .then((res) => res.json())
      .then((resJson) => {
        console.log("API Response:", resJson);
        if (Array.isArray(resJson) && resJson.length > 0) {
          setTopLeader(resJson[0]);
          setLeaders(resJson.slice(1));
        }
        else if (resJson.data && Array.isArray(resJson.data)) {
          setTopLeader(resJson.data[0]);
          setLeaders(resJson.data.slice(1));
        }
      })
      .catch((err) => console.error("API fetch error:", err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="text-center p-10">
        <p>Loading Leadership Data...</p>
      </div>
    );
  }

  if (!topLeader) {
    return (
      <div className="text-center p-10">
        <p>No Leadership Data Found</p>
      </div>
    );
  }
   const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* INNER TITLE SECTION */}
      <section className="inner-title">
        <div className="container">
          <div className="innnr_head text-center">
            <h2>{aboutPage.subTitle}</h2>
            <h3 dangerouslySetInnerHTML={{ __html: aboutPage.title }}></h3>
            <ul>
              {aboutPage.tabs.map((tab, i) => (
                <li
                  key={i}
                  className={tab.url === activeTab ? "active" : ""}
                  onClick={() => handleTabClick(tab.url)}
                  style={{ cursor: "pointer" }}
                >
                  <Link href={tab.url}>{tab.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* TOP LEADER SECTION */}
      <section className="leadership_one">
        <div className="container">
          <div className="top_img">
            <figure>
              <Image
                src={topLeader.image}
                alt={topLeader.name}
                width={1200}
                height={600}
                className="img-fluid w-100"
              />
              <figcaption>
                <h3>
                  {topLeader.name}
                  <span>{topLeader.subtitle || ""}</span>
                </h3>
                <p>{topLeader.designation}</p>
              </figcaption>
              <Link href={`/leadership/${topLeader.slug}`} className="links"></Link>
            </figure>
          </div>
        </div>
      </section>

      {/* GRID SECTION */}
      <section className="leadership_two">
        <div className="container">
          <div className="leadership_grid">
            {leaders.map((leader) => (
              <div key={leader.id} className="leadership_grid_Bx">
                <figure>
                  <span>
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      width={400}
                      height={400}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </span>
                  <figcaption>
                    <h3>{leader.name}</h3>
                    <p>{leader.designation}</p>
                  </figcaption>
                </figure>
                <Link href={`/leadership/${leader.slug}`} className="links"></Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
