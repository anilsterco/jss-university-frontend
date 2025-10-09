"use client";
import Link from "next/link";
import Image from "next/image";
export default function AboutSchool() {
  const stats = [
    {
      rank: "#20",
      label: "ENGINEERING COLLEGES IN UTTAR PRADESH",
      source: "Outlook 2020",
    },
    {
      rank: "#201-250",
      label: "NATIONALLY ENGINEERING RANK (2024)",
      source: "NIRF",
    },
  ];
  const aboutSchoolContent = {
    title:
      "EMPOWERING INNOVATION.<span class='blue-text'> ENGINEERING EXCELLENCE.</span>",
    subtitle: "ABOUT SCHOOL OF ENGINEERING",
    description:
      "Located in the heart of Noida’s academic corridor, the School of Engineering at JSS University stands as a beacon of technical education, innovation, and industry readiness.",
    url: "/",
    chancellor: {
      img: "/images/school-page/about-school-banner.png",
      logo: "/images/home-page/fifth-slider-second-img.png",
      logoContent:
        "Approved by All India Council for Technical Education (AICTE)",
      statsNumber: "28+",
      statsContent: "ACRES CAMPUS AREA",
    },
    highlights: [
      {
        rank: "#20",
        text: "ENGINEERING COLLEGES IN UTTAR PRADESH",
        source: "Outlook 2020",
      },
      {
        rank: "#201-250",
        text: "NATIONALLY ENGINEERING RANK (2024)",
        source: "Nirf ",
      },
    ],
    buttons: [
      { text: "360 VIEW", url: "#1" },
      { text: "WHY JSS", url: "#2" },
      { text: "APPLY NOW", url: "#3" },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: "#e6ffff",
        padding: "5rem 9rem",
      }}
    >
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* LEFT COLUMN */}
          <div className="col-md-6 mb-4">
            <h6 style={{ fontSize: "18px" }}>{aboutSchoolContent.subtitle}</h6>

            <h1
              style={{
                fontWeight: "700",
                fontSize: "50px",
                lineHeight: "1.2",
                marginTop: "10px",
              }}
              dangerouslySetInnerHTML={{ __html: aboutSchoolContent.title }}
            />

            <p
              style={{
                color: "#333",
                fontSize: "15px",
                marginTop: "20px",
                marginBottom: "30px",
                maxWidth: "550px",
              }}
            >
              {aboutSchoolContent.description}
            </p>

            <div>
              <button
                className="btn btn-link p-0 text-decoration-none"
                style={{ fontSize: "24px", color: "#0d1b2a" }}
              >
                →
              </button>
            </div>

            {/* Ranking Cards */}
            <div className="row mt-4 w-100 m-auto">
              {aboutSchoolContent.highlights.map((item, index) => (
                <div className="col-md-6 mb-3" key={index}>
                  <div
                    className="border p-3 bg-white d-flex  flex-wrap"
                    style={{
                      borderRadius: "8px",
                      height: "auto",
                      boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
                    }}
                  >
                    <span
                      style={{
                        color: "#2d9cfd",
                        fontWeight: "600",
                        fontSize: "25px",
                        marginRight: "1rem",
                      }}
                    >
                      {item.rank}
                    </span>
                    <div style={{ width: "60%" }}>
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: "bold",
                          marginBottom: "5px",
                        }}
                      >
                        {item.text}
                      </p>
                      <p
                        style={{
                          fontSize: "16px",
                          fontWeight: "400",
                        }}
                      >
                        {item.source}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-4 about-school-buttons">
              {aboutSchoolContent.buttons.map((btn, i) => (
                <Link
                  key={i}
                  href={btn.url}
                  style={styles.navButtons}
                  className="text-white ms-2"
                >
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN (IMAGE CARD) */}
          <div className="col-md-6 px-5 py-5">
            <div className="card border-0 position-relative">
              <Image
                src={aboutSchoolContent.chancellor.img}
                alt="slide image"
                width={350}
                height={476}
                style={{ width: "100%", height: "auto", borderRadius: "20px" }}
                priority
              />

              {/* Gradient Overlay */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.6) 10%, rgba(0,0,0,0.2) 80%)",
                  borderRadius: "20px",
                }}
              ></div>

              {/* Bottom Left Text */}
              <div
                style={{
                  position: "absolute",
                  bottom: "50px",
                  left: "50px",
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "32px",
                  zIndex: 2,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span style={{ fontSize: "60px", fontWeight: "600" }}>28+</span>
                <span
                  style={{ fontSize: "16px", width: "80%", fontWeight: "400" }}
                >
                  {aboutSchoolContent.chancellor.statsContent}
                </span>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "-20px",
                    height: "220px",
                    width: "3px",
                    backgroundColor: "#f5c518",
                  }}
                ></div>
              </div>

              {/* Bottom Right Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "50px",
                  right: "35px",
                  backgroundColor: "#fff",
                  padding: "15px 15px",
                  borderRadius: "8px",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  width: "40%",
                  zIndex: 2,
                  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                }}
              >
                <Image
                  src={aboutSchoolContent.chancellor.logo}
                  alt="slide image"
                  width={350}
                  height={476}
                  style={{
                    width: "20%",
                    height: "auto",
                    borderRadius: "20px",
                  }}
                  priority
                />
                <span style={{ fontSize: "12px", color: "#000" }}>
                  {aboutSchoolContent.chancellor.logoContent}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  navButtons: {
    background: "#16344e",
    padding: ".5rem 1.5rem",
    color: "#fff",
  },
};
