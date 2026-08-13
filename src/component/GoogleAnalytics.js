"use client";

import { Suspense, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GA_MEASUREMENT_ID = "G-4F2ZKG2HVD";

function GoogleAnalyticsTracker() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;

    const query = searchParams.toString();
    const pagePath = query ? `${pathname}?${query}` : pathname;

    window.gtag("event", "page_view", {
      page_path: pagePath,
      page_location: window.location.href,
      send_to: GA_MEASUREMENT_ID,
    });
  }, [pathname, searchParams]);

  return null;
}

export default function GoogleAnalytics() {
  return (
    <Suspense fallback={null}>
      <GoogleAnalyticsTracker />
    </Suspense>
  );
}