import BannerComponent from "@/component/home-components/banner/BannerComponent";
import BelowBannerComponent from "@/component/school-components/below-banner-component/BelowBannerComponent";
import DepartmentComponent from "@/component/school-components/browse-department/DepartmentComponent";
import PlacementComponent from "@/component/home-components/placement/PlacementComponent";
import AboutSchoolComponent from "@/component/school-components/about-school-component/AboutSchoolComponent";
import TestimonialComponent from "@/component/home-components/testimonial/TestimonialComponent";
import HappingsHomeComponent from "@/component/home-components/home-happening/HappeningsHomeComponent";
import { getPageSEO } from "@/lib/seo";
import Script from "next/script";

const BASE_URL = "https://project-demo.in/jss/api";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return await getPageSEO(slug);
}

async function getSchoolData(slug) {
  const res = await fetch(`${BASE_URL}/school/${slug}`, {
    next: { revalidate: 120 }, // cache for 2 mins
  });
  if (!res.ok) {
    console.error("❌ API Error:", res.status);
    throw new Error(`Failed to fetch school data for ${slug}`);
  }
  return res.json();
}
export default async function SchoolPage({ params }) {
  const { slug } = params;
  const schoolData = await getSchoolData(slug);
  const seoData = await getPageSEO(slug);
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
      <BannerComponent data={schoolData.sections.banners} />
      <BelowBannerComponent />
      {schoolData.sections.course_data.title && (
        <DepartmentComponent data={schoolData.sections.course_data} />
      )}
      {schoolData.sections.placements.title && (
        <PlacementComponent data={schoolData.sections.placements} />
      )}
      {schoolData.sections.about_school.title && (
        <AboutSchoolComponent data={schoolData.sections.about_school} />
      )}
      {schoolData.sections.testimonials.title && (
        <TestimonialComponent data={schoolData.sections.testimonials} />
      )}
      {schoolData.sections.happenings.title && (
        <HappingsHomeComponent data={schoolData.sections.happenings} />
      )}
    </>
  );
}
