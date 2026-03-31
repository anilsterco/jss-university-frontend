
"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";

export default function PlacementRequest({ data }) {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  if (!data || data.length === 0) return null;
  const section = data.find((sec) => sec.type === "placementOfficer");
  if (!section || !section.items || section.items.length === 0) return null;

  return (
    <section className="placement_requ">
      <div className="container">
        {section.items.map((item, index) => (
          <div className="request_Row" key={index}>
            {/* LEFT IMAGE */}
            <div className="request_Col" data-aos="fade-right">
              <figure className="placement_request_img">
                <Image
                  src={item.image || "/images/placeholder.png"}
                  alt={item.name || "Placement Officer"}
                  width={600}
                  height={450}
                  className="img-fluid w-100"
                />
              </figure>
            </div>

            {/* RIGHT CONTENT */}
            <div className="request_Col" data-aos="fade-left">
              <div className="placement_request_content">
                <div className="top_discrip">
                  <p>{item.title}</p>
                </div>
                <h2>{item.name}</h2>
                <div className="condi_data">
                  {item.designation && <span>{item.designation}</span>}
                  {item.phone && <span>Phone: {item.phone}</span>}
                  {item.email && <span>Email: {item.email}</span>}
                </div>
                <div className="pdf_filecol">
                  <img
                    src={"images/about-page/application_icons.png"}
                    alt={"Placement Officer"}
                  />
                  {item.pdf && (
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf_file"
                    >
                      {item.pdf_title || "Download PDF"}
                    </a>
                  )}
                </div>
                {item.linkGroup.length > 0 && item.linkGroup.map((item, itemIdx)=>(
                  <Link
                  key={itemIdx}
                  href={item.linkUrl}
                  target="_blank"
                  className="read_more_btn mt-4 d-inline-block px-5"
                >
                  {item.linkText}
                </Link>
                ))}
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
