"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import { BASE_URL } from "@/config/config";

export default function LeadershipClient() {

  const pathname = usePathname();

  /* Leadership Data */
  const [managementLeaders, setManagementLeaders] = useState([]);
  const [otherLeaders, setOtherLeaders] = useState({});
  const [featuredLeader, setFeaturedLeader] = useState(null);

  /* Tabs */
  const [aboutPage, setAboutPage] = useState(null);

  /* Loading */
  const [loadingLeadership, setLoadingLeadership] = useState(true);
  const [loadingTabs, setLoadingTabs] = useState(true);


  /* Dummy Tabs */
  const dummyTabs = [
    { text: "Overview", url: "#" },
    { text: "Leadership", url: "#" },
    { text: "Governance", url: "#" },
  ];


  useEffect(() => {

    /* Tabs API */
    fetch(`${BASE_URL}pages/leadership`)
      .then((res) => res.json())
      .then((resJson) => {

        if (resJson.tabs) {
          setAboutPage(resJson.tabs);
        }

      })
      .catch((err) => console.error("Page API fetch error:", err))
      .finally(() => setLoadingTabs(false));


    /* Leadership API */
    fetch(`${BASE_URL}leadership`)
      .then((res) => res.json())
      .then((resJson) => {

        if (resJson.success && resJson.data) {

          const data = resJson.data;

          setFeaturedLeader(data.featured || null);
          setManagementLeaders(data.management || []);
          setOtherLeaders(data.others || {});

        }

      })
      .catch((err) => console.error("Leadership API fetch error:", err))
      .finally(() => setLoadingLeadership(false));

  }, []);


  return (
    <>

      {/* Inner Title */}
      <section className="inner-title">
        <div className="container">

          <div className="innnr_head text-center">

            <h2>{aboutPage?.subTitle || "ABOUT"}</h2>

            <h3
              dangerouslySetInnerHTML={{
                __html: aboutPage?.title || "SRI SUTTUR MATH THE <span>1000-YEAR LEGACY<span>"
              }}
            />

            <ul>

              {(loadingTabs ? dummyTabs : aboutPage?.tabs || []).map((tab, i) => (

                <li
                  key={i}
                  className={pathname === tab.url ? "active" : ""}
                >
                  <Link href={tab.url || "#"}>{tab.text}</Link>
                </li>

              ))}

            </ul>

          </div>

        </div>
      </section>


      {/* Leadership Loader */}
      {loadingLeadership && (
        <div className="text-center p-10 leadership_loader">
          <p>Loading Leadership Data...</p>
        </div>
      )}


      {/* No Data */}
      {!loadingLeadership && !featuredLeader && (
        <div className="text-center p-10">
          <p>No Leadership Data Found</p>
        </div>
      )}


      {/* Leadership Content */}
      {!loadingLeadership && featuredLeader && (
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
                      />

                    </div>

                  </figcaption>

                  <Link
                    href={`/leadership/${featuredLeader.slug}`}
                    className="links"
                  ></Link>

                </figure>

              </div>

            </div>

          </section>


          {/* Management Leaders */}
          {managementLeaders.length > 0 && (

            <section className="leadership_two">

              <div className="container">

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

                            <Image
                              src="/images/icons/leder-arrow.svg"
                              alt="arrow"
                              width={20}
                              height={20}
                            />

                          </figcaption>

                        </figure>

                        <Link
                          href={`/leadership/${leader.slug}`}
                          className="links"
                        ></Link>

                      </div>

                    );

                  })}

                </div>

              </div>

            </section>

          )}


          {/* Other Leaders */}
          {Object.entries(otherLeaders).map(
            ([categoryName, categoryLeaders]) => {

              if (!categoryLeaders || categoryLeaders.length === 0)
                return null;

              return (

                <section
                  key={categoryName}
                  className="leadership_two pt-0"
                >

                  <div className="container">

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

                              <Image
                                src="/images/icons/leder-arrow.svg"
                                alt="arrow"
                                width={20}
                                height={20}
                              />

                            </figcaption>

                          </figure>

                          <Link
                            href={`/leadership/${leader.slug}`}
                            className="links"
                          ></Link>

                        </div>

                      ))}

                    </div>

                  </div>

                </section>

              );

            }
          )}

        </>
      )}

    </>
  );
}