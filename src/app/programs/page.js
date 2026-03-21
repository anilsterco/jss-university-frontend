import { getPageSEO } from "@/lib/seo";
import { Suspense } from "react";
import ProgramClient from "./ProgramClient";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function Program() {
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

      <Suspense fallback={<div>Loading...</div>}>
        <ProgramClient />
      </Suspense>
    </>
  );
}
