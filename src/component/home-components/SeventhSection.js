import React from "react";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";

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
    <section style={styles.eventSection}>
      <div style={styles.container}>
        <div style={styles.header}>
          <p style={styles.headerSmall}>HAPPENINGS</p>
          <h1 style={styles.headerTitle}>
            WHAT'S <span className="blue-text">HAPPENING</span> @JSS NOIDA
          </h1>
        </div>

        <div style={styles.grid}>
          {/* Large Event 1 */}
          <div
            style={{
              ...styles.card,
              ...styles.cardLarge,
              backgroundColor: events[0].bgColor, borderTopLeftRadius: "50px"
            }}
          >
            <Image
              src={events[0].img}
              alt={events[0].title}
              fill
              objectFit="cover"
            />
            <div style={styles.contentPart}>
              <div style={styles.orangeLine}></div>
              <p style={styles.cardTag}>{events[0].type}</p>
              <h2 style={styles.cardTitleLarge}>{events[0].title}</h2>
              <FiArrowRightCircle color="#fff" fontSize={20} />
            </div>
          </div>

          {/* Event 2 */}
          <div style={{ ...styles.card, backgroundColor: events[1].bgColor }}>
            <p style={{ ...styles.cardTag, color: "#fff" }}>{events[1].type}</p>
            <h3 style={{ ...styles.cardTitle, color: "#fff" }}>
              {events[1].title}
            </h3>
            <p style={{ ...styles.cardDate, color: "#fff" }}>
              {events[1].date}
            </p>
          </div>

          {/* News 3 */}
          <div style={{ ...styles.card, backgroundColor: events[2].bgColor }}>
            <Image
              src={events[2].img}
              alt={events[2].title}
              fill
              objectFit="cover"
            />
            <div style={styles.miniContentPart}>
              <p style={{ ...styles.cardTag, color: "#fff" }}>
                {events[2].type}
              </p>
              <h3 style={{ ...styles.cardTitle, color: "#fff" }}>
                {events[2].title}
              </h3>
              <p style={{ ...styles.cardDate, color: "#fff" }}>
                {events[2].date}
              </p>
            </div>
          </div>

          {/* Event 4 */}
          <div style={{ ...styles.card, backgroundColor: events[3].bgColor }}>
            <p style={styles.cardTag} className="text-dark">
              {events[3].type}
            </p>
            <Image
              src={events[3].img}
              alt={events[3].title}
              width={100}
              height={90}
              objectFit="cover"
            />
            <h3 style={styles.cardTitle}>{events[3].title}</h3>
            <p style={styles.cardDate}>{events[3].date}</p>
          </div>

          {/* Event 5 */}
          <div
            style={{
              ...styles.card,
              backgroundColor: events[5].bgColor,
              position: "relative",
            }}
          >
            <Image
              src={events[4].img}
              alt={events[4].alt}
              fill
              objectFit="cover"
            />
          </div>

          {/* Large Event 6 */}
          <div
            style={{
              ...styles.card,
              ...styles.cardLarge,
              backgroundColor: events[5].bgColor,borderBottomRightRadius: "50px"
            }}
          >
            <Image
              src={events[5].img}
              alt={events[5].title}
              fill
              objectFit="cover"
            />
            <div style={styles.contentPart}>
              <div style={styles.orangeLine}></div>
              <h2 style={styles.cardTitleLarge}>{events[5].title}</h2>
              <p
                style={{
                  ...styles.cardSubtitle,
                  color: "#fff",
                  marginTop: "10px",
                }}
              >
                {events[5].subtitle}
              </p>
              <FiArrowRightCircle color="#fff" fontSize={20} />
            </div>
          </div>
          {/* Event 7 */}
          <div
            style={{
              ...styles.card,
              backgroundColor: events[5].bgColor,
              position: "relative",
            }}
          >
            <Image
              src={events[6].img}
              alt={events[6].alt}
              fill
              objectFit="cover"
            />
          </div>
          {/* Event 8 */}
          <div style={{ ...styles.card, backgroundColor: events[7].bgColor }}>
            <p style={{ ...styles.cardTag, color: "#fff" }}>{events[7].type}</p>
            <div>
              <Image
                src={events[7].img}
                alt={events[7].alt}
                height={50}
                width={200}
                objectFit="cover"
              />
              <p style={{ ...styles.cardSubtitle, color: "#fff" }}>
                {events[7].subtitle}
              </p>
              <p style={{ ...styles.cardDate, color: "#fff" }}>
                {events[7].date}
              </p>
            </div>
          </div>
          {/* Event 9 */}
          <div
            style={{
              ...styles.card,
              backgroundColor: events[8].bgColor,
              position: "relative",
            }}
          >
            <p style={styles.cardTag} className="text-dark">
              {events[8].type}
            </p>
            <Image
              src={events[8].img}
              alt={events[8].alt}
              height={50}
              width={200}
              objectFit="cover"
            />
            <div style={styles.seamEduLogo}>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Knowledge Partner
              </span>
              <span style={{ fontSize: "24px", fontWeight: "bold" }}>
                seam<span style={{ fontWeight: "300" }}>edu</span>
              </span>
            </div>
            <h3 style={styles.cardTitle}>{events[8].title}</h3>
            <p style={styles.cardDate}>{events[8].date}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  eventSection: {
    padding: "5rem",
    background: "#f5f5f5",
  },
  contentPart: {
    position: "absolute",
    bottom: "0",
    left: "0",
    background: "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))",
    lineHeight: "2.5",
    padding: "2rem",
    width: "100%",
  },
  miniContentPart: {
    position: "absolute",
    bottom: "1rem",
    left: "1.5rem",
    width: "90%",
    lineHeight: "2.5",
  },
  header: {
    textAlign: "center",
    marginBottom: "5rem",
  },
  headerSmall: {
    fontSize: "12px",
    letterSpacing: "1px",
    marginBottom: "10px",
  },
  headerTitle: {
    fontSize: "42px",
    fontWeight: "bold",
    color: "#1a1a1a",
    margin: 0,
  },
  highlight: {
    color: "#6FB3FF",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
    gridAutoRows: "280px",
  },
  card: {
    padding: "25px",
    // borderRadius: "12px",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  cardLarge: {
    gridColumn: "span 2",
    gridRow: "span 2",
  },
  cardTag: {
    fontSize: "11px",
    letterSpacing: "1.5px",
    fontWeight: "300",
    marginBottom: "15px",
    color: "#fff",
  },
  cardTitle: {
    fontSize: "18px",
    fontWeight: "500",
    lineHeight: "1.4",
    margin: "0 0 auto 0",
    color: "#333",
  },
  cardTitleLarge: {
    fontSize: "32px",
    fontWeight: "500",
    lineHeight: "1.3",
    color: "#fff",
    margin: "auto 0",
  },
  cardSubtitle: {
    fontSize: "14px",
    lineHeight: "1.5",
    marginTop: "10px",
    color: "#333",
  },
  cardDate: {
    fontSize: "13px",
    marginTop: "15px",
    color: "#333",
  },
  iconButton: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    border: "2px solid #fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "20px",
    marginTop: "20px",
    cursor: "pointer",
  },
  logoContainer: {
    margin: "20px 0",
  },
  logo: {
    display: "flex",
    gap: "5px",
    alignItems: "center",
  },
  triangle: {
    width: 0,
    height: 0,
    borderTop: "15px solid transparent",
    borderBottom: "15px solid transparent",
  },
  seamEduLogo: {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    margin: "20px 0",
  },
  playButton: {
    position: "absolute",
    top: "20px",
    right: "20px",
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    backgroundColor: "#FFB800",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
    fontSize: "14px",
    cursor: "pointer",
  },
  orangeLine: {
    width: "60px",
    height: "3px",
    backgroundColor: "#FF8C00",
    marginBottom: "20px",
  },
};
