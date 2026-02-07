"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay } from "swiper/modules";
import { BsArrowRightCircle, BsArrowLeftCircle } from "react-icons/bs";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutTwo({ data }) {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  
  const renderSlider = (items, sectionIndex) => {
    if (!items || items.length === 0) return <p>No slider content available</p>;

    return (
      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={items.length > 1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        navigation={{
          nextEl: `.earlygrowth-next-${sectionIndex}`,
          prevEl: `.earlygrowth-prev-${sectionIndex}`,
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="early-slide"
              style={{ display: "flex", alignItems: "center", gap: "2rem" }}
            >
              {item.image && (
                <div style={{ flex: 1 }}>
                  <Image
                    src={item.image}
                    alt={
                      item.title
                        ? item.title.replace(/<[^>]+>/g, "")
                        : "Early Growth"
                    }
                    width={600}
                    height={400}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>
              )}
              <div
                className="early_rgt"
                style={{ flex: 1 }}
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="900"
              >
                {item.subtitle && <h5>{item.subtitle}</h5>}
                {item.title && (
                  <h4 dangerouslySetInnerHTML={{ __html: item.title }} />
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    );
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
              {data?.[0]?.items?.map((tab, idx) => (
                <li key={tab.position || idx}>
                  <button
                    type="button"
                    className={activeTab === idx ? "active" : ""}
                    onClick={() => setActiveTab(idx)}
                  >
                    {tab.tabName}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grow_tb_contsec">
            {data?.[0]?.items?.[activeTab]?.tabData?.length > 0 ? (
              renderSlider(data[0].items[activeTab].tabData, activeTab)
            ) : (
              <p>No data available for this tab</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
