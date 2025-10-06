"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/mousewheel";
import "swiper/css/keyboard";

export default function HeroSlider() {
  const swiperRef = useRef(null);
  const sectionRef = useRef(null);
  const [isPinned, setIsPinned] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(true);

  const slides = [
    {
      id: 1,
      title: "CLASSROOM",
      desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
      img: "/images/home-page/fourth-section-first-banner.png",
      url: [
        {
          link: "/",
          text: "SMART CLASSROOM",
        },
        {
          link: "/",
          text: "VIRTUAL CLASSROOM",
        },
        {
          link: "/",
          text: "LECTURE HALL",
        },
      ],
    },
    {
      id: 2,
      title: "ACADEMICS LABS",
      desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
      img: "/images/home-page/fourth-section-second-banner.png",
      url: [
        {
          link: "/",
          text: "SMART CLASSROOM",
        },
        {
          link: "/",
          text: "VIRTUAL CLASSROOM",
        },
        {
          link: "/",
          text: "LECTURE HALL",
        },
      ],
    },
    {
      id: 3,
      title: "CAMPUS",
      desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
      img: "/images/home-page/fourth-section-third-banner.png",
      url: [
        {
          link: "/",
          text: "SMART CLASSROOM",
        },
        {
          link: "/",
          text: "VIRTUAL CLASSROOM",
        },
        {
          link: "/",
          text: "LECTURE HALL",
        },
      ],
    },
    {
      id: 4,
      title: "SPORTS AND HEALTH",
      desc: "JSS University offers to its students all the dimensions of education needed for leadership in a rapidly changing world.",
      img: "/images/home-page/fourth-section-fourth-banner.png",
      url: [
        {
          link: "/",
          text: "SMART CLASSROOM",
        },
        {
          link: "/",
          text: "VIRTUAL CLASSROOM",
        },
        {
          link: "/",
          text: "LECTURE HALL",
        },
      ],
    },
  ];

  // Detect when slider section is in viewport
  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsPinned(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );
    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSlideChange = (swiper) => {
    setIsFirstSlide(swiper.activeIndex === 0);
    setIsLastSlide(swiper.activeIndex === slides.length - 1);
  };

  const handleWheel = useCallback(
    (e) => {
      if (!isPinned || isTransitioning) return;
      const swiper = swiperRef.current.swiper;
      const delta = e.deltaY;

      // Scroll down
      if (delta > 40) {
        if (!isLastSlide) {
          swiper.slideNext(800);
        } else {
          // Instantly move to next section (no delay/freeze)
          setIsTransitioning(true);
          const next = sectionRef.current.nextElementSibling;
          if (next) {
            document.body.style.overflow = "auto";
            next.scrollIntoView({ behavior: "smooth" });
          }
          // small timeout to avoid double-trigger
          setTimeout(() => setIsTransitioning(false), 300);
        }
      }

      // Scroll up
      else if (delta < -40) {
        if (!isFirstSlide) {
          swiper.slidePrev(800);
        } else {
          // Instantly move to previous section
          setIsTransitioning(true);
          const prev = sectionRef.current.previousElementSibling;
          if (prev) {
            document.body.style.overflow = "auto";
            prev.scrollIntoView({ behavior: "smooth" });
          }
          setTimeout(() => setIsTransitioning(false), 300);
        }
      }
    },
    [isPinned, isTransitioning, isLastSlide, isFirstSlide]
  );

  // Listen for mousewheel only while slider is visible
  useEffect(() => {
    const handleGlobalWheel = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;
      const inView =
        rect.top <= window.innerHeight * 0.7 &&
        rect.bottom >= window.innerHeight * 0.3;

      if (inView) {
        e.preventDefault();
        handleWheel(e);
      }
    };
    window.addEventListener("wheel", handleGlobalWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleGlobalWheel);
  }, [handleWheel]);

  return (
    <section ref={sectionRef} className="fourth-slider-section">
      <div className="heading-container">
        <div className="heading-content d-flex gap-5">
          <div className="heading-icon">
            <CiCirclePlus color="#b08f29" fontSize={30} />
          </div>
          <div className="">
            <h6 className="mb-2">FACILITIES @ JSS UNIVERSITY</h6>
            <h1 className="mb-0">
              INFRA THAT <span className="blue-text">ELEVATES</span>
            </h1>
          </div>
        </div>
      </div>
      <div
        className={`slider-sticky-wrapper ${isPinned ? "fixed-slider" : ""}`}
      >
        <Swiper
          ref={swiperRef}
          modules={[Mousewheel, Keyboard]}
          direction="vertical"
          speed={3000}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          allowTouchMove={false}
          style={{ width: "100%", height: "100vh" }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-container">
                <Image
                  src={slide.img}
                  alt="slide image"
                  fill
                  priority={index === 0}
                  quality={85}
                  sizes="100vw"
                  style={{ objectFit: "cover" }}
                />
                <div className="vertical-line">
                  <div className="slide-number-box">{index + 1}</div>
                </div>
                <div className="banner-content">
                  <div>
                    <h2>{slide.title}</h2>
                    <p>{slide.desc}</p>
                  </div>
                </div>
                <div className="banner-links">
                  {slide.url &&
                    slide.url.map((item, index) => (
                      <Link key={index} href={item.link}>
                        {item.text}
                        <FaChevronRight />
                      </Link>
                    ))}
                </div>
                <div className="slide-progress">
                  <span>
                    {index + 1} / {slides.length}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style jsx>{`
        .fourth-slider-section h1 {
          font-size: 3.5rem;
        }
        .fourth-slider-section {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          background: #f6f6f6;
        }

        .slider-sticky-wrapper {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
        }

        .fixed-slider {
          z-index: 10;
          position: fixed;
          top: 14%;
          left: 0;
          right: 0;
        }
        .banner-links {
          gap: 2rem;
          font-size: 14px;
          display: flex;
          position: absolute;
          bottom: 25%;
          left: 14%;
          color: #fff;
          font-weight: 600;
        }

        .heading-container {
          position: relative;
          background: #f6f6f6;
          width: 100%;
          padding: 4rem 10rem 0;
        }

        .heading-content {
          background: #fff;
          padding: 1rem 1rem;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .blue-text {
          color: #007bff;
        }

        .slide-container {
          position: relative;
          width: 100%;
          height: 100vh;
        }

        .banner-content {
          z-index: 20;
          color: #fff;
          width: 45%;
          position: absolute;
          top: 10%;
          left: 14%;
        }

        .vertical-line {
          z-index: 15;
          background-color: #e7e7e780;
          width: 1px;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 10%;
        }

        /* Slide number box at the top of line */
        .slide-number-box {
          z-index: 20;
          background-color: #f8c326;
          border-radius: 40px;
          justify-content: center;
          align-items: center;
          padding: 4px 12px;
          font-size: 16px;
          display: flex;
          position: absolute;
          top: 10%;
          left: -15px;
        }

        .banner-content h1 {
          font-size: clamp(2.5rem, 5vw, 4rem);
          margin-bottom: 1.5rem;
        }

        .banner-content p {
          font-size: 16px;
          font-weight: 300;
          margin-bottom: 2rem;
          color: #fff;
          max-width: 500px;
        }

        .banner-content a {
          padding-bottom: 8px;
          border-bottom: 1px solid;
          font-size: 18px;
          color: #fff;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }

        .slide-progress {
          position: absolute;
          top: 40px;
          right: 40px;
          color: #fff;
          font-size: 14px;
          z-index: 10;
          background: rgba(0, 0, 0, 0.3);
          padding: 8px 16px;
          border-radius: 20px;
        }
      `}</style>
    </section>
  );
}
