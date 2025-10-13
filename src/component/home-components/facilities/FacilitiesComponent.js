// components/home-components/FacilitiesSlider/index.js
"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { FiArrowRightCircle } from "react-icons/fi";
import { CiCirclePlus } from "react-icons/ci";
import { FaChevronRight } from "react-icons/fa6";
import styles from "./facilities.module.css";

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
    <section ref={sectionRef} className={styles.fourthSliderSection}>
      <div className={styles.headingContainer}>
        <div className={`${styles.headingContent} d-flex gap-5`}>
          <div className={styles.headingIcon}>
            <CiCirclePlus color="#b08f29" fontSize={30} />
          </div>
          <div className="">
            <h6 className="mb-2">FACILITIES @ JSS UNIVERSITY</h6>
            <h1 className="mb-0">
              INFRA THAT <span className={styles.blueText}>ELEVATES</span>
            </h1>
          </div>
        </div>
      </div>
      <div
        className={`${styles.sliderStickyWrapper} ${
          isPinned ? styles.fixedSlider : ""
        }`}
      >
        <Swiper
          ref={swiperRef}
          modules={[Mousewheel, Keyboard]}
          direction="vertical"
          speed={3000}
          slidesPerView={1}
          onSlideChange={handleSlideChange}
          allowTouchMove={false}
          className={styles.swiperContainer}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              <div className={styles.slideContainer}>
                <Image
                  src={slide.img}
                  alt="slide image"
                  fill
                  priority={index === 0}
                  quality={85}
                  sizes="100vw"
                  className={styles.slideImage}
                />
                <div className={styles.verticalLine}>
                  <div className={styles.slideNumberBox}>{index + 1}</div>
                </div>
                <div className={styles.bannerContent}>
                  <div>
                    <h2>{slide.title}</h2>
                    <p>{slide.desc}</p>
                  </div>
                </div>
                <div className={styles.bannerLinks}>
                  {slide.url &&
                    slide.url.map((item, index) => (
                      <Link
                        key={index}
                        href={item.link}
                        className={styles.bannerLink}
                      >
                        {item.text}
                        <FaChevronRight />
                      </Link>
                    ))}
                </div>
                <div className={styles.slideProgress}>
                  <span>
                    {index + 1} / {slides.length}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
