"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { SlArrowRightCircle } from "react-icons/sl";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./about-school.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { usePathname } from "next/navigation";

export default function AboutSchool({ data }) {
  const pathname = usePathname();
  const schoolSlug = pathname.split("/").filter(Boolean).pop();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const dummyAboutSchoolContent = {
    title:
      '<span class="blue-text">EMPOWERING INNOVATION.</span><span class="dark-blue-text">ENGINEERING EXCELLENCE.</span>',
    subtitle: "",
    description:
      "Located in the heart of Noida's academic corridor, the School of Engineering at JSS University stands as a beacon of technical education, innovation, and industry readiness.",
    url: "/",
    chancellor_img: "/images/school-page/about-school-banner.png",
    chancellor_logo: "/images/home-page/fifth-slider-second-img.png",
    logo_content:
      "Approved by All India Council for Technical Education (AICTE)",
    stats_number: "28+",
    stats_content: "ACRES CAMPUS AREA",
    highlights: [
      {
        rank: "#20",
        text: "ENGINEERING COLLEGES IN UTTAR PRADESH",
        source: "Outlook 2020",
      },
      {
        rank: "#201-250",
        text: "NATIONALLY ENGINEERING RANK (2024)",
        source: "NIRF",
      },
    ],
    buttons: [
      { text: "360 VIEW", url: "#" },
      { text: "WHY JSS", url: "#" },
      { text: "APPLY NOW", url: "#" },
    ],
  };

  const aboutSchoolContent = {
    ...data,
    highlights:
      typeof data?.highlights === "string"
        ? JSON.parse(data.highlights)
        : data?.highlights || [],
    buttons: (() => {
      const raw =
        typeof data?.buttons === "string"
          ? JSON.parse(data.buttons)
          : data?.buttons || [];
      return raw.filter((btn) => btn?.url && typeof btn.url === "string");
    })(),
  };

  return (
    <div
      className={styles.aboutSchoolSection}
      data-aos="fade-up"
      data-aos-duration="1200"
    >
      <div className="container">
        <div className={styles.school_row}>
          <div className="school_about">
            <div className="about_school_left">
              <h6
                className={styles.subtitle}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {aboutSchoolContent.subtitle}
              </h6>

              <h1
                className={styles.title}
                dangerouslySetInnerHTML={{
                  __html: aboutSchoolContent.title,
                }}
                data-aos="fade-up"
                data-aos-delay="200"
              />

              <p
                className={styles.description}
                data-aos="fade-up"
                data-aos-delay="300"
              >
                {aboutSchoolContent.description}
              </p>

              <div data-aos="fade-up" data-aos-delay="400">
                <button className={styles.arrowButton}>
                  <Link href={`${schoolSlug}/about-the-school`}>
                    <SlArrowRightCircle />
                  </Link>
                </button>
              </div>

              {/* Highlights */}
              <div className="row mt-4">
                {aboutSchoolContent?.highlights?.map((item, index) => (
                  <div
                    className="col-xl-5 col-lg-6 col-sm-6"
                    key={index}
                    data-aos="fade-up"
                  >
                    <div className={styles.rankingCard}>
                      <div className="counter_dfe d-flex">
                        <span className={styles.rankNumber}>{item.rank}</span>
                      </div>
                      <p className={styles.rankSource}>{item.source}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* ✅ Safe Buttons Rendering */}
              {/* <div
                className={styles.buttonsContainer}
                data-aos="fade-up"
                data-aos-delay="800"
              >
                {aboutSchoolContent.buttons?.map((btn, i) => (
                  <Link key={i} href={btn.url} className={styles.navButtons}>
                    {btn.text}
                  </Link>
                ))}
              </div> */}
            </div>
          </div>

          {/* Right Image */}
          <div className="school_about">
            <div
              className={styles.imageCard}
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Image
                src={aboutSchoolContent.chancellor_img}
                alt="School campus"
                width={350}
                height={476}
                className={styles.cardImage}
                priority
              />
            </div>
          </div>
        </div>

        <div
          className={styles.fifthSectionSlider}
          data-aos="fade-up"
          data-aos-delay="700"
        >
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            spaceBetween={100}
            pagination={{ clickable: true, el: ".about-pagination" }}
            slidesPerView={3}
            breakpoints={{
              0: { slidesPerView: 1 },
              576: { slidesPerView: 1 },
              800: { slidesPerView: 2 },
              992: { slidesPerView: 2 },
              1280: { slidesPerView: 3 },
            }}
          >
            {data?.items?.map((singleItem, itemIdx) => (
              <SwiperSlide key={itemIdx} className={styles.accreditationSlide}>
                <div className="gap-5 d-flex align-items-center content">
                  <Image
                    src={singleItem.logo}
                    alt="NAAC"
                    width={80}
                    height={80}
                    className={styles.accreditationLogo}
                  />
                  <p className={styles.small}>{singleItem.content}</p>
                </div>
              </SwiperSlide>
            ))}

            <div className="about-pagination"></div>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
