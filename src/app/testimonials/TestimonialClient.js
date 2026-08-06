"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RxCaretRight } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Link from "next/link";
import { ASSETS_URL, BASE_URL } from "@/config/config.mjs";

export default function TestimonialClient() {
  const [testimonialData, setTestimonialData] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [typesList, setTypesList] = useState([]);
  const [loading, setLoading] = useState(true);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalAnimate, setModalAnimate] = useState(false);

  const allData = useRef([]);

  // Build unique types list from items
  const accumulateTypes = (items) => {
    const seen = new Map();
    items.forEach((item) => {
      if (item.type && !seen.has(item.type)) {
        seen.set(item.type, { type: item.type });
      }
    });
    setTypesList(Array.from(seen.values()));
  };

  // Fetch all testimonials once
  const fetchTestimonials = async () => {
    try {
      setLoading(true);
      const res = await fetch(`${BASE_URL}testimonials`);
      if (!res.ok) throw new Error(`Testimonials API error: ${res.status}`);
      const data = await res.json();

      const items = Array.isArray(data.data) ? data.data : [];
      allData.current = items;
      accumulateTypes(items);
      setTestimonialData(items);
    } catch (err) {
      console.error("Testimonial fetch error:", err);
      setTestimonialData([]);
    } finally {
      setLoading(false);
    }
  };

  // Initial load
  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Client-side filter whenever selectedType changes
  useEffect(() => {
    if (!selectedType) {
      setTestimonialData(allData.current);
    } else {
      setTestimonialData(
        allData.current.filter((item) => item.type === selectedType),
      );
    }
  }, [selectedType]);

  // Lock body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [modalOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const openModal = async (slug) => {
    setModalOpen(true);
    setModalData(null);
    setModalLoading(true);
    setModalAnimate(false); // reset
    try {
      const res = await fetch(`${BASE_URL}testimonials/${slug}`);
      if (!res.ok) throw new Error(`Detail API error: ${res.status}`);
      const data = await res.json();
      setModalData(data.data || data);
    } catch (err) {
      console.error("Modal fetch error:", err);
      setModalData(null);
    } finally {
      setModalLoading(false);
      // Small tick so the browser registers the initial state before animating
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setModalAnimate(true));
      });
    }
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalData(null);
  };

  return (
    <main className="site_main">
      {/* Title Section */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">
                <h1>Testimonials</h1>
                <h3>
                  Discover Student Journeys of <span>Success</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Tabs — only shown when there are multiple types */}
      {typesList.length > 1 && (
        <section className="testimonial-filter">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="filter-tabs">
                  <button
                    className={`filter-tab ${selectedType === "" ? "active" : ""}`}
                    onClick={() => setSelectedType("")}
                  >
                    All
                  </button>
                  {typesList.map((t) => (
                    <button
                      key={t.type}
                      className={`filter-tab ${selectedType === t.type ? "active" : ""}`}
                      onClick={() => setSelectedType(t.type)}
                    >
                      {t.type.charAt(0).toUpperCase() + t.type.slice(1)}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonial List */}
      <section className="testimonial_list_section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {loading ? (
                <div className="text-center py-5">
                  <p>Loading Testimonials...</p>
                </div>
              ) : testimonialData.length === 0 ? (
                <div className="text-center py-5">
                  <p>No Testimonials found.</p>
                </div>
              ) : (
                <div className="program-list-boxs faulty-list">
                  {testimonialData.map((item) => (
                    <div
                      className="faulty-list-box"
                      key={item.id}
                      onClick={() => openModal(item.slug)}
                      style={{ cursor: "pointer" }}
                    >
                      <div className="faulty-img">
                        <figure>
                          <Image
                            src={
                              item.image?.startsWith("http")
                                ? item.image
                                : `${ASSETS_URL}${item.image}`
                            }
                            alt={item.alt_text || item.name}
                            className="img-fluid w-100"
                            width={300}
                            height={300}
                            style={{ objectFit: "cover" }}
                          />
                        </figure>
                      </div>
                      <div className="faulty-text">
                        {item?.name && <h4>{item.name}</h4>}
                        {/* {item.designation && <p>{item.designation}</p>} */}
                        {/* {item.company && (
                          <p className="testimonial-company">{item.company}</p>
                        )} */}
                        {(item.course || item.batch) && (
                          <p className="testimonial-course">
                            {[item.course, item.batch]
                              .filter(Boolean)
                              .join(" · ")}
                          </p>
                        )}
                        <span>
                          <RxCaretRight className="right-arrow" />
                        </span>
                      </div>
                      {/* <Link
                        href={`/testimonials/${item.slug}`}
                        className="streched_link"
                      /> */}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {/* Modal */}
      {modalOpen && (
        <>
          {/* Full page loader — shows while data is fetching */}
          {modalLoading && (
            <div className="modal-page-loader">
              <div className="loader-spinner" />
            </div>
          )}

          {/* Modal — only mounts once data is ready */}
          {!modalLoading && (
            <div
              className={`testimonial-modal-overlay ${modalAnimate ? "overlay-visible" : ""}`}
              onClick={closeModal}
            >
              <div
                className={`testimonial-modal ${modalAnimate ? "modal-visible" : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="testimonial-modal-close"
                  onClick={closeModal}
                >
                  <RiCloseLargeFill size={19} />
                </button>

                {!modalData ? (
                  <div className="modal-loading">
                    <p>Something went wrong. Please try again.</p>
                  </div>
                ) : (
                  <div className="modal-inner">
                    <div className="modal-left">
                      <Image
                        src={
                          modalData.image?.startsWith("http")
                            ? modalData.image
                            : `${ASSETS_URL}${modalData.image}`
                        }
                        alt={modalData.alt_text || modalData.name}
                        width={300}
                        height={350}
                        style={{
                          objectFit: "cover",
                          width: "100%",
                          height: "100%",
                        }}
                      />
                    </div>
                    <div className="modal-right">
                      <div className="right_content">
                        {modalData.title && (
                          <h3 className="modal_title">{modalData.title}</h3>
                        )}
                        {/* {modalData.short_description && (
                          <p className="modal_short_description">{modalData.short_description}</p>
                        )} */}
                        {modalData.description && (
                          <p className="modal_description">{modalData.description}</p>
                        )}
                        {modalData.name && (
                          <h3 className="modal_name">{modalData.name}</h3>
                        )}
                        {modalData.designation && (
                          <p className="modal-designation">
                            {modalData.designation}
                          </p>
                        )}
                        {modalData.company && (
                          <p className="modal-company">{modalData.company}</p>
                        )}
                        {(modalData.course || modalData.batch) && (
                          <p className="modal-course">
                            {[modalData.course, modalData.batch]
                              .filter(Boolean)
                              .join(" ")}
                          </p>
                        )}
                        {modalData.message && (
                          <div className="modal-message">
                            <p>{modalData.message}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </main>
  );
}
