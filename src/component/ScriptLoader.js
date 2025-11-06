'use client'

import Script from 'next/script'

export default function ScriptLoader() {
  return (
    <>
      {/* Only critical scripts that block interactivity */}
      <Script src="/js/jquery.min.js" strategy="beforeInteractive" />
      <Script src="/js/gsap.min.js" strategy="beforeInteractive" />
      
      {/* Non-critical scripts */}
      <Script src="/js/aos.js" strategy="afterInteractive" />
      <Script src="/js/swiper-bundle.min.js" strategy="afterInteractive" />
      <Script src="/js/smoothscroll.min.js" strategy="afterInteractive" />
      <Script src="/js/ScrollTrigger.min.js" strategy="afterInteractive" />
      <Script src="/js/custom.js" strategy="afterInteractive" />
    </>
  )
}