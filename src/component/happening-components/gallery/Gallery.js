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
import { LuLoader } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { galleryAPI } from "@/lib/api";

export default function Gallery({ className, programId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [filterType, setFilterType] = useState("");
  const [resolvedProgramId, setResolvedProgramId] = useState(null);

  useEffect(() => {
    if (programId) {
      setResolvedProgramId(programId);
    }
  }, [programId]);

  const buildQueryParams = () => {
    const params = new URLSearchParams();

    if (filterType) {
      params.append("filter", filterType);
    }

    if (resolvedProgramId) {
      params.append("school", resolvedProgramId);
    }

    return params.toString();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["gallery", filterType, resolvedProgramId],
    queryFn: () => {
      const queryParams = buildQueryParams();
      return galleryAPI.getGallery(`/happenings/gallery?${queryParams}`);
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    keepPreviousData: true,
  });

  const upCommingEvents = data?.upcoming_events || [];
  const galleryData = data?.gallery_data || [];

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
        selectedGallery ? selectedGallery.media.length - 1 : 0,
      );
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading && !data)
    return (
      <div style={{ height: "100vh", textAlign: "center", marginTop: "5rem" }}>
        <LuLoader />
      </div>
    );

  if (error) return <div>Error loading gallery</div>;

  return (
    <section className={styles.mediaSection}>
      <div className="container">
        <div
          className={`${styles.bannerWrapper} ${
            className == "inner_happening" && "d-none"
          }`}
        >
          {upCommingEvents.length > 0 ? (
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
              className={`${styles.imageFilterButton} ${
                filterType === "image" ? styles.activeFilter : ""
              }`}
              onClick={() =>
                setFilterType(filterType === "image" ? "" : "image")
              }
            >
              <CiImageOn fontSize={20} /> Images
            </button>
            <button
              className={`${styles.videoFilterButton} ${
                filterType === "video" ? styles.activeFilter : ""
              }`}
              onClick={() =>
                setFilterType(filterType === "video" ? "" : "video")
              }
            >
              <PiVideoCameraLight fontSize={20} /> Videos
            </button>
          </div>
        </div>

        <div className={styles.galleryGrid}>
          {galleryData.length > 0 ? (
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
            ))
          ) : (
            <div style={{ textAlign: "center", marginTop: "5rem" }}>
              No Gallery Items Found
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedGallery && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button className={styles.closeButton} onClick={closeModal}>
              <img src="images/custom-page/gallery_close.svg" alt="close btn" />
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
                <p>{currentSlideIndex + 1}</p>
                <span>{selectedGallery.media.length}</span>
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
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="8"
                    width="8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"></path>
                  </svg>
                </button>
                <button
                  className={`${styles.sliderArrow} ${styles.sliderArrowRight}`}
                  onClick={nextSlide}
                >
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 320 512"
                    height="8"
                    width="8"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"></path>
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
