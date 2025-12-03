"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/style.css";
import "@/styles/custom.style.css";

const BASE_URL = "https://project-demo.in/jss/api";

export default function FacultyDetailPage({ params }) {
  const { id } = params;
  const [faculty, setFaculty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [error, setError] = useState(null);
  const [showFull, setShowFull] = useState(false);
  const maxLength = 600;

  // Fetch faculty by ID
  const fetchFacultyDetail = async () => {
    try {
      setLoading(true);
      setNotFound(false);
      setError(null);

      const res = await fetch(`${BASE_URL}/faculties/${id}`);

      if (!res.ok) {
        if (res.status === 404) {
          throw new Error("Faculty not found");
        }
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const facultyData = data.data || data.faculty || data;

      if (!facultyData || Object.keys(facultyData).length === 0) {
        setNotFound(true);
        return;
      }

      setFaculty(facultyData);
    } catch (err) {
      console.error("Faculty detail error:", err);
      setError(err.message);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchFacultyDetail();
    } else {
      setNotFound(true);
      setLoading(false);
    }
  }, [id]);

  // Loading UI
  if (loading) {
    return (
      <main className="site_main">
        <section className="inner-title">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="innnr_head">
                  <h2>Loading...</h2>
                  <p>Please wait while we fetch faculty details.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Not found UI
  if (notFound || !faculty) {
    return (
      <main className="site_main">
        <section className="inner-title">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="innnr_head ">
                  <h2>Faculty Not Found</h2>
                  {error && <p className="text-danger">Error: {error}</p>}
                  <Link href="/faculty" className="btn btn-primary mt-3">
                    Back to Faculty List
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }

  // Safe access to faculty properties
  const safeFaculty = faculty || {};
  const facultyName = safeFaculty.name || "Unknown Faculty";
  const facultyDesignation = safeFaculty.designation || safeFaculty.type || "";
  const facultyImage = safeFaculty.image || "/default-avatar.png";
  const facultyEmail = safeFaculty.email || "";
  const facultyLinkedin = safeFaculty.linkedin || "";
  const facultyProfile = safeFaculty.profile || "";
  const facultyEducation = safeFaculty.education || [];
  const facultyResearch = safeFaculty.research || [];
  const facultyTeaching = safeFaculty.teaching || [];
  const facultyAwards = safeFaculty.awards || [];
  const facultySocialEngagement = safeFaculty.socialEngagement || [];

  const isLong = facultyProfile.length > maxLength;
  const displayedText = !isLong
    ? facultyProfile
    : showFull
    ? facultyProfile
    : facultyProfile.slice(0, maxLength) + "...";

  return (
    <main className="site_main">
      {/* Title Section */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head faculty-heading">
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
                      width={500}
                      height={500}
                      className="img-fluid w-100"
                      onError={(e) => {
                        e.target.src = "/default-avatar.png";
                      }}
                    />
                  </figure>
                </div>

                <div className="faulty-profile-text">
                  <h4>{facultyName.toUpperCase()}</h4>
                  <span>{facultyDesignation}</span>

                  {facultyProfile && (
                    <div className="cus-profile-text">
                      <h6>Profile</h6>
                      <p>{displayedText}</p>

                      {isLong && (
                        <button
                          onClick={() => setShowFull(!showFull)}
                          className="read-more-btn"
                        >
                          {showFull ? "Read Less" : "Read More"}
                        </button>
                      )}
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
                          <i className="bi bi-envelope"></i>
                        </div>
                        <div className="profile-email">
                          <p>Email Id</p>
                          <a href={`mailto:${facultyEmail}`}>{facultyEmail}</a>
                        </div>
                      </div>
                      <hr />
                    </>
                  )}

                  {facultyLinkedin && (
                    <div className="info-box">
                      <div className="profile-icon">
                        <i className="bi bi-linkedin"></i>
                      </div>
                      <div className="profile-email">
                        <p>LinkedIn Profile</p>
                        <a
                          href={facultyLinkedin}
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
                  {/* Education */}
                  {facultyEducation.length > 0 && (
                    <div className="profile-education">
                      <h5>Education</h5>
                      <ul>
                        {facultyEducation.map((edu, i) => (
                          <li key={i}>{edu}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Research */}
                  {facultyResearch.length > 0 && (
                    <div className="profile-education profile-research">
                      <h5>Research</h5>
                      <div className="research-list">
                        {facultyResearch
                          .filter((item) => item.title || item.image || item.link)
                          .map((key, index) => (
                            <div className="research-box" key={index}>
                              <div className="research-icon">
                                <p>
                                  {key.image && (
                                    <img
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
                                  <Link
                                    href={key.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                  >
                                    <i className="bi bi-box-arrow-up-right"></i>
                                  </Link>
                                </div>
                              )}
                            </div>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Teaching */}
                  {facultyTeaching.length > 0 && (
                    <div className="profile-education">
                      <h5>Teaching</h5>
                      <ul>
                        {facultyTeaching.map((subject, i) => (
                          <li key={i}>{subject}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Awards */}
                  {facultyAwards.length > 0 && (
                    <div className="profile-education">
                      <h5>Awards & Recognition</h5>
                      <ul>
                        {facultyAwards.map((award, i) => (
                          <li key={i}>{award}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Social Engagement */}
                  {facultySocialEngagement.length > 0 && (
                    <div className="profile-education profile-social">
                      <h6>SOCIAL ENGAGEMENT</h6>
                      <ul>
                        {facultySocialEngagement.map((engagement, i) => (
                          <li key={i}>{engagement}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Show message if no additional info */}
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
