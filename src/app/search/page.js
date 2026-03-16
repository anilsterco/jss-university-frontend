// app/search/page.js

import { getPageSEO } from "@/lib/seo";
import Script from "next/script";
import SearchClient from "./SeachClient";

export async function generateMetadata() {
  return await getPageSEO("search");
}

export default async function SearchPage({ searchParams }) {
  const seoData = await getPageSEO("search");
  const { q } = await searchParams;
  const query = q || "";

  console.log("search query", query);

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
      <SearchClient query={query} />
    </>
  );
}
