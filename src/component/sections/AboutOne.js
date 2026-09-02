
import AboutTopBanner from "./aboutOne/AboutTopBanner";
import AboutLogoDesc from "./aboutOne/AboutLogoDesc";
import AboutLogoDescGrid from "./aboutOne/AboutLogoDescGrid";

export default function AboutOne({ data, extraClass }) {
  if (!data?.length) {
    return (
      <div className="abt_cntnt" data-aos="fade-up">
        <p>Welcome to JSS Academy of Technical Education</p>
      </div>
    );
  }

  return(
    <>
      {data.map((section, index) => {
        const key =
          section.id ||
          section.sectionId ||
          `${section.type}-${index}`;

        switch (section.type) {
          case "topBanner":
            return (
              <AboutTopBanner
                key={key}
                section={section}
                extraClass={extraClass}
              />
            );

          case "logoDesc":
            return (
              <AboutLogoDesc
                key={key}
                section={section}
              />
            );

          case "logoDescGrid":
            return (
              <AboutLogoDescGrid
                key={key}
                section={section}
              />
            );

          default:
            return null;
        }
      })}
    </>
  )
}


