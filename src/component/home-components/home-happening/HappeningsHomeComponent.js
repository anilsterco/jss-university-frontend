// components/home-components/EventsGrid/index.js
"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import styles from "./happening.module.css";
import "swiper/css";

export default function EventsGrid({ data }) {
  const dummyEventsData = {
    title:
      '<span class="dark-blue-text ">WHAT’S </span> <span class="blue-text">HAPPENING</span> <span class="dark-blue-text ">@JSS NOIDA</span>',
    subtitle: "HAPPENINGS",
    happenings: [
      {
        event_type: "UPCOMING EVENTS",
        title: 'TECHTONIC SUMMIT: IDEAS THAT SHAKE THE FUTURE"',
        isLarge: true,
        image: "/images/home-page/seven-dummy-img.png",
        alt_text: "IDEAS THAT SHAKE THE FUTURE",
        slug: "techtonic-summit-ideas-that-shake-the-future",
      },
      {
        event_type: "EVENT",
        title: "Annual fest that celebrates everything JSS stands for",
        event_date_from: "August 16, 2024",
        slug: "techtonic-summit-ideas-that-shake-the-future",
      },
      {
        event_type: "NEWS",
        title: "SmashZone League: The Ultimate Badminton Battle",
        event_date_from: "October 04, 2024",
        image: "/images/home-page/seven-dummy-img.png",
        alt_text: "IDEAS THAT SHAKE THE FUTURE",
        slug: "techtonic-summit-ideas-that-shake-the-future",
      },
      {
        event_type: "EVENT",
        title: "Smart Energy Council: Powering Australia's Renewable Future",
        event_date_from: "October 11, 2024",
        logo: true,
        image: "/images/home-page/seven-first-logo.png",
        alt_text: "IDEAS THAT SHAKE THE FUTURE",
        slug: "techtonic-summit-ideas-that-shake-the-future",
      },
      {
        image: "/images/home-page/seven-dummy-img.png",
        alt_text: "IDEAS THAT SHAKE THE FUTURE",
        slug: "techtonic-summit-ideas-that-shake-the-future",
      },
      {
        event_type: "UPCOMING",
        title: "SUMMER BEATS FESTIVAL 2025",
        short_description:
          "A fusion of tech and music, featuring DJ sets and app showcases",
        isLarge: true,
        image: "/images/home-page/seven-last-banner.png",
        alt_text: "IDEAS THAT SHAKE THE FUTURE",
        slug: "techtonic-summit-ideas-that-shake-the-future",
      },
      {
        image: "/images/home-page/seven-dummy-img.png",
        alt_text: "IDEAS THAT SHAKE THE FUTURE",
        slug: "techtonic-summit-ideas-that-shake-the-future",
      },
      {
        event_type: "EVENT",
        title: "Business Today CODESTORM 2.0",
        short_description: "A tech showdown with coding battles and hackathons",
        event_date_from: "October 16, 2024",
        image: "/images/home-page/seven-second-logo.png",
        alt_text: "IDEAS THAT SHAKE THE FUTURE",
        slug: "techtonic-summit-ideas-that-shake-the-future",
      },
      {
        event_type: "EVENT",
        title: "Smart Energy Council: Powering Australia's Renewable Future",
        short_description: "Hosts the 18th International Olympiad on Astronomy",
        event_date_from: "October 16, 2024",
        alt_text: "IDEAS THAT SHAKE THE FUTURE",
        image: "/images/home-page/seven-first-logo.png",
        slug: "techtonic-summit-ideas-that-shake-the-future",
      },
    ],
  };
  // const eventsData = data ? dummyEventsData : data;
  const eventsData = data ? data : dummyEventsData;
  console.log(eventsData, "eventsData");
  return (
    <section className={styles.eventSection}>
      <div className={`${styles.container} ${styles.desktopView}`}>
        <div className={styles.header}>
          <p className={styles.headerSmall}>{eventsData.subtitle}</p>
          <h1
            className={`${styles.headerTitle}`}
            dangerouslySetInnerHTML={{ __html: eventsData.title }}
          ></h1>
        </div>
        {eventsData.happenings && eventsData.happenings.length > 0 && (
          <div className={styles.grid}>
            {/* Large Event 1 */}
            <div
              className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeTopLeft}`}
            >
              <Image
                src={eventsData.happenings[0].image}
                alt="Event img"
                fill
                className={styles.cardImage}
              />
              <div className={styles.contentPart}>
                <div className={styles.orangeLine}></div>
                <p className={styles.cardTag}>
                  {eventsData.happenings[0].event_type}
                </p>
                <h2 className={styles.cardTitleLarge}>
                  {eventsData.happenings[0].title}
                </h2>
                <Link href={`/happening/${eventsData.happenings[0].slug}`}>
                  <GoArrowRight className={styles.rightArrow} />
                </Link>
              </div>
            </div>

            {/* Event 2 */}
            <div className={styles.card} style={{ backgroundColor: "#C84B3A" }}>
              <p className={styles.cardTag}>
                {eventsData.happenings[1].event_type}
              </p>
              <div>
                <h3 className={`${styles.cardTitle} ${styles.cardTitleWhite}`}>
                  {eventsData.happenings[1].title}
                </h3>
                <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                  {eventsData.happenings[1].event_date_from}
                </p>
              </div>
            </div>

            {/* News 3 */}
            <div className={styles.card}>
              <Image
                src={eventsData.happenings[2].image}
                alt={eventsData.happenings[2].alt_text}
                fill
                className={styles.cardImage}
              />
              <div className={styles.miniContentPart}>
                <p className={styles.cardTag}>
                  {eventsData.happenings[2].event_type}
                </p>
                <div>
                  <h3
                    className={`${styles.cardTitle} ${styles.cardTitleWhite}`}
                  >
                    {eventsData.happenings[2].title}
                  </h3>
                  <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                    {eventsData.happenings[2].event_date_from}
                  </p>
                </div>
              </div>
            </div>

            {/* Event 4 */}
            <div className={styles.card} style={{ backgroundColor: "#fff" }}>
              <p className={`${styles.cardTag} ${styles.cardTagDark}`}>
                {eventsData.happenings[3].event_type}
              </p>
              <Image
                src={eventsData.happenings[3].image}
                alt={eventsData.happenings[3].alt_text}
                width={100}
                height={90}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>
                {eventsData.happenings[3].title}
              </h3>
              <p className={styles.cardDate}>
                {eventsData.happenings[3].event_date_from}
              </p>
            </div>

            {/* Event 5 */}
            <div className={styles.card}>
              <Image
                src={eventsData.happenings[4].image}
                alt={eventsData.happenings[4].alt_text}
                fill
                className={styles.cardImage}
              />
            </div>

            {/* Large Event 6 */}
            <div
              className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeBottomRight}`}
            >
              <Image
                src={eventsData.happenings[5].image}
                alt={eventsData.happenings[5].alt_text}
                fill
                className={styles.cardImage}
              />
              <div className={styles.contentPart}>
                <div className={styles.orangeLine}></div>
                <h2 className={styles.cardTitleLarge}>
                  {eventsData.happenings[5].title}
                </h2>
                <p
                  className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
                >
                  {eventsData.happenings[5].short_description}
                </p>
                <Link href={`/happening/${eventsData.happenings[5].slug}`}>
                  <GoArrowRight className={styles.rightArrow} />
                </Link>
              </div>
            </div>

            {/* Event 7 */}
            <div className={styles.card}>
              <Image
                src={eventsData.happenings[6].image}
                alt={eventsData.happenings[6].alt_text}
                fill
                className={styles.cardImage}
              />
            </div>

            {/* Event 8 */}
            <div className={styles.card} style={{ backgroundColor: "#2B5DAA" }}>
              <p className={styles.cardTag}>
                {eventsData.happenings[7].event_type}
              </p>
              <div>
                <Image
                  src={eventsData.happenings[7].image}
                  alt={eventsData.happenings[7].alt_text}
                  height={50}
                  width={200}
                  className={styles.cardImage}
                />
                <p
                  className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
                >
                  {eventsData.happenings[7].short_description}
                </p>
                <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                  {eventsData.happenings[7].event_date_from}
                </p>
              </div>
            </div>

            {/* Event 9 */}
            <div className={styles.card} style={{ backgroundColor: "#fff" }}>
              <p className={`${styles.cardTag} ${styles.cardTagDark}`}>
                {eventsData.happenings[8].event_type}
              </p>
              <Image
                src={eventsData.happenings[8].image}
                alt={eventsData.happenings[8].alt_text}
                width={100}
                height={90}
                className={styles.cardImage}
              />
              <h3 className={styles.cardTitle}>
                {eventsData.happenings[8].title}
              </h3>
              <p className={styles.cardDate}>
                {eventsData.happenings[8].event_date_from}
              </p>
            </div>
          </div>
        )}
      </div>
      <div className={styles.mobileView}>
        {eventsData.happenings && eventsData.happenings.length > 0 && (
          <>
            <p className={`${styles.headerSmall} text-center`}>
              {eventsData.short_description}
            </p>

            <Swiper
              spaceBetween={100}
              slidesPerView={1}
              style={{ paddingBottom: "1.1rem" }}
            >
              <SwiperSlide>
                <div
                  className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeTopLeft} ${styles.mobileCard}`}
                >
                  <Image
                    src={eventsData.happenings[0].image}
                    alt={eventsData.happenings[0].alt_text}
                    fill
                    className={styles.cardImage}
                  />
                  <div className={styles.contentPart}>
                    <div className={styles.orangeLine}></div>
                    <p className={styles.cardTag}>
                      {eventsData.happenings[0].event_type}
                    </p>
                    <h2 className={styles.cardTitleLarge}>
                      {eventsData.happenings[0].title}
                    </h2>
                    <Link href={`/happening/${eventsData.happenings[0].slug}`}>
                      <GoArrowRight className={styles.rightArrow} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${styles.card} ${styles.mobileCard}`}
                  style={{ backgroundColor: "#AF251C" }}
                >
                  <p className={styles.cardTag}>
                    {eventsData.happenings[1].event_type}
                  </p>
                  <div>
                    <h3
                      className={`${styles.cardTitle} ${styles.cardTitleWhite}`}
                    >
                      {eventsData.happenings[1].title}
                    </h3>
                    <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                      {eventsData.happenings[1].event_date_from}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.card} ${styles.mobileCard}`}>
                  <Image
                    src={eventsData.happenings[2].image}
                    alt={eventsData.happenings[2].alt_text}
                    fill
                    className={styles.cardImage}
                  />
                  <div className={styles.miniContentPart}>
                    <p className={styles.cardTag}>
                      {eventsData.happenings[2].event_type}
                    </p>
                    <div>
                      <h3
                        className={`${styles.cardTitle} ${styles.cardTitleWhite}`}
                      >
                        {eventsData.happenings[2].title}
                      </h3>
                      <p
                        className={`${styles.cardDate} ${styles.cardDateWhite}`}
                      >
                        {eventsData.happenings[2].event_date_from}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${styles.card} ${styles.mobileCard}`}
                  style={{ backgroundColor: "#fff" }}
                >
                  <p className={`${styles.cardTag} ${styles.cardTagDark}`}>
                    {eventsData.happenings[3].event_type}
                  </p>
                  <Image
                    src={eventsData.happenings[3].image}
                    alt={eventsData.happenings[3].alt_text}
                    width={100}
                    height={90}
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>
                    {eventsData.happenings[3].title}
                  </h3>
                  <p className={styles.cardDate}>
                    {eventsData.happenings[3].event_date_from}
                  </p>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.card} ${styles.mobileCard}`}>
                  <Image
                    src={eventsData.happenings[4].image}
                    alt={eventsData.happenings[4].alt_text}
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
                >
                  <Image
                    src={eventsData.happenings[5].image}
                    alt={eventsData.happenings[5].alt_text}
                    fill
                    className={styles.cardImage}
                  />
                  <div className={styles.contentPart}>
                    <div className={styles.orangeLine}></div>
                    <h2 className={styles.cardTitleLarge}>
                      {eventsData.happenings[5].title}
                    </h2>
                    <p
                      className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
                    >
                      {eventsData.happenings[5].short_description}
                    </p>
                    <Link href={`/happening/${eventsData.happenings[5].slug}`}>
                      <GoArrowRight className={styles.rightArrow} />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className={`${styles.card} ${styles.mobileCard}`}>
                  <Image
                    src={eventsData.happenings[6].image}
                    alt={eventsData.happenings[6].alt_text}
                    fill
                    className={styles.cardImage}
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${styles.card} ${styles.mobileCard}`}
                  style={{ backgroundColor: "#2B5DAA" }}
                >
                  <p className={styles.cardTag}>
                    {eventsData.happenings[7].event_type}
                  </p>
                  <div>
                    <Image
                      src={eventsData.happenings[7].image}
                      alt={eventsData.happenings[7].alt_text}
                      height={50}
                      width={200}
                      className={styles.cardImage}
                    />
                    <p
                      className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
                    >
                      {eventsData.happenings[7].short_description}
                    </p>
                    <p className={`${styles.cardDate} ${styles.cardDateWhite}`}>
                      {eventsData.happenings[7].event_date_from}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`${styles.card} ${styles.mobileCard}`}
                  style={{ backgroundColor: "#fff" }}
                >
                  <p className={`${styles.cardTag} ${styles.cardTagDark}`}>
                    {eventsData.happenings[8].event_type}
                  </p>
                  <Image
                    src={eventsData.happenings[8].image}
                    alt={eventsData.happenings[8].alt_text}
                    width={100}
                    height={90}
                    className={styles.cardImage}
                  />
                  <h3 className={styles.cardTitle}>
                    {eventsData.happenings[8].title}
                  </h3>
                  <p className={styles.cardDate}>
                    {eventsData.happenings[8].event_date_from}
                  </p>
                </div>
              </SwiperSlide>
            </Swiper>
          </>
        )}
      </div>
    </section>
  );
}
