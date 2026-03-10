import TabSection from "@/component/sections/TabSection";
import { getPageSEO } from "@/lib/seo";
import Script from "next/script";
import TestimonialDetail from "../TestimonialDetail";

export async function generateMetadata() {
  return await getPageSEO("happenings");
}

export default async function TestimonialDe() {
  const seoData = await getPageSEO("testimonial");
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
      <TestimonialDetail />
    </>
  );
}
