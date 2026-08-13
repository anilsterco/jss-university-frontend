import SchoolBannerComponent from "@/component/home-components/banner/school-banner/SchoolBannerComponent";
import DepartmentHeader from "@/component/department-components/departmentHeader/DepartmentHeader";
import DepartmentComponent from "@/component/school-components/browse-department/DepartmentComponent";
import FacilitiesComponent from "@/component/school-components/facilities-component/FacilitiesComponent";
import AboutSchoolComponent from "@/component/school-components/about-school-component/AboutSchoolComponent";
import FacultySchool from "@/component/school-components/faculty-list-school/FacultySchool";
import HappingsHomeComponent from "@/component/home-components/home-happening/HappeningsHomeComponent";
import { getPageSEO } from "@/lib/seo";
import Script from "next/script";
import { BASE_URL } from "@/config/config.mjs";
import Programs from "@/pages/programs/Programs";
import { Suspense } from "react";
import Faculties from "@/pages/faculties/Faculties";
import CommonPage from "@/pages/commonPage/CommonPage";
import HappeningsClient from "@/app/happenings/HappeningsClient";
import FaqPage from "@/pages/faq/Faq";
import Labspage from "@/pages/labs11/Labs";
import { notFound } from "next/navigation";
import TabsContent from "@/component/common/tabsContent/TabsContent";
import TabsDataContent from "@/component/sections/TabsDataContents";
import Departments from "@/pages/departments/Departments";
import TestimonialInnerPage from "@/pages/testimonials/Testimonials";
import SocietyPage from "@/pages/society/Society";

export async function generateMetadata({ params }) {
  const { department, section } = await params;
  return getPageSEO(`department/${department}/${section}`);
}

const fetchDepartmentPage = async(slug, section, isDev)=>{
  const res = await fetch(`${BASE_URL}department-pages/${slug}/${section}`, isDev ? {
    cache:"no-store"
  } : {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  if (!data) return null;
  return data;
}

const fetchDepartmentSociety = async(slug, isDev)=>{
  const res = await fetch(`${BASE_URL}societies/${slug}`, isDev ? {
    cache:"no-store"
  } : {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  if (!data) return null;
  return data?.data?.societies;
}

async function getDepartmentData(slug, section) {
  const isDev = process.env.NODE_ENV === 'development';

  try {
    const [pageData, societyData] = await Promise.all([fetchDepartmentPage(slug, section, isDev), fetchDepartmentSociety(slug, isDev)]);

    if (!pageData) return null;

    return {
      ...pageData,
      societyData
    };
    
  } catch (err) {
    return null;
  }
}

export default async function DepartmentPage({ params }) {
  const { department, section } = await params;

  const departmentData = await getDepartmentData(department, section);
  if (!departmentData) notFound();
  console.log('departmentData',departmentData);
  const seoData = await getPageSEO(`department/${department}/${section}`);

  const pageName = department.replace(/-/g, ' ') + " " + section.replace(/-/g, ' ');
  const titleCase = pageName
  .split(' ')
  .map(word => word.charAt(0).toUpperCase() + word.slice(1))
  .join(' ');

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

      

        <h1 className="d-none">{titleCase}</h1>

      {/* <BelowBannerComponent /> */}
      <DepartmentHeader
        data={departmentData?.tabs}
        className="inner_sub_header"
      />

      {section && section == "programs" ? (
        <Suspense fallback={<p>Loading...</p>}>
          <Programs data={departmentData?.data} />
        </Suspense>
      ) : section == "faculties" ? (
        <Suspense fallback={<p>Loading...</p>}>
          <Faculties data={departmentData?.data} />
        </Suspense>
      ) : section == "alumni" ? (
        <Suspense fallback={<p>Loading...</p>}>
          <Departments
            data={departmentData?.data}
            title="Alumni"
            type="alumni"
          />
        </Suspense>
      ) : section == "happenings" ? (
        <Suspense fallback={<p>Loading...</p>}>
          <HappeningsClient className="inner_happening" />
        </Suspense>
      ) : section == "labs" ? (
        <Suspense fallback={<p>Loading...</p>}>
          <Labspage data={departmentData?.sections} />
        </Suspense>
      ) : section == "testimonials" ? (
        <Suspense fallback={<p>Loading...</p>}>
          <TestimonialInnerPage data={departmentData?.data} />
        </Suspense>
      ) : section == "faqs" ? (
        <Suspense fallback={<p>Loading...</p>}>
          <FaqPage data={departmentData?.data} />
        </Suspense>
      ) : section == "society" ? (
        <Suspense fallback={<p>Loading...</p>}>
          <SocietyPage societies={departmentData?.societyData} />
        </Suspense>
      ) : departmentData?.slug?.includes(section) ? (
        <CommonPage data={departmentData.sections} />
      ) : (
        <p>no data</p>
      )}

      {section && section == "research" && <TabsContent />}
    </>
  );
}
