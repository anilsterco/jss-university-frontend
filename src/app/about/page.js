import { getPageSEO } from "@/lib/seo";
import AboutClient from "./AboutClient";
import Script from "next/script";

export async function generateMetadata() {
  return await getPageSEO("about");
}

export default async function AboutPage() {
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
      <AboutClient />
    </>
  );
}
