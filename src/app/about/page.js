import { getPageSEO } from "@/lib/seo";
import AboutClient from "./AboutClient";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function AboutPage() {
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
      <AboutClient />
    </>
  );
}
