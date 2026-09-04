"use client";

import Link from "next/link";
import Image from "next/image";
import { FaChevronDown } from "react-icons/fa6";
import { RiCloseLargeFill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { APPLY_NOW, WEB_URL } from "@/config/config.mjs";
import { Counter } from "./home-components/courses-offered-home/CourseOfferedComponent";

export default function HeaderOverlays({
  navLinks,
  activeDropdown,
  setActiveDropdown,
  activeMegaChildIndex,
  setActiveMegaChildIndex,
  activeMegaChildName,
  setActiveMegaChildName,
  engineeringData,
  engineeringLoading,
  handleDropdownMouseEnter,
  handleDropdownMouseLeave,
  admissionOpen,
  setAdmissionOpen,
  admissionsData,
  globleSearch,
  setglobleSearch,
  searchQuery,
  setSearchQuery,
  searchError,
  setSearchError,
  handleSearch,
  menuOpen,
  closeMenu,
  megaMenuData,
  megaMenuLoading,
  activeLeftIndex,
  setActiveLeftIndex,
  activeMiddleIndex,
  setActiveMiddleIndex,
  activeData,
  mobilePanels,
  activePanel,
  setActivePanel,
  mobProgramList,
  programsCount,
  admissionData,
  openMenuAccordion,
  setOpenMenuAccordion,
  openChildAccordion,
  setOpenChildAccordion,
  admissionRef,
}) {
  const activeNavItem = activeDropdown !== null ? navLinks?.[activeDropdown] : null;
  const activeLeftMenu = megaMenuData?.[activeLeftIndex] || {};
  const activeMiddleMenu = activeLeftMenu.children?.[activeMiddleIndex] || {};
  const activeRightMenu = megaMenuData?.[0]?.right || {};

  return (
    <>
      {/* ---------- Desktop mega dropdown ---------- */}
      {activeNavItem?.children?.length > 0 && (
        <div
          className="mega-dropdown d-flex"
          role="menu"
          onMouseEnter={handleDropdownMouseEnter}
          onMouseLeave={handleDropdownMouseLeave}
        >
          <div className="containerXl">
            <div className="meg_drop_main">
              <div className="mega-left">
                <ul>
                  {activeNavItem.children.map((d, j) => (
                    <li
                      key={j}
                      className={`mega-left-item ${activeMegaChildIndex === j ? "active" : ""}`}
                      onClick={() => {
                        if (!d.url || d.url === "#" || d.url === "") {
                          setActiveMegaChildIndex(j);
                          setActiveMegaChildName(d.title.toLowerCase());
                        } else {
                          setActiveDropdown(null);
                          setActiveMegaChildName("");
                        }
                      }}
                    >
                      <Link
                        href={d.url !== "#" ? WEB_URL + d.url : "#"}
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
                  const activeChild = activeNavItem.children?.[activeMegaChildIndex];
                  const isProgramsChild = activeMegaChildName?.includes("program");
                  const rightData = activeChild?.right || (isProgramsChild ? activeNavItem.right : null);

                  if (rightData) {
                    return (
                      <>
                        <div className="mega-right-text">
                          <p className="mega-subtitle">{rightData.subtitle}</p>
                          <h2 className="mega-title" dangerouslySetInnerHTML={{ __html: rightData.title }} />
                          <p className="mega-desc">{rightData.desc}</p>

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
                              href={APPLY_NOW}
                              target="_blank"
                              className="apply-btn1 CTA_Applynow"
                              rel="noopener noreferrer"
                            >
                              Apply Now
                            </Link>
                          </div>
                        </div>

                        {rightData.banners?.length > 0 && (
                          <div className="mega-right-banners">
                            {rightData.banners.map((b, idx) => (
                              <a key={idx} href={`${WEB_URL}programs?type=${b.url}`}>
                                <div className="banner shine-effect" onClick={() => setActiveDropdown(null)}>
                                  <Image
                                    src={b.img}
                                    alt={b.title}
                                    width={348}
                                    height={438}
                                    className="courses_img"
                                  />
                                  <span className="banner-label">{b.title}</span>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}
                      </>
                    );
                  }

                  if (activeMegaChildName?.includes("school")) {
                    if (engineeringLoading && engineeringData.length === 0) {
                      return <div className="mega-loading-placeholder" style={{ height: "200px" }} />;
                    }
                    return (
                      <div className="mega-schools-list">
                        <ul>
                          {engineeringData.map((school) => (
                            <li key={school.id}>
                              <Link href={`${WEB_URL}schools/${school.slug}`} onClick={() => setActiveDropdown(null)}>
                                {school.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                        <Image
                          src="/images/header/school-image.webp"
                          width={1264}
                          height={756}
                          className="school_img"
                          alt="school image"
                        />
                      </div>
                    );
                  }

                  if (activeMegaChildName?.includes("department")) {
                    if (engineeringLoading && engineeringData.length === 0) {
                      return <div className="mega-loading-placeholder" style={{ height: "200px" }} />;
                    }
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
                                  <Link href={`${WEB_URL}schools/${school.slug}`} onClick={() => setActiveDropdown(null)}>
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

                  return <div style={{ height: "200px" }}>other content</div>;
                })()}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ---------- Admission dropdown ---------- */}
      {admissionOpen && (
        <div className="admission-dropdown" ref={admissionRef}>
          <span className="dropdown-arrow"></span>
          {!admissionsData ? (
            <div className="admission-loading-placeholder" style={{ minHeight: "300px" }} />
          ) : (
            <>
              <div className="ad-left">
                <p className="ad-subtitle">{admissionsData.left.subtitle}</p>
                <h2 className="ad-title">{admissionsData.left.title}</h2>
                <p className="ad-desc">{admissionsData.left.desc}</p>
                <div className="ad-contact">
                  <span> {admissionsData.left.querytext} </span>
                  <p>
                    <a className="CTA_Email" href={`mailto:${admissionsData.left.email}`}>
                      <img src="/images/header/mailicon.svg" className="img-fluid" alt="Email" />
                      {admissionsData.left.email}
                    </a>
                  </p>
                  <p>
                    <a className="CTA_Number" href={`tel:${admissionsData.left.phone}`}>
                      <img src="/images/header/phoneicon.svg" className="img-fluid" alt="Phone" />
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
                      className={`cta applynow ${cta.type} ${cta.text == "APPLY NOW" ? "CTA_Applynow" : "CTA_Brochure"}`}
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
                        <img src="/images/header/listicon.svg" className="img-fluid" alt="Arrow" />
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="ad-stats">
                  <h3>{admissionsData.middle.stats.text}</h3>
                  <p>{admissionsData.middle.stats.subtext}</p>
                  <Link href={WEB_URL + admissionsData.middle.stats.btnText.url} style={{ color: "inherit" }}>
                    <button className="stats-btn">{admissionsData.middle.stats.btnText.text}</button>
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
            </>
          )}
        </div>
      )}

      {/* ---------- Search popup ---------- */}
      {globleSearch && (
        <div className="g_search_main active">
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
                    if (e.target.value.trim().length >= 3) setSearchError("");
                  }}
                  onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                />
                <button type="button" className="btn global_search_btn" onClick={handleSearch}>
                  <FiSearch size={16} />
                </button>
              </div>

              {searchError && (
                <p
                  className="search_error"
                  style={{ color: "#b7b7b7", font: "var(--font-12)", position: "absolute", marginTop: "0.5rem" }}
                >
                  {searchError}
                </p>
              )}
            </div>

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

      {/* ---------- Hamburger overlay ---------- */}
      <div className={`backdrop ${menuOpen ? "show" : ""}`} onClick={closeMenu} />

      {menuOpen && (
        <div className="menu-overlay open" role="dialog" aria-modal="true" aria-label="Main navigation">
          <button className="close-btn" aria-label="Close menu" onClick={closeMenu}>
            <img src="/images/header/close-icon.svg" alt="Close menu" aria-hidden="true" />
          </button>

          {megaMenuLoading && megaMenuData.length === 0 ? (
            <div className="hamburger-loading-placeholder" style={{ minHeight: "400px" }} />
          ) : (
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
                        href={item.url && item.url.includes(".pdf") ? item.url : WEB_URL + item.url}
                        target={item?.target_blank ? "_blank" : "_self"}
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
                            item.url && (item.url.includes(".pdf") || item?.target_blank)
                              ? item.url
                              : WEB_URL + item.url
                          }
                          className="hambur_link"
                          onClick={() => closeMenu()}
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
                      <Link href={WEB_URL + sub.url} onClick={() => closeMenu()}>
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
                        <h1 dangerouslySetInnerHTML={{ __html: activeRightMenu?.first_section?.title }} />
                      )}
                      {activeRightMenu.first_section?.subtitle && <p>{activeRightMenu.first_section.subtitle}</p>}

                      {activeRightMenu.first_section?.link && (
                        <Link href={WEB_URL + activeRightMenu.first_section.link} onClick={() => closeMenu()}>
                          <img src="/images/header/banner-arrow.svg" alt="Arrow" />
                        </Link>
                      )}

                      {activeRightMenu?.first_section?.image && (
                        <div className="hamburger-section-img virtural-img">
                          <Image
                            className="hum-small"
                            src={activeRightMenu?.first_section?.image}
                            alt="image"
                            fill
                            style={{ objectFit: "cover" }}
                          />

                          <div className="items-menu_grp">
                            <div className="items-menu_grp_cont">
                              {activeRightMenu?.first_section?.heading && <h4>{activeRightMenu?.first_section?.heading}</h4>}
                              {activeRightMenu?.first_section?.subheading && (
                                <p>{activeRightMenu?.first_section?.subheading}</p>
                              )}
                            </div>
                          </div>

                          <Link
                            href="#"
                            className="links"
                            aria-label={`View ${activeRightMenu?.first_section?.title}`}
                            onClick={() => closeMenu()}
                          />
                        </div>
                      )}
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
                            {activeRightMenu.video_section?.video_url && <div className="vid-thumb-icon"></div>}
                            <div className="vid-thumb-cont">
                              {activeRightMenu.second_section?.title && <h6>{activeRightMenu.second_section?.title}</h6>}
                              {activeRightMenu.second_section?.subtitle && (
                                <h4>{activeRightMenu.second_section?.subtitle}</h4>
                              )}
                            </div>
                          </div>

                          <Link
                            href={
                              activeRightMenu.video_section?.video_url
                                ? activeRightMenu.video_section.video_url
                                : WEB_URL + "leadership/jagadguru-sri-shivarathri-deshikendra-mahaswamiji"
                            }
                            className="links"
                            aria-label={`View ${activeRightMenu.video_section?.video_url ? activeRightMenu.video_section.video_url : "Jagadguru Sri Shivarathri Deshikendra Mahaswamiji"}`}
                            onClick={() => closeMenu()}
                          />
                        </div>
                      )}

                      <div className="acresData">
                        <span
                          className="heading"
                          dangerouslySetInnerHTML={{ __html: activeRightMenu.second_section?.heading }}
                        />
                        {activeRightMenu.second_section?.subheading && <p>{activeRightMenu.second_section?.subheading}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          )}
        </div>
      )}

      {/* ---------- Mobile bottom panel bodies ---------- */}
      <div className="mobile_bottom_menu_fixed_overlays">
        <div className="panel-wrapper">
          <div className="mob-menu-sec">
            {mobilePanels.map((item) => (
              <div key={item.name} className={`panel ${activePanel === item.name ? "open" : ""} ${item.name.toLowerCase()}-panel`}>
                {item.name === "Courses" && activePanel === "Courses" && item.Menu && (
                  <div className="mobCourses">
                    <div className="course-heading">
                      <h4>START YOUR JSS JOURNEY</h4>
                    </div>
                    <ul className="courses-menu">
                      {mobProgramList.map((sub, idx) => (
                        <li key={idx}>
                          <Link href={`${WEB_URL}programs?type=${sub.slug}`} onClick={() => setActivePanel(null)}>
                            <figure>
                              <div className="coursesImg">
                                <img src={sub.image} alt={sub.name} className="course-img w-100" />
                              </div>
                              <figcaption>
                                <h4>{sub.name}</h4>
                                <img src="/images/header/courseIcon.svg" alt={`${sub.name} icon`} className="course-icon" />
                              </figcaption>
                            </figure>
                          </Link>
                        </li>
                      ))}
                      <li>
                        <Link href={`${WEB_URL}programs`} className="explore_programs" onClick={() => setActivePanel(null)}>
                          <div>
                            <p>Explore All</p>
                            <h4 className="blue-text counter">
                              <Counter start={1} end={programsCount} duration={2500} />+
                            </h4>
                            <h5 className="title">ACADEMIC PROGRAMS</h5>
                          </div>
                          <div className="arrow_btn">
                            <img src="/images/header/courseIcon.svg" alt="icon" className="course-icon" />
                          </div>
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}

                {item.name === "Admissions" && activePanel === "Admissions" && admissionData && (
                  <div className="admissions-menu-wrapper">
                    <ul className="admissions-menu">
                      <div className="admissions-heading">
                        <h4 dangerouslySetInnerHTML={{ __html: item.heading }}></h4>
                      </div>
                      {admissionData.middle.links.map((link, idx) => (
                        <li key={idx}>
                          <Link
                            href={WEB_URL + link.url}
                            className="page-link"
                            onClick={() => setActivePanel(null)}
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
                          <img src="/images/header/mail-icon.svg" alt="email" />
                          <a className="liText CTA_Email" href={`mailto:${admissionData.left.email}`}>
                            {admissionData.left.email}
                          </a>
                        </li>
                        <li>
                          <img src="/images/header/phone-icon.svg" alt="phone" />
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
                            className={`links1 ${btn.type === "primary" ? "apply" : "dwnload"}`}
                            target="_blank"
                          >
                            {btn.type === "secondary" && <img src="/images/header/dwnlodIcon.png" alt="download" />}
                            {btn.text}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {item.name === "Contact" && activePanel === "Contact" && item.Menu && (
                  <div className="contact-panel">
                    <div className="contact-heading">
                      <h4>{item.heading}</h4>
                    </div>
                    <div className="contactBanner">
                      <Image src={item?.bgImg} alt="contact" className="contact-banner" width={500} height={316} />
                    </div>
                    <ul className="contact-info">
                      {item.Menu.map((sub, idx) => (
                        <li key={idx}>
                          <div className="icon-img">
                            <img src={sub.contactIcon} alt={sub.name} />
                          </div>
                          <a href={sub.url} className={sub.class ? sub.class : ""}>
                            {sub.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {item.name === "Menu" && activePanel === "Menu" && item.Menu?.length > 0 && (
                  <div className="mobile_menus">
                    <ul className="menu-top">
                      {item.Menu.slice(0, 6).map((sub, idx) => (
                        <li key={idx} className="">
                          <Link
                            href={sub.children?.length > 0 ? "#" : sub.url}
                            className="menu-link"
                            onClick={
                              sub.children?.length > 0
                                ? () => setOpenMenuAccordion(openMenuAccordion === idx ? null : idx)
                                : () => setActivePanel(null)
                            }
                            style={sub.children?.length > 0 ? { cursor: "pointer" } : {}}
                          >
                            <span className="menu_title">{sub.name}</span>
                            {sub.children?.length > 0 && (
                              <span className={`menu-arrow ${openMenuAccordion === idx ? "open" : ""}`}>
                                <FaChevronDown size={12} />
                              </span>
                            )}
                          </Link>
                          {sub.children?.length > 0 && openMenuAccordion === idx && (
                            <ul className="menu-children">
                              {sub.children.map((child, cidx) => (
                                <li key={cidx}>
                                  <Link
                                    href={child.school?.length > 0 ? "#" : WEB_URL + child.url}
                                    onClick={() => {
                                      if (child.school?.length > 0) {
                                        setOpenChildAccordion(openChildAccordion === cidx ? null : cidx);
                                      } else {
                                        setActivePanel(null);
                                      }
                                    }}
                                    style={child.school?.length > 0 ? { cursor: "pointer" } : {}}
                                  >
                                    <span className="menu_title">{child.title}</span>
                                    {child.school?.length > 0 && (
                                      <span className={`menu-arrow ${openChildAccordion === cidx ? "open" : ""}`}>
                                        <FaChevronDown size={10} />
                                      </span>
                                    )}
                                  </Link>

                                  {child.school?.length > 0 && openChildAccordion === cidx && (
                                    <ul className="menu-children">
                                      {child.school.map((schoolItem, sidx) => (
                                        <li key={sidx}>
                                          <Link
                                            href={WEB_URL + "schools/" + schoolItem.slug}
                                            onClick={() => setActivePanel(null)}
                                          >
                                            {schoolItem.name}
                                          </Link>
                                        </li>
                                      ))}
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
                              href={sub.children?.length > 0 ? "#" : WEB_URL + sub.url}
                              className="menu-link"
                              onClick={
                                sub.children?.length > 0
                                  ? () => setOpenMenuAccordion(openMenuAccordion === `b${idx}` ? null : `b${idx}`)
                                  : () => setActivePanel(null)
                              }
                              style={sub.children?.length > 0 ? { cursor: "pointer" } : {}}
                            >
                              <span className="menu_title">{sub.name}</span>
                              {sub.children?.length > 0 && (
                                <span className={`menu-arrow ${openMenuAccordion === `b${idx}` ? "open" : ""}`}>
                                  <FaChevronDown size={12} />
                                </span>
                              )}
                            </Link>
                            {sub.children?.length > 0 && openMenuAccordion === `b${idx}` && (
                              <ul className="menu-children">
                                {sub.children.map((child, cidx) => (
                                  <li key={cidx}>
                                    <a
                                      href={child.url}
                                      onClick={() => setActivePanel(null)}
                                      target={child.url.includes(".pdf") ? "_blank" : "_self"}
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
      </div>
    </>
  );
}