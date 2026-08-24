// component/DeferredThirdPartyScripts.js
"use client";
import { useEffect } from "react";

function loadScript(src) {
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
}

function loadGTM() {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
  loadScript("https://www.googletagmanager.com/gtm.js?id=GTM-M7QC44X3");
}

function loadGA() {
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", "G-4F2ZKG2HVD");
  loadScript("https://www.googletagmanager.com/gtag/js?id=G-4F2ZKG2HVD");
}

function loadClarity() {
  (function (c, l, a, r, i, t, y) {
    c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments); };
    t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
    y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
  })(window, document, "clarity", "script", "x8xiia17cu");
}

let alreadyLoaded = false;
function loadAll() {
  if (alreadyLoaded) return;
  alreadyLoaded = true;
  loadGTM();
  loadGA();
  loadClarity();
}

export default function DeferredThirdPartyScripts() {
  useEffect(() => {
    const events = ["mousemove", "scroll", "keydown", "touchstart", "click"];
    const onInteract = () => {
      loadAll();
      events.forEach((e) => window.removeEventListener(e, onInteract));
      clearTimeout(fallback);
    };
    events.forEach((e) =>
      window.addEventListener(e, onInteract, { passive: true, once: true })
    );
    // Safety net: load anyway after 5s even with zero interaction
    const fallback = setTimeout(loadAll, 5000);

    return () => {
      events.forEach((e) => window.removeEventListener(e, onInteract));
      clearTimeout(fallback);
    };
  }, []);

  return null;
}