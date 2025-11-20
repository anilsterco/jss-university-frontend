"use client";
import { useState, use, useEffect, useRef } from "react";
import { useReactToPrint } from "react-to-print";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const BASE_URL = "https://project-demo.in/jss/api";

const icons = [
  { src: "/images/custom-page/printIcon.svg" },
  { src: "/images/custom-page/shareIcon.svg" },
];

export default function Happenings({ params }) {
  const router = useRouter();
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;
  const [eventDetails, setEventDetails] = useState({});
  useEffect(() => {
    fetch(`${BASE_URL}/happenings/${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setEventDetails(data.data);
      })
      .catch((error) => console.error("Error:", error));
  }, [slug]);

  const contentRef = useRef(null);

  const handlePrint = useReactToPrint({
    contentRef,
  });

  const happeningsData = eventDetails;

  return (
    <div ref={contentRef}>
      <section className={styles.innerTitle}>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">
                <h2>
                  {happeningsData.innerTitle && happeningsData.innerTitle.date}
                </h2>
                <h3>
                  {happeningsData.innerTitle &&
                    happeningsData.innerTitle.heading}
                </h3>
              </div>
              <ul className={styles.happIcons}>
                <li onClick={handlePrint}>
                  <img
                    src={icons[0].src}
                    alt={icons[0].alt}
                    className="img-fluid w-100"
                  />
                </li>
                <li onClick={() => router.back()}>
                  <img
                    src={icons[1].src}
                    alt={icons[1].alt}
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
                src={happeningsData.mainBanner && happeningsData.mainBanner.img}
                alt={happeningsData.mainBanner && happeningsData.mainBanner.alt}
                className="img-fluid w-100"
              />
            </figure>
          </div>

          {happeningsData.sections &&
            happeningsData.sections.map((section, idx) => (
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
              {happeningsData.related &&
                happeningsData.related.map((item, idx) => (
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
