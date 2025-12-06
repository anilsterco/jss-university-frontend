// components/home-components/PlacementsSection/index.js
"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { LuCircleArrowRight } from "react-icons/lu";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./placement.module.css";

const dummyPlacementsData = {
  title:
    '<span class="dark-blue-text ">FROM</span> <span class="blue-text">CAMPUS</span> <span class="dark-blue-text ">TO</span> <span class="blue-text">CORPORATE</span>',
  subtitle: "Placement",
  facts_and_figures: [
    // { figure: "5000+", title: "STUDENTS HIRED" },
    // { figure: "22.5", title: "LPA MAX" },
    // { figure: "2000+", title: "RECRUITERS" },
  ],
  testimonials: [
    {
      image: "/images/home-page/testimonial-placeholder.png",
      short_description:
        "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.",
      name: "Jane Doe",
      designation: "Product Engineer",
      company: "TCS",
    },
    {
      image: "/images/home-page/testimonial-placeholder.png",
      short_description:
        "Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
      name: "John Smith",
      designation: "Product Engineer",
      company: "TCS",
    },
    {
      image: "/images/home-page/testimonial-placeholder.png",
      short_description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      name: "Anita Verma",
      designation: "Product Engineer",
      company: "TCS",
    },
  ],
  hall_of_fame: {
    image: "/images/home-page/placement-wall-banner.png",
    heading:
      "JSS <span class='text-warning'>PLACEMENTS 2023</span> WALL OF FAME",
    url: "#",
  },
  recruiters: [
    { title: "TCS", image: "/images/home-page/tcs-logo.png" },
    { title: "Flipkart", image: "/images/home-page/flipkart-logo.png" },
    { title: "TCS", image: "/images/home-page/tcs-logo.png" },
    { title: "Flipkart", image: "/images/home-page/flipkart-logo.png" },
    { title: "Flipkart", image: "/images/home-page/flipkart-logo.png" },
    { title: "TCS", image: "/images/home-page/tcs-logo.png" },
    { title: "Flipkart", image: "/images/home-page/flipkart-logo.png" },
    { title: "TCS", image: "/images/home-page/tcs-logo.png" },
  ],
};

export default function PlacementsSection({ data }) {
  const placementsData = data ? data : dummyPlacementsData;
  return (
    <>
      <section className={` ${styles.thirdSection}`}>
        <div className="container max-content-lg pe-lg-0 me-lg-0">
          {/* Section Header */}
          <div className={` ${styles.sectionHeader}`}>
            <p className="fw-bold text-uppercase dark-blue-text">
              {placementsData.subtitle && placementsData.subtitle.toUpperCase()}
            </p>
            <h2 className={`fw-bold `} dangerouslySetInnerHTML={{ __html: placementsData.title }}></h2>
          </div>

          <div className="row w-100 m-auto">
            {/* Left Content */}
            <div className={`col-lg-6 ps-0 ${styles.leftContent}`}>
              {/* Stats Row */}
              <div className={`row w-100 placement_row ${styles.statsRow}`}>
                {placementsData.facts_and_figures &&
                  placementsData.facts_and_figures.map((stat, i) => (
                    <div key={i} className="col-xl-4 col-sm-6 text-center border ">
                      <div className="fig-count">
                        <h3 className={`${styles.statsNumber}`}>
                          {stat.figure}
                        </h3>
                        <p className={`mb-0 ${styles.statsLabel}`}>
                          {stat.title}
                        </p>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Testimonial Slider */}
              <Swiper
                modules={[Navigation, EffectFade]}
                effect="fade"
                fadeEffect={{ crossFade: true }}
                navigation={{
                  nextEl: ".testimonial-next",
                  prevEl: ".testimonial-prev",
                }}
                spaceBetween={30}
                slidesPerView={1}
                className={`${styles.testimonialSwiper} testimonial-slider`}
              >
                <div className={styles.blueBg}></div>
                {placementsData.testimonials &&
                  placementsData.testimonials.map((t, i) => (
                    <SwiperSlide key={i}>
                      <div
                        className={`${styles.eachSlide} d-flex align-items-top`}
                      >
                        {/* Testimonial Image */}
                        <div className={` ${styles.testimonialImageContainer}`}>
                          <FaQuoteLeft
                            className={`mb-3 ${styles.mobileQuoteIcon}`}
                            color="#b08f29"
                            fontSize={30}
                          />
                          <Image
                            src={t.image}
                            alt={`${t.name} image`}
                            width={140}
                            height={160}
                            style={{
                              width: "100%",
                              height: "100%",
                              position: "relative",
                            }}
                            priority
                            className={`top-0 start-0 testiimg rounded ${styles.testimonialImage}`}
                          />
                        </div>
                        {/* Testimonial Text */}
                        <div className={`${styles.testimonialContent}`}>
                          <FaQuoteLeft
                            className={`mb-3 ${styles.desktopQuoteIcon}`}
                            color="#b08f29"
                            fontSize={30}
                          />
                          <p>{t.short_description}</p>
                          <h6 className="small fw-bold">{t.name}</h6>
                          <small className="small-text">
                            {t.designation} {t.company}
                          </small>
                          <div
                            className={`d-flex gap-2 ${styles.testimonialIconContainer}`}
                          >
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

            {/* Right Wall of Fame */}
            <div
              className={`col-lg-6 d-flex justify-content-lg-end px-0 ${styles.rightContent}`}
            >
              <div
                className={`position-relative bg-light d-flex align-items-center justify-content-center rounded ${styles.wallOfFameContainer}`}
              >
                <Image
                  src={placementsData.hall_of_fame.image}
                  alt="Wall of Fame"
                  width={400}
                  height={700}
                  style={{ width: "100%", height: "100%" }}
                />
                <div
                  className={`position-absolute text-white fw-bold ${styles.wallOfFameText}`}
                  dangerouslySetInnerHTML={{
                    __html: placementsData.hall_of_fame.heading,
                  }}
                />
                {placementsData.hall_of_fame.url && (
                  <Link
                    href={placementsData.hall_of_fame.url}
                    className={`position-absolute`}
                    style={{ bottom: "4%", left: "6%" }}
                  >
                    <LuCircleArrowRight
                      size={22}
                      color="#fff"
                      strokeWidth={1}
                    />
                  </Link>
                )}
              </div>
            </div>
          </div>

          {/* Recruiters Row */}
          <div className={`pt-5 ${styles.recruiterSection}`}>
            <div className="row recruiter-logo w-100">
              <div className="col-lg-10 max-auto">
                <p className="small">Our Recruiters</p>
                <div className="d-flex flex-wrap gap-4 align-items-center">
                    <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={false}
                    autoplay={true}
                    loop={true}
                    spaceBetween={20}
                    slidesPerView={6}
                    className="recruiters-slider"
                    breakpoints={{
                      0: { slidesPerView: 1},
                      375: { slidesPerView: 1 },
                      576: { slidesPerView: 3 },
                      768: { slidesPerView: 4 },
                      992: { slidesPerView: 5 },
                      1200: { slidesPerView: 6 },
                    }}
                  >
                     {placementsData.recruiters &&
                      placementsData.recruiters.map((rec, i) => (
                      <SwiperSlide key={rec.image} className="recruiter-slide">
                        <Image
                          src={rec.image}
                          alt={rec.title}
                          width={150}
                          height={100}
                          className="img-fluid"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
