"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import { BASE_URL } from "@/config/config";

export default function LeadershipClient() {
  const [managementLeaders, setManagementLeaders] = useState([]);
  const [otherLeaders, setOtherLeaders] = useState({});
  const [featuredLeader, setFeaturedLeader] = useState(null);
  const [loading, setLoading] = useState(true);
  const [aboutPage, setAboutPage] = useState(null);

  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const fetchPageData = fetch(`${BASE_URL}pages/academic-council`)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.tabs) {
          setAboutPage(resJson.tabs);
        }
      })
      .catch((err) => console.error("Page API fetch error:", err));

    const fetchLeadershipData = fetch(`${BASE_URL}academic-council`)
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
      {/* Inner Title & Tabs */}
      {aboutPage && (
        <section className="inner-title">
          <div className="container">
            <div className="innnr_head text-center">
              <h2>{aboutPage.subTitle}</h2>
              <h3 dangerouslySetInnerHTML={{ __html: aboutPage.title }}></h3>
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
      )}

      {loading && (
        <div className="text-center p-10">
          <p>Loading Leadership Data...</p>
        </div>
      )}

      {!loading && !featuredLeader && (
        <div className="text-center p-10">
          <p>No Leadership Data Found</p>
        </div>
      )}

      {!loading && featuredLeader && (
        <>
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
                      {/* <Image
                        src={"/images/icons/circularArrow.svg"}
                        alt="arrow"
                        width={20}
                        height={20}
                        className="arrow-icon"
                      /> */}
                    </div>
                  </figcaption>
                  {/* <Link
                    href={`/leadership/${featuredLeader.slug}`}
                    className="links"
                  ></Link> */}
                </figure>
              </div>
            </div>
          </section>

          {managementLeaders.length > 0 && (
            <section className="leadership_two">
              <div className="container">
                <div className="leader-category-block">
                  <div className="leadership_grid">
                    {managementLeaders.map((leader) => {
                      if (featuredLeader && leader.id === featuredLeader.id)
                        return null;

                      return (
                        <div key={leader.id} className="leadership_grid_Bx">
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
                              {/* <Image
                                src={"/images/icons/leder-arrow.svg"}
                                alt="arrow"
                                width={20}
                                height={20}
                                className="arrow-icon"
                              /> */}
                            </figcaption>
                          </figure>
                          {/* <Link
                            href={`/leadership/${leader.slug}`}
                            className="links"
                          ></Link> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </section>
          )}

          <div className="fee_strcu_table">
            <div className="fee_table_wrapper">
              <table className="fee_table">
                <thead>
                  <tr>
                    <th>Sr. No</th>
                     <th>Name</th>
                      <th>Designation</th>
                    {/* {section.items[0].tableHeadings.map((th, thIndex) => (
                      <th key={thIndex}>{th.tableHeading}</th>
                    ))} */}
                  </tr>
                </thead>
                <tbody>

                  {console.log(otherLeaders)
                  }
                  {/* {otherLeaders.map((leader) => (
                    <tr key={leader.id}>
                      <td>{itemIdx + 1}</td>
                     <td>{leader.name}</td>
                     <td>{leader.designation}</td>
                    </tr>
                  ))} */}
                </tbody>
              </table>
            </div>
          </div>
          {Object.entries(otherLeaders).map(
            ([categoryName, categoryLeaders]) => {
              if (!categoryLeaders || categoryLeaders.length === 0) return null;
              return (
                <section key={categoryName} className="leadership_two">
                  <div className="container">
                    <div className="leader-category-block">
                      <h2 className="leader-category-title">
                        {categoryName.charAt(0).toUpperCase() +
                          categoryName.slice(1)}
                      </h2>
                      <div className="leadership_grid">
                        {categoryLeaders.map((leader) => (
                          <div key={leader.id} className="leadership_grid_Bx">
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
                                {/* <Image
                                  src={"/images/icons/leder-arrow.svg"}
                                  alt="arrow"
                                  width={20}
                                  height={20}
                                  className="arrow-icon"
                                /> */}
                              </figcaption>
                            </figure>
                            {/* <Link
                              href={`/leadership/${leader.slug}`}
                              className="links"
                            ></Link> */}
                          </div>
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
