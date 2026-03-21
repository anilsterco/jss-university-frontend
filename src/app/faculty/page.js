import { getPageSEO } from "@/lib/seo";
import FacultyClient from "./FacultyClient";
import Script from "next/script";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function Faculty() {
  const seoData = await getPageSEO();
  return (
    <>
      {seoData?.schema && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.schema),
          }}
          strategy="beforeInteractive"
        />
      )}
      <FacultyClient />
    </>
  );
}
