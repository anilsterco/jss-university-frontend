import React from 'react'
import GridCard1 from "../department-components/gridCard1/GridCard1";

export default function GridCardDesign1({ data }) {

    const renderSection = (section, sectionIndex) => {
        switch (section.type) {
            case "gridCardDesign1":
                return (
                    <div key={sectionIndex}>
                        {section?.items && section.items.length > -1 && section.items.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <h4 className="heading">{item.sectionTitle}</h4>

                                <div class="row mx_3xl_-3_5">
                                    {item?.content && item.content.map((data, dataIdx) => (
                                        <div key={dataIdx} className='col-md-4 px_3xl_3_5'>
                                            <GridCard1 key={dataIdx} data={data} id={dataIdx} />
                                        </div>
                                    ))}
                                </div>

                            </React.Fragment>
                        ))}
                    </div>
                )
        }
    }

    return (
        <section className="grid_card_design1_section">
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
    )
}