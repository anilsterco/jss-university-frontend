"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RxCaretRight } from "react-icons/rx";
import { RiCloseLargeFill } from "react-icons/ri";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import { BASE_URL } from "@/config/config";

export default function TestimonialInnerPage({ data = [] }) {
  const [testimonialData, setTestimonialData] = useState(data);
  const [selectedType, setSelectedType] = useState("");
  const [typesList, setTypesList] = useState([]);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState(null);
  const [modalLoading, setModalLoading] = useState(false);
  const [modalAnimate, setModalAnimate] = useState(false);

  const allData = useRef(data);

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

  // Build types list from prop data on mount
  useEffect(() => {
    allData.current = data;
    setTestimonialData(data);
    accumulateTypes(data);
  }, [data]);

  // Client-side filter whenever selectedType changes
  useEffect(() => {
    if (!selectedType) {
      setTestimonialData(allData.current);
    } else {
      setTestimonialData(
        allData.current.filter((item) => item.type === selectedType)
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
    setModalAnimate(false);
    try {
      const res = await fetch(`${BASE_URL}testimonials/${slug}`);
      if (!res.ok) throw new Error(`Detail API error: ${res.status}`);
      const json = await res.json();
      setModalData(json.data || json);
    } catch (err) {
      console.error("Modal fetch error:", err);
      setModalData(null);
    } finally {
      setModalLoading(false);
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

      {/* Testimonial List */}
      <section className="testimonial_list_section testimonial_inner_page">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {testimonialData.length === 0 ? (
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
                                : `https://project-demo.in/jss/${item.image}`
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
                        {(item.course || item.batch) && (
                          <p className="testimonial-course">
                            {[item.course, item.batch].filter(Boolean).join(" · ")}
                          </p>
                        )}
                        <span>
                          <RxCaretRight className="right-arrow" />
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {modalOpen && (
        <>
          {modalLoading && (
            <div className="modal-page-loader">
              <div className="loader-spinner" />
            </div>
          )}

          {!modalLoading && (
            <div
              className={`testimonial-modal-overlay ${modalAnimate ? "overlay-visible" : ""}`}
              onClick={closeModal}
            >
              <div
                className={`testimonial-modal ${modalAnimate ? "modal-visible" : ""}`}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="testimonial-modal-close" onClick={closeModal}>
                  <RiCloseLargeFill size={22} />
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
                            : `https://project-demo.in/jss/${modalData.image}`
                        }
                        alt={modalData.alt_text || modalData.name}
                        width={300}
                        height={350}
                        style={{ objectFit: "cover", width: "100%", height: "100%" }}
                      />
                    </div>
                    <div className="modal-right">
                      <div className="right_content">
                        {modalData.title && <h3 className="modal_title">{modalData.title}</h3>}
                        {modalData.description && <p className="modal_description">{modalData.description}</p>}
                        {modalData.name && <h3 className="modal_name">{modalData.name}</h3>}
                        {modalData.designation && <p className="modal-designation">{modalData.designation}</p>}
                        {modalData.company && <p className="modal-company">{modalData.company}</p>}
                        {(modalData.course || modalData.batch) && (
                          <p className="modal-course">
                            {[modalData.course, modalData.batch].filter(Boolean).join(" ")}
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