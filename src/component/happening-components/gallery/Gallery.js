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
import Pagination from "@/component/common/pagination-component/Pagination";

const isMp4Url = (url) => url && url.endsWith(".mp4");

const toYouTubeEmbedUrl = (url) => {
  if (!url) return "";

  if (url.includes("youtu.be/")) {
    const id = url.split("youtu.be/")[1].split("?")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("watch?v=")) {
    const id = url.split("watch?v=")[1].split("&")[0];
    return `https://www.youtube.com/embed/${id}`;
  }
  if (url.includes("/embed/")) {
    // ✅ Already embed — just strip ALL query params cleanly
    return url.split("?")[0];
  }

  return url.split("?")[0];
};

// "video" if video_url OR video has a value, else "image"
const getItemType = (item) => {
  const hasMp4 = item.video && item.video.trim() !== "";
  const hasYoutube = item.video_url && item.video_url.trim() !== "";
  return hasMp4 || hasYoutube ? "video" : "image";
};

// Determine media type for modal slide
const getMediaType = (media) => {
  if (media.type === "video") return "video";
  return "image";
};

export default function Gallery({ className, programId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [filterType, setFilterType] = useState("image");
  const [resolvedProgramId, setResolvedProgramId] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (programId) {
      setResolvedProgramId(programId);
    }
  }, [programId]);

  const buildQueryParams = () => {
    const params = new URLSearchParams();
    if (resolvedProgramId) params.append("school", resolvedProgramId);
    if (filterType) params.append("filter", filterType);
    params.append("page", currentPage);
    return params.toString();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["happeningsGallery", resolvedProgramId, filterType, currentPage],
    queryFn: () => {
      const queryParams = buildQueryParams();
      return galleryAPI.getGallery(`/happenings/gallery?${queryParams}`);
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    keepPreviousData: true,
  });

  const upCommingEvents = data?.upcoming_events || [];
  const rawGalleryData = data?.gallery_data || [];

  // ── Client-side filter ────────────────────────────────────────────────────
  const galleryData = rawGalleryData;

  // ── Modal controls ────────────────────────────────────────────────────────

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
    if (!selectedGallery || !selectedGallery.media.length) return;
    setCurrentSlideIndex((prev) =>
      prev < selectedGallery.media.length - 1 ? prev + 1 : 0,
    );
  };

  const previousSlide = () => {
    if (!selectedGallery || !selectedGallery.media.length) return;
    setCurrentSlideIndex((prev) =>
      prev > 0 ? prev - 1 : selectedGallery.media.length - 1,
    );
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

  const currentMedia = selectedGallery?.media?.[currentSlideIndex];

  return (
    <section className={styles.mediaSection}>
      <div className="container">
        <div
          className={`${styles.bannerWrapper} ${
            className === "inner_happening" ? "d-none" : ""
          }`}
        >
          {upCommingEvents.length > 0 && (
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
          )}

          {/* ── Filter Buttons ── */}
          <div className={styles.filterBox}>
            <button
              className={`${styles.imageFilterButton} ${
                filterType === "image" ? styles.activeFilter : ""
              }`}
              onClick={() => {
                setFilterType("image");
                setCurrentPage(1);
              }}
            >
              <CiImageOn fontSize={20} /> Images
            </button>
            <button
              className={`${styles.videoFilterButton} ${
                filterType === "video" ? styles.activeFilter : ""
              }`}
              onClick={() => {
                setFilterType("video");
                setCurrentPage(1);
              }}
            >
              <PiVideoCameraLight fontSize={20} /> Videos
            </button>
          </div>
        </div>

        {/* ── Gallery Grid ── */}
        <div className={styles.galleryGrid}>
          {galleryData.length > 0 ? (
            galleryData.map((item) => {
              const itemType = getItemType(item); // "video" | "image"

              return (
                <div
                  key={item.id}
                  className={styles.galleryCard}
                  onClick={() => openModal(item)}
                >
                  <div className={styles.cardImage}>
                    <div
                      className={`${itemType !== "video" ? styles.imagePlaceholder : ""}`}
                    >
                      {itemType === "video" ? (
                        // ── Video card thumbnail ──
                        <div style={{ position: "relative" }}>
                          {item.video ? (
                            // Has uploaded mp4 → show as looping video preview
                            <video
                              src={item.video}
                              width={600}
                              height={400}
                              autoPlay
                              muted
                              loop
                              playsInline
                            />
                          ) : (
                            // Has video_url (YouTube) → show thumbnail image
                            <iframe
                              src={`${toYouTubeEmbedUrl(item.video_url)}?autoplay=1&mute=1&controls=0&loop=1&playlist=${toYouTubeEmbedUrl(item.video_url).split("/").pop()}`}
                              frameBorder="0"
                              allow="autoplay; encrypted-media"
                              allowFullScreen
                              height="300"
                              width="100%"
                              style={{
                                borderRadius: "12px",
                                border: "none",
                                pointerEvents: "none",
                              }}
                            />
                          )}
                          {/* Play icon overlay for all video cards */}
                          {/* <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              background: "rgba(0,0,0,0.25)",
                              pointerEvents: "none",
                            }}
                          >
                            <PiVideoCameraLight fontSize={40} color="white" />
                          </div> */}
                        </div>
                      ) : (
                        // ── Image card thumbnail ──
                        item.thumbnail && (
                          <Image
                            src={item.thumbnail}
                            alt={item.title || "Gallery Thumbnail"}
                            layout="responsive"
                            width={1200}
                            height={400}
                            style={{ width: "100%", height: "auto" }}
                          />
                        )
                      )}
                    </div>

                    {/* Badge only for image cards */}
                    {itemType !== "video" && item.stats && (
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
              );
            })
          ) : (
            <div style={{ textAlign: "center", marginTop: "5rem" }}>
              No Gallery Items Found
            </div>
          )}
        </div>

        {/* ── Pagination ── */}
        {data?.pagination && data.pagination.last_page > 1 && (
          <div className="mt-5 d-flex justify-content-center">
            <Pagination
              currentPage={data.pagination.current_page}
              totalPages={data.pagination.last_page}
              onPageChange={(page) => setCurrentPage(page)}
            />
          </div>
        )}
      </div>

      {/* ── Modal ── */}
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
                {/* ── Priority 1: video_url exists → YouTube iframe ── */}
                {selectedGallery.video_url ? (
                  <iframe
                    className={styles.mediaIframe}
                    src={`${toYouTubeEmbedUrl(selectedGallery.video_url)}?autoplay=1`}
                    title={selectedGallery.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : selectedGallery.video && isMp4Url(selectedGallery.video) ? (
                  /* ── Priority 2: video exists → uploaded mp4 video tag ── */
                  <video
                    src={selectedGallery.video}
                    controls
                    autoPlay
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      height: "auto",
                      maxHeight: "70vh",
                    }}
                  />
                ) : currentMedia ? (
                  /* ── Priority 3: image from media array ── */
                  <div className={styles.mediaImage}>
                    <img src={currentMedia.url} alt={currentMedia.alt} />
                  </div>
                ) : null}
              </div>
            </div>

            <div className={styles.modalHeader}>
              <div className={styles.slideCounter}>
                <p>
                  {selectedGallery.media.length > 0 ? currentSlideIndex + 1 : 1}
                </p>
                <span>
                  {selectedGallery.media.length > 0
                    ? selectedGallery.media.length
                    : 1}
                </span>
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
