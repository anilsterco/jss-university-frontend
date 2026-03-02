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
                <ul>
                  {item.pdfs.map((singlePdf, pdfIdx) => (
                    <li>
                      <Link href={singlePdf.pdf} target="_blank">
                        <Image
                          src="/images/icons/pdf.png"
                          width={15}
                          height={20}
                        />
                        <p>{singlePdf.pdf_type}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
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
