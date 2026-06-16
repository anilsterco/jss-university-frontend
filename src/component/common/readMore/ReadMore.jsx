"use client";

import React, { useState, useRef, useLayoutEffect } from "react";
import styles from './Readmore.module.css'

const LINE_CLAMP = 12; 

export default function ReadMore({ html, className = "" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const lineHeight = parseFloat(getComputedStyle(el).lineHeight) || 20;
    const maxCollapsedHeight = lineHeight * LINE_CLAMP;

    setIsOverflowing(el.scrollHeight > maxCollapsedHeight + 1);
  }, [html]);

  if (!html) return null;

  return (
    <div className={`${styles.readMoreWrapper} ${className}`}>
      <div
        ref={contentRef}
        className={`${styles.contentBox} ${
          !isExpanded && isOverflowing ? styles.clamped : ""
        }`}
        style={
          !isExpanded && isOverflowing
            ? { "--line-clamp": LINE_CLAMP }
            : undefined
        }
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