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

import PlacementRequest from "@/component/sections/PlacementRequest";
import FacilitySeven from "@/component/sections/FacilitySeven";
import HeritageSection from "@/component/sections/HeritageSection";
import { notFound } from "next/navigation";
import EmpowringPeople from "@/component/sections/EmpowringPeople";
import Fosteringcreativity from "@/component/sections/Fosteringcreativity";
import AcademicLabs from "@/component/sections/AcademicLabs";
import ResearchLabs from "@/component/sections/ResearchLabs";
import SelectionProcess from "@/component/sections/SelectionProcess";
import RightCounterSection from "@/component/sections/RightCounterSection";
import EligibilityData from "@/component/sections/EligibilityData";
import AdmissionTableSection from "@/component/sections/AdmissionTableSection";
import AdmissionOffice from "@/component/sections/AdmissionOffice";
import HostelDetail from "@/component/sections/HostelDetail";
import SocioEconomically from "@/component/sections/SocioEconomically";
import CocurricularSupport from "@/component/sections/CocurricularSupport";
import Thefollowingfacilities from "@/component/sections/Thefollowingfacilities";
import IndexedResearch from "@/component/sections/IndexedResearch";
import PublicationPatents from "@/component/sections/PublicationPatents";
import GrantsReceived from "@/component/sections/GrantsReceived";
import Grants from "@/component/sections/Grants";
import AuditoriumSeminar from "@/component/sections/AuditoriumSeminar";
import UniversityGreen from "@/component/sections/UniversityGreen";
import Transportation from "@/component/sections/Transportation";
import CountAlumni from "@/component/sections/CountAlumni";
import DepartmentHeader from "@/component/department-components/departmentHeader/DepartmentHeader";
import ImageContentRepeat from "@/component/sections/ImageContentRepeat";
import GridCardDesign1 from "@/component/sections/GridCardDesign1";
import VisionMission from "@/component/sections/VisionMission";
import HODMessage from "@/component/department-components/hod-message-component/HodMessageComponent";
import HodMessage from "@/component/sections/HodMessage";
import PacementTabSection from "@/component/sections/pacementTabSection";
import PdfLists from "@/component/sections/PdfLists";
import GridCardDesign2 from "@/component/sections/GridCardDesign2";
import TableSection from "@/component/sections/TableSection";
import TopSection from "@/component/sections/TopSection";
import LogoSlider from "@/component/sections/LogoSlider";
import TabsGrid from "@/component/sections/TabsGrid";




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

  const hasTabs =
    data.tabs && Array.isArray(data.tabs.tabs) && data.tabs.tabs.length > 0;
  const groupedSections = [];
  let facilityGroup = [];

  data.sections?.forEach((section) => {
    if (["titleBanner", "boxes", "percentSub"].includes(section.type)) {
      facilityGroup.push(section);
    } else {
      if (facilityGroup.length > 0) {
        groupedSections.push({
          type: "facilityGroup",
          sections: [...facilityGroup],
        });
        facilityGroup = [];
      }
      groupedSections.push(section);
    }
  });

  if (facilityGroup.length > 0) {
    groupedSections.push({
      type: "facilityGroup",
      sections: facilityGroup,
    });
  }

  const sectionComponents = {
    topBanner: AboutOne,
    logoDesc: AboutOne,
    figureDesc: AboutOne,
    earlyGrowth: AboutTwo,
    vision: AboutThree,
    leftSection: AboutFour,
    qualityPolicy: AboutFive,
    facilityGroup: FacilityOne,
    heading: FacilityTwo,
    amenitiescentre: FacilityTwo,
    sportsfacilities: FacilityThree,
    objectives: FacilityThree,
    universityboasts: FacilityFour,
    bankAtm: FacilityFive,
    cafeteriaGuest: FacilitySix,
    comingSoon: ComingSoon,
    whiteboxes: Placements,
    placementHighlights: PlacementHighlights,
    placementProcedure: PlacementProcedure,
    pacementTabSection: PacementTabSection,
    placementOfficer: PlacementRequest,
    empowringPeople: EmpowringPeople,
    fosteringcreativity: Fosteringcreativity,
    guestHouse: FacilitySeven,
    academicLabs: AcademicLabs,
    researchLabs: ResearchLabs,
    researchSectionSecond: ResearchLabs,
    objectiveSection: ResearchLabs,
    heritageSection: HeritageSection,
    selectionProcess: SelectionProcess,
    rightCounterSection: RightCounterSection,
    eligibilityData: EligibilityData,
    tableSection: AdmissionTableSection,
    admissionOffice: AdmissionOffice,
    hostelDetail: HostelDetail,
    socioEconomically: SocioEconomically,
    cocurricularSupport: CocurricularSupport,
    thefollowingfacilities: Thefollowingfacilities,
    indexedResearch: IndexedResearch,
    publicationPatents: PublicationPatents,
    grantsreceived: GrantsReceived,
    grants: Grants,
    auditoriumSeminar: AuditoriumSeminar,
    universityGreen: UniversityGreen,
    transportation: Transportation,
    countAlumni: CountAlumni,
    imageContentRepeat: ImageContentRepeat,
    gridCardDesign1: GridCardDesign1,
    vision_mission: VisionMission,
    hod_section: HodMessage,
    pdf_lists: PdfLists,
    gridCardDesign2: GridCardDesign2,
    table_section: TableSection,
    top_section: TopSection,
    logo_slider: LogoSlider,
    tabsGrid: TabsGrid
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

        const Component =
          sectionComponents[
          section.type === "facilityGroup" ? "facilityGroup" : section.type
          ];
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
        title: "Page Not Found",
        description: "The requested page could not be found.",
      };
    }
    return {
      title: data.meta_title || data.title || "JSS Academy",
      description: data.meta_description || `Page: ${data.title}`,
    };
  } catch (error) {
    return {
      title: "JSS Academy",
      description: "JSS Academy of Technical Education",
    };
  }
}
