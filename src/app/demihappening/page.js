"use client";
import { useState } from "react";
import styles from "./page.module.css";

export const happeningsData = {
  innerTitle: {
    date: "OCTOBER 16, 2025",
    heading: "TECHTONIC SUMMIT: IDEAS THAT SHAKE THE FUTURE",
    icons: [
      { src: "/images/custom-page/printIcon.svg" },
      { src: "/images/custom-page/shareIcon.svg" },
    ],
  },
  mainBanner: {
    img: "/images/custom-page/happni-banner.webp",
    alt: "Main Banner",
  },
  sections: [
    {
      smallImg: "/images/custom-page/happsmall.webp",
      content: [
        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor...",
        "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium...",
        "Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet...",
      ],
    },
  ],
  related: [
    {
      img: "/images/custom-page/reletedImg.webp",
      alt: "Related 1",
    },
    {
      img: "/images/custom-page/reletedImg.webp",
      alt: "Related 2",
    },
  ],
};

export default function Happenings() {
  return (
    <div>
      <section className={styles.innerTitle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">
                <h2>{happeningsData.innerTitle.date}</h2>
                <h3>{happeningsData.innerTitle.heading}</h3>
              </div>
              <ul className={styles.happIcons}>
                {happeningsData.innerTitle.icons.map((icon, idx) => (
                  <li key={idx}>
                    <img
                      src={icon.src}
                      alt={icon.alt}
                      className="img-fluid w-100"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.happiningSec}>
        <div className="col-lg-12 mx-auto">
          <div className={styles.banner}>
            <figure>
              <img
                src={happeningsData.mainBanner.img}
                alt={happeningsData.mainBanner.alt}
                className="img-fluid w-100"
              />
            </figure>
          </div>

          {happeningsData.sections.map((section, idx) => (
           <div className="container"  key={idx}>
             <div className="col-lg-10 mx-auto">
              <div className={styles.Grid2}>
                <figure>
                  <img
                    src={section.smallImg}
                    alt="Section Image"
                    className="img-fluid w-100"
                  />
                </figure>
                <div className={styles.happContant}>
                  {section.content.map((paragraph, pIdx) => (
                    <p key={pIdx}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
           </div>
          ))}
        </div>
      </section>

      <section className={styles.relatedHappenings}>
        <div className="container">
          <div className="col-lg-10 mx-auto">
            <h3>Related News</h3>
            <div className={styles.releGrid}>
              {happeningsData.related.map((item, idx) => (
                <div className={styles.relecol} key={idx}>
                  <figure>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="img-fluid w-100"
                    />
                    <figcaption>
                      <h4>Alumni Meet and Greet 2024</h4>
                      <p>October 16, 2024</p>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
