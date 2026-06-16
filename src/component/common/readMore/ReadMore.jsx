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

    // Force a clean (unclamped) measurement of natural content height
    const prevWebkitLineClamp = el.style.webkitLineClamp;
    const prevDisplay = el.style.display;
    const prevMaxHeight = el.style.maxHeight;
    const prevOverflow = el.style.overflow;

    el.style.webkitLineClamp = "unset";
    el.style.display = "block";
    el.style.maxHeight = "none";
    el.style.overflow = "visible";

    const computedLineHeight = parseFloat(getComputedStyle(el).lineHeight);
    const fontSize = parseFloat(getComputedStyle(el).fontSize) || 16;
    // Fallback if lineHeight is "normal" (NaN): approximate as 1.5x font size
    const lineHeight = !isNaN(computedLineHeight)
      ? computedLineHeight
      : fontSize * 1.5;

    const naturalHeight = el.scrollHeight;
    const maxCollapsedHeight = lineHeight * LINE_CLAMP;

    // Restore styles (React state below will reapply clamped class as needed)
    el.style.webkitLineClamp = prevWebkitLineClamp;
    el.style.display = prevDisplay;
    el.style.maxHeight = prevMaxHeight;
    el.style.overflow = prevOverflow;

    setIsOverflowing(naturalHeight > maxCollapsedHeight + 1);
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