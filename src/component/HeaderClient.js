"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import "@fontsource/roboto-condensed";
import { FaChevronDown } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";

import { FiSearch } from "react-icons/fi";
import { APPLY_NOW, BASE_URL, WEB_URL } from "@/config/config";
import { useRouter } from "next/navigation";
import { PiArrowCircleRightThin } from "react-icons/pi";
import { Counter } from "./home-components/courses-offered-home/CourseOfferedComponent";

const ContactApi = `${BASE_URL}contact-info`;
const Addmision_Api = `${BASE_URL}admission`;
const Program_Api = `${BASE_URL}program-list`;
const MOBILE_HEADER_URL = `${BASE_URL}mobile-header`;

const mobilePanelsData = [
  {
    title: "Programs",
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
    title: "Admissions",
    name: "Admissions",
    heading:
      "<span class='blue-text CTA_Applynow'>APPLY NOW </span> <span class='text-dark'>FOR 2025</span>",
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
          className: "apply CTA_Applynow",
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
    title: "Contact",
    name: "Contact",
    heading: "CAMPUS ADDRESS ",
    bgImg: "/images/header/cont-mobmenu.png",
    icon: "/images/header/contact-mob.svg",
  },

  {
    title: "Menu",
    name: "Menu",
    icon: "/images/header/hamberger-mob.svg",
  },
];

export default function HeaderClient({
  initialNavLinks = [],
  initialAdmissionData = null,
  initialEngineeringData = [],
  initialMegaMenuData = [],
}) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const admissionRef = useRef(null);
  const [headerData, setHeaderData] = useState(initialNavLinks);
  const [admissionData, setAdmissionData] = useState(initialAdmissionData);
  const [engineeringData, setEngineeringData] = useState(initialEngineeringData);
  const [mobilePanels, setMobilePanels] = useState(mobilePanelsData);
  const [mobProgramList, setMobProgramList] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState([]); //[]
  const [megaMenuData, setMegaMenuData] = useState(initialMegaMenuData);
  const [isAcademic, setIsAcademic] = useState(false);
  const [openMenuAccordion, setOpenMenuAccordion] = useState(null);
  const [openChildAccordion, setOpenChildAccordion] = useState(null);
  const [activeMegaChildIndex, setActiveMegaChildIndex] = useState(0);
  const [activeMegaChildName, setActiveMegaChildName] = useState(null);
  const [activeLeftIndex, setActiveLeftIndex] = useState(0);
  const [activeMiddleIndex, setActiveMiddleIndex] = useState(null);
  const [globleSearch, setglobleSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [programsCount, setProgramsCount] = useState(null);
  // Add this state near other states
  const [searchError, setSearchError] = useState("");
  const [scrollDirection, setScrollDirection] = useState("up");

  const router = useRouter();

  const closeTimeoutRef = useRef(null);
  const prevScrollY = useRef(0);

  
  const [activePanel, setActivePanel] = useState(null);
  const navLinks = headerData || [];
  const admissionsData = admissionData || [];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (admissionRef.current && !admissionRef.current.contains(e.target)) {
        setAdmissionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleNavMouseEnter = (i, pageName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsAcademic(pageName?.toLowerCase() === "academics");
    setActiveDropdown(i);
    setActiveMegaChildIndex(0);

    const firstChild = navLinks?.[i]?.children?.[0];
    if (firstChild?.title) {
      setActiveMegaChildName(firstChild.title.toLowerCase());
    }
    // setActiveMegaChildName(pageName);
  };

  const handleNavMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setIsAcademic(false);
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
      setIsAcademic(false);
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

  const activeLeftMenu = megaMenuData?.[activeLeftIndex] || {};
  const activeMiddleMenu = activeLeftMenu.children?.[activeMiddleIndex] || {};
  const activeRightMenu = megaMenuData?.[0]?.right || {};

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
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 80);

      if (currentY > prevScrollY.current && currentY > 80) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      prevScrollY.current = currentY;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMounted]);

  const openMenu = () => {
    setMenuOpen(true);
    setActiveLeftIndex(0);
    setActiveMiddleIndex(null);
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

  // if (!isMounted) {
  //   return (
  //     <header
  //       style={{
  //         position: "fixed",
  //         top: 0,
  //         left: 0,
  //         right: 0,
  //         zIndex: 1100,
  //         height: "80px",
  //       }}
  //     ></header>
  //   );
  // }

  const handleSearch = () => {
    const trimmed = searchQuery.trim();
    if (!trimmed) return;
    if (trimmed.length < 3) {
      setSearchError("Please enter at least 3 characters");
      return;
    }
    setSearchError("");
    setglobleSearch(false);
    setSearchQuery("");
    router.push(`${WEB_URL}search?q=${encodeURIComponent(trimmed)}`);
  };

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
    setProgramsCount(json?.program_count?.department_programs_count);
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
                  class:""
                },
                {
                  name: data.email,
                  url: `mailto:${data.email}`,
                  contactIcon: "/images/header/mail-icon.svg",
                  class:"CTA_Email"
                },
                {
                  name: '+' + data.phone,
                  url: `tel:+${data.phone}`,
                  contactIcon: "/images/header/phone-icon.svg",
                  class:"CTA_Number"
                },
              ],
            }
            : item,
        ),
      );
    }
  };

  const loadMenu = async () => {
    const menuPanel = mobilePanels.find((x) => x.name === "Menu");
    if (menuPanel?.Menu?.length > 0) return;
    try {
      const res = await fetch(MOBILE_HEADER_URL);
      const json = await res.json();
      if (json.success && json.data.length > 0) {
        setMobilePanels((prev) =>
          prev.map((item) =>
            item.name === "Menu"
              ? {
                ...item,
                Menu: json.data.map((d) => ({
                  name: d.title,
                  url: d.url,
                  children: d.children || [], // ← store children
                })),
              }
              : item,
          ),
        );
      }
    } catch (err) {
      console.error("Mobile header API error:", err);
    }
  };

  const togglePanel = async (name) => {
    if (activePanel === name) {
      setActivePanel(null);
      return;
    }

    if (name === "Courses") await loadPrograms();
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
        className={`header-inner ${!isHomeLikePage ? "innerPage" : ""} ${scrolled ? "header-scrolled" : ""} ${isAcademic ? "academics" : ""} ${scrollDirection === "down" ? "header-hidden" : ""}`}
      >
        <div className="containerMD">
          <div
            className={`nav-container ${!isHomeLikePage ? "scroll_bg programs-nav not-home" : ""
              }`}
          >
            <div
              className={`brand-wrap logo-content ${scrolled ? "scrolled" : ""}`}
            >
              <div className="dashbord-logo">
                {/* <Link href="/" aria-label="Home">
                  <Image
                    src={
                      isHomeLikePage
                        ? "/images/header/home.png"
                        : "/images/header/inner-page.png"
                    }
                    className="site-logo"
                    alt="Site Logo"
                    width={325}
                    height={116}
                    priority
                  />
                </Link> */}
                <Link href="/" aria-label="Home" className="nav_logo">
                  <Image
                    src={
                      isHomeLikePage
                        ? "/images/header/homenew.png"
                        : "/images/header/homenew.png"
                    }
                    className="site-logo"
                    alt="Site Logo"
                    width={127}
                    height={129}
                    priority
                  />
                  <div className="logo_text">
                    <div className="uniname">JSS University</div>
                    <div className="uni_addrese">Noida, Uttar Pradesh</div>
                  </div>
                </Link>
              </div>

              <div className="mob-logo">
                <Link href="/" aria-label="Home">
                  <Image
                    src="/images/header/homenew.png"
                    className="site-logo"
                    alt="Site Logo"
                    width={180}
                    height={70}
                    priority
                  />
                  {/* <div className="logo_text">
                    <div className="uniname">JSS University</div>
                    <div className="uni_addrese">Noida, Uttar Pradesh</div>
                  </div> */}
                </Link>
              </div>
            </div>

            <div className="right-navbar">
              <nav className="desktop-nav" aria-label="Main navigation">
                <ul className="nav-list">
                  {navLinks.map((l, i) => (
                    <li
                      key={i}
                      className={`nav-item ${activeDropdown === i ? "active-items" : ""
                        }`}
                      onMouseEnter={() => handleNavMouseEnter(i, l.title)}
                      onMouseLeave={handleNavMouseLeave}
                    >
                      <Link
                        href={WEB_URL + l.url}
                        className={`nav-link nav-lists`}
                        aria-label={`View ${l.title}`}
                      >
                        {l.title}
                      </Link>
                      {activeDropdown === i && l.children?.length > 0 && (
                        <div
                          className={`mega-dropdown ${activeDropdown === i ? "d-flex" : ""}`}
                          role="menu"
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <div className="containerXl">
                            <div className="meg_drop_main">
                              <div className="mega-left">
                                <ul>
                                  {l.children.map((d, j) => (
                                    <li
                                      key={j}
                                      className={`mega-left-item ${activeMegaChildIndex === j ? "active" : ""}`}
                                      onClick={() => {
                                        if (
                                          !d.url ||
                                          d.url === "#" ||
                                          d.url === ""
                                        ) {
                                          setActiveMegaChildIndex(j);
                                          setActiveMegaChildName(d.title.toLowerCase());
                                        } else {
                                          setActiveDropdown(null);
                                          setActiveMegaChildName('');
                                        }
                                      }}
                                    >
                                      <Link
                                        href={
                                          d.url !== "#" ? WEB_URL + d.url : "#"
                                        }
                                        className="dropdown-item"
                                        role={d.url == "#" ? "button" : ""}
                                      >
                                        {d.title}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <div className="mega-right">
                                {(() => {
                                  const activeChild = l.children?.[activeMegaChildIndex];
                                  const isProgramsChild = activeMegaChildName?.includes("program");
                                  const rightData = activeChild?.right || (isProgramsChild ? l.right : null);

                                  // PROGRAMS (index 0) — existing content
                                  if (rightData) {
                                    return (
                                      <>
                                        <div className="mega-right-text">
                                          <p className="mega-subtitle">
                                            {rightData.subtitle}
                                          </p>
                                          <h2
                                            className="mega-title"
                                            dangerouslySetInnerHTML={{
                                              __html: rightData.title,
                                            }}
                                          />
                                          <p className="mega-desc">
                                            {rightData.desc}
                                          </p>

                                          {/* apply now button */}
                                          <div className="mega-ctas">
                                            {rightData.ctas?.map((cta, idx) => (
                                              <Link
                                                key={idx}
                                                href={cta.url}
                                                className={`cta program_btn ${cta.type}`}
                                                style={{ color: "inherit" }}
                                                onClick={handleDropdownMouseLeave}
                                              >
                                                {cta.text}
                                                <svg
                                                  className="cta-arrow"
                                                  style={{ marginLeft: "1rem" }}
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
                                          <div className="academic_apply_now">
                                            <Link
                                              onClick={handleDropdownMouseLeave}
                                              href={APPLY_NOW} target="_blank" className="apply-btn1 CTA_Applynow" rel="noopener noreferrer">Apply Now</Link>
                                          </div>
                                        </div>

                                        {rightData.banners?.length > 0 && (
                                          <div className="mega-right-banners">
                                            {rightData.banners.map((b, idx) => (
                                              <a
                                                key={idx}
                                                href={`${WEB_URL}programs?type=${b.url}`}
                                              >
                                                <div
                                                  className="banner shine-effect"
                                                  onClick={() =>
                                                    setActiveDropdown(null)
                                                  }
                                                >
                                                  <Image
                                                    src={b.img}
                                                    alt={b.title}
                                                    width={348}
                                                    height={438}
                                                    className="courses_img"
                                                  />
                                                  <span className="banner-label">
                                                    {b.title}
                                                  </span>
                                                </div>
                                              </a>
                                            ))}
                                          </div>
                                        )}
                                      </>
                                    );
                                  }

                                  // SCHOOLS (index 1)
                                    if (activeMegaChildName.includes("school")) {
                                    return (
                                      <div className="mega-schools-list">
                                        <ul>
                                          {engineeringData.map((school) => (
                                            <li key={school.id}>
                                              <Link
                                                href={`${WEB_URL}schools/${school.slug}`}
                                                onClick={() =>
                                                  setActiveDropdown(null)
                                                }
                                              >
                                                {school.name}
                                              </Link>
                                            </li>
                                          ))}
                                        </ul>
                                        <Image
                                          src={
                                            "/images/header/school-image.webp"
                                          }
                                          width={1264}
                                          height={756}
                                          className="school_img"
                                          alt="school image"
                                        />
                                      </div>
                                    );
                                  }

                                  // DEPARTMENTS (index 2)
                                  if (activeMegaChildName.includes("department")) {
                                    // Define column sizes explicitly: 2, 2, 3
                                    const columnSizes = [2, 2, 3];
                                    const columns = [];
                                    let index = 0;

                                    for (const size of columnSizes) {
                                      columns.push(engineeringData.slice(index, index + size));
                                      index += size;
                                    }

                                    return (
                                      <div className="mega-departments-grid">
                                        {columns.map((col, colIdx) => (
                                          <div key={colIdx} className="mega-dept-column">
                                            {col.map((school) => (
                                              <div key={school.id} className="mega-dept-block">
                                                <h6 className="mega-dept-school-name">
                                                  <Link
                                                    href={`${WEB_URL}schools/${school.slug}`}
                                                    onClick={() => setActiveDropdown(null)}
                                                  >
                                                    {school.name}
                                                  </Link>
                                                </h6>
                                                {school.departments?.length > 0 && (
                                                  <ul>
                                                    {school.departments.map((dept) => (
                                                      <li key={dept.id}>
                                                        <Link
                                                          href={`${WEB_URL}department/${dept.slug}`}
                                                          onClick={() => setActiveDropdown(null)}
                                                        >
                                                          {dept.name}
                                                        </Link>
                                                      </li>
                                                    ))}
                                                  </ul>
                                                )}
                                              </div>
                                            ))}
                                          </div>
                                        ))}
                                      </div>
                                    );
                                  }

                                  // FACULTY LIST (index 3) or any other — placeholder
                                  return (
                                    <div style={{ height: "200px" }}>
                                      other content
                                    </div>
                                  );
                                })()}
                              </div>
                            </div>
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
                            <a className="CTA_Email" href={`mailto:${admissionsData.left.email}`}>
                              <img
                                src="/images/header/mailicon.svg"
                                className="img-fluid"
                                alt="Email"
                              />
                              {admissionsData.left.email}
                            </a>
                          </p>
                          <p>
                            <a className="CTA_Number" href={`tel:${admissionsData.left.phone}`}>
                              <img
                                src="/images/header/phoneicon.svg"
                                className="img-fluid"
                                alt="Phone"
                              />
                              {admissionsData.left.phone}
                            </a>
                          </p>
                        </div>
                        <div className="ad-ctas">
                          {admissionsData.left.ctas.map((cta, idx) => (
                            <a
                              key={idx}
                              target="_blank"
                              href={`${cta.url || APPLY_NOW}`}
                              className={`cta applynow ${cta.type} ${cta.text == 'APPLY NOW' ? 'CTA_Applynow' : 'CTA_Brochure'}`}
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
                                href={`${link?.target == "_blank" ? link.url : WEB_URL + link.url}`}
                                style={{ color: "inherit" }}
                                onClick={() => setAdmissionOpen(false)}
                                target={link?.target}
                                aria-label={`View ${link.title}`}
                              >
                                {link.title}
                                <img
                                  src="/images/header/listicon.svg"
                                  className="img-fluid"
                                  alt="Arrow"
                                />
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <div className="ad-stats">
                          <h3>{admissionsData.middle.stats.text}</h3>
                          <p>{admissionsData.middle.stats.subtext}</p>
                          <Link
                            href={
                              WEB_URL + admissionsData.middle.stats.btnText.url
                            }
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
                  className="hamburger me-2"
                  onClick={() => setglobleSearch(true)}
                >
                  <FiSearch size={18} />
                </button>
                <button
                  aria-label="Open menu"
                  className="hamburger"
                  onClick={openMenu}
                >
                  <Image
                    src="/images/header/hum-icon.svg"
                    className="site-logo humb_icon"
                    alt="Site Logo"
                    width={18}
                    height={18}
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
            aria-modal="true"
            aria-label="Main navigation"
          >
            <button
              className="close-btn"
              aria-label="Close menu"
              onClick={closeMenu}
            >
              <img src="/images/header/close-icon.svg" alt="Close menu" aria-hidden="true" />
            </button>

            <div className="hamburger-layout">
              <aside className="menu-left">
                <ul>
                  {megaMenuData.map((item, idx) => (
                    <li
                      key={item.id}
                      className={`menu-left-item ${activeLeftIndex === idx ? "active" : ""}`}
                      onClick={() => {
                        setActiveLeftIndex(idx);
                        setActiveMiddleIndex(null);
                      }}
                    >
                      <Link
                        href={
                          item.url && item.url.includes('.pdf')
                            ? item.url
                            : WEB_URL + item.url
                        }
                        target={item?.target_blank ? '_blank' : '_self'}
                        className="hambur_links"
                        aria-label={`View ${item.title}`}
                        onClick={(e) => {
                          if (!item.url || item.url === "#") {
                            e.preventDefault();
                          } else {
                            closeMenu();
                          }
                        }}
                      >
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
                        <Link
                          href={
                            item.url && (item.url.includes('.pdf') || item?.target_blank)
                              ? item.url
                              : WEB_URL + item.url
                          }
                          className="hambur_link"
                          onClick={() => {
                            closeMenu();
                          }}
                          target={item?.target_blank ? "_blank" : "_self"}
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="middle-submenu">
                  {activeMiddleMenu.children?.map((sub) => (
                    <li key={sub.id}>
                      <Link
                        href={WEB_URL + sub.url}
                        onClick={() => {
                          closeMenu();
                        }}
                      >
                        {sub.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>

              <section className="menu-right">
                <div className="right-inner h-100">
                  <div className="image-box">
                    <div className="first-content">
                      {activeRightMenu?.first_section?.title && (
                        <h1
                          dangerouslySetInnerHTML={{
                            __html: activeRightMenu?.first_section?.title,
                          }}
                        />
                      )}
                      {activeRightMenu.first_section?.subtitle && (
                        <p>{activeRightMenu.first_section.subtitle}</p>
                      )}

                      {activeRightMenu.first_section?.link && (
                        <Link
                          href={WEB_URL + activeRightMenu.first_section.link}
                          onClick={() => {
                            closeMenu();
                          }}
                        >
                          <img
                            src="/images/header/banner-arrow.svg"
                            alt="Arrow"
                          />
                        </Link>
                      )}

                      {activeRightMenu?.first_section?.image && (
                        <div className="hamburger-section-img virtural-img">
                          <Image
                            className="hum-small"
                            src={activeRightMenu?.first_section?.image}
                            alt={"image"}
                            fill
                            style={{ objectFit: "cover" }}
                          />

                          <div className="items-menu_grp">
                            <div className="items-menu_grp_cont">
                              {activeRightMenu?.first_section?.heading && (
                                <h4>
                                  {activeRightMenu?.first_section?.heading}
                                </h4>
                              )}
                              {activeRightMenu?.first_section?.subheading && (
                                <p>
                                  {activeRightMenu?.first_section?.subheading}
                                </p>
                              )}
                            </div>
                          </div>

                          <Link
                            href="#"
                            className="links"
                            aria-label={`View ${activeRightMenu?.first_section?.title}`}
                            onClick={() => {
                              closeMenu();
                            }}
                          />
                        </div>
                      )}

                      {/* <div className="hamburger-section-img virtural-img">
                        <Image
                          className="hum-small"
                          src={"/images/virtual-campus.png"}
                          alt={"image"}
                          fill
                          style={{ objectFit: "cover" }}
                        />

                        <div className="items-menu_grp">
                          <div className="items-menu_grp_cont">
                            <h4>Virtual campus</h4>
                            <p>Sed ut perspiciatis</p>
                          </div>
                        </div>
                      </div> */}
                    </div>

                    <div className="second-content">
                      {activeRightMenu.second_section?.image && (
                        <div className="hamburger-section-img">
                          <Image
                            src={activeRightMenu.second_section.image}
                            alt={activeData.secondContent.alt}
                            fill
                            style={{ objectFit: "cover" }}
                            sizes="100vw"
                          />

                          <div className="vid-thumb-grp">
                            {activeRightMenu.video_section?.video_url && (
                              <div className="vid-thumb-icon"></div>
                            )}

                            <div className="vid-thumb-cont">
                              {activeRightMenu.second_section?.title && (
                                <h6>{activeRightMenu.second_section?.title}</h6>
                              )}

                              {activeRightMenu.second_section?.subtitle && (
                                <h4>
                                  {activeRightMenu.second_section?.subtitle}
                                </h4>
                              )}
                            </div>
                          </div>

                          <Link
                            href={
                              activeRightMenu.video_section?.video_url
                                ? activeRightMenu.video_section.video_url
                                : WEB_URL +
                                "leadership/jagadguru-sri-shivarathri-deshikendra-mahaswamiji"
                            }
                            className="links"
                            aria-label={`View ${activeRightMenu.video_section?.video_url ? activeRightMenu.video_section.video_url : "Jagadguru Sri Shivarathri Deshikendra Mahaswamiji"}`}
                            onClick={() => {
                              closeMenu();
                            }}
                          />
                        </div>
                      )}

                      {/* <div className="hamburger-section-img">
                        <Image
                          src={"/images/header/humburger-second-banner.png"}
                          alt={"image"}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="100vw"
                        />

                        <div className="vid-thumb-grp">
                          <div className="vid-thumb-cont">
                            <h6>MESSAGE FROM CHANCELLOR</h6>

                            <h4>
                              JAGADGURU SRI SHIVARATHRI DESHIKENDRA MAHASWAMIJI
                            </h4>
                          </div>
                        </div>
                      </div> */}

                      <div className="acresData">
                        <h1
                          dangerouslySetInnerHTML={{
                            __html: activeRightMenu.second_section?.heading,
                          }}
                        />
                        {/* <h1>
                          <span>21+</span>
                          Acres
                        </h1> */}
                        {activeRightMenu.second_section?.subheading && (
                          <p>{activeRightMenu.second_section?.subheading}</p>
                        )}
                        {/* <p>
                          Campus Area of the social-educational-spritual
                          philosophy
                        </p> */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>



          {/* Popup */}
          {globleSearch && (
            <div className={`g_search_main ${open ? "active" : ""}`}>
              <div className="g_sc_box">
                <div className="sec_inpu_box">
                  <div>
                    <input
                      type="text"
                      className="form-control global_search_in"
                      placeholder="Search..."
                      value={searchQuery}
                      onChange={(e) => {
                        setSearchQuery(e.target.value);
                        if (e.target.value.trim().length >= 3)
                          setSearchError("");
                      }}
                      onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                    />
                    <button
                      type="button"
                      className="btn global_search_btn"
                      onClick={handleSearch}
                    >
                      <FiSearch size={16} />
                    </button>
                  </div>

                  {searchError && (
                    <p
                      className="search_error"
                      style={{
                        color: "#b7b7b7",
                        font: "var(--font-12)",
                        position: "absolute",
                        marginTop: "0.5rem",
                      }}
                    >
                      {searchError}
                    </p>
                  )}
                </div>

                {/* Error message */}
                <button
                  onClick={() => {
                    setglobleSearch(false);
                    setSearchQuery("");
                  }}
                  className="secbtn_close"
                >
                  <RiCloseLargeFill size={30} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="mobile_bottom_menu_fixed">
        <div className="panel-wrapper">
          <div className="mob-menu-sec">
            {mobilePanels.map((item) => (
              <div
                key={item.name}
                className={`panel ${activePanel === item.name ? "open" : ""
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
                            <Link
                              href={`${WEB_URL}programs?type=${sub.slug}`}
                              onClick={() => {
                                // setMenuOpen(false);
                                setActivePanel(null);
                              }}
                            >
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
                                  <img
                                    src={"/images/header/courseIcon.svg"}
                                    alt={`${sub.name} icon`}
                                    className="course-icon"
                                  />
                                </figcaption>
                              </figure>
                            </Link>
                          </li>
                        ))}
                        <li>
                            <Link
                              href={`${WEB_URL}programs`}
                              className="explore_programs"
                              onClick={() => {
                                // setMenuOpen(false);
                                setActivePanel(null);
                              }}
                            >
                              <div>
                                <p>Explore All</p>
                                <h4
                                  className="blue-text counter"
                                >
                                  <Counter start={1} end={programsCount} duration={2500} />+
                                </h4>
                                <h5 className="title">ACADEMIC PROGRAMS</h5>
                              </div>
                              <div className="arrow_btn">
                                <img
                                    src={"/images/header/courseIcon.svg"}
                                    alt={`icon`}
                                    className="course-icon"
                                  />
                              </div>
                            </Link>
                          </li>
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
                            <Link
                              href={WEB_URL + link.url}
                              className="page-link"
                              onClick={() => {
                                setActivePanel(null);
                              }}
                              aria-label={`View ${link.title}`}
                            >
                              {link.title}
                            </Link>
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
                            <a className="liText CTA_Email" href={`mailto:${admissionData.left.email}`}>
                              {admissionData.left.email}
                            </a>
                          </li>
                          <li>
                            <img
                              src="/images/header/phone-icon.svg"
                              alt="phone"
                            />
                            <a className="liText CTA_Number" href={`tel:${admissionData.left.phone}`}>
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
                                `links1 ${btn.type === "primary" ? "apply" : "dwnload"}`
                              }
                              target="_blank"
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
                            <a href={sub.url} className={sub.class ? sub.class : ''}>{sub.name}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                {item.name === "Menu" &&
                  activePanel === "Menu" &&
                  item.Menu?.length > 0 && (
                    <div className="mobile_menus">
                      <ul className="menu-top">
                        {item.Menu.slice(0, 6).map((sub, idx) => (
                          <li key={idx} className="">
                            <Link
                              href={sub.children?.length > 0 ? "" : sub.url}
                              className="menu-link"
                              onClick={
                                sub.children?.length > 0
                                  ? () =>
                                    setOpenMenuAccordion(
                                      openMenuAccordion === idx
                                        ? null
                                        : idx,
                                    )
                                  : () => setActivePanel(null) // ← add this
                              }
                              style={
                                sub.children?.length > 0
                                  ? { cursor: "pointer" }
                                  : {}
                              }
                            >
                              <span className="menu_title">{sub.name}</span>
                              {sub.children?.length > 0 && (
                                <span
                                  className={`menu-arrow ${openMenuAccordion === idx ? "open" : ""}`}
                                >
                                  <FaChevronDown size={12} />
                                </span>
                              )}
                            </Link>
                            {sub.children?.length > 0 &&
                              openMenuAccordion === idx && (
                                <ul className="menu-children">
                                  {sub.children.map((child, cidx) => (
                                    <li key={cidx}>
                                      <Link
                                        href={
                                          child.school?.length > 0
                                            ? "#"
                                            : WEB_URL + child.url
                                        }
                                        onClick={() => {
                                          if (child.school?.length > 0) {
                                            setOpenChildAccordion(
                                              openChildAccordion === cidx
                                                ? null
                                                : cidx,
                                            );
                                          } else {
                                            setActivePanel(null);
                                          }
                                        }}
                                        style={
                                          child.school?.length > 0
                                            ? { cursor: "pointer" }
                                            : {}
                                        }
                                      >
                                        <span className="menu_title">
                                          {child.title}
                                        </span>
                                        {child.school?.length > 0 && (
                                          <span
                                            className={`menu-arrow ${openChildAccordion === cidx ? "open" : ""}`}
                                          >
                                            <FaChevronDown size={10} />
                                          </span>
                                        )}
                                      </Link>

                                      {child.school?.length > 0 &&
                                        openChildAccordion === cidx && (
                                          <ul className="menu-children">
                                            {child.school.map(
                                              (schoolItem, sidx) => (
                                                <li key={sidx}>
                                                  <Link
                                                    href={
                                                      WEB_URL +
                                                      "schools/" +
                                                      schoolItem.slug
                                                    }
                                                    onClick={() =>
                                                      setActivePanel(null)
                                                    }
                                                  >
                                                    {schoolItem.name}
                                                  </Link>
                                                </li>
                                              ),
                                            )}
                                          </ul>
                                        )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                          </li>
                        ))}
                      </ul>
                      {item.Menu.length > 6 && (
                        <ul className="menu-bottom">
                          {item.Menu.slice(6).map((sub, idx) => (
                            <li key={idx}>
                              <Link
                                href={
                                  sub.children?.length > 0
                                    ? ""
                                    : WEB_URL + sub.url
                                }
                                className="menu-link"
                                onClick={
                                  sub.children?.length > 0
                                    ? () =>
                                      setOpenMenuAccordion(
                                        openMenuAccordion === `b${idx}`
                                          ? null
                                          : `b${idx}`,
                                      )
                                    : () => setActivePanel(null) // ← add this
                                }
                                style={
                                  sub.children?.length > 0
                                    ? { cursor: "pointer" }
                                    : {}
                                }
                              >
                                <span className="menu_title">{sub.name}</span>
                                {sub.children?.length > 0 && (
                                  <span
                                    className={`menu-arrow ${openMenuAccordion === `b${idx}` ? "open" : ""}`}
                                  >
                                    <FaChevronDown size={12} />
                                  </span>
                                )}
                              </Link>
                              {sub.children?.length > 0 &&
                                openMenuAccordion === `b${idx}` && (
                                  <ul className="menu-children">
                                    {sub.children.map((child, cidx) => (
                                      <li key={cidx}>
                                        <a
                                          href={child.url}
                                          onClick={() => setActivePanel(null)}
                                          target={child.url.includes('.pdf') ? '_blank' : '_self'}
                                        >
                                          {child.title}
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
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
                    <img src={item.icon} alt={`${item.name} icon`}  />
                  </div>
                  <p className="menu-name">{item.title}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

    </header>
  );
}
