"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/custom.style.css";
import "@/styles/style.css";

const BASE_URL = "https://project-demo.in/jss/api";

export default function ProgramDetailClient({ params }) {
  const [activeTab, setActiveTab] = useState("tab1");
  const [programData, setProgramData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/course/${params}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setProgramData(data.data);
        }
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setLoading(false);
      });
  }, [params]);

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  if (loading) {
    return (
      <div
        className="loading-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          fontSize: "18px",
          color: "#666",
        }}
      >
        <div>Loading program details...</div>
      </div>
    );
  }

  if (!programData) {
    return (
      <div
        className="error-container"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
          textAlign: "center",
        }}
      >
        <div
          style={{ fontSize: "24px", marginBottom: "20px", color: "#d32f2f" }}
        >
          Program not found
        </div>
        <Link href="/programs" className="apply-btn1">
          Back to Programs
        </Link>
      </div>
    );
  }

  // Destructure data for easier access
  const {
    name,
    banner,
    admissionSection,
    overview,
    eligibility,
    peos,
    pos,
    pso,
    curriculum,
    fee_structure,
    testimonials,
    career_opportunities,
    apply_now_link
  } = programData;

  const text = testimonials[0].short_description || "";
  const [firstWord, ...restWords] = text.split(" ");

  return (
    <main className="site_main">
      {/* Program Detail Hero Section */}
      <section className="program-detail">
        <div className="program-detail-img">
          <figure>
            <Image
              src={banner?.image || "/images/default-banner.jpg"}
              alt={banner?.name || name}
              width={1200}
              height={600}
              className="img-fluid w-100"
            />
            <figcaption>
              <div className="program-detail-text">
                <div className="innnr_head">
                  <h2>PROGRAMS</h2>
                  <h3>{name}</h3>
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Admission Open Section */}
      <section className="admission-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="admission-box">
                <div className="admission-box-text">
                  <p>Admission Open for</p>
                  <h2>{admissionSection?.academic_year || "2025-26"}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="overview-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="over-view-box">
                <div className="overview-text">
                  <h5>Overview</h5>
                  <h6>{overview?.overview_title || name}</h6>
                  <p>{overview?.overview_desc}</p>
                </div>
                <div className="overview-duration">
                  <div className="overview-duration-text">
                    <span>Course duration</span>
                    <p>{admissionSection?.course_duration}</p>
                  </div>
                  <div className="fees">
                    <span>Annual Fees</span>
                    <p>{admissionSection?.annual_fees}</p>
                  </div>
                  <div className="structure-btns">
                    {admissionSection?.program_structure && (
                      <a
                        href={admissionSection.program_structure}
                        className="structure-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/custom-page/blue-pdf.png"
                          alt="PDF"
                          width={20}
                          height={20}
                          className="img-fluid"
                        />
                        Programme Structure
                      </a>
                    )}
                    {admissionSection?.scholarship && (
                      <a
                        href={admissionSection.scholarship}
                        className="structure-btn"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/custom-page/scholer-icon.png"
                          alt="PDF"
                          width={20}
                          height={20}
                          className="img-fluid"
                        />
                        Scholarship
                      </a>
                    )}
                  </div>
                  {(admissionSection?.apply_now_link || apply_now_link) && (
                    <a
                      href={admissionSection?.apply_now_link || apply_now_link}
                      target="_blank"
                      className="apply-btn1"
                      rel="noopener noreferrer"
                    >
                      Apply Now
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="eligibility-sec" id="eligibilitySec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="eligibility-img">
                <figure>
                  {overview?.overview_image && (
                    <Image
                      src={overview.overview_image}
                      alt="Overview"
                      width={1200}
                      height={400}
                      className="img-fluid w-100"
                    />
                  )}
                  <figcaption>
                    <div className="eligibility-box">
                      <div className="eligibility-text">
                        <span>Eligibility Criteria</span>
                        <h3>{admissionSection?.eligibility_marks}</h3>
                        <p>{admissionSection?.eligibility_desc}</p>
                      </div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="rank-box">
                <h6>Eligibility Criteria</h6>
                <div className="rank-text">
                  <div className="left-rank-text">
                    <h2>{eligibility?.eligibility_criteria}</h2>
                  </div>
                  <div className="right-rank-text">
                    <p>{eligibility?.eligibility_criteria_desc}</p>
                  </div>
                </div>
                <div className="seats">
                  {eligibility?.eligibility_criteria_notices && (
                    <>
                      <div className="seats-left-text">
                        <p>{eligibility.eligibility_criteria_notices[0]}</p>
                      </div>
                      <div className="seats-right-text">
                        <p>{eligibility.eligibility_criteria_notices[1]}</p>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Objectives Section */}
      <section className="educational-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="educational-box">
                <article className="tabbed-content">
                  <nav className="tabs">
                    <ul>
                      <li>
                        <a
                          href="#tab1"
                          className={activeTab === "tab1" ? "active" : ""}
                          onClick={(e) => {
                            e.preventDefault();
                            handleTabClick("tab1");
                          }}
                        >
                          Program Educational Objectives (PEOs)
                        </a>
                      </li>
                      <li>
                        <a
                          href="#tab2"
                          className={activeTab === "tab2" ? "active" : ""}
                          onClick={(e) => {
                            e.preventDefault();
                            handleTabClick("tab2");
                          }}
                        >
                          Program Outcomes (POs)
                        </a>
                      </li>
                    </ul>
                  </nav>
                  <div
                    id="tab1"
                    className={`item ${activeTab === "tab1" ? "active" : ""}`}
                    data-title="Program Educational Objectives (PEOs)"
                  >
                    <div className="item-content">
                      <div className="peo-list">
                        {peos && peos.length > 0 ? (
                          peos.map((peo, index) => (
                            <div key={index} className="peo-box">
                              <h3>PEO - {index + 1}</h3>
                              <p>{peo}</p>
                            </div>
                          ))
                        ) : (
                          <p>No PEOs available</p>
                        )}
                      </div>
                      {apply_now_link && (
                        <a
                          href={apply_now_link}
                          className="apply-btn1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply Now
                        </a>
                      )}
                    </div>
                  </div>
                  <div
                    id="tab2"
                    className={`item ${activeTab === "tab2" ? "active" : ""}`}
                    data-title="Program Outcomes (POs)"
                  >
                    <div className="item-content">
                      <div className="peo-list">
                        {pos && pos.length > 0 ? (
                          pos.map((po, index) => (
                            <div key={index} className="peo-box">
                              <h3>PO - {index + 1}</h3>
                              <p>{po}</p>
                            </div>
                          ))
                        ) : (
                          <p>No POs available</p>
                        )}
                      </div>
                      {apply_now_link && (
                        <a
                          href={apply_now_link}
                          className="apply-btn1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply Now
                        </a>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section className="core-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="core-box">
                <div className="core-text">
                  <span>Curriculum</span>
                  <h6>{curriculum?.curriculum_title}</h6>
                  <blockquote>Core Subjects:</blockquote>
                  <p>
                    {curriculum?.curriculum_desc && curriculum.curriculum_desc[0]}
                  </p>
                  {curriculum?.curriculum_pdf && (
                    <div className="core-pdf">
                      <a
                        href={curriculum.curriculum_pdf}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/custom-page/red-pdf-icon.png"
                          alt="PDF"
                          width={20}
                          height={20}
                          className="img-fluid"
                        />
                        Download PDF
                      </a>
                    </div>
                  )}
                </div>
                <div className="core-img">
                  <figure>
                    {curriculum?.curriculum_image && (
                      <Image
                        src={curriculum.curriculum_image}
                        alt="Curriculum"
                        width={500}
                        height={300}
                        className="img-fluid w-100"
                      />
                    )}
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fee Structure Section */}
      <section className="program-sec-six">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <div className="structure">
                <span>Fee Structure</span>
                <p>{fee_structure?.fee_structure_title}</p>
              </div>
              <div className="structure-box">
                <div className="structure-img">
                  <figure>
                    {fee_structure?.fee_structure_image && (
                      <Image
                        src={fee_structure.fee_structure_image}
                        alt="Fee Structure"
                        width={500}
                        height={300}
                        className="img-fluid w-100"
                      />
                    )}
                  </figure>
                </div>
                <div className="structure-text">
                  <p>{fee_structure?.fee_structure_short_description}</p>
                  <h2>{fee_structure?.course_total_fees}</h2>
                  <span>{fee_structure?.academic_year}</span>
                  <div className="engineering-btn">
                    {(fee_structure?.apply_now_link || apply_now_link) && (
                      <a
                        href={fee_structure?.apply_now_link || apply_now_link}
                        className="apply-btn1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Apply Now
                      </a>
                    )}
                    {fee_structure?.fee_structure_pdf && (
                      <a
                        href={fee_structure.fee_structure_pdf}
                        target="_blank"
                        className="structure-btn"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={"/images/custom-page/red-pdf-icon.png"}
                          alt="PDF"
                          width={20}
                          height={20}
                          className="img-fluid"
                        />
                        DOWNLOAD
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {testimonials && testimonials.length > 0 && (
        <section className="program-testimonial">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="program-testimonial-box">
                  <div className="testimonial-box">
                    <div className="testimonial-text">
                      <span>Placement Testimonial</span>
                      <p>{testimonials[0].title}</p>
                    </div>
                    <div className="across">
                      <h2>{firstWord}</h2>
                      <p>{restWords.join(" ")}</p>
                      {(testimonials[0]?.apply_now_link || apply_now_link) && (
                        <a
                          href={testimonials[0]?.apply_now_link || apply_now_link}
                          className="apply-btn1"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Apply Now
                        </a>
                      )}
                    </div>
                  </div>
                  <div className="testimonial-img">
                    <div className="testimonial-img-box">
                      <figure>
                        <Image
                          src={testimonials[0].image}
                          alt={testimonials[0].name}
                          width={400}
                          height={500}
                          className="img-fluid w-100"
                        />
                        <figcaption>
                          <div className="testimonial-img-text">
                            <h4>{testimonials[0].name}</h4>
                            <p>
                              {testimonials[0].course}
                              <span>.</span>
                              {testimonials[0].batch}
                            </p>
                            <blockquote>{testimonials[0].designation} at {testimonials[0].company}</blockquote>
                          </div>
                          <a href="#" className="streched_link"></a>
                        </figcaption>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Career Opportunities Section */}
      <section className="opportunitie-sec">
        <div className="opportunitie-img">
          <figure>
            {career_opportunities?.career_image && (
              <Image
                src={career_opportunities.career_image}
                alt="Career Opportunities"
                width={1200}
                height={600}
                className="img-fluid w-100"
              />
            )}
          </figure>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="opportunitie-box">
                <div className="opportunitie-text">
                  <blockquote>{career_opportunities?.career_subtitle || "CAREER OPPORTUNITIES"}</blockquote>
                  <h2>{career_opportunities?.career_title}</h2>
                  <p>{career_opportunities?.career_desc}</p>
                </div>
                <div className="opportunitie-tab">
                  <ul>
                    {career_opportunities?.useful_links && (
                      JSON.parse(career_opportunities.useful_links).map(
                        (opportunity, index) => (
                          <li key={index}>
                            <a 
                              href={opportunity.url} 
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              {opportunity.text}
                            </a>
                          </li>
                        )
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}