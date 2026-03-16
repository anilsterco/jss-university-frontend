import SchoolBannerComponent from "@/component/home-components/banner/school-banner/SchoolBannerComponent";
import DepartmentHeader from "@/component/department-components/departmentHeader/DepartmentHeader";
import DepartmentComponent from "@/component/school-components/browse-department/DepartmentComponent";
import FacilitiesComponent from "@/component/school-components/facilities-component/FacilitiesComponent";
import AboutSchoolComponent from "@/component/school-components/about-school-component/AboutSchoolComponent";
import FacultySchool from "@/component/school-components/faculty-list-school/FacultySchool";
import HappingsHomeComponent from "@/component/home-components/home-happening/HappeningsHomeComponent";
import { getPageSEO } from "@/lib/seo";
import Script from "next/script";
import { BASE_URL } from "@/config/config";
import Programs from "@/pages/programs/Programs";
import { Suspense } from "react";
import Faculties from "@/pages/faculties/Faculties";
import CommonPage from "@/pages/commonPage/CommonPage";
import HappeningsClient from "@/app/happenings/HappeningsClient";
import FaqPage from "@/pages/faq/Faq";
import { notFound } from "next/navigation";
import Departments from "@/pages/departments/Departments";

export async function generateMetadata({ params }) {
  const { school } = await params;
  return getPageSEO(school);
}

async function getSchoolData(slug, section) {
  try {
    const res = await fetch(`${BASE_URL}school-pages/${slug}/${section}`, {
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    if (!data) return null;
    return data;
  } catch (error) {
    return null;
  }
}

export default async function SchoolPage({ params }) {
  const { school, section } = await params;

  const schoolData = await getSchoolData(school, section);

  if (!schoolData) notFound();

  const seoData = await getPageSEO(school);

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />

      {/* <BelowBannerComponent /> */}
      <DepartmentHeader data={schoolData?.tabs} className="inner_sub_header" />

      {section && section == "programs" ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Programs data={schoolData?.data} />
        </Suspense>
      ) : section == "faculties" ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Faculties data={schoolData?.data} />
        </Suspense>
      ) : section == "departments" ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Departments data={schoolData?.data} />
        </Suspense>
      ) : section == "happenings" ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <HappeningsClient className="inner_happening" />
        </Suspense>
      ) : section == "faqs" ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <FaqPage data={departmentData?.data} />
        </Suspense>
      ) : schoolData?.slug?.includes(section) ? (
        <CommonPage data={schoolData.sections} />
      ) : (
        <h1>no data</h1>
      )}
    </>
  );
}
