"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Link from "next/link";

export default function FacilityFour({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "universityboasts") return null;

        const items = [...section.items].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0),
        );
        return (
          <section
            className="uni_boasts_rag_sec"
            key={`uniboasts-${sectionIndex}`}
          >
            <div className="container">
              {items.map((item, idx) => (
                <div key={idx}>
                  <div className="uni_bo_title">
                    {item.heading && <h4>{item.heading}</h4>}
                    {item.subheading && <p>{item.subheading}</p>}
                  </div>

                  <div className="uni_bo_topsec">
                    <div className="uni_b_imgsec">
                      <figure className="shine-effect img-full">
                        <Image
                          src="/images/about-page/uni_boa_main.webp"
                          alt="University Sports"
                          className="w-100"
                          width={800}
                          height={520}
                        />
                      </figure>
                    </div>

                    <div className="uni_bo_text">
                      {Array.isArray(item.desc) &&
                        item.desc.map((para, pidx) => (
                          <p key={pidx}>{para.desc}</p>
                        ))}
                    </div>
                  </div>
                  {Array.isArray(item.boxes) && item.boxes.length > 0 && (
                    <div className="uni_boa_grid">
                      {item.boxes.map((box, bidx) => (
                        <div className="uni_boa_itemse" key={bidx}>
                          <figure className="shine-effect img-full">
                            <Image
                              src={box.image}
                              alt={box.title}
                              className="w-100"
                              width={446}
                              height={300}
                            />
                          </figure>
                          <figcaption>
                            <p>{box.title}</p>
                          </figcaption>
                          {/* <Link
                            href="javascript:void(0)"
                            className="page_link"
                          ></Link> */}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        );
      })}
    </>
  );
}
