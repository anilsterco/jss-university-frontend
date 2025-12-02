import { getPageSEO } from "@/lib/seo";
import FacultyClient from "./FacultyClient";
import Script from "next/script";

export async function generateMetadata() {
  return await getPageSEO("faculty");
}

export default async function Faculty() {
  const seoData = await getPageSEO("faculty");
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
      <FacultyClient />
    </>
  );
}
