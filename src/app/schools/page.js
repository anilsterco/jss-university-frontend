import BannerComponent from "@/component/home-components/BannerComponent";
import BelowBannerSection from "@/component/school-components/BelowBannerSection";
import DepartmentSection from "@/component/school-components/DepartmentSection";
import PlacementComponent from "@/component/home-components/PlacementComponent";
import AboutSchoolSection from "@/component/school-components/AboutSchoolSection";
import TestimonialComponent from "@/component/home-components/TestimonialComponent";
import HappingsHomeComponent from "@/component/home-components/HappingsHomeComponent";

export default function SchoolPage() {
  return (
    <div>
      <BannerComponent />
      <BelowBannerSection />
      <DepartmentSection />
      <PlacementComponent />
      <AboutSchoolSection />
      <TestimonialComponent />
      <HappingsHomeComponent />
    </div>
  );
}
