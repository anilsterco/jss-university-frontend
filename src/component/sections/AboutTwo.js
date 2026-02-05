"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";

import "swiper/css";
import "swiper/css/navigation";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutTwo({ data }) {
  const [activeGrowthTab, setActiveGrowthTab] = useState("growthTab1");

  const handleGrowthTabClick = (tab) => {
    setActiveGrowthTab(tab);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "slider":
        return (
          <div
            key={`slider-section-${sectionIndex}`}
            className="early-grid"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <Swiper
              modules={[Navigation, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: `.earlygrowth-next-${sectionIndex}`,
                prevEl: `.earlygrowth-prev-${sectionIndex}`,
              }}
            >
              {section.items
                .sort((a, b) => a.position - b.position)
                .map((item, index) => (
                  <SwiperSlide
                    key={item.item_uuid || index}
                    className="early-slide"
                  >
                    {/* IMAGE */}
                    <figure
                      className="shine-effect"
                      data-aos="zoom-in"
                      data-aos-duration="1000"
                    >
                      <Image
                        src={item.file || "/default-image.jpg"}
                        alt={item.title || "Early Growth"}
                        width={700}
                        height={400}
                        className="w-100 h-100"
                        style={{ objectFit: "cover" }}
                      />
                    </figure>

                    {/* CONTENT */}
                    <div
                      className="early_rgt"
                      data-aos="fade-left"
                      data-aos-delay="200"
                      data-aos-duration="900"
                    >
                      <h4 data-aos="fade-up" data-aos-delay="300">
                        {item.title}
                      </h4>

                      <h5 data-aos="fade-up" data-aos-delay="400">
                        {item.subtitle}
                      </h5>

                      <div
                        className="inst-reg"
                        data-aos="fade-up"
                        data-aos-delay="500"
                      >
                        <h5>{item.bottomTitle}</h5>
                        <h3>{item.bottomSubTitle}</h3>
                      </div>

                      {/* ARROWS */}
                      <div
                        className="early-arrows"
                        data-aos="fade-up"
                        data-aos-delay="600"
                      >
                        <BsArrowLeftCircle
                          className={`earlygrowth-prev-${sectionIndex}`}
                        />
                        <BsArrowRightCircle
                          className={`earlygrowth-next-${sectionIndex}`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="about_two">
      <div className="container">
        <div className="abou_t_sec">
          <h5 className="about_subtitle">Early Growth and Achievements</h5>
          <h2>
            In just its formative year (2024–2025), the University has made
            impressive strides:
          </h2>
          <nav className="growth-tabs">
            <ul>
              <li>
                <button
                  type="button"
                  className={activeGrowthTab === "growthTab1" ? "active" : ""}
                  onClick={() => handleGrowthTabClick("growthTab1")}
                >
                  Institutional Recognition
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={activeGrowthTab === "growthTab2" ? "active" : ""}
                  onClick={() => handleGrowthTabClick("growthTab2")}
                >
                  Academic & Industry Collaborations
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={activeGrowthTab === "growthTab3" ? "active" : ""}
                  onClick={() => handleGrowthTabClick("growthTab3")}
                >
                  Student Excellence
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={activeGrowthTab === "growthTab4" ? "active" : ""}
                  onClick={() => handleGrowthTabClick("growthTab4")}
                >
                  Co-curricular and Cultural Impact
                </button>
              </li>

              <li>
                <button
                  type="button"
                  className={activeGrowthTab === "growthTab5" ? "active" : ""}
                  onClick={() => handleGrowthTabClick("growthTab5")}
                >
                  Community Outreach
                </button>
              </li>
            </ul>
          </nav>

          <div className="grow_tb_contsec">
            <div
              id="growthTab1"
              className={`growth-item ${activeGrowthTab === "growthTab1" ? "active" : ""}`}
            >
              <div className="growth-content">
                <div className="growth-list">
                  {data && data.length > 0 ? (
                    data.map((section, index) => renderSection(section, index))
                  ) : (
                    <div className="early-grid" data-aos="fade-up">
                      <p>No slider content available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              id="growthTab2"
              className={`growth-item ${activeGrowthTab === "growthTab2" ? "active" : ""}`}
            >
              <div className="growth-content">
                <div className="growth-list">
                  {" "}
                  {data && data.length > 0 ? (
                    data.map((section, index) => renderSection(section, index))
                  ) : (
                    <div className="early-grid" data-aos="fade-up">
                      <p>No slider content available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div
              id="growthTab3"
              className={`growth-item ${activeGrowthTab === "growthTab3" ? "active" : ""}`}
            >
              <div className="growth-content">
                <div className="growth-list">No slider content available 3</div>
              </div>
            </div>
            <div
              id="growthTab4"
              className={`growth-item ${activeGrowthTab === "growthTab4" ? "active" : ""}`}
            >
              <div className="growth-content">
                <div className="growth-list">No slider content available 4</div>
              </div>
            </div>
            <div
              id="growthTab5"
              className={`growth-item ${activeGrowthTab === "growthTab5" ? "active" : ""}`}
            >
              <div className="growth-content">
                <div className="growth-list">No slider content available 5</div>
              </div>
            </div>
          </div>
        </div>
        {/* {data && data.length > 0 ? (
          data.map((section, index) => renderSection(section, index))
        ) : (
          <div className="early-grid" data-aos="fade-up">
            <p>No slider content available</p>
          </div>
        )} */}
      </div>
    </section>
  );
}
