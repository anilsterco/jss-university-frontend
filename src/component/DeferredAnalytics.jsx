"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-M7QC44X3";
const GA_MEASUREMENT_ID = "G-4F2ZKG2HVD";

export default function DeferredAnalytics() {
  useEffect(() => {
    let loaded = false;

    const loadScripts = () => {
      if (loaded) return;
      loaded = true;

      // ---- GTM ----
      const gtmScript = document.createElement("script");
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];
        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;
        j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
        f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `;
      document.head.appendChild(gtmScript);

      // ---- gtag.js ----
      const gtagScript = document.createElement("script");
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
      gtagScript.async = true;
      document.head.appendChild(gtagScript);

      window.dataLayer = window.dataLayer || [];
      function gtag() {
        window.dataLayer.push(arguments);
      }
      gtag("js", new Date());
      gtag("config", GA_MEASUREMENT_ID);

      events.forEach((e) => window.removeEventListener(e, loadScripts));
      clearTimeout(fallbackTimer);
    };

    const events = ["scroll", "click", "touchstart", "mousemove", "keydown"];
    events.forEach((e) =>
      window.addEventListener(e, loadScripts, { once: true, passive: true })
    );

    // Fallback: load anyway after 5s if the user never interacts
    // (e.g. they're just reading — analytics should still eventually fire)
    const fallbackTimer = setTimeout(loadScripts, 5000);

    return () => {
      events.forEach((e) => window.removeEventListener(e, loadScripts));
      clearTimeout(fallbackTimer);
    };
  }, []);

  return null;
}