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
        const item = section.items[0];
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
                      const colonIndex = contact.info.indexOf(":");
                      // Handle missing colon gracefully
                      if (colonIndex === -1) {
                        return <li key={idx}>{contact.info}</li>;
                      }

                      const label = contact.info.slice(0, colonIndex).trim();
                      const rest = contact.info.slice(colonIndex + 1).trim();
                      const values = rest ? rest.split(",") : [];

                      return (
                        <li key={idx}>
                          {label} :{" "}
                          {values.length > 0
                            ? values.map((v, i, arr) =>
                                renderContactValue(v, i, arr),
                              )
                            : null}
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
