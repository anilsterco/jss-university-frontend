"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const useHashScroll = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    const scrollToElement = () => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    // small delay
    const timer = setTimeout(scrollToElement, 300);
    return () => clearTimeout(timer);
  }, [pathname]);
};

export default useHashScroll;
