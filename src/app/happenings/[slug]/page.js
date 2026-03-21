import { notFound } from "next/navigation";
import { BASE_URL } from "@/config/config";
import { getPageSEO } from "@/lib/seo";
import HappeningsClientDetail from "./HappeningsClientDetail";

async function fetchHappening(slug) {
  try {
    const res = await fetch(`${BASE_URL}happenings/${slug}`, {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.data || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const [seoData, happeningsData] = await Promise.all([
    getPageSEO(),
    fetchHappening(slug),
  ]);

  return {
    ...seoData,
    title:
      seoData.title ||
      happeningsData?.innerTitle?.heading ||
      "Happenings | JSS University",
    description:
      seoData.description ||
      happeningsData?.innerTitle?.heading ||
      "Happenings detail page",
  };
}

export default async function HappeningsPage({ params }) {
  const { slug } = await params;
  const happeningsData = await fetchHappening(slug);

  if (!happeningsData) return notFound();

  const seoData = await getPageSEO();

  return (
    <>
      {seoData?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.schema) }}
        />
      )}
      <HappeningsClientDetail happeningsData={happeningsData} />
    </>
  );
}
