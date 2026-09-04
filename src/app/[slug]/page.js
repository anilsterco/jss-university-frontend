
import dynamic from "next/dynamic";
import AboutFive from "@/component/sections/AboutFive";
const AboutFour = dynamic(()=>import("@/component/sections/AboutFour"));
const AboutOne = dynamic(()=>import("@/component/sections/AboutOne"))
import AboutThree from "@/component/sections/AboutThree";
const AboutTwo = dynamic(()=>import("@/component/sections/AboutTwo"));
import ComingSoon from "@/component/sections/ComingSoon";
const FacilityFive = dynamic(()=>import("@/component/sections/FacilityFive"));
import FacilityFour from "@/component/sections/FacilityFour";
import FacilityOne from "@/component/sections/FacilityOne";
import FacilitySix from "@/component/sections/FacilitySix";
const FacilityThree = dynamic(()=>import("@/component/sections/FacilityThree"));
import FacilityTwo from "@/component/sections/FacilityTwo";
import TabSection from "@/component/sections/TabSection";
import Placements from "@/component/sections/Placements";
import PlacementHighlights from "@/component/sections/PlacementHighlights";
import PlacementProcedure from "@/component/sections/PlacementProcedure";

import PlacementRequest from "@/component/sections/PlacementRequest";
import FacilitySeven from "@/component/sections/FacilitySeven";
import HeritageSection from "@/component/sections/HeritageSection";
import { notFound, redirect } from "next/navigation";
const EmpowringPeople = dynamic(()=>import("@/component/sections/EmpowringPeople"));
const Fosteringcreativity = dynamic(()=>import("@/component/sections/Fosteringcreativity"));
const AcademicLabs = dynamic(()=>import("@/component/sections/AcademicLabs"));
const ResearchLabs = dynamic(()=>import("@/component/sections/ResearchLabs"));
import SelectionProcess from "@/component/sections/SelectionProcess";
const RightCounterSection = dynamic(()=>import("@/component/sections/RightCounterSection"));
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
// import DepartmentHeader from "@/component/department-components/departmentHeader/DepartmentHeader";
const ImageContentRepeat = dynamic(()=>import("@/component/sections/ImageContentRepeat"));
import GridCardDesign1 from "@/component/sections/GridCardDesign1";
import VisionMission from "@/component/sections/VisionMission";
// import HODMessage from "@/component/department-components/hod-message-component/HodMessageComponent";
import HodMessage from "@/component/sections/HodMessage";
import PacementTabSection from "@/component/sections/pacementTabSection";
import PdfLists from "@/component/sections/PdfLists";
import GridCardDesign2 from "@/component/sections/GridCardDesign2";
import TableSection from "@/component/sections/TableSection";
import TopSection from "@/component/sections/TopSection";
import LogoSlider from "@/component/sections/LogoSlider";
import TabsGrid from "@/component/sections/TabsGrid";
import { BASE_URL } from "@/config/config";
import ResearchPatents from "@/component/sections/ResearchPatents";
import FacilityTab from "@/component/sections/FacilityTab";
import StudentClub from "@/component/sections/StudentClub";
import AmenitiesList from "@/component/sections/AmenitiesList";
const LabCard = dynamic(()=>import("@/component/sections/LabCard"));
import BgImageContent from "@/component/sections/BgImageContent";
import GridDepartment from "@/component/sections/GridDepartment";
import InnovationPanel from "@/component/sections/InnovationPanel";
import TableContent from "@/component/sections/TableContent";
import TabsContents from "@/component/sections/TabsContents";
// import FaqPage from "@/pages/faq/Faq";
import Accordions from "@/component/sections/Accordions";
import Accordion from "@/component/sections/Accordion";
import GridCardDesign3 from "@/component/sections/GridCardDesign3";
import { getPageSEO } from "@/lib/seo";
import TabsDataContent from "@/component/sections/TabsDataContents";
import TabTableMultiple from "@/component/sections/TabTableMultiple";
// import ResearchLabsSecond from "@/component/sections/ResearchLabsSecond";
const IICActivities = dynamic(()=>import("@/component/sections/IICActivities"));
import societiesFculties from "@/component/sections/SocietiesFculties";
import AchievementsRecognitions from "@/component/sections/AchievementsRecognitions";
import Yukti from "@/component/sections/Yukti";
import SocietiesEvents from "@/component/sections/SocietiesEvents";
import Textarea from "@/component/sections/Textarea";
import CustomTableSection from "@/component/sections/CustomTableSection";
import TabCustomTableMultiple from "@/component/sections/TabCustomTableMultiple";
import Accordions1 from "@/component/sections/Accordions1";
import GrantsReceived1 from "@/component/sections/GrantsReceived1";
import Editor from "@/component/sections/Editor";
import CmsEnhancer from "@/component/common/CmsEnhancer";

import "@/styles/style.css";
import "@/styles/custom.style.css";
import '@/styles/inner.css';

async function fetchPageData(slug) {
  const isDev = process.env.NODE_ENV === "development";

  try {
    const res = await fetch(
      `${BASE_URL}pages/${slug}`,
      isDev
        ? {
            cache: "no-store",
          }
        : {
            next: { revalidate: 60 },
          },
    );
    if (!res.ok) return null;
    return await res.json();
  } catch (error) {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return await getPageSEO(slug);
}

export default async function DynamicPage({ params }) {
  const { slug } = await params;

  //  await getPageRedirect(slug);

  const actualSlug = slug ?? "home";
  const [data, seoData] = await Promise.all([
    fetchPageData(actualSlug),
    getPageSEO(slug),
  ]);
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
    logoDescGrid: AboutOne,
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
    tab_with_custom_data: GrantsReceived1,
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
    custom_table_section: CustomTableSection,
    top_section: TopSection,
    logo_slider: LogoSlider,
    tabsGrid: TabsGrid,
    ResearchPatents: ResearchPatents,
    facilitiesTab: FacilityTab,
    studentClub: StudentClub,
    amenities_list: AmenitiesList,
    bg_image_content: BgImageContent,
    gridDepartment: GridDepartment,
    innovation_panel: InnovationPanel,
    tableContent: TableContent,
    tabsData: TabsDataContent,
    tabsContents: TabsContents,
    labCard: LabCard,
    table_section_tabs: Accordions,
    accordionTabs: Accordions1,
    accordion: Accordion,
    gridCardDesign3: GridCardDesign3,
    tabTableMultiple: TabTableMultiple,
    tabCustomTableMultiple: TabCustomTableMultiple,
    textArea: Textarea,
    societiesFculties: societiesFculties,
    societiesEvent: SocietiesEvents,
    AchievementsRecognitions: AchievementsRecognitions,
    Yukti: Yukti,
    IICActivities: IICActivities,
    editor: Editor, 
  };

  const cmsContainerId = `cms-page-${data.slug
    .replace(/[^a-zA-Z0-9-_]/g, "-")
    .toLowerCase()}`;

  return (
    <>
      {/* Schema JSON-LD */}
      {seoData?.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.schema),
          }}
        />
      )}

      <div id={cmsContainerId}>
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
      </div>


      <CmsEnhancer containerId={cmsContainerId} />
    </>
  );
}
