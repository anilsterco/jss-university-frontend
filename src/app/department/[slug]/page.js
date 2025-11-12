import BannerComponent from "@/component/home-components/banner/BannerComponent";
import AboutDepartmentComponent from "@/component/department-components/about-department-component/AboutDepartmentComponent";
import HodMessageComponent from "@/component/department-components/hod-message-component/HodMessageComponent";
import CoursesOfferedDepartment from "@/component/department-components/courses-offered-departments/CoursesOfferedDepartment";
import FacultyList from "@/component/department-components/faculty-list-department/FacultyList";
import LaboratoryComponent from "@/component/department-components/laboratory-department/LaboratoryComponent";
import HappingsHomeComponent from "@/component/home-components/home-happening/HappeningsHomeComponent";
import FnqComponent from "@/component/department-components/fnq-department/FnqComponent";

const BASE_URL = "https://project-demo.in/jss/api";
// https://project-demo.in/jss/api/department/mechanical-engineering
async function getDepartmentData(slug) {
  const res = await fetch(`${BASE_URL}/department/${slug}`, {
    next: { revalidate: 120 }, // cache for 2 mins
  });
  console.log(res);
  if (!res.ok) {
    console.error("❌ API Error:", res.status);
    throw new Error(`Failed to fetch school data for ${slug}`);
  }
  return res.json();
}

export default async function DepartmentPage({ params }) {
  const { slug } = params;
  const departmentData = await getDepartmentData(slug);
  console.log(departmentData.sections, "departmentData.sections");
  return (
    <>
      <BannerComponent data={departmentData.sections.banners} />
      <AboutDepartmentComponent data={departmentData.sections.about_school} />
      <HodMessageComponent data={departmentData.sections.dean_message} />
      <CoursesOfferedDepartment data={departmentData.sections.courses_data} />
      <FacultyList data={departmentData.sections.faculty_data} />
      <LaboratoryComponent />
      <HappingsHomeComponent />
      <FnqComponent />
    </>
  );
}
