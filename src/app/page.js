import BannerComponent from "../component/home-components/BannerComponent";
import CourseOfferedComponent from "../component/home-components/CourseOfferedComponent";
import PlacementComponent from "../component/home-components/PlacementComponent";
import FacilitiesComponent from "../component/home-components/FacilitiesComponent";
import AboutHomeComponent from "../component/home-components/AboutHomeComponent";
import TestimonialComponent from "../component/home-components/TestimonialComponent";
import HappingsHomeComponent from "../component/home-components/HappingsHomeComponent";

export default function HomePage() {
  return (
    <div>
      <BannerComponent />
      <CourseOfferedComponent />
      <PlacementComponent />
      <FacilitiesComponent />
      <AboutHomeComponent />
      <TestimonialComponent />
      <HappingsHomeComponent />
    </div>
  );
}
