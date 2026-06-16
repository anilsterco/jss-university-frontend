"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import styles from './Readmore.module.css'

const MAX_HEIGHT = 300; // px

export default function ReadMore({ html, className = "" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    setIsOverflowing(el.scrollHeight > MAX_HEIGHT);
  }, [html]);

  if (!html) return null;

  return (
    <div className={`${styles.readMoreWrapper} ${className}`}>
      <div
        ref={contentRef}
        className={`${styles.contentBox} ${
          !isExpanded && isOverflowing ? styles.clamped : ""
        }`}
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {isOverflowing && (
        <button
          type="button"
          className={`common_read_more_btn`}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? "Read Less" : "Read More"}
          <img
            alt="arrow"
            loading="lazy"
            width="18"
            height="18"
            src="/images/icons/read_more.png"
            className={`${styles.arrowIcon} ${isExpanded ? styles.arrowUp : ""}`}
          />
        </button>
      )}
    </div>
  );
}