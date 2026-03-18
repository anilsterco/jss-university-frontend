import React from "react";
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
import HodMessage from "@/component/sections/HodMessage";
import PacementTabSection from "@/component/sections/pacementTabSection";
import PdfLists from "@/component/sections/PdfLists";
import GridCardDesign2 from "@/component/sections/GridCardDesign2";
import TableSection from "@/component/sections/TableSection";
import TopSection from "@/component/sections/TopSection";
import LogoSlider from "@/component/sections/LogoSlider";
import TabsGrid from "@/component/sections/TabsGrid";
import BgImageContent from "@/component/sections/BgImageContent";
import GridDepartment from "@/component/sections/GridDepartment";
import InnovationPanel from "@/component/sections/InnovationPanel";
import TableContent from "@/component/sections/TableContent";
import TabsContents from "@/component/sections/TabsContents";
import LabCard from "@/component/sections/LabCard";
import ResearchPatents from "@/component/sections/ResearchPatents";
import FacilityTab from "@/component/sections/FacilityTab";
import StudentClub from "@/component/sections/StudentClub";
import AmenitiesList from "@/component/sections/AmenitiesList";
import Accordions from "@/component/sections/Accordions";
import DepartmentResearch from "@/component/sections/DepartmentResearch";

export default function CommonPage({ data }) {
  const groupedSections = [];
  let facilityGroup = [];

  // If data is passed directly as array of sections or as an object containing a sections property
  const sections = Array.isArray(data) ? data : data?.sections || [];

  sections?.forEach((section) => {
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
    tabsGrid: TabsGrid,
    bg_image_content: BgImageContent,
    gridDepartment: GridDepartment,
    innovation_panel: InnovationPanel,
    tableContent: TableContent,
    tabsContents: TabsContents,
    ResearchPatents: ResearchPatents,
    facilitiesTab: FacilityTab,
    studentClub: StudentClub,
    amenities_list: AmenitiesList,
    labCard: LabCard,
    table_section_tabs: Accordions,
    departmentResearch: DepartmentResearch,
  };

  return (
    <>
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
