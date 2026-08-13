"use client";

import Script from "next/script";
import { useState } from "react";

export default function ScriptLoader() {

  const [jqueryReady, setJqueryReady] = useState(false);
  const [gsapReady, setGsapReady] = useState(false);
  const [scrollTriggerReady, setScrollTriggerReady] = useState(false);
  const [aosReady, setAosReady] = useState(false);

  const allCoreReady =
    jqueryReady && gsapReady && scrollTriggerReady && aosReady;

  return (
    <>
    
      <Script
        src="/js/jquery.min.js"
        strategy="afterInteractive"
        onReady={() => setJqueryReady(true)}
      />
      <Script
        src="/js/gsap.min.js"
        strategy="afterInteractive"
        onReady={() => setGsapReady(true)}
      />
      <Script
        src="/js/aos.js"
        strategy="afterInteractive"
        onReady={() => setAosReady(true)}
      />

    
      {gsapReady && (
        <Script
          src="/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
          onReady={() => setScrollTriggerReady(true)}
        />
      )}

    
      <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
      <Script src="/js/SmoothScroll.min.js" strategy="lazyOnload" />

      {allCoreReady && (
        <Script src="/js/custom.js" strategy="afterInteractive" />
      )}
    </>
  );
}