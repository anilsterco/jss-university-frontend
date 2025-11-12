
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
      logo: "/images/footer/footer-logo.webp",
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
    const size = "0.6em";
    const style = { width: size, height: size };
    switch (icon) {
      case "facebook":
        return <FaFacebookF style={{ ...style, color: "#FFf" }} />;
      case "twitter":
        return <FaTwitter style={{ ...style, color: "#FFf" }} />;
      case "youtube":
        return <FaYoutube style={{ ...style, color: "#FFf" }} />;
      case "linkedin":
        return <FaLinkedinIn style={{ ...style, color: "#FFf" }} />;
      default:
        return null;
    }
  };

  return (
    <footer className="footer_section">
      <div className="container">
        <div className="col-lg-10 mx-auto">
          <div className="footer_contact">
            <div className="footer_left">
              <div className="footer_logo">
                <img src={data.logo} alt="Logo" style={{ width: "9rem" }} />
              </div>
              <div className="connect_contant">
                <p className="fw-bold text-info">Connect with us</p>
                <p>{data.address}</p>
                <div className="col-md-12">
                  <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap  mb-0">
                    <li>
                      <a href="">{data.phone}</a>
                    </li>
                    <li>
                      <a href="">{data.email}</a>
                    </li>
                    {data.landlines.map((line, i) => (
                      <li key={i}>
                        <a href="">{line}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer_right">
              <button className="get_direc">GET DIRECTIONS</button>
              <div className="social-icons">
                <ul className="list-unstyled">
                  <p>Follow us on</p>
                  {data.socials.map((s, i) => (
                    <li key={i}>
                      <a
                        href={s.url}
                        className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "20px", height: "20px" }}
                      >
                        {renderIcon(s.icon)}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-12">
          <div className="row">
            <div className="col-lg-10 mx-auto">
              <div className="footer_border">
                <div className="footer_link">
                  <ul className="list-unstyled">
                    {data.sections.map((section, i) => (
                      <li key={i}>
                        <a href="#">{section.title}</a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="quick_link">
                  <span className="side-border">Quick Links</span>
                  <ul className="quick-item">
                    {data.quickLinks.map((link, i) => (
                      <li key={i}>
                        <a href={link.url}>{link.label}</a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="col-lg-10 mx-auto">
          <div className="bottom_footer">
            <p className="mb-1 mb-md-0">
              © Copyright {new Date().getFullYear()} - JSS. All Rights Reserved.
            </p>
            <p className="mb-0">Website Design and Development by Sterco</p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer_section {
          background-color: rgba(0, 0, 0, 0.8);
          padding-block: 5rem 0;
        }

        .social-icons a:hover {
          background-color: var(--color-100);
        }
        .footer_right ul li a:hover {
          transform: rotate(360deg);
          transition: all 0.5s ease;
          display: block;
        }

        .footer_contact {
          display: grid;
          grid-template-columns: 78% 17%;
          gap: 5rem;
          overflow: hidden;
        }

        .footer_logo {
          display: flex;
          gap: 2rem;
          align-items: center;
          padding-right: 0;
          position: relative;
        }

        .connect_contant h4 {
          font: var(--font-14);
          color: var(--color-e8);
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .connect_contant p {
          font: var(--font-12);
          color: #ffffff80;
          font-weight: 300;
          padding-bottom: 1rem;
          margin: 0;
        }
        .connect_contant ul {
          display: flex;
          padding: 0;
          list-style-type: none;
          gap: 1.5rem;
        }
        .connect_contant:after {
          background-color: #ffffff21;
          width: 2px;
          right: 2rem;
          position: absolute;
          content: "";
          top: 0rem;
          bottom: 2rem;
        }
        .footer_left {
          display: flex;
          gap: 2rem;
          align-items: center;
          padding-right: 0;
          position: relative;
        }
        .footer_right .get_direc {
          background-color: var(--color-white);
          font: var(--font-14);
          font-weight: 700;
          color: var(--color-black);
          display: inline-block;
          padding: 1.2rem 3.2rem;
          text-align: center;
          margin-bottom: 1.5rem;
          line-height: 1;
        }
        .footer_right .get_direc:hover {
          background-color: var(--color-100);
        }
        .footer_right ul {
          display: flex;
          list-style: none;
          padding: 0;
          gap: 0.5rem;
          align-items: center;
        }
        .footer_right p {
          margin-right: 1rem;
          color: var(--color-white);
          font: var(--font-12);
          font-weight: 300;
          opacity: 0.8;
          margin-bottom: 0;
        }
        .list-unstyled {
          display: flex;
          padding: 0;
          list-style: none;
          gap: 4.5rem;
        }
        .list-unstyled li a {
          font: var(--font-15);
          color: var(--color-white);
          font-weight: 700;
          letter-spacing: -0.38px;
        }
        .quick-item {
          gap: 1.3rem;
          display: flex;
          align-items: center;
          padding: 0;
          margin: 0;
        }
        .quick-item ul li::marker {
          display: none;
        }
        footer .col-lg-12 {
          border-top: 1px solid #ffffff21;
          border-bottom: 1px solid #ffffff21;
          padding-block: 3rem;
          margin-top: 3rem;
        }
        .quick_link {
          display: flex;
          padding: 1rem 0 0;
          list-style: none;
          gap: 1.3rem;
          margin-bottom: 0;
          align-items: center;
        }
        .quick_link li a {
          font: var(--font-13);
          color: var(--color-white);
          font-weight: 300;
          opacity: 0.8;
        }
        .quick_link span {
          border-right: 1px solid #ddd;
          padding-right: 1.5rem;
          display: block;
          color: var(--color-white);
          font: var(--font-15);
          font-weight: 700;
        }
        .list-unstyled li a:hover {
          color: var(--color-100);
        }
        .bottom_footer {
          padding-block: 2rem;
          display: flex;
          justify-content: space-between;
        }
        .bottom_footer p {
          margin-bottom: 0;
          font: var(--font-13);
          font-weight: 300;
          color: rgba(255, 255, 255, 0.5);
        }
        .connect_contant ul li a {
          position: relative;
          font: var(--font-12);
          color: #ffffff80;
          font-weight: 300;
        }
        .connect_contant ul li {
          position: relative;
        }
        .connect_contant ul li:first-child::before {
          content: none;
        }
        .connect_contant ul li:before {
          background-color: var(--color-100);
          content: "";
          border-radius: 0.5rem;
          width: 0.3rem;
          height: 0.3rem;
          position: absolute;
          top: 0.5rem;
          left: -0.8rem;
        }
      `}</style>
    </footer>
  );
}
