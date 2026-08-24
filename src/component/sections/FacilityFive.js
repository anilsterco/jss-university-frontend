"use client";

import Image from "next/image";
import MediaSwiper from "@/component/common/MediaSwiper";

export default function FacilityFive({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "bankAtm") return null;

        const items = [...(section.items || [])].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0)
        );

        return items.map((item, idx) => {
          const uid = `${sectionIndex}-${idx}-bankatm`;

          return (
            <section
              className="atm_mainsec consultancy_main"
              key={`bankatm-${uid}`}
            >
              <div className="container">
                <div className="atm_fac_grid">
                  <div className="atm_g_cont">
                    {item.title && <h5>{item.title}</h5>}

                    {Array.isArray(item.desc) &&
                      item.desc.map((para, pidx) => (
                        <p key={pidx}>{para.desc}</p>
                      ))}

                    {item.pdf && (
                      <div className="downlo_guides">
                        <a
                          href={item.pdf}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="pdf_link"
                        >
                          <figure className="shine-effect">
                            <Image
                              src="/images/icons/pdf.png"
                              alt="PDF Icon"
                              width={15}
                              height={20}
                              className="img-fluid"
                            />
                          </figure>
                          {item.pdfText}
                        </a>
                      </div>
                    )}
                  </div>

                  {(item.image || item?.imageVideo?.length > 0) && (
                    <div className="atm_g_imgsec">
                      <MediaSwiper
                        media={item.imageVideo}
                        uid={uid}
                        width={683}
                        height={750}
                        alt={item.title || "Bank ATM"}
                        fallbackImage={item.image}
                        mediaStyle={{ width: "100%", height: "auto", objectFit: "cover" }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </section>
          );
        });
      })}
    </>
  );
}