"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilityFive({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "bankAtm") return null;

        const items = [...section.items].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0),
        );

        return items.map((item, idx) => (
          <section
            className="atm_mainsec consultancy_main"
            key={`bankatm-${sectionIndex}-${idx}`}
          >
            <div className="container">
              <div className="atm_fac_grid">
                <div className="atm_g_cont">
                  {item.title && <h5>{item.title}</h5>}

                  {Array.isArray(item.desc) &&
                    item.desc.map((para, pidx) => (
                      <p key={pidx}>{para.desc}</p>
                    ))}

                  <div className=" downlo_guides">
                    <a
                      href={item.pdf}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pdf_link"
                    >
                      {item.pdf && (
                        <figure className="shine-effect">
                          <Image
                            src="/images/icons/pdf.png"
                            alt="PDF Icon"
                            width={15}
                            height={20}
                            className="img-fluid"
                          />
                        </figure>
                      )}
                      {item.pdfText}
                    </a>
                  </div>
                </div>

                {item.image && (
                  <div className="atm_g_imgsec">
                    <figure className="shine-effect img-full">
                      <Image
                        src={item.image}
                        alt={item.title || "Bank ATM"}
                        className="w-100"
                        width={683}
                        height={750}
                        style={{ objectFit: "cover" }}
                      />
                    </figure>
                  </div>
                )}
              </div>
            </div>
          </section>
        ));
      })}
    </>
  );
}
