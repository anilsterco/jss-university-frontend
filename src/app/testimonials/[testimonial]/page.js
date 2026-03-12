import TabSection from "@/component/sections/TabSection";
import { getPageSEO } from "@/lib/seo";
import Script from "next/script";
import TestimonialDetail from "../TestimonialDetail";
import { BASE_URL } from "@/config/config";

export async function generateMetadata() {
  return await getPageSEO("happenings");
}

export default async function TestimonialDe({ params }) {
  const { testimonial } = await params;
  const seoData = await getPageSEO("testimonial");

  const res = await fetch(`${BASE_URL}testimonials/${testimonial}`, {
    cache: "no-store",
  });

  if (!res.ok) return <div>Testimonial not found.</div>;

  const json = await res.json();
  const data = json.data;

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
      <TestimonialDetail params={testimonial} data={data} />
    </>
  );
}
