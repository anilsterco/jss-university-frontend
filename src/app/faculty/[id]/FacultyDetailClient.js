"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { WEB_URL } from "@/config/config.mjs";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import { usePathname } from "next/navigation";

export default function FacultyDetailClient({ faculty }) {
  const pathname = usePathname();
  const [addSectiondata] = useState({
    sections: faculty.sections || [],
  });

  const currentSlug = pathname.split("/").filter(Boolean).pop();

  const facultyName = faculty.name || "Unknown Faculty";
  const facultyDesignation = faculty.designation || faculty.type || "";
  const facultyImage = faculty.image || "/default-avatar.png";
  const facultyEmail = faculty.email || "";
  const facultyLinkedin = faculty.linkedin || "";
  const facultyProfile = faculty.profile || "";
  const facultyEducation = faculty.education || [];
  const facultyResearch = faculty.research || [];
  const facultyTeaching = faculty.teaching || [];
  const facultyAwards = faculty.awards || [];
  const facultySocialEngagement = faculty.socialEngagement || [];

  const pageName = currentSlug.replace(/-/g, ' ');
  const titleCase = pageName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

  return (
    <main className="site_main">
      {/* Title Section */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head faculty-heading">
                <h1 className="d-none">{titleCase}</h1>
                <h2>FACULTY</h2>
                <h3>
                  MEET OUR <span>FACULTY</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Detail */}
      <section className="faulty-detail-sec">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="faulty-profile">
                <div className="faulty-profile-img">
                  <figure>
                    <Image
                      src={facultyImage}
                      alt={facultyName}
                      width={550}
                      height={500}
                      className="img-fluid faculty-banner w-100"
                    />
                  </figure>
                </div>
                <div className="faulty-profile-text">
                  <h4>{facultyName.toUpperCase()}</h4>
                  <span>{facultyDesignation}</span>
                  {facultyProfile && (
                    <div className="cus-profile-text">
                      <h6>Profile</h6>
                      <div className="para-scroll">
                        <p dangerouslySetInnerHTML={{ __html: facultyProfile }} />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Info */}
      <section className="faulty-detail-sec1">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-11 col-lg-12">
              <div className="profile-info">
                {/* Contact Box */}
                <div className="profile-info-box">
                  {facultyEmail && (
                    <>
                      <div className="info-box">
                        <div className="profile-icon">
                          <img
                            src="/images/custom-page/mail-faculty.svg"
                            alt="Email"
                          />
                        </div>
                        <div className="profile-email">
                          <p>Email Id</p>
                          <a className="CTA_Email" href={`mailto:${facultyEmail}`}>{facultyEmail}</a>
                        </div>
                      </div>
                      <hr />
                    </>
                  )}
                  {facultyLinkedin && (
                    <div className="info-box">
                      <div className="profile-icon">
                        <img
                          src="/images/custom-page/insta-faculty.svg"
                          alt="LinkedIn"
                        />
                      </div>
                      <div className="profile-email">
                        <p>LinkedIn Profile</p>
                        <a
                          href={`${facultyLinkedin.startsWith('http') ? facultyLinkedin : `https://${facultyLinkedin}`}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {facultyLinkedin.replace(/^https?:\/\//, "")}
                        </a>
                      </div>
                    </div>
                  )}
                  {!facultyEmail && !facultyLinkedin && (
                    <div className="info-box">
                      <div className="profile-email">
                        <p>No contact information available</p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Right Section Info */}
                <div className="profile-info-text">
                  {facultyEducation.length > 0 && (
                    <div className="profile-education">
                      <h5>Education</h5>
                      <ul>
                        {facultyEducation.map((edu, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: edu }}
                          />
                        ))}
                      </ul>
                    </div>
                  )}

                  {facultyResearch.length > 0 && (
                    <div className="profile-education profile-research">
                      <h5>Research</h5>
                      <div className="research-list">
                        {facultyResearch
                          .filter(
                            (item) => item.title || item.image || item.link,
                          )
                          .map((key, index) => (
                            <Link
                              key={index}
                              href={key.link}
                              target="_blank"
                              rel="nofollow noopener noreferrer"
                            >
                              <div className="research-box">
                                <div className="research-icon">
                                  <p>
                                    {key.image && (
                                      <Image
                                        src={key.image}
                                        alt="research-icon"
                                        width={50}
                                        height={50}
                                      />
                                    )}
                                    {key.title}
                                  </p>
                                </div>
                                {key.link && (
                                  <div className="research-link">
                                    <i className="bi bi-box-arrow-up-right"></i>
                                  </div>
                                )}
                              </div>
                            </Link>
                          ))}
                      </div>
                    </div>
                  )}

                  {facultyTeaching.length > 0 && (
                    <div className="profile-education">
                      <h5>Teaching</h5>
                      <ul>
                        {facultyTeaching.map((subject, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: subject }}
                          />
                        ))}
                      </ul>
                    </div>
                  )}

                  {facultyAwards.length > 0 && (
                    <div className="profile-education">
                      <h5>Awards & Recognition</h5>
                      <ul>
                        {facultyAwards.map((award, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: award }}
                          />
                        ))}
                      </ul>
                    </div>
                  )}

                  {facultySocialEngagement.length > 0 && (
                    <div className="profile-education profile-social">
                      <h5>Social Engagement</h5>
                      <ul>
                        {facultySocialEngagement.map((engagement, i) => (
                          <li
                            key={i}
                            dangerouslySetInnerHTML={{ __html: engagement }}
                          />
                        ))}
                      </ul>
                    </div>
                  )}

                  {addSectiondata?.sections?.length > 0 &&
                    addSectiondata.sections.some(
                      (s) => s.points.length > 0,
                    ) && (
                      <>
                        {addSectiondata.sections.map(
                          (section, idx) =>
                            section.points.length > 0 && (
                              <div key={idx} className="comman_profile">
                                <h5>{section.title}</h5>
                                <ul>
                                  {section.points.map((point, i) => (
                                    <li
                                      key={i}
                                      dangerouslySetInnerHTML={{
                                        __html: point,
                                      }}
                                    />
                                  ))}
                                </ul>
                              </div>
                            ),
                        )}
                      </>
                    )}

                  {facultyEducation.length === 0 &&
                    facultyResearch.length === 0 &&
                    facultyTeaching.length === 0 &&
                    facultyAwards.length === 0 &&
                    facultySocialEngagement.length === 0 && (
                      <div className="profile-education">
                        <h5>Additional Information</h5>
                        <p>
                          No additional information available for this faculty
                          member.
                        </p>
                      </div>
                    )}

                  <div className="back_btn">
                    <Link href={`${WEB_URL}faculty`}>Back to Faculties</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
