"use client";

import React, { useState, useEffect } from "react";
import styles from "./media-coverage.module.css";
import Image from "next/image";
import { LuLoader } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/config/config.mjs";

export default function MediaCoverage({ className, programId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [resolvedProgramId, setResolvedProgramId] = useState(null);

  useEffect(() => {
    if (programId) {
      setResolvedProgramId(programId);
    }
  }, [programId]);

  const buildQueryParams = () => {
    const params = new URLSearchParams();
    if (resolvedProgramId) {
      params.append("school", resolvedProgramId);
    }
    return params.toString();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: ["media-coverage", resolvedProgramId],
    queryFn: async () => {
      const queryParams = buildQueryParams();
      const url = `${BASE_URL}happenings/media-coverage${queryParams ? `?${queryParams}` : ""}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch media coverage");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    keepPreviousData: true,
  });

  const galleryData = data || [];

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
    const currentIndex = galleryData.findIndex(
      (item) => item.id === selectedGallery.id,
    );
    const nextIndex = (currentIndex + 1) % galleryData.length;
    setSelectedGallery(galleryData[nextIndex]);
    setCurrentSlideIndex(0);
  };

  const previousSlide = () => {
    const currentIndex = galleryData.findIndex(
      (item) => item.id === selectedGallery.id,
    );
    const prevIndex =
      (currentIndex - 1 + galleryData.length) % galleryData.length;
    setSelectedGallery(galleryData[prevIndex]);
    setCurrentSlideIndex(0);
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

  if (error) return <div>Error loading media coverage</div>;

  return (
    <section className={styles.mediaSection}>
      <div className="container">
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
                    <Image
                      src={item.thumbnail}
                      alt="Gallery Thumbnail"
                      layout="responsive"
                      width={1200}
                      height={400}
                      style={{ width: "100%", height: "auto" }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center", marginTop: "5rem" }}>
              No Media Coverage Found
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
            {/* Close Button */}
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeModal}
              aria-label="Close media coverage"
            >
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
              <div className={styles.slideCounter}>
                {galleryData.findIndex(
                  (item) => item.id === selectedGallery.id,
                ) + 1}{" "}
                / {galleryData.length}
              </div>
              <div>
                {/* <p className={styles.modalDate}>
                  {formatDate(selectedGallery.date)}
                </p> */}
                <h2 className={styles.modalTitle}>{selectedGallery.title}</h2>
              </div>
              <div className="d-flex gap-2">
                <button
                  type="button"
                  className={`${styles.sliderArrow} ${styles.sliderArrowLeft}`}
                  onClick={previousSlide}
                  aria-label="Previous slide"
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
                  type="button"
                  className={`${styles.sliderArrow} ${styles.sliderArrowRight}`}
                  onClick={nextSlide}
                  aria-label="Next slide">
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
