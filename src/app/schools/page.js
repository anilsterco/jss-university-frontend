import BannerComponent from "@/component/home-components/banner/BannerComponent";
import BelowBannerComponent from "@/component/school-components/BelowBannerComponent";
import DepartmentComponent from "@/component/school-components/DepartmentComponent";
import PlacementComponent from "@/component/home-components/PlacementComponent";
import AboutSchoolComponent from "@/component/school-components/AboutSchoolComponent";
import TestimonialComponent from "@/component/home-components/TestimonialComponent";
import HappingsHomeComponent from "@/component/home-components/HappingsHomeComponent";

export default function SchoolPage() {
  return (
    <>
      <BannerComponent />
      <BelowBannerComponent />
      <DepartmentComponent />
      <PlacementComponent />
      <AboutSchoolComponent />
      <TestimonialComponent />
      <HappingsHomeComponent />
    </>
  );
}
