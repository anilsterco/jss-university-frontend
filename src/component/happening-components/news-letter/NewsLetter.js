"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LuLoader } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/config/config";
import "@/styles/custom.style.css";

export default function NewsLetter({ className, programId }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [resolvedProgramId, setResolvedProgramId] = useState(null);

  useEffect(() => {
    if (programId) {
      setResolvedProgramId(programId);
    }
  }, [programId]);

  const buildQueryParams = () => {
    const params = new URLSearchParams();
    if (resolvedProgramId) {
      params.append("school", resolvedProgramId);
    }
    return params.toString();
  };

  // ── Old query (kept as-is) ──
  const { data, isLoading, error } = useQuery({
    queryKey: ["media-coverage", resolvedProgramId],
    queryFn: async () => {
      const queryParams = buildQueryParams();
      const url = `${BASE_URL}happenings/media-coverage${queryParams ? `?${queryParams}` : ""}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch media coverage");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    keepPreviousData: true,
  });

  const galleryData = data || [];

  // ── New query for regulations/policy PDF sections ──
  const {
    data: regulationsData,
    isLoading: regulationsLoading,
    error: regulationsError,
  } = useQuery({
    queryKey: ["regulations-policy"],
    queryFn: async () => {
      const res = await fetch(
        "https://project-demo.in/jss/api/pages/regulations-policy",
      );
      if (!res.ok) throw new Error("Failed to fetch regulations policy");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    keepPreviousData: true,
  });

  const sections =
    regulationsData?.sections?.filter((s) => s.type === "pdf_lists") || [];

  if (regulationsLoading && !regulationsData)
    return (
      <div style={{ height: "100vh", textAlign: "center", marginTop: "5rem" }}>
        <LuLoader />
      </div>
    );

  if (regulationsError) return <div>Error loading regulations policy</div>;

  return (
    <section className={`pdf_list_section`}>
      <div className="container">
        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="pdfs_row">
            {section?.items &&
              section.items.length > 0 &&
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
                          <p>{singlePdf.pdf_type}</p>
                          <Image
                            src="/images/icons/pdf.png"
                            width={20}
                            height={20}
                            alt="pdf"
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </React.Fragment>
              ))}
          </div>
        ))}
      </div>
    </section>
  );
}
