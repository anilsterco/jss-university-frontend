"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { LuCircleArrowRight } from "react-icons/lu";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "aos/dist/aos.css";
import AOS from "aos";
import styles from "./placement.module.css";
import { WEB_URL } from "@/config/config";

const dummyPlacementsData = {
  title:
    '<span class="dark-blue-text ">FROM</span> <span class="blue-text">CAMPUS</span> <span class="dark-blue-text ">TO</span> <span class="blue-text">CORPORATE</span>',
  subtitle: "Placement",
  facts_and_figures: [],
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

export default function PlacementsSection({ data, category, pageType }) {
  let placementsData;
  if (category == "slider") {
    placementsData = data;
  } else {
    placementsData = data || dummyPlacementsData;
  }
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className={`${category !== "slider" && styles.thirdSection}`}>
      <div className="container">
        <div
          className={` ${styles.sectionHeader}`}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {placementsData?.subtitle && (
            <p className="fw-bold text-uppercase dark-blue-text">
              {placementsData.subtitle?.toUpperCase()}
            </p>
          )}

          {placementsData?.title && (
            <h2
              className="fw-bold"
              dangerouslySetInnerHTML={{ __html: placementsData?.title }}
            ></h2>
          )}
        </div>

        {placementsData?.facts_and_figures && (
          <div className={`${styles.placement_row}`}>
            <div className={`placement_col ${styles.leftContent}`}>
              <div className={`${styles.statsRow}`}>
                {placementsData?.facts_and_figures?.map((stat, i) => (
                  <div
                    key={i}
                    className={`${styles.figurContCol}`}
                    data-aos="fade-up"
                    data-aos-delay={i * 150}
                  >
                    <div className={`${styles.figcount}`}>
                      <h3 className={`${styles.statsNumber}`}>{stat.figure}</h3>
                      <p className={`mb-0 ${styles.statsLabel}`}>
                        {stat.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
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
                {placementsData?.testimonials?.map((t, i) => (
                  <SwiperSlide key={i}>
                    <div
                      className={`${styles.eachSlide} d-flex align-items-top `}
                      data-aos="fade-up"
                      data-aos-delay={i * 150}
                    >
                      <div className={`${styles.testimonialImageContainer} `}>
                        <FaQuoteLeft
                          className={`mb-3 ${styles.mobileQuoteIcon}`}
                          color="#b08f29"
                          fontSize={30}
                        />
                        <Image
                          src={t.image}
                          alt={`${t.name} image`}
                          width={216}
                          height={240}
                          style={{
                            width: "100%",
                            height: "100%",
                            position: "relative",
                          }}
                          priority
                          className={`top-0 start-0 testiimg rounded ${styles.testimonialImage}`}
                        />
                      </div>
                      <div className={`${styles.testimonialContent} `}>
                        <FaQuoteLeft
                          className={`${styles.desktopQuoteIcon}`}
                          color="#b08f29"
                          fontSize={36}
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

            {placementsData?.hall_of_fame && (
              <div
                className={`placement_col d-flex justify-content-lg-end px-0 ${styles.rightContent}`}
                data-aos="fade-bottom"
                data-aos-delay="200"
              >
                <div
                  className={`position-relative ${styles.wallOfFameContainer} `}
                >
                  <Image
                    src={placementsData.hall_of_fame.image}
                    alt="Wall of Fame"
                    width={488}
                    height={600}
                    style={{
                      width: "100%",
                      borderTopLeftRadius: "10px",
                      borderBottomLeftRadius: "10px",
                      objectFit: "cover",
                    }}
                  />
                  <div
                    className={` ${styles.wallOfFameText}`}
                    dangerouslySetInnerHTML={{
                      __html: placementsData.hall_of_fame.heading,
                    }}
                  />
                  <Link
                    href={`${placementsData.hall_of_fame.url || WEB_URL + "placement"}`}
                  >
                    <Image
                      src={`/images/home-page/jss_bannerIcon.svg`}
                      width={22}
                      height={22}
                      alt="Hall of Fame"
                      className={`${styles.placementvisit}`}
                    />
                  </Link>
                </div>
              </div>
            )}
          </div>
        )}

        <div
          className={`${category == "slider" && "pt_3xl_10"} ${styles.recruiterSection} ${pageType == "placement" && styles.placement_slider} `}
          data-aos="fade-up"
        >
          <div className="row recruiter-logo w-100">
            <div className="col-lg-12 max-auto">
              {placementsData?.subTitle ? (
                <p className="small">{placementsData.subTitle}</p>
              ) : (
                <p className="small">{"Our Recruiters"}</p>
              )}
              <div className="d-flex flex-wrap gap-4 align-items-center">
                <Swiper
                  modules={[Navigation, Autoplay]}
                  navigation={false}
                  autoplay={{ delay: 3000 }}
                  loop={true}
                  spaceBetween={50}
                  slidesPerView={6}
                  className="recruiters-slider "
                  breakpoints={{
                    0: { slidesPerView: 1 },
                    375: { slidesPerView: 1 },
                    576: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    992: { slidesPerView: 5 },
                    1200: { slidesPerView: 7 },
                  }}
                >
                  {(
                    placementsData?.recruiters || placementsData?.slideData
                  )?.map((rec, i) => (
                    <SwiperSlide key={i} className="recruiter-slide ">
                      <Image
                        src={rec.image}
                        alt={rec.title}
                        width={150}
                        height={100}
                        className={`img-fluid ${styles.recruiterLogo}`}
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
  );
}
