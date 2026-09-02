"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import styles from "./imageContent.module.css";
import MediaSwiper from "@/component/common/MediaSwiper";

export default function ImageContent({ data, id, type, extraClass }) {
  const [expanded, setExpanded] = useState(false);

  const descList = Array.isArray(data?.desc) ? data.desc : [];
  const hasMore = descList.length > 2;
  const visibleMessages = expanded ? descList : descList.slice(0, 2);

  const uid = `${id}-imagecontent`;

  return (
    <div
      key={id}
      className={`singleImageContent ${data?.type} ${styles.singleImageContent} ${styles[data.type]} aos-init aos-animate`}
    >
      <div
        className={`row ${
          type == "bg_image_content" || data?.type == "reverse_bg_white"
            ? "flex-row-reverse"
            : ""
        } ${data?.type !== "facilities" && id % 2 !== 0 && "flex-row-reverse"}`}
      >
        <div className="col-lg-6 col-md-12 px_3xl_1_2 rep_border px-0">
          <MediaSwiper
            media={data?.imageVideo}
            uid={uid}
            width={683}
            height={520}
            alt={data.title || data.heading || "Image"}
            fallbackImage={data.thumbnailImage || data.image}
            imgClassName="img-fluid"
            mediaStyle={{ width: "100%", objectFit: "cover" }}
          />
        </div>

        <div className="col-lg-6 col-md-12 px_3xl_1_2 ">
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
            {descList.length > 0 && (
              <div className={`${styles.descGroup} desc_group`}>
                {visibleMessages.map((singleDesc, descIdx) => (
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

        {data?.bottomHTML && (
          <div
            className="inner_bottom_data"
            dangerouslySetInnerHTML={{ __html: data.bottomHTML }}
          />
        )}
      </div>
    </div>
  );
}