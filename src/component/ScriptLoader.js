import Script from "next/script";

export default function ScriptLoader() {
  return (
    <>
        <Script src="/js/custom.js" strategy="afterInteractive" />
      <Script src="/js/SmoothScroll.min.js" strategy="lazyOnload" />
    </>
  );
}
