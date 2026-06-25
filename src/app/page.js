import BannerComponent from "../component/home-components/banner/BannerComponent";
import CourseOfferedComponent from "../component/home-components/courses-offered-home/CourseOfferedComponent";
import PlacementComponent from "../component/home-components/placement/PlacementComponent";
import FacilitiesComponent from "../component/home-components/facilities/FacilitiesComponent";
import AboutHomeComponent from "../component/home-components/about-home-jss/AboutHomeComponent";
import TestimonialComponent from "../component/home-components/testimonial/TestimonialComponent";
import HappingsHomeComponent from "../component/home-components/home-happening/HappeningsHomeComponent";
// import PhDApplicationForm from "../component/common/Phd-form/PhDApplicationForm";
import { getPageSEO } from "@/lib/seo";
import Script from "next/script";
import { APPLY_NOW, BASE_URL, WEB_URL } from "@/config/config";
import PopupModal from "@/component/PopupModal";
import Link from "next/link";
import HeaderBottomBanner from "@/component/home-components/HeaderBottomBanner";

export async function generateMetadata() {
  return await getPageSEO();
}

async function getSchoolData() {
  const isDev = process.env.NODE_ENV === 'development';

  const res = await fetch(`${BASE_URL}homepage`, isDev ? {
    cache:"no-store"
  } : {
    next: { revalidate: 120 },
  });

  if (!res.ok) {
    console.error("? API Error:", res.status);
    throw new Error(`Failed to fetch data`);
  }
  return res.json();
}

export default async function HomePage() {
  const seoData = await getPageSEO();
  const homepageData = await getSchoolData();
  return (
    <div>
      {seoData.schema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(seoData.schema),
          }}
        />
      )}
      <BannerComponent data={homepageData.sections.banners} />
      <HeaderBottomBanner/>
      <div className="animated-hover">
        <CourseOfferedComponent
          data={homepageData.sections.departments_section}
        />
      </div>
      <PlacementComponent data={homepageData.sections.placement_section} />
      <FacilitiesComponent data={homepageData.sections.facilities_section} />
      <AboutHomeComponent data={homepageData.sections.about_section} />
      <TestimonialComponent data={homepageData.sections.testimonial_section} />
      <HappingsHomeComponent data={homepageData.sections.happening_section} />
      <div className="fixButtons">
        <Link
          href={WEB_URL + 'upcoming-events'}
          className="vertical-floating-btn"
        >
          Upcoming Events
        </Link>
        <Link
          href={APPLY_NOW}
          target="_blank"
          className="vertical-floating-btn CTA_Applynow"
        >
          Apply Now
        </Link>
        <Link href={WEB_URL + "programs"} className="vertical-floating-btn">
          programme
        </Link>
      </div>
      <PopupModal />
      {/* <PhDApplicationForm />
      <CareersFormData /> */}
    </div>
  );
}
