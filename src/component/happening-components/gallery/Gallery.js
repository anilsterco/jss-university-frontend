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
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { CiImageOn } from "react-icons/ci";
import { PiVideoCameraLight } from "react-icons/pi";

const BASE_URL = "http://sd7:8080/jss/api/happenings/gallery";

export default function Gallery() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [allGallaryData, setAllGallaryData] = useState([]);

  const [filterType, setFilterType] = useState("");

  useEffect(() => {
    const fetchGalleryData = async () => {
      try {
        const url = filterType ? `${BASE_URL}?filter=${filterType}` : BASE_URL;

        const res = await fetch(url);
        const data = await res.json();
        setAllGallaryData(data);
      } catch (err) {
        console.error(err);
        setAllGallaryData([]);
      }
    };

    fetchGalleryData();
  }, [filterType]);

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
          <button
            className={styles.imageFilterButton}
            onClick={() => setFilterType("image")}
          >
            <CiImageOn fontSize={20} /> Images
          </button>

          <button
            className={styles.videoFilterButton}
            onClick={() => setFilterType("video")}
          >
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
              ✕
            </button>

            <div className={styles.slider}>
              <div className={styles.mediaContainer}>
                {selectedGallery.media[currentSlideIndex].type === "video" ? (
                  <iframe
                    className={styles.mediaIframe}
                    src={selectedGallery.media[currentSlideIndex].url}
                    title={selectedGallery.media[currentSlideIndex].alt}
                    frameBorder="0"
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

            <div className={styles.modalHeader}>
              <div className={styles.slideCounter}>
                {currentSlideIndex + 1} / {selectedGallery.media.length}
              </div>
              <div>
                <p className={styles.modalDate}>
                  {formatDate(selectedGallery.date)}
                </p>
                <h2 className={styles.modalTitle}>{selectedGallery.title}</h2>
              </div>

              <div className="d-flex gap-2">
                <button
                  className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`}
                  onClick={previousSlide}
                >
                  ←
                </button>
                <button
                  className={`${styles.sliderArrow} ${styles.sliderArrowRight}`}
                  onClick={nextSlide}
                >
                  →
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
 