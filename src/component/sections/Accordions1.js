import React from "react";
import IQAC from "@/pages/IQAC/IQAC";
import AccordionTabs from "../common/accordionTabs/AccordionTabs";

export default function Accordions1({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "accordionTabs":
        return (
          <React.Fragment key={sectionIndex}>
            {/* <IQAC data={section.items} /> */}
            <AccordionTabs data={section.items} />
          </React.Fragment>
        );
    }
  };

  return (
    <div className={`iqac_master ${data?.[0]?.items[0]?.pageType}`}>
      {data && data.length > 0 ? (
        data.map((section, index) => renderSection(section, index))
      ) : (
        <div className="abt_cntnt" data-aos="fade-up">
          <p>There is no data!</p>
        </div>
      )}
      {/* // <h1 style={{ fontSize: '100px' }}>testing</h1> */}
    </div>
  );
}
