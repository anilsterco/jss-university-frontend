import { getPageSEO } from "@/lib/seo";
import Script from "next/script";
import BlogsClient from "./BlogsClient";
import { BASE_URL } from "@/config/config.mjs";

export async function generateMetadata() {
  return await getPageSEO();
}

const isDev = process.env.NODE_ENV === "development";

export const getBlogPageData = async () => {
  const res = await fetch(
    `${BASE_URL}pages/blog`,
    isDev ? { cache: "no-store" } : { next: { revalidate: 120 } }
  );
  if (!res.ok) {
    console.error("API Error:", res.status);
    throw new Error(`Failed to fetch data`);
  }
  return res.json();
};

export const getBlogData = async (page = 1) => {
  const res = await fetch(
    `${BASE_URL}blog?page=${page}`,
    isDev ? { cache: "no-store" } : { next: { revalidate: 120 } }
  );
  if (!res.ok) {
    console.error("API Error:", res.status);
    throw new Error(`Failed to fetch data`);
  }
  return res.json();
};

export default async function BlogsPage({ searchParams }) {
  const params = await searchParams; // Next 15 - searchParams is a promise
  const page = Number(params?.page) || 1;

  const seoData = await getPageSEO();

  const [blogPageData, blogData] = await Promise.all([
    getBlogPageData(),
    getBlogData(page),
  ]);

  return (
    <>
      {seoData?.schema && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(seoData.schema) }}
          strategy="beforeInteractive"
        />
      )}
      <BlogsClient data={blogPageData} blogs={blogData} />
    </>
  );
}