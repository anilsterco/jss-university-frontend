"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowRightCircle } from "react-icons/fi";
import { usePathname } from "next/navigation";
import { IoChevronDownOutline, IoTriangleSharp } from "react-icons/io5";
import '@fontsource/roboto-condensed';


export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [engineeringDropdown, setEngineeringDropdown] = useState(false);
  const [selectedSchool, setSelectedSchool] = useState(0);
  const [selectedSchoolName, setSelectedSchoolName] = useState("ENGINEERING");
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const admissionRef = useRef(null);
  const engineeringRef = useRef(null);
  const navLinks = [
    {
      name: "ABOUT",
      href: "/",
      dropdown: [
        { name: "About JSS", href: "/" },
        { name: "Heritage", href: "/" },
      ],
      right: {
        subtitle: "ABOUT JSS",
        title: "Know Our Heritage",
        desc: "Learn more about JSS legacy, history and leadership.",
        ctas: [
          { text: "Read More", href: "#", type: "primary" },
          { text: "Leadership", href: "#", type: "secondary" },
        ],
        banners: [
          {
            title: "UNDER GRADUTE",
            href: "#",
            img: "/images/header/nav-hover-banner.png",
          },
          {
            title: "POST GRADUTE",
            href: "#",
            img: "/images/nav-hover-banner.png",
          },
          { title: "PHD", href: "#", img: "/images/nav-hover-banner.png" },
        ],
      },
    },
    {
      name: "ACADEMICS",
      href: "/",
      dropdown: [
        { name: "Schools", href: "/" },
        { name: "Departments", href: "/" },
        { name: "Programs", href: "/" },
      ],
      right: {
        subtitle: "EXPLORE ACADEMICS",
        title: "Learning at JSS",
        desc: "Offering UG, PG and PhD programmes with global standards.",
        ctas: [{ text: "VIEW ALL PROGRAMMES", href: "#", type: "primary" }],
        banners: [
          {
            title: "Under Graduate",
            href: "#",
            img: "/images/nav-hover-banner.png",
          },
          {
            title: "Post Graduate",
            href: "#",
            img: "/images/nav-hover-banner.png",
          },
          {
            title: "PhD Programmes",
            href: "#",
            img: "/images/nav-hover-banner.png",
          },
        ],
      },
    },
    {
      name: "ADMISSIONS",
      href: "/",
      dropdown: [
        { name: "Overview", href: "/" },
        { name: "Admission", href: "/" },
        { name: "UG Program", href: "/" },
      ],
      right: {
        subtitle: "JOIN JSS",
        title: "Admissions Open 2025-26",
        desc: "Apply now and step into your future at JSS Noida.",
        ctas: [
          { text: "Apply Now", href: "#", type: "primary" },
          { text: "Download Syllabus", href: "#", type: "secondary" },
        ],
        banners: [
          { title: "Scholarships", href: "#", img: "/images/banner1.png" },
          { title: "Eligibility", href: "#", img: "/images/banner2.png" },
          { title: "FAQs", href: "#", img: "/images/banner3.png" },
        ],
      },
    },
    {
      name: "FACILITIES",
      href: "/",
      dropdown: [
        { name: "Girls Hostel", href: "/" },
        { name: "Boys Hostel", href: "/" },
        { name: "Amenities Centre", href: "/" },
      ],
      right: {
        subtitle: "CAMPUS FACILITIES",
        title: "Modern & Student Friendly",
        desc: "Hostels, clubs, amenities and more for a vibrant campus life.",
        ctas: [{ text: "Explore Facilities", href: "#", type: "primary" }],
        banners: [
          { title: "Hostels", href: "#", img: "/images/banner1.png" },
          { title: "Clubs", href: "#", img: "/images/banner2.png" },
          { title: "Events", href: "#", img: "/images/banner3.png" },
        ],
      },
    },
    {
      name: "STUDENTS SUPPORT",
      href: "/",
      dropdown: [
        { name: "Student Life", href: "/" },
        { name: "Mentoring Scheme", href: "/" },
        { name: "Internal Complaint Committee", href: "/" },
      ],
      right: {
        subtitle: "SUPPORT & LIFE",
        title: "Helping Students Thrive",
        desc: "Guidance, mentoring and vibrant student support activities.",
        ctas: [{ text: "Get Support", href: "#", type: "primary" }],
        banners: [
          { title: "Life @ JSS", href: "#", img: "/images/banner1.png" },
          { title: "Mentoring", href: "#", img: "/images/banner2.png" },
          { title: "Clubs", href: "#", img: "/images/banner3.png" },
        ],
      },
    },
  ];

  const hamburgerMenudata = [
    {
      name: "About JSS University",
      subMenu: ["Overview", "Scholarships", "International Students"],
      firstContent: {
        title:
          "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
        desc: "The Genesis of the social-educational-spritual philosophy.",
        img: "/images/header/humburger-first-banner.png",
        alt: "hambuger banner",
        url: "/",
      },
      secondContent: {
        title: "<span class='blue-text'>21+</span> Acres",
        desc: "Campus Area of the social-educational-spritual philosophy.",
        img: "/images/header/humburger-second-banner.png",
        alt: "hambuger banner",
        url: "/",
      },
    },
    {
      name: "Academics",
      subMenu: ["Undergraduate", "Postgraduate", "Doctoral"],
      firstContent: {
        title:
          "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
        desc: "The Genesis of the social-educational-spritual philosophy.",
        img: "/images/header/humburger-first-banner.png",
        alt: "hambuger banner",
        url: "/",
      },
      secondContent: {
        title: "<span class='blue-text'>21+</span> Acres",
        desc: "Campus Area of the social-educational-spritual philosophy.",
        img: "/images/header/humburger-second-banner.png",
        alt: "hambuger banner",
        url: "/",
      },
    },
    {
      name: "Facilities",
      subMenu: ["Hostels", "Clubs & Societies", "Events"],
      firstContent: {
        title:
          "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
        desc: "The Genesis of the social-educational-spritual philosophy.",
        img: "/images/header/humburger-first-banner.png",
        alt: "hambuger banner",
        url: "/",
      },
      secondContent: {
        title: "<span class='blue-text'>21+</span> Acres",
        desc: "Campus Area of the social-educational-spritual philosophy.",
        img: "/images/header/humburger-second-banner.png",
        alt: "hambuger banner",
        url: "/",
      },
    },
    {
      name: "Students Support",
      subMenu: ["Apply Now", "Eligibility", "FAQs"],
      firstContent: {
        title:
          "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
        desc: "The Genesis of the social-educational-spritual philosophy.",
        img: "/images/header/humburger-first-banner.png",
        alt: "hambuger banner",
        url: "/",
      },
      secondContent: {
        title: "<span class='blue-text'>21+</span> Acres",
        desc: "Campus Area of the social-educational-spritual philosophy.",
        img: "/images/header/humburger-second-banner.png",
        alt: "hambuger banner",
        url: "/",
      },
    },
  ];

  const admissionsData = {
    left: {
      subtitle: "JOIN JSSATE NOIDA FOR 2025-26",
      title: "STEP INTO YOUR FUTURE AT JSS NOIDA",
      desc: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo.",
      email: "principal@jssaten.ac.in",
      phone: "+91-9311830458",
      ctas: [
        { text: "APPLY NOW", href: "#", type: "primary" },
        { text: "DOWNLOAD SYLLABUS", href: "#", type: "secondary" },
      ],
    },
    middle: {
      links: [
        "Scholarship",
        "Course, Eligibility & Fee Structure",
        "Admission Document & Undertaking",
        "Admissions Office Contacts",
        "Hostel Details",
      ],
      stats: {
        text: "1,200+ ACROSS UG & PG PROGRAMS",
        subtext: "Total student intake (annual)",
        btnText: "VIEW PROGRAMMES",
      },
    },
    right: {
      img: "/images/header/admission-banner.png",
      alt: "Admissions Image",
    },
  };
  const engineeringData = {
    schools: [
      {
        name: "Computer Science & Engineering",
        departments: [
          {
            text: "Artificial Intelligence",
            url: "/",
          },
          {
            text: "Data Science",
            url: "/",
          },
          {
            text: "Cyber Security",
            url: "/",
          },
          {
            text: "IoT and Cloud",
            url: "/",
          },
        ],
      },
      {
        name: "Electronics & Communication",
        departments: [
          {
            text: "Data Science",
            url: "/",
          },
          {
            text: "Cyber Security",
            url: "/",
          },
          {
            text: "Artificial Intelligence",
            url: "/",
          },
          {
            text: "IoT and Cloud",
            url: "/",
          },
        ],
      },
      {
        name: "Mechanical Engineering",
        departments: [
          {
            text: "Artificial Intelligence",
            url: "/",
          },
          {
            text: "Data Science",
            url: "/",
          },
          {
            text: "Cyber Security",
            url: "/",
          },
          {
            text: "IoT and Cloud",
            url: "/",
          },
        ],
      },
      {
        name: "Electronics & Communication",
        departments: [
          {
            text: "Data Science",
            url: "/",
          },
          {
            text: "Cyber Security",
            url: "/",
          },
          {
            text: "Artificial Intelligence",
            url: "/",
          },
          {
            text: "IoT and Cloud",
            url: "/",
          },
        ],
      },
    ],
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  const openMenu = () => {
    setMenuOpen(true);
    setActiveIndex(0);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveIndex(null);
  };

  useEffect(() => {
    if (!isMounted) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        setAdmissionOpen(false);
        setEngineeringDropdown(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMounted]);

  useEffect(() => {
    if (!isMounted) return;

    const handleClickOutside = (e) => {
      if (admissionRef.current && !admissionRef.current.contains(e.target)) {
        setAdmissionOpen(false);
      }
      if (
        engineeringRef.current &&
        !engineeringRef.current.contains(e.target) &&
        // also allow clicking the toggle button without closing
        !e.target.closest(".school-toggle")
      ) {
        setEngineeringDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMounted]);

  const activeData = hamburgerMenudata[activeIndex] || hamburgerMenudata[0];

  if (!isMounted) {
    return (
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          height: "80px",
        }}
      ></header>
    );
  }

  return (
    <header className="site-header">
      <div className={`nav-container ${scrolled ? "header-scrolled" : ""}`}>
        <div className="brand-wrap logo-content">
          <Link href="/" aria-label="Home" className="d-flex gap-4">
            <Image
              src="/images/header/header-logo.png"
              className="site-logo"
              alt="Site Logo" width={299} height={108} priority/>
            {/* <div className="logo-text">
              <div className="d-flex  align-items-center gap-2">
                <div>
                  <h1
                    className={`${
                      scrolled ? "dark-blue-text" : ""
                    } mb-0 logo-primary-text`}
                  >
                    NAAC
                  </h1>
                  <h1
                    className={`${
                      scrolled ? "dark-blue-text" : ""
                    } mb-0 logo-secondry-text`}
                  >
                    GRADE
                  </h1>
                </div>
                <h1
                  className={`${
                    scrolled ? "yellow-text" : ""
                  } mb-0 logo-tertiary-text`}
                >
                  A
                </h1>
              </div>
              <p className={`${scrolled ? "text-dark" : ""} mb-0`}>
                JSS is NAAC 'A' Grade Accredited
              </p>
            </div> */}
          </Link>
        </div>

        {pathname === "/schools" && (
          <>
            <div
              className="school-toggle"
              onClick={() => setEngineeringDropdown((prev) => !prev)}
            >
              <p className="mb-0">School of</p>
              <h5 className="fw-bold">
                {selectedSchoolName} <IoChevronDownOutline fontSize={15} />
              </h5>
            </div>

            {engineeringDropdown && (
              <div
                className="engineering-dropdown-container"
                ref={engineeringRef}
              >
                <div className="engineering-dropdown">
                  {/* LEFT SIDE: Schools List */}
                  <div className="schools-list">
                    <h6>Schools</h6>
                    {engineeringData.schools.map((school, idx) => (
                      <div
                        key={idx}
                        className={`school-item ${
                          selectedSchool === idx ? "active" : ""
                        }`}
                        onClick={() => {
                          setSelectedSchool(idx);
                          setSelectedSchoolName(school.name);
                        }}
                      >
                        {school.name}
                      </div>
                    ))}
                  </div>

                  {/* RIGHT SIDE: Departments */}
                  <div className="departments-list">
                    <span className="dropdown-arrow"></span>
                    <h6 className="text-white">Department</h6>
                    <div className="link-content">
                      {engineeringData.schools[selectedSchool].departments.map(
                        (dept, i) => (
                          <Link
                            href={dept.url}
                            key={i}
                            className="department-links text-white"
                          >
                            {dept.text}
                          </Link>
                        )
                      )}
                    </div>
                    <IoTriangleSharp className="triangle-icon" />
                  </div>
                </div>
              </div>
            )}
          </>
        )}

        <div className="right-navbar">
          <nav className="desktop-nav" aria-label="Main navigation">
            <ul className="nav-list">
              {navLinks.map((l, i) => (
                <li
                  key={i}
                  className="nav-item"
                  onClick={() => setActiveLink(i)}
                >
                  <Link
                    href={l.href}
                    className={`nav-link nav-lists  ${
                      activeLink == i ? "active-link" : ""
                    }`}
                  >
                    {l.name}
                  </Link>
                  {l.dropdown && (
                    <div className="mega-dropdown" role="menu">
                      <div className="mega-left">
                        <ul>
                          {l.dropdown.map((d, j) => (
                            <li key={j} className="mega-left-item">
                              <Link href={d.href} className="dropdown-item">
                                {d.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mega-right">
                        {l.right ? (
                          <>
                            <div className="mega-right-text">
                              <p className="mega-subtitle">
                                {l.right.subtitle}
                              </p>
                              <h2 className="mega-title">{l.right.title}</h2>
                              <p className="mega-desc">{l.right.desc}</p>
                              <div className="mega-ctas">
                                {l.right.ctas?.map((cta, idx) => (
                                  <a
                                    key={idx}
                                    href={cta.href}
                                    className={`cta ${cta.type}`}
                                  >
                                    {cta.text}
                                  </a>
                                ))}
                              </div>
                            </div>

                            <div className="mega-right-banners">
                              {l.right.banners?.map((b, idx) => (
                                <a key={idx} href={b.href} className="banner">
                                  <Image
                                    src={b.img}
                                    alt={b.title}
                                    width={260}
                                    height={160}
                                  />
                                  <span className="banner-label">
                                    {b.title}
                                  </span>
                                </a>
                              ))}
                            </div>
                          </>
                        ) : (
                          <div className="mega-right-text">
                            <h3 className="mega-title">
                              {l.dropdown && l.dropdown[0]?.name}
                            </h3>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="right-navbar-section">
            <div className="admission-wrap" ref={admissionRef}>
              <button
                className="admission-btn"
                onClick={() => setAdmissionOpen((prev) => !prev)}
              >
                ADMISSIONS
              </button>

              {admissionOpen && (
                <div className="admission-dropdown">
                  <span className="dropdown-arrow"></span>
                  <div className="ad-left">
                    <p className="ad-subtitle">
                      {admissionsData.left.subtitle}
                    </p>
                    <h2 className="ad-title">{admissionsData.left.title}</h2>
                    <p className="ad-desc">{admissionsData.left.desc}</p>
                    <div className="ad-contact">
                      <p>📧 {admissionsData.left.email}</p>
                      <p>📞 {admissionsData.left.phone}</p>
                    </div>
                    <div className="ad-ctas">
                      {admissionsData.left.ctas.map((cta, idx) => (
                        <a
                          key={idx}
                          href={cta.href}
                          className={`cta ${cta.type}`}
                        >
                          {cta.text}
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="ad-middle">
                    <ul>
                      {admissionsData.middle.links.map((link, idx) => (
                        <li key={idx} className="ad-link">
                          {link} →
                        </li>
                      ))}
                    </ul>
                    <div className="ad-stats">
                      <h3>{admissionsData.middle.stats.text}</h3>
                      <p>{admissionsData.middle.stats.subtext}</p>
                      <button className="stats-btn">
                        {admissionsData.middle.stats.btnText} →
                      </button>
                    </div>
                  </div>

                  {admissionsData.right && (
                    <div className="ad-right">
                      <Image
                        src={admissionsData.right.img}
                        alt={admissionsData.right.alt}
                        width={400}
                        height={400}
                        className="addmision-section-img"
                      />
                    </div>
                  )}
                </div>
              )}
            </div>

            <button
              aria-label="Open menu"
              className="hamburger"
              onClick={openMenu}
            >
              <Image
              src="/images/header/hum-icon.svg"
              className="site-logo"
              alt="Site Logo" width={17} height={16} priority/>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`backdrop ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      <div className={`menu-overlay ${menuOpen ? "open" : ""}`} role="dialog">
        <button
          className="close-btn"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ×
        </button>

        <div className="hamburger-layout">
          <aside className="menu-left">
            <ul>
              {hamburgerMenudata.map((item, idx) => (
                <li
                  key={idx}
                  className={`menu-left-item ${
                    activeIndex === idx ? "active" : ""
                  }`}
                  onClick={() => setActiveIndex(idx)}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </aside>

          <section className="menu-middle">
            <h4 className="middle-title">
              ABOUT JSSMVP HERITAGE ABOUT JSS LEADERSHIP
            </h4>
            <ul>
              {activeData.subMenu.map((s, i) => (
                <li key={i} className="middle-item">
                  {s}
                </li>
              ))}
            </ul>
          </section>

          <section className="menu-right">
            <div className="right-inner h-100">
              <div className="image-box">
                <div className="first-content">
                  <h1
                    dangerouslySetInnerHTML={{
                      __html: activeData.firstContent.title,
                    }}
                  />
                  <p>{activeData.firstContent.desc}</p>
                  <Link href={activeData.firstContent.url}>
                    <FiArrowRightCircle className="mb-5" />
                  </Link>
                  <div className="hamburger-section-img">
                    <Link href={activeData.firstContent.url}>
                      <Image
                        src={activeData.firstContent.img}
                        alt={activeData.firstContent.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                </div>
                <div className="second-content">
                  <div className="hamburger-section-img">
                    <Link href={activeData.secondContent.url}>
                      <Image
                        src={activeData.secondContent.img}
                        alt={activeData.secondContent.alt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="100vw"
                      />
                    </Link>
                  </div>
                  <div className="d-flex align-items-start mt-5 flex-wrap">
                    <h1
                      dangerouslySetInnerHTML={{
                        __html: activeData.secondContent.title,
                      }}
                    />
                    <p>{activeData.secondContent.desc}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        /* --- Engineering Dropdown --- */
        .school-toggle {
          cursor: pointer;
          color: #fff;
          font-weight: 600;
          transition: color 0.3s;
          display: flex;
          flex-direction: column;
        }
         .logo-content img {
  width: 100%;
  height: 100%;
  object-fit: contain; 
}
        .header-scrolled .school-toggle {
          color: #16344e;
        }
        .engineering-dropdown-container {
          z-index: 1000;
          width: 100%;
          display: flex;
          position: absolute;
          top: 130px;
        }

        .engineering-dropdown {
          background: #fff;
          width: 35%;
          min-height: 320px;
          display: flex;
          overflow: hidden;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
          border-radius: 8px;
        }

        .schools-list {
          color: #fff;
          background: #16344e;
          flex-direction: column;
          width: 50%;
          display: flex;
        }

        .school-item {
          padding: 10px 20px;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .school-item:hover {
          background: #1e4b6b;
        }
        .school-item.active {
          background: #ffc100;
          color: #000;
        }

        .departments-list {
          background: #224666;
          display: block;
          width: 50%;
        }
        .departments-list .link-content {
          padding-left: 1.2rem;
        }
        .engineering-dropdown h6 {
          font-size: 18px;
          padding-left: 1.2rem;
          padding-top: 1.2rem;
        }
        .department-item {
          cursor: pointer;
          border-radius: 8px;
          padding: 8px;
          font-weight: 500;
          transition: all 0.3s;
          color: #fff;
        }

        .right-inner .hamburger-section-img {
          position: relative;
          height: 50%;
          width: 100%;
          overflow: hidden;
          border-radius: 12px;
        }
        .right-inner .first-content {
          width: 30%;
        }
        .right-inner .second-content {
          width: 40%;
        }
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1100;
        }
        .mega-right-banners {
          justify-content: end;
          gap: 1rem;
          width: 70%;
          display: flex;
          margin-top: 10rem;
          margin-bottom: 5rem;
          height: 70%;
        }
        .right-inner .second-content h1 {
          font-size: 4rem;
          width: 50%;
          font-weight: 700;
          line-height: 60px;
        }
        .right-inner .second-content p {
          font-size: 0.9rem;
          width: 50%;
          margin-top: 1rem;
          padding-bottom: 1rem;
          border-bottom: 2px solid #ffcc00;
        }
        .right-inner .first-content h1 {
          font-size: 2.2rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 1rem;
        }
        .right-inner .first-content p {
          font-size: 0.9rem;
        }
        .right-navbar-section,
        .right-navbar {
          display: flex;
          align-items: center;
        }
        .logo-tertiary-text {
          font-size: 55px;
        }
        .logo-secondry-text,
        .logo-primary-text {
          font-size: 22px;
          font-weight: 700;
        }
        .logo-text p {
          font-size: 12px;
          border-bottom: 2px solid #f8c326;
          padding-bottom: 8px;
        }
        .logo-text {
          color: #fff;
          border-left: 1px solid #cfc7c7;
          padding-left: 1.5rem;
        }
       
        .site-header>.nav-container{
        padding-inline: 98px;
        padding-block: 24px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        }
        .site-header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 8px;
            height: 618px;
            z-index: 2;
            background: linear-gradient(
            to bottom,
            #ffc100 0%,    
            #ffb000 20%,   
            #B08F29 20%,   
            #B08F29 40%,   
            #16344e 40%,   
            #16344e 100%
          );
          
        }
        .nav-list {
          gap: 5.9rem;
          margin: 0;
          list-style: none;
          display: flex;
          padding: 0 2.8rem;
          background-color: rgb(22, 52, 78, 78%);
          color: #fff;
        }
          .nav-list>ul{
          display: flex;
          padding: 0;
          margin: 0;
          gap: 0 6rem;
          }
   
        .nav-item {
          position: relative;
        }
        .nav-container.header-scrolled {
          background-color:var(--color-4e);;
        }
        .nav-link {
          text-decoration: none;
          color: inherit;
          font-weight: 600;
          font-size: 16px;
          padding: 6px 8px;
          display: inline-block;
          transition: color 0.3s ease;
        }
        .header-scrolled .nav-link {
          color: #16344e;
        }

        .dropdown {
          display: none;
          position: absolute;
          top: 100%;
          left: 0;
          background: #fff;
          border: 1px solid #eee;
          list-style: none;
          padding: 8px 15px;
          z-index: 1;
          color: #000;
          min-width: 200px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }
        .dropdown-item {
          display: block;
          padding: 8px 14px;
          text-decoration: none;
          color: #16344e;
        }
        .dropdown-item:hover {
          background: #f5f5f5;
        }
        .admission-wrap {
          position: relative;
          margin: 0 0.5rem;
        }
        .admission-btn {
          color: var(--color-black);
          padding: 1.4rem 2rem 1.2rem;
          letter-spacing: 0.8px;
          background-color: var(--color-100);
          border: none;
          font: var(--font-20);
          font-family: var(--font-Condensed);
        }
        .admission-btn:hover {
          background: #e6b000;
        }
        .admission-dropdown {
          z-index: 1200;
          background: #fff;
          width: 70%;
          margin-top: 6px;
          display: flex;
          position: fixed;
          top: 6rem;
          right: 10rem;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
        }
        .dropdown-arrow {
          position: absolute;
          top: -10px;
          right: 40px;
          width: 0;
          height: 0;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          border-bottom: 10px solid #fff;
        }
        .ad-left {
          width: 100%;
          background: #2f7de8;
          color: #fff;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .ad-right {
          width: 100%;
        }
        .ad-subtitle {
          text-transform: uppercase;
          font-size: 13px;
          margin-bottom: 8px;
        }
        .ad-title {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 12px;
        }
        .ad-desc {
          font-size: 14px;
          margin-bottom: 16px;
        }
        .ad-contact {
          font-size: 14px;
          margin-bottom: 16px;
        }
        .ad-ctas {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .cta {
          padding: 8px 14px;
          font-size: 14px;
          font-weight: 600;
          text-decoration: none;
          border: none;
          cursor: pointer;
          transition: opacity 0.3s ease;
        }
        .cta:hover {
          opacity: 0.9;
        }
        .cta.primary {
          background: #ffc100;
          color: #000;
        }
        .cta.secondary {
          color: #fff;
          border: 1px solid #fff;
        }
        .ad-middle {
          width: 100%;
          padding: 24px;
          border-right: 1px solid #eee;
        }
        .ad-middle ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ad-link {
          padding: 6px 0;
          font-size: 15px;
          font-weight: 500;
          cursor: pointer;
          color: #333;
          transition: color 0.3s ease;
        }
        .ad-link:hover {
          color: #2f7de8;
          text-decoration: underline;
        }
        .ad-stats {
          margin-top: 20px;
        }
        .ad-stats h3 {
          font-size: 18px;
          font-weight: 700;
          margin-bottom: 4px;
        }
        .ad-stats p {
          font-size: 13px;
          color: #777;
          margin-bottom: 10px;
        }
        .stats-btn {
          background: #fff;
          border: 1px solid #000;
          padding: 6px 12px;
          cursor: pointer;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        .stats-btn:hover {
          background: #000;
          color: #fff;
        }

        .addmision-section-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hamburger {
          background: none;
          border: none;
          cursor: pointer;
          padding: 16px 15px 16px;
          background-color: #16344e;
          color: #fff;
          transition: background 0.3s ease;
        }
        .hamburger:hover {
          background-color: #1e4264;
        }

        .backdrop {
          position: fixed;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          opacity: 0;
          pointer-events: none;
          transition: opacity 250ms ease;
          z-index: 1190;
        }
        .backdrop.show {
          opacity: 1;
          pointer-events: all;
        }

        .menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 1200;
          pointer-events: none;
        }
        .menu-overlay.open {
          pointer-events: auto;
        }
        .hamburger-layout {
          position: absolute;
          top: 0;
          right: 0;
          height: 80%;
          width: 0;
          display: flex;
          overflow: hidden;
          background: #fff;
          transition: width 450ms cubic-bezier(0.2, 0.9, 0.2, 1);
        }
        .menu-overlay.open .hamburger-layout {
          width: 100%;
        }

        .menu-left {
          width: 20%;
          background: #2f7de8;
          color: #fff;
          padding-top: 5rem;
        }
        .menu-left-item {
          padding: 12px 14px;
          cursor: pointer;
          font-weight: 600;
          padding-left: 5rem;
          margin-bottom: 6px;
          font-size: 21px;
          transition: all 0.3s ease;
        }
        .menu-left-item:hover {
          background: #1e6fd8;
        }
        .menu-left-item.active {
          background: #ffc100;
          color: #000;
        }
        .menu-left ul {
          list-style: none;
          padding: 0;
        }

        .menu-middle {
          background: #fff;
          border-right: 1px solid #eee;
          width: 20%;
          padding: 1rem 3rem;
          padding-top: 5rem;
        }
        .middle-title {
          color: #000;
          text-transform: uppercase;
          margin-bottom: 10px;
          font-size: 21px;
        }
        .middle-item {
          padding: 8px 0;
          font-weight: 700;
          border-bottom: 1px dashed #eee;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .middle-item:hover {
          color: #2f7de8;
        }

        .menu-right {
          flex: 1;
          background: #fafafa;
          padding: 5rem 3rem;
          width: 60%;
          overflow-y: auto;
        }
        .image-box {
          display: flex;
          justify-content: center;
          height: 100%;
          gap: 3rem;
        }

        .close-btn {
          display: none;
        }
        .menu-overlay.open .close-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          right: 20px;
          top: 20px;
          z-index: 1300;
          width: 40px;
          height: 40px;
          border: none;
          border-radius: 50%;
          background: unset;
          color: #000;
          font-size: 24px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .menu-overlay.open .close-btn:hover {
          background: rgba(0, 0, 0, 0.1);
        }

        .mega-dropdown {
          z-index: -1;
          background: #fff;
          gap: 20px;
          width: 100%;
          height: auto;
          min-width: max-content;
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.15);
        }

        .nav-item:hover > .mega-dropdown,
        .nav-item:focus-within > .mega-dropdown {
          display: flex;
        }

        .mega-left {
          background: #2f7de8;
          color: #fff;
          width: 20%;
          position: relative;
        }
        .mega-left ul {
          margin: 0;
          padding: 0;
          list-style: none;
          text-align: center;
          position: absolute;
          width: 100%;
          top: 35%;
        }
        .mega-left-item {
          cursor: pointer;
          font-weight: 700;
          padding: 8px 0;
        }

        .mega-left-item .dropdown-item {
          color: #fff;
          text-decoration: none;
        }
        .mega-left-item:hover {
          background: #ffc100;
          color: #000;
        }

        .mega-right {
          display: flex;
          align-items: center;
          gap: 3rem;
          width: 80%;
          display: flex;
        }
        .mega-right-text {
          width: 20%;
        }
        .mega-subtitle {
          font-size: 13px;
          color: #555;
          text-transform: uppercase;
          margin-bottom: 6px;
        }
        .mega-title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #16344e;
        }
        .mega-desc {
          font-size: 14px;
          margin-bottom: 12px;
          color: #444;
        }
        .mega-ctas {
          display: flex;
          gap: 12px;
        }
        .mega-banners {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        .banner {
          position: relative;
          display: block;
          overflow: hidden;
          border-radius: 6px;
          width: 100%;
          height: 100%;
          text-decoration: none;
        }
        .banner img,
        .banner :global(img) {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .banner-label {
          color: #fff;
          background: rgba(0, 0, 0, 0.5);
          border-radius: 2px;
          width: 100%;
          padding: 15px 10px;
          font-size: 14px;
          font-weight: 700;
          position: absolute;
          bottom: 0;
          left: 0;
        }

        @media (min-width: 1024px) and (max-width: 1420px) {
          .mega-right-banners {
            height: 70%;
            margin-top: 8rem;
            margin-bottom: 3rem;
          }
          .nav-container {
            padding: 1rem 2rem;
          }
          .nav-list {
            gap: 20px;
            font-size: 16px;
          }
          .mega-right {
            gap: 1.5rem;
          }
          .banner {
            width: 240px;
            height: 200px;
          }
          .admission-dropdown {
            top: 6rem;
            right: 5rem;
            width: 85%;
          }
        }

        @media (max-width: 1100px) {
          .mega-dropdown {
            min-width: 700px;
            grid-template-columns: 1fr;
          }
          .mega-right-text {
            max-width: 100%;
          }
          .banner {
            width: 200px;
            height: 130px;
          }
        }
      `}</style>
    </header>
  );
}
