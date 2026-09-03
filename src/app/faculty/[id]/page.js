import { notFound } from "next/navigation";
import { BASE_URL } from "@/config/config.mjs";
import { getPageSEO } from "@/lib/seo";
import FacultyDetailClient from "./FacultyDetailClient";

async function fetchFaculty(id) {
  const isDev = process.env.NODE_ENV === 'development';

  try {
    const res = await fetch(`${BASE_URL}faculties/${id}`, isDev ? {
      cache:"no-store"
    } : {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data || data.faculty || data || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const [seoData, faculty] = await Promise.all([
    getPageSEO(id),
    fetchFaculty(id),
  ]);

  // Fall back to faculty data if SEO API has nothing
  return {
    ...seoData,
    title: seoData.title || faculty?.name || "Faculty | JSS University",
    description:
      seoData.description ||
      faculty?.profile?.slice(0, 160) ||
      "Faculty detail page",
  };
}

export default async function FacultyDetailPage({ params }) {
  const { id } = await params;
  const faculty = await fetchFaculty(id);

  if (!faculty || Object.keys(faculty).length === 0) return notFound();

  const seoData = await getPageSEO(id);

  return (
    <>
      {seoData?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.schema) }}
        />
      )}
      <FacultyDetailClient faculty={faculty} />
    </>
  );
}
