"use client";
import { useEffect, useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const res = {
      logo: "/images/footer/footer-logo.png",
      address: "C-20/1, Sector - 62, Noida, Uttar Pradesh",
      phone: "+91 9311830458",
      email: "admission@jssaten.ac.in",
      landlines: [
        "0120-2401448 (Direct)",
        "0120-2400115, 2401442, 2401449 (EPBX)",
      ],
      sections: [
        { title: "ABOUT JSS UNIVERSITY" },
        { title: "ACADEMICS" },
        { title: "ADMISSIONS" },
        { title: "FACILITIES" },
        { title: "STUDENT SUPPORT" },
        { title: "RESEARCH & INNOVATION" },
        { title: "PLACEMENTS" },
      ],
      quickLinks: [
        { label: "Examination", url: "#" },
        { label: "Alumni", url: "#" },
        { label: "Annual Reports", url: "#" },
        { label: "ERP Login", url: "#" },
        { label: "Testimonials", url: "#" },
        { label: "Happenings", url: "#" },
        { label: "IQAC", url: "#" },
        { label: "Downloads", url: "#" },
        { label: "Careers", url: "#" },
        { label: "OBC Cell", url: "#" },
        { label: "National Digital Library", url: "#" },
        { label: "Online Grievance System", url: "#" },
      ],
      socials: [
        { icon: "facebook", url: "#" },
        { icon: "twitter", url: "#" },
        { icon: "youtube", url: "#" },
        { icon: "linkedin", url: "#" },
      ],
    };
    setData(res);
  }, []);

  if (!data) return null;

  const renderIcon = (icon) => {
    switch (icon) {
      case "facebook":
        return <FaFacebookF />;
      case "twitter":
        return <FaTwitter />;
      case "youtube":
        return <FaYoutube />;
      case "linkedin":
        return <FaLinkedinIn />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-dark text-white pt-5">
      <div className="container border-bottom border-secondary pb-4">
        <div className="row g-4">
          <div className="col-md-9">
            <div className="row d-flex justify-content-center">
              <div className="col-sm-1 ">
                <img
                  src={data.logo}
                  alt="Logo"
                  style={{ width: "80px" }}
                />
              </div>
              <div className="col-md-10 mx-4">
                <p className="fw-bold mb-1 text-info">Connect with us</p>
                <p className="mb-1">{data.address}</p>
                <div className="col-md-12 d-flex flex-column flex-md-row gap-3">
                  <p className="mb-1">{data.phone}</p>
                  <p className="mb-1">{data.email}</p>
                  {data.landlines.map((line, i) => (
                    <p key={i} className="mb-1">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-3 text-md-end">
            <button className="btn btn-light fw-bold mb-3 rounded-0 px-5 mx-2">
              GET DIRECTIONS
            </button>
            <div className="d-flex justify-content-md-end gap-2 social-icons">
              Follow us on
              {data.socials.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                  style={{ width: "30px", height: "30px" }}
                >
                  {renderIcon(s.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-wrap align-items-center pt-3">
        {data.sections.map((section, i) => (
          <div key={i} className="me-4">
            <h6 className="fw-normal">{section.title}</h6>
          </div>
        ))}
      </div>
      <div className="container border-bottom border-secondary py-3">
        <div className="d-flex flex-wrap gap-3">
          <span className="side-border">Quick Links </span>
          {data.quickLinks.map((link, i) => (
            <a
              key={i}
              href={link.url}
              className="text-white-50 text-decoration-none"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <div className="container py-3 d-flex flex-column flex-md-row justify-content-between text-white-50 small">
        <p className="mb-1 mb-md-0">
          © Copyright {new Date().getFullYear()} - JSS. All Rights Reserved.
        </p>
        <p className="mb-0">Website Design and Development by Sterco</p>
      </div>

      <style jsx>{`
        .side-border {
          border-right: 2px solid #6d757d;
          padding-right: 1rem;
        }
          .social-icons {
          font-size: 0.9rem;
          }
        .social-icons a:hover {
          background-color: #f8f9fa59;
        }
      `}</style>
    </footer>
  );
}
