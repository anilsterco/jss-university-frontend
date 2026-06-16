"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import styles from "./gallery.module.css";
import { CiImageOn } from "react-icons/ci";
import { PiVideoCameraLight } from "react-icons/pi";

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
    return url.split("?")[0];
  }
  return url.split("?")[0];
};

export default function HappeningsGallery({ gallery }) {
  const [filterType, setFilterType] = useState("image");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const images = gallery?.images || [];
  const videos = gallery?.videos || [];

  // Build a unified media list so prev/next can slide within the active filter
  const mediaList = useMemo(() => {
    if (filterType === "video") {
      return videos.map((v) => ({
        type: "video",
        url: v.url || v.video,
        video_url: v.video_url,
        alt: v.alt,
      }));
    }
    return images.map((img) => ({
      type: "image",
      url: img.url,
      alt: img.alt,
    }));
  }, [filterType, images, videos]);

  const openModal = (idx) => {
    setCurrentSlideIndex(idx);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "auto";
  };

  const nextSlide = () => {
    if (!mediaList.length) return;
    setCurrentSlideIndex((prev) => (prev < mediaList.length - 1 ? prev + 1 : 0));
  };

  const previousSlide = () => {
    if (!mediaList.length) return;
    setCurrentSlideIndex((prev) => (prev > 0 ? prev - 1 : mediaList.length - 1));
  };

  const currentMedia = mediaList[currentSlideIndex];

  return (
    <div className={styles.gallerySection}>
      {/* Filter Buttons */}
      {images.length != 0 && videos.length != 0 && (
        <div className={styles.filterBox}>
          <button
            className={`${styles.imageFilterButton} ${
              filterType === "image" ? styles.activeFilter : ""
            }`}
            onClick={() => setFilterType("image")}
          >
            <CiImageOn fontSize={20} /> Images
          </button>
          <button
            className={`${styles.videoFilterButton} ${
              filterType === "video" ? styles.activeFilter : ""
            }`}
            onClick={() => setFilterType("video")}
          >
            <PiVideoCameraLight fontSize={20} /> Videos
          </button>
        </div>
      )}
      

      {/* Gallery Grid */}
      <div className={styles.galleryGrid}>
        {mediaList.length > 0 ? (
          mediaList.map((item, idx) => (
            <div
              key={idx}
              className={styles.galleryCard}
              onClick={() => openModal(idx)}
            >
              <div className={styles.cardImage}>
                {item.type === "video" ? (
                  item.url && isMp4Url(item.url) ? (
                    <video
                      src={item.url}
                      width={600}
                      height={400}
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <iframe
                      src={`${toYouTubeEmbedUrl(item.video_url)}?autoplay=1&mute=1&controls=0&loop=1&playlist=${toYouTubeEmbedUrl(
                        item.video_url
                      )
                        .split("/")
                        .pop()}`}
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
                  )
                ) : (
                  item.url && (
                    <Image
                      src={item.url}
                      alt={item.alt || "Gallery Image"}
                      layout="responsive"
                      width={1200}
                      height={400}
                      style={{ width: "100%", height: "auto" }}
                    />
                  )
                )}
              </div>
            </div>
          ))
        ) : (
          <div style={{ textAlign: "center", marginTop: "5rem" }}>
            No Gallery Items Found
          </div>
        )}
      </div>

      {/* Modal */}
      {isModalOpen && currentMedia && (
        <div className={styles.modal} onClick={closeModal}>
          <div
            className={styles.modalContent}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close gallery"
            >
              <img src="/images/custom-page/gallery_close.svg" alt="close btn" />
            </button>

            <div className={styles.slider}>
              <div className={styles.mediaContainer}>
                {currentMedia.type === "video" ? (
                  currentMedia.video_url ? (
                    <iframe
                      className={styles.mediaIframe}
                      src={`${toYouTubeEmbedUrl(currentMedia.video_url)}?autoplay=1`}
                      title="video"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <video
                      src={currentMedia.url}
                      controls
                      autoPlay
                      loop
                      playsInline
                      style={{ width: "100%", height: "auto", maxHeight: "70vh" }}
                    />
                  )
                ) : (
                  <div className={styles.mediaImage}>
                    <img src={currentMedia.url} alt={currentMedia.alt} />
                  </div>
                )}
              </div>
            </div>

            <div className={styles.modalHeader}>
              <div className={styles.slideCounter}>
                <p>{currentSlideIndex + 1}</p>
                <span>{mediaList.length}</span>
              </div>

              <div className="d-flex gap-2">
                <button
                  type="button"
                  className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`}
                  onClick={previousSlide}
                  aria-label="Previous slide"
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
                  type="button"
                  className={`${styles.sliderArrow} ${styles.sliderArrowRight}`}
                  onClick={nextSlide}
                  aria-label="Next slide"
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
    </div>
  );
}