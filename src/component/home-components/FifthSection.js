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
  return (
    <section className="container-fluid fifth-section">
      <div className="container-fluid ">
        <div className="mb-3 top-section">
          <p className="fw-bold small text-uppercase">{legacyData.subtitle}</p>
          <h2
            className="fw-bold display-6"
            dangerouslySetInnerHTML={{ __html: legacyData.title }}
          />
        </div>

        <div className="row align-items-center g-4 fifth-middle-section">
          {/* Chancellor Image */}
          <div className="col-lg-5 left">
            <div className="position-relative">
              <Image
                src={legacyData.chancellor.img}
                alt={legacyData.chancellor.name}
                width={500}
                height={350}
                className="img-fluid rounded w-100"
              />
              {/* Play Button Overlay */}

              <div className="text-white p-2 mt-2 rounded small d-flex gap-3 content-part">
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
          <div className="col-lg-7 right">
            <p className="fw-light w-75">{legacyData.description}</p>
            <div className="divider mb-4">
              <Link href={legacyData.url}>
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
                  <h1 className="fw-bold violet-text">{h.number}</h1>
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
                <Link key={i} href={btn.link} className="button">
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
      <style jsx>{`
        .violet-text {
          color: #9852a1;
        }
        .fifth-middle-section .left {
          border-right: 1px solid #d4d4d4cb;
          padding-right: 4rem;
        }
        .fifth-middle-section .right {
          padding-left: 5rem;
        }
        .fifth-section {
          padding: 5rem 10rem;
          background: #e6ffff;
        }
        .fifth-middle-section .content-part {
          position: absolute;
          bottom: 0;
          background: rgba(0, 0, 0, 0.3);
          width: 100%;
        }
        .fifth-section .top-section h2 {
          width: 40%;
          font-size: 3.7rem;
        }
      `}</style>
    </section>
  );
}
