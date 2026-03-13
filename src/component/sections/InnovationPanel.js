import React from "react";
import HODMessage from "../department-components/hod-message-component/HodMessageComponent";

export default function InnovationPanel({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "innovation_panel":
        return (
          <section key={sectionIndex}>
            {section?.items &&
              section.items.length >= 0 &&
              section.items.map((item, idx) => (
                <HODMessage key={idx} data={item} />
              ))}
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
      {/* // <h1 style={{ fontSize: '100px' }}>testing</h1> */}
    </>
  );
}
