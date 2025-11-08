"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { facultyData } from "../facultyData";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacultyDetailPage() {
  const params = useParams();
  const [faculty, setFaculty] = useState(null);

  useEffect(() => {
    // Find faculty member by ID
    const foundFaculty = facultyData.find((f) => f.id === parseInt(params.id));
    setFaculty(foundFaculty);
  }, [params.id]);

  //   console.log(foundFaculty)

  // Loading state
  if (!faculty) {
    return (
      <main className="site_main">
        <section className="inner-title">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="innnr_head">
                  <h2>Loading...</h2>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="site_main">
      {/* Title Section */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">
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
                      src={faculty.image}
                      alt={faculty.name}
                      width={500}
                      height={500}
                      className="img-fluid w-100"
                    />
                  </figure>
                </div>

                <div className="faulty-profile-text">
                  <h4>{faculty.name.toUpperCase()}</h4>
                  <span>{faculty.designation}</span>
                  <div className="cus-profile-text">
                    <h6>Profile</h6>
                    <p>{faculty.profile}</p>
                  </div>
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
            <div className="col-lg-11">
              <div className="profile-info">
                {/* Contact Information Box */}
                <div className="profile-info-box">
                  <div className="info-box">
                    <div className="profile-icon">
                      <i className="bi bi-envelope"></i>
                    </div>
                    <div className="profile-email">
                      <p>Email Id</p>
                      <a href={`mailto:${faculty.email}`}>{faculty.email}</a>
                    </div>
                  </div>
                  <hr />
                  <div className="info-box">
                    <div className="profile-icon">
                      <i className="bi bi-linkedin"></i>
                    </div>
                    <div className="profile-email">
                      <p>LinkedIn Profile</p>
                      <a
                        href={faculty.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <u>{faculty.linkedin.replace("https://", "")}</u>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="profile-info-text">
                  {/* Education */}
                  {faculty.education && faculty.education.length > 0 && (
                    <div className="profile-education">
                      <h5>Education</h5>
                      <ul>
                        {faculty.education.map((edu, index) => (
                          <li key={index}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Research */}
                  {faculty.research && (
                    <div className="profile-education profile-research">
                      <h5>Research</h5>
                      <div className="research-list">
                        {faculty.research.googleScholar && (
                          <div className="research-box">
                            <div className="research-icon">
                              <p>
                                <Image
                                  src="/images/custom-page/google-scholar.png"
                                  alt="Google Scholar"
                                  width={24}
                                  height={24}
                                  className="img-fluid"
                                />
                                Google Scholar
                              </p>
                            </div>
                            <div className="research-link">
                              <a
                                href={faculty.research.googleScholar}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="bi bi-box-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        )}

                        {faculty.research.orcid && (
                          <div className="research-box">
                            <div className="research-icon">
                              <p>
                                <Image
                                  src="/images/custom-page/orc-logo.png"
                                  alt="ORC iD"
                                  width={24}
                                  height={24}
                                  className="img-fluid"
                                />
                                ORC iD
                              </p>
                            </div>
                            <div className="research-link">
                              <a
                                href={faculty.research.orcid}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="bi bi-box-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        )}

                        {faculty.research.researchGate && (
                          <div className="research-box">
                            <div className="research-icon">
                              <p>
                                <Image
                                  src="/images/custom-page/research-gate.png"
                                  alt="Research Gate"
                                  width={24}
                                  height={24}
                                  className="img-fluid"
                                />
                                Research Gate
                              </p>
                            </div>
                            <div className="research-link">
                              <a
                                href={faculty.research.researchGate}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="bi bi-box-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        )}

                        {faculty.research.scopus && (
                          <div className="research-box">
                            <div className="research-icon">
                              <p>
                                <Image
                                  src="/images/custom-page/scopus.png"
                                  alt="Scopus"
                                  width={24}
                                  height={24}
                                  className="img-fluid"
                                />
                                Scopus
                              </p>
                            </div>
                            <div className="research-link">
                              <a
                                href={faculty.research.scopus}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="bi bi-box-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        )}

                        {faculty.research.vidwan && (
                          <div className="research-box">
                            <div className="research-icon">
                              <p>
                                <Image
                                  src="/images/custom-page/vidwan.png"
                                  alt="VIDWAN"
                                  width={24}
                                  height={24}
                                  className="img-fluid"
                                />
                                VIDWAN
                              </p>
                            </div>
                            <div className="research-link">
                              <a
                                href={faculty.research.vidwan}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <i className="bi bi-box-arrow-up-right"></i>
                              </a>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Teaching */}
                  {faculty.teaching && faculty.teaching.length > 0 && (
                    <div className="profile-education">
                      <h5>Teaching</h5>
                      <ul>
                        {faculty.teaching.map((subject, index) => (
                          <li key={index}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Awards & Recognition */}
                  {faculty.awards && faculty.awards.length > 0 && (
                    <div className="profile-education">
                      <h5>Awards & Recognition</h5>
                      <ul>
                        {faculty.awards.map((award, index) => (
                          <li key={index}>{award}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Social Engagement */}
                  {faculty.socialEngagement &&
                    faculty.socialEngagement.length > 0 && (
                      <div className="profile-education profile-social">
                        <h6>SOCIAL ENGAGEMENT</h6>
                        <ul>
                          {faculty.socialEngagement.map((engagement, index) => (
                            <li key={index}>{engagement}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
