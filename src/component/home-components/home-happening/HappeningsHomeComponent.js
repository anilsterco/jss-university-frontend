// components/home-components/EventsGrid/index.js
"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoArrowRight } from "react-icons/go";
import Link from "next/link";
import styles from "./happening.module.css";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { WEB_URL } from "@/config/config";
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  const eventsData = data ? data : dummyEventsData;
  return (
    <section className={`${styles.eventSection} homepage_happenings`}>
      <div className="containerXl">
        <div
          className={`happining-sec ${styles.desktopView}`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className={styles.header}>
            <p className={styles.headerSmall}>{eventsData.subtitle}</p>
            <h2
              className={`${styles.headerTitle}`}
              dangerouslySetInnerHTML={{ __html: eventsData.title }}
              data-aos="fade-up"
              data-aos-delay="200"
            ></h2>
          </div>
          {eventsData.happenings && eventsData.happenings.length > 0 && (
            <div className={styles.grid}>
              <div
                className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeTopLeft}`}
              >
                {eventsData.happenings[0] && (
                  <Image
                    src={eventsData.happenings[0].image}
                    alt="Event img"
                    fill
                    className={styles.cardImage}
                  />
                )}

                <div className={styles.contentPart}>
                  <div className={styles.orangeLine}></div>
                  <p
                    className={styles.cardTag}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {eventsData.happenings[0] &&
                      eventsData.happenings[0].event_type}
                  </p>

                  {eventsData.happenings[0] && (
                    <h2
                      className={styles.cardTitleLarge}
                      data-aos="fade-up"
                      data-aos-delay="200"
                      dangerouslySetInnerHTML={{
                        __html: eventsData.happenings[0].title,
                      }}
                    />
                  )}

                  {eventsData.happenings?.[0]?.slug && (
                    <Link
                      href={`${WEB_URL}happenings/${eventsData.happenings[0].slug}`}
                      className={styles.full_link}
                      aria-label={`View event: ${eventsData.happenings[0].title}`}
                    />
                  )}
                </div>
              </div>

              <div
                className={styles.card}
                style={{ backgroundColor: "#AF251C" }}
              >
                <p
                  className={styles.cardTag}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {eventsData.happenings[1] &&
                    eventsData.happenings[1].event_type}
                </p>
                <div>
                  <h3
                    className={`${styles.cardTitle} ${styles.cardTitleWhite}`}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {eventsData.happenings[1] && eventsData.happenings[1].title}
                  </h3>
                  <p
                    className={`${styles.cardDate} ${styles.cardDateWhite}`}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {eventsData.happenings[1] &&
                      eventsData.happenings[1].event_date_from}
                  </p>
                </div>
                {eventsData.happenings?.[1]?.slug && (
                  <Link
                    href={`${WEB_URL}happenings/${eventsData.happenings[1].slug}`}
                    className={styles.full_link}
                    aria-label={`View event: ${eventsData.happenings[1].title}`}
                  />
                )}
              </div>

              <div className={`${styles.card} ${styles.col_2}`}>
              <span className={styles.overlay} style={{backgroundColor:"#fff"}}></span>
                {eventsData.happenings[2] && (
                  <div className={`position-relative  ${styles.card_overlay}`}>
                    <Image
                      src={eventsData.happenings[2].image}
                      alt="img"
                      fill
                      className={styles.cardImage}
                    />
                  </div>
                )}
                <div className={`${styles.miniContentPart}`} >
                  <p
                    className={`${styles.cardTag} ${styles.cardTagDark}`}
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    {eventsData.happenings[2] &&
                      eventsData.happenings[2].event_type}
                  </p>
                  <div>
                    <h3
                      className={`${styles.cardTitle}`}
                      data-aos="fade-up"
                      data-aos-delay="500"
                    >
                      {eventsData.happenings[2] &&
                        eventsData.happenings[2].title}
                    </h3>
                    <p
                      className={`${styles.cardDate}`}
                      data-aos="fade-up"
                      data-aos-delay="600"
                    >
                      {eventsData.happenings[2] &&
                        eventsData.happenings[2].event_date_from}
                    </p>
                    {eventsData.happenings?.[2]?.slug && (
                      <Link
                        href={`${WEB_URL}happenings/${eventsData.happenings[2].slug}`}
                        className={styles.full_link}
                        aria-label={`View event: ${eventsData.happenings[2].title}`}
                      />
                    )}
                  </div>
                </div>
              </div>

              <div className={`${styles.card} ${styles.card_overlay}`}>
                {eventsData.happenings[4] && (
                  <>
                    <Image
                      src={eventsData.happenings[4].image}
                      alt="img"
                      fill
                      className={styles.cardImage}
                    />
                    <div className={styles.miniContentPart}>
                      <p
                        className={styles.cardTag}
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        {eventsData.happenings[4] &&
                          eventsData.happenings[4].event_type}
                      </p>

                      <div>
                        <h3
                          className={`${styles.cardTitle} ${styles.cardTitleWhite}`}
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          {eventsData.happenings[4] &&
                            eventsData.happenings[4].title}
                        </h3>
                        <p
                          className={`${styles.cardDate} ${styles.cardDateWhite}`}
                          data-aos="fade-up"
                          data-aos-delay="600"
                        >
                          {eventsData.happenings[4] &&
                            eventsData.happenings[4].event_date_from}
                        </p>
                        {eventsData.happenings?.[4]?.slug && (
                          <Link
                            href={`${WEB_URL}happenings/${eventsData.happenings[4].slug}`}
                            className={styles.full_link}
                            aria-label={`View event: ${eventsData.happenings[4].title}`}
                          />
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

              <div
                className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeBottomRight}`}
              >
                {eventsData.happenings[5] && (
                  <Image
                    src={eventsData.happenings[5].image}
                    alt="img"
                    fill
                    className={styles.cardImage}
                  />
                )}

                <div className={styles.contentPart}>
                  <div className={styles.orangeLine}></div>
                  <h2
                    className={styles.cardTitleLarge}
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    {eventsData.happenings[5] && eventsData.happenings[5].title}
                  </h2>
                  <p
                    className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {eventsData.happenings[5] &&
                      eventsData.happenings[5].short_description}
                  </p>
                  {eventsData.happenings[5] && (
                    <Link href={`/happenings/${eventsData.happenings[5].slug}`} aria-label={`View event: ${eventsData.happenings[5].title}`}>
                      <GoArrowRight className={styles.rightArrow} aria-hidden="true" />
                    </Link>
                  )}
                </div>
              </div>

              {/* Event 7 */}
              <div className={`${styles.card} ${styles.col_2}`}>
                
              <span className={styles.overlay} style={{backgroundColor:"rgb(0, 72, 154)"}}></span>
                {eventsData.happenings[6] && (
                  <>
                    <div className={`position-relative ${styles.card_overlay}`}>
                      <Image
                        src={eventsData.happenings[6].image}
                        alt="img"
                        fill
                        className={styles.cardImage}
                      />
                    </div>

                    <div className={`${styles.miniContentPart}  `}>
                      <p
                        className={styles.cardTag}
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        {eventsData.happenings[6] &&
                          eventsData.happenings[6].event_type}
                      </p>

                      <div>
                        <h3
                          className={`${styles.cardTitle} ${styles.cardTitleWhite}`}
                          data-aos="fade-up"
                          data-aos-delay="500"
                        >
                          {eventsData.happenings[6] &&
                            eventsData.happenings[6].title}
                        </h3>
                        <p
                          className={`${styles.cardDate} ${styles.cardDateWhite}`}
                          data-aos="fade-up"
                          data-aos-delay="600"
                        >
                          {eventsData.happenings[6] &&
                            eventsData.happenings[6].event_date_from}
                        </p>
                        {eventsData.happenings?.[6]?.slug && (
                          <Link
                            href={`${WEB_URL}happenings/${eventsData.happenings[6].slug}`}
                            className={styles.full_link}
                            aria-label={`View event: ${eventsData.happenings[6].title}`}
                          />
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>

             
              <div className={styles.card} style={{ backgroundColor: "#fff" }}>
                <p
                  className={`${styles.cardTag} ${styles.cardTagDark}`}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  {eventsData.happenings[8] &&
                    eventsData.happenings[8].event_type}
                </p>
                {/* {eventsData.happenings[8] && (
                  <Image
                    src={eventsData.happenings[8].image}
                    alt="img"
                    width={196}
                    height={55}
                    className={styles.cardImage}
                  />
                )} */}

                <div>
                  <h3
                    className={styles.cardTitle}
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    {eventsData.happenings[8] && eventsData.happenings[8].title}
                  </h3>
                  <p
                    className={styles.cardDate}
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    {eventsData.happenings[8] &&
                      eventsData.happenings[8].event_date_from}
                  </p>
                </div>

                {eventsData.happenings?.[8]?.slug && (
                  <Link
                    href={`${WEB_URL}happenings/${eventsData.happenings[8].slug}`}
                    className={styles.full_link}
                    aria-label={`View event: ${eventsData.happenings[8].title}`}
                  />
                )}
              </div>
            </div>
          )}
        </div>
        <div className={styles.mobileView}>
          {eventsData.happenings && eventsData.happenings.length > 0 && (
            <>
              <p className={`${styles.headerSmall} text-center`}>HAPPENINGS</p>

              <Swiper
                spaceBetween={100}
                slidesPerView={1}
                style={{ paddingBottom: "1.1rem" }}
              >
                <SwiperSlide>
                  <div
                    className={`${styles.card} ${styles.cardLarge} ${styles.cardLargeTopLeft} ${styles.mobileCard}`}
                  >
                    {eventsData.happenings[0] && (
                      <Image
                        src={eventsData.happenings[0].image}
                        alt="img"
                        fill
                        className={styles.cardImage}
                      />
                    )}
                    <div className={styles.contentPart}>
                      <div className={styles.orangeLine}></div>
                      <p className={styles.cardTag}>
                        {eventsData.happenings[0] &&
                          eventsData.happenings[0].event_type}
                      </p>
                      <h2 className={styles.cardTitleLarge}>
                        {eventsData.happenings[0] &&
                          eventsData.happenings[0].title}
                      </h2>
                      {eventsData.happenings?.[0]?.slug && (
                        <Link
                          href={`/happenings/${eventsData.happenings[0].slug}`}
                          className={styles.full_link}
                          aria-label={`View event: ${eventsData.happenings[0].title}`}
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={`${styles.card} ${styles.mobileCard}`}
                    style={{ backgroundColor: "#AF251C" }}
                  >
                    <p className={styles.cardTag}>
                      {eventsData.happenings[1] &&
                        eventsData.happenings[1].event_type}
                    </p>
                    <div>
                      <h3
                        className={`${styles.cardTitle} ${styles.cardTitleWhite}`}
                      >
                        {eventsData.happenings[1] &&
                          eventsData.happenings[1].title}
                      </h3>
                      <p
                        className={`${styles.cardDate} ${styles.cardDateWhite}`}
                      >
                        {eventsData.happenings[1] &&
                          eventsData.happenings[1].event_date_from}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${styles.card} ${styles.mobileCard}`}>
                    {eventsData.happenings[2] && (
                      <Image
                        src={eventsData.happenings[2].image}
                        alt="img"
                        fill
                        className={styles.cardImage}
                      />
                    )}

                    <div className={styles.miniContentPart}>
                      <p className={styles.cardTag}>
                        {eventsData.happenings[2] &&
                          eventsData.happenings[2].event_type}
                      </p>
                      <div>
                        <h3
                          className={`${styles.cardTitle} ${styles.cardTitleWhite}`}
                        >
                          {eventsData.happenings[2] &&
                            eventsData.happenings[2].title}
                        </h3>
                        <p
                          className={`${styles.cardDate} ${styles.cardDateWhite}`}
                        >
                          {eventsData.happenings[2] &&
                            eventsData.happenings[2].event_date_from}
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
                      {eventsData.happenings[3] &&
                        eventsData.happenings[3].event_type}
                    </p>
                    {eventsData.happenings[3] && (
                      <Image
                        src={eventsData.happenings[3].image}
                        alt="img"
                        width={100}
                        height={90}
                        className={styles.cardImage}
                      />
                    )}

                    <h3 className={styles.cardTitle}>
                      {eventsData.happenings[3] &&
                        eventsData.happenings[3].title}
                    </h3>
                    <p className={styles.cardDate}>
                      {eventsData.happenings[3] &&
                        eventsData.happenings[3].event_date_from}
                    </p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${styles.card} ${styles.mobileCard}`}>
                    {eventsData.happenings[4] && (
                      <Image
                        src={eventsData.happenings[4].image}
                        alt="img"
                        fill
                        className={styles.cardImage}
                      />
                    )}
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
                    {eventsData.happenings[5] && (
                      <Image
                        src={eventsData.happenings[5].image}
                        alt="img"
                        fill
                        className={styles.cardImage}
                      />
                    )}
                    <div className={styles.contentPart}>
                      <div className={styles.orangeLine}></div>
                      <h2 className={styles.cardTitleLarge}>
                        {eventsData.happenings[5] &&
                          eventsData.happenings[5].title}
                      </h2>
                      <p
                        className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
                      >
                        {eventsData.happenings[5] &&
                          eventsData.happenings[5].short_description}
                      </p>
                      {eventsData.happenings?.[5]?.slug && (
                        <Link
                          href={`/happenings/${eventsData.happenings[5].slug}`}
                          className={styles.full_link}
                          aria-label={`View event: ${eventsData.happenings[5].title}`}
                        />
                      )}
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className={`${styles.card} ${styles.mobileCard}`}>
                    {eventsData.happenings[6] && (
                      <Image
                        src={eventsData.happenings[6].image}
                        alt="img"
                        fill
                        className={styles.cardImage}
                      />
                    )}
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div
                    className={`${styles.card} ${styles.mobileCard}`}
                    style={{ backgroundColor: "#2B5DAA" }}
                  >
                    <p className={styles.cardTag}>
                      {eventsData.happenings[7] &&
                        eventsData.happenings[7].event_type}
                    </p>
                    <div>
                      {eventsData.happenings[7] && (
                        <Image
                          src={eventsData.happenings[7].image}
                          alt="img"
                          height={50}
                          width={200}
                          className={styles.cardImage}
                        />
                      )}
                      <p
                        className={`${styles.cardSubtitle} ${styles.cardSubtitleWhite}`}
                      >
                        {eventsData.happenings[7] &&
                          eventsData.happenings[7].short_description}
                      </p>
                      <p
                        className={`${styles.cardDate} ${styles.cardDateWhite}`}
                      >
                        {eventsData.happenings[7] &&
                          eventsData.happenings[7].event_date_from}
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
                      {eventsData.happenings[8] &&
                        eventsData.happenings[8].event_type}
                    </p>
                    {eventsData.happenings[8] && (
                      <Image
                        src={eventsData.happenings[8].image}
                        alt="img"
                        width={100}
                        height={90}
                        className={styles.cardImage}
                      />
                    )}
                    <h3 className={styles.cardTitle}>
                      {eventsData.happenings[8] &&
                        eventsData.happenings[8].title}
                    </h3>
                    <p className={styles.cardDate}>
                      {eventsData.happenings[8] &&
                        eventsData.happenings[8].event_date_from}
                    </p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <Link href="/happenings">
                <button
                  type="button"
                  className={styles.circleArrowBtn}
                  aria-label="View all happenings"
                >
                  <Image
                    src="/images/icons/arrow2.svg"
                    alt="arrow"
                    width={22}
                    height={22}
                  />
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
