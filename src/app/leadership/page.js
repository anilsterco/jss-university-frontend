import { getPageSEO } from "@/lib/seo";
import LeadershipClient from "./LeadershipClient";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function Leadership() {
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

      <LeadershipClient />
    </>
  );
}
