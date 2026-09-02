import React from "react";

export default function TopSection({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "top_section":
        return (
          <section
            key={sectionIndex}
            className={`top_section ${section.items?.[0].customClass} ${section.items?.[0].sectionType}`}
          >
            <div className="container">
              <div className="">
                {section?.items &&
                  section.items.length >= -1 &&
                  section.items.map((item, idx) => (
                    <React.Fragment key={idx}>
                      <h5
                        className="about_subtitle"
                        dangerouslySetInnerHTML={{ __html: item?.heading }}
                      />
                      <p
                        className={`about_subHeading ${item?.sub_heading && "less"}`}
                      >
                        {item.sub_heading}
                      </p>
                      {item?.desc && <p className="about_desc">{item.desc}</p>}
                    </React.Fragment>
                  ))}
              </div>
            </div>
          </section>
        );
    }
  };

  return (
    <>
      {data && data.length > 0 ? (
        data.map((section, index) => renderSection(section, index))
      ) : (
        <div className="abt_cntnt" data-aos="fade-up">
          <p>There is no data!</p>
        </div>
      )}
    </>
  );
}
