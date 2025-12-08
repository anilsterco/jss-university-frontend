"use client";
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./facilities.module.css";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { BsArrowRightCircle } from "react-icons/bs";
import { FiPlus } from "react-icons/fi";
import { PiArrowCircleRightThin } from "react-icons/pi";

gsap.registerPlugin(ScrollTrigger);

export default function FacilitiesComponent({ data }) {
  const home41Ref = useRef(null);
  const home5Ref = useRef(null);
  const home6Ref = useRef(null);

  const dummyFacilitiesData = {
    subheading: "FACILITIES @ JSS UNIVERSITY",
    heading:
      '<span class="dark-blue-text ">INFRA THAT </span> <span class="blue-text">ELEVATES</span>',
    facilities: [
      {
        id: 1,
        title: "CLASSROOM",
        description:
          "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
        image: "/images/home-page/fourth-section-first-banner.png",
        links: [
          {
            url: "/",
            text: "SMART CLASSROOM1",
          },
          {
            url: "/",
            text: "VIRTUAL CLASSROOM1",
          },
          {
            url: "/",
            text: "LECTURE HALL1",
          },
        ],
      },
      {
        id: 2,
        title: "ACADEMICS LABS",
        description:
          "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
        image: "/images/home-page/fourth-section-second-banner.png",
        links: [
          {
            url: "/",
            text: "SMART CLASSROOM2",
          },
          {
            url: "/",
            text: "VIRTUAL CLASSROOM2",
          },
          {
            url: "/",
            text: "LECTURE HALL2",
          },
        ],
      },
      {
        id: 3,
        title: "CAMPUS",
        description:
          "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
        image: "/images/home-page/fourth-section-third-banner.png",
        links: [
          {
            url: "/",
            text: "SMART CLASSROOM3",
          },
          {
            url: "/",
            text: "VIRTUAL CLASSROOM3",
          },
          {
            url: "/",
            text: "LECTURE HALL3",
          },
        ],
      },
      {
        id: 4,
        title: "SPORTS AND HEALTH",
        description:
          "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
        image: "/images/home-page/fourth-section-fourth-banner.png",
        links: [
          {
            url: "/",
            text: "SMART CLASSROOM4",
          },
          {
            url: "/",
            text: "VIRTUAL CLASSROOM4",
          },
          {
            url: "/",
            text: "LECTURE HALL4",
          },
        ],
      },
      {
        id: 5,
        title: "HOSTEL & CANTEEN",
        description:
          "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
        image: "/images/home-page/fourth-section-second-banner.png",
        links: [
          {
            url: "/",
            text: "SMART CLASSROOM2",
          },
          {
            url: "/",
            text: "VIRTUAL CLASSROOM2",
          },
          {
            url: "/",
            text: "LECTURE HALL2",
          },
        ],
      },
    ],
  };

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

  const facilitiesData = data ? data : dummyFacilitiesData;
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
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: "100%", objectFit: "cover" }}
                  />
                  <div className={styles.cardOverlay}></div>
                  <h3 className={styles.cardContent}>{card.title}</h3>
                </div>
              ))}
              <div className={styles.showOnlyMobileCard}>
                <Link href="#" className={styles.exploreAllLink}>
                  <div className={styles.lastCardContentSection}>
                    <p>Explore All</p>
                    <h1 className="blue-text">28+</h1>
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
        {/* Custom CSS */}

        {/* Main Banner */}
        <div className={styles.headerContent}>
          <div>
            <FiPlus className={styles.plusIcon} />
            <span className={styles.straightLine}></span>
          </div>
          <div>
            <h5
              dangerouslySetInnerHTML={{ __html: facilitiesData.subheading }}
            ></h5>
            <h1
              dangerouslySetInnerHTML={{ __html: facilitiesData.heading }}
            ></h1>
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
                <img
                  className="img-fluid image"
                  src={panel.image}
                  alt={`Panel ${index + 1}`}
                  style={{ width: "100%", objectFit: "cover" }}
                />
                <div className={styles.verticalLine}>
                  <div className={styles.slideNumberBox}>{index + 1}</div>
                </div>
                <div className={styles.bannerContent}>
                  <div>
                    <h2>
                      {panel.title}{" "}
                      <BsArrowRightCircle fontSize={24} strokeWidth={0} />
                    </h2>
                    <p>{panel.description}</p>
                  </div>
                </div>
                <div className={styles.bannerLinks}>
                  {panel.links &&
                    panel.links.map((item, index) => (
                      <Link
                        key={index}
                        href={item.url ?? "#"}
                        className={styles.bannerLink}
                      >
                        {item.text}
                        <FaChevronRight />
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
