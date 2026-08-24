"use client";

import Link from "next/link";
import Image from "next/image";
import MediaSwiper from "@/component/common/MediaSwiper";

export default function FacilitySix({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "rightCounterSection") return null;

        const items = [...(section.items || [])].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0)
        );

        return items.map((item, idx) => {
          const uid = `${sectionIndex}-${idx}-rightcounter`;

          return (
            <section
              id={item?.sectionId || `right-counter-${uid}`}
              className={`lib_cen_main pt-0 ${item.sectionType}`}
              key={uid}
            >
              <div
                className={item?.containerSize ? item.containerSize : "container"}
              >
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      className={`campu_grid_main capus_grid_two ${
                        item?.pageType === "placement" && "pb-0 border-0"
                      }`}
                    >
                      <div
                        className={`campu_con_rgt ${
                          item.direction === "reverse" && "order-2"
                        }`}
                      >
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

                      <div className="cumpus_left_img">
                        <MediaSwiper
                          media={item.imageVideo}
                          uid={uid}
                          width={683}
                          height={520}
                          alt={item.title || "Right Counter Section"}
                          fallbackImage={item.image}
                          imgClassName={`img-fluid w-100 ${
                            item.direction === "reverse" ? "rounded-0" : ""
                          }`}
                          mediaStyle={{ width: "100%", height: "auto", objectFit: "cover" }}
                        />

                        <div className="desc_group">
                          {item.imageDesc && (
                            <p>
                              {item.imageDesc}{" "}
                              {item?.desc_btns?.[0]?.btn_link && (
                                <Link
                                  href={item.desc_btns[0].btn_link}
                                  className="btn read_more_btn btn1"
                                  target="_blank"
                                >
                                  {item.desc_btns[0].btn_name}
                                </Link>
                              )}
                            </p>
                          )}
                        </div>

                        {item.pdf?.length > 0 && (
                          <div className="studends_pdf">
                            <ul>
                              {item.pdf.map(
                                (pdfItem, i) =>
                                  pdfItem.pdf && (
                                    <li key={i}>
                                      <Link href={pdfItem.pdf} target="_blank">
                                        <Image
                                          src="/images/icons/pdf.png"
                                          alt={pdfItem.pdfName || "PDF Icon"}
                                          width={25}
                                          height={25}
                                        />
                                        <span>{pdfItem.pdfName}</span>
                                      </Link>
                                    </li>
                                  )
                              )}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          );
        });
      })}
    </>
  );
}