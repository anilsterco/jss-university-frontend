import { getPageSEO } from "@/lib/seo";
import ProgramClient from "./ProgramClient";
import Script from "next/script";
import { Suspense } from "react";

export async function generateMetadata() {
  return await getPageSEO("program");
}

export default async function Program() {
  const seoData = await getPageSEO("program");

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
    <Suspense fallback={<div>Loading...</div>}>
      <ProgramClient />
    </Suspense>
    </>
  );
}
