import React from 'react'
import TabsGridComponent from './TabsGridComponent';

export default function TabsGrid({ data }) {

    const renderSection = (section, sectionIndex) => {

        switch (section.type) {
            case "tabsGrid":
                return (
                    <div key={sectionIndex} className="">
                        {section?.items && section.items.length >= -1 && section.items.map((item, idx) => (
                            <React.Fragment key={idx}>
                                {item?.heading && <h5 className='about_subtitle'>{item.heading}</h5>}
                                {item?.sub_heading && (<p className='about_subHeading'>{item.sub_heading}</p>)}
                                <TabsGridComponent tabs={item.gridsData} pageType={item.pageType} heading={item.heading} />
                            </React.Fragment>
                        ))}
                    </div>
                )
        }
    }

    return (
        <section className='top_section'>
            {data && data.length > 0 ? (
                data.map((section, index) => renderSection(section, index))
            ) : (
                <div className="abt_cntnt" data-aos="fade-up">
                    <p>There is no data!</p>
                </div>
            )}

        </section>
    )
}