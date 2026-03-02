import React from 'react'
import HODMessage from '../department-components/hod-message-component/HodMessageComponent'
import Image from 'next/image';
import Link from 'next/link';
import PlacementComponent from '../../component/home-components/placement/PlacementComponent'

export default function LogoSlider({ data }) {

    const renderSection = (section, sectionIndex) => {

        switch (section.type) {
            case "logo_slider":
                return (
                    <div key={sectionIndex} className="">
                        {section?.items && section.items.length >= -1 && section.items.map((item, idx) => (
                            <React.Fragment key={idx}>
                                {item?.heading && <h5 className='about_subtitle'>item.heading</h5>}
                                {item?.sub_heading && (<p className='about_subHeading'>{item.sub_heading}</p>)}
                                <PlacementComponent category={`${item?.category}`} data={{ subTitle: item.subTitle, slideData: item.slideData }} pageType={item?.pageType} />
                            </React.Fragment>
                        ))}
                    </div>
                )
        }
    }

    return (
        <section>
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