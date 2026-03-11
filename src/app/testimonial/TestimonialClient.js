"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { RxCaretRight } from "react-icons/rx";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Link from "next/link";
import { BASE_URL } from "@/config/config";

export default function TestimonialClient() {
  const [testimonialData, setTestimonialData] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [typesList, setTypesList] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <main className="site_main">
      {/* Title Section */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">
                <h2>Testimonials</h2>
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
      <section className="faulty-sec1">
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
                    <div className="faulty-list-box" key={item.id}>
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
                        <h4>{item.name}</h4>
                        {item.designation && <p>{item.designation}</p>}
                        {item.company && (
                          <p className="testimonial-company">{item.company}</p>
                        )}
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
                      <Link
                        href={`/testimonials/${item.slug}`}
                        className="streched_link"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
