"use client";
import { useState } from "react";

const mobilePanelsData = [
  {
    name: "About JSS University",
    subMenu: ["Overview", "Scholarships", "International Students"],
    firstContent: {
      title: "SRI SUTTUR MATH THE <span class='blue-text'>1000 YEAR LEGACY</span>",
      desc: "The Genesis of the social-educational-spiritual philosophy.",
      img: "/images/header/humburger-first-banner.png",
      alt: "hamburger banner",
      url: "/",
    },
    secondContent: {
      title: "<span class='blue-text'>21+</span> Acres",
      desc: "Campus Area of the social-educational-spiritual philosophy.",
      img: "/images/header/humburger-second-banner.png",
      alt: "hamburger banner",
      url: "/",
    },
  },
  {
    name: "Courses",
    subMenu: ["Undergraduate", "Postgraduate", "Research", "Diploma"],
    firstContent: {
      title: "Explore Programs",
      desc: "Find the right program for your future.",
      img: "/images/header/course-banner.png",
      alt: "courses banner",
      url: "/courses",
    },
  },
  {
    name: "Admissions",
    subMenu: ["Admissions Calendar", "Admission Process", "Scholarship", "International Admissions"],
    firstContent: {
      title: "Join JSS University",
      desc: "Apply now and step into your future.",
      img: "/images/header/admissions-banner.png",
      alt: "admissions banner",
      url: "/admissions",
    },
  },
  {
    name: "Contact",
    subMenu: ["Phone", "WhatsApp", "Email", "Address"],
    firstContent: {
      title: "Get in Touch",
      desc: "Reach out for queries and support.",
      img: "/images/header/contact-banner.png",
      alt: "contact banner",
      url: "/contact",
    },
  },
];

export default function MobileFooterMenu() {
  const [activePanel, setActivePanel] = useState(null);
  const togglePanel = (name) => {
    setActivePanel(activePanel === name ? null : name);
  };

  return (
    <div>
     
      <div className="panel-wrapper">
        {mobilePanelsData.map((item) => (
          <div
            key={item.name}
            className={`panel ${activePanel === item.name ? "open" : ""}`}
          >
         
            {item.subMenu && (
              <ul>
                {item.subMenu.map((sub, idx) => (
                  <li key={idx}>{sub}</li>
                ))}
              </ul>
            )}

           
            {item.firstContent && (
              <div className="panel-banner">
                <img src={item.firstContent.img} alt={item.firstContent.alt} />
                <h3 dangerouslySetInnerHTML={{ __html: item.firstContent.title }} />
                <p>{item.firstContent.desc}</p>
              </div>
            )}

            {/* Second Content */}
            {item.secondContent && (
              <div className="panel-banner">
                <img src={item.secondContent.img} alt={item.secondContent.alt} />
                <h3 dangerouslySetInnerHTML={{ __html: item.secondContent.title }} />
                <p>{item.secondContent.desc}</p>
              </div>
            )}
          </div>
        ))}
      </div>

    
      <div className="mobile-bottom-menu">
        <ul className="menu-list">
          {mobilePanelsData.map((item) => (
            <li key={item.name}>
              <button onClick={() => togglePanel(item.name)}>
                <div className="icon">icon</div>
                <p>{item.name}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <style jsx>{`
        .mobile-bottom-menu {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          background: black;
          z-index: 1000;
        }
        .menu-list {
          display: flex;
          justify-content: space-around;
          padding: 0.5rem 0;
          margin: 0;
          list-style: none;
          color: white;
        }
        .menu-list li {
          text-align: center;
        }
        .menu-list button {
          background: none;
          border: none;
          color: white;
          display: flex;
          flex-direction: column;
          align-items: center;
          font-size: 0.8rem;
          cursor: pointer;
        }
        .icon {
          width: 40px;
          height: 40px;
          background: white;
          color: black;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }
        .panel-wrapper {
          position: fixed;
          bottom: 60px;
          left: 0;
          width: 100%;
          z-index: 900;
        }
        .panel {
          background: #f0f0f0;
          width: 100%;
          transform: translateY(100%);
          transition: transform 0.3s ease-in-out;
          padding: 1rem;
          border-top-left-radius: 1rem;
          border-top-right-radius: 1rem;
          display: none;
        }
        .panel.open {
          display: block;
          transform: translateY(0);
        }
        .panel-content ul {
          list-style: none;
          padding: 0;
          margin: 0.5rem 0;
        }
        .panel-content li {
          margin-bottom: 0.5rem;
        }
        .panel-banner {
          margin-top: 1rem;
        }
        .panel-banner img {
          width: 100%;
          border-radius: 0.5rem;
          margin-bottom: 0.5rem;
        }
        .panel-banner h3 {
          margin: 0.2rem 0;
        }
        @media (min-width: 992px) {
          .mobile-bottom-menu {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
