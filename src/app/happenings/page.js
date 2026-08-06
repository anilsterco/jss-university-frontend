import { getPageSEO } from "@/lib/seo";
import HappeningsClient from "./HappeningsClient";
import Script from "next/script";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function Happenings() {
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
      <h1 style={{
        display:'none'
      }}>Happenings</h1>
      <HappeningsClient />
    </>
  );
}
