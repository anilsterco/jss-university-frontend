"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "@/styles/style.css";
import "@/styles/custom.style.css";

const MOBILE_BREAKPOINT = 768;

// ── Isolated slider component — each instance owns its own swiper ref ──
function EarlyGrowthSlider({ items }) {
  const swiperRef = useRef(null);
  const hasMultiple = items.length > 1;

  const handlePrev = () => {
    if (swiperRef.current && !swiperRef.current.destroyed) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && !swiperRef.current.destroyed) {
      swiperRef.current.slideNext();
    }
  };

  if (!items || items.length === 0) return <p>No slider content available</p>;

  return (
    <div className="earlygrowth-slider-wrapper" style={{ position: "relative" }}>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        spaceBetween={30}
        slidesPerView={1}
        loop={hasMultiple}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onBeforeDestroy={() => {
          swiperRef.current = null;
        }}
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div className="early-slide" style={{ display: "flex", gap: "2rem" }}>
              {(item.image || item.video) && (
                <div style={{ flex: 1 }}>
                  {item.video ? (
                    <video
                      src={item.video}
                      width={600}
                      height={400}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="imgsli_left"
                      style={{ objectFit: "cover" }}
                    />
                  ) : (
                    <Image
                      src={item.image}
                      alt={item.title ? item.title.replace(/<[^>]+>/g, "") : "Early Growth"}
                      className="imgsli_left"
                      width={600}
                      height={400}
                      style={{ objectFit: "cover", width: "100%", height: "auto" }}
                    />
                  )}
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

                {/* Only render nav buttons when there are multiple slides */}
                {hasMultiple && (
                  <div className="nav_buttons">
                    <div
                      className="earlygrowth-nav earlygrowth-nav-prev"
                      onClick={handlePrev}
                      role="button"
                      aria-label="Previous slide"
                    >
                      <Image src="/images/icons/circle-arrow-left.svg" alt="Prev" width={22} height={22} />
                    </div>
                    <div
                      className="earlygrowth-nav earlygrowth-nav-next"
                      onClick={handleNext}
                      role="button"
                      aria-label="Next slide"
                    >
                      <Image src="/images/icons/circle-arrow-right.svg" alt="Next" width={22} height={22} />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

// ── Main component ──
export default function AboutTwo({ data }) {
  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const tabs = data?.[0]?.items || [];

  return (
    <section className="about_two">
      <div className="container">
        <div className="abou_t_sec">
          <h5
            className="about_subtitle"
            dangerouslySetInnerHTML={{
              __html: data[0]?.items[0]?.title || "Early Growth and Achievements",
            }}
          />
          <h2
            className="pb_max_4rem"
            dangerouslySetInnerHTML={{
              __html:
                data[0]?.items[0]?.subTitle ||
                "In just its formative year (2024–2025), the University has made impressive strides:",
            }}
          />

          {/* ── DESKTOP: Tab layout ── */}
          {!isMobile && (
            <>
              <nav className="growth-tabs">
                <ul>
                  {tabs.map((tab, idx) => (
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
                {tabs[activeTab]?.tabData?.length > 0 ? (
                  /*
                   * key={activeTab} forces React to fully unmount + remount
                   * EarlyGrowthSlider on every tab change, so the swiper ref
                   * is always fresh — no stale instance from a previous tab.
                   */
                  <EarlyGrowthSlider
                    key={activeTab}
                    items={tabs[activeTab].tabData}
                  />
                ) : (
                  <p>No data available for this tab</p>
                )}
              </div>
            </>
          )}

          {/* ── MOBILE: Accordion layout ── */}
          {isMobile && (
            <div>
              {tabs.map((tab, idx) => {
                const isOpen = openAccordion === idx;
                return (
                  <details
                    key={tab.position || idx}
                    className="faqItem tabs_accordion"
                    open={isOpen}
                    onToggle={(e) => {
                      if (e.target.open) {
                        setOpenAccordion(idx);
                      } else if (openAccordion === idx) {
                        setOpenAccordion(null);
                      }
                    }}
                  >
                    <summary className="faqQuestion">
                      <span className="faq_heading">{tab.tabName}</span>
                      <span className="icon"></span>
                    </summary>
                    <div className="faqAnswer">
                      {tab.tabData?.length > 0 ? (
                        // key ensures fresh swiper when accordion reopens
                        <EarlyGrowthSlider
                          key={`mob-${idx}`}
                          items={tab.tabData}
                        />
                      ) : (
                        <p>No data available</p>
                      )}
                    </div>
                  </details>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}