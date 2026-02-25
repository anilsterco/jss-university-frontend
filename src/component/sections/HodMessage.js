import React from 'react'

export default function HodMessage({ data }) {

    const renderSection = (section, sectionIndex) => {
        switch (section.type) {
            case "vision_mission":
                return (
                    <>
                        <h1>tesing</h1>
                    </>
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