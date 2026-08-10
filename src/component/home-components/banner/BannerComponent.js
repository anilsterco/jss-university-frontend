"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";

import { WEB_URL } from "@/config/config.mjs";
import { usePathname } from "next/navigation";
import styles from "./banner.module.css";


const getYouTubeEmbedUrl = (url) => {
  if (!url) return "";
  let videoId = "";
  const match = url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?]+)/,
  );
  if (match && match[1]) {
    videoId = match[1];
  }
  return videoId
    ? `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&mute=1&controls=0&playlist=${videoId}`
    : url;
};

export default function HeroSlider({ data, slug, classname='' }) {
  const pathname = usePathname();
  const pathParts = pathname.split("/");
  const currentPage = pathParts[1];
  const currentSlug = pathParts[2];

  const isDepartmentPage = currentPage === "department" && true;

  const bannerData = data?.length
    ? data
    : [
      {
        id: 1,
        title: "No Data Found",
        desc: "",
        linked_text: "",
        url: "about-us",
        desktop_banner: "/images/home-page/placeholder-banner.png",
        mobile_banner: "/images/home-page/mobile-main-banner.png",
      },
    ];

  return (
    <>
     <div className={`homeSlider ${classname}`}>
       <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation={false}
        pagination={{
          clickable: true,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        className={styles.swiperContainer}
      >
        {bannerData.map((slide) => (
          <SwiperSlide key={slide.id} className={styles.slide}>
            <div className={styles.bannerGrid}>
              {/* Left Content */}
              <div className={styles.bannerLeft}>
                <div className={`departBanner ${styles.bannerOverlay}`}>
                  <div className="containerMD">
                    <div className={`departtext ${styles.bannerContent}`}>
                      {isDepartmentPage && (
                        <span className={styles.bannerSmall}>
                          Department of
                        </span>
                      )}

                      <h2
                        className={styles.bannerContentH1}
                        dangerouslySetInnerHTML={{ __html: slide.title }}
                      // data-aos="fade-right"
                      // data-aos-delay="0"
                      />

                      <p
                        className={styles.bannerContentP}
                      // data-aos="fade-right"
                      // data-aos-delay="200"
                      >
                        {slide.desc}
                      </p>

                      {slide.url && (
                        <Link
                          href={`${slug
                              ? WEB_URL + "department/" + slug + slide.url
                              : WEB_URL + slide.url
                            }`}
                          className={`${styles.bannerContentA} bannerBtn`}
                        // data-aos="fade-right"
                        // data-aos-delay="300"
                        >
                          {slide.linked_text}

                          <Image
                            src="/images/home-page/jss_bannerIcon.svg"
                            alt="visit icons"
                            width={22}
                            height={22}
                            className={styles.iconSpacing}
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image / Video */}
              <div className={styles.bannerRight}>
                {slide.video_url ? (
                  <iframe
                    src={getYouTubeEmbedUrl(slide.video_url)}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className={styles.desktopBanner}
                    style={{
                      width: "100%",
                      pointerEvents: "none",
                    }}
                  />
                ) : (
                  <>
                    {slide.desktop_video ? (
                      <video
                        poster={slide.desktop_banner}
                        src={slide.desktop_video}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={styles.desktopBanner}
                        width={1920}
                        height={810}
                        style={{
                          width: "100%",
                          objectFit: "cover",
                        }}
                        preload="auto"
                      />
                    ) : (
                      slide.desktop_banner && (
                        <Image
                          src={slide.desktop_banner}
                          alt="slide image"
                          
                          fetchPriority="high"
                          loading="eager"
                          width={750}
                          height={764}
                          priority
                          style={{
                            width: "100%",

                            objectFit: "cover",
                          }}
                          className={styles.desktopBanner}
                        />
                      )
                    )}
                  </>
                )}
              </div>
            </div>

            {/* Mobile  */}
            {slide.mobile_video ? (
              <video
                src={slide.mobile_video}
                autoPlay
                loop
                muted
                playsInline
                className={styles.mobileBanner}
                width={1920}
                height={810}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            ) : (
              slide.mobile_banner && (
                <Image
                  src={slide.mobile_banner}
                  alt="slide image"
                  width={500}
                  height={509}
                  priority
                  fetchPriority="high"
                  sizes="100vw"
                  style={{ width: "100%", height: "100%" }}
                  className={styles.mobileBanner}
                />
              )
            )}
            <div className={styles.mobileContent}>
              <div className={`departBanner ${styles.bannerOverlay}`}>
                <div className="container">
                  <div className={`departtext ${styles.bannerContent}`}>
                    {isDepartmentPage && (
                      <span className={styles.bannerSmall}>Department of</span>
                    )}

                    <h2
                      className={styles.bannerContentH1}
                      dangerouslySetInnerHTML={{ __html: slide.title }}
                    // data-aos="fade-right"
                    // data-aos-delay="0"
                    />

                    <p
                      className={styles.bannerContentP}
                    // data-aos="fade-right"
                    // data-aos-delay="200"
                    >
                      {slide.desc}
                    </p>

                    {slide.url && (
                      <Link
                        href={`${slug
                            ? WEB_URL + "department/" + slug + slide.url
                            : WEB_URL + slide.url
                          }`}
                        className={`${styles.bannerContentA} bannerBtn`}
                      // data-aos="fade-right"
                      // data-aos-delay="300"
                      >
                        {slide.linked_text}

                        <Image
                          src="/images/home-page/jss_bannerIcon.svg"
                          alt="visit icons"
                          width={22}
                          height={22}
                          className={styles.iconSpacing}
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

     </div>
    </>
  );
}
