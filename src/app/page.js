import BannerComponent from "../component/home-components/banner/BannerComponent";
import CourseOfferedComponent from "../component/home-components/courses-offered-home/CourseOfferedComponent";
import PlacementComponent from "../component/home-components/placement/PlacementComponent";
import FacilitiesComponent from "../component/home-components/facilities/FacilitiesComponent";
import AboutHomeComponent from "../component/home-components/about-home-jss/AboutHomeComponent";
import TestimonialComponent from "../component/home-components/testimonial/TestimonialComponent";
import HappingsHomeComponent from "../component/home-components/home-happening/HappeningsHomeComponent";
import { getPageSEO } from "@/lib/seo";
import Script from "next/script";

export async function generateMetadata() {
  return await getPageSEO("home"); // or 'homepage'
}

const BASE_URL = "https://project-demo.in/jss/api";
async function getSchoolData() {
  const res = await fetch(`${BASE_URL}/homepage`, {
    next: { revalidate: 120 }, // cache for 2 mins
  });

  if (!res.ok) {
    console.error("? API Error:", res.status);
    throw new Error(`Failed to fetch data`);
  }
  return res.json();
}

export default async function HomePage() {
  const seoData = await getPageSEO("home");
  const homepageData = await getSchoolData();
  console.log(homepageData, "homepageData");
  return (
    <div>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(seoData.schema),
        }}
        strategy="beforeInteractive"
      />
      <BannerComponent data={homepageData.sections.banners} />
      <CourseOfferedComponent
        data={homepageData.sections.departments_section}
      />
      <PlacementComponent data={homepageData.sections.placement_section} />
      <FacilitiesComponent data={homepageData.sections.facilities_section} />
      <AboutHomeComponent data={homepageData.sections.about_section} />
      <TestimonialComponent data={homepageData.sections.testimonial_section} />
      <HappingsHomeComponent data={homepageData.sections.happening_section} />
    </div>
  );
}
