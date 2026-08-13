import { getPageSEO } from "@/lib/seo";
import { BASE_URL, WEB_URL } from "@/config/config.mjs";
import ProgramDetailClient from "./ProgramDetailClient";

async function getCourseDetail(id) {
  try {
    const res = await fetch(`${BASE_URL}course/${id}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json?.success ? json.data : null;
  } catch {
    return null;
  }
}

function buildCourseSchema(id, data, seoData) {
  const pageUrl = `${WEB_URL}programs/${id}`;

  // Fields mapped from ProgramDetailClient destructuring
  const name        = data.name ?? id;
  const image       = data.overview?.overview_image ?? "";
  const description = data.overview?.overview_desc ?? "";
  const duration    = data.admissionSection?.course_duration ?? "4 Years";

  const durationISO = duration.toLowerCase().includes("2") ? "P2Y"
                    : duration.toLowerCase().includes("3") ? "P3Y"
                    : duration.toLowerCase().includes("5") ? "P5Y"
                    : "P4Y";

  const academicYear     = data.admissionSection?.academic_year ?? "2026-27";
  const availabilityDate = `${academicYear.split("-")[0]}-07-12`;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": pageUrl,
    name,
    url: pageUrl,
    image,
    description:seoData?.description ?? '',
    provider: {
      "@type": "Organization",
      name: "JSS University Noida",
      sameAs: `${WEB_URL}`,
    },
    educationalCredentialAwarded: data.admissionSection?.degree_awarded ?? "Bachelor of Technology (B.Tech)",
    hasCourseInstance: {
      "@type": "CourseInstance",
      name,
      url: pageUrl,
      image,
      description: seoData?.description ?? '',
      courseMode: "onsite",
      courseWorkload: durationISO,
      courseSchedule: {
        "@type": "Schedule",
        duration: durationISO,
        repeatFrequency: "Daily",
        repeatCount: 48,
      },
      offers: {
        "@type": "Offer",
        url: pageUrl,
        category: "Paid",
        availability: "https://schema.org/InStock",
        availabilityStarts: availabilityDate,
        validFrom: `${availabilityDate}T00:00:00`,
      },
    },
  };
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  return await getPageSEO();
}

export default async function ProgramDetail({ params }) {
  const { id } = await params;

  const [seoData, courseData] = await Promise.all([
    getPageSEO(),
    getCourseDetail(id),
  ]);

  const courseSchema = courseData ? buildCourseSchema(id, courseData, seoData) : null;

  return (
    <>
      {seoData?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.schema) }}
        />
      )}

      {courseSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }}
        />
      )}
      <h1 style={{
        display:'none'
      }}>{courseData.name}</h1>
      <ProgramDetailClient params={id} />
    </>
  );
}