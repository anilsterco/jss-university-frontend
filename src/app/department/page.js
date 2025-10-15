import { Api } from "@/lib/api";
import BannerComponent from "@/component/home-components/banner/BannerComponent";
import AboutDepartmentComponent from "@/component/department-components/about-department-component/AboutDepartmentComponent";
import HodMessageComponent from "@/component/department-components/hod-message-component/HodMessageComponent";
import CoursesOfferedDepartment from "@/component/department-components/courses-offered-departments/CoursesOfferedDepartment";
import FacultyList from "@/component/department-components/faculty-list-department/FacultyList";
import LaboratoryComponent from "@/component/department-components/laboratory-department/LaboratoryComponent";
import HappingsHomeComponent from "@/component/home-components/home-happening/HappeningsHomeComponent";
import FnqComponent from "@/component/department-components/fnq-department/FnqComponent";
export default async function DepartmentPage() {
  const [departmentBannerData] = await Promise.all([Api.getHomeBanners()]);
  return (
    <>
      <BannerComponent data={departmentBannerData} />
      <AboutDepartmentComponent />
      <HodMessageComponent />
      <CoursesOfferedDepartment />
      <FacultyList />
      <LaboratoryComponent />
      <HappingsHomeComponent />
      <FnqComponent />
    </>
  );
}
