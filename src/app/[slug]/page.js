import AboutFive from "@/component/sections/AboutFive";
import AboutFour from "@/component/sections/AboutFour";
import AboutOne from "@/component/sections/AboutOne";
import AboutThree from "@/component/sections/AboutThree";
import AboutTwo from "@/component/sections/AboutTwo";
import ComingSoon from "@/component/sections/ComingSoon";
import FacilityFive from "@/component/sections/FacilityFive";
import FacilityFour from "@/component/sections/FacilityFour";
import FacilityOne from "@/component/sections/FacilityOne";
import FacilitySix from "@/component/sections/FacilitySix";
import FacilityThree from "@/component/sections/FacilityThree";
import FacilityTwo from "@/component/sections/FacilityTwo";
import TabSection from "@/component/sections/TabSection";
import Placements from "@/component/sections/Placements";
import PlacementHighlights from "@/component/sections/PlacementHighlights";
import PlacementProcedure from "@/component/sections/PlacementProcedure";
import pacementTabSection from "@/component/sections/pacementTabSection";
import PlacementRequest from "@/component/sections/PlacementRequest";



import { notFound } from "next/navigation";
import EmpowringPeople from "@/component/sections/EmpowringPeople";
import Fosteringcreativity from "@/component/sections/Fosteringcreativity";

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

  // Group sections that should be rendered together by FacilityOne
  const groupedSections = [];
  let facilityGroup = [];

  data.sections?.forEach((section) => {
    if (["titleBanner", "boxes", "percentSub"].includes(section.type)) {
      facilityGroup.push(section);
    } else {
      if (facilityGroup.length > 0) {
        groupedSections.push({
          type: "facilityGroup",
          sections: [...facilityGroup]
        });
        facilityGroup = [];
      }
      groupedSections.push(section);
    }
  });

  if (facilityGroup.length > 0) {
    groupedSections.push({
      type: "facilityGroup",
      sections: facilityGroup
    });
  }

  const sectionComponents = {
    topBanner: AboutOne,
    logoDesc: AboutOne,
    figureDesc: AboutOne,
    slider: AboutTwo,
    visionMission: AboutThree,
    values: AboutFour,
    qualityPolicy: AboutFive,
    facilityGroup: FacilityOne,
    heading: FacilityTwo,
    amenitiescentre: FacilityTwo,
    sportsfacilities: FacilityThree,
    objectives: FacilityThree,
    librarySection: FacilityFour,
    sideSection: FacilityFive,
    featuresSection: FacilitySix,
    comingSoon: ComingSoon,
    whiteboxes: Placements,
    placementHighlights:PlacementHighlights,
    placementProcedure:PlacementProcedure,
    pacementTabSection:pacementTabSection,
    placementOfficer:PlacementRequest,
    empowringPeople:EmpowringPeople,
    fosteringcreativity:Fosteringcreativity,
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

      {groupedSections?.map((section, index) => {
        const Component = sectionComponents[section.type === "facilityGroup" ? "facilityGroup" : section.type];
        if (Component === FacilityOne) {
          return <Component key={index} data={section.sections} />;
        } else if (Component) {
          return <Component key={index} data={[section]} />;
        }
        return null;
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
    };
  } catch (error) {
    return {
      title: 'JSS Academy',
      description: 'JSS Academy of Technical Education',
    };
  }
}