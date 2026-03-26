import { getPageSEO } from "@/lib/seo";
import DepartmentClient from "./DepartmentClient";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function DepartmentsPage() {
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
      <DepartmentClient />
    </>
  );
}
