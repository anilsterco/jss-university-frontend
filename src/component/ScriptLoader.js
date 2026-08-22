"use client";

import Script from "next/script";
import { useState } from "react";

export default function ScriptLoader() {
  const [aosReady, setAosReady] = useState(false);

  return (
    <>
      <Script
        src="/js/aos.js"
        strategy="afterInteractive"
        onReady={() => setAosReady(true)}
      />

      {aosReady && (
        <Script src="/js/custom.js" strategy="afterInteractive" />
      )}

      <Script src="/js/SmoothScroll.min.js" strategy="lazyOnload" />
    </>
  );
}
