// components/home-components/CoursesOffered/index.js
"use client";
import Link from "next/link";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa";
import { PiArrowCircleRightThin } from "react-icons/pi";
import styles from "./courses-offered.module.css";

// ✅ All data stored separately for easy replacement (API later)
const dummyCoursesData = {
  // title: "Start Your JSS Journey",
  title:
    '<span class="blue-text">Start Your</span> <span class="dark-blue-text ">JSS Journey</span>',
  subtitle: "Courses Offered",
  programs_count: "200",
  programs_text: "academic programs and pave the way to your ideal future.",

  programs: [
    {
      image: "/images/home-page/second-section-banner.png",
      name_short: "UG",
      slug: "/",
    },
    {
      image: "/images/home-page/second-section-banner.png",
      name_short: "PG",
      slug: "/",
    },
    {
      image: "/images/home-page/second-section-banner.png",
      name_short: "PHD",
      slug: "/",
    },
  ],

  departments: [
    { short_name: "Engineering", slug: "#" },
    { short_name: "Pharmacy", slug: "#" },
    { short_name: "Management", slug: "#" },
    { short_name: "Computer Applications", slug: "#" },
    { short_name: "Applied Sciences", slug: "#" },
    { short_name: "Humanities", slug: "#" },
  ],

  admission: {
    year: "2025-26",
    desc: "Sed ut perspiciatis unde omnis",
    applyLink: "#",
  },
  academic_year: {
    year: `<span class="dark-blue-text ">Admission</span><span class="blue-text"> 2025-26</span>`,
    description: "Sed ut perspiciatis unde omnis",
  },
  buttons: [
    {
      text: "Apply Now",
      url: "https://project-demo.in/jss/api/homepage",
    },
  ],
};

export default function CoursesOffered({ data }) {
  const coursesData = data ? data : dummyCoursesData;
  const ProgramsCount = () => (
    <div className={styles.programsCountWrapper}>
      <h1 className={`display-4 programs-count ${styles.programsCount}`}>
        {coursesData.programs_count}
      </h1>
      <span className={styles.programsCountPlus}>+</span>
    </div>
  );

  return (
    <>
      <section className={`second-section cource-sec ${styles.secondSection}`}>
        <div className="container">
          <div className={`row cource_top ${styles.topSection}`}>
            {/* Left side */}
            <div className="col-lg-4 mb-4 mb-lg-0">
              <h5 className={`${styles.topSectionH5}`}>
                {coursesData.subtitle}
              </h5>
              <h1
                className={`fw-bold  ${styles.topSectionH1}`}
                dangerouslySetInnerHTML={{ __html: coursesData.title }}
              ></h1>
              <p className={styles.showOnlyMobileSubHeading}>
                {coursesData.programs_text}
              </p>
              {/* Search box */}
              <div
                className={`input-group shadow-sm rounded-pill overflow-hidden ${styles.searchBox}`}
              >
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="Search Course"
                />
                <span className="input-group-text bg-white border-0">
                  {/* <CiSearch /> */}
                  <img
                    src="images/home-page/icon-search.svg"
                    className="img-fluid"
                    alt="search"
                  />
                </span>
              </div>

              {/* Programs count */}
              <div
                className={`d-flex align-items-center  ${styles.programsCountSection}`}
              >
                <ProgramsCount />
                <p className={styles.programsText}>
                  {coursesData.programs_text}
                </p>
              </div>
            </div>

            {/* Right side cards */}
            <div
              className={`col-lg-8 d-flex gap-3 ${styles.programsCardsSection}`}
            >
              {coursesData.programs.map((level, i) => (
                <Link
                  href={`/programs`}
                  // ${level.slug}
                  key={i}
                  className="second-section-cards-image position-relative"
                >
                  <Image
                    src={level.image}
                    alt="slide image"
                    width={200}
                    height={300}
                    className={styles.cardImage}
                    priority
                  />
                  <div className={styles.cardOverlay}>
                    <span
                      className={`banner-label d-flex align-items-center gap-2 ${styles.bannerLabel}`}
                    >
                      {level.name_short}{" "}
                      <FaChevronRight
                        fontSize={15}
                        color="#b08f29"
                        className={styles.rightDesktopArrow}
                      />
                      <PiArrowCircleRightThin
                        fontSize={20}
                        color="#fff"
                        className={styles.rightMobileArrow}
                      />
                    </span>
                  </div>
                </Link>
              ))}
              <div className={`course-items ${styles.showOnlyMobileCard}`}>
                <Link href="#" className={styles.exploreAllLink}>
                  <div className={styles.lastCardContentSection}>
                    <p>Explore All</p>
                    <h1 className="blue-text">26+</h1>
                    <h5>ACADEMIC PROGRAMS</h5>
                  </div>
                  <div className={styles.lastCardArrow}>
                    <PiArrowCircleRightThin fontSize={20} color="#16344E" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Bottom section */}
          <div
            className={`row  align-items-center program-row m-auto ${styles.exploreProgramSectionWrapper}`}
          >
            <div className="col-lg-8">
              <h6 className={`fw-bold  ${styles.bottomSectionH6}`}>
                Explore Programs by School of
              </h6>
              <div
                className={`d-flex flex-wrap explore-program-section gap-3 ${styles.schoolsList}`}
              >
                {coursesData.departments.map((school, i) => (
                  <Link
                    href={`/schools/${school.slug}`}
                    key={i}
                    className=" d-flex justify-content-between align-items-center"
                  >
                    {school.short_name}{" "}
                    <FaChevronRight fontSize={10} color="#16344ec4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Admission section */}
            <div
              className={`col-lg-4 d-flex gap-5 align-items-center ${styles.admissionSection}`}
            >
              <div className="addmission-col">
                <h4
                  className="fw-bold add-item"
                  dangerouslySetInnerHTML={{
                    __html: coursesData.academic_year.year,
                  }}
                ></h4>
                <p className="small">{coursesData.academic_year.description}</p>
              </div>
              {coursesData.buttons[0].url && (
                <Link
                  href={coursesData.buttons[0].url}
                  className="btn btn-warning rounded-pill"
                >
                  {coursesData.buttons[0].text}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
