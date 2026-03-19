"use client";

import styles from "./Faculty.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { CiCircleChevLeft, CiCircleChevRight } from "react-icons/ci";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";

export default function FacultyList({ data, schoolName }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  const facultyData = {
    subtitle: "Faculty",
    title: `<span class="blue-text">GUIDING MINDS </span> 
            <span class="dark-blue-text text-uppercase">OF </br> ${schoolName ? schoolName : "COLLEGE OF PHARMACY"}</span>`,
    members: [
      {
        id: 1,
        name: "Dr. Anjali Mehra",
        designation: "Assistant Professor",
        img: "/images/home-page/seven-dummy-img.png",
        slug: "anjali-mehra",
      },
      {
        id: 2,
        name: "Dr. Jaspreet Kaur",
        designation: "Assistant Professor",
        img: "/images/home-page/seven-dummy-img.png",
        slug: "jaspreet-kaur",
      },
      {
        id: 3,
        name: "Vinooth P",
        designation: "Assistant Professor",
        img: "/images/home-page/seven-dummy-img.png",
        slug: "vinooth-p",
      },
      {
        id: 4,
        name: "Dr. Rajesh Kumar",
        designation: "Associate Professor",
        img: "/images/home-page/seven-dummy-img.png",
        slug: "rajesh-kumar",
      },
      {
        id: 5,
        name: "Dr. Priya Singh",
        designation: "Assistant Professor",
        img: "/images/home-page/seven-dummy-img.png",
        slug: "priya-singh",
      },
      {
        id: 6,
        name: "Dr. Amit Verma",
        designation: "Assistant Professor",
        img: "/images/home-page/seven-dummy-img.png",
        slug: "amit-verma",
      },
    ],
  };

  return (
    <div
      className={styles.dep_faculty}
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-delay="100"
    >
      <div className="container">
        <div className={styles.headerSection}>
          <p className={styles.subtitle}>{facultyData.subtitle}</p>

          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: facultyData.title }}
          />
        </div>

        <div
          className={`${styles.sliderContainer} d-flex align-items-center gap-5`}
        >
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".faculty-next",
              prevEl: ".faculty-prev",
            }}
            loop={true}
            spaceBetween={47}
            slidesPerView={3}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
              1200: { slidesPerView: 3 },
            }}
            className={styles.slider}
          >
            {data?.map((member, memberId) => (
              <SwiperSlide key={memberId} className={styles.facultyCard}>
                <Link href={`/faculty/${member.url}`}>
                  <Image
                    src={member.img}
                    alt={member.name}
                    width={500}
                    height={500}
                    className={styles.slideImage}
                    style={{ width: "100%", height: "auto" }}
                    priority
                  />

                  <div className={styles.facultyInfo}>
                    <h3 className={styles.facultyName}>{member.name}</h3>
                    <p className={styles.facultyDesignation}>
                      {member.designation}
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
          fontSize={28}
          color="#002238b5"
          style={{
            marginTop: "3rem",
            cursor: "pointer",
            marginRight: "0.5rem",
          }}
        />
        <CiCircleChevRight
          className="faculty-next"
          fontSize={28}
          color="#002238b5"
          style={{ marginTop: "3rem", cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
