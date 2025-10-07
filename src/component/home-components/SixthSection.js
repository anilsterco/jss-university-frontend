"use client";
import Image from "next/image";

const testimonialsData = [
  {
    name: "NAMAN SUKHIJA",
    batch: "B. Tech (CE), 2012-16 Batch",
    role: "Designer & Certifier, Passive House Institute, Germany",
    img: "/images/home-page/sixth-section-first-banner.png",
    quote: "Studying at JSS Noida has been a transformative journey...",
  },
  {
    name: "APOORV SHIKHAR",
    batch: "B. Tech (ES), 2013-17 Batch",
    role: "Junior Research Fellow, GB Pant National Institute of Himalayan Environment, Uttarakhand",
    img: "/images/home-page/sixth-section-fifth-banner.png",
    quote:
      "I have gained both theoretical and practical knowledge and was exposed to real-world challenges.",
  },
  {
    name: "YASHIKA MATHUR",
    batch: "B. Tech (CE), 2013-17 Batch",
    role: "Counsellor – Engineering Design, Design2Occupancy Services LLP",
    img: "/images/home-page/sixth-section-third-banner.png",
    // video: true,
  },
  {
    name: "NADEEM KHAN",
    batch: "B. Tech (ME), 2015-19 Batch",
    role: "Project Mechanical Engineer, JK Paper Ltd, Unit CPM, Gujarat",
    img: "/images/home-page/sixth-section-fourth-banner.png",
    // video: true,
  },
  {
    name: "RITIKA SHARMA",
    batch: "B. Tech (CSE), Batch of 2024",
    role: "",
    img: "/images/home-page/sixth-section-fifth-banner.png",
    quote:
      "JSS University has truly shaped my journey—both academically and personally.",
  },
];

export default function TestimonialsSection() {
  const [naman, apoorv, yashika, nadeem, ritika] = testimonialsData;

  const styles = {
    testimonialsSection: {
      background: '#f5f5f5',
      padding: '80px 60px',
    },
    testimonialsContainer: {
      alignItems: 'flex-start',
      justifyContent: 'center',
      gap: '5rem',
      width: '100%',
      maxWidth: '100%',
      margin: '0 auto',
      display: 'flex',
    },
    column: {
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
    },
    columnLeft: {
      flex: '0 0 auto',
      width: '330px',
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
    },
    columnMiddle: {
      flex: '0 0 auto',
      width: '290px',
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
    },
    columnRight: {
      marginTop: '5rem',
      width: '330px',
      display: 'flex',
      flexDirection: 'column',
      gap: '28px',
    },
    headerContent: {
      marginBottom: '40px',
    },
    testimonialsLabel: {
      fontSize: '15px',
      fontWeight: '700',
      color: '#000',
      margin: '0 0 16px 0',
    },
    mainHeading: {
      fontSize: '3rem',
      fontWeight: '700',
      lineHeight: '1.2',
      color: '#000',
      margin: '0 0 24px 0',
    },
    blueText: {
      color: '#4a90e2',
    },
    circleArrowBtn: {
      cursor: 'pointer',
      color: '#666',
      background: 'transparent',
      border: '2px solid #ccc',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      width: '24px',
      height: '24px',
      transition: 'all 0.3s',
      display: 'flex',
    },
    testimonialCard: {
      borderTopLeftRadius: '30px',
      borderBottomRightRadius: '30px',
      overflow: 'hidden',
    },
    cardImgContainer: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
    },
    cardImgContainerNaman: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      height: '100%',
    },
    cardImgContainerYashika: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      height: '100%',
    },
    cardImgContainerNadeem: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      height: '100%',
    },
    cardImgContainerRitika: {
      position: 'relative',
      width: '100%',
      overflow: 'hidden',
      height: '100%',
    },
    cardImg: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
    },
    quoteBar: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      padding: '20px 24px',
      background: 'linear-gradient(to top, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.4) 60%, transparent 100%)',
    },
    yellowLine: {
      width: '40px',
      height: '3px',
      background: '#fbbf24',
      marginBottom: '10px',
    },
    quoteTextOverlay: {
      color: 'white',
      fontSize: '13px',
      lineHeight: '1.5',
      margin: '0',
    },
    playBtn: {
      position: 'absolute',
      top: '18px',
      right: '18px',
      width: '44px',
      height: '44px',
      background: '#fbbf24',
      borderRadius: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
      cursor: 'pointer',
    },
    cardInfo: {
      padding: '18px 22px',
      background: 'white',
    },
    personName: {
      fontSize: '15px',
      fontWeight: '700',
      color: '#000',
      margin: '0 0 4px 0',
      letterSpacing: '0.3px',
    },
    personBatch: {
      fontSize: '12px',
      color: '#666',
      margin: '0 0 4px 0',
    },
    personRole: {
      fontSize: '12px',
      color: '#000',
      margin: '0',
      lineHeight: '1.4',
    },
  };

  return (
    <section style={styles.testimonialsSection}>
      <div style={styles.testimonialsContainer}>
        {/* LEFT COLUMN - Header + Large Card */}
        <div style={styles.columnLeft}>
          <div style={styles.headerContent}>
            <p style={styles.testimonialsLabel}>TESTIMONIALS</p>
            <h2 style={styles.mainHeading}>
              IN <span style={styles.blueText}>CONVERSATION</span>
              <br />
              WITH THE{" "}
              <span style={styles.blueText}>
                JSS
                <br />
                COMMUNITY
              </span>
            </h2>
            <button style={styles.circleArrowBtn}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <article style={styles.testimonialCard}>
            <div style={styles.cardImgContainerNaman}>
              <Image
                src={naman.img}
                alt={naman.name}
                width={380}
                height={520}
                style={styles.cardImg}
              />
              <div style={styles.quoteBar}>
                <div style={styles.yellowLine}></div>
                <p style={styles.quoteTextOverlay}>{naman.quote}</p>
              </div>
            </div>
            <div style={styles.cardInfo}>
              <h3 style={styles.personName}>{naman.name}</h3>
              <p style={styles.personBatch}>{naman.batch}</p>
              <p style={styles.personRole}>{naman.role}</p>
            </div>
          </article>
        </div>

        {/* MIDDLE COLUMN - Two Cards */}
        <div style={styles.columnMiddle}>
          <article style={styles.testimonialCard}>
            <div style={styles.cardImgContainerYashika}>
              <Image
                src={yashika.img}
                alt={yashika.name}
                width={340}
                height={280}
                style={styles.cardImg}
              />
              {yashika.video && (
                <div style={styles.playBtn}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </div>
            <div style={styles.cardInfo}>
              <h3 style={styles.personName}>{yashika.name}</h3>
              <p style={styles.personBatch}>{yashika.batch}</p>
              <p style={styles.personRole}>{yashika.role}</p>
            </div>
          </article>
          <article style={styles.testimonialCard}>
            <div style={styles.cardImgContainerYashika}>
              <Image
                src={yashika.img}
                alt={yashika.name}
                width={340}
                height={280}
                style={styles.cardImg}
              />
              {yashika.video && (
                <div style={styles.playBtn}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </div>
            <div style={styles.cardInfo}>
              <h3 style={styles.personName}>{yashika.name}</h3>
              <p style={styles.personBatch}>{yashika.batch}</p>
              <p style={styles.personRole}>{yashika.role}</p>
            </div>
          </article>
        </div>

        {/* RIGHT COLUMN - Two Cards */}
        <div style={styles.columnRight}>
          <article style={styles.testimonialCard}>
            <div style={styles.cardImgContainerNadeem}>
              <Image
                src={nadeem.img}
                alt={nadeem.name}
                width={380}
                height={380}
                style={styles.cardImg}
              />
              {nadeem.video && (
                <div style={styles.playBtn}>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              )}
            </div>
            <div style={styles.cardInfo}>
              <h3 style={styles.personName}>{nadeem.name}</h3>
              <p style={styles.personBatch}>{nadeem.batch}</p>
              <p style={styles.personRole}>{nadeem.role}</p>
            </div>
          </article>

          <article style={styles.testimonialCard}>
            <div style={styles.cardImgContainerRitika}>
              <Image
                src={ritika.img}
                alt={ritika.name}
                width={340}
                height={280}
                style={styles.cardImg}
              />
              <div style={styles.quoteBar}>
                <div style={styles.yellowLine}></div>
                <p style={styles.quoteTextOverlay}>{ritika.quote}</p>
              </div>
            </div>
            <div style={styles.cardInfo}>
              <h3 style={styles.personName}>{ritika.name}</h3>
              <p style={styles.personBatch}>{ritika.batch}</p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}