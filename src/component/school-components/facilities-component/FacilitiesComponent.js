"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
import styles from "./facilities.module.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function FacilitiesComponent({ data }) {
  const FacilitiesComponentData = {
    subtitle: "FACILITIES",
    title: "EDUCATE. <span>INNOVATE</span>. SERVE.",
    description:
      "Committed to producing industry-ready engineers through advanced laboratories, research, and practical exposure.",

    url: "/facilities",

    labs: [
      {
        id: 1,
        title: "CLASSROOM",
        img: "/images/home-page/seven-dummy-img.png",
        url: "/FacilitiesComponent/core-computing",
      },
      {
        id: 2,
        title: "LIBRARY & E-RESOURCES",
        img: "/images/home-page/seven-dummy-img.png",
        url: "/FacilitiesComponent/os-lab",
      },
      {
        id: 3,
        title: "HOSTEL",
        img: "/images/home-page/seven-dummy-img.png",
        url: "/FacilitiesComponent/software-lab",
      },
      {
        id: 4,
        title: "CLASSROOM",
        img: "/images/home-page/seven-dummy-img.png",
        url: "/FacilitiesComponent/core-computing",
      },
    ],

    applyButton: {
      text: "APPLY NOW",
      url: "/apply-now",
    },
  };

  return (
    <div className={styles.dep_cutting_edge}>
      <div className="container max-content-lg pe-lg-0 me-lg-0">
        {/* Header Section */}
        <div className={styles.headerSection}>
          <p className={styles.subtitle}>{FacilitiesComponentData.subtitle}</p>
          <h2
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: FacilitiesComponentData.title }}
          />
          <p className={styles.description}>
            {FacilitiesComponentData.description}
          </p>
          <Link href={FacilitiesComponentData.url}>
            <SlArrowRightCircle fontSize={20} color="#fff" />
          </Link>
        </div>
        <div className={styles.sliderWrapper}>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            pagination={false}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            spaceBetween={20}
            slidesPerView={2.8}
            className={styles.slider}
            breakpoints={{
              1200: { slidesPerView: 2.8 },
              991: { slidesPerView: 2 },
              667: { slidesPerView: 2 },
              575: { slidesPerView: 1.3 },
              0: { slidesPerView: 1 },
            }}
          >
            {data?.map((lab) => (
              <SwiperSlide key={lab.id} className={styles.facultyCard}>
                <Link href={lab.url}>
                  <Image
                    src={lab.img}
                    alt={lab.title}
                    width={500}
                    height={500}
                    className={styles.slideImage}
                    priority
                  />
                  <div className={styles.labInfo}>
                    <h3 className={styles.labTitle}>{lab.title}</h3>
                    <SlArrowRightCircle className={styles.labIcon} />
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
