import React from "react";
import GridCard1 from "../department-components/gridCard1/GridCard1";
import Image from "next/image";
import Link from "next/link";

export default function TableSection({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "table_section":
        return (
          <div key={sectionIndex}>
            {section.items[0]?.heading && (
              <h4 className="heading ">{section.items[0].heading}</h4>
            )}
            {section.items[0]?.subHeading && (
              <p className=" sub_heading">{section.items[0].subHeading}</p>
            )}

            <div className="table-responsive">
              <table className="table-lab table table-bordered">
                <thead>
                  <tr>
                    <th>S.No</th>
                    {section.items[0].tableHeadings.map((th, thIndex) => (
                      <th key={thIndex}>{th.tableHeading}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {section.items.map((item, itemIdx) => (
                    <tr key={itemIdx}>
                      <td>{itemIdx + 1}</td>
                      {item.tableDatas.map((singleData, dataIdx) => (
                        <td key={dataIdx}>{singleData.tableData}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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
