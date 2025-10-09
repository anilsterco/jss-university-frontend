// app/page.js or pages/index.js
"use client"; // if using Next.js App Router
import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
import Link from "next/link";

export default function HomePage() {
  // In future, these can be fetched dynamically (from API or JSON)
  const departmentSection = {
    title: "<span class='blue-text'>Start Your</span> JSS Journey",
    desc: "Leading the revolution in integrated learning where students shape their own future.",
    programsCount: "200",
    programsText: "SED UT PERSPICIATIS UNDE",
    imageContent: [
      {
        name: "UNDER GRADUTE",
        img: "/images/school-page/department-dummy-banner.png",
        url: "#a",
      },
      {
        name: "POST GRADUTE",
        img: "/images/school-page/department-dummy-banner.png",
        url: "#b",
      },
      {
        name: "PHD",
        img: "/images/school-page/department-dummy-banner.png",
        url: "#c",
      },
    ],
    browseDepartmentSection: [
      {
        name: "ELECTRICAL ENGINEERING",
        url: "#1",
      },
      {
        name: "MECHANICAL ENGINEERING",
        url: "#2",
      },
      {
        name: "COMPUTER SCIENCE AND ENGINEERING",
        url: "#3",
      },
      {
        name: "ROBOTICS AND ARTIFICIAL INTELLIGENCE",
        url: "#4",
      },
      {
        name: "ELECTRICAL & ELECTRONICS ENGINEERING",
        url: "#5",
      },
      {
        name: "ELECTRONICS AND COMMUNICATION ENGINEERING",
        url: "#6",
      },
    ],
  };

  return (
    <div
      style={{
        backgroundColor: "#f6f6f6",
        minHeight: "100vh",
        padding: "6rem 10rem 5rem 10rem",
      }}
    >
      <div className="container-fluid" style={{ borderBottom: "1px solid #d1cbcb", paddingBottom: "4rem" }}>
        <div className="row  justify-content-center">
          {/* LEFT SIDE */}
          <div className="col-md-3 d-flex flex-column justify-content-between">
            <div style={{ marginTop: "4rem" }}>
              <h1
                dangerouslySetInnerHTML={{ __html: departmentSection.title }}
                style={{ fontWeight: "bold", lineHeight: "1.2", fontSize: "55px" }}
              />
              <p style={{ marginTop: "15px" }}>{departmentSection.desc}</p>
            </div>

            <div style={{ marginBottom: "2rem" }}>
              <h3 style={{ color: "#16344e", fontSize: "60px" }}>
                {departmentSection.programsCount}+
              </h3>
              <p
                style={{ fontSize: "14px", fontWeight: "700" }}
                className="mb-5"
              >
                {departmentSection.programsText}
              </p>
              <button
                className="btn btn-outline-dark mb-2"
                style={{
                  borderRadius: "0",
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                VIEW ALL PROGRAMMES →
              </button>
              <br />
              <button
                className="btn text-white mb-2"
                style={{
                  borderRadius: "0",
                  fontSize: "14px",
                  fontWeight: "600",
                  width: "120px",
                  backgroundColor: "#b08f29",
                }}
              >
                APPLY NOW
              </button>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="col-md-9">
            {/* Program Cards */}

            {/* Program Cards */}
            <div className="row mb-5 w-100 m-auto">
              {departmentSection.imageContent.map((prog, index) => (
                // <Link href={prog.url} key={index}>
                <div className="col-md-4 mb-4" key={index}>
                  <Link href={prog.url} key={index}>
                    <div
                      className="card text-white border-0 position-relative"
                      style={{
                        borderRadius: "10px",
                        borderTopLeftRadius: "55px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={prog.img}
                        alt="slide image"
                        width={350}
                        height={476}
                        style={{ width: "100%", height: "auto" }}
                        priority
                      />
                      <div
                        style={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.6), rgba(0,0,0,0.1))",
                        }}
                      ></div>

                      <div
                        style={{
                          position: "absolute",
                          bottom: "20px",
                          left: "20px",
                          fontWeight: "bold",
                          fontSize: "20 px",
                          zIndex: 2,
                        }}
                      >
                        {prog.name}
                      </div>

                      <div
                        style={{
                          position: "absolute",
                          bottom: "20px",
                          right: "25px",
                          fontSize: "20px",
                          zIndex: 2,
                        }}
                      >
                        <SlArrowRightCircle fontWeight={300} />
                      </div>
                    </div>
                  </Link>
                </div>
                // </Link>
              ))}
            </div>

            {/* Browse by Department */}
            <h6
              style={{
                color: "#b59c50",
                fontWeight: "bold",
              }}
              className="d-flex gap-1 align-items-center justify-content-between"
            >
              <p className="m-0">BROWSE BY DEPARTMENT</p>
              <span
                style={{
                  width: "75%",
                  height: "2px",
                  display: "block",
                  background: "#b29d542e",
                  top: "10px",
                  right: "0",
                }}
              />
            </h6>

            <hr style={{ borderColor: "#eee" }} />

            <div className="row">
              {departmentSection.browseDepartmentSection.map((dept, index) => (
                <div className="col-md-4 mb-3" key={index}>
                  <Link href={dept.url} key={index}>
                    <div
                      className="d-flex justify-content-between align-items-center p-3  bg-white"
                      style={{
                        fontWeight: "bold",
                        color: "#0d1b2a",
                        borderRadius: "4px",
                        cursor: "pointer",
                        fontSize: "17px",
                      }}
                    >
                      {dept.name}
                      <span style={{ fontSize: "18px", color: "#868585ff" }}>
                        <SlArrowRightCircle />
                      </span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  borderBottom: {
    content: "",
    width: "80%",
    height: "2px",
    display: "block",
    background: "#b29d542e",
    position: "absolute",
    top: "10px",
    right: "0",
  },
};
