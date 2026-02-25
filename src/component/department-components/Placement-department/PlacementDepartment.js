"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { useEffect, useRef } from "react";
import AOS from "aos";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "aos/dist/aos.css";
import styles from "./Placement.module.css";

/* ✅ DUMMY DATA */
const placementsData = {
  subtitle: "Placements",
  title:
    '<span class="dark-blue-text">FROM </span><span class="blue-text">CAMPUS </span><span class="dark-blue-text">TO </span><span class="blue-text">CORPORATE</span>',
  facts_and_figures: [
    { figure: "5000+", title: "Students Placed" },
    { figure: "22.5 LPA", title: "Highest Package" },
    { figure: "1200+", title: "Recruiters" },
  ],
  testimonials: [
    {
      image: "/images/school-page/placment_testi.webp",
      short_description:
        "Mock interviews and guidance sessions boosted my confidence.",
      name: "Rahul Sharma",
      designation: "Associate Consultant",
      company: "Infosys",
    },
    {
      image: "/images/school-page/placment_testi.webp",
      short_description:
        "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet",
      name: "Sneha Kapoor",
      designation: "Data Analyst",
      company: "Wipro",
    },
  ],
  hall_of_fame: {
    image: "/images/school-page/placment.webp",
    heading:
      "JSS <span class='text-warning'>PLACEMENTS 2024</span><br/>WALL OF FAME",
  },
  recruiters: [
    { title: "TCS", image: "/images/school-page/logo01.webp" },
    { title: "Infosys", image: "/images/school-page/logo02.webp" },
    { title: "Wipro", image: "/images/school-page/logo03.webp" },
    { title: "Accenture", image: "/images/school-page/logo04.webp" },
    { title: "Cognizant", image: "/images/school-page/logo05.webp" },
    { title: "Flipkart", image: "/images/school-page/logo06.webp" },
  ],
};

export default function PlacementsSection() {
  const swiperRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    // Force Swiper update after mount
    setTimeout(() => {
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    }, 100);
  }, []);

  return (
    <section className={styles.thirdSection}>
      <div className="container">
        {/* HEADER */}
        <div className={styles.sectionHeader} data-aos="fade-up">
          <p className="fw-bold text-uppercase dark-blue-text">
            {placementsData.subtitle}
          </p>
          <h2
            className="fw-bold"
            dangerouslySetInnerHTML={{ __html: placementsData.title }}
          />
        </div>

        <div className={styles.placement_row}>
          <div className={`placement_col ${styles.leftContent}`}>
            <div className={styles.statsRow}>
              {placementsData.facts_and_figures.map((stat, i) => (
                <div
                  key={i}
                  className={styles.figurContCol}
                  data-aos="fade-up"
                  data-aos-delay={i * 150}
                >
                  <div className={styles.figcount}>
                    <h3 className={styles.statsNumber}>{stat.figure}</h3>
                    <p className={`mb-0 ${styles.statsLabel}`}>{stat.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <Swiper
              ref={swiperRef}
              className={styles.testimonialSwiper}
              modules={[Navigation, EffectFade, Autoplay]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              slidesPerView={1}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              navigation={{
                nextEl: ".testimonial-next",
                prevEl: ".testimonial-prev",
              }}
              loop
            >
             
              {placementsData.testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div
                    className={`${styles.eachSlide} d-flex align-items-start`}
                    data-aos="fade-up"
                    data-aos-delay={i * 150}
                  >
                    <div className={styles.testimonialImageContainer}>
                      <FaQuoteLeft
                        className={styles.mobileQuoteIcon}
                        color="#b08f29"
                        fontSize={30}
                      />
                      <Image
                        src={t.image}
                        alt={`${t.name} image`}
                        width={216}
                        height={240}
                        style={{
                          width: "216px",
                          height: "240px",
                          objectFit: "cover",
                          flexShrink: 0,
                        }}
                        className={`testiimg rounded ${styles.testimonialImage}`}
                        priority
                      />
                    </div>

                    <div className={styles.testimonialContent}>
                      <FaQuoteLeft
                        className={styles.desktopQuoteIcon}
                        color="#b08f29"
                        fontSize={36}
                      />
                      <p>{t.short_description}</p>
                      <h6 className="small fw-bold">{t.name}</h6>
                      <small className="small-text">
                        {t.designation}, {t.company}
                      </small>

                      <div className={`d-flex gap-2 ${styles.testimonialIconContainer}`}>
                        <button className="testimonial-prev btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2">
                          <FaChevronLeft size={8} />
                        </button>
                        <button className="testimonial-next btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2">
                          <FaChevronRight size={8} />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className={styles.rightContent} data-aos="fade-up">
            <div className={styles.wallOfFameContainer}>
              <Image
                src={placementsData.hall_of_fame.image}
                alt="Wall of Fame"
                width={500}
                height={600}
                className={styles.wallImage}
              />
              <div
                className={styles.wallOfFameText}
                dangerouslySetInnerHTML={{
                  __html: placementsData.hall_of_fame.heading,
                }}
              />
            </div>
          </div>
        </div>

        {/* RECRUITERS */}
        <div className={styles.recruiterSection} data-aos="fade-up">
          <p className="small">Our Recruiters</p>
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 2500 }}
            loop
            spaceBetween={40}
            slidesPerView={2}
            breakpoints={{
              576: { slidesPerView: 4 },
              992: { slidesPerView: 6 },
            }}
          >
            {placementsData.recruiters.map((rec, i) => (
              <SwiperSlide key={i}>
                <Image
                  src={rec.image}
                  alt={rec.title}
                  width={140}
                  height={80}
                  className={styles.recruiterLogo}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}