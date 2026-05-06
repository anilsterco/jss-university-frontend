import { notFound } from "next/navigation";
import { BASE_URL } from "@/config/config";
import { getPageSEO } from "@/lib/seo";
import LeadershipClientDetail from "./LeadershipClientDetail";

async function fetchLeader(slug) {
  const isDev = process.env.NODE_ENV === 'development';
  try {
    const res = await fetch(`${BASE_URL}leadership/${slug}`, isDev ? {
      cache:"no-store"
    } : {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data.status ? data : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const [seoData, leader] = await Promise.all([
    getPageSEO(),
    fetchLeader(slug),
  ]);

  return {
    ...seoData,
    title:
      seoData.title ||
      leader?.sections?.banners?.name ||
      "Leadership | JSS University",
    description:
      seoData.description ||
      leader?.sections?.banners?.short_description ||
      "Leadership detail page",
  };
}

export default async function LeadershipDetailPage({ params }) {
  const { slug } = await params;
  const leader = await fetchLeader(slug);

  if (!leader) return notFound();

  const seoData = await getPageSEO();

  return (
    <>
      {seoData?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.schema) }}
        />
      )}
      <LeadershipClientDetail leader={leader} />
    </>
  );
}
