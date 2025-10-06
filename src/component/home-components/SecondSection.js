"use client";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";

// ✅ All data stored separately for easy replacement (API later)
const coursesData = {
  title: "<span class='blue-text'>Start Your</span> JSS Journey",
  subtitle: "Courses Offered",
  searchPlaceholder: "Search Course",
  programsCount: "200",
  programsText: "academic programs and pave the way to your ideal future.",

  levels: [
    {
      img: "/images/home-page/second-section-banner.png",
      name: "UG",
      link: "/",
    },
    {
      img: "/images/home-page/second-section-banner.png",
      name: "PG",
      link: "/",
    },
    {
      img: "/images/home-page/second-section-banner.png",
      name: "PHD",
      link: "/",
    },
  ],

  schools: [
    { name: "Engineering", link: "#" },
    { name: "Pharmacy", link: "#" },
    { name: "Management", link: "#" },
    { name: "Computer Applications", link: "#" },
    { name: "Applied Sciences", link: "#" },
    { name: "Humanities", link: "#" },
  ],

  admission: {
    year: "2025-26",
    desc: "Sed ut perspiciatis unde omnis",
    applyLink: "#",
  },
};

export default function CoursesOffered() {
  return (
    <>
      <section className="container-fluid second-section">
        <div className="row align-items-center mb-5 top-section">
          {/* Left side */}
          <div className="col-lg-4 mb-4 mb-lg-0">
            <h5 className="text-uppercase small mb-2">
              {coursesData.subtitle}
            </h5>
            <h1
              className="fw-bold"
              dangerouslySetInnerHTML={{ __html: coursesData.title }}
            />

            {/* Search box */}
            <div className="input-group my-4 shadow-sm rounded-pill overflow-hidden">
              <input
                type="text"
                className="form-control border-0"
                placeholder={coursesData.searchPlaceholder}
              />
              <span className="input-group-text bg-white border-0">
                <CiSearch />
              </span>
            </div>

            {/* Programs count */}
            <div className="d-flex align-items-center gap-3">
              <h1 className="display-4 programs-count">
                {coursesData.programsCount}
              </h1>
              <p className="">{coursesData.programsText}</p>
            </div>
          </div>

          {/* Right side cards */}
          <div className="col-lg-8 d-flex justify-content-end gap-3">
            {coursesData.levels.map((level, i) => (
              <Link
                href={level.link}
                key={i}
                className="second-section-cards-image"
              >
                <Image
                  src={level.img}
                  alt="slide image"
                  width={200}
                  height={300}
                  priority
                />
                <span className="banner-label d-flex align-items-center gap-2">
                  {level.name} <FaChevronRight fontSize={15} color="#b08f29" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="row border-top border-bottom align-items-center bottom-section">
          <div className="col-lg-8 pb-4 pt-1 border-end">
            <h6 className="fw-bold mb-3">Explore Programs by School of</h6>
            <div className="d-flex flex-wrap explore-program-section gap-3">
              {coursesData.schools.map((school, i) => (
                <Link
                  href={school.link}
                  key={i}
                  className="py-2 px-4 d-flex justify-content-between align-items-center"
                >
                  {school.name} <FaChevronRight fontSize={10} />
                </Link>
              ))}
            </div>
          </div>

          {/* Admission section */}
          <div className="col-lg-4 d-flex justify-content-between align-items-center ps-5">
            <div>
              <h4 className="fw-bold mb-1">
                Admission{" "}
                <span className="text-primary">
                  {coursesData.admission.year}
                </span>
              </h4>
              <p className="small mb-0">{coursesData.admission.desc}</p>
            </div>
            <Link
              href={coursesData.admission.applyLink}
              className="btn btn-warning rounded-pill px-3"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </section>
      <style jsx>{`
        .second-section {
          padding: 6rem 10rem;
          background: #f6f6f6;
        }
        .programs-count {
          color: #b08f29;
          font-weight: 500;
          font-size: 5rem !important;
        }
        .bottom-section h6 {
          background: #f6f6f6;
          width: fit-content;
          padding-right: 3rem;
          position: relative;
          bottom: 20px;
          font-size: 20px;
          right: 10px;
          margin: 0 !important;
        }
        .programs-count::after {
          content: "+";
          position: relative;
          bottom: 40px;
          font-size: 4rem;
          font-weight: 200;
          right: 10px;
        }
        .programs-count + p {
          font-size: 20px;
        }
        .banner-label {
          color: #fff;
          background: rgba(0, 0, 0, 0.3);
          border-radius: 2px;
          width: 100%;
          padding: 10px 10px;
          font-size: 20px;
          font-weight: 700;
          position: absolute;
          bottom: 0;
          left: 0;
          border-left: 4px solid #ffc100;
        }
        .second-section .top-section {
          width: 100%;
          margin: auto;
        }
        .top-section h1 {
          font-size: 3.5rem;
          text-transform: uppercase;
        }
        .top-section .col-lg-4 {
          width: 30%;
        }
        .top-section .col-lg-8 {
          width: 70%;
        }

        @media (min-width: 1024px) and (max-width: 1420px) {
          .second-section {
            padding: 5rem 5rem;
          }
          .top-section h1 {
            font-size: 2.5rem;
          }
        }
      `}</style>
    </>
  );
}
