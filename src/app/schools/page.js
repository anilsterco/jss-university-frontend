import BannerComponent from "@/component/home-components/banner/BannerComponent";
import BelowBannerComponent from "@/component/school-components/below-banner-component/BelowBannerComponent";
import DepartmentComponent from "@/component/school-components/browse-department/DepartmentComponent";
import PlacementComponent from "@/component/home-components/placement/PlacementComponent";
import AboutSchoolComponent from "@/component/school-components/about-school-component/AboutSchoolComponent";
import TestimonialComponent from "@/component/home-components/testimonial/TestimonialComponent";
import HappingsHomeComponent from "@/component/home-components/home-happening/HappeningsHomeComponent";
export default async function SchoolPage() {
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
