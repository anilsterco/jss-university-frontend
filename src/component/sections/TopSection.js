import React from 'react'
import HODMessage from '../department-components/hod-message-component/HodMessageComponent'
import Image from 'next/image';
import Link from 'next/link';

export default function TopSection({ data }) {

    const renderSection = (section, sectionIndex) => {

        switch (section.type) {
            case "top_section":
                return (
                    <div key={sectionIndex} className="">
                        {section?.items && section.items.length >= -1 && section.items.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <h5 className='about_subtitle'>{item.heading}</h5>
                                <p className='about_subHeading'>{item.sub_heading}</p>
                            </React.Fragment>
                        ))}
                    </div>
                )
        }
    }

    return (
        <section className='top_section'>
            <div className='container'>
                {data && data.length > 0 ? (
                    data.map((section, index) => renderSection(section, index))
                ) : (
                    <div className="abt_cntnt" data-aos="fade-up">
                        <p>There is no data!</p>
                    </div>
                )}
            </div>

        </section>
    )
}