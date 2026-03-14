import React from "react";
import TableContentComponent from "../common/tableContent/TableContent";

export default function TableContent({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "tableContent":
        return (
          <React.Fragment key={sectionIndex}>
            {section?.items &&
              section.items.length > -1 &&
              section.items.map((item, idx) => (
                <TableContentComponent data={item} key={idx} />
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
