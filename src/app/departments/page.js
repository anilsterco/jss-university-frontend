import { getPageSEO } from "@/lib/seo";
import DepartmentClient from "./DepartmentClient";
import { BASE_URL } from "@/config/config";

export async function generateMetadata() {
  return await getPageSEO();
}

export default async function DepartmentsPage() {
  const seoData = await getPageSEO();

  let schools = [];
  try {
    const res = await fetch(`${BASE_URL}school-department-list`, {
      next: { revalidate: 600 },
    });
    if (res.ok) {
      const data = await res.json();
      schools = data?.data || [];
    }
  } catch (error) {
    console.error("Failed to load school list for departments:", error.message);
  }

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
