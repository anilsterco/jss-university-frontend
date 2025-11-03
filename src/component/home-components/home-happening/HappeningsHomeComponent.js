// components/home-components/EventsGrid/index.js
"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowRight } from "react-icons/go";
import styles from "./happening.module.css";
import "swiper/css";

export default function EventsGrid() {
  const eventsData = {
    title:
      '<span class="dark-blue-text ">WHAT’S </span> <span class="blue-text">HAPPENING</span> <span class="dark-blue-text ">@JSS NOIDA</span>',
    subTitle: "HAPPENINGS",
    events: [
      {
        type: "UPCOMING EVENTS",
        title: 'TECHTONIC SUMMIT: IDEAS THAT SHAKE THE FUTURE"',
        bgColor: "#4A4A4A",
        isLarge: true,
        img: "/images/home-page/seven-dummy-img.png",
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
        title: "Smart Energy Council: Powering Australia's Renewable Future",
        subtitle: "Hosts the 18th International Olympiad on Astronomy",
        date: "October 16, 2024",
        alt: "Event logo",
        bgColor: "#fff",
        img: "/images/home-page/seven-first-logo.png",
      },
    ],
  };

  const column1 = eventsData.events.slice(0, 4);
  const column2 = eventsData.events.slice(4, 9);

  console.log(column1, column2);

  return (
    <section className={styles.eventSection}>
      <div className={`${styles.container} ${styles.desktopView}`}>
        <div className={styles.header}>
          <p className={styles.headerSmall}>{eventsData.subTitle}</p>
          <h1
            className={`${styles.headerTitle}`}
            dangerouslySetInnerHTML={{ __html: eventsData.title }}
          ></h1>
        </div>

        <div className={styles.grid}>
          {/* Large Event 1 */}
          <div
            className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeTopLeft}`}
            style={{ backgroundColor: eventsData.events[0].bgColor }}
          >
            <Image
              src={eventsData.events[0].img}
              alt={eventsData.events[0].title}
              fill
              className={styles.cardImage}
            />
            <div className={styles.contentPart}>
              <div className={styles.orangeLine}></div>
              <p className={styles.cardTag}>{eventsData.events[0].type}</p>
              <h2 className={styles.cardTitleLarge}>
                {eventsData.events[0].title}
              </h2>
              <GoArrowRight className={styles.rightArrow} />
            </div>
          </div>

          {/* Event 2 */}
          <div
            className={styles.card}
            style={{ backgroundColor: eventsData.events[1].bgColor }}
          >
            <p className={styles.cardTag}>{eventsData.events[1].type}</p>
            <div>
              <h3 className={`${styles.cardTitle} ${styles.cardTitleWhite}`}>
                {eventsData.events[1].title}
              </h3>
              <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                {eventsData.events[1].date}
              </p>
            </div>
          </div>

          {/* News 3 */}
          <div
            className={styles.card}
            style={{ backgroundColor: eventsData.events[2].bgColor }}
          >
            <Image
              src={eventsData.events[2].img}
              alt={eventsData.events[2].title}
              fill
              className={styles.cardImage}
            />
            <div className={styles.miniContentPart}>
              <p className={styles.cardTag}>{eventsData.events[2].type}</p>
              <div>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleWhite}`}>
                  {eventsData.events[2].title}
                </h3>
                <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                  {eventsData.events[2].date}
                </p>
              </div>
            </div>
          </div>

          {/* Event 4 */}
          <div
            className={styles.card}
            style={{ backgroundColor: eventsData.events[3].bgColor }}
          >
            <p className={`${styles.cardTag} ${styles.cardTagDark}`}>
              {eventsData.events[3].type}
            </p>
            <Image
              src={eventsData.events[3].img}
              alt={eventsData.events[3].title}
              width={100}
              height={90}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{eventsData.events[3].title}</h3>
            <p className={styles.cardDate}>{eventsData.events[3].date}</p>
          </div>

          {/* Event 5 */}
          <div
            className={styles.card}
            style={{ backgroundColor: eventsData.events[5].bgColor }}
          >
            <Image
              src={eventsData.events[4].img}
              alt={eventsData.events[4].alt}
              fill
              className={styles.cardImage}
            />
          </div>

          {/* Large Event 6 */}
          <div
            className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeBottomRight}`}
            style={{ backgroundColor: eventsData.events[5].bgColor }}
          >
            <Image
              src={eventsData.events[5].img}
              alt={eventsData.events[5].title}
              fill
              className={styles.cardImage}
            />
            <div className={styles.contentPart}>
              <div className={styles.orangeLine}></div>
              <h2 className={styles.cardTitleLarge}>
                {eventsData.events[5].title}
              </h2>
              <p
                className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
              >
                {eventsData.events[5].subtitle}
              </p>
              <GoArrowRight className={styles.rightArrow} />
            </div>
          </div>

          {/* Event 7 */}
          <div
            className={styles.card}
            style={{ backgroundColor: eventsData.events[5].bgColor }}
          >
            <Image
              src={eventsData.events[6].img}
              alt={eventsData.events[6].alt}
              fill
              className={styles.cardImage}
            />
          </div>

          {/* Event 8 */}
          <div
            className={styles.card}
            style={{ backgroundColor: eventsData.events[7].bgColor }}
          >
            <p className={styles.cardTag}>{eventsData.events[7].type}</p>
            <div>
              <Image
                src={eventsData.events[7].img}
                alt={eventsData.events[7].alt}
                height={50}
                width={200}
                className={styles.cardImage}
              />
              <p
                className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
              >
                {eventsData.events[7].subtitle}
              </p>
              <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                {eventsData.events[7].date}
              </p>
            </div>
          </div>

          {/* Event 9 */}
          <div
            className={styles.card}
            style={{ backgroundColor: eventsData.events[8].bgColor }}
          >
            <p className={`${styles.cardTag} ${styles.cardTagDark}`}>
              {eventsData.events[8].type}
            </p>
            <Image
              src={eventsData.events[8].img}
              alt={eventsData.events[8].title}
              width={100}
              height={90}
              className={styles.cardImage}
            />
            <h3 className={styles.cardTitle}>{eventsData.events[8].title}</h3>
            <p className={styles.cardDate}>{eventsData.events[8].date}</p>
          </div>
        </div>
      </div>
      <div className={styles.mobileView}>
        <p className={`${styles.headerSmall} text-center`}>
          {eventsData.subTitle}
        </p>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          style={{ paddingBottom: "1.1rem" }}
        >
          <SwiperSlide>
            <div
              className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeTopLeft} ${styles.mobileCard}`}
              style={{ backgroundColor: eventsData.events[0].bgColor }}
            >
              <Image
                src={eventsData.events[0].img}
                alt={eventsData.events[0].title}
                fill
                className={styles.cardImage}
              />
              <div className={styles.contentPart}>
                <div className={styles.orangeLine}></div>
                <p className={styles.cardTag}>{eventsData.events[0].type}</p>
                <h2 className={styles.cardTitleLarge}>
                  {eventsData.events[0].title}
                </h2>
                <GoArrowRight className={styles.rightArrow} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.card} ${styles.mobileCard}`}
              style={{ backgroundColor: eventsData.events[1].bgColor }}
            >
              <p className={styles.cardTag}>{eventsData.events[1].type}</p>
              <div>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleWhite}`}>
                  {eventsData.events[1].title}
                </h3>
                <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                  {eventsData.events[1].date}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.card} ${styles.mobileCard}`}
              style={{ backgroundColor: eventsData.events[2].bgColor }}
            >
              <Image
                src={eventsData.events[2].img}
                alt={eventsData.events[2].title}
                fill
                className={styles.cardImage}
              />
              <div className={styles.miniContentPart}>
                <p className={styles.cardTag}>{eventsData.events[2].type}</p>
                <div>
                  <h3
                    className={`${styles.cardTitle} ${styles.cardTitleWhite}`}
                  >
                    {eventsData.events[2].title}
                  </h3>
                  <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                    {eventsData.events[2].date}
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.card} ${styles.mobileCard}`}
              style={{ backgroundColor: eventsData.events[3].bgColor }}
            >
              <p className={`${styles.cardTag} ${styles.cardTagDark}`}>
                {eventsData.events[3].type}
              </p>
              <Image
                src={eventsData.events[3].img}
                alt={eventsData.events[3].title}
                width={100}
                height={90}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>{eventsData.events[3].title}</h3>
              <p className={styles.cardDate}>{eventsData.events[3].date}</p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.card} ${styles.mobileCard}`}
              style={{ backgroundColor: eventsData.events[5].bgColor }}
            >
              <Image
                src={eventsData.events[4].img}
                alt={eventsData.events[4].alt}
                fill
                className={styles.cardImage}
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <Swiper
          spaceBetween={100}
          slidesPerView={1}
          style={{ paddingBottom: "1.1rem" }}
        >
          <SwiperSlide>
            <div
              className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeBottomRight} ${styles.mobileCard}`}
              style={{ backgroundColor: eventsData.events[5].bgColor }}
            >
              <Image
                src={eventsData.events[5].img}
                alt={eventsData.events[5].title}
                fill
                className={styles.cardImage}
              />
              <div className={styles.contentPart}>
                <div className={styles.orangeLine}></div>
                <h2 className={styles.cardTitleLarge}>
                  {eventsData.events[5].title}
                </h2>
                <p
                  className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
                >
                  {eventsData.events[5].subtitle}
                </p>
                <GoArrowRight className={styles.rightArrow} />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.card} ${styles.mobileCard}`}
              style={{ backgroundColor: eventsData.events[5].bgColor }}
            >
              <Image
                src={eventsData.events[6].img}
                alt={eventsData.events[6].alt}
                fill
                className={styles.cardImage}
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.card} ${styles.mobileCard}`}
              style={{ backgroundColor: eventsData.events[7].bgColor }}
            >
              <p className={styles.cardTag}>{eventsData.events[7].type}</p>
              <div>
                <Image
                  src={eventsData.events[7].img}
                  alt={eventsData.events[7].alt}
                  height={50}
                  width={200}
                  className={styles.cardImage}
                />
                <p
                  className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
                >
                  {eventsData.events[7].subtitle}
                </p>
                <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                  {eventsData.events[7].date}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className={`${styles.card} ${styles.mobileCard}`}
              style={{ backgroundColor: eventsData.events[8].bgColor }}
            >
              <p className={`${styles.cardTag} ${styles.cardTagDark}`}>
                {eventsData.events[8].type}
              </p>
              <Image
                src={eventsData.events[8].img}
                alt={eventsData.events[8].title}
                width={100}
                height={90}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>{eventsData.events[8].title}</h3>
              <p className={styles.cardDate}>{eventsData.events[8].date}</p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
