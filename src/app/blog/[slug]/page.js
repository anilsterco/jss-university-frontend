import { notFound } from "next/navigation";
import { BASE_URL } from "@/config/config.mjs";
import { getPageSEO } from "@/lib/seo";
import HappeningsClientDetail from "./blogsClientDetail";
import BlogsClientDetail from "./blogsClientDetail";

async function fetchBlogDetail(slug) {
  const isDev = process.env.NODE_ENV === 'development';
  try {
    const res = await fetch(`${BASE_URL}blog/${slug}`, isDev ? {
      cache:"no-store"
    } : {
      next: { revalidate: 60 },
    });
    if (!res.ok) return null;
    const data = await res.json();
    return data || null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const [seoData, blogsDetailData] = await Promise.all([
    getPageSEO(`blog/${slug}`),
    fetchBlogDetail(slug),
  ]);

  return {
    ...seoData,
    title:
      seoData.title ||
      blogsDetailData?.title ||
      "Blogs | JSS University",
    description:
      seoData.description ||
      "Blogs detail page",
  };
}

export default async function BlogDetailPage({ params }) {
  const { slug } = await params;
  const blogsDetailData = await fetchBlogDetail(slug);

  console.log('blogsDetailData',blogsDetailData);

  if (!blogsDetailData) return notFound();

  const seoData = await getPageSEO(`blog/${slug}`);

  return (
    <>
      {seoData?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.schema) }}
        />
      )}
      <BlogsClientDetail blogsDetailData={blogsDetailData} />
    </>
  );
}
