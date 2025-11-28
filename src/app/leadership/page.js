import { getPageSEO } from "@/lib/seo";
import LeadershipClient from "./LeadershipClient";
import Script from "next/script";

export async function generateMetadata() {
  return await getPageSEO("leadership");
}

export default async function Leadership() {
  const seoData = await getPageSEO("leadership");
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
      <LeadershipClient />
    </>
  );
}
