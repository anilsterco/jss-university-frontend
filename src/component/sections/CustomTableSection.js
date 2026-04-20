import React from "react";
import GridCard1 from "../department-components/gridCard1/GridCard1";
import Image from "next/image";
import Link from "next/link";

export default function CustomTableSection({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "custom_table_section":
        return (
          <div key={sectionIndex} id="feestructure">
            {section.items[0]?.heading && (
              <h4 className="heading ">{section.items[0].heading}</h4>
            )}
            {section.items[0]?.subHeading && (
              <p
                className=" sub_heading"
                dangerouslySetInnerHTML={{
                  __html: section.items[0].subHeading,
                }}
              />
            )}

              <div dangerouslySetInnerHTML={{
                __html:section.items[0].customTableArea
              }} />
              {section.items[0]?.desc && (
                <h5
                
                  className="sub_heading mt-5"
                  dangerouslySetInnerHTML={{ __html: section.items[0].desc }}
                />
              )}
          </div>
        );
    }
  };

  return (
    <section
      className={`table_section ${data[0].items[0].pageType == "placement" && "bg-gray"}`}
    >
      <div className="container">
        {data && data.length > 0 ? (
          data.map((section, index) => renderSection(section, index))
        ) : (
          <div className="abt_cntnt" data-aos="fade-up">
            <p>There is no data!</p>
          </div>
        )}
        {/* // <h1 style={{ fontSize: '100px' }}>testing</h1> */}
      </div>
    </section>
  );
}
