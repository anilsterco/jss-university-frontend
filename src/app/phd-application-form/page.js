import PhDApplicationForm from "@/component/common/Phd-form/PhDApplicationForm";
import { getPageSEO } from "@/lib/seo";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function Page() {
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
      <PhDApplicationForm />
    </>
  )
}