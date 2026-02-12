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

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "admissionOffice":
        const item = section.items[0]; 
        return (
          <section className="admins_of_con" key={sectionIndex}>
            <div className="container">
              <div className="ad_offc_contact">
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
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </figure>
                  </div>
                )}

                {/* Heading & Contacts */}
                <div className="add_of_context">
                  {item.heading && <h5>{item.heading}</h5>}
                  <ul>
                    {item.data?.map((contact, idx) => {
                      // Split info by colon to separate label and value
                      const [label, value] = contact.info.split(":");
                      // If multiple values (like landlines), split by comma
                      const values = value?.split(",") || [];
                      return (
                        <li key={idx}>
                          {label.trim()} :{" "}
                          {values.map((v, i) => {
                            const cleaned = v.trim();
                            // Make phone clickable if it contains digits
                            if (cleaned.match(/^\+?\d/)) {
                              return (
                                <a
                                  key={i}
                                  href={`tel:${cleaned.replace(/\s/g, "")}`}
                                >
                                  {cleaned}
                                </a>
                              );
                            }
                            // Make email clickable
                            if (cleaned.includes("@")) {
                              return (
                                <a key={i} href={`mailto:${cleaned}`}>
                                  {cleaned}
                                </a>
                              );
                            }
                            return <span key={i}>{cleaned}</span>;
                          }).reduce((prev, curr) => [prev, ", ", curr])}
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
