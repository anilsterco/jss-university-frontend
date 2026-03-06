"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "@fontsource/roboto-condensed";

import { BASE_URL } from "@/config/config";
const NAV_BASE_URL = `${BASE_URL}header`;
const SCHOOL_HEADER_URL = `${BASE_URL}school-header`;
const ADMISSION_BASE_URL = `${BASE_URL}admission`;
const SCHOOL_DEPARTMENT_URL = `${BASE_URL}school-department-list`;
const ContactApi = `${BASE_URL}contact-info`;
const Addmision_Api = `${BASE_URL}admission`;
const Program_Api = `${BASE_URL}program-list`;
const MOBILE_HEADER_URL = `${BASE_URL}mobile-header`;

const mobilePanelsData = [
  {
    name: "Courses",
    icon: "/images/header/cource-mob.svg",
    visitIcon: "/images/header/courseIcon.svg",
    Menu: [
      {
        name: "UNDER GRADUATE",
        url: "/courses/undergraduate",
        image: "/images/header/course04.png",
      },
      {
        name: "POST GRADUATE",
        url: "/courses/postgraduate",
        image: "/images/header/course02.png",
      },
      {
        name: "PHD",
        url: "/courses/research",
        image: "/images/header/course03.png",
      },
      {
        name: "ACADEMIC PROGRAMS",
        url: "/courses/diploma",
        image: "/images/header/course01.png",
      },
    ],
  },

  {
    name: "Admissions",
    heading:
      "<span class='blue-text'>APPLY NOW </span> <span class='text-dark'>FOR 2025</span>",
    icon: "/images/header/admi-mob.svg",
    Menu: [
      { name: "Scholarship", url: "/admissions/calendar" },
      { name: "Course, Eligibility & Fee Structure", url: "/fee-Structure" },
      {
        name: "Admission Document & Undertaking",
        url: "/admissions/scholarship",
      },
      {
        name: "Admissions Office Contacts",
        url: "/admissions/international",
      },
      { name: "Hostel Details", url: "/admissions/international" },
    ],

    contact: {
      title: "ANY QUERY ? PLEASE MAIL US.",
      details: [
        {
          icon: "/images/header/mail-icon.svg",
          text: "principal@jssaten.ac.in",
          link: "mailto:principal@jssaten.ac.in",
        },
        {
          icon: "/images/header/phone-icon.svg",
          text: "+91-9311830458",
          link: "tel:+91-9311830458",
        },
      ],
      buttons: [
        {
          label: "APPLY NOW",
          link: "/apply",
          className: "apply",
        },
        {
          label: "DOWNLOAD SYLLABUS",
          link: "/downloads/syllabus",
          className: "dwnload",
          icon: "/images/header/dwnlodIcon.png",
        },
      ],
    },
  },

  {
    name: "Contact",
    heading: "CAMPUS ADDRESS ",
    bgImg: "/images/header/cont-mobmenu.png",
    icon: "/images/header/contact-mob.svg",
  },

  {
    name: "Menu",
    icon: "/images/header/hamberger-mob.svg",
  },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const admissionRef = useRef(null);
  const [headerData, setHeaderData] = useState(null);
  const [admissionData, setAdmissionData] = useState(null);
  const [engineeringData, setEngineeringData] = useState([]);
  const [mobilePanels, setMobilePanels] = useState(mobilePanelsData);
  const [mobAdmission, setMobadmission] = useState(null);
  const [mobProgramList, setMobProgramList] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [megaMenuData, setMegaMenuData] = useState([]);

  const [activeLeftIndex, setActiveLeftIndex] = useState(0);
  const [activeMiddleIndex, setActiveMiddleIndex] = useState(null);

  // ✅ Timeout ref to delay closing — prevents glitch when mouse travels
  // from the nav <li> into the fixed mega-dropdown (there's a gap between them)
  const closeTimeoutRef = useRef(null);

  const handleNavMouseEnter = (i) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setActiveDropdown(i);
  };

  const handleNavMouseLeave = () => {
    // Small delay gives mouse time to reach the mega-dropdown before it closes
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  const handleDropdownMouseEnter = () => {
    // Mouse reached the dropdown — cancel the pending close
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    // Mouse left the dropdown — close it
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 100);
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const res = await fetch("https://project-demo.in/jss/api/hamburger");
        const json = await res.json();
        setMegaMenuData(json.data || []);
      } catch (err) {
        console.error("Hamburger API Error:", err);
      }
    };
    fetchMenu();
  }, []);

  const activeLeftMenu = megaMenuData?.[activeLeftIndex] || {};
  const activeMiddleMenu = activeLeftMenu.children?.[activeMiddleIndex] || {};

  useEffect(() => {
    async function fetchHeaderData() {
      try {
        const [res1, res2] = await Promise.all([
          fetch(
            `${
              pathname.includes("schools") || pathname.includes("department")
                ? SCHOOL_HEADER_URL
                : NAV_BASE_URL
            }`,
          ),
          fetch(`${ADMISSION_BASE_URL}`),
        ]);
        if (!res1.ok || !res2.ok) {
          throw new Error("One or more API calls failed");
        }
        const [data1, data2] = await Promise.all([res1.json(), res2.json()]);
        setHeaderData(data1.data);
        setAdmissionData(data2.data);
      } catch (err) {
        console.error("❌ API Error:", err);
      }
    }
    fetchHeaderData();
  }, [pathname]);

  const [activePanel, setActivePanel] = useState(null);
  const navLinks = headerData || [];
  const admissionsData = admissionData || [];
  const hamburgerMenudata = [
    {
      name: "About JSS University",
      Menu: ["Overview", "Scholarships", "International Students"],
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
      Menu: ["Undergraduate", "Postgraduate", "Doctoral"],
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
      Menu: ["Hostels", "Clubs & Societies", "Events"],
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
      Menu: ["Apply Now", "Eligibility", "FAQs"],
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

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) {
        setMenuOpen(false);
        setActivePanel(null);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        const res = await fetch(`${SCHOOL_DEPARTMENT_URL}`);
        const json = await res.json();
        if (json.status) {
          setEngineeringData(json.data);
          setSelectedSchoolName(json.data[0]?.name);
        }
      } catch (error) {
        console.log("API Error:", error);
      }
    };

    fetchSchools();
  }, []);

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

  const pathParts = pathname.split("/").filter(Boolean);
  const isHome = pathname === "/";
  const isSchoolHome = pathParts.length === 2 && pathParts[0] === "schools";
  const isDepartmentHome =
    pathParts.length === 2 && pathParts[0] === "department";
  const isSchoolInner = pathParts.length > 2 && pathParts[0] === "schools";
  const isDepartmentInner =
    pathParts.length > 2 && pathParts[0] === "department";
  const isHomeLikePage = isHome || isSchoolHome || isDepartmentHome;

  const loadPrograms = async () => {
    if (mobProgramList.length > 0) return;
    const res = await fetch(Program_Api);
    const json = await res.json();
    setMobProgramList(json.data || []);
  };

  const loadAdmissions = async () => {
    if (mobAdmission) return;
    const res = await fetch(Addmision_Api);
    const json = await res.json();
    setMobadmission(json.data || null);
  };

  const loadContacts = async () => {
    const contactPanel = mobilePanels.find((x) => x.name === "Contact");
    if (contactPanel?.Menu?.length > 0) return;
    const res = await fetch(ContactApi);
    const json = await res.json();
    if (json.status && json.data.length > 0) {
      const data = json.data[0];

      setMobilePanels((prev) =>
        prev.map((item) =>
          item.name === "Contact"
            ? {
                ...item,
                heading: data.title,
                Menu: [
                  {
                    name: data.address,
                    url: data.direction_url,
                    contactIcon: "/images/header/address-icon.svg",
                  },
                  {
                    name: data.email,
                    url: `mailto:${data.email}`,
                    contactIcon: "/images/header/mail-icon.svg",
                  },
                  {
                    name: data.phone,
                    url: `tel:${data.phone}`,
                    contactIcon: "/images/header/phone-icon.svg",
                  },
                ],
              }
            : item,
        ),
      );
    }
  };

  const loadMenu = async () => {
    const contactPanel = mobilePanels.find((x) => x.name === "Menu");
    if (contactPanel?.Menu?.length > 0) return;
    const res = await fetch(MOBILE_HEADER_URL);
    const json = await res.json();
    console.log("Mobile Menu API Response:", json.data[0]);

    if (json.success && json.data.length > 0) {
      const data = json.data[0];

      setMobilePanels((prev) =>
        prev.map((item) =>
          item.name === "Menu"
            ? {
                ...item,
                heading: data.title,
                Menu: [
                  {
                    name: data.title,
                    url: data.url,
                  },
                ],
              }
            : item,
        ),
      );
    }
  };

  const togglePanel = async (name) => {
    if (activePanel === name) {
      setActivePanel(null);
      return;
    }

    if (name === "Courses") await loadPrograms();
    if (name === "Admissions") await loadAdmissions();
    if (name === "Contact") await loadContacts();
    if (name === "Menu") await loadMenu();

    setActivePanel(name);
  };

  const isHomeOrDepartment =
    pathname === "/" || pathname.startsWith("/department");

  return (
    <header
      className={`site-header
  ${pathname.includes("programs") ? "no-shadow" : ""}
  ${!isHomeLikePage ? "programs-header not-home" : ""}
  ${isSchoolInner || isDepartmentInner ? "school-dept-header" : ""}
`}
    >
      <div
        className={`header-inner ${
          !isHomeLikePage ? "innerPage" : ""
        } ${scrolled ? "header-scrolled" : ""}`}
      >
        <div className="containerXl">
          <div
            className={`nav-container ${
              !isHomeLikePage ? "scroll_bg programs-nav not-home" : ""
            }`}
          >
            <div
              className={`brand-wrap logo-content ${scrolled ? "scrolled" : ""}`}
            >
              <div className="dashbord-logo">
                <Link href="/" aria-label="Home">
                  <Image
                    src={
                      isHomeLikePage
                        ? "/images/header/header-logo.png"
                        : "/images/header/jss-moblogo.png"
                    }
                    className="site-logo"
                    alt="Site Logo"
                    width={325}
                    height={116}
                    priority
                  />
                </Link>
              </div>

              <div className="mob-logo">
                <Link href="/" aria-label="Home">
                  <Image
                    src="/images/header/jss-moblogo.png"
                    className="site-logo"
                    alt="Site Logo"
                    width={299}
                    height={108}
                    priority
                  />
                </Link>
              </div>
            </div>

            <div className="right-navbar">
              <nav className="desktop-nav" aria-label="Main navigation">
                <ul className="nav-list">
                  {navLinks.map((l, i) => (
                    <li
                      key={i}
                      className={`nav-item ${
                        activeDropdown === i ? "active-items" : ""
                      }`}
                      onMouseEnter={() => handleNavMouseEnter(i)}
                      onMouseLeave={handleNavMouseLeave}
                    >
                      <Link href={l.url} className={`nav-link nav-lists`}>
                        {l.title}
                      </Link>
                      {activeDropdown === i && l.children?.length > 0 && (
                        <div
                          className={`mega-dropdown ${activeDropdown === i ? "d-flex" : ""}`}
                          role="menu"
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <div className="mega-left">
                            <ul>
                              {l.children.map((d, j) => (
                                <li key={j} className="mega-left-item">
                                  <Link href={d.url} className="dropdown-item">
                                    {d.title}
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
                                      <Link
                                        key={idx}
                                        href={cta.url}
                                        className={`cta program_btn ${cta.type}`}
                                        style={{ color: "inherit" }}
                                      >
                                        {cta.text}
                                        <svg
                                          className="cta-arrow"
                                          style={{ marginLeft: "2rem" }}
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
                                      </Link>
                                    ))}
                                  </div>
                                </div>

                                <div className="mega-right-banners">
                                  {l.right.banners?.map((b, idx) => (
                                    <Link
                                      key={idx}
                                      href={{
                                        pathname: "/programs",
                                        query: {
                                          type: b.title
                                            .toLowerCase()
                                            .replace(/\s+/g, "-"),
                                        },
                                      }}
                                    >
                                      <div
                                        className="banner"
                                        onClick={() => setActiveDropdown(null)}
                                      >
                                        <Image
                                          src={b.img}
                                          alt={b.title}
                                          width={260}
                                          height={160}
                                        />
                                        <span className="banner-label">
                                          {b.title}
                                        </span>
                                      </div>
                                    </Link>
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
                        <h2 className="ad-title">
                          {admissionsData.left.title}
                        </h2>
                        <p className="ad-desc">{admissionsData.left.desc}</p>
                        <div className="ad-contact">
                          <span> {admissionsData.left.querytext} </span>
                          <p>
                            <img
                              src="images/header/mailicon.svg"
                              className="img-fluid"
                              alt="mail"
                            />
                            {admissionsData.left.email}
                          </p>
                          <p>
                            <img
                              src="images/header/phoneicon.svg"
                              className="img-fluid"
                              alt="mail"
                            />
                            {admissionsData.left.phone}
                          </p>
                        </div>
                        <div className="ad-ctas">
                          {admissionsData.left.ctas.map((cta, idx) => (
                            <a
                              key={idx}
                              target="_blank"
                              href={cta.url}
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
                              <Link
                                href={link.url}
                                style={{ color: "inherit" }}
                              >
                                {link.title}
                                <img
                                  src="/images/header/listicon.svg"
                                  className="img-fluid"
                                  alt="mail"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="ad-stats">
                          <h3>{admissionsData.middle.stats.text}</h3>
                          <p>{admissionsData.middle.stats.subtext}</p>
                          <Link
                            href={admissionsData.middle.stats.btnText.url}
                            style={{ color: "inherit" }}
                          >
                            <button className="stats-btn">
                              {admissionsData.middle.stats.btnText.text}
                            </button>
                          </Link>
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
                    width={16}
                    height={15}
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

          <div
            className={`menu-overlay ${menuOpen ? "open" : ""}`}
            role="dialog"
          >
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
                  {megaMenuData.map((item, idx) => (
                    <li
                      key={item.id}
                      className={`menu-left-item ${activeLeftIndex === idx ? "active" : ""}`}
                      onMouseEnter={() => {
                        setActiveLeftIndex(idx);
                        setActiveMiddleIndex(null);
                      }}
                    >
                      <Link href={item.url || "#"} className="hambur_links">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </aside>

              <section className="menu-middle">
                <div className="middle-title">
                  <ul>
                    {activeLeftMenu.children?.map((item, idx) => (
                      <li
                        key={item.id}
                        className={activeMiddleIndex === idx ? "active" : ""}
                        onMouseEnter={() => setActiveMiddleIndex(idx)}
                      >
                        <Link href={item.url} className="hambur_link">
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="middle-submenu">
                  {activeMiddleMenu.children?.map((sub) => (
                    <li key={sub.id}>
                      <Link href={sub.url}>{sub.title}</Link>
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
                          <Image
                            className="hum-small"
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

          <div className="panel-wrapper">
            <div className="mob-menu-sec">
              {mobilePanels.map((item) => (
                <div
                  key={item.name}
                  className={`panel ${
                    activePanel === item.name ? "open" : ""
                  } ${item.name.toLowerCase()}-panel`}
                >
                  {item.name === "Courses" &&
                    activePanel === "Courses" &&
                    item.Menu && (
                      <div className="mobCourses">
                        <div className="course-heading">
                          <h4>START YOUR JSS JOURNEY</h4>
                        </div>
                        <ul className="courses-menu">
                          {mobProgramList.map((sub, idx) => (
                            <li key={idx}>
                              <figure>
                                <div className="coursesImg">
                                  <img
                                    src={sub.image}
                                    alt={sub.name}
                                    className="course-img w-100"
                                  />
                                </div>
                                <figcaption>
                                  <h4>{sub.name}</h4>
                                  <Link href={sub.slug}>
                                    <img
                                      src={"/images/header/courseIcon.svg"}
                                      alt={`${sub.name} icon`}
                                      className="course-icon"
                                    />
                                  </Link>
                                </figcaption>
                              </figure>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                  {item.name === "Admissions" &&
                    activePanel === "Admissions" &&
                    admissionData && (
                      <div className="admissions-menu-wrapper">
                        <ul className="admissions-menu">
                          <div className="admissions-heading">
                            <h4
                              dangerouslySetInnerHTML={{ __html: item.heading }}
                            ></h4>
                          </div>

                          {admissionData.middle.links.map((link, idx) => (
                            <li key={idx}>
                              <a href={link.url}>{link.title}</a>
                            </li>
                          ))}
                        </ul>

                        <div className="admissions-contact">
                          <h4>{admissionData.left.querytext}</h4>
                          <ul>
                            <li>
                              <img
                                src="/images/header/mail-icon.svg"
                                alt="email"
                              />
                              <a href={`mailto:${admissionData.left.email}`}>
                                {admissionData.left.email}
                              </a>
                            </li>
                            <li>
                              <img
                                src="/images/header/phone-icon.svg"
                                alt="phone"
                              />
                              <a href={`tel:${admissionData.left.phone}`}>
                                {admissionData.left.phone}
                              </a>
                            </li>
                          </ul>
                          <div className="contactBtn">
                            {admissionData.left.ctas.map((btn, idx) => (
                              <a
                                key={idx}
                                href={btn.url}
                                className={
                                  btn.type === "primary" ? "apply" : "dwnload"
                                }
                              >
                                {btn.type === "secondary" && (
                                  <img
                                    src="/images/header/dwnlodIcon.png"
                                    alt="download"
                                  />
                                )}
                                {btn.text}
                              </a>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}

                  {item.name === "Contact" &&
                    activePanel === "Contact" &&
                    item.Menu && (
                      <div className="contact-panel">
                        <div className="contact-heading">
                          <h4>{item.heading}</h4>
                        </div>

                        <div className="contactBanner">
                          <img
                            src={item.bgImg}
                            alt="contact"
                            className="contact-banner"
                          />
                        </div>
                        <ul className="contact-info">
                          {item.Menu.map((sub, idx) => (
                            <li key={idx}>
                              <div className="icon-img">
                                <img src={sub.contactIcon} alt={sub.name} />
                              </div>
                              <a href={sub.url}>{sub.name}</a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  {item.name === "Menu" && activePanel === "Menu" && (
                    <>
                      {item.Menu && (
                        <>
                          <ul className="menu-top">
                            {item.Menu.slice(0, 6).map((sub, idx) => (
                              <li key={idx}>
                                <a href={sub.url}>{sub.name}</a>
                              </li>
                            ))}
                          </ul>
                          {item.Menu.length > 6 && (
                            <ul className="menu-bottom">
                              {item.Menu.slice(1).map((sub, idx) => (
                                <li key={idx}>
                                  <a href={sub.url}>{sub.name}</a>
                                </li>
                              ))}
                            </ul>
                          )}
                        </>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mobile-bottom-menu">
            <ul className="menu-list">
              {mobilePanels.map((item) => (
                <li
                  key={item.name}
                  className={
                    activePanel === item.name ? "menu-item active" : "menu-item"
                  }
                >
                  <button onClick={() => togglePanel(item.name)}>
                    <div className="icon">
                      <img src={item.icon} alt={`${item.name} icon`} />
                    </div>
                    <p className="menu-name">{item.name}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .logo-content img {
            width: 100%;
            height: 100%;
            object-fit: contain;
          }

          {/* .nav-container.header-scrolled.scroll_bg {
            background: #f8f9fa !important;
          }
          .nav-container.header-scrolled.not-home {
            background: #f8f9fa !important;
          } */}
          .programs-nav .nav-list {
            background: transparent;
          }

          .engineering-dropdown-container {
            z-index: 1000;
            width: 100%;
            display: flex;
            position: absolute;
            top: 140px;
            left: 10%;
          }
          .engineering-dropdown .triangle-icon {
            position: absolute;
            top: -10px;
            left: 20%;
            color: #16344e;
            width: 1.8rem;
            height: 1.3rem;
          }

          .engineering-dropdown {
            background: #fff;
            width: 36%;
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
            width: 47%;
            display: flex;
          }

          .school-item {
            padding: 1.1rem 3.2rem 1.1rem;
            cursor: pointer;
            transition: background 0.3s ease;
          }
          .school-item:hover {
            background: #1e4b6b;
          }
          .school-item {
            font: var(--font-14);
            font-weight: normal;
            letter-spacing: 0px;
          }
          .school-item.active {
            background: #ffc100;
            color: #000;
            font: var(--font-14);
            font-weight: normal;
            letter-spacing: 0px;
          }

          .departments-list {
            background: #224666;
            display: block;
            width: 53%;
          }
          .departments-list .link-content {
            padding-left: 3.2rem;
            font: var(--font-14);
            font-weight: normal;
            letter-spacing: 0px;
          }

          .engineering-dropdown h6 {
            font: var(--font-18);
            color: var(--color-white);
            text-transform: uppercase;
            font-family: var(--font-Condensed);
            letter-spacing: 0px;
            font-weight: bold;
            padding-inline: 3.2rem;
            padding-top: 1.5rem;
            margin-bottom: 1rem;
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
          .virtural-img {
            margin-top: 5.6rem;
            position: relative;
          }
          .right-inner .hamburger-section-img.virtural-img {
            position: relative;
            overflow: hidden;
            height: 40%;
            object-fit: cover;
          }
          .hamburger-section-img.virtural-img .hum-small {
            height: 100%;
            width: 100%;
          }
          .hamburger-section-img.virtural-img::before {
            content: "";
            position: absolute;
            background: transparent
              linear-gradient(0deg, #000000 0%, #00000000 100%) 0% 0% no-repeat
              padding-box;
            border-radius: 8px;
            opacity: 0.93;
            height: 207px;
            z-index: 1;
            bottom: 0;
            left: 0;
            right: 0;
          }

          .right-inner .first-content {
            width: 30%;
            padding-top: 2rem;
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

          .site-header > .nav-container {
            padding-inline: 9.8rem;
            padding-block: 2.4rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }

          .site-header::before {
            content: "";
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
              #b08f29 20%,
              #b08f29 40%,
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

          .nav-list > ul {
            display: flex;
            padding: 0;
            margin: 0;
            padding: 1.4rem 2.8rem 1.2rem;
          }

          .nav-item {
            position: relative;
          }
          .nav-item:last-child {
            padding-right: 0;
          }
          .header-inner.header-scrolled {
            background-color: var(--color-4e);
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
            padding: 1.2rem 2rem 1.2rem;
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
            padding: 9rem 9.2rem 8rem 8rem;
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
            padding-bottom: 6rem;
            position: relative;
          }
          .ad-desc::before {
            content: "";
            position: absolute;
            background-color: #fff;
            bottom: 0;
            left: 0;
            width: 50rem;
            height: 0.1rem;
            opacity: 0.3;
          }
          .ad-contact {
            padding-top: 6rem;
          }
          .ad-contact span {
            font: var(--font-16);
            color: var(--color-white);
            font-family: var(--font-Condensed);
            margin-bottom: 0.8rem;
            display: block;
          }
          .ad-contact p {
            font: var(--font-24);
            color: var(--color-white);
            letter-spacing: -0.24px;
            font-family: var(--font-Condensed);
            margin-bottom: 1.4rem;
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
            color: var(--color-white);
          }
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
            var(--color-4e)-space: nowrap;
            -webkit-transition: all 0.5s ease;
          }

          .ad-left .ad-ctas .cta.applynow.primary {
            background: #ffc100;
            border: 1px solid #ffc100;
            padding: 1rem 2rem;
            display: inline-flex;
            font: var(--font-18);
            font-family: var(--font-Condensed);
            align-items: center;
            gap: 3rem;
            var(--color-4e)-space: nowrap;
            -webkit-transition: all 0.5s ease;
            color: #000;
            font-weight: 600;
            letter-spacing: 0.72px;
          }
          .mega-ctas {
            font: var(--font-13);
            font-family: var(--font-Condensed);
            letter-spacing: 0.72px;
            cursor: pointer;
            color: #16344e !important;
            background: #fff;
            border: 1px solid rgba(22, 52, 78, 0.4);
            padding: 1rem 1.5rem;
            font-weight: 600;
            transition: all 0.3s;
            max-width: 22rem;
          }
          .cta.program_btn {
            display: flex;
            justify-content: space-around;
            color: inherit;
          }
          .ad-left .ad-ctas .cta.applynow.secondary {
            border: 1px solid #fff;
            color: #fff;
            font: var(--font-18);
            font-family: var(--font-Condensed);
            font-weight: 600;
            letter-spacing: 0.72px;
          }
          .applynow.primary {
            background: #ffc100;
            font: var(--font-18);
            font-family: var(--font-Condensed);
          }
          .applynow.primary:hover {
            color: #fff !important;
          }

          .ad-middle {
            width: 100%;
            padding: 9rem 9.2rem 8rem 8rem;
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
            border-bottom: 1px dashed #16344e33;
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
            margin-block: 1.4rem 1.8rem;
          }
          .stats-btn {
            background: #fff;
            border: 1px solid rgba(22, 52, 78, 0.4);
            font: var(--font-18);
            font-family: var(--font-Condensed);
            font-weight: 700;
            letter-spacing: 0.72px;
            padding: 1rem 1.5rem;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s ease;
            color: #16344e;
          }
          .stats-btn:hover {
            background: #16344e;
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
            padding: 1.6rem 1.5rem 1.6rem;
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
            height: 75.6rem;
            width: 0;
            display: flex;
            overflow: hidden;
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
            color: var(--color-4e);
            font-weight: bold;
          }

          .menu-left ul {
            list-style: none;
            padding: 0;
          }

          .menu-middle {
            background: rgba(255, 255, 255, 0.95);
            width: 20%;
            padding: 9rem 5rem 9rem;
          }
          .menu-right {
            background: rgba(255, 255, 255, 0.95);
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
            backdrop-filter: blur(4px);
            -webkit-backdrop-filter: blur(4px);
            background-size: cover;
            background-repeat: no-repeat;
            opacity: 1;
            z-index: -1;
          }
          .middle-title ul {
            padding: 0;
            margin: 0;
            list-style-type: none;
          }

          .middle-title .hambur_link {
            font: var(--font-21);
            font-family: var(--font-Condensed);
            font-weight: bold;
            display: block;
            padding-bottom: 1.6rem;
            color: var(--color-black);
          }
          .middle-title ul li:hover {
            color: var(--color-e8);
          }
          .middle-title ul {
            margin-bottom: 1rem;
          }
          .middle_ul {
            padding: 0;
          }
          .middle_ul .middle-item {
            margin-bottom: 1rem;
          }
          .middle-item a {
            font: var(--font-16);
            font-weight: normal;
            padding-bottom: 0;
            position: relative;
            padding-left: 1.5rem;
            transition: color 0.3s ease;
            color: var(--color-black);
          }
          .middle-item a:hover {
            color: var(--color-e8);
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
            padding-left: 3rem;
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
            transition:
              background 0.3s ease,
              color 0.3s ease;
            font-weight: 700;
            padding: 1px 0;
          }
          .header-inner.innerPage {background-color:#deebf4}
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
            margin-bottom: 5.6rem;
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
            background: transparent;
            width: 100%;
            padding-inline: 2.2rem;
            padding-block: 1.6rem;
            font-weight: 700;
            position: absolute;
            bottom: 0;
            left: 0;
            font: var(--font-28);
            color: var(--color-white);
            font-family: var(--font-Condensed);
            font-weight: 600;
            text-transform: uppercase;
            z-index: 9;
          }
          .banner-label:before {
            content: "";
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            opacity: 0.85;
            background: transparent
              linear-gradient(
                0deg,
                var(--unnamed-color-000000) 0%,
                #00000000 100%
              )
              0% 0% no-repeat padding-box;
            background: transparent
              linear-gradient(0deg, #000000 0%, #00000000 100%) 0% 0% no-repeat
              padding-box;
            height: 207px;
            z-index: -1;
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
            display: flex;
            margin-top: 18rem;
            padding-bottom: 14rem;
            gap: 2.4rem;
            width: 100%;
          }
          .close-btn {
            margin: 3rem 8rem;
          }

          @media (max-width: 2550px) {
            .mega-left {
              width: 85rem;
            }
            .nav-list {
            gap: 3.9rem;
          
          }
          }

          @media (max-width: 1649px) {
            .hamburger {
              padding: 1.5rem 1.5rem 1.5rem;
            }
          }
          @media (max-width: 1599px) {
            .mega-right {
              padding-right: 6.8rem;
            }
            .site-header > .nav-container {
              padding-inline: 6.8rem;
            }
            .menu-middle {
              padding: 7rem;
            }
            .menu-left-item {
              padding: 1rem 5rem 1rem 10rem;
            }
            .menu-left {
              padding-top: 6rem;
            }
            .right-inner .first-content {
              padding-top: 0rem;
            }
            .acresData p {
              max-width: 46%;
            }
            .mega-left {
              width: 50rem;
            }
            .mega-right {
              width: 72%;
            }

            .mega-right-text {
              width: 26%;
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

            .vid-thumb-cont {
              padding-right: 2rem;
            }
            .engineering-dropdown {
              width: 50%;
            }
            .ad-left {
              padding: 4rem;
            }
            .ad-middle {
              padding: 4rem;
            }
            .admission-dropdown {
              top: 16rem;
            }
            .hamburger {
              padding: 1.5rem 1.5rem 1.5rem;
            }
          }
          @media (max-width: 1024px) {
            .menu-middle {
              padding: 7rem 5rem 0;
            }
            .menu-left-item {
              padding: 1rem 2rem 1rem 6rem;
            }
            .menu-right {
              padding-top: 7rem;
            }
            .right-inner .first-content {
              width: 40%;
            }
            .menu-overlay.open .close-btn {
              width: 25px;
              height: 25px;
              font-size: 15px;
              top: -3px;
              right: -33px;
            }
            .engineering-dropdown {
              width: 60%;
            }
            .mega-right-banners {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
            }
            .mega-right-text {
              width: 65%;
            }
            .mega-left {
              width: 40rem;
            }
          }
          @media (max-width: 991px) {
            .site-header {
              position: relative;
            }
            .right-navbar {
              display: none;
            }
            .brand-wrap {
              margin: 0 auto;
            }
            .dashbord-logo {
              display: none;
            }
            .engineering-dropdown {
              width: 80%;
            }
          }

          .panel-wrapper {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 900;
            pointer-events: none;
          }
          .panel-wrapper .panel {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #f0f0f0;
            transform: translateY(100%);
            transition: transform 0.3s ease-in-out;
            overflow-y: auto;
            pointer-events: auto;
            display: flex;
            flex-direction: column;
            box-sizing: border-box;
          }

          .panel-wrapper .panel.open {
            transform: translateY(0);
          }
          .panel ul li {
            letter-spacing: -0.18px;
            font: var(--font-18);
            list-style: none;
            border-bottom: 1px dashed rgba(195, 195, 195, 0.67);
          }
          .menu-panel ul li {
            padding-block: 2rem;
          }
          .contact-info li {
            padding-block: 2rem;
          }
          .admissions-menu-wrapper {
            width: 100%;
          }
          .admissions-menu-wrapper ul li {
            padding-block: 2rem;
          }
          .panel ul li:last-child {
            border: none;
          }
          .panel ul li a {
            letter-spacing: -0.18px;
            font: var(--font-18);
            color: var(--color-white);
            font-family: var(--font-Roboto);
            line-height: 1.5;
            font-size: 18px;
          }
          .courses-panel ul,
          .admissions-panel ul,
          .menu-panel ul,
          .contact-panel ul {
            list-style: none;
            padding: 0;
            margin: 0;
            padding: 5rem 2rem 12rem;
            width: 100%;
          }
          .courses-panel {
            position: relative;
          }
          .courses-panel::before {
            content: "";
            background: var(--color-e8);
            z-index: -1;
            width: 100%;
            height: 32%;
            position: absolute;
            top: 0;
            left: 0;
          }
          .course-heading {
            padding: 5rem 4rem 2rem;
          }
          .mobCourses ul {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            padding-block: 0 12rem;
            gap: 1.5rem;
          }
          .mobCourses ul li {
            display: block;
            border: none;
          }
          .courses-menu figure {
            position: relative;
          }
          .coursesImg {
            position: relative;
          }
          .coursesImg::before {
            content: "";
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background: transparent
              linear-gradient(180deg, #00000000 0%, #000000 100%) 0% 0%
              no-repeat padding-box;
            opacity: 0.83;
            height: 166px;
            bottom: 0;
          }
          .courses-menu figcaption {
            position: absolute;
            bottom: 0rem;
            left: 0;
            width: 100%;
            padding: 1.2rem;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 0.5rem;
            color: #fff;
          }
          .courses-menu figcaption h4 {
            font: var(--font-21);
            font-weight: 700;
            font-family: var(--font-Condensed);
            letter-spacing: -0.6px;
            color: #fff;
            text-transform: uppercase;
          }
          .course-heading h4 {
            text-align: center;
            font: var(--font-45);
            letter-spacing: -1.92px;
            text-transform: uppercase;
            margin-bottom: 1.7rem;
            font-weight: 700;
            line-height: 1;
            font-family: var(--font-Condensed);
            max-width: 40%;
            color: var(--color-white);
            margin: 0 auto;
          }
          .admissions-panel ul {
            padding-bottom: 0;
            background: #e6ffff;
          }
          .courses-menu li {
            display: flex;
          }
          .admissions-contact {
            background: #e6ffff;
            padding: 2rem 2rem 16rem;
          }
          .admissions-heading h4 {
            font: var(--font-45);
            letter-spacing: -1.92px;
            text-transform: uppercase;
            margin-bottom: 1.7rem;
            font-weight: 700;
            line-height: 1;
            font-family: var(--font-Condensed);
            max-width: 30%;
          }
          .admissions-contact ul {
            padding: 0rem;
            background: #e6ffff;
          }
          .admissions-contact ul li {
            display: flex;
            align-items: center;
            gap: 0.7rem;
          }
          .admissions-contact ul li > a {
            color: #018ce8;
            letter-spacing: -0.21px;
            font: var(--font-21);
            font-weight: 600;
          }
          .admissions-contact h4 {
            font-size: 14px;
            letter-spacing: 0px;
            font-family: var(--font-Condensed);
            color: var(--color-ai);
            font-weight: 700;
            line-height: 1.5;
          }
          .menu-top {
            background: var(--color-e8);
          }
          .menu-panel .menu-top {
            padding-bottom: 0;
          }
          .contactBtn {
            margin-top: 2rem;
            display: flex;
            gap: 1.2rem;
          }
          .contactBtn .apply {
            font-size: 14px;
            font-weight: 600;
            color: #000;
            letter-spacing: 0.56px;
            background: #ffc100;
            padding: 1.2rem 2.4rem 1.1rem;
            font-family: var(--font-Condensed);
          }
          .contactBtn .dwnload {
            font-size: 14px;
            font-weight: 600;
            color: #000;
            letter-spacing: 0.56px;
            padding: 0.8rem 1rem 0.8rem;
            font-family: var(--font-Condensed);
            border: solid 1px #ddd;
            display: flex;
            align-items: center;
            gap: 0.8rem;
          }
          .contact-panel {
            background: #e6ffff;
            z-index: 1;
            width: 100%;
          }
          .contact-panel .contact-info {
            padding-top: 0;
            margin-top: -5rem;
          }
          .contact-panel .contact-info li {
            text-align: center;
            max-width: 50%;
            margin: 0 auto;
          }
          .contact-panel .contact-info li a {
            color: var(--color-black);
            text-align: center;
          }
          .contact-panel .contact-info li:nth-child(2) a {
            color: #018ce8;
            letter-spacing: -0.21px;
            font: var(--font-21);
            font-weight: 600;
          }
          .containerXl {
            max-width: 1920px;
            width: 100%;
            margin: 0 auto;
            box-sizing: border-box;
          }
          .nav-container {
            width: 100%;
          }
          .contact-panel .contact-info li:nth-child(3) a {
            color: #018ce8;
            letter-spacing: -0.21px;
            font: var(--font-21);
            font-weight: 600;
          }
          .panel .menu-bottom li > a {
            color: #000;
          }
          .admissions-menu li > a {
            color: #000 !important;
          }
          .panel-wrapper .panel ul:nth-of-type(2) {
            background: #e6ffff;
            padding-top: 0;
            height: 100%;
          }
          .panel-wrapper .panel ul:nth-of-type(2) li {
            color: #000;
          }
          .header-inner.header-scrolled {
            padding-block: 1.5rem;
          }
          .contact-heading {
            padding-block: 5rem 3rem;
            text-align: center;
          }
          .contact-heading h4 {
            font: var(--font-18);
            color: var(--color-white);
            font-family: var(--font-Roboto);
            line-height: 1.6;
            font-weight: bold;
          }
          .panel-banner {
            margin-top: 1rem;
          }
          .contact-info .icon-img img {
            max-width: 50px;
            height: auto;
            margin-bottom: 1.5rem;
          }
          .panel-banner img {
            width: 100%;
            border-radius: 0.5rem;
            margin-bottom: 0.5rem;
          }
          .panel-banner h3 {
            margin: 0.2rem 0;
          }
          .contact-panel {
            position: relative;
          }
          .contact-panel img {
            display: block;
            width: 100%;
            border-radius: 0.5rem;
            width: 335px;
            height: 212px;
            margin: 0 auto;
          }
          .contactBanner img {
            width: 100%;
            height: auto;
            padding-inline: 2rem;
          }
          .contact-panel::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 21%;
            background: var(--color-e8);
            z-index: -1;
          }
          .mobile-bottom-menu {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100%;
            background: var(--color-4e);
            z-index: 1000;
          }
          .menu-list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            margin: 0;
            padding: 0;
            list-style: none;
            color: var(--color-4e);
          }
          .schoolDrp {
            font: var(--font-16);
            color: #16344e;
            font-family: var(--font-Condensed);
            font-weight: 500;
          }
          .schoolDrpheading {
            font: var(--font-24);
            color: #16344e;
            font-family: var(--font-Condensed);
            font-weight: 600;
            letter-spacing: -1.1px;
            line-height: 20px;
            text-transform: uppercase;
          }
          .menu-list li {
            text-align: center;
            padding-block: 2rem 0;
          }
          .menu-item.active {
            background: #e5ffff;
          }
          .menu-item.active .menu-name {
            color: #16344e;
          }
          .menu-item.active .icon img {
            filter: brightness(0) saturate(100%) invert(5%) sepia(99%)
              saturate(2385%) hue-rotate(175deg) brightness(91%) contrast(97%);
          }
          .menu-name {
            font: var(--font-12);
            color: var(--color-white);
            font-family: var(--font-Roboto);
            letter-spacing: 0px;
            font-weight: 300;
          }
          .menu-list button {
            background: none;
            border: none;
            color: var(--color-4e);
            flex-direction: column;
            align-items: center;
            cursor: pointer;
          }
          .icon {
            margin-bottom: 1.2rem;
          }
          .site-header.no-shadow {
            background: none !important;
          }

          @media (min-width: 992px) {
            .mobile-bottom-menu {
              display: none;
            }
            .mob-logo {
              display: none;
            }
          }
          @media (max-width: 767px) {
            .admissions-heading h4 {
              max-width: 38%;
            }
            .course-heading h4 {
              max-width: 50%;
            }
            .courses-menu li {
              padding: 0;
            }
            .brand-wrap.logo-content {
              display: block;
            }

            .engineering-dropdown-container {
              top: 85%;
              left: 13%;
            }
          }
          @media (max-width: 667px) {
            .contact-panel .contact-info li {
              max-width: 57%;
            }
            .admissions-heading h4 {
              max-width: 40%;
            }
            .course-heading h4 {
              max-width: 60%;
            }
          }
          @media (max-width: 576px) {
            .contact-panel .contact-info li {
              max-width: 69%;
            }
            .admissions-heading h4 {
              max-width: 62%;
            }
            .course-heading h4 {
              max-width: 99%;
            }
            .site-header > .nav-container {
              padding-inline: 0;
            }
            .engineering-dropdown {
              width: 100%;
              margin-inline: 2rem;
            }
            .engineering-dropdown-container {
              top: 85%;
              left: 0;
            }
          }
          @media (max-width: 420px) {
            .admissions-heading h4 {
              max-width: 75%;
            }
            .admissions-contact {
              background: #e6ffff;
              padding: 2rem 2rem 12rem;
            }
            .contact-panel .contact-info li {
              max-width: 100%;
            }
          }
          .site-header.not-home {
            background: none;
          }
          .site-header {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 1100;
            width: 100%;
          }

          .header-inner {
            width: 100%;
            padding-block: 2.4rem;
          }

          .containerXl {
            max-width: 1920px;
            width: 100%;
            margin: 0 auto;
            box-sizing: border-box;
            padding-inline: 9.8rem;
          }

          .nav-container {
            width: 100%;
            display: flex;
            justify-content: space-between;
          }
          .innerPage.header-scrolled {
            background: #deebf4;
          }
        `}
      </style>
    </header>
  );
}
