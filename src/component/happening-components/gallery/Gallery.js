"use client";

import React, { useState, useEffect } from "react";
import styles from "./gallery.module.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination as SwiperPagination,
  Autoplay,
} from "swiper/modules";
import Link from "next/link";
import { FaChevronRight, FaChevronLeft, FaChevronDown } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { PiVideoCameraLight } from "react-icons/pi";

const BASE_URL = "http://sd7:8080/jss/api/happenings/gallery";

export default function Gallery() {
  // const upCommingEvents = [
  //   {
  //     id: 1,
  //     title: "That Shake The Future",
  //     banner_image:
  //       "https://project-demo.in/jss/assets/img/happenings/banners/1760524600_68ef793871375.png",
  //     event_type: "Event",
  //     event_date_from: "2023-09-01",
  //   },
  //   {
  //     id: 2,
  //     title: "Future That Shake ",
  //     banner_image:
  //       "https://project-demo.in/jss/assets/img/happenings/banners/1760524600_68ef793871375.png",
  //     event_type: "Event",
  //     event_date_from: "2023-06-07",
  //   },
  // ];
  // const galleryData = [
  //   {
  //     id: 1,
  //     title:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  //     date: "February 12, 2018",
  //     stats: {
  //       photos: 48,
  //       videos: 12,
  //     },
  //     thumbnail:
  //       "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
  //     media: [
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 1",
  //       },
  //       {
  //         type: "video",
  //         url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //         alt: "Gallery Video 1",
  //       },
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 2",
  //       },
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 3",
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  //     date: "February 12, 2018",
  //     stats: {
  //       photos: 32,
  //       videos: 8,
  //     },
  //     thumbnail: "/images/home-page/fifth-section-banner.png",
  //     media: [
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 4",
  //       },
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 5",
  //       },
  //       {
  //         type: "video",
  //         url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //         alt: "Gallery Video 2",
  //       },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     title:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  //     date: "February 12, 2018",
  //     stats: {
  //       photos: 56,
  //       videos: 15,
  //     },
  //     thumbnail:
  //       "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
  //     media: [
  //       {
  //         type: "video",
  //         url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //         alt: "Gallery Video 3",
  //       },
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 6",
  //       },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     title:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  //     date: "February 12, 2018",
  //     stats: {
  //       photos: 24,
  //       videos: 6,
  //     },
  //     thumbnail:
  //       "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
  //     media: [
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 7",
  //       },
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 8",
  //       },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     title:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  //     date: "February 12, 2018",
  //     stats: {
  //       photos: 40,
  //       videos: 10,
  //     },
  //     thumbnail:
  //       "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
  //     media: [
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 9",
  //       },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     title:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  //     date: "February 12, 2018",
  //     stats: {
  //       photos: 64,
  //       videos: 18,
  //     },
  //     thumbnail:
  //       "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
  //     media: [
  //       {
  //         type: "video",
  //         url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  //         alt: "Gallery Video 4",
  //       },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     title:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  //     date: "February 12, 2018",
  //     stats: {
  //       photos: 36,
  //       videos: 9,
  //     },
  //     thumbnail:
  //       "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
  //     media: [
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 10",
  //       },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     title:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  //     date: "February 12, 2018",
  //     stats: {
  //       photos: 28,
  //       videos: 7,
  //     },
  //     thumbnail:
  //       "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
  //     media: [
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 11",
  //       },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     title:
  //       "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium",
  //     date: "February 12, 2018",
  //     stats: {
  //       photos: 52,
  //       videos: 14,
  //     },
  //     thumbnail:
  //       "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
  //     media: [
  //       {
  //         type: "image",
  //         url: "/images/home-page/gallary-popup-dummy-banner.png",
  //         alt: "Gallery Image 12",
  //       },
  //     ],
  //   },
  // ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [allGallaryData, setAllGallaryData] = useState([]);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setAllGallaryData(data);
      } catch (err) {
        console.error(err);
        setAllGallaryData([]);
      }
    };
    fetchContactData();
  }, []);
  const upCommingEvents = allGallaryData.upcoming_events || [];
  const galleryData = allGallaryData.gallery_data || [];

  const openModal = (gallery) => {
    setSelectedGallery(gallery);
    setCurrentSlideIndex(0);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedGallery(null);
    setCurrentSlideIndex(0);
    document.body.style.overflow = "auto";
  };

  const nextSlide = () => {
    if (
      selectedGallery &&
      currentSlideIndex < selectedGallery.media.length - 1
    ) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else {
      setCurrentSlideIndex(0);
    }
  };

  const previousSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else {
      setCurrentSlideIndex(
        selectedGallery ? selectedGallery.media.length - 1 : 0
      );
    }
  };

  const goToSlide = (index) => {
    setCurrentSlideIndex(index);
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <section className={styles.mediaSection}>
      <div className={styles.bannerWrapper}>
        {upCommingEvents && upCommingEvents.length > 0 ? (
          <Swiper
            modules={[Navigation, SwiperPagination, Autoplay]}
            navigation={{
              nextEl: ".upcoming-next",
              prevEl: ".upcoming-prev",
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
          >
            {upCommingEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <Link href={"#"}>
                  <Image
                    src={event.banner_image}
                    alt={event.title}
                    layout="responsive"
                    width={1200}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.bannerImage}
                  />
                </Link>
                <div className={styles.bannerTextBox}>
                  <p className={styles.upcomingTag}>
                    {event.event_type?.toUpperCase() || "EVENT"}
                  </p>
                  <h3 className={styles.bannerTitle}>
                    {event.title?.toUpperCase()}
                  </h3>
                  <p className={styles.bannerDate}>
                    {formatDate(event.event_date_from)}
                  </p>
                  <div className="d-flex gap-2">
                    <button className="upcoming-prev btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2">
                      <FaChevronLeft size={8} color={"white"} />
                    </button>
                    <button className="upcoming-next btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2">
                      <FaChevronRight size={8} color={"white"} />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem" }}>
            No Upcoming Events
          </div>
        )}
        <div className={styles.filterBox}>
          <button className={styles.imageFilterButton}>
            <CiImageOn fontSize={20} /> Images
          </button>
          <button className={styles.videoFilterButton}>
            <PiVideoCameraLight fontSize={20} />
            Videos
          </button>
        </div>
      </div>
      <div className={styles.galleryGrid}>
        {galleryData &&
          galleryData.map((item) => (
            <div
              key={item.id}
              className={styles.galleryCard}
              onClick={() => openModal(item)}
            >
              <div className={styles.cardImage}>
                <div className={styles.imagePlaceholder}>
                  {item.thumbnail && (
                    <Image
                      src={item.thumbnail}
                      alt="Gallery Thumbnail"
                      layout="responsive"
                      width={1200}
                      height={400}
                      style={{ width: "100%", height: "auto" }}
                    />
                  )}
                </div>
                {item.stats && (
                  <div className={styles.cardBadge}>
                    {item.stats.photos} PHOTOS {item.stats.videos} VIDEOS
                  </div>
                )}
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDate}>{formatDate(item.date)}</p>
              </div>
            </div>
          ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedGallery && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button className={styles.closeButton} onClick={closeModal}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            {/* Slider */}
            <div className={styles.slider}>
              {/* Media Container */}
              <div className={styles.mediaContainer}>
                {selectedGallery.media[currentSlideIndex].type === "video" ? (
                  <iframe
                    className={styles.mediaIframe}
                    src={selectedGallery.media[currentSlideIndex].url}
                    title={selectedGallery.media[currentSlideIndex].alt}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <div className={styles.mediaImage}>
                    <img
                      src={selectedGallery.media[currentSlideIndex].url}
                      alt={selectedGallery.media[currentSlideIndex].alt}
                    />
                  </div>
                )}
              </div>
            </div>
            {/* Modal Header */}
            <div className={styles.modalHeader}>
              {/* Slide Counter */}
              <div className={styles.slideCounter}>
                {currentSlideIndex + 1} / {selectedGallery.media.length}
              </div>
              <div>
                <p className={styles.modalDate}>
                  {formatDate(selectedGallery.date)}
                </p>
                <h2 className={styles.modalTitle}>{selectedGallery.title}</h2>
              </div>
              <div className={`d-flex gap-2`}>
                <button
                  className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`}
                  onClick={previousSlide}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                <button
                  className={`${styles.sliderArrow} ${styles.sliderArrowRight}`}
                  onClick={nextSlide}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
