"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [admissionOpen, setAdmissionOpen] = useState(false);

  const admissionRef = useRef(null);

  const [scrolled, setScrolled] = useState(null);

  const navLinks = [
    {
      name: "ABOUT",
      href: "/",
      dropdown: [
        { name: "About JSS", href: "/" },
        { name: "Heritage", href: "/" },
      ],
    },
    {
      name: "ACADEMICS",
      href: "/",
      dropdown: [
        { name: "Schools", href: "/" },
        { name: "Departments", href: "/" },
        { name: "Programs", href: "/" },
      ],
    },
    {
      name: "ADMISSIONS",
      href: "/",
      dropdown: [
        { name: "Overview", href: "/" },
        { name: "Admission", href: "/" },
        { name: "UG Program", href: "/" },
      ],
    },
    {
      name: "FACILITIES",
      href: "/",
      dropdown: [
        { name: "Girls Hostel", href: "/" },
        { name: "Boys Hostel", href: "/" },
        { name: "Amenities Centre", href: "/" },
      ],
    },
    {
      name: "STUDENTS SUPPORT",
      href: "/",
      dropdown: [
        { name: "Student Life", href: "/" },
        { name: "Mentoring Scheme", href: "/" },
        { name: "Internal Complaint Committee", href: "/" },
      ],
    },
  ];

  const hamburgerMenudata = [
    {
      name: "About JSS University",
      subMenu: ["Overview", "Scholarships", "International Students"],
      img: "/images/hambuger-banner.png",
    },
    {
      name: "Academics",
      subMenu: ["Undergraduate", "Postgraduate", "Doctoral"],
      img: "/images/hambuger-banner.png",
    },
    {
      name: "Facilities",
      subMenu: ["Hostels", "Clubs & Societies", "Events"],
      img: "/images/hambuger-banner.png",
    },
    {
      name: "Students Support",
      subMenu: ["Apply Now", "Eligibility", "FAQs"],
      img: "/images/home-banner.png",
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
      img: "https://picsum.photos/500/400?random=5",
      alt: "Admissions Image",
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("Hamburger Menu Data:", scrolled);

  const openMenu = () => {
    setMenuOpen(true);
    setActiveIndex(0);
  };
  const closeMenu = () => {
    setMenuOpen(false);
    setActiveIndex(null);
  };

  // Close with ESC key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  // Close admission dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (admissionRef.current && !admissionRef.current.contains(e.target)) {
        setAdmissionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const activeData = hamburgerMenudata[activeIndex] || hamburgerMenudata[0];

  return (
    <header className="site-header">
      <div className={`nav-container ${scrolled ? "header-scrolled" : ""}`}>
        <div className="brand-wrap">
          <Link href="/" aria-label="Home">
            <Image
              src="/images/logo.png"
              alt="Site Logo"
              width={250}
              height={90}
              priority
            />
          </Link>
        </div>

        <div className="right-navbar">
          {/* main nav */}
          <nav className="desktop-nav" aria-label="Main navigation">
            <ul className="nav-list">
              {navLinks.map((l, i) => (
                <li key={i} className="nav-item">
                  <Link href={l.href} className="nav-link">
                    {l.name}
                  </Link>
                  {l.dropdown && (
                    <ul className="dropdown">
                      {l.dropdown.map((d, j) => (
                        <li key={j}>
                          <Link href={d.href} className="dropdown-item">
                            {d.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="right-navbar-section">
            {/* Admissions Button */}
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
                  {/* Left */}
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

                  {/* Middle */}
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

                  {/* Right */}
                  <div className="ad-right">
                    <Image
                      src={admissionsData.right.img}
                      alt={admissionsData.right.alt}
                      width={400}
                      height={400}
                      className="ad-img"
                    />
                  </div>
                </div>
              )}
            </div>

            {/* hamburger */}
            <button
              aria-label="Open menu"
              className="hamburger"
              onClick={openMenu}
            >
              ☰
            </button>
          </div>
        </div>
      </div>

      {/* backdrop */}
      <div
        className={`backdrop ${menuOpen ? "show" : ""}`}
        onClick={closeMenu}
      />

      {/* overlay */}
      <div className={`menu-overlay ${menuOpen ? "open" : ""}`} role="dialog">
        <button
          className="close-btn"
          aria-label="Close menu"
          onClick={closeMenu}
        >
          ×
        </button>

        <div className="hamburger-layout">
          {/* left */}
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

          {/* middle */}
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

          {/* right */}
          <section className="menu-right">
            <div className="right-inner">
              <div className="image-box">
                <Image
                  src={activeData.img}
                  alt={activeData.name}
                  width={620}
                  height={400}
                  objectFit="cover"
                  sizes="100vw"
                />
              </div>
            </div>
          </section>
        </div>
      </div>

      <style jsx>{`
        .site-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1100;
        }
        .right-navbar-section,
        .right-navbar {
          display: flex;
          align-items: center;
        }
        .nav-container {
          justify-content: space-between;
          align-items: center;
          max-width: 90%;
          margin: 0 auto;
          padding: 20px 20px;
          display: flex;
        }
        .nav-list {
          gap: 30px;
          margin: 0;
          padding: 0.4rem 2rem;
          list-style: none;
          display: flex;
          font-size: 20px;
          background-color: #16344e;
          color: #fff;
          margin-right: 1rem;
        }
        .nav-item {
          position: relative;
        }
          .nav-container.header-scrolled .nav-list{
            background-color: transparent;
            color: #000;
          }
        .nav-link {
          text-decoration: none;
          color: #16344e;
          font-weight: 600;
          font-size: 16px;
          padding: 6px 8px;
          display: inline-block;
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
        .nav-item:hover > .dropdown {
          display: block;
        }

        /* Admissions Button */
        .admission-wrap {
          position: relative;
          margin-right: 12px;
        }
        .admission-btn {
          background: #ffc100;
          font-weight: 700;
          font-size: 15px;
          border: none;
          padding: 10px 18px;
          cursor: pointer;
        }
        .admission-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 6px;
          width: 1000px;
          display: flex;
          background: #fff;
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
          z-index: 1200;
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
          width: 33.33%;
          background: #2f7de8;
          color: #fff;
          padding: 24px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
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
        }
        .cta.primary {
          background: #ffc100;
          color: #000;
        }
        .cta.secondary {
          background: #fff;
          color: #2f7de8;
        }
        .ad-middle {
          width: 33.33%;
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
        }
        .ad-link:hover {
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
        }
        .ad-right {
          width: 33.33%;
        }
        .ad-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .hamburger {
          font-size: 22px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 4px 10px;
          background-color: #16344e;
          color: #fff;
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
          height: 55%;
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
        }

        .menu-right {
          flex: 1;
          background: #fafafa;
          padding: 28px;
          overflow-y: auto;
        }
        .image-box {
          display: flex;
          justify-content: center;
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
        }
      `}</style>
    </header>
  );
}
