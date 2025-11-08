
"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { IoChevronDownOutline, IoTriangleSharp } from "react-icons/io5";
import "@fontsource/roboto-condensed";

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
        title: `
        <span class="text-dark">START YOUR</span>
        <span class="text-blue">JSS JOURNEY</span>
      `,
        desc: "Learn more about JSS legacy, history and leadership history and leadership.",
        ctas: [
          { text: "Read More", href: "#", type: "primary" },
          // { text: "Leadership", href: "#", type: "secondary" },
        ],
        banners: [
          {
            title: "UNDER GRADUTE",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
          {
            title: "POST GRADUTE",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
          {
            title: "PHD",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
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
        subtitle: "PROGRAMS",
        title: `
        <span class="text-dark">START YOUR</span>
        <span class="text-blue">JSS JOURNEY</span>
      `,
        desc: "Leading the revolution in integrated learning where students shape their own future.",
        ctas: [{ text: "VIEW ALL PROGRAMMES", href: "#", type: "primary" }],
        banners: [
          {
            title: "Under Graduate",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
          {
            title: "Post Graduate",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
          {
            title: "PhD Programmes",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
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
        title: `
        <span class="text-dark">START YOUR</span>
        <span class="text-blue">JSS JOURNEY</span>
      `,
        desc: "Apply now and step into your future at JSS Noida.",
        ctas: [
          { text: "Apply Now", href: "#", type: "primary" },
          // { text: "Download Syllabus", href: "#", type: "secondary" },
        ],
        banners: [
          {
            title: "Scholarships",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
          {
            title: "Eligibility",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
          {
            title: "FAQs",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
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
        title: `
        <span class="text-dark">START YOUR</span>
        <span class="text-blue">JSS JOURNEY</span>
      `,
        desc: "Hostels, clubs, amenities and more for a vibrant campus life.",
        ctas: [{ text: "Explore Facilities", href: "#", type: "primary" }],
        banners: [
          {
            title: "Hostels",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
          {
            title: "Clubs",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
          {
            title: "Events",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
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
        title: `
        <span class="text-dark">START YOUR</span>
        <span class="text-blue">JSS JOURNEY</span>
      `,
        desc: "Guidance, mentoring and vibrant student support activities.",
        ctas: [{ text: "Get Support", href: "#", type: "primary" }],
        banners: [
          {
            title: "Life @ JSS",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
          {
            title: "Mentoring",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
          {
            title: "Clubs",
            href: "#",
            img: "/images/header/nav-hover-banner.webp",
          },
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
      querytext: "Any Query ? please mail us.",
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
      setScrolled(window.scrollY > 80);
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
        <div
          className={`brand-wrap logo-content ${scrolled ? "scrolled" : ""}`}
        >
          <Link href="/" aria-label="Home">
            <Image
              src="/images/header/header-logo.png"
              className="site-logo"
              alt="Site Logo"
              width={299}
              height={108}
              priority
            />
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
                              <h2
                                className="mega-title"
                                dangerouslySetInnerHTML={{
                                  __html: l.right.title,
                                }}
                              />
                              <p className="mega-desc">{l.right.desc}</p>
                              <div className="mega-ctas">
                                {l.right.ctas?.map((cta, idx) => (
                                  <a
                                    key={idx}
                                    href={cta.href}
                                    className={`cta program_btn ${cta.type}`}
                                  >
                                    {cta.text}
                                    <svg
                                      className="cta-arrow"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      viewBox="0 0 16 16"
                                    >
                                      <path
                                        fillRule="evenodd"
                                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 1 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                                      />
                                    </svg>
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
                      <span>{admissionsData.left.querytext}</span>
                      <p>
                        {" "}
                        <img
                          src="images/header/mailicon.svg"
                          className="img-fluid"
                          alt="mail"
                        />{" "}
                        {admissionsData.left.email}
                      </p>
                      <p>
                        {" "}
                        <img
                          src="images/header/phoneicon.svg"
                          className="img-fluid"
                          alt="mail"
                        />{" "}
                        {admissionsData.left.phone}
                      </p>
                    </div>
                    <div className="ad-ctas">
                      {admissionsData.left.ctas.map((cta, idx) => (
                        <a
                          key={idx}
                          href={cta.href}
                          className={`cta applynow ${cta.type}`}
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
                          {link}
                          <img src="/images/header/listicon.svg"
                            className="img-fluid"
                            alt="mail"
                          />
                        </li>
                      ))}
                    </ul>
                    <div className="ad-stats">
                      <h3>{admissionsData.middle.stats.text}</h3>
                      <p>{admissionsData.middle.stats.subtext}</p>
                      <button className="stats-btn">
                        {admissionsData.middle.stats.btnText}
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
                alt="Site Logo"
                width={17}
                height={16}
                priority
              />
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
        <img src="images/header/close-icon.svg" />
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
            <div className="middle-title">
              <ul>
                <li>
                  <a href="#">ABOUT JSSMVP</a>
                </li>
                <li>
                  <a href="#">HERITAGE</a>
                </li>
                <li>
                  <a href="#">ABOUT JSS</a>
                </li>
                <li>
                  <a href="#">LEADERSHIP</a>
                </li>
              </ul>
            </div>
            <ul className="middle_ul">
              {activeData.subMenu.map((s, i) => (
                <li key={i} className="middle-item">
                  <a href="#"> {s}</a>
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
                    <img src="images/header/banner-arrow.svg" />
                  </Link>
                  <div className="hamburger-section-img virtural-img">
                    <Link href={activeData.firstContent.url}>
                      <Image className="hum-small"
                        src={activeData.firstContent.img}
                        alt={activeData.firstContent.alt}
                        fill
                        style={{ objectFit: "cover" }}
                       
                      />
                    </Link>
                    <div className="items-menu_grp">
                      <div className="items-menu_grp_cont">
                          <h4>Virtual campus</h4>
                          <p>Sed ut perspiciatis</p>
                      </div>
                    </div>
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
                    <div className="vid-thumb-grp">
                      <div className="vid-thumb-icon"></div>
                      <div className="vid-thumb-cont">
                        <h6>MESSAGE FROM CHANCELLOR</h6>
                        <h4>
                          JAGADGURU SRI SHIVARATHRI DESHIKENDRA MAHASWAMIJI
                        </h4>
                      </div>
                    </div>
                  </div>
                  <div className="acresData">
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
        .virtural-img {margin-top:5.6rem;position:relative;}
        .right-inner .first-content {
          width: 30%;
          padding-top:2rem;
        }
        .right-inner .second-content {
          width: 45%;
        }
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1100;
        }
     
        .right-inner .first-content h1 {
         font: var(--font-36);
          color: var(--color-4e);
          letter-spacing: -0.58px;
          text-transform: uppercase;
          font-family: var(--font-Condensed);
          padding-bottom: 2rem;
          font-weight: bold;
          line-height: 1;
          max-width: 82%;
        }
        .right-inner .first-content p {
         font: var(--font-15);
          color: var(--color-black);
          font-weight: 300;
          line-height: 1.6;
          padding-bottom: 1.2rem;
          max-width: 75%;
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
        padding-inline: 9.8rem;
        padding-block: 2.4rem;
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
          width: 85%;
          display: flex;
          position: fixed;
          top: 14rem;
          right: 10rem;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
          
        }
        .dropdown-arrow {
          border-bottom: 18px solid #fff;
          border-left: 10px solid transparent;
          border-right: 10px solid transparent;
          width: 0;
          height: 0;
          position: absolute;
          top: -18px;
          right: 7%;
        }
        .ad-left {
          width: 100%;
          background: var(--color-e8);
          color: #fff;
          padding: 9rem 9.2rem 8rem 8rem ;
        }
        .ad-right {
          width: 100%;
        }
        .ad-subtitle {
         font: var(--font-16);
          font-family: var(--font-Condensed);
          color: var(--color-white);
          margin-bottom: 1rem;
        }
        .ad-title {
          font: var(--font-48);
          font-family: var(--font-Condensed);
          color: var(--color-white);
          letter-spacing: -2.3px;
          font-weight: 700;
          line-height: 1;
        }
        .ad-desc {
         font: var(--font-16);
          color: var(--color-white);
          font-weight: 300;
          margin-top: 1rem;
          padding-right: 2rem;
          padding-bottom:6rem;
          position:relative;

        }
          .ad-desc::before{content: '';position: absolute; background-color: #fff;bottom: 0; left: 0;width: 50rem;height: 0.1rem;opacity: 0.3;}
        .ad-contact {padding-top:6rem;}
          .ad-contact span {
          font: var(--font-16);
          color: var(--color-white);
          font-family: var(--font-Condensed);margin-bottom:0.8rem;display: block;}
          .ad-contact p{
          font: var(--font-24);
          color: var(--color-white);
          letter-spacing: -0.24px
          font-family: var(--font-Condensed);
          margin-bottom:1.4rem
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
          .cta.primary:hover {
          background-color: var(--color-4e);
          color: var(--color-white);}
       .cta.primary {
        background: transparent;
         border: 1px solid var(--color-4e);
        padding: 1rem 2rem;
        display: inline-flex;
        color: var(--color-4e);
        font: var(--font-13);
        font-family: var(--font-Condensed);
        font-weight: 700;
        align-items: center;
        gap: 3rem;
        white-space: nowrap;
        -webkit-transition: all 0.5s ease;
        }
        .ad-middle {
          width: 100%;
           padding: 9rem 9.2rem 8rem 8rem ;
          border-right: 1px solid #eee;
        }
        .ad-middle ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .ad-link {
          font: var(--font-21);
          color: var(--color-4e);
          padding-block: 1rem;
          border-bottom: 1px dashed #16344E33;
          display: block;
          position: relative;
          cursor: pointer;
        }
        .ad-link:hover {
          color: var(--color-e8);
          text-decoration: none;
        }
        .ad-stats {
          margin-top: 5.8rem;
        }
        .ad-stats h3 {
          font: var(--font-36);
          font-family: var(--font-Condensed);
          color: var(--color-4e);
          letter-spacing: -1.01px;
          padding-right: 8rem;
        }
        .ad-stats p {
          font: var(--font-16);
          font-family: var(--font-Condensed);
          color: var(--color-4e);
          text-transform: uppercase;
          margin-block:1.4rem 1.8rem;
        }
        .stats-btn {
          background: #fff;
          border: 1px solid #000;
          font: var(--font-18);
          font-family: var(--font-Condensed);
          font-weight: 700;
          letter-spacing: 0.72px;
          padding: 1rem 1.5rem;
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
          width: 23%;
          background: var(--color-e8);
          color: #fff;
          padding-top: 9rem;
        }
        .menu-left-item {
          padding: 1rem 7rem 1rem 14rem;
          cursor: pointer;
          position: relative;
          display: block;
          font: var(--font-21);
          color: var(--color-white);
          font-weight: normal;
          transition: all 0.3s ease;
        }
        .menu-left-item:hover {
          background: #ffc100;
           color:var(--color-4e);;
          font-weight: bold;
        }
     
        .menu-left ul {
          list-style: none;
          padding: 0;
        }

        .menu-middle {
          background: #fff;
          width: 20%;
          padding: 9rem 9rem 9rem;
        }
      .menu-middle::before {
        content: "";
        background-color: #e3e3e3;
        width: 0.2rem;
        position: absolute;
        top: 11%;      
        bottom: 10%;   
        right: 58%;
        transform: translateY(0);
      }
        .hamburger-layout:before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          width: 100%;
          height: 100%;
          background-image: url(images/header/ham-overlay.png);
          opacity: 0.9;
          backdrop-filter: blur(4px);
          -webkit-backdrop-filter: blur(4px);
          background-size: cover;
          background-repeat: no-repeat;opacity:0.1}
          .middle-title>ul {
            padding: 0;
            margin: 0;
            list-style-type: none;}
            
        .middle-title>ul>li a {
           font: var(--font-21);
            color: var(--color-black);
            font-family: var(--font-Condensed);
            font-weight: bold;
            display: block;
            padding-bottom: 1.6rem;
        }
        .middle-title ul {margin-bottom:1rem}
        .middle_ul{padding:0;}
        .middle_ul .middle-item {margin-bottom:1rem}
        .middle-item a {
          font: var(--font-16);
          font-weight: normal;
          padding-bottom: 0;
          position: relative;
          padding-left: 1.5rem;
          transition: color 0.3s ease;
          color: var(--color-black);
        }
        
        .middle-item a:before {
          content: "";
          position: absolute;
          top: 8px;
          left: 0;
          width: 5px;
          height: 5px;
          border-radius: 50%;
          background-color: var(--color-e8);
      }
        .middle-item:hover {
          color: var(--color-e8);
        }

        .menu-right {
          flex: 1;
          padding-top: 9rem;
          padding-left:3rem;
          overflow-y: auto;
        }
        .image-box {
          display: flex;
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
          gap: 6rem;
          width: 100%;
          height: auto;
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
          background: var(--color-e8);
          color: #fff;
          width: 43rem;
          position: relative;
        }
        .mega-left ul {
          margin: 0;
          padding: 0;
          list-style: none;
          text-align: center;
          position: absolute;
          width: 100%;
          top: 26%;
        }
        .mega-left-item {
          cursor: pointer;
          transition: background 0.3s ease, color 0.3s ease;
          font-weight: 700;
          padding: 1px 0;
        }
        
        .mega-right {
          display: flex;
          align-items: center;
          gap: 3.4rem;
          width: 76%;
          display: flex;
          padding-right: 9.8rem;
        }
        .mega-right-text {
          width: 23%;
          padding-top: 0rem;
        }
        .mega-subtitle {
         font: var(--font-13);
          color: var(--color-e8);
          font-weight: 800;
          display: inline-block;
          padding-bottom: 0rem;
        }
        
        .mega-desc {
          max-width: 100%;
          font: var(--font-16);
          font-weight: 200;
          color: var(--color-4e);
          margin-bottom:5.6rem;
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
          background: rgba(85, 85, 85, 0.5);
          width: 100%;
          padding-inline: 2.2rem;
          padding-block:1.6rem;
          font-weight: 700;
          position: absolute;
          bottom: 0;
          left: 0;
          font: var(--font-28);
          color: var(--color-white);
          font-family: var(--font-Condensed);
          font-weight: 600;
          text-transform: uppercase;
        }
     .items-menu_grp_cont h4 {
          font: var(--font-18);
          color: var(--color-white);
          font-family: var(--font-Geist);
          letter-spacing: -0.18px;
          font-weight: 800;
      }
      .items-menu_grp .items-menu_grp_cont p {
          letter-spacing: -0.23px;
          font: var(--font-15);
          color: var(--color-white);
          font-family: var(--font-Geist);
          font-weight: 200;
          max-width: 100%;
      }
         .mega-right-banners {
          display:flex;
          margin-top:18rem;
          padding-bottom:14rem;
          gap:2.4rem;
          width:100%
         }
         .close-btn {margin:3rem 8rem}
    
        @media (min-width: 1024px) and (max-width: 1420px) {
          .mega-right-banners {
            height: 68%;
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










