"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { IoPlayCircleOutline } from "react-icons/io5";
import { BsArrowRightCircle } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import "swiper/css";

const legacyData = {
  title: "SRI SUTTUR MATH THE <span class='blue-text'>1000-YEAR LEGACY</span>",
  subtitle: "ABOUT JSS UNIVERSITY",
  description:
    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.",
  url: "/",
  chancellor: {
    img: "/images/home-page/fifth-section-banner.png",
    name: "Jagadguru Sri Shivarathri Deshikendra Mahaswamiji",
    message: "Message From Chancellor",
  },
  highlights: [
    {
      number: "#37",
      text: "#201-300 IN ENGINEERING IN 2024",
      source: "Outlook 2020",
    },
    {
      number: "#9",
      text: "AMONG TOP EMERGING PRIVATE INSTITUTIONS 2016 BY",
      source: "Times of India",
    },
  ],
  buttons: [
    { text: "360 VIEW", link: "#" },
    { text: "WHY JSS", link: "#" },
    { text: "APPLY NOW", link: "#" },
  ],
  accreditations: [
    {
      name: "UGC",
      img: "/images/home-page/fifth-slider-first-img.png",
      text: "JSS Academy of Technical Education, Noida is recognized under UGC",
    },
    {
      name: "AICTE",
      img: "/images/home-page/fifth-slider-second-img.png",
      text: "Approved by All India Council for Technical Education (AICTE)",
    },
    {
      name: "NAAC",
      img: "/images/home-page/fifth-slider-first-img.png",
      text: "National Assessment and Accreditation Council (NAAC)",
    },
  ],
};

export default function LegacySection() {
  const styles = {
    fifthSection: {
      padding: '5rem 10rem',
      background: '#e6ffff',
    },
    topSection: {
      marginBottom: '1rem',
    },
    topSectionHeading: {
      width: '40%',
      fontSize: '3.7rem',
      fontWeight: 'bold',
    },
    violetText: {
      color: '#9852a1',
    },
    fifthMiddleSection: {
      alignItems: 'center',
    },
    navButtons: {
    background: "#16344e",
    padding: ".5rem 2rem",
    color: "#fff !important"
},
    leftColumn: {
      borderRight: '1px solid #d4d4d4cb',
      paddingRight: '4rem',
    },
    rightColumn: {
      paddingLeft: '5rem',
    },
    contentPart: {
      position: 'absolute',
      bottom: '0',
      background: 'rgba(0, 0, 0, 0.3)',
      width: '100%',
      color: 'white',
      padding: '0.5rem',
      marginTop: '0.5rem',
      borderRadius: '0.25rem',
      display: 'flex',
      gap: '1rem',
      fontSize: '0.875rem',
    },
  };

  return (
    <section className="container-fluid" style={styles.fifthSection}>
      <div className="container-fluid ">
        <div className="mb-3" style={styles.topSection}>
          <p className="fw-bold small text-uppercase">{legacyData.subtitle}</p>
          <h2
            className="fw-bold display-6"
            style={styles.topSectionHeading}
            dangerouslySetInnerHTML={{ __html: legacyData.title }}
          />
        </div>

        <div className="row g-4" style={styles.fifthMiddleSection}>
          {/* Chancellor Image */}
          <div className="col-lg-5" style={styles.leftColumn}>
            <div className="position-relative">
              <Image
                src={legacyData.chancellor.img}
                alt={legacyData.chancellor.name}
                width={500}
                height={350}
                className="img-fluid rounded w-100"
              />
              {/* Play Button Overlay */}

              <div style={styles.contentPart}>
                <IoPlayCircleOutline fontSize={30} className="text-warning" />
                <div className="">
                  <strong>{legacyData.chancellor.message}</strong>
                  <br />
                  {legacyData.chancellor.name}
                </div>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="col-lg-7" style={styles.rightColumn}>
            <p className="fw-light w-75">{legacyData.description}</p>
            <div className="divider mb-4">
              <Link href={legacyData.url} className="nav-buttons">
                <BsArrowRightCircle
                  className="fw-light"
                  color="rgba(146, 142, 142, 1)"
                />
              </Link>
            </div>
            {/* Highlight Boxes */}
            <div className="row g-3 mb-4 d-flex gap-4">
              {legacyData.highlights.map((h, i) => (
                <div key={i} className="col-md-5 border p-3 d-flex gap-3 ">
                  <h1 className="fw-bold" style={styles.violetText}>
                    {h.number}
                  </h1>
                  <div className="left-content">
                    <p className="mb-1 ">{h.text}</p>
                    <p className="fw-bold fs-5">{h.source}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="d-flex gap-3">
              {legacyData.buttons.map((btn, i) => (
                <Link key={i} href={btn.link} style={styles.navButtons}>
                  {btn.text}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Accreditation Logos Slider */}
        <div className="mt-5 pt-4 fifth-section-slider">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{ delay: 3000 }}
            // loop={true}
            spaceBetween={30}
            pagination={{ clickable: true }}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              992: { slidesPerView: 3 },
            }}
          >
            {legacyData.accreditations.map((acc, i) => (
              <SwiperSlide key={i}>
                <div className="gap-3 px-3 d-flex align-items-center content">
                  <Image
                    src={acc.img}
                    alt={acc.name}
                    width={80}
                    height={80}
                    className="img-fluid mb-2"
                  />
                  <p className="small w-50">{acc.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}