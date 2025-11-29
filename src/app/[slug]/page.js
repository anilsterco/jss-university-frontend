import AboutFive from "@/component/sections/AboutFive";
import AboutFour from "@/component/sections/AboutFour";
import AboutOne from "@/component/sections/AboutOne";
import AboutThree from "@/component/sections/AboutThree";
import AboutTwo from "@/component/sections/AboutTwo";
import TitleSection from "@/component/sections/TitleSection";
import { notFound } from "next/navigation";

// Loading component
function LoadingSpinner() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-50">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <span className="ms-2">Loading page content...</span>
    </div>
  );
}

async function fetchPageData(slug) {
  try {
    const res = await fetch(`https://project-demo.in/jss/api/pages/${slug}`, {
      next: { revalidate: 60 }, // Cache for 60 seconds
      // Or use cache: 'no-store' for always fresh data
    });

    if (!res.ok) {
      console.error(`Failed to fetch page data: ${res.status}`);
      return null;
    }

    return await res.json();
  } catch (error) {
    console.error('Error fetching page data:', error);
    return null;
  }
}

// Component to handle the data processing and rendering
async function PageContent({ slug }) {
  const data = await fetchPageData(slug);

  if (!data) return notFound();

  const hasTabs = data.tabs && Array.isArray(data.tabs.tabs) && data.tabs.tabs.length > 0;

  // Section type mappings
  const sectionMappings = {
    aboutOne: ["aboutOne", "logoDesc", "figureDesc"],
    aboutTwo: ["slider"],
    aboutThree: ["visionMission"],
    aboutFour: ["values"],
    aboutFive: ["qualityPolicy"]
  };

  // Filter sections for each component
  const filteredSections = {};
  Object.entries(sectionMappings).forEach(([component, types]) => {
    filteredSections[component] = data.sections?.filter((section) =>
      types.includes(section.type)
    ) || [];
  });

  const hasSections = Object.values(filteredSections).some(sections => sections.length > 0);

  return (
    <main className="dynamic-page">
      {hasTabs && (
        <TitleSection
          title={data.tabs.title}
          subtitle={data.tabs.subTitle}
          tabs={data.tabs.tabs}
          slug={data.slug}
        />
      )}

      {/* Render sections only if they have content */}
      {filteredSections.aboutOne.length > 0 && <AboutOne data={filteredSections.aboutOne} />}
      {filteredSections.aboutTwo.length > 0 && <AboutTwo data={filteredSections.aboutTwo} />}
      {filteredSections.aboutThree.length > 0 && <AboutThree data={filteredSections.aboutThree} />}
      {filteredSections.aboutFour.length > 0 && <AboutFour data={filteredSections.aboutFour} />}
      {filteredSections.aboutFive.length > 0 && <AboutFive data={filteredSections.aboutFive} />}

      {/* Fallback if no sections at all */}
      {!hasSections && (
        <div className="container text-center py-5">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <h3>No Content Available</h3>
              <p className="text-muted">
                This page doesn't have any content sections yet. Please check back later.
              </p>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

// Main page component with Suspense
export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const actualSlug = slug ?? "home";

  return (
    <>
      {/* You can wrap in Suspense if using React 18 with loading states */}
      <PageContent slug={actualSlug} />
    </>
  );
}

// Optional: Generate metadata for better SEO
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const actualSlug = slug ?? "home";
  
  try {
    const data = await fetchPageData(actualSlug);
    
    if (!data) {
      return {
        title: 'Page Not Found',
        description: 'The requested page could not be found.',
      };
    }

    return {
      title: data.meta_title || data.title || 'JSS Academy',
      description: data.meta_description || `Page: ${data.title}`,
      // Add more metadata as needed
    };
  } catch (error) {
    return {
      title: 'JSS Academy',
      description: 'JSS Academy of Technical Education',
    };
  }
}