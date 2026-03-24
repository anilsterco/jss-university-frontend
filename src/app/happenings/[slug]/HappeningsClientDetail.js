"use client";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Link from "next/link";
import { WEB_URL } from "@/config/config";

import "@/styles/style.css";
import "@/styles/custom.style.css";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

const icons = [
  { src: "/images/custom-page/printIcon.svg" },
  { src: "/images/custom-page/backIcon.svg" },
];

export default function HappeningsClientDetail({ happeningsData }) {
  const contentRef = useRef(null);
  const router = useRouter();

  const handlePrint = useReactToPrint({ contentRef });

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(WEB_URL + "/happenings");
    }
  };

  return (
    <div ref={contentRef}>
      <section className={styles.innerTitle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">
                <h2>{happeningsData.innerTitle?.date}</h2>
                <h3>{happeningsData.innerTitle?.heading}</h3>
              </div>
              <ul className={styles.happIcons}>
                <li>
                  <button onClick={handleBack}>
                    <img
                      src={icons[1].src}
                      alt="back"
                      className="img-fluid w-100"
                    />
                  </button>
                </li>
                <li onClick={handlePrint} style={{ cursor: "pointer" }}>
                  <img
                    src={icons[0].src}
                    alt="print"
                    className="img-fluid w-100"
                  />
                </li>
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
                src={happeningsData.mainBanner?.img}
                alt={happeningsData.mainBanner?.alt}
                className="img-fluid w-100"
              />
            </figure>
          </div>

          {happeningsData.sections?.map((section, idx) => (
            <div className="container" key={idx}>
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
              {happeningsData.related?.map((item, idx) => (
                <div className={styles.relecol} key={idx}>
                  <figure>
                    <img
                      src={item.img}
                      alt={item.alt}
                      className="img-fluid w-100"
                    />
                    <figcaption>
                      <h4>{item.title}</h4>
                      <p>{item.date}</p>
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
