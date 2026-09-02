import React from "react";
import GridDepartmentComponent from "../department-components/gridDepartment/GridDepartment";

export default function GridDepartment({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "gridDepartment":
        return (
          <div key={sectionIndex}>
            {section?.items &&
              section.items.length > -1 &&
              section.items.map((item, idx) => (
                <React.Fragment key={idx}>
                  <h4 className="heading">{item.heading}</h4>
                  <p className="sub_heading">{item.sub_heading}</p>

                  <div className="row mx_3xl_-1_3 mt_3xl_7">
                    {item?.grid &&
                      item.grid.map((singleCard, cardIdx) => (
                        <GridDepartmentComponent
                          key={cardIdx}
                          data={singleCard}
                        />
                      ))}
                  </div>
                </React.Fragment>
              ))}
          </div>
        );
    }
  };

  return (
    <section className="grid_card_department_section">
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
