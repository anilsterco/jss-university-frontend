"use client";
import styles from "./faculty-list.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
export default function FacultyList({ data }) {
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
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
  const facultyData = data ? data : dummyFacultyData;
  return (
    <div
      className={`${styles.dep_faculty} faculty_section`}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <div className="container">
        <div className={styles.headerSection}>
          <p className={styles.subtitle}>{facultyData.subtitle}</p>
          <h2
            className={`${styles.title}`}
            dangerouslySetInnerHTML={{ __html: facultyData.title }}
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
          ></h2>
        </div>
        <div
          className={`${styles.sliderContainer} d-flex align-items-center gap-5`}
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={{
              nextEl: ".faculty-next",
              prevEl: ".faculty-prev",
            }}
            pagination={false}
            loop={true}
            spaceBetween={45}
            slidesPerView={4}
            className={styles.slider}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1200: {
                slidesPerView: 3,
              },
            }}
          >
            {facultyData.members.map((slide) => (
              <SwiperSlide key={slide.id} className={styles.facultyCard}>
                <Link href={`/faculty/${slide.url}`} key={slide.id}>
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
        </div>
        <CiCircleChevLeft
          className="faculty-prev"
          fontSize={24}
          color="#002238b5"
          style={{
            cursor: "pointer",
            marginRight: "0.4rem",
            marginTop: "2.5rem",
          }}
        />
        <CiCircleChevRight
          className="faculty-next"
          fontSize={24}
          color="#002238b5"
          style={{ cursor: "pointer", marginTop: "2.5rem" }}
        />
      </div>
    </div>
  );
}
