import { BASE_URL, SEO_URL } from "@/config/config";
import { headers } from "next/headers";

const SEO_BASE = (SEO_URL || "").replace(/\/$/, "");

function resolvePathname(slug) {
  if (slug !== undefined && slug !== null && slug !== "") {
    const path = slug.startsWith("/") ? slug : `/${slug}`;
    return path;
  }

  return "/";
}

async function detectPathname() {
  const headersList = await headers();
  return (
    headersList.get("x-pathname") ||
    headersList.get("x-invoke-path") ||
    "/"
  );
}

/** Always return an absolute canonical URL. */
function normalizeCanonical(canonical, pathname) {
  const path = pathname?.startsWith("/") ? pathname : `/${pathname || ""}`;

  if (!canonical) {
    return path === "/" ? `${SEO_BASE}/` : `${SEO_BASE}${path}`;
  }

  if (/^https?:\/\//i.test(canonical)) {
    return canonical;
  }

  const canonicalPath = canonical.startsWith("/") ? canonical : `/${canonical}`;
  return `${SEO_BASE}${canonicalPath}`;
}

export async function getPageSEO(slug) {
  let pathname = resolvePathname(slug);

  try {
    if (slug === undefined || slug === null || slug === "") {
      pathname = await detectPathname();
    }

    const apiSlug = pathname === "/" ? "home" : pathname.replace(/^\//, "");

    const res = await fetch(`${BASE_URL}seo/${apiSlug}`, {
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
        canonical: normalizeCanonical(
          data.data.alternates?.canonical,
          pathname
        ),
      },
      openGraph: {
        title: data.data.openGraph?.title || data.data.title,
        description: data.data.openGraph?.description || data.data.description,
        images: data.data.openGraph?.images || [],
      },
      schema: data.data.schema
    };
  } catch (error) {
    return {
      title: "JSS University",
      description: "JSS University",
      keywords: "JSS University",
      alternates: {
        canonical: normalizeCanonical(null, pathname),
      },
      robots: {
        index: true,
        follow: true,
      },
    };
  }
}
