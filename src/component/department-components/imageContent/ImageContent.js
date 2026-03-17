import Image from "next/image";
import styles from "./imageContent.module.css";
import Link from "next/link";

export default function ImageContent({ data, id, type, extraClass }) {
  return (
    <div
      key={id}
      className={`singleImageContent ${styles.singleImageContent} ${styles[data.type]}`}
    >
      <div
        className={`align-items-center row ${type == "bg_image_content" || data?.type == "reverse_bg_white" ? "flex-row-reverse" : ""} ${data?.type !== "facilities" && id % 2 !== 0 && "flex-row-reverse"}`}
      >
        <div className="col-lg-6 col-md-12 px_3xl_1_2 rep_border">
          <Image
            src={data.thumbnailImage || data.image || null}
            width={683}
            height={520}
            alt=""
            style={{
              width: "100%",
              height: "auto",
            }}
          />
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
            {data.desc.length > 0 && (
              <div className={`${styles.descGroup} desc_group`}>
                {data.desc.map((singleDesc, descIdx) => (
                  <p key={descIdx} className={styles.desc}>
                    {singleDesc.desc}
                  </p>
                ))}
              </div>
            )}

            {data?.pdfs && data.pdfs.length > 0 && (
              <div className={styles.pdf_group}>
                {data.pdfs.map((singlePdf, pdfIdx) => (
                  <Link
                    href={singlePdf.pdfLink ?? ""}
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
           
            
             {data?.subHeading && (
              <h5 className={styles.subHeading}>{data.subHeading}</h5>
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
          </div>
        </div>
      </div>

    </div>
  );
}
