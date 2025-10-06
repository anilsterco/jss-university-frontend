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

  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        {/* LEFT COLUMN - Header + Large Card */}
        <div className="column column-left">
          <div className="header-content">
            <p className="testimonials-label">TESTIMONIALS</p>
            <h2 className="main-heading">
              IN <span className="blue-text">CONVERSATION</span>
              <br />
              WITH THE{" "}
              <span className="blue-text">
                JSS
                <br />
                COMMUNITY
              </span>
            </h2>
            <button className="circle-arrow-btn">
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

          <article className="testimonial-card card-naman">
            <div className="card-img-container">
              <Image
                src={naman.img}
                alt={naman.name}
                width={380}
                height={520}
                className="card-img"
              />
              <div className="quote-bar">
                <div className="yellow-line"></div>
                <p className="quote-text-overlay">{naman.quote}</p>
              </div>
            </div>
            <div className="card-info">
              <h3 className="person-name">{naman.name}</h3>
              <p className="person-batch">{naman.batch}</p>
              <p className="person-role">{naman.role}</p>
            </div>
          </article>
        </div>

        {/* MIDDLE COLUMN - Two Cards */}
        <div className="column column-middle">
          <article className="testimonial-card card-yashika rounded-card">
            <div className="card-img-container">
              <Image
                src={yashika.img}
                alt={yashika.name}
                width={340}
                height={280}
                className="card-img"
              />
              {yashika.video && (
                <div className="play-btn">
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
            <div className="card-info">
              <h3 className="person-name">{yashika.name}</h3>
              <p className="person-batch">{yashika.batch}</p>
              <p className="person-role">{yashika.role}</p>
            </div>
          </article>
          <article className="testimonial-card card-yashika rounded-card">
            <div className="card-img-container">
              <Image
                src={yashika.img}
                alt={yashika.name}
                width={340}
                height={280}
                className="card-img"
              />
              {yashika.video && (
                <div className="play-btn">
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
            <div className="card-info">
              <h3 className="person-name">{yashika.name}</h3>
              <p className="person-batch">{yashika.batch}</p>
              <p className="person-role">{yashika.role}</p>
            </div>
          </article>
        </div>

        {/* RIGHT COLUMN - Two Cards */}
        <div className="column column-right">
          <article className="testimonial-card card-nadeem">
            <div className="card-img-container">
              <Image
                src={nadeem.img}
                alt={nadeem.name}
                width={380}
                height={380}
                className=""
              />
              {nadeem.video && (
                <div className="play-btn">
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
            <div className="card-info">
              <h3 className="person-name">{nadeem.name}</h3>
              <p className="person-batch">{nadeem.batch}</p>
              <p className="person-role">{nadeem.role}</p>
            </div>
          </article>

          <article className="testimonial-card card-ritika rounded-card">
            <div className="card-img-container">
              <Image
                src={ritika.img}
                alt={ritika.name}
                width={340}
                height={280}
                className="card-img"
              />
              <div className="quote-bar bottom-quote">
                <div className="yellow-line"></div>
                <p className="quote-text-overlay">{ritika.quote}</p>
              </div>
            </div>
            <div className="card-info">
              <h3 className="person-name">{ritika.name}</h3>
              <p className="person-batch">{ritika.batch}</p>
            </div>
          </article>
        </div>
      </div>

      <style jsx>{`
        .testimonials-section {
          background: #f5f5f5;
          padding: 80px 60px;
        }

        .testimonials-container {
          align-items: flex-start;
          justify-content: center;
          gap: 5rem;
          width: 100%;
          max-width: 100%;
          margin: 0 auto;
          display: flex;
        }

        .column {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .column-left {
          flex: 0 0 auto;
          width: 330px;
        }

        .column-middle {
          flex: 0 0 auto;
          width: 290px;
        }

        .column-right {
          margin-top: 5rem;
          width: 330px;
        }

        /* Header Styling */
        .header-content {
          margin-bottom: 40px;
        }

        .testimonials-label {
          font-size: 15px;
          font-weight: 700;
          color: #000;
          margin: 0 0 16px 0;
        }

        .main-heading {
          font-size: 3rem;
          font-weight: 700;
          line-height: 1.2;
          color: #000;
          margin: 0 0 24px 0;
        }

        .blue-text {
          color: #4a90e2;
        }

        .circle-arrow-btn {
          cursor: pointer;
          color: #666;
          background: 0 0;
          border: 2px solid #ccc;
          border-radius: 50%;
          justify-content: center;
          align-items: center;
          width: 24px;
          height: 24px;
          transition: all 0.3s;
          display: flex;
        }

        .circle-arrow-btn:hover {
          border-color: #4a90e2;
          color: #4a90e2;
        }

        /* Card Styling */
        .testimonial-card {
          border-top-left-radius: 30px;
          border-bottom-right-radius: 30px;
          overflow: hidden;
        }

        .card-img-container {
          position: relative;
          width: 100%;
          overflow: hidden;
        }

        .card-naman .card-img-container {
          height: 100%;
        }

        .card-apoorv .card-img-container {
          height: 400px;
          background: #c8c8c8;
        }

        .card-yashika .card-img-container {
          height: 100%;
        }

        .card-nadeem .card-img-container {
          height: 100%;
        }

        .card-ritika .card-img-container {
          height: 100%;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        /* Gray Placeholder */
        .gray-placeholder {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }

        .placeholder-icon {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
        }

        .placeholder-text {
          font-size: 13px;
          color: #999;
          font-weight: 500;
          margin: 0;
        }

        /* Quote Bar */
        .quote-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 24px;
          background: linear-gradient(
            to top,
            rgba(0, 0, 0, 0.75) 0%,
            rgba(0, 0, 0, 0.4) 60%,
            transparent 100%
          );
        }

        .middle-quote {
          bottom: 60px;
        }

        .bottom-quote {
          bottom: 0;
        }

        .yellow-line {
          width: 40px;
          height: 3px;
          background: #fbbf24;
          margin-bottom: 10px;
        }

        .quote-text-overlay {
          color: white;
          font-size: 13px;
          line-height: 1.5;
          margin: 0;
        }

        /* Play Button */
        .play-btn {
          position: absolute;
          top: 18px;
          right: 18px;
          width: 44px;
          height: 44px;
          background: #fbbf24;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #000;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }

        /* Card Info */
        .card-info {
          padding: 18px 22px;
          background: white;
        }

        .person-name {
          font-size: 15px;
          font-weight: 700;
          color: #000;
          margin: 0 0 4px 0;
          letter-spacing: 0.3px;
        }

        .person-batch {
          font-size: 12px;
          color: #666;
          margin: 0 0 4px 0;
        }

        .person-role {
          font-size: 12px;
          color: #000;
          margin: 0;
          line-height: 1.4;
        }

        /* Responsive */
        @media (max-width: 1200px) {
          .testimonials-container {
            flex-wrap: wrap;
          }

          .column-left,
          .column-middle,
          .column-right {
            width: calc(50% - 14px);
          }
        }

        @media (max-width: 768px) {
          .testimonials-section {
            padding: 60px 20px;
          }

          .testimonials-container {
            flex-direction: column;
          }

          .column-left,
          .column-middle,
          .column-right {
            width: 100%;
          }

          .main-heading {
            font-size: 32px;
          }
        }
      `}</style>
    </section>
  );
}
