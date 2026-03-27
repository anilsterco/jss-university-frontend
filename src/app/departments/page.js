import { getPageSEO } from "@/lib/seo";
import DepartmentClient from "./DepartmentClient";
import { BASE_URL } from "@/config/config";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function DepartmentsPage() {
  const seoData = await getPageSEO();

  const res = await fetch(`${BASE_URL}school-department-list`);
  const data = await res.json();

  const schools = data?.data || [];

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
      <DepartmentClient schools={schools} />
    </>
  );
}
