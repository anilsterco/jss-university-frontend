import BannerComponent from "@/component/home-components/banner/BannerComponent";
import AboutDepartmentComponent from "@/component/department-components/about-department-component/AboutDepartmentComponent";
import HodMessageComponent from "@/component/department-components/hod-message-component/HodMessageComponent";
import CoursesOfferedDepartment from "@/component/department-components/courses-offered-departments/CoursesOfferedDepartment";
import { Api } from "@/lib/api";
export default async function DepartmentPage() {
  const [departmentBannerData] = await Promise.all([Api.getHomeBanners()]);
  return (
    <>
      <BannerComponent data={departmentBannerData}/>
      <AboutDepartmentComponent />
      <HodMessageComponent />
      <CoursesOfferedDepartment />
    </>
  );
}
