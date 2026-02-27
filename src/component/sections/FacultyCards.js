import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FacultyCards({ tabs, heading }) {

    return (
        <div className="faculty_grids">
            <div className='container'>
                {heading && <h5 className='about_subtitle'>{heading}</h5>}

                <div className='row mx_3xl_-2_3'>
                    {tabs?.map((faculty) => (
                        <div className="col-md-4 px_3xl_2_3" key={faculty.id}>
                            <Link
                                href={faculty.url}
                            >
                                <div className="faulty-img">
                                    <figure>
                                        <Image
                                            src={faculty.image}
                                            alt={faculty.name}
                                            className="img-fluid w-100"
                                            style={{
                                                maxWidth: "100%",
                                                height: 'auto'
                                            }}
                                            width={432}
                                            height={428}
                                        />
                                    </figure>
                                </div>

                                <div className="content">
                                    <h4>{faculty.name}</h4>
                                    <p>{faculty.designation || faculty.type}</p>
                                    <div className='bar' />
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}