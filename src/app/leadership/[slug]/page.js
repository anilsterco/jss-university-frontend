"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import { BASE_URL } from "@/config/config";

export default function LeadershipDetailsPage({ params }) {
  const unwrappedParams = React.use(params);
  const { slug } = unwrappedParams;
  const [leader, setLeader] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch(`${BASE_URL}leadership/${slug}`)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.status) {
          setLeader(resJson);
        } else {
          setLeader(null);
        }
      })
      .catch((err) => console.error("API fetch error:", err))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) {
    return (
      <main className="site_main text-center py-5">
        <p>Loading leader details...</p>
      </main>
    );
  }

  if (!leader) {
    return (
      <main className="site_main text-center py-5">
        <h2>Leader not found</h2>
        <Link href="/leadership" className="btn btn-primary mt-4">
          ← Back to Leadership
        </Link>
      </main>
    );
  }

  const { sections } = leader;

  return (
    <main className="site_main">
      {/* TITLE SECTION */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="innnr_head">
                <h2>ABOUT</h2>
                {/* <h3
                  dangerouslySetInnerHTML={{
                    __html: leader.leadership_name || "Leadership",
                  }}
                /> */}
                <ul>
                  <li>
                    <Link href="/about-jssmvp">About JSSMVP</Link>
                  </li>
                  <li>
                    <Link href="/heritage">Heritage</Link>
                  </li>
                  <li>
                    <Link href="/about">About JSS</Link>
                  </li>
                  <li className="active">
                    <Link href="/leadership">Leadership</Link>
                  </li>
                  <li>
                    <Link href="/organogram">Organogram</Link>
                  </li>
                  <li>
                    <Link href="/academic-council">Academic Council</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP IMAGE SECTION */}
      <section className="leadership_dtls_one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="top_img">
                <figure>
                  <Image
                    src={sections.banners.banner_image}
                    alt={sections.banners.name}
                    width={1200}
                    height={600}
                    className="img-fluid w-100"
                  />
                  <figcaption>
                    <div className="desgtn">
                      <h3>{sections.banners.name}</h3>
                      <h5>{sections.banners.designation}</h5>
                      <p>{sections.banners.short_description}</p>
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="leadership_two_cnt2">
                <h3>{sections.banners.name}</h3>
                <h5>{sections.banners.designation}</h5>
                <p>{sections.banners.short_description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / DESCRIPTION SECTION */}
      <section className="leadership_dtls_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <div className="leader_row">
                <div className="leader_col">
                  <div className="leadership_two_cnt">
                    <h5>{sections.about.description[0]}</h5>
                    <p>{sections.about.description[1]}</p>
                  </div>
                </div>
                {/* <div className="leader_col">
                  <div className="leadership_two_img">
                    <figure
                      style={{
                        position: "relative",
                        width: "608px",
                        height: "403px",
                      }}
                    >
                      <Image
                        src={sections.message_from_chancellor.message_image}
                        alt={sections.banners.name}
                        className="img-fluid"
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                    </figure>
                  </div>
                </div> */}
              </div>
            </div>
            {sections?.biography && (
              <div className="biographi_section">
                <h3>Biography</h3>
                <p>{sections.biography}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {sections.message_from_chancellor?.message?.length > 0 && (
        <section className="message_section">
          <div className="container">
            <div className="message_warpper">
              <figure>
                <Image
                  src={"/images/custom-page/about/quote.png"}
                  alt="Quote Icon"
                  width={148}
                  height={100}
                  style={{ height: "100%" }}
                  className="tesIcon"
                />
              </figure>
              <div className="row">
                <div className="col-lg-12">
                  <div className="message_text">
                    <h3>{sections.message_from_chancellor.designation}</h3>
                    {/* <h5>{sections.message_from_chancellor.designation}</h5> */}
                    {sections.message_from_chancellor.message.map(
                      (msg, index) => (
                        <p key={index}>{msg}</p>
                      ),
                    )}
                  </div>
                </div>
                {/* <div className="col-lg-6">
                <div className="message_img">
                  <figure>
                    {sections?.message_from_chancellor?.video ? (
                      <video
                        src={sections.message_from_chancellor.video}
                        controls
                        muted
                        playsInline
                        style={{
                          width: "100%",
                          height: "auto",
                        }}
                      />
                    ) : (
                      <Image
                        src={
                          sections?.message_from_chancellor?.message_image ||
                          "/images/custom-page/about/chancellor-message.png"
                        }
                        alt={
                          sections?.message_from_chancellor?.name ||
                          "Chancellor"
                        }
                        width={500}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                      />
                    )}
                  </figure>
                </div>
              </div> */}
              </div>
              <div className="message_footer_section">
                <h4>{sections.message_from_chancellor.name}</h4>
              </div>
            </div>
          </div>
        </section>

      )}

    </main>
  );
}
