"use client"
import Image from "next/image";

import { APPLY_NOW } from "@/config/config";
import { WEB_URL } from "@/config/config";
import { usePathname } from "next/navigation";

export default function AboutOne({ data }) {

  const pathname = usePathname();

  const applyNowLink = pathname?.includes("careers")
    ? `${WEB_URL}career-form`
    : APPLY_NOW;

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "admissionOffice":
        const item = section.items?.[0];
        if (!item) return null;
        return (
          <section
            className="admins_of_con"
            id="admissionsofc"
            key={sectionIndex}>
            <div className="container">
              <div
                className="ad_offc_contact"
                data-aos="fade-up"
                data-aos-delay="200">
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
                            if (/^\+?\d/.test(cleaned)) {
                              content = (
                                <a className="CTA_Number" href={`tel:${cleaned.replace(/\s/g, "")}`}>
                                  {cleaned}
                                </a>
                              );
                            }
                            else if (cleaned.includes("@")) {
                              content = (
                                <a className="CTA_Email" href={`mailto:${cleaned}`}>{cleaned}</a>
                              );
                            }
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
                  <div className="hostal_d_btns d-flex justify-content-left">
                    <a rel="noopener noreferrer" className="btn btn-warning CTA_Applynow" href={applyNowLink}>
                      Apply Now
                    </a>
                  </div>
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
