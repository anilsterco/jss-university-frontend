"use client";
import styles from "./notice-announcement.module.css";
import React, { useState, useEffect } from "react";
import { FaFilePdf } from "react-icons/fa";
import { LuLoader } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { BASE_URL } from "@/config/config.mjs";

export default function NoticeAnnouncement({ programId }) {
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

  const { data, isLoading, error } = useQuery({
    queryKey: ["press-release", resolvedProgramId],
    queryFn: async () => {
      const queryParams = buildQueryParams();
      const url = `${BASE_URL}happenings/press-release${queryParams ? `?${queryParams}` : ""}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch press release");
      return res.json();
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    keepPreviousData: true,
  });

  const documentsData = data || [];

  const handleDocumentClick = (pdfUrl) => {
    window.open(pdfUrl, "_blank", "noopener,noreferrer");
  };

  if (isLoading && !data)
    return (
      <div style={{ height: "100vh", textAlign: "center", marginTop: "5rem" }}>
        <LuLoader />
      </div>
    );

  if (error) return <div>Error loading documents</div>;

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.documentsList}>
          {documentsData.length > 0 ? (
            documentsData.map((doc) => (
              <div
                key={doc.id}
                className={styles.documentItem}
                onClick={() => handleDocumentClick(doc.pdfUrl)}
              >
                <div className={styles.leftBorder}></div>
                <div className={styles.documentContent}>
                  <h3 className={styles.documentTitle}>{doc.title}</h3>
                  <p className={styles.documentDate}>{doc.date}</p>
                </div>
                <div className={styles.pdfIcon}>
                  <FaFilePdf color="#e74c3c" size={20} />
                </div>
              </div>
            ))
          ) : (
            <div style={{ textAlign: "center", marginTop: "5rem" }}>
              No Documents Found
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
