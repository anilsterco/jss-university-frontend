"use client";
import styles from "./faculty-list.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";

export default function FacultyList({ data }) {
  // Dynamic data structure
  const dummyFacultyData = {
    subtitle: "FACULTY LIST",
    title: `<span class="blue-text">GUIDING MINDS OF</span> <span class="dark-blue-text"> COMPUTER SCIENCE & ENGINEERING</span>`,
    members: [
      {
        id: 1,
        name: "Dr. Anjali Mehra",
        designation: "Assistant Professor",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#1",
      },
      {
        id: 2,
        name: "Dr. Jaspreet Kaur",
        designation: "Assistant Professor",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#2",
      },
      {
        id: 3,
        name: "Vinooth P",
        designation: "Assistant Professor",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#3",
      },
      {
        id: 4,
        name: "Dr. Anjali Mehra",
        designation: "Assistant Professor",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#4",
      },
      {
        id: 5,
        name: "Dr. Rajesh Kumar",
        designation: "Associate Professor",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#5",
      },
      {
        id: 6,
        name: "Dr. Priya Singh",
        designation: "Assistant Professor",
        img: "/images/home-page/seven-dummy-img.png",
        url: "#6",
      },
    ],
  };
  const facultyData = data ? data : dummyFacultyData;
  return (
    <div className={styles.dep_faculty}>
      <div className="container">
        {/* Header Section */}
        <div className={styles.headerSection}>
          <p className={styles.subtitle}>{facultyData.subtitle}</p>
          <h2
            className={`${styles.title}`}
            dangerouslySetInnerHTML={{ __html: facultyData.title }}
          ></h2>
        </div>

        {/* Slider Container */}
        <div
          className={`${styles.sliderContainer} d-flex align-items-center gap-5`}
        >
          <CiCircleChevLeft
            className="faculty-prev"
            fontSize={30}
            color="#800000c7"
            style={{ marginBottom: "8rem", cursor: "pointer" }}
          />

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            // navigation={true}
            navigation={{
              nextEl: ".faculty-next",
              prevEl: ".faculty-prev",
            }}
            pagination={false}
            loop={true}
            spaceBetween={15}
            slidesPerView={4}
            className={styles.slider}
          >
            {facultyData.members.map((slide) => (
              <SwiperSlide key={slide.id} className={styles.facultyCard}>
                <Link
                  href={`/faculty/${slide.url}`}
                  key={slide.id}
                  style={{ cursor: "pointer" }}
                >
                  <Image
                    src={slide.img}
                    alt="slide image"
                    width={500}
                    height={500}
                    style={{ width: "100%", height: "100%" }}
                    priority
                    className={styles.slideImage}
                  />

                  <div className={styles.facultyInfo}>
                    <h3 className={styles.facultyName}>{slide.name}</h3>
                    <p className={styles.facultyDesignation}>
                      {slide.designation}
                    </p>
                    <div className={styles.underline}></div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <CiCircleChevRight
            className="faculty-next"
            fontSize={30}
            color="#800000c7"
            style={{ marginBottom: "8rem", cursor: "pointer" }}
          />
        </div>
      </div>
    </div>
  );
}
