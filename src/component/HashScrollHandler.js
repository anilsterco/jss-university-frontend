"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

const scrollToHash = () => {
  const hash = window.location.hash;
  if (!hash) return;

  const timer = setTimeout(() => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, 300);

  return timer;
};

const HashScrollHandler = () => {
  const pathname = usePathname();

  useEffect(() => {
    const timer = scrollToHash();
    return () => clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return null;
};

export default HashScrollHandler;
