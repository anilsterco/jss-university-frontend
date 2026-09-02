"use client";

import Image from "next/image";
import Link from "next/link";
import MediaSwiper from "@/component/common/MediaSwiper";

export default function AboutFour({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "leftSection") return null;

        const sortedItems = [...(section.items || [])].sort(
          (a, b) => a.position - b.position
        );

        return (
          <section
            key={`left-section-${sectionIndex}`}
            className={`about_four ${section?.items[0]?.pageType}`}
          >
            <div className="container">
              {sortedItems.map((item, idx) => {
                const uid = `${sectionIndex}-${idx}-aboutfour`;

                return (
                  <div key={idx} className="about_f_value">
                    {(item.image || item.imageVideo?.length > 0) && (
                      <div
                        className="ab_fo_imgsec"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        {item?.image && (
                          <figure className="shine-effect">
                            <Image
                              src={item.image}
                              alt={
                                item.title
                                  ? item.title.slice(0, 50)
                                  : "About Section"
                              }
                              width={683}
                              height={520}
                              loading="lazy"
                              style={{ width: "100%", height: "auto" }}
                            />
                          </figure>
                        )}

                        <MediaSwiper
                          media={item.imageVideo}
                          uid={uid}
                          width={683}
                          height={520}
                          alt={item.title || "About Section"}
                          mediaStyle={{ width: "100%", height: "auto", objectFit: "cover" }}
                        />
                      </div>
                    )}

                    <div
                      className="ab_f_content"
                      data-aos="fade-up"
                      data-aos-delay="400"
                    >
                      {item.title && (
                        <h3 dangerouslySetInnerHTML={{ __html: item.title }} />
                      )}
                      {item.paragraph?.length > 0 && (
                        <div className="des_group">
                          {item.paragraph.map((p, i) => (
                            <p key={i}>{p.text}</p>
                          ))}
                        </div>
                      )}
                      {item?.linkUrl && (
                        <Link
                          className="read_more_btn"
                          href={item.linkUrl}
                          target="_blank"
                        >
                          {item.linkText}
                        </Link>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        );
      })}
    </>
  );
}