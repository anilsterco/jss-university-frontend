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
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const { school } = await params;
  return getPageSEO(school);
}

async function getSchoolData(slug) {
  try {
    const res = await fetch(`${BASE_URL}school/${slug}`, {
      next: { revalidate: 120 },
    });

    if (!res.ok) {
      return null;
    }

    const data = await res.json();

    if (!data || !data.school_name) return null;
    return data;
  } catch (error) {
    return null;
  }
}

export default async function SchoolPage({ params }) {
  const { school } = await params;

  const schoolData = await getSchoolData(school);

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

      <SchoolBannerComponent
        data={schoolData?.sections?.banners}
        name={schoolData?.school_name}
        slug={schoolData?.school_slug}
      />

      {/* <BelowBannerComponent /> */}
      <DepartmentHeader data={schoolData?.sections?.tabs} />

      {schoolData?.sections?.course_data?.title && (
        <DepartmentComponent
          data={schoolData.sections.course_data}
          departments={schoolData.sections.departments}
          schoolName={schoolData?.school_name}
          schoolSlug={schoolData?.school_slug}
        />
      )}

      {/* {schoolData?.sections?.placements?.title && (
        <PlacementComponent data={schoolData.sections.placements} />
      )} */}

      {schoolData?.sections?.about_school?.title && (
        <FacilitiesComponent data={schoolData.sections.facilities} />
      )}
      {schoolData?.sections?.about_school?.title && (
        <AboutSchoolComponent data={schoolData.sections.about_school} />
      )}

      {schoolData?.sections?.faculty && (
        <FacultySchool
          data={schoolData.sections.faculty}
          schoolName={schoolData?.school_name}
        />
      )}

      {schoolData?.sections?.happenings?.title && (
        <HappingsHomeComponent data={schoolData.sections.happenings} />
      )}
    </>
  );
}
