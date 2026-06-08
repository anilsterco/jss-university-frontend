import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function PdfLists({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "pdf_lists":
        return (
          <div key={sectionIndex} className="pdfs_row">
            {section?.items?.map((item, idx) => (
              <React.Fragment key={idx}>
                {item?.mainTitle && (
                  <h3 className="mainTitle">{item.mainTitle}</h3>
                )}

                <ul>
                  {item?.pdfs?.map((singlePdf, pdfIdx) => {
                    const fileUrl =
                      singlePdf?.pdf ||
                      singlePdf?.url ||
                      singlePdf?.link ||
                      singlePdf?.pdf_url || 
                      "";

                    const isPdf =
                      fileUrl.toLowerCase().includes(".pdf");

                    return (
                      <li key={pdfIdx}>
                        <Link
                          href={fileUrl}
                          target={singlePdf?.pdf ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                        >
                          <p>{singlePdf?.pdf_type}</p>

                          {singlePdf?.pdf && (
                              <Image
                            src={
                              isPdf
                                ? "/images/icons/pdf.png"
                                : "/images/icons/link.png"
                            }
                            width={20}
                            height={20}
                            alt={isPdf ? "pdf" : "link"}
                          />
                          )}

                          
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </React.Fragment>
            ))}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="pdf_list_section">
      <div className="container">
        {data?.length > 0 ? (
          data.map((section, index) =>
            renderSection(section, index)
          )
        ) : (
          <div className="abt_cntnt" data-aos="fade-up">
            <p>There is no data!</p>
          </div>
        )}
      </div>
    </section>
  );
}