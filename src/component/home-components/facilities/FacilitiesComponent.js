"use client";
import React, { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./facilities.module.css";
import Link from "next/link";
import { FaChevronRight } from "react-icons/fa6";
import { BsArrowRightCircle } from "react-icons/bs";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const home41Ref = useRef(null);
  const home5Ref = useRef(null);
  const home6Ref = useRef(null);

  // Dynamic data
  const mainBanner = "/images/header/header-img.webp";

  const panels = [
    {
      id: 1,
      title: "CLASSROOM",
      desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
      img: "/images/home-page/fourth-section-first-banner.png",
      url: [
        {
          link: "/",
          text: "SMART CLASSROOM1",
        },
        {
          link: "/",
          text: "VIRTUAL CLASSROOM1",
        },
        {
          link: "/",
          text: "LECTURE HALL1",
        },
      ],
    },
    {
      id: 2,
      title: "ACADEMICS LABS",
      desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
      img: "/images/home-page/fourth-section-second-banner.png",
      url: [
        {
          link: "/",
          text: "SMART CLASSROOM2",
        },
        {
          link: "/",
          text: "VIRTUAL CLASSROOM2",
        },
        {
          link: "/",
          text: "LECTURE HALL2",
        },
      ],
    },
    {
      id: 3,
      title: "CAMPUS",
      desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
      img: "/images/home-page/fourth-section-third-banner.png",
      url: [
        {
          link: "/",
          text: "SMART CLASSROOM3",
        },
        {
          link: "/",
          text: "VIRTUAL CLASSROOM3",
        },
        {
          link: "/",
          text: "LECTURE HALL3",
        },
      ],
    },
    {
      id: 4,
      title: "SPORTS AND HEALTH",
      desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
      img: "/images/home-page/fourth-section-fourth-banner.png",
      url: [
        {
          link: "/",
          text: "SMART CLASSROOM4",
        },
        {
          link: "/",
          text: "VIRTUAL CLASSROOM4",
        },
        {
          link: "/",
          text: "LECTURE HALL4",
        },
      ],
    },
  ];

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
      start: "top -20px",
      endTrigger: lastPanel,
      end: () => {
        const offset = window.innerHeight * 0.01; // ~70px dynamic
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

  return (
    <div>
      {/* Custom CSS */}

      {/* Main Banner */}
      <section className="home-41" ref={home41Ref}>
        <article className="imageWrapper zero">
          <figure>
            <img
              className="image"
              src={mainBanner}
              alt="Main Banner"
              style={{ width: "100%", objectFit: "cover" }}
            />
          </figure>
        </article>
      </section>

      {/* Panels */}
      <section className="home5" ref={home5Ref}>
        {panels.map((panel, index) => (
          <article
            key={index}
            className={`panel imageWrapper panel-${index + 1}`}
          >
            <figure className={styles.slideContainer}>
              <img
                className="img-fluid image"
                src={panel.img}
                alt={`Panel ${index + 1}`}
                style={{ width: "100%", objectFit: "cover" }}
              />
              <div className={styles.verticalLine}>
                <div className={styles.slideNumberBox}>{index + 1}</div>
              </div>
              <div className={styles.bannerContent}>
                <div>
                  <h2>{panel.title} <BsArrowRightCircle fontSize={23}/></h2>
                  <p>{panel.desc}</p>
                </div>
              </div>
              <div className={styles.bannerLinks}>
                {panel.url &&
                  panel.url.map((item, index) => (
                    <Link
                      key={index}
                      href={item.link}
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
      <section className="home6" ref={home6Ref}>
        <figure></figure>
      </section>
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
  );
};

export default App;
