import { getPageSEO } from "@/lib/seo";
import HappeningsClient from "./HappeningsClient";
import Script from "next/script";

export async function generateMetadata() {
  return await getPageSEO("happenings");
}

export default async function Happenings() {
  const seoData = await getPageSEO("about");
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
      <HappeningsClient />
    </>
  );
}
