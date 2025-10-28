"use client";

import React, { useState } from "react";
import styles from "./media-coverage.module.css";
import Image from "next/image";
export default function MediaCoverage() {
  const galleryData = [
    {
      id: 1,
      thumbnail:
        "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
      media: [
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 1",
        },
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 2",
        },
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 3",
        },
      ],
    },
    {
      id: 2,
      thumbnail: "/images/home-page/fifth-section-banner.png",
      media: [
        {
          type: "image",
          url: "/images/home-page/fifth-section-banner.png",
          alt: "Gallery Image 4",
        },
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 5",
        },
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 43",
        },
      ],
    },
    {
      id: 3,
      thumbnail:
        "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
      media: [
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 6",
        },
      ],
    },
    {
      id: 4,
      thumbnail:
        "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
      media: [
        {
          type: "image",
          url: "/images/home-page/gallary-popup-dummy-banner.png",
          alt: "Gallery Image 7",
        },
        {
          type: "image",
          url: "/images/home-page/gallary-popup-dummy-banner.png",
          alt: "Gallery Image 8",
        },
      ],
    },
    {
      id: 5,
      thumbnail:
        "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
      media: [
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 9",
        },
      ],
    },
    {
      id: 6,
      thumbnail:
        "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
      media: [
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 9",
        },
      ],
    },
    {
      id: 7,
      thumbnail:
        "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
      media: [
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 10",
        },
      ],
    },
    {
      id: 8,
      thumbnail:
        "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
      media: [
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 11",
        },
      ],
    },
    {
      id: 9,
      thumbnail:
        "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
      media: [
        {
          type: "image",
          url: "https://project-demo.in/jss/assets/img/happenings/banners/1760523633_68ef75715a3a1.png",
          alt: "Gallery Image 12",
        },
      ],
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

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
      <div className={styles.galleryGrid}>
        {galleryData.map((item) => (
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
                <p className={styles.modalDate}>{selectedGallery.date}</p>
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
