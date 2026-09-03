"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { BASE_URL, WEB_URL } from "@/config/config.mjs";

const ContactApi = `${BASE_URL}contact-info`;
const Program_Api = `${BASE_URL}program-list`;
const MOBILE_HEADER_URL = `${BASE_URL}mobile-header`;
const ADMISSION_API = `${BASE_URL}admission`;
const SCHOOL_API = `${BASE_URL}school-department-list`;
const HAMBURGER_API = `${BASE_URL}hamburger`;

const HeaderOverlays = dynamic(() => import("./Headeroverlays"), {
  ssr: false,
  loading: () => null,
});

const mobilePanelsData = [
  {
    title: "Programs",
    name: "Courses",
    icon: "/images/header/cource-mob.svg",
    visitIcon: "/images/header/courseIcon.svg",
    Menu: [
      { name: "UNDER GRADUATE", url: "/courses/undergraduate", image: "/images/header/course04.png" },
      { name: "POST GRADUATE", url: "/courses/postgraduate", image: "/images/header/course02.png" },
      { name: "PHD", url: "/courses/research", image: "/images/header/course03.png" },
      { name: "ACADEMIC PROGRAMS", url: "/courses/diploma", image: "/images/header/course01.png" },
    ],
  },
  {
    title: "Admissions",
    name: "Admissions",
    heading: "<span class='blue-text CTA_Applynow'>APPLY NOW </span> <span class='text-dark'>FOR 2025</span>",
    icon: "/images/header/admi-mob.svg",
    Menu: [
      { name: "Scholarship", url: "/admissions/calendar" },
      { name: "Course, Eligibility & Fee Structure", url: "/fee-Structure" },
      { name: "Admission Document & Undertaking", url: "/admissions/scholarship" },
      { name: "Admissions Office Contacts", url: "/admissions/international" },
      { name: "Hostel Details", url: "/admissions/international" },
    ],
    contact: {
      title: "ANY QUERY ? PLEASE MAIL US.",
      details: [
        { icon: "/images/header/mail-icon.svg", text: "principal@jssaten.ac.in", link: "mailto:principal@jssaten.ac.in" },
        { icon: "/images/header/phone-icon.svg", text: "+91-9311830458", link: "tel:+91-9311830458" },
      ],
      buttons: [
        { label: "APPLY NOW", link: "/apply", className: "apply CTA_Applynow" },
        { label: "DOWNLOAD SYLLABUS", link: "/downloads/syllabus", className: "dwnload", icon: "/images/header/dwnlodIcon.png" },
      ],
    },
  },
  {
    title: "Contact",
    name: "Contact",
    heading: "CAMPUS ADDRESS ",
    bgImg: "/images/header/cont-mobmenu.webp",
    icon: "/images/header/contact-mob.svg",
  },
  {
    title: "Menu",
    name: "Menu",
    icon: "/images/header/hamberger-mob.svg",
  },
];

const hamburgerMenudata = [
  {
    name: "About JSS University1",
    Menu: ["Overview", "Scholarships", "International Students"],
    firstContent: {
      title: "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
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
      title: "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
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
      title: "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
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
      title: "SRI SUTTUR MATH THE <span class='blue-text'> 1000 YEAR LEGACY</span>",
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

export default function HeaderClient({ initialNavLinks = [] }) {
  const pathname = usePathname();
  const router = useRouter();

  const [menuOpen, setMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [admissionOpen, setAdmissionOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const admissionRef = useRef(null);
  const [headerData] = useState(initialNavLinks);

  const [admissionData, setAdmissionData] = useState(null);
  const [engineeringData, setEngineeringData] = useState([]);
  const [megaMenuData, setMegaMenuData] = useState([]);

  const [admissionLoading, setAdmissionLoading] = useState(false);
  const [engineeringLoading, setEngineeringLoading] = useState(false);
  const [megaMenuLoading, setMegaMenuLoading] = useState(false);
  const admissionFetchedRef = useRef(false);
  const engineeringFetchedRef = useRef(false);
  const megaMenuFetchedRef = useRef(false);

  const [mobilePanels, setMobilePanels] = useState(mobilePanelsData);
  const [mobProgramList, setMobProgramList] = useState([]);
  const [activeDropdown, setActiveDropdown] = useState(null);
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
  const [searchError, setSearchError] = useState("");
  const [scrollDirection, setScrollDirection] = useState("up");
  const [activePanel, setActivePanel] = useState(null);

  const closeTimeoutRef = useRef(null);
  const prevScrollY = useRef(0);

  const navLinks = headerData || [];
  const admissionsData = admissionData || null;

  const loadAdmissionData = async () => {
    if (admissionFetchedRef.current) return;
    admissionFetchedRef.current = true;
    setAdmissionLoading(true);
    try {
      const res = await fetch(ADMISSION_API);
      const json = await res.json();
      setAdmissionData(json.data || null);
    } catch (err) {
      console.error("Admission data fetch error:", err);
      admissionFetchedRef.current = false;
    } finally {
      setAdmissionLoading(false);
    }
  };

  const loadEngineeringData = async () => {
    if (engineeringFetchedRef.current) return;
    engineeringFetchedRef.current = true;
    setEngineeringLoading(true);
    try {
      const res = await fetch(SCHOOL_API);
      const json = await res.json();
      setEngineeringData(json.data || []);
    } catch (err) {
      console.error("School/department data fetch error:", err);
      engineeringFetchedRef.current = false;
    } finally {
      setEngineeringLoading(false);
    }
  };

  const loadMegaMenuData = async () => {
    if (megaMenuFetchedRef.current) return;
    megaMenuFetchedRef.current = true;
    setMegaMenuLoading(true);
    try {
      const res = await fetch(HAMBURGER_API);
      const json = await res.json();
      setMegaMenuData(json.data || []);
    } catch (err) {
      console.error("Hamburger menu data fetch error:", err);
      megaMenuFetchedRef.current = false;
    } finally {
      setMegaMenuLoading(false);
    }
  };

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
                { name: data.address, url: data.direction_url, contactIcon: "/images/header/address-icon.svg", class: "" },
                { name: data.email, url: `mailto:${data.email}`, contactIcon: "/images/header/mail-icon.svg", class: "CTA_Email" },
                { name: "+" + data.phone, url: `tel:+${data.phone}`, contactIcon: "/images/header/phone-icon.svg", class: "CTA_Number" },
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
              ? { ...item, Menu: json.data.map((d) => ({ name: d.title, url: d.url, children: d.children || [] })) }
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
    if (name === "Admissions") await loadAdmissionData();
    setActivePanel(name);
  };

  // ---- effects ------------------------------------------------------

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (admissionRef.current && !admissionRef.current.contains(e.target)) {
        setAdmissionOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
    };
  }, []);

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

  useEffect(() => {
    if (!isMounted) return;
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        setAdmissionOpen(false);
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isMounted]);

  // ---- handlers -------------------------------------------------------

  const handleNavMouseEnter = (i, pageName) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsAcademic(pageName?.toLowerCase() === "academics");
    setActiveDropdown(i);
    setActiveMegaChildIndex(0);
    loadEngineeringData();

    const firstChild = navLinks?.[i]?.children?.[0];
    if (firstChild?.title) {
      setActiveMegaChildName(firstChild.title.toLowerCase());
    }
  };

  const handleNavMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setIsAcademic(false);
    }, 100);
  };

  const handleDropdownMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
      setIsAcademic(false);
    }, 100);
  };

  const openMenu = () => {
    loadMegaMenuData();
    setMenuOpen(true);
    setActiveLeftIndex(0);
    setActiveMiddleIndex(null);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    setActiveIndex(null);
  };

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

  // Preload the overlay chunk as soon as the user shows *any* intent to
  // interact, so it's ready by the time they actually click/hover.
  const preloadOverlays = () => {
    import("./Headeroverlays");
  };

  const activeData = hamburgerMenudata[activeIndex] || hamburgerMenudata[0];

  const pathParts = pathname.split("/").filter(Boolean);
  const isHome = pathname === "/";
  const isSchoolHome = pathParts.length === 2 && pathParts[0] === "schools";
  const isDepartmentHome = pathParts.length === 2 && pathParts[0] === "department";
  const isSchoolInner = pathParts.length > 2 && pathParts[0] === "schools";
  const isDepartmentInner = pathParts.length > 2 && pathParts[0] === "department";
  const isHomeLikePage = isHome || isSchoolHome || isDepartmentHome;

  return (
    <header
      className={`site-header
  ${pathname.includes("programs") ? "no-shadow" : ""}
  ${!isHomeLikePage ? "programs-header not-home" : ""}
  ${isSchoolInner || isDepartmentInner ? "school-dept-header" : ""}
`}
      onMouseEnter={preloadOverlays}
    >
      <div
        className={`header-inner ${!isHomeLikePage ? "innerPage" : ""} ${scrolled ? "header-scrolled" : ""} ${isAcademic ? "academics" : ""} ${scrollDirection === "down" ? "header-hidden" : ""}`}
      >
        <div className="containerMD">
          <div className={`nav-container ${!isHomeLikePage ? "scroll_bg programs-nav not-home" : ""}`}>
            <div className={`brand-wrap logo-content ${scrolled ? "scrolled" : ""}`}>
              <div className="dashbord-logo">
                <Link href="/" aria-label="Home" className="nav_logo">
                  <Image
                    src="/images/header/homenew.png"
                    className="site-logo"
                    alt="Site Logo"
                    width={127}
                    height={129}
                    priority
                    fetchPriority="high"
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
                </Link>
              </div>
            </div>

            <div className="right-navbar">
              <nav className="desktop-nav" aria-label="Main navigation">
                <ul className="nav-list">
                  {navLinks.map((l, i) => (
                    <li
                      key={i}
                      className={`nav-item ${activeDropdown === i ? "active-items" : ""}`}
                      onMouseEnter={() => handleNavMouseEnter(i, l.title)}
                      onMouseLeave={handleNavMouseLeave}
                    >
                      <Link href={WEB_URL + l.url} className="nav-link nav-lists" aria-label={`View ${l.title}`}>
                        {l.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="right-navbar-section">
                <div className="admission-wrap" ref={admissionRef}>
                  <button
                    className="admission-btn"
                    onClick={() => {
                      setAdmissionOpen((prev) => !prev);
                      loadAdmissionData();
                    }}
                  >
                    ADMISSIONS
                  </button>
                </div>
                <button
                  aria-label="Open search"
                  className="hamburger me-2"
                  onClick={() => setglobleSearch(true)}
                >
                  <FiSearch size={18} />
                </button>
                <button aria-label="Open menu" className="hamburger" onClick={openMenu}>
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
        </div>
      </div>

      <div className="mobile_bottom_menu_fixed">
        <div className="mobile-bottom-menu">
          <ul className="menu-list">
            {mobilePanels.map((item) => (
              <li key={item.name} className={activePanel === item.name ? "menu-item active" : "menu-item"}>
                <button onClick={() => togglePanel(item.name)}>
                  <div className="icon">
                    <img width={28} height={18} src={item.icon} alt={`${item.name} icon`} />
                  </div>
                  <p className="menu-name">{item.title}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Everything below only mounts once it's actually needed —
          mega dropdown, admission panel, hamburger overlay, search
          popup, mobile panel bodies. Code-split, loaded on demand. */}
      <HeaderOverlays
        navLinks={navLinks}
        activeDropdown={activeDropdown}
        setActiveDropdown={setActiveDropdown}
        activeMegaChildIndex={activeMegaChildIndex}
        setActiveMegaChildIndex={setActiveMegaChildIndex}
        activeMegaChildName={activeMegaChildName}
        setActiveMegaChildName={setActiveMegaChildName}
        engineeringData={engineeringData}
        engineeringLoading={engineeringLoading}
        handleDropdownMouseEnter={handleDropdownMouseEnter}
        handleDropdownMouseLeave={handleDropdownMouseLeave}
        admissionOpen={admissionOpen}
        setAdmissionOpen={setAdmissionOpen}
        admissionsData={admissionsData}
        globleSearch={globleSearch}
        setglobleSearch={setglobleSearch}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchError={searchError}
        setSearchError={setSearchError}
        handleSearch={handleSearch}
        menuOpen={menuOpen}
        closeMenu={closeMenu}
        megaMenuData={megaMenuData}
        megaMenuLoading={megaMenuLoading}
        activeLeftIndex={activeLeftIndex}
        setActiveLeftIndex={setActiveLeftIndex}
        activeMiddleIndex={activeMiddleIndex}
        setActiveMiddleIndex={setActiveMiddleIndex}
        activeData={activeData}
        mobilePanels={mobilePanels}
        activePanel={activePanel}
        setActivePanel={setActivePanel}
        mobProgramList={mobProgramList}
        programsCount={programsCount}
        admissionData={admissionData}
        openMenuAccordion={openMenuAccordion}
        setOpenMenuAccordion={setOpenMenuAccordion}
        openChildAccordion={openChildAccordion}
        setOpenChildAccordion={setOpenChildAccordion}
      />
    </header>
  );
}