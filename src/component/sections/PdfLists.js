import React from "react";
import HODMessage from "../department-components/hod-message-component/HodMessageComponent";
import Image from "next/image";
import Link from "next/link";

export default function PdfLists({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "pdf_lists":
        return (
          <div key={sectionIndex} className="pdfs_row">
            {section?.items &&
              section.items.length >= -1 &&
              section.items.map((item, idx) => (
                <React.Fragment key={idx}>
                  {item?.mainTitle && (
                    <h3 className="mainTitle">{item.mainTitle}</h3>
                  )}
                  <ul>
                    {item.pdfs.map((singlePdf, pdfIdx) => (
                      <li key={pdfIdx}>
                        <Link
                          href={singlePdf?.pdf ? singlePdf.pdf : ""}
                          target="_blank"
                        >
                          <Image
                            src="/images/icons/pdf.png"
                            width={15}
                            height={20}
                            alt="pdf"
                          />
                          <p>{singlePdf.pdf_type}</p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
          </div>
        );
    }
  };

  return (
    <section className="pdf_list_section">
      <div className="container">
        {data && data.length > 0 ? (
          data.map((section, index) => renderSection(section, index))
        ) : (
          <div className="abt_cntnt" data-aos="fade-up">
            <p>There is no data!</p>
          </div>
        )}
      </div>
    </section>
  );
}
