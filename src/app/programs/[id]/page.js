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

  const name = data.name ?? id;

  const description =
    seoData?.description ??
    data.overview?.overview_desc ??
    "";

  const duration = data.admissionSection?.course_duration ?? "4 Years";

  // Extract number from "2 Years", "3 Years", etc.
  const durationYears = parseInt(duration.match(/\d+/)?.[0] ?? "4", 10);

  const durationISO = `P${durationYears}Y`;

  // One semester = 6 months
  const repeatCount = durationYears * 2;

  return {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": pageUrl,

    name,

    description,

    provider: {
      "@type": "Organization",
      name: "JSS University, Noida",
      sameAs: WEB_URL,
      logo: {
        "@type": "ImageObject",
        url: `${WEB_URL}images/header/homenew.png`,
      },
    },

    hasCourseInstance: {
      "@type": "CourseInstance",

      name,

      url: pageUrl,

      description,

      courseMode: "onsite",

      courseWorkload: `35 hours per week`,

      courseSchedule: {
        "@type": "Schedule",
        duration: durationISO,
        repeatFrequency: "P6M",
        repeatCount,
      },
    },

    offers: {
      "@type": "Offer",
      url: pageUrl,
      category: "Paid",
      availability: "https://schema.org/InStock",
    },
  };
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  return await getPageSEO(id);
}

export default async function ProgramDetail({ params }) {
  const { id } = await params;

  const [seoData, courseData] = await Promise.all([
    getPageSEO(id),
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