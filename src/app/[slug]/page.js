import AboutFive from "@/component/sections/AboutFive";
import AboutFour from "@/component/sections/AboutFour";
import AboutOne from "@/component/sections/AboutOne";
import AboutThree from "@/component/sections/AboutThree";
import AboutTwo from "@/component/sections/AboutTwo";
import FacilityFive from "@/component/sections/FacilityFive";
import FacilityFour from "@/component/sections/FacilityFour";
import FacilityOne from "@/component/sections/FacilityOne";
import FacilitySix from "@/component/sections/FacilitySix";
import FacilityThree from "@/component/sections/FacilityThree";
import FacilityTwo from "@/component/sections/FacilityTwo";
import TabSection from "@/component/sections/TabSection";
import { notFound } from "next/navigation";

// API fetcher
async function fetchPageData(slug) {
  try {
    const res = await fetch(`https://project-demo.in/jss/api/pages/${slug}`, {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;
  const actualSlug = slug ?? "home";

  const data = await fetchPageData(actualSlug);

  if (!data) return notFound();

  const hasTabs = data.tabs && Array.isArray(data.tabs.tabs) && data.tabs.tabs.length > 0;

  const sectionComponents = {
    topBanner: AboutOne,
    logoDesc: AboutOne,
    figureDesc: AboutOne,
    slider: AboutTwo,
    visionMission: AboutThree,
    values: AboutFour,
    qualityPolicy: AboutFive,
    titleBanner: FacilityOne,
    boxes: FacilityOne,
    percentSub: FacilityOne,
    heading: FacilityTwo,
    dataSlider: FacilityTwo,
    researchSection: FacilityThree,
    objectives: FacilityThree,
    librarySection: FacilityFour,
    sideSection: FacilityFive,
    featuresSection: FacilitySix,
  };

  return (
    <>
      {hasTabs && (
        <TabSection
          title={data.tabs.title}
          subtitle={data.tabs.subTitle}
          tabs={data.tabs.tabs}
          slug={data.slug}
        />
      )}

      {data.sections?.map((section, index) => {
        const Component = sectionComponents[section.type];
        return Component ? <Component key={index} data={[section]} /> : null;
      })}
    </>
  );
}

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