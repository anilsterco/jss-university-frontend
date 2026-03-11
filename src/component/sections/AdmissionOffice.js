"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutOne({ data }) {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [data]);

  const renderContactValue = (v, i, arr) => {
    const cleaned = v.trim();

    const element = cleaned.match(/^\+?\d/) ? (
      <a key={i} href={`tel:${cleaned.replace(/\s/g, "")}`}>
        {cleaned}
      </a>
    ) : cleaned.includes("@") ? (
      <a key={i} href={`mailto:${cleaned}`}>
        {cleaned}
      </a>
    ) : (
      <span key={i}>{cleaned}</span>
    );

    // Add comma separator between values, but not after last
    return i < arr.length - 1 ? (
      <span key={`wrap-${i}`}>{element}, </span>
    ) : (
      element
    );
  };

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "admissionOffice":
        const item = section.items?.[0];

        if (!item) return null;

        return (
          <section className="admins_of_con" key={sectionIndex}>
            <div className="container">
              <div
                className="ad_offc_contact"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                {/* Image */}
                {item.image && (
                  <div className="ad_of_conimg">
                    <figure className="shine-effect">
                      <Image
                        src={item.image}
                        alt={item.heading || "Admissions Office"}
                        width={693}
                        height={267}
                        className="img-fluid w-100"
                      />
                    </figure>
                  </div>
                )}

                {/* Heading & Contacts */}
                <div className="add_of_context">
                  {item.heading && <h5>{item.heading}</h5>}

                  <ul>
                    {item.data?.map((contact, idx) => {
                      const [label, value] = contact.info.split(":");
                      const values = value?.split(",") || [];

                      return (
                        <li key={idx}>
                          {label?.trim()} :{" "}
                          {values.map((v, i) => {
                            const cleaned = v.trim();
                            let content;

                            // Phone clickable
                            if (/^\+?\d/.test(cleaned)) {
                              content = (
                                <a
                                  href={`tel:${cleaned.replace(/\s/g, "")}`}
                                >
                                  {cleaned}
                                </a>
                              );
                            }
                            // Email clickable
                            else if (cleaned.includes("@")) {
                              content = (
                                <a href={`mailto:${cleaned}`}>
                                  {cleaned}
                                </a>
                              );
                            }
                            // Normal text
                            else {
                              content = <span>{cleaned}</span>;
                            }

                            return (
                              <span key={i}>
                                {i > 0 && ", "}
                                {content}
                              </span>
                            );
                          })}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return <>{data?.map((section, index) => renderSection(section, index))}</>;
}