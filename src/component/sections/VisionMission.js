import React from 'react'

export default function VisionMission({ data }) {

    const renderSection = (section, sectionIndex) => {
        switch (section.type) {
            case "vision_mission":
                return (
                    <>
                        <section className="vision_mission_section">
                            <div className="container">
                                <div className="row">
                                    <div className='col-md-6 left_col'>
                                        <div class="vision">
                                            <h2 className='title'>Vision</h2>
                                            <p>
                                                To be a globally recognized centre of excellence in Electronics and
                                                Communication Engineering, integrating academic excellence,
                                                cutting-edge research, ethical values, and industry collaboration to
                                                enhance student employability and drive sustainable technological
                                                growth.
                                            </p>
                                        </div>
                                    </div>

                                    <div className='col-md-6'>
                                        <div class="mission-card">
                                            <h2 className='title'>Mission</h2>
                                            <ul>
                                                <li>
                                                    To impart future-ready Electronics and Communication Engineering
                                                    education through flexible, interdisciplinary curricula, supported by
                                                    state-of-the-art laboratories and innovative, outcome-based
                                                    teaching-learning practices.
                                                </li>
                                                <li>
                                                    To establish a high-impact research and innovation ecosystem in
                                                    Electronics and Communication Engineering.
                                                </li>
                                                <li>
                                                    To nurture technically strong, entrepreneurial, and socially
                                                    responsible professionals through deep industry collaboration,
                                                    real-world problem solving, and sustainable, scalable engineering
                                                    solutions for global challenges.
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
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