import { Suspense } from "react";
import { cache } from "react";
import BannerComponent from "../component/home-components/banner/BannerComponent";
import CourseOfferedComponent from "../component/home-components/courses-offered-home/CourseOfferedComponent";
import PlacementComponent from "../component/home-components/placement/PlacementComponent";
import FacilitiesComponent from "../component/home-components/facilities/FacilitiesComponent";
import AboutHomeComponent from "../component/home-components/about-home-jss/AboutHomeComponent";
import TestimonialComponent from "../component/home-components/testimonial/TestimonialComponent";
import HappingsHomeComponent from "../component/home-components/home-happening/HappeningsHomeComponent";
import { getPageSEO } from "@/lib/seo";
import { APPLY_NOW, BASE_URL, WEB_URL } from "@/config/config";
import PopupModal from "@/component/PopupModal";
import Link from "next/link";
import HeaderBottomBanner from "@/component/home-components/HeaderBottomBanner";

const getPageSEOCached = cache(getPageSEO);

export async function generateMetadata() {
  return await getPageSEOCached();
}

const fetchOpts = process.env.NODE_ENV === "development"
  ? { cache: "no-store" }
  : { next: { revalidate: 120 } };

async function getSchoolData() {
  const res = await fetch(`${BASE_URL}homepage`, fetchOpts);
  if (!res.ok) {
    console.error("Homepage API Error:", res.status);
    throw new Error("Failed to fetch homepage data");
  }
  return res.json();
}

async function getPopupData() {
  try {
    const res = await fetch(`${BASE_URL}popup`, fetchOpts);
    if (!res.ok) {
      console.error("Popup API Error:", res.status);
      return null;
    }
    const data = await res.json();
    return data?.popup ?? null;
  } catch (error) {
    console.error("Error fetching popup data:", error);
    return null;
  }
}

async function PopupModalServer() {
  const popupData = await getPopupData();
  return <PopupModal data={popupData} />;
}

export default async function HomePage() {

  const [seoData, homepageData] = await Promise.all([
    getPageSEOCached(),
    getSchoolData(),
  ]);

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

      <Suspense fallback={null}>
        <PopupModalServer />
      </Suspense>

      <h1 style={{
        display: "none",
      }}>Private University In Noida</h1>

      <BannerComponent data={homepageData.sections.banners} />
      <HeaderBottomBanner />
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
        <Link href={WEB_URL + "upcoming-events"} className="vertical-floating-btn">
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
    </div>
  );
}