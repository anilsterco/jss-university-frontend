import BannerComponent from "../component/home-components/banner/BannerComponent";
import CourseOfferedComponent from "../component/home-components/courses-offered-home/CourseOfferedComponent";
import PlacementComponent from "../component/home-components/placement/PlacementComponent";
import FacilitiesComponent from "../component/home-components/facilities/FacilitiesComponent";
import AboutHomeComponent from "../component/home-components/about-home-jss/AboutHomeComponent";
import TestimonialComponent from "../component/home-components/testimonial/TestimonialComponent";
import HappingsHomeComponent from "../component/home-components/home-happening/HappeningsHomeComponent";

export default async function HomePage() {
  return (
    <div>
      <BannerComponent />
      <CourseOfferedComponent />
      <PlacementComponent />
      {/* <FacilitiesComponent /> */}
      <AboutHomeComponent />
      <TestimonialComponent />
      <HappingsHomeComponent />
    </div>
  );
}
