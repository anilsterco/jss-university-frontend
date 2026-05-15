import { BASE_URL, SEO_URL } from "@/config/config";
import { headers } from "next/headers";

export async function getPageSEO(slug) {
  try {
    // If no slug passed, auto-detect full URL from request headers
    if (!slug) {
      const headersList = await headers();
      const pathname =
        headersList.get("x-invoke-path") ||
        headersList.get("x-pathname") ||
        "/";
        slug = pathname.replace(/^\//, '') || 'home';
    }
    const res = await fetch(`${BASE_URL}seo/${slug}`, {
      cache: "no-store",
      // next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error("SEO data not found");

    const data = await res.json();

    return {
      title: data.data.title,
      description: data.data.description,
      keywords:
        data.data.keywords.length > 0 ? data.data.keywords : "JSS University",
      robots: {
        index: data.data.robots?.index ?? true,   // false = noindex
        follow: data.data.robots?.follow ?? true,  // false = nofollow
        googleBot: {
          index: data.data.robots?.index ?? true,
          follow: data.data.robots?.follow ?? true,
        },
      },
      alternates: {
        canonical: data.data.alternates?.canonical || `${SEO_URL}${slug}`,
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
      robots: {
        index: false,
        follow: false,
      },
    };
  }
}
