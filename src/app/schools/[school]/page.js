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

export async function generateMetadata({ params }) {
    const { school } = await params;
    return getPageSEO(school);
}

async function getSchoolData(slug) {
    const res = await fetch(`${BASE_URL}/school/${slug}`, {
        next: { revalidate: 120 },
    });

    if (!res.ok) {
        throw new Error(`Failed to fetch school data for ${slug} (status ${res.status})`);
    }

    return res.json();
}

export default async function SchoolPage({ params }) {
    const { school } = await params;

    const schoolData = await getSchoolData(school);
    const seoData = await getPageSEO(school);

    const STATIC_SECTIONS = [
        { title: "About The Department", slug: "school-of-engineering/about-the-school" },
        { title: "Programs", slug: "school-of-engineering/programs" },
        { title: "Research", slug: "school-of-engineering/research" },
        { title: "Labs", slug: "school-of-engineering/labs" },
        { title: "Facilities", slug: "school-of-engineering/facilities" },
        { title: "Placements", slug: "school-of-engineering/placements" },
        { title: "Faculties", slug: "school-of-engineering/faculties" },
        { title: "Alumni", slug: "school-of-engineering/alumni" },
        { title: "Innovations", slug: "school-of-engineering/innovations" },
        { title: "FAQ's", slug: "school-of-engineering/faqs" },
        { title: "Happenings", slug: "school-of-engineering/happenings" },
    ];

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
            />

            {/* <BelowBannerComponent /> */}
            <DepartmentHeader STATIC_SECTIONS={STATIC_SECTIONS} />


            {schoolData?.sections?.course_data?.title && (
                <DepartmentComponent data={schoolData.sections.course_data} />
            )}

            {/* {schoolData?.sections?.placements?.title && (
        <PlacementComponent data={schoolData.sections.placements} />
      )} */}


            {schoolData?.sections?.about_school?.title && (
                <FacilitiesComponent data={schoolData.sections.about_school} />
            )}
            {schoolData?.sections?.about_school?.title && (
                <AboutSchoolComponent data={schoolData.sections.about_school} />
            )}

            {schoolData?.sections?.testimonials?.title && (
                <FacultySchool data={schoolData.sections.testimonials} />
            )}

            {schoolData?.sections?.happenings?.title && (
                <HappingsHomeComponent data={schoolData.sections.happenings} />
            )}
        </>
    );
}