"use client"
import React, { useState } from "react";

export default function AccordionTabs({ data, heading }) {
  const sortedData = data
    ? [...data].sort((a, b) => (a?.position ?? 0) - (b?.position ?? 0))
    : [];

  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="faqList accordion_tabs_lists">
      {sortedData.map((item, idx) => (
        <details
          key={item.item_uuid}
          className="faqItem"
          open={openIndex === idx}
          onToggle={(e) => {
            if (e.target.open) handleToggle(idx);
          }}
        >
          <summary className="faqQuestion">
            <span className="faq_heading">{item.heading}</span>
            <span className="icon"></span>
          </summary>

          <div className="faqAnswer">
            <ul className="pdf-list">
              {item.pdf_group?.map((pdf, idx) => (
                <li key={idx} className="pdf-list-item">
                  <a
                    href={pdf.pdfFile}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf-link"
                  >
                    {/* <span className="pdf-icon">📄</span> */}
                    <span className="pdf-name">{pdf.pdfName}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      ))}
    </div>
  );
}