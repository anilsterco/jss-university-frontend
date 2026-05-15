import DepartmentSlider from "@/component/home-components/banner/school-banner/SchoolBannerComponent";
import DepartmentHeader from "@/component/department-components/departmentHeader/DepartmentHeader";
import BannerComponent from "@/component/home-components/banner/BannerComponent";
import AboutDepartmentComponent from "@/component/department-components/about-department-component/AboutDepartmentComponent";
import HodMessageComponent from "@/component/department-components/hod-message-component/HodMessageComponent";
import CoursesOfferedDepartment from "@/component/department-components/courses-offered-departments/CoursesOfferedDepartment";
import FacultyList from "@/component/department-components/faculty-list-department/FacultyList";
import LaboratoryComponent from "@/component/department-components/laboratory-department/LaboratoryComponent";
import HappingsHomeComponent from "@/component/home-components/home-happening/HappeningsHomeComponent";
import PlacementDepartment from "@/component/department-components/Placement-department/PlacementDepartment";
import { getPageSEO } from "@/lib/seo";
import Script from "next/script";
import { BASE_URL } from "@/config/config";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { department } = await params;
  return getPageSEO(`department/${department}`);
}

async function getDepartmentData(slug) {
  const isDev = process.env.NODE_ENV === 'development';

  const res = await fetch(`${BASE_URL}department/${slug}`, isDev ? {
    cache:"no-store"
  } : {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  if (!data) {
    return null;
  }

  return data;
}

export default async function DepartmentPage({ params }) {
  const { department } = await params;

  const departmentData = await getDepartmentData(department);
  if (!departmentData) notFound();
  const seoData = await getPageSEO(`department/${department}`);

  return (
    <>
      {seoData?.schema && (
        <Script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.schema),
          }}
          strategy="beforeInteractive"
        />
      )}
      {/* <DepartmentSlider
        data={departmentData?.sections?.banners}
        name={departmentData?.departments_name}
        isDepartment={true}
      /> */}
      <BannerComponent
        data={departmentData?.sections?.banners}
        name={departmentData?.department_name}
        isDepartment={true}
        slug={departmentData?.departments_slug}
      />
      {departmentData?.sections?.tabs && (
        <DepartmentHeader data={departmentData.sections.tabs} />
      )}
      {departmentData?.sections?.about_school && (
        <AboutDepartmentComponent
          data={departmentData.sections.about_school}
          params={department}
        />
      )}
      {departmentData?.sections?.courses_data && (
        <CoursesOfferedDepartment data={departmentData.sections.course_data} />
      )}
      {departmentData?.sections?.dean_message && departmentData.sections.dean_message.message !== null && departmentData.sections.dean_message.name !== null && (
        <HodMessageComponent data={departmentData.sections.dean_message} />
      )}

      {departmentData?.sections?.laboratories_data && (
        <LaboratoryComponent data={departmentData.sections.laboratories_data} />
      )}

      {departmentData?.sections?.faculty_data && (
        <FacultyList data={departmentData.sections.faculty_data} />
      )}

      {departmentData?.sections?.placements && (
        <PlacementDepartment data={departmentData.sections.placements} />
      )}

      {departmentData?.sections?.happenings?.happenings.length > 0 && (
        <HappingsHomeComponent data={departmentData.sections.happenings} />
      )}
      {/* {departmentData?.sections?.faqs && (
        <FnqComponent data={departmentData.sections.faqs} />
      )} */}
    </>
  );
}
