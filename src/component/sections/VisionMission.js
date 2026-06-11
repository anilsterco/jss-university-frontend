import React from "react";

export default function VisionMission({ data }) {
  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "vision_mission":
        return (
          <React.Fragment key={sectionIndex}>
            {section?.items &&
              section.items.length > -1 &&
              section.items.map((item, idx) => (
                <section key={idx} className={`vision_mission_section ${item?.custom_class}`}>
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-6 col-md-12 left_col">
                        <div className="vision">
                          {item?.leftTitle && (
                            <h2 className="title">{item.leftTitle}</h2>
                          )}
                          {item?.leftContent && <p dangerouslySetInnerHTML={{__html:item.leftContent}}/>}
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-12">
                        <div className="mission-card">
                          {item?.rightTitle && (
                            <h2 className="title">{item.rightTitle}</h2>
                          )}
                          {item?.rightLists && (
                            <ul>
                              {item.rightLists.map((rightlistItem, listIdx) => (
                                <li key={listIdx}>
                                  {rightlistItem.rightLists}
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
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
  
    </>
  );
}
