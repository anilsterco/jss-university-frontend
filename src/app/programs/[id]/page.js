import { getPageSEO } from "@/lib/seo";
import ProgramDetailClient from "./ProgramDetailClient";

export async function generateMetadata({ params }) {
  // const { id } = await params;
  return await getPageSEO();
}

export default async function ProgramDetail({ params }) {
  const seoData = await getPageSEO(params);
  const { id } = await params;

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
      <ProgramDetailClient params={id} />
    </>
  );
}
