"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

export default function FacilitiesPage() {
  const [activeTab, setActiveTab] = useState("academic");
  const [activeLab, setActiveLab] = useState(0);
  const [facilitiesData, setFacilitiesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const container = useRef();
  useGSAP(
    () => {
      if (!facilitiesData) return;
      gsap.registerPlugin(ScrollTrigger);
      const boxes = gsap.utils.toArray(".facilities-list");
      // Set all boxes to be stacked (absolute positioning)
      gsap.set(boxes, {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
      });

      // Create a timeline for overlap animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".facilities-list-box",
          start: "top top",
          // end: "+=" + boxes.length * 800, // depends on number of slides
          scrub: true,
          pin: true,
          // markers: true, // remove later
        },
      });

      boxes.forEach((box, i) => {
        if (i === 0) return; // first one stays visible
        tl.fromTo(
          box,
          { opacity: 0 },
          { opacity: 1, duration: 1 },
          "+=0.2" // small gap before next overlaps
        );
      });
    },
    { dependencies: [facilitiesData], scope: container }
  );

  // Static data structure - replace with API call
  const staticData = {
    pageTitle: {
      main: "FACILITIES",
      subtitle: "BUILDING FOUNDATIONS FOR LIFELONG SUCCESS",
    },
    tabs: [
      { id: "academic", label: "Academic Facilities" },
      { id: "campus", label: "Campus Facilities" },
    ],
    classrooms: {
      title: "Classrooms",
      description:
        "The classrooms at JSSATE Noida blend traditional and modern learning environments—featuring spacious design, updated AV equipment, and select air-conditioned settings. These facilities are thoughtfully crafted to support interactive and effective education across disciplines.",
      image: "/images/custom-page/facility/classroom-banner.png",
      stats: {
        percentage: "85%",
        description:
          "CLASSROOMS FEATURE MODERN TEACHING TOOLS SUCH AS SMARTBOARDS AND PROJECTORS.",
      },
      features: [
        {
          icon: "/images/custom-page/facility/space.png",
          wallIcon: "/images/custom-page/facility/school-wall.webp",
          title: "SPACIOUS & WELL-VENTILATED DESIGN",
          description:
            "The classrooms at JSSATE Noida are designed to provide a comfortable and focused learning environment. They are described as wide, spacious, and well-ventilated, facilitating enhanced student engagement",
        },
        {
          icon: "/images/custom-page/facility/smart-tv.png",
          wallIcon: "/images/custom-page/facility/school-wall.webp",
          title: "SMART TECHNOLOGY INTEGRATION",
          description:
            "A significant number of classrooms are equipped with modern audio-visual aids, including LCD projectors, smartboards, and video-conferencing capabilities—enabling interactive instruction and multimedia",
        },
        {
          icon: "/images/custom-page/facility/air.png",
          wallIcon: "/images/custom-page/facility/school-wall.webp",
          title: "AIR-CONDITIONED OPTIONS",
          description:
            "Some lecture halls are air-conditioned, ensuring a conducive academic atmosphere, especially during warmer months.",
        },
      ],
    },
    labs: {
      title: "Academics Labs",
      description:
        "JSSATEN offers robust laboratory facilities across multiple departments to foster hands-on learning and innovative research",
      labsList: [
        {
          id: 1,
          title: "R&D Lab",
          header: "R&D Lab",
          description:
            "Some lecture halls are air-conditioned, creating a conducive academic atmosphere, especially during warmer months.",
          image: "/images/custom-page/facility/acedemic-lab-banner.png",
          link: "/labs/rd-lab",
        },
        {
          id: 2,
          title: "AICTE IDEA Lab",
          header: "AICTE IDEA Lab",
          description:
            "Some lecture halls are air-conditioned, creating a conducive academic atmosphere, especially during warmer months.",
          image:
            "https://project-demo.in/jss/assets/img/homepage/facilities/1762414408_facility_0_690c4f487e87d.png",
          link: "/labs/aicte-idea",
        },
        {
          id: 3,
          title: "Centralized Infrastructure",
          header: "Computer Science & IT Labs",
          description:
            "Some lecture halls are air-conditioned, creating a conducive academic atmosphere, especially during warmer months.",
          image: "/images/custom-page/facility/acedemic-lab-banner.png",
          link: "/labs/cs-labs",
        },
        {
          id: 4,
          title: "Computer Science & IT Labs",
          header: "Computer Science & IT Labs",
          description:
            "Focused on operations, production, and industrial process simulations.",
          image:
            "https://project-demo.in/jss/assets/img/homepage/facilities/1762414408_facility_0_690c4f487e87d.png",
          link: "/labs/cs-labs",
        },
        {
          id: 5,
          title: "Mechanical Engineering Labs",
          header: "Mechanical Engineering Labs",
          description:
            "Focused on operations, production, and industrial process simulations.",
          image: "/images/custom-page/facility/acedemic-lab-banner.png",
          link: "/labs/mechanical-labs",
        },
        {
          id: 6,
          title: "Electrical & Electronics Engineering Labs",
          header: "Electrical & Electronics Engineering Labs",
          description:
            "Focused on operations, production, and industrial process simulations.",
          image:
            "https://project-demo.in/jss/assets/img/homepage/facilities/1762414408_facility_0_690c4f487e87d.png",
          link: "/labs/electrical-labs",
        },
        {
          id: 7,
          title: "Industrial Engineering & Management (IEM) Labs",
          header: "Industrial Engineering & Management (IEM) Labs",
          description:
            "Focused on operations, production, and industrial process simulations.",
          image: "/images/custom-page/facility/acedemic-lab-banner.png",
          link: "/labs/iem-labs",
        },
      ],
    },
    researchCenter: {
      title: "Research Center",
      mainImage: "/images/custom-page/facility/research-first-banner.png",
      quote:
        "JSS University Noida is actively involved in diverse areas of research and offers consultancy services to industry.",
      description:
        "Sponsored research projects investigated by the faculty and supported by Government and research organizations have helped the Institute in setting up state of the art Laboratory facilities and equipment necessary for carrying out high quality research.",
      stats: {
        number: "185+",
        description: "Total Research Publications (2024)",
      },
      secondaryImage:
        "/images/custom-page/facility/research-secondry-banner.png",
      objectives: [
        "To establish collaborations and work closely with the industries.",
        "To initiate and coordinate the inter disciplinary research and consultancy activities.",
        "To strengthen the academic research, undertake sponsored projects and consultancy.",
        "To receive funds from external agencies to support research activities in the college and for carrying out projects.",
        "To guide and support the faculties and students to submit research proposals to funding agencies.",
        "To establish collaborations and work closely with the industries.",
      ],
    },
    library: {
      title: "Library",
      description:
        "JSS University Noida's Library & Information Centre is a cornerstone of academic life on campus, providing an extensive collection of resources and state-of-the-art facilities to support the educational and research needs of students, faculty, and staff. The library is dedicated to fostering a rich learning environment through its comprehensive services and diverse resources.",
      quote: {
        text: "“I am always willing to learn, I do not always like to be taught.”",
        author: "– W Churchill",
      },
      timings: {
        title: "Library Timings",
        schedule: [
          { days: "Monday to Friday", time: "8:35 AM to 10:00 PM" },
          {
            days: "Working Saturdays",
            time: "(1st, 3rd, and 5th Saturday) 8:35 AM to 7:00 PM",
          },
          {
            days: "During Examination",
            time: "(Monday to Friday) Upto 12 Midnight",
          },
          { days: "Book Circulation Timings", time: "9:00 AM to 5:30 PM" },
        ],
      },
      images: {
        libraryTop: "/images/custom-page/facility/library-top-banner.png",
        libraryBottom: "/images/custom-page/facility/library-bottom-banner.png",
        librarySide: "/images/custom-page/facility/library-side-banner.png",
      },
      stats: {
        number: "500K+",
        description:
          "books and print resources across all academic disciplines",
      },
    },
    greenInitiatives: {
      title: "University Green Initiatives",
      subtitle:
        "JSS University Noida, is deeply committed to environmental sustainability.",
      description:
        "The university has implemented a comprehensive Green Policy to promote eco-friendly practices across the campus. This policy encompasses a wide range of initiatives aimed at reducing the university's carbon footprint and fostering a culture of environmental responsibility. Key components of the Green Policy include waste reduction programs, such as extensive recycling efforts and the minimization of single-use plastics.",
      image: "/images/custom-page/facility/green-initiatives-banner.png",
      vision: {
        title: "To realise its vision, the University will:",
        points: [
          "Global orientation with local and ethical commitment",
          "Integration of disciplines, technologies, and cultural wisdom",
          "Service to humanity through purposeful learning and research",
          "Alignment with NEP 2020 and international standards",
        ],
      },
    },
    transport: {
      title: "Transport",
      subtitle: "100% SAFE & SANITISED BUSES",
      description:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed qui",
      mainImage: "/images/custom-page/facility/transport-img.webp",
      secondaryBanner: "/images/custom-page/facility/transport-img1.webp",
      stats: {
        number: "40+",
        description: "Total Buses in Fleet",
      },
      additionalText:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
    },
  };

  // Simulate API call
  useEffect(() => {
    const fetchFacilitiesData = async () => {
      try {
        setLoading(true);
        // Replace this with actual API call
        // const response = await fetch('/api/facilities');
        // const data = await response.json();

        // Using static data for now
        setTimeout(() => {
          setFacilitiesData(staticData);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error("Error fetching facilities data:", error);
        setLoading(false);
      }
    };

    fetchFacilitiesData();
  }, []);

  const handleLabClick = (index) => {
    setActiveLab(index);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <div>Loading facilities...</div>
      </div>
    );
  }

  if (!facilitiesData) {
    return (
      <div className="error-container">
        <div>Failed to load facilities data</div>
      </div>
    );
  }

  return (
    <main className="site_main">
      {/* Page Header Section */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head faclity-header-tabs">
                <h2>{facilitiesData.pageTitle.main}</h2>
                <h3>{facilitiesData.pageTitle.subtitle}</h3>

                <ul>
                  {facilitiesData.tabs.map((tab) => (
                    <li
                      key={tab.id}
                      className={activeTab === tab.id ? "active" : ""}
                    >
                      <a
                        href="javascript:void(0)"
                        onClick={(e) => {
                          e.preventDefault();
                          setActiveTab(tab.id);
                        }}
                      >
                        {tab.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classrooms Section */}
      <section className="facilities-sec1">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="facilities-text">
                <h6>{facilitiesData.classrooms.title}</h6>
                <p>{facilitiesData.classrooms.description}</p>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="facilities-img">
                <figure>
                  <Image
                    src={facilitiesData.classrooms.image}
                    alt="Classroom"
                    width={1200}
                    height={600}
                    className="img-fluid"
                  />
                </figure>

                <div className="col-lg-10 mx-auto">
                  <div className="facilities-img-box">
                    <div className="facilities-box">
                      <div className="facilities-box-text">
                        <div className="facilities-heading">
                          <h2>{facilitiesData.classrooms.stats.percentage}</h2>
                        </div>
                        <div className="facilities-titel">
                          <h5
                            dangerouslySetInnerHTML={{
                              __html:
                                facilitiesData.classrooms.stats.description
                                  .replace(/<span>/g, "<span>")
                                  .replace(/<\/span>/g, "</span>"),
                            }}
                          />
                        </div>
                      </div>
                      <div className="facilities-list">
                        <div ref={container}>
                          {facilitiesData.classrooms.features.map(
                            (feature, index) => (
                              <div key={index} className="facilities-list-box">
                                <figure>
                                  <Image
                                    src={feature.wallIcon}
                                    alt={feature.title}
                                    width={400}
                                    height={300}
                                    className="img-fluid"
                                  />
                                  <figcaption>
                                    <div className="facilities-list-text">
                                      <Image
                                        src={feature.icon}
                                        alt=""
                                        width={40}
                                        height={40}
                                        className="img-fluid"
                                      />
                                      <h4
                                        dangerouslySetInnerHTML={{
                                          __html: feature.title
                                            .replace(/<span>/g, "<span>")
                                            .replace(/<\/span>/g, "</span>"),
                                        }}
                                      />
                                      <p>{feature.description}</p>
                                    </div>
                                  </figcaption>
                                </figure>
                              </div>
                            )
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Academic Labs Header */}
      <section className="facilities-sec2">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="academics-labs-text">
                <h6>{facilitiesData.labs.title}</h6>
                <p>{facilitiesData.labs.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Labs Interactive Section */}
      <section className="facilities-sec3">
        <div className="labs-wrapper">
          <div
            className="labs-bg"
            id="labs-bg"
            style={{
              backgroundImage: `url(${facilitiesData.labs.labsList[activeLab].image})`,
            }}
          ></div>
          <div className="labs-overlay"></div>

          <div className="labs-container">
            {/* Left Side - Labs Menu */}
            <div className="labs-menu">
              {facilitiesData.labs.labsList.map((lab, index) => (
                <div
                  key={lab.id}
                  className={`menu-item ${activeLab === index ? "active" : ""}`}
                  onClick={() => handleLabClick(index)}
                >
                  <div className="menu-header">{lab.header}</div>
                  <div className="menu-content">
                    <h4>{lab.title}</h4>
                    <p>{lab.description}</p>
                    <Link href={lab.link}>
                      <i className="bi bi-arrow-right-short"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Side - Lab Info */}
            <div className="labs-info">
              <h2 className="labs-title">
                {facilitiesData.labs.labsList[activeLab].title}
              </h2>
              <p className="labs-desc">
                {facilitiesData.labs.labsList[activeLab].description}
              </p>
              <Link
                href={facilitiesData.labs.labsList[activeLab].link}
                className="labs-link"
              >
                <i className="bi bi-arrow-right-short"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Research Center Section */}
      <section className="facilities-sec4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="res-center">
                <div className="res-center-img">
                  <figure>
                    <Image
                      src={facilitiesData.researchCenter.mainImage}
                      alt="Research Center"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="res-center-text">
                  <div className="top-res-text">
                    <h6>{facilitiesData.researchCenter.title}</h6>
                    <blockquote>
                      {facilitiesData.researchCenter.quote}
                    </blockquote>
                    <p>{facilitiesData.researchCenter.description}</p>
                  </div>
                  <div className="bottom-res-box">
                    <div className="bottom-res-img">
                      <figure>
                        <Image
                          src={facilitiesData.researchCenter.secondaryImage}
                          alt="Research Stats"
                          width={200}
                          height={150}
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div className="bottom-res-text">
                      <h3>{facilitiesData.researchCenter.stats.number}</h3>
                      <p>{facilitiesData.researchCenter.stats.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-12">
              <div className="objectives-titel">
                <span>Objectives</span>
              </div>
              <div className="objectives">
                {facilitiesData.researchCenter.objectives.map(
                  (objective, index) => (
                    <div key={index} className="objectives-box">
                      <p>{objective}</p>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Library Section */}
      <section className="facilities-sec5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="library">
                <div className="library-box">
                  <div className="left-library">
                    <div className="top-library-text">
                      <h5>{facilitiesData.library.title}</h5>
                      <p>{facilitiesData.library.description}</p>
                      <div className="learn-text">
                        <h6>{facilitiesData.library.quote.text}</h6>
                        <span>{facilitiesData.library.quote.author}</span>
                      </div>
                      <Link href="#" className="library-link">
                        <i className="bi bi-arrow-right-short"></i>
                      </Link>
                    </div>

                    <div className="bottom-library-text">
                      <div className="library-timing">
                        <h6>{facilitiesData.library.timings.title}</h6>
                        <ul>
                          {facilitiesData.library.timings.schedule.map(
                            (item, index) => (
                              <li key={index}>
                                <span>{item.days}:</span> {item.time}
                              </li>
                            )
                          )}
                        </ul>
                      </div>
                      <div className="bottom-library-img">
                        <figure>
                          <Image
                            src={facilitiesData.library.images.librarySide}
                            alt="Library"
                            width={300}
                            height={200}
                            className="img-fluid"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                  <div className="right-library">
                    <div className="right-library-top">
                      <figure>
                        <Image
                          src={facilitiesData.library.images.libraryTop}
                          alt="Library Interior"
                          width={400}
                          height={300}
                          className="img-fluid"
                        />
                      </figure>
                    </div>
                    <div className="right-library-bottom">
                      <figure>
                        <Image
                          src={facilitiesData.library.images.libraryBottom}
                          alt="Library Collection"
                          width={400}
                          height={200}
                          className="img-fluid"
                        />
                      </figure>
                      <div className="right-library-text">
                        <h2>{facilitiesData.library.stats.number}</h2>
                        <p>{facilitiesData.library.stats.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Green Initiatives Section */}
      <section className="facilities-sec6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="initiatives">
                <div className="initiatives-img">
                  <figure>
                    <Image
                      src={facilitiesData.greenInitiatives.image}
                      alt="Green Initiatives"
                      width={600}
                      height={400}
                      className="img-fluid"
                    />
                  </figure>
                </div>
                <div className="initiatives-text">
                  <div className="initiatives-top-text">
                    <h5>{facilitiesData.greenInitiatives.title}</h5>
                    <h6>{facilitiesData.greenInitiatives.subtitle}</h6>
                    <p>{facilitiesData.greenInitiatives.description}</p>
                  </div>
                  <div className="initiatives-bottom-text">
                    <span>{facilitiesData.greenInitiatives.vision.title}</span>
                    <ul>
                      {facilitiesData.greenInitiatives.vision.points.map(
                        (point, index) => (
                          <li key={index}>{point}</li>
                        )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transport Section */}
      <section className="facilities-sec7">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="transport">
                <div className="transport-box">
                  <div className="transport-box-text">
                    <span>{facilitiesData.transport.title}</span>
                    <h3>{facilitiesData.transport.subtitle}</h3>
                    <p>{facilitiesData.transport.description}</p>
                    <Link href="#" className="library-link">
                      <i className="bi bi-arrow-right-short"></i>
                    </Link>
                  </div>
                  <div className="transport-box-img">
                    <figure>
                      <Image
                        src={facilitiesData.transport.mainImage}
                        alt="Transport"
                        width={500}
                        height={300}
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                </div>
                <div className="right-transport">
                  <div className="right-transport-img">
                    <figure>
                      <Image
                        src={facilitiesData.transport.secondaryBanner}
                        alt="Transport Fleet"
                        width={300}
                        height={200}
                        className="img-fluid"
                      />
                    </figure>
                  </div>
                  <div className="right-transport-text">
                    <div className="right-transport-titel">
                      <p>{facilitiesData.transport.additionalText}</p>
                    </div>
                    <div className="right-transport-heading">
                      <h3>{facilitiesData.transport.stats.number}</h3>
                      <p>{facilitiesData.transport.stats.description}</p>
                    </div>
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
