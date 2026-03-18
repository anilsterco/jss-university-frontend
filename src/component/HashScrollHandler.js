"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const HashScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    const hash = window.location.hash;
    console.log("path hash", hash);
    if (!hash) return;

    const timer = setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

export default HashScrollHandler;
