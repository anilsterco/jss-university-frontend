import { getPageSEO } from "@/lib/seo";
import Script from "next/script";
import TestimonialClient from "./TestimonialClient";

export async function generateMetadata() {
  return await getPageSEO("faculty");
}

export default async function Testimonial() {
  const seoData = await getPageSEO("testimonials");
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
      <TestimonialClient />
    </>
  );
}
