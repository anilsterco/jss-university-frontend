"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";
import { TfiArrowCircleRight } from "react-icons/tfi";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutClient() {
  const [activeTab, setActiveTab] = useState("/about");
  const aboutPage = {
    title: "SRI SUTTUR MATH THE <span>1000-YEAR LEGACY</span>",
    subTitle: "ABOUT",
    tabs: [
      { text: "About JSS", url: "/about" },
      { text: "About JSSMVP", url: "/about-jssmvp" },
      { text: "Heritage", url: "/heritage" },
      { text: "Leadership", url: "/leadership" },
    ],
  };
  const leaderShipGridData = {
    leaders: [
      {
        id: 1,
        name: "JAGADGURU SRI SHIVARATHRI",
        designation: "Chancellor",
        image: "/images/custom-page/about/shivarathri.png",
        slug: "jagadguru-sri-shivarathri",
      },
      {
        id: 2,
        name: "DR C G BETSURMATH",
        designation: "EXECUTIVE SECRETARY",
        image: "/images/custom-page/about/betsurmath.png",
        slug: "jagadguru-sri-shivarathri",
      },
      {
        id: 3,
        name: "DR. B. SURESH",
        designation: "PRO CHANCELLOR",
        image: "/images/custom-page/about/suresh.png",
        slug: "jagadguru-sri-shivarathri",
      },
      {
        id: 4,
        name: "DR. H.R. MAHADEVASWAMY",
        designation: "VICE CHANCELLOR",
        image: "/images/custom-page/about/mahadeva.png",
        slug: "jagadguru-sri-shivarathri",
      },
      {
        id: 5,
        name: "DR. T.G.MAMATHA",
        designation: "REGISTRAR",
        image: "/images/custom-page/about/mamatha.png",
        slug: "jagadguru-sri-shivarathri",
      },
      {
        id: 6,
        name: "DR. R.S JAGDISH",
        designation: "DEAN – ENGINEERING & TECHNOLOGY",
        image: "/images/custom-page/about/jagdish.png",
        slug: "jagadguru-sri-shivarathri",
      },
      {
        id: 7,
        name: "PROF. DR. SATYENDRA PATNAIK",
        designation: "DEAN EDGE",
        image: "/images/custom-page/about/satyendra.png",
        slug: "jagadguru-sri-shivarathri",
      },
    ],
  };

  const leadershipTopSection = leaderShipGridData.leaders[0];
  const leadershipData = leaderShipGridData.leaders.slice(1);

  const aboutData = {
    description1:
      "JSS University, Noida, is the latest milestone in the illustrious journey of JSS Mahavidyapeetha (MVP) — an educational movement with a rich legacy of over six decades in advancing learning, research, and societal development.",
    aboutImage: "/images/custom-page/about/about-main-banner.png",
    establishText:
      "Established in 2024 with the approval of the Government of Uttar Pradesh, the University carries forward the Mahavidyapeetha’s vision...",
    associatedLogosTop: [
      {
        img: "/images/custom-page/about/ugc-logo.png",
        caption:
          "JSS Academy of Technical Education, Noida is recognized under UGC",
      },
      {
        img: "/images/custom-page/about/aicte.png",
        caption:
          "Approved by All India Council for Technical Education (AICTE)",
      },
      {
        img: "/images/custom-page/about/naac.png",
        caption: "National Assessment and Accreditation Council (NAAC)",
      },
    ],
    associatedLogosBottom: [
      {
        rank: 37,
        text: "IN TOP 50 PRIVATE STATE UNIVERSITIES BY",
        img: "/images/custom-page/about/outlook.png",
      },
      {
        rank: 9,
        text: "AMONG TOP EMERGING PRIVATE INSTITUTIONS 2016 BY",
        img: "/images/custom-page/about/times-of-india.png",
      },
      {
        rank: 7,
        text: "IN TOP PRIVATE UNIVERSITIES: STATE RANKINGS BY",
        img: "/images/custom-page/about/education-world.png",
      },
    ],
    slider: [
      {
        image: "/images/custom-page/about/early-img.png",
        title: "Early Growth and Achievements 1",
        subtitle:
          "In just its formative year (2024–2025), the University has made impressive strides:",
        bottomTitle: "TITANIUM BAND FOR",
        bottomSubtitle:
          "TITANIUM BAND FOR “INSTITUTION OF ACADEMIC EXCELLENCE” IN THE OBE RANKING 2025.",
      },
      {
        image: "/images/custom-page/about/early-img.png",
        title: "Early Growth and Achievements 1",
        subtitle:
          "In just its formative year (2024–2025), the University has made impressive strides:",
        bottomTitle:
          "TITANIUM BAND FOR “INSTITUTION OF ACADEMIC EXCELLENCE” IN THE OBE RANKING 2025.",
        bottomSubtitle:
          "TITANIUM BAND FOR “INSTITUTION OF ACADEMIC EXCELLENCE” IN THE OBE RANKING 2025.",
      },
    ],
    visionMission: {
      image: "/images/custom-page/about/vsn-msn.png",
      visionTitle: "Vision & Mission",
      visionDesc:
        "To become a transformative university where knowledge meets compassion...",
      visionPoints: [
        "Transformative learning beyond transactional academics",
        "Compassion and spiritual grounding of the JSS legacy",
        "A balance of cutting-edge innovation with cultural rootedness",
        "Responsibility to shape a better, more inclusive world",
      ],
      missionTitle: "Mission",
      missionDesc:
        "JSS University, Noida, will nurture globally conscious, ethically grounded leaders...",
      missionPoints: [
        "Global orientation with local and ethical commitment",
        "Integration of disciplines, technologies, and cultural wisdom",
        "Service to humanity through purposeful learning and research",
        "Alignment with NEP 2020 and international standards",
      ],
    },
    values: [
      {
        icon: "/images/custom-page/about/dharma.png",
        title: "Dharma (Ethical Responsibility)",
        text: "Commitment to conduct grounded in integrity and social accountability.",
      },
      {
        icon: "/images/custom-page/about/jnana.png",
        title: "Jnana (Pursuit of Truth)",
        text: "Fostering lifelong inquiry, scientific spirit, and intellectual honesty.",
      },
      {
        icon: "/images/custom-page/about/daya.png",
        title: "Daya (Compassion)",
        text: "Sensitivity to societal needs, equity in access, and service to humanity.",
      },
      {
        icon: "/images/custom-page/about/tejas.png",
        title: "Tejas (Excellence with Energy)",
        text: "Relentless pursuit of quality, creativity, and leadership.",
      },
      {
        icon: "/images/custom-page/about/sankalpa.png",
        title: "Sankalpa (Purposeful Innovation)",
        text: "Boldness in thought, resilience in action, and mission-driven outcomes.",
      },
      {
        icon: "/images/custom-page/about/samanvaya.png",
        title: "Samanvaya (Interconnectedness / harmony)",
        text: "Embracing the fusion of disciplines, systems thinking, and collaborative problem-solving.",
      },
    ],
    quality: {
      image: "/images/custom-page/about/quality-policy-img.png",
      title: "Quality Policy",
      text: "To ensure excellence and relevance in all academic and administrative activities...",
      emphasizes: [
        "Commitment to measurable outcomes and academic rigor",
        "Culture of continuous learning and quality enhancement",
        "Ethical and inclusive practices in every domain",
      ],
    },
  };

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  if (!aboutData) return <p>Loading...</p>;

  return (
    <main className="about-page">
      {/* ========== TITLE SECTION ========== */}
      <section className="inner-title">
        <div className="container">
          <div className="innnr_head text-center">
            <h2>{aboutPage.subTitle}</h2>
            <h3 dangerouslySetInnerHTML={{ __html: aboutPage.title }}></h3>
            <ul>
              {aboutPage.tabs.map((tab, i) => (
                <li
                  key={i}
                  className={tab.url === activeTab ? "active" : ""}
                  onClick={() => handleTabClick(tab.url)}
                  style={{ cursor: "pointer" }}
                >
                  {tab.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {activeTab !== "/leadership" ? (
        <div className="about-content-layout">
          {/* ========== ABOUT ONE ========== */}
          <section className="about_one">
            <div className="container">
              <div className="abt_cntnt">
                <p>{aboutData.description1}</p>
                <figure>
                  <Image
                    src={aboutData.aboutImage}
                    alt="about"
                    width={800}
                    height={500}
                    className="img-fluid w-100"
                  />
                </figure>
              </div>

              <div className="estblish">
                <p>{aboutData.establishText}</p>
              </div>

              <div className="top_log_grid">
                {aboutData.associatedLogosTop.map((item, i) => (
                  <figure key={i}>
                    <Image src={item.img} alt="logo" width={100} height={100} />
                    <figcaption>
                      <p>{item.caption}</p>
                    </figcaption>
                  </figure>
                ))}
              </div>

              <div className="btm_log_grid">
                {aboutData.associatedLogosBottom.map((item, i) => (
                  <figure key={i}>
                    <figcaption>
                      <h4>
                        <sup>#</sup>
                        {item.rank}
                      </h4>
                      <p>{item.text}</p>
                    </figcaption>
                    <Image
                      src={item.img}
                      alt="rank-logo"
                      width={120}
                      height={25}
                    />
                  </figure>
                ))}
              </div>
            </div>
          </section>

          {/* ========== ABOUT TWO - EARLY GROWTH ========== */}
          <section className="about_two">
            <div className="container">
              <div className="early-grid">
                <Swiper
                  modules={[Navigation, EffectFade]}
                  effect="fade"
                  fadeEffect={{ crossFade: true }}
                  spaceBetween={30}
                  slidesPerView={1}
                  style={{ padding: "30px 30px" }}
                  navigation={{
                    nextEl: ".earlygrowth-next",
                    prevEl: ".earlygrowth-prev",
                  }}
                >
                  {aboutData.slider.map((item, i) => (
                    <SwiperSlide key={i} className="early-slide">
                      <figure>
                        <Image
                          src={item.image}
                          alt="early-growth"
                          width={700}
                          height={400}
                          style={{ width: "100%", height: "auto" }}
                        />
                      </figure>
                      <div className="early_rgt">
                        <h4>{item.title}</h4>
                        <h5>{item.subtitle}</h5>

                        <div className="inst-reg">
                          <h5>{item.bottomTitle}</h5>

                          <h3>{item.bottomSubtitle}</h3>
                        </div>
                        <div className="early-arrows">
                          <BsArrowLeftCircle className="earlygrowth-prev" />
                          <BsArrowRightCircle className="earlygrowth-next" />
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </section>

          {/* ========== ABOUT THREE - VISION & MISSION ========== */}
          <section className="about_three">
            <div className="container">
              <div className="vsn_msn_grid">
                <div className="vsn-lft">
                  <Image
                    src={aboutData.visionMission.image}
                    alt="vision"
                    width={700}
                    height={500}
                    style={{ width: "100%", height: "auto" }}
                  />
                </div>
                <div className="miss-rgt">
                  <div className="vsn">
                    <h4>{aboutData.visionMission.visionTitle}</h4>
                    <h5>{aboutData.visionMission.visionDesc}</h5>
                    <ul className="custom-list">
                      {aboutData.visionMission.visionPoints.map((v, i) => (
                        <li key={i}>{v}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="msn">
                    <h4>{aboutData.visionMission.missionTitle}</h4>
                    <p>{aboutData.visionMission.missionDesc}</p>
                    <h6>To realise its vision, the University will:</h6>
                    <ul className="custom-list">
                      {aboutData.visionMission.missionPoints.map((m, i) => (
                        <li key={i}>{m}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== ABOUT FOUR - VALUES ========== */}
          <section className="about_four">
            <div className="container">
              <div className="row justify-content-center">
                <div className="values-section">
                  <div className="col-lg-10 mx-auto">
                    <h3 className="section-title text-center">Values</h3>
                    <div className="values-grid">
                      {aboutData.values.map((val, i) => (
                        <div className="value-box" key={i}>
                          <figure>
                            <Image
                              src={val.icon}
                              alt={val.title}
                              width={70}
                              height={70}
                            />
                          </figure>
                          <h3>{val.title}</h3>
                          <p>{val.text}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* ========== ABOUT FIVE - QUALITY POLICY ========== */}
          <section className="about_five">
            <div className="container">
              <div className="quality_grid">
                <figure>
                  <Image
                    src={aboutData.quality.image}
                    alt="quality"
                    width={700}
                    height={500}
                  />
                </figure>
                <div className="qty-rgt">
                  <h3>{aboutData.quality.title}</h3>
                  <p>{aboutData.quality.text}</p>
                  <h5>This policy emphasizes:</h5>
                  <ul className="custom-list">
                    {aboutData.quality.emphasizes.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </div>
      ) : (
        <>
          {/* =================== Top Section =================== */}
          <section className="leadership_one">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="top_img">
                    <figure>
                      <Image
                        src={leadershipTopSection.image}
                        alt="leadership-img"
                        width={1200}
                        height={600}
                        className="img-fluid w-100"
                      />
                      <figcaption>
                        <h3>
                          {leadershipTopSection.name}{" "}
                          <span>{leadershipTopSection.subtitle}</span>
                        </h3>
                        <p>
                          {leadershipTopSection.designation}
                          {/* <Image
                            src={leadershipTopSection.messageIcon}
                            alt="round-arrow-right"
                            width={24}
                            height={24}
                          /> */}
                        </p>
                      </figcaption>
                      <Link
                        href={`/leadership/${leadershipTopSection.slug}`}
                        className="links"
                      ></Link>
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* =================== Leadership Grid =================== */}
          <section className="leadership_two">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12">
                  <div className="leadership_grid">
                    {leadershipData.map((leader) => (
                      <div key={leader.id} className="leadership_grid_Bx">
                        <figure>
                          <span>
                            <Image
                              src={leader.image}
                              alt={leader.name}
                              width={400}
                              height={400}
                              style={{ width: "100%", height: "auto" }}
                              className=""
                            />
                          </span>
                          <figcaption>
                            <h3>{leader.name}</h3>
                            <p>
                              {leader.designation}
                              <TfiArrowCircleRight className="leadership-arrow-icon" />
                            </p>
                          </figcaption>
                        </figure>
                        <Link
                          href={`/leadership/${leadershipTopSection.slug}`}
                          className="links"
                        ></Link>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
