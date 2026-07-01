"use client";

import Script from "next/script";
import { useState } from "react";

export default function ScriptLoader() {
  // Track when core libs are ready before loading dependents
  const [jqueryReady, setJqueryReady] = useState(false);
  const [gsapReady, setGsapReady] = useState(false);

  const coreReady = jqueryReady && gsapReady;

  return (
    <>
      {/*
        ─── Tier 1: Core libraries ───────────────────────────────────────────
        afterInteractive = loaded after hydration, non-blocking.
        jQuery and GSAP do NOT need to block the page render —
        they only need to exist before custom.js runs.
      */}
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

      {/*
        ─── Tier 2: GSAP plugin — only after GSAP core is ready ─────────────
        ScrollTrigger is a GSAP plugin; it must register against the GSAP
        instance, so it must load after gsap.min.js.
      */}
      {gsapReady && (
        <Script
          src="/js/ScrollTrigger.min.js"
          strategy="afterInteractive"
        />
      )}

      {/*
        ─── Tier 3: UI enhancement libs — independent of jQuery/GSAP ────────
        AOS and Swiper have no dependency on jQuery or GSAP.
        lazyOnload = lowest priority, loads during browser idle time.
        Moves them fully off the critical path.
      */}
      <Script src="/js/aos.js" strategy="beforeInteractive" />
      <Script src="/js/swiper-bundle.min.js" strategy="lazyOnload" />
      <Script src="/js/SmoothScroll.min.js" strategy="lazyOnload" />

      {/*
        ─── Tier 4: Custom logic — only after ALL core libs are ready ────────
        custom.js depends on jQuery + GSAP (+ ScrollTrigger by extension),
        so it waits for both onReady callbacks before mounting.
      */}
      {coreReady && (
        <Script
          src="/js/custom.js"
          strategy="afterInteractive"
        />
      )}
    </>
  );
}