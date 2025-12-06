import { getPageSEO } from "@/lib/seo";
import ProgramDetailClient from "./ProgramDetailClient";
import Script from "next/script";

export async function generateMetadata({ params }) {
  const { id } = await params;
  return await getPageSEO(id);
}

export default async function ProgramDetail({ params }) {
  const seoData = await getPageSEO(params);
  const { id } = await params;
 
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
      <ProgramDetailClient params={id}/>
     
    </>
  );
}
