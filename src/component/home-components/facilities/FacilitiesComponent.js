"use client";
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./facilities.module.css";
import Link from "next/link";
import Image from "next/image";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { WEB_URL } from "@/config/config.mjs";

gsap.registerPlugin(ScrollTrigger);

export default function FacilitiesComponent({ data }) {
  const home41Ref = useRef(null);
  const home5Ref = useRef(null);
  const home6Ref = useRef(null);


  useEffect(() => {
    const root = home41Ref.current;
    const lastPanel = home5Ref.current?.lastElementChild;
    const panelsEl = home5Ref.current?.children;
    const home6 = home6Ref.current;

    if (!root || !lastPanel || !home6) return;

    // Pin the top banner
    ScrollTrigger.create({
      trigger: root,
      pin: true,
      pinSpacing: false,
      start: "top -10px",
      endTrigger: lastPanel,
      end: () => {
        const offset = window.innerHeight * 0.01;
        return `bottom-=${offset} bottom`;
      },
      scrub: false,
    });

    // Adjust sticky top dynamically
    function updateStickyTop() {
      const headerHeight = root.offsetHeight;
      const scrollOffset = -60; // matches "top -20px"
      const totalOffset = headerHeight + scrollOffset;

      Array.from(panelsEl).forEach((panel) => {
        panel.style.top = totalOffset + "px";
      });
    }

    updateStickyTop();
    window.addEventListener("resize", updateStickyTop);

    return () => window.removeEventListener("resize", updateStickyTop);
  }, []);

  const facilitiesData = data ? data : {};
  return (
    <>
      <div className="container">
        <div className={styles.mobileContainer}>
          <div className={styles.mobileCardsContainer}>
            <p className="text-center">LIFE @ JSS UNIVERSITY</p>
            {/* <div className="cards"> */}
            <div className={styles.cardSection}>
              {facilitiesData.facilities.map((card, index) => (
                <div key={index} className={styles.cardImageContainer}>
                  <Link href={WEB_URL + card?.main_link ?? "#"}>
                    <img
                      src={card.image}
                      alt={card.title}
                      style={{ width: "100%", objectFit: "cover" }}
                    />
                    <div className={styles.cardOverlay}></div>
                    <h3 className={styles.cardContent}>{card.title}</h3>
                  </Link>
                </div>
              ))}
              <div className={styles.showOnlyMobileCard}>
                <Link
                  href={`${WEB_URL}academic-facilities`}
                  className={styles.exploreAllLink}
                >
                  <div className={styles.lastCardContentSection}>
                    <p>Explore All</p>
                    <h2 className={`blue-text ${styles.counter_heading}`}>28+</h2>
                    <h5>acres of innovation, comfort, and opportunity</h5>
                  </div>
                  <div className={`py-0 ${styles.sectionHeader}`}>
                    <PiArrowCircleRightThin fontSize={20} color="#16344E" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className={styles.facilitiesContainer}>
          <div className={styles.headerContent}>
            <div>
              {/* <FiPlus className={styles.plusIcon} /> */}
              <Image
                src="/images/home-page/facili_plusIcon.svg"
                alt="image"
                width={42}
                height={42}
              />
              <span className={styles.straightLine}></span>
            </div>
            <div>
              <h5
              className={styles.sub_heading}
                dangerouslySetInnerHTML={{ __html: facilitiesData.subheading }}
              ></h5>
              <h2
              className={styles.heading}
                dangerouslySetInnerHTML={{ __html: facilitiesData.heading }}
              ></h2>
            </div>
          </div>
          <section className={`home-41 ${styles.sectionHeader}`} ref={home41Ref}>
            <article className="imageWrapper zero"></article>
          </section>

          {/* Panels */}
          <section className="home5" ref={home5Ref}>
            {facilitiesData.facilities.map((panel, index) => (
              <article
                key={index}
                className={`panel imageWrapper panel-${index + 1}`}
              >
                <figure className={styles.slideContainer}>
                  <Image
                    className="img-fluid image"
                    src={panel.image}
                    alt={`Panel ${index + 1}`}
                    style={{ width: "100%", objectFit: "cover" }}
                    loading="lazy"
                    width={1920}
                    height={654}
                  />
                  <div className={styles.verticalLine}>
                    <div className={styles.slideNumberBox}>
                      {index + 1 < 10 ? "0" + (index + 1) : index + 1}
                    </div>
                  </div>
                  <div className={styles.bannerContent}>
                    <div>
                      <h2>
                        {panel.title}
                        <Link href={WEB_URL + panel.main_link}>
                          <Image
                            src="/images/home-page/facilivisit.svg"
                            alt="image"
                            width={22}
                            height={22}
                          />
                        </Link>
                      </h2>
                      <p className={styles.facilityDescription}>
                        {panel.description}
                      </p>
                    </div>
                  </div>
                  <div className={styles.bannerLinks}>
                    {panel.links &&
                      panel.links.map((item, index) => (
                        <Link
                          key={index}
                          href={item.url}
                          className={styles.bannerLink}
                        >
                          {item.text}
                          <Image
                            src="/images/home-page/facili_arrow.svg"
                            alt="image"
                            width={5}
                            height={10}
                          />
                        </Link>
                      ))}
                  </div>
                </figure>
              </article>
            ))}
          </section>

          {/* Placeholder Section */}
          {/* <section className="home6" ref={home6Ref}>
            <figure></figure>
          </section> */}
          <style>{`
          * { margin: 0; padding: 0; box-sizing: border-box; }
          section.home2, section.home3, section.home-41, .home7 { margin-top: -.5rem; }
          .home5, .how-we-jam { width: 100%; padding: 0; margin: 0; }
          .panel figure { margin: 0; padding: 0; }
          .panel .image { width: 100%; height: 100%; object-fit: cover; display: block; }
          section.home8 { margin-top: -.5rem; }
          .home5 { position: relative; }
          section.home9 { background: #333333; }
          .zero { z-index: 2; top: -5rem; }
          section.home-41 { z-index: 1; }
          .panel { position: sticky; background: #fff; }
          .home8 figure img { display: block; }
        `}</style>
        </div>
    </>
  );
}
