"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function FacilityOne({ data }) {
  const container = useRef();
  const [isSticky, setIsSticky] = useState(false);

  useGSAP(
    () => {
      if (!data || data.length === 0) return;
      gsap.registerPlugin(ScrollTrigger);

      const boxes = gsap.utils.toArray(".facilities-list-box");
      if (boxes.length === 0) return;

      // Pin the first box
      ScrollTrigger.create({
        trigger: boxes[0],
        start: "bottom bottom",
        end: () => "+=" + (boxes.length - 1) * 500,
        pin: true,
        pinSpacing: false,
      });

      boxes.forEach((box, i) => {
        if (i === 0) return;
        gsap.set(box, { zIndex: i + 1 });
        gsap.fromTo(
          box,
          { opacity: 1, y: 0 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            scrollTrigger: {
              trigger: box,
              start: "top bottom",
              end: "bottom bottom",
              scrub: true,
              pin: false,
              pinSpacing: false,
            },
          }
        );
      });
    },
    { dependencies: [data], scope: container }
  );

  // Find titleBanner section
  const titleBanner = data.find(section => section.type === "titleBanner");
  const percentSub = data.find(section => section.type === "percentSub");
  const boxes = data.find(section => section.type === "boxes");

  // If there's no titleBanner, render only percentSub and boxes
  if (!titleBanner) {
    return (
      <main className="site_main">
        <section className="facilities-sec1">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="facilities-img">
                  <div className={` ${isSticky ? "sticky-box" : ""}`}>
                    <div className="col-lg-10 mx-auto">
                      <div className="facilities-img-box sticky-box">
                        <div className="facilities-box">
                          {/* PercentSub Section */}
                          {percentSub && (
                            <div className="facilities-box-text">
                              {percentSub.items
                                .sort((a, b) => a.position - b.position)
                                .map((item, index) => (
                                  <div key={item.item_uuid || index}>
                                    <div className="facilities-heading">
                                      <h2>{item.percent}</h2>
                                    </div>
                                    <div className="facilities-titel">
                                      <h5>{item.subtitle}</h5>
                                    </div>
                                  </div>
                                ))}
                            </div>
                          )}
                          
                          {/* Boxes Section */}
                          {boxes && (
                            <div className="facilities-list" ref={container}>
                              {boxes.items
                                .sort((a, b) => a.position - b.position)
                                .map((item, index) => (
                                  <div key={item.item_uuid || index} className="facilities-list-box">
                                    <figure>
                                      <Image
                                        src={item.photo}
                                        alt={item.title}
                                        width={400}
                                        height={300}
                                        className="img-fluid w-100"
                                      />
                                      <figcaption>
                                        <div className="facilities-list-text">
                                          <Image
                                            src={item.icon}
                                            alt=""
                                            width={40}
                                            height={40}
                                            className="img-fluid"
                                          />
                                          <h4>{item.title}</h4>
                                          <p>{item.subtitle}</p>
                                        </div>
                                      </figcaption>
                                    </figure>
                                  </div>
                                ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Render with titleBanner (your desired structure)
  return (
    <main className="site_main">
      <section className="facilities-sec1">
        <div className="container">
          <div className="row">
            {/* Title Banner Section */}
            {titleBanner.items
              .sort((a, b) => a.position - b.position)
              .map((item, index) => (
                <div key={item.item_uuid || index}>
                  <div className="col-lg-12">
                    <div className="facilities-text">
                      <h6>{item.title}</h6>
                      <p>{item.subtitle}</p>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="facilities-img">
                      <div className={` ${isSticky ? "sticky-box" : ""}`}>
                        <figure>
                          <Image
                            src={item.file}
                            alt={item.title || "Facility"}
                            width={1200}
                            height={600}
                            className="img-fluid w-100"
                          />
                        </figure>
                      </div>

                      {/* Combined PercentSub and Boxes Section */}
                      {(percentSub || boxes) && (
                        <div className="col-lg-10 mx-auto">
                          <div className="facilities-img-box sticky-box">
                            <div className="facilities-box">
                              {/* PercentSub Section */}
                              {percentSub && (
                                <div className="facilities-box-text">
                                  {percentSub.items
                                    .sort((a, b) => a.position - b.position)
                                    .map((percentItem, idx) => (
                                      <div key={percentItem.item_uuid || idx}>
                                        <div className="facilities-heading">
                                          <h2>{percentItem.percent}</h2>
                                        </div>
                                        <div className="facilities-titel">
                                          <h5>{percentItem.subtitle}</h5>
                                        </div>
                                      </div>
                                    ))}
                                </div>
                              )}
                              
                              {/* Boxes Section */}
                              {boxes && (
                                <div className="facilities-list" ref={container}>
                                  {boxes.items
                                    .sort((a, b) => a.position - b.position)
                                    .map((boxItem, idx) => (
                                      <div key={boxItem.item_uuid || idx} className="facilities-list-box">
                                        <figure>
                                          <Image
                                            src={boxItem.photo}
                                            alt={boxItem.title}
                                            width={400}
                                            height={300}
                                            className="img-fluid w-100"
                                          />
                                          <figcaption>
                                            <div className="facilities-list-text">
                                              <Image
                                                src={boxItem.icon}
                                                alt=""
                                                width={40}
                                                height={40}
                                                className="img-fluid"
                                              />
                                              <h4>{boxItem.title}</h4>
                                              <p>{boxItem.subtitle}</p>
                                            </div>
                                          </figcaption>
                                        </figure>
                                      </div>
                                    ))}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}