// components/home-components/EventsGrid/index.js
import React from "react";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import styles from "./happening.module.css";

export default function EventsGrid() {
  const events = [
    {
      type: "UPCOMING EVENTS",
      title: 'TECHTONIC SUMMIT: IDEAS THAT SHAKE THE FUTURE"',
      bgColor: "#4A4A4A",
      isLarge: true,
      img: "/images/home-page/seven-first-banner.png",
    },
    {
      type: "EVENT",
      title: "Annual fest that celebrates everything JSS stands for",
      date: "August 16, 2024",
      bgColor: "#C84B3A",
    },
    {
      type: "NEWS",
      title: "SmashZone League: The Ultimate Badminton Battle",
      date: "October 04, 2024",
      bgColor: "#9B9B9B",
      img: "/images/home-page/seven-dummy-img.png",
    },
    {
      type: "EVENT",
      title: "Smart Energy Council: Powering Australia's Renewable Future",
      date: "October 11, 2024",
      logo: true,
      bgColor: "#FFFFFF",
      img: "/images/home-page/seven-first-logo.png",
    },
    {
      img: "/images/home-page/seven-dummy-img.png",
      alt: "Event logo",
    },
    {
      type: "UPCOMING",
      title: "SUMMER BEATS FESTIVAL 2025",
      subtitle:
        "A fusion of tech and music, featuring DJ sets and app showcases",
      bgColor: "#4A4A4A",
      isLarge: true,
      img: "/images/home-page/seven-last-banner.png",
    },
    {
      img: "/images/home-page/seven-dummy-img.png",
      alt: "Event logo",
    },
    {
      type: "EVENT",
      title: "Business Today CODESTORM 2.0",
      subtitle: "A tech showdown with coding battles and hackathons",
      date: "October 16, 2024",
      bgColor: "#2B5DAA",
      img: "/images/home-page/seven-second-logo.png",
      alt: "Event logo",
    },
    {
      type: "EVENT",
      subtitle: "Hosts the 18th International Olympiad on Astronomy",
      date: "October 16, 2024",
      alt: "Event logo",
      bgColor: "#fff",
      img: "/images/home-page/seven-third-logo.png",
    },
  ];

  return (
    <section className={styles.eventSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <p className={styles.headerSmall}>HAPPENINGS</p>
          <h1 className={`${styles.headerTitle} highlighted-title`}>WHAT'S HAPPENING @JSS NOIDA</h1>
        </div>

        <div className={styles.grid}>
          {/* Large Event 1 */}
          <div
            className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeTopLeft}`}
            style={{ backgroundColor: events[0].bgColor }}
          >
            <Image
              src={events[0].img}
              alt={events[0].title}
              fill
              className={styles.cardImage}
            />
            <div className={styles.contentPart}>
              <div className={styles.orangeLine}></div>
              <p className={styles.cardTag}>{events[0].type}</p>
              <h2 className={styles.cardTitleLarge}>{events[0].title}</h2>
              <FiArrowRightCircle color="#fff" fontSize={20} />
            </div>
          </div>

          {/* Event 2 */}
          <div
            className={styles.card}
            style={{ backgroundColor: events[1].bgColor }}
          >
            <p className={styles.cardTag}>{events[1].type}</p>
            <h3 className={`${styles.cardTitle} ${styles.cardTitleWhite}`}>
              {events[1].title}
            </h3>
            <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
              {events[1].date}
            </p>
          </div>

          {/* News 3 */}
          <div
            className={styles.card}
            style={{ backgroundColor: events[2].bgColor }}
          >
            <Image
              src={events[2].img}
              alt={events[2].title}
              fill
              className={styles.cardImage}
            />
            <div className={styles.miniContentPart}>
              <p className={styles.cardTag}>{events[2].type}</p>
              <h3 className={`${styles.cardTitle} ${styles.cardTitleWhite}`}>
                {events[2].title}
              </h3>
              <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                {events[2].date}
              </p>
            </div>
          </div>

          {/* Event 4 */}
          <div
            className={styles.card}
            style={{ backgroundColor: events[3].bgColor }}
          >
            <p className={`${styles.cardTag} ${styles.cardTagDark}`}>
              {events[3].type}
            </p>
            <Image
              src={events[3].img}
              alt={events[3].title}
              width={100}
              height={90}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{events[3].title}</h3>
            <p className={styles.cardDate}>{events[3].date}</p>
          </div>

          {/* Event 5 */}
          <div
            className={styles.card}
            style={{ backgroundColor: events[5].bgColor }}
          >
            <Image
              src={events[4].img}
              alt={events[4].alt}
              fill
              className={styles.cardImage}
            />
          </div>

          {/* Large Event 6 */}
          <div
            className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeBottomRight}`}
            style={{ backgroundColor: events[5].bgColor }}
          >
            <Image
              src={events[5].img}
              alt={events[5].title}
              fill
              className={styles.cardImage}
            />
            <div className={styles.contentPart}>
              <div className={styles.orangeLine}></div>
              <h2 className={styles.cardTitleLarge}>{events[5].title}</h2>
              <p
                className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
              >
                {events[5].subtitle}
              </p>
              <FiArrowRightCircle color="#fff" fontSize={20} />
            </div>
          </div>

          {/* Event 7 */}
          <div
            className={styles.card}
            style={{ backgroundColor: events[5].bgColor }}
          >
            <Image
              src={events[6].img}
              alt={events[6].alt}
              fill
              className={styles.cardImage}
            />
          </div>

          {/* Event 8 */}
          <div
            className={styles.card}
            style={{ backgroundColor: events[7].bgColor }}
          >
            <p className={styles.cardTag}>{events[7].type}</p>
            <div>
              <Image
                src={events[7].img}
                alt={events[7].alt}
                height={50}
                width={200}
                className={styles.cardImage}
              />
              <p
                className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
              >
                {events[7].subtitle}
              </p>
              <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                {events[7].date}
              </p>
            </div>
          </div>

          {/* Event 9 */}
          <div
            className={styles.card}
            style={{ backgroundColor: events[8].bgColor }}
          >
            <p className={`${styles.cardTag} ${styles.cardTagDark}`}>
              {events[8].type}
            </p>
            <Image
              src={events[8].img}
              alt={events[8].alt}
              height={50}
              width={200}
              className={styles.cardImage}
            />
            <div className={styles.seamEduLogo}>
              <span className={styles.seamEduBold}>Knowledge Partner</span>
              <span className={styles.seamEduTitle}>
                seam<span className={styles.seamEduLight}>edu</span>
              </span>
            </div>
            <h3 className={styles.cardTitle}>{events[8].title}</h3>
            <p className={styles.cardDate}>{events[8].date}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
