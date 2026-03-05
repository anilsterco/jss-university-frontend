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
import Labspage from "@/pages/labs/Labs";

export async function generateMetadata({ params }) {
  const { department } = await params;
  return getPageSEO(department);
}

async function getDepartmentData(slug, section) {
  const res = await fetch(`${BASE_URL}department-pages/${slug}/${section}`, {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    throw new Error(
      `Failed to fetch department data for ${section} (status ${res.status})`,
    );
  }

  return res.json();
}

export default async function DepartmentPage({ params }) {
  const { department, section } = await params;

  const departmentData = await getDepartmentData(department, section);
  const seoData = await getPageSEO(department);

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
      <DepartmentHeader
        data={departmentData?.tabs}
        className="inner_sub_header"
      />

      {section && section == "programs" ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Programs data={departmentData?.data} />
        </Suspense>
      ) : section == "faculties" ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Faculties data={departmentData?.data} />
        </Suspense>
      ) : section == "happenings" ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <HappeningsClient className="inner_happening" />
        </Suspense>
      ) : section == "faqs" ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <FaqPage data={departmentData?.data} />
        </Suspense>
      ) : section == "labs" ? (
        <Suspense fallback={<h1>Loading...</h1>}>
          <Labspage data={departmentData} />
        </Suspense>
      ) : departmentData?.slug?.includes(section) ? (
        <CommonPage data={departmentData.sections} />
      ) : (
        <h1>no data</h1>
      )}
    </>
  );
}
