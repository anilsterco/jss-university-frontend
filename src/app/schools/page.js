import BannerComponent from "@/component/home-components/banner/BannerComponent";
import BelowBannerComponent from "@/component/school-components/below-banner-component/BelowBannerComponent";
import DepartmentComponent from "@/component/school-components/browse-department/DepartmentComponent";
import PlacementComponent from "@/component/home-components/placement/PlacementComponent";
import AboutSchoolComponent from "@/component/school-components/about-school-component/AboutSchoolComponent";
import TestimonialComponent from "@/component/home-components/testimonial/TestimonialComponent";
import HappingsHomeComponent from "@/component/home-components/home-happening/HappeningsHomeComponent";
import { Api } from "@/lib/api";
export default async function SchoolPage() {
  const [departmentBannerData] = await Promise.all([Api.getHomeBanners()]);
  return (
    <>
      <BannerComponent data={departmentBannerData} />
      <BelowBannerComponent />
      <DepartmentComponent />
      <PlacementComponent />
      <AboutSchoolComponent />
      <TestimonialComponent />
      <HappingsHomeComponent />
    </>
  );
}
