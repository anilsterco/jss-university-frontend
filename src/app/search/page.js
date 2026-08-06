// app/search/page.js

import { getPageSEO } from "@/lib/seo";
import SearchClient from "./SeachClient";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function SearchPage({ searchParams }) {
  const seoData = await getPageSEO();
  const { q } = await searchParams;
  const query = q || "";

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
      <h1 style={{
        display:'none'
      }}>Search</h1>
      <SearchClient query={query} />
    </>
  );
}
