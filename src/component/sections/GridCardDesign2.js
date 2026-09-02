import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export default function GridCardDesign2({ data }) {

    const renderSection = (section, sectionIndex) => {
        switch (section.type) {
            case "gridCardDesign2":
                return (
                    <div key={sectionIndex}>
                        {section?.items && section.items.length > -1 && section.items.map((item, idx) => (
                            <React.Fragment key={idx}>
                                <h4 className="heading text-center">{item.heading}</h4>
                                <p className='text-center sub_heading'>{item.sub_heading}</p>

                                <div className="row mx_3xl_-1_3 mt_3xl_7">
                                    {item?.Cards && item.Cards.map((singleCard, cardIdx) => (
                                        <div key={cardIdx} className={` px_3xl_1_3 ${item.gridColumn == '2' ? 'col-md-6' : item.gridColumn == '4' ? 'col-md-3' : 'col-md-4'}`}>
                                            <div className='single_card'>
                                                <div className='thumbnail'>
                                                    <Image
                                                        src={singleCard.image}
                                                        alt='image'
                                                        height={415}
                                                        width={500}
                                                        style={{
                                                            maxWidth: "100%",
                                                            height: "auto"
                                                        }}
                                                        loading='lazy'
                                                    />
                                                </div>

                                                <div className="content">
                                                    <div className='left'>
                                                        <h5 className='name'>{singleCard.title}</h5>
                                                        <div className='bar'></div>
                                                    </div>
                                                    <div className='right'>
                                                        <Link
                                                            href={singleCard.url}
                                                        >
                                                            <Image
                                                                alt='image'
                                                                src="/images/icons/arrow2.svg"
                                                                height={22}
                                                                width={22}
                                                                loading='lazy'
                                                            />
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {item?.bottomSubHeading && (
                                    <p className='bottom_sub_heading'>
                                        <strong>{item.bottomSubHeading}</strong>
                                    </p>
                                )}

                                {item?.bottomDesc && <p className='bottom_desc'>{item.bottomDesc}</p>}

                            </React.Fragment>
                        ))}
                    </div>
                )
        }
    }

    return (
        <section className="grid_card_design2_section">
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