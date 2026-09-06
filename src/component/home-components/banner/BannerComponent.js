"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Link from "next/link";
import Image, { getImageProps } from "next/image";

import { WEB_URL } from "@/config/config.mjs";
import { usePathname } from "next/navigation";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "./banner.module.css";

const DESKTOP_MQ = "(min-width: 992px)";
const MOBILE_MQ = "(max-width: 991px)";

function useIsMobileViewport() {
  const [isMobile, setIsMobile] = useState(undefined);

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_MQ);
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  return isMobile;
}

function getHeroImageSets(desktopSrc, mobileSrc, alt) {
  const desktop = desktopSrc
    ? getImageProps({
        src: desktopSrc,
        alt,
        width: 1920,
        height: 810,
        sizes: "56vw",
        quality: 75,
      })
    : null;

  const mobile = mobileSrc || desktopSrc
    ? getImageProps({
        src: mobileSrc || desktopSrc,
        alt,
        width: 500,
        height: 509,
        sizes: "100vw",
        quality: 75,
      })
    : null;

  return { desktop, mobile };
}

function HeroArtDirectedImage({
  desktopSrc,
  mobileSrc,
  alt,
  priority = false,
  className,
}) {
  const { desktop, mobile } = getHeroImageSets(desktopSrc, mobileSrc, alt);
  if (!desktop && !mobile) return null;

  const desktopSrcSet = desktop?.props?.srcSet;
  const {
    srcSet: mobileSrcSet,
    fetchPriority: _fetchPriority,
    loading: _loading,
    ...imgProps
  } = mobile?.props || desktop.props;

  return (
    <picture>
      {desktopSrcSet && (
        <source media={DESKTOP_MQ} srcSet={desktopSrcSet} sizes="56vw" />
      )}
      {mobileSrcSet && (
        <source media={MOBILE_MQ} srcSet={mobileSrcSet} sizes="100vw" />
      )}
      <img
        {...imgProps}
        alt={alt}
        className={className}
        fetchPriority={priority ? "high" : "auto"}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
      />
    </picture>
  );
}

function HeroImagePreload({ desktopSrc, mobileSrc, alt }) {
  const { desktop, mobile } = getHeroImageSets(desktopSrc, mobileSrc, alt);
  const desktopSrcSet = desktop?.props?.srcSet;
  const mobileSrcSet = mobile?.props?.srcSet;

  return (
    <>
      {desktopSrcSet && (
        <link
          rel="preload"
          as="image"
          imageSrcSet={desktopSrcSet}
          imageSizes="56vw"
          media={DESKTOP_MQ}
          fetchPriority="high"
        />
      )}
      {mobileSrcSet && (
        <link
          rel="preload"
          as="image"
          imageSrcSet={mobileSrcSet}
          imageSizes="100vw"
          media={MOBILE_MQ}
          fetchPriority="high"
        />
      )}
    </>
  );
}


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
  const isMobileViewport = useIsMobileViewport();
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
       {bannerData[0] &&
         !bannerData[0].video_url &&
         !bannerData[0].desktop_video &&
         !bannerData[0].mobile_video && (
           <HeroImagePreload
             desktopSrc={bannerData[0].desktop_banner}
             mobileSrc={bannerData[0].mobile_banner}
             alt={
               bannerData[0].title
                 ? String(bannerData[0].title).replace(/<[^>]+>/g, "")
                 : "Banner"
             }
           />
         )}
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
        {bannerData.map((slide, index) => {
          const isFirstSlide = index === 0;
          const slideAlt = slide.title
            ? String(slide.title).replace(/<[^>]+>/g, "")
            : "Banner";
          const hasDesktopVideo = Boolean(slide.video_url || slide.desktop_video);
          const showDesktopIframe =
            Boolean(slide.video_url) && isMobileViewport === false;
          const showDesktopFileVideo =
            !slide.video_url &&
            Boolean(slide.desktop_video) &&
            isMobileViewport === false;
          const showMobileVideo =
            Boolean(slide.mobile_video) && isMobileViewport === true;
          const showHeroImage =
            !hasDesktopVideo ||
            (isMobileViewport === true && !slide.mobile_video);

          return(
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
                            priority
                            fetchPriority="high"
                          />
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Image / Video */}
              <div className={styles.bannerRight}>
                {showDesktopIframe && (
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
                      loading={isFirstSlide ? "eager" : "lazy"}
                    />
                )}
                {showDesktopFileVideo && (
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
                      preload={isFirstSlide ? "metadata" : "none"}
                    />
                )}
                {showHeroImage && (slide.desktop_banner || slide.mobile_banner) && (
                    <HeroArtDirectedImage
                      desktopSrc={slide.desktop_banner}
                      mobileSrc={slide.mobile_banner}
                      alt={slideAlt}
                      priority
                      loading="eager"
                      className={styles.heroBanner}
                    />
                )}
              </div>
            </div>

            {showMobileVideo && (
              <video
                src={slide.mobile_video}
                autoPlay
                loop
                muted
                playsInline
                className={styles.mobileBanner}
                width={500}
                height={509}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                preload={isFirstSlide ? "metadata" : "none"}
              />
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
                          priority
                          fetchPriority="high"
                        />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          )
        })}
      </Swiper>

     </div>
    </>
  );
}
