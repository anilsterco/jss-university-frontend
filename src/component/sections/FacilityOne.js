"use client";

import { useRef } from "react";
import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function FacilitiesOne({ data }) {
  const container = useRef();

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

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "titleBanner":
        return section.items
          .sort((a, b) => a.position - b.position)
          .map((item, index) => (
            <div className="row" key={item.item_uuid || index}>
              <div className="col-lg-12">
                <div className="facilities-text">
                  <h6>{item.title}</h6>
                  <p>{item.subtitle}</p>
                </div>
              </div>

              <div className="col-lg-12">
                <div className="facilities-img">
                  <div className="sticky-box">
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
                </div>
              </div>
            </div>
          ));

      case "percentSub":
        return (
          <div className="col-lg-10 mx-auto" key={`percent-${sectionIndex}`}>
            <div className="facilities-img-box sticky-box">
              <div className="facilities-box">
                {section.items
                  .sort((a, b) => a.position - b.position)
                  .map((item, index) => (
                    <div className="facilities-box-text" key={item.item_uuid || index}>
                      <div className="facilities-heading">
                        <h2>{item.percent}</h2>
                      </div>
                      <div className="facilities-titel">
                        <h5>{item.subtitle}</h5>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        );

      case "boxes":
        return (
          <div className="col-lg-10 mx-auto" key={`boxes-${sectionIndex}`}>
            <div className="facilities-img-box sticky-box">
              <div className="facilities-box">
                <div className="facilities-list">
                  <div ref={container}>
                    {section.items
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
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <main className="site_main">
      <section className="facilities-sec1">
        <div className="container">
          {data.map((section, index) => renderSection(section, index))}

          {data.length === 0 && (
            <div className="facilities-text">
              <h6>Facilities</h6>
              <p>No facilities data available.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}