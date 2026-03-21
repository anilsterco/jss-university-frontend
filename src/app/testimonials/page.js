import { getPageSEO } from "@/lib/seo";
import TestimonialClient from "./TestimonialClient";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function Testimonial() {
  const seoData = await getPageSEO();
  return (
    <>
      {seoData?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.schema),
          }}
        />
      )}
      <TestimonialClient />
    </>
  );
}
