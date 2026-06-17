"use client";

import React, { useState, useRef, useLayoutEffect, useCallback, useEffect } from "react";
import styles from "./Readmore.module.css";

const MAX_HEIGHT = 400;

const NO_LINE_CLAMP_TAGS = new Set([
  "UL",
  "OL",
  "TABLE",
  "FIGURE",
  "IMG",
  "VIDEO",
  "IFRAME",
  "HR",
]);

function getLineHeight(el) {
  const style = getComputedStyle(el);
  const lineHeight = parseFloat(style.lineHeight);
  if (Number.isFinite(lineHeight) && lineHeight > 0) return lineHeight;
  const fontSize = parseFloat(style.fontSize);
  return Number.isFinite(fontSize) ? fontSize * 1.5 : 24;
}

function clearLineClamp(el) {
  el.style.removeProperty("display");
  el.style.removeProperty("-webkit-box-orient");
  el.style.removeProperty("overflow");
  el.style.removeProperty("-webkit-line-clamp");
  el.style.removeProperty("line-clamp");
}

function applyLineClampToElement(el, maxHeight) {
  clearLineClamp(el);
  const maxLines = Math.max(1, Math.floor(maxHeight / getLineHeight(el)));
  el.style.display = "-webkit-box";
  el.style.webkitBoxOrient = "vertical";
  el.style.overflow = "hidden";
  el.style.webkitLineClamp = String(maxLines);
}

function showBlock(block) {
  block.style.display = "";
  block.classList.remove(styles.hiddenBlock);
  block.removeAttribute("data-readmore-hidden");
  clearLineClamp(block);
  block.querySelectorAll("[data-readmore-hidden]").forEach((child) => {
    child.style.display = "";
    child.removeAttribute("data-readmore-hidden");
  });
}

function hideBlock(block) {
  block.style.display = "none";
  block.classList.add(styles.hiddenBlock);
  block.setAttribute("data-readmore-hidden", "");
  clearLineClamp(block);
}

function resetClampState(container) {
  clearLineClamp(container);
  Array.from(container.children).forEach(showBlock);
}

function getBlocks(container) {
  return Array.from(container.children).filter(
    (child) => child.nodeType === Node.ELEMENT_NODE
  );
}

function applyListClamp(listEl, container, maxHeight) {
  const items = Array.from(listEl.children).filter(
    (child) => child.tagName === "LI"
  );

  if (items.length === 0) {
    hideBlock(listEl);
    return;
  }

  showBlock(listEl);
  let fitCount = 0;

  for (let i = 0; i < items.length; i++) {
    items.forEach((item, index) => {
      item.style.display = index <= i ? "" : "none";
    });

    if (container.scrollHeight <= maxHeight) {
      fitCount = i + 1;
    } else {
      break;
    }
  }

  items.forEach((item, index) => {
    if (index < fitCount) {
      item.style.display = "";
      item.removeAttribute("data-readmore-hidden");
    } else {
      item.style.display = "none";
      item.setAttribute("data-readmore-hidden", "");
    }
  });

  if (fitCount === 0) {
    hideBlock(listEl);
  }
}

function applyBlockClamp(container, maxHeight) {
  resetClampState(container);

  if (container.scrollHeight <= maxHeight) {
    return false;
  }

  const blocks = getBlocks(container);

  if (blocks.length === 0) {
    applyLineClampToElement(container, maxHeight);
    return true;
  }

  let fitCount = 0;

  for (let i = 0; i < blocks.length; i++) {
    blocks.forEach((block, index) => {
      if (index <= i) {
        showBlock(block);
      } else {
        hideBlock(block);
      }
    });

    if (container.scrollHeight <= maxHeight) {
      fitCount = i + 1;
    } else {
      break;
    }
  }

  resetClampState(container);

  for (let i = 0; i < fitCount; i++) {
    showBlock(blocks[i]);
  }

  for (let i = fitCount; i < blocks.length; i++) {
    hideBlock(blocks[i]);
  }

  if (fitCount === 0) {
    const first = blocks[0];
    if (first.tagName === "UL" || first.tagName === "OL") {
      applyListClamp(first, container, maxHeight);
    } else if (!NO_LINE_CLAMP_TAGS.has(first.tagName)) {
      showBlock(first);
      applyLineClampToElement(first, maxHeight);
    }
    for (let i = 1; i < blocks.length; i++) {
      hideBlock(blocks[i]);
    }
    return true;
  }

  if (fitCount >= blocks.length) {
    return true;
  }

  const nextBlock = blocks[fitCount];

  if (nextBlock.tagName === "UL" || nextBlock.tagName === "OL") {
    applyListClamp(nextBlock, container, maxHeight);
  } else {
    const remaining = maxHeight - container.scrollHeight;
    if (
      remaining >= getLineHeight(nextBlock) &&
      !NO_LINE_CLAMP_TAGS.has(nextBlock.tagName)
    ) {
      showBlock(nextBlock);
      applyLineClampToElement(nextBlock, remaining);
    } else {
      hideBlock(nextBlock);
    }
  }

  return true;
}

export default function ReadMore({ html, className = "" }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isOverflowing, setIsOverflowing] = useState(false);
  const contentRef = useRef(null);
  const htmlRef = useRef(null);

  useEffect(() => {
    setIsExpanded(false);
  }, [html]);

  const syncContent = useCallback(() => {
    const el = contentRef.current;
    if (!el || !html) return;

    if (htmlRef.current !== html) {
      el.innerHTML = html;
      htmlRef.current = html;
    }

    if (isExpanded) {
      resetClampState(el);
      setIsOverflowing(el.scrollHeight > MAX_HEIGHT);
      return;
    }

    resetClampState(el);
    const overflowing = applyBlockClamp(el, MAX_HEIGHT);
    setIsOverflowing(overflowing);
  }, [html, isExpanded]);

  useLayoutEffect(() => {
    syncContent();
  }, [syncContent]);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const observer = new ResizeObserver(() => {
      syncContent();
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [syncContent]);

  if (!html) return null;

  return (
    <div className={`${styles.readMoreWrapper} ${className} happen_descr`}>
      <div ref={contentRef} className={styles.contentBox} />

      {isOverflowing && (
        <button
          type="button"
          className="common_read_more_btn"
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
