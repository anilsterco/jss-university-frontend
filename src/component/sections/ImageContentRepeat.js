import Image from "next/image";
import CounterCard from "../department-components/counterCard/CounterCard";
import ImageContent from "../department-components/imageContent/ImageContent";

export default function ImageContentRepeat({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "imageContentRepeat":
        return (
          <div className="row" key={sectionIndex}>
            <div className={`${data[0]?.items?.[0]?.extraClass} mx-auto`}>
              <div
                className={`single_image_content ${data[0]?.items?.[0]?.type}`}
              >
                {section?.items &&
                  section.items.length >= -1 &&
                  section.items.map((item, idx) => (
                    <ImageContent
                      key={idx}
                      data={item}
                      id={idx}
                      type={item?.type}
                      extraClass={item?.extraClass}
                    />
                  ))}
              </div>
            </div>
          </div>
        );

      default:
        return <h1>there is some error in switch!!</h1>;
    }
  };

  return (
    <section
      className={`image_content_repeat_section ${data[0]?.items?.[0]?.type}`}
    >
      <div className="container">
        {data && data.length > 0 ? (
          data.map((section, index) => renderSection(section, index))
        ) : (
          <div className="abt_cntnt" data-aos="fade-up">
            <p>There is no data!</p>
          </div>
        )}
      </div>
    </section>
  );
}
