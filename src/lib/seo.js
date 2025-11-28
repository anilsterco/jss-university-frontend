export async function getPageSEO(slug) {
  try {
    console.log(slug);
    const res = await fetch(`https://project-demo.in/jss/api/seo/${slug}`, {
      cache: "force-cache",
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error("SEO data not found");

    const data = await res.json();
    console.log(data, "seoData");

    return {
      title: data.data.title,
      description: data.data.description,
      keywords: data.data.keywords,
      alternates: {
        canonical: data.data.alternates.canonical,
      },
      openGraph: {
        title: data.data.openGraph.title,
        description: data.data.openGraph.description,
        images: data.data.openGraph.images,
      },
    };
  } catch (error) {
    return {
      title: "Default Title",
      description: "Default Description",
      keywords: "Default Keywords",
      alternates: {
        canonical: "/default-url",
      },
    };
  }
}
