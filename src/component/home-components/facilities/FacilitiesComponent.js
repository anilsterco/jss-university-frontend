"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { WEB_URL } from "@/config/config.mjs";
import styles from "./facilities.module.css";
import './facility.css'

export default function FacilitiesComponent({ data }) {

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
                    <Image
                      src={card.image}
                      alt={''}
                      aria-hidden="true"
                      width={320}
                      height={290}
                      loading="lazy"
                      sizes="(max-width:991px) 50vw, 100vw"
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
              <p
              className={styles.sub_heading}
                dangerouslySetInnerHTML={{ __html: facilitiesData.subheading }}
              ></p>
              <h2
              className={styles.heading}
                dangerouslySetInnerHTML={{ __html: facilitiesData.heading }}
              ></h2>
            </div>
          </div>
          <section className={`home-41 ${styles.sectionHeader}`}>
            <article className="imageWrapper zero"></article>
          </section>

          {/* Panels */}
          <section className="home5">
            {facilitiesData.facilities.map((panel, index) => (
              <article
                key={index}
                className={`panel imageWrapper panel-${index + 1}`}
              >
                <figure className={styles.slideContainer}>
                  <Image
                    className="img-fluid image"
                    src={panel.image}
                    alt={``}
                    aria-hidden="true"
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

        </div>
    </>
  );
}
