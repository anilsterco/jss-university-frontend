"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function FacilitySix({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "rightCounterSection") return null;
        const items = [...section.items].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0),
        );
        return items.map((item, idx) => (
          <section
            className={`lib_cen_main pt-0 ${item.sectionType}`}
            key={`${sectionIndex}-${idx}`}>
            <div className={`${item?.containerSize ? item.containerSize : 'container'}`}>
              <div className="row">
                <div className="col-lg-12">
                  <div className={`campu_grid_main capus_grid_two ${item?.pageType == 'placement' && 'pb-0 border-0'}`}>
                    <div className={`campu_con_rgt ${item.direction == 'reverse' && 'order-2'}`}>
                      {item.paragraph?.map((para, i) => (
                        <p key={i}>{para.text}</p>
                      ))}
                      {item.countBox?.length > 0 && (
                        <div className="ab_jss_coutsec">
                          {item.countBox.map((box, i) => (
                            <div className="ab_jss_c_col" key={i}>
                              <h4>{box.count}</h4>
                              <p>{box.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className={`cumpus_left_img`}>
                      {item.image && (
                        <figure className="shine-effect">
                          <Image
                            src={item.image}
                            alt="Library Image"
                            width={800}
                            height={520}
                            className={`img-fluid w-100  ${item.direction == 'reverse' && 'rounded-0'}`}
                            data-aos="fade-up"
                            data-aos-delay="200"
                          />
                        </figure>
                      )}
                      {item.imageDesc && <p>{item.imageDesc}</p>}

                      {item.pdf && item.pdf.length > 0 && (
                        <div className="studends_pdf">
                          <ul>
                            {item.pdf.map((pdfItem, i) => (
                              <li key={i}>
                                {pdfItem.pdf && (
                                  <Image
                                    src={pdfItem.pdf}
                                    alt={pdfItem.pdfName || "PDF Icon"}
                                    width={25}
                                    height={25}
                                  />
                                )}
                                <span>{pdfItem.pdfName}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ));
      })}
    </>
  );
}
