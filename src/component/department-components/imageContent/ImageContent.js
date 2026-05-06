"use client";
import Image from "next/image";
import styles from "./imageContent.module.css";
import Link from "next/link";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "swiper/css/navigation";
import "swiper/css";

export default function ImageContent({ data, id, type, extraClass }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = data.desc.length > 2;

  const visibleMessages = expanded ? data.desc : data.desc.slice(0, 2);

  return (
    <div
      key={id}
      className={`singleImageContent ${styles.singleImageContent} ${styles[data.type]}`}
    >
      <div
        className={`align-items-center row ${type == "bg_image_content" || data?.type == "reverse_bg_white" ? "flex-row-reverse" : ""} ${data?.type !== "facilities" && id % 2 !== 0 && "flex-row-reverse"}`}
      >
        <div className="col-lg-6 col-md-12 px_3xl_1_2 rep_border px-0">
          {data?.imageVideo?.length > 0 ? (
            data.imageVideo.length === 1 ? (
              // Single media item
              <figure className="shine-effect">
                {data.imageVideo[0].video ? (
                  <video
                    src={data.imageVideo[0].video}
                    width={683}
                    height={520}
                    autoPlay
                    muted
                    loop
                    playsInline
                    style={{
                      width: "100%",
                      // height: "auto",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <Image
                    src={data.imageVideo[0].image}
                    alt={data.title ? data.title.slice(0, 50) : "Research Lab"}
                    width={683}
                    height={520}
                    style={{
                      width: "100%",
                      // height: "auto",
                      objectFit: "cover",
                    }}
                  />
                )}
              </figure>
            ) : (
              // Multiple media items → Swiper
              <div
                className="research_swiper_wrapper"
                style={{ position: "relative" }}
              >
                <Swiper
                  modules={[Autoplay, Navigation]}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                  navigation={{
                    nextEl: `.swiper-next-image-content`,
                    prevEl: `.swiper-prev-image-content`,
                  }}
                  loop={true}
                  slidesPerView={1}
                >
                  {data.imageVideo.map((media, mediaIdx) => (
                    <SwiperSlide key={mediaIdx}>
                      {media.video ? (
                        <video
                          src={media.video}
                          width={683}
                          height={520}
                          autoPlay
                          muted
                          loop
                          playsInline
                          style={{
                            width: "100%",
                            // height: "auto",
                            objectFit: "cover",
                          }}
                        />
                      ) : (
                        <Image
                          src={media.image}
                          alt={
                            data.title
                              ? data.title.slice(0, 50)
                              : "Research Lab"
                          }
                          width={683}
                          height={520}
                          style={{
                            width: "100%",
                            // height: "auto",
                            objectFit: "cover",
                          }}
                        />
                      )}
                    </SwiperSlide>
                  ))}
                </Swiper>

                {/* Unique nav buttons per slide instance */}
                <button
                  type="button"
                  className={`swiper-button-prev swiper-prev-image-content`}
                  aria-label="Previous slide"
                >
                  <MdChevronLeft />
                </button>
                <button
                  type="button"
                  className={`swiper-button-next swiper-next-image-content`}
                  aria-label="Next slide"
                >
                  <MdChevronRight />
                </button>
              </div>
            )
          ) : data?.thumbnailImage || data.image ? (
            // Case 2: fallback to item.image
            <figure className="shine-effect">
              <Image
                src={data.thumbnailImage || data.image || null}
                width={683}
                height={520}
                alt=""
                style={
                  {
                    // width: "100%",
                    // height: "auto",
                    // objectFit: "cover",
                  }
                }
              />
            </figure>
          ) : null}
        </div>
        <div className={`col-lg-6 col-md-12 px_3xl_1_2 `}>
          <div
            className={`content_col ${styles.content_col} ${type
              ?.split(" ")
              ?.map((cls) => styles[cls] || "")
              .join(
                " ",
              )} ${data?.type && styles[data.type]} ${data?.type !== "facilities" && id % 2 !== 0 && styles.odd}`}
          >
            {data?.heading && (
              <h4 className={`${styles.heading} head`}>{data.heading}</h4>
            )}
            {data?.headingPara && (
              <div className="heading_para_group">
                {data?.headingPara?.map((singlePara, paraIdx) => (
                  <p key={paraIdx} className={`${styles.headingPara} head`}>
                    {singlePara.para}
                  </p>
                ))}
              </div>
            )}
            {data?.subHeading && (
              <h5 className={styles.subHeading}>{data.subHeading}</h5>
            )}
            {data.desc.length > 0 && (
              <div className={`${styles.descGroup} desc_group`}>
                {visibleMessages?.map((singleDesc, descIdx) => (
                  <p key={descIdx} className={styles.desc}>
                    {singleDesc.desc}
                  </p>
                ))}
              </div>
            )}

            {hasMore && (
              <button
                className={`${styles.arrowLink} read_more_button`}
                onClick={() => setExpanded((prev) => !prev)}
              >
                {expanded ? "Read Less" : "Read More"}
                <Image
                  src="/images/icons/read_more.png"
                  alt="arrow"
                  width={22}
                  height={22}
                  style={{
                    transform: expanded ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.3s ease",
                  }}
                />
              </button>
            )}

            {data?.pdfs && data.pdfs.length > 0 && (
              <div className={styles.pdf_group}>
                {data.pdfs.map((singlePdf, pdfIdx) => (
                  <Link
                    href={
                      singlePdf?.pdfFile
                        ? singlePdf.pdfFile
                        : singlePdf?.pdfLink
                          ? singlePdf?.pdfLink
                          : "#"
                    }
                    target="_blank"
                    key={pdfIdx}
                  >
                    <Image
                      src="/images/icons/pdf.png"
                      height={20}
                      width={15}
                      alt="pdfimage"
                    />
                    {singlePdf.pdfName}
                  </Link>
                ))}
              </div>
            )}
            {data?.listing && data.listing.length > 0 && (
              <ul className={styles.ul}>
                {data.listing.map((singleList, listIdx) =>
                  singleList.bold || singleList.list ? (
                    <li key={listIdx}>
                      {singleList?.bold && <strong>{singleList.bold}: </strong>}
                      {singleList.list}
                    </li>
                  ) : (
                    <li key={listIdx}>{singleList.listing}</li>
                  ),
                )}
              </ul>
            )}
            {data?.bottomDesc && (
              <p className={styles.bottomDesc}>{data.bottomDesc}</p>
            )}
            {data?.extraInfo && (
              <h5 className={styles.extraInfo}>{data.extraInfo}</h5>
            )}
            {data?.extraPara && (
              <h5 className={styles.extraPara}>{data.extraPara}</h5>
            )}

            {data?.linkText &&
              data?.linkText.length > 0 &&
              data.linkText.map((link, linkIdx) => (
                <Link
                  key={linkIdx}
                  href={link?.linkUrl || ""}
                  target="_blank"
                  className="exam_link"
                >
                  {link?.textLink}
                </Link>
              ))}
          </div>
        </div>

        <div className="inner_bottom_data" dangerouslySetInnerHTML={{__html:data?.bottomHTML}} />
      </div>
    </div>
  );
}
