import React from 'react'
import HODMessage from '../department-components/hod-message-component/HodMessageComponent'

export default function HodMessage({ data }) {

    const renderSection = (section, sectionIndex) => {
        switch (section.type) {
            case "hod_section":
                return (
                    <React.Fragment key={sectionIndex}>
                        {section?.items && section.items.length >= 0 && section.items.map((item, idx) => (
                            <HODMessage key={idx} data={item} />
                        ))}
                    </React.Fragment>
                )
        }
    }

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
    )
}