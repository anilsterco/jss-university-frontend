import React from "react";
import TabsContent from "../common/tabsContent/TabsContent";

export default function TabsContents({ data }) {
  const renderSection = (section, sectionIndex) => {
    // console.log("section", section);
    switch (section.type) {
      case "tabsContents":
        return (
          <React.Fragment key={sectionIndex}>
            {section?.items &&
              section.items.length > -1 &&
              section.items.map((item, idx) => (
                <TabsContent key={idx} item={item} />
              ))}
          </React.Fragment>
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
      {/* // <h1 style={{ fontSize: '100px' }}>testing</h1> */}
    </>
  );
}
