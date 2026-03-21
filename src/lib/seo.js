import { BASE_URL, SEO_URL } from "@/config/config";
import { headers } from "next/headers";

export async function getPageSEO(slug) {
  try {
    // If no slug passed, auto-detect full URL from request headers
    if (!slug) {
      const headersList = await headers();
      const host = headersList.get("host");
      const protocol = "https";
      const pathname =
        headersList.get("x-invoke-path") ||
        headersList.get("x-pathname") ||
        "/";
      // slug = `${protocol}://${host}${pathname}`;
      slug = `${SEO_URL}${pathname}`;
    }

    console.log("slug", slug);

    const res = await fetch(`${BASE_URL}seo/${encodeURIComponent(slug)}`, {
      cache: "force-cache",
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("SEO data not found");

    const data = await res.json();

    return {
      title: data.data.title,
      description: data.data.description,
      keywords:
        data.data.keywords.length > 0 ? data.data.keywords : "JSS University",
      alternates: {
        canonical: data.data.alternates?.canonical || slug,
      },
      openGraph: {
        title: data.data.openGraph?.title || data.data.title,
        description: data.data.openGraph?.description || data.data.description,
        images: data.data.openGraph?.images || [],
      },
      schema: data.data.schema || {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Article Title",
        description: "Article Description",
        image: "https://yoursite.com/image.jpg",
        datePublished: "2024-01-01",
        author: {
          "@type": "Person",
          name: "JSS University",
        },
      },
    };
  } catch (error) {
    return {
      title: "JSS University",
      description: "JSS University",
      keywords: "JSS University",
      alternates: {
        canonical: "/",
      },
    };
  }
}
