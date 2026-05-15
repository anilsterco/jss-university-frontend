"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, Suspense, useCallback } from "react";

const GA_MEASUREMENT_ID = "G-4F2ZKG2HVD";

function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const sendPageView = useCallback((pagePath) => {
    // Retry until gtag is available (handles afterInteractive delay)
    if (typeof window.gtag !== "function") {
      const timer = setTimeout(() => sendPageView(pagePath), 300);
      return () => clearTimeout(timer);
    }

    window.gtag("event", "page_view", {
      page_location: window.location.href,
      page_path: pagePath,
      send_to: GA_MEASUREMENT_ID,
    });
  }, []);

  useEffect(() => {
    if (!pathname) return;

    const query = searchParams?.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    return sendPageView(pagePath);
  }, [pathname, searchParams, sendPageView]);

  return null;
}

export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsTracker />
    </Suspense>
  );
}