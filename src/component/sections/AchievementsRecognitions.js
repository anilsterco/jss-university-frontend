"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";

export default function AchievementsRecognitions({ data }) {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: "ease-in-out",
            once: true,
        });
    }, []);

    useEffect(() => {
        AOS.refresh();
    }, [data]);

    const section = data?.find(
        (item) => item.type === "AchievementsRecognitions"
    );

    if (!section?.items?.length) return null;

    const content = section.items[0];

    return (
        <section className="achievements_section">
            <div className="container">
                {/* Header */}
                <div className="col-lg-11 mx-auto">
                    <div
                        className="achievements_header"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {content?.heading && (
                            <h2
                                className="achievements_heading"
                                dangerouslySetInnerHTML={{
                                    __html: content.heading,
                                }}
                            />
                        )}

                        {content?.decs && (
                            <p className="achievements_desc">
                                {content.decs}
                            </p>
                        )}
                    </div>
                </div>

                {/* Banner */}
                {content?.image && (
                    <div
                        className="achievements_banner"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <figure className="shine-effect">
                            <Image
                                src={content.image}
                                alt={content.heading}
                                width={1391}
                                height={550}
                                className="w-100 achievements_img"
                            />
                        </figure>
                    </div>
                )}

                {/* Listing */}
                {content?.listing?.length > 0 && (
                    <ul className="achievements_list">
                        {content.listing.map((item, index) => (
                            <li
                                key={index}
                                data-aos="fade-up"
                                data-aos-delay={300 + index * 100}
                            >
                                {item.listing}
                            </li>
                        ))}
                    </ul>
                )}

                {content?.bottomdesc?.length > 0 && (
                    <div
                        className="achievements_bottom"
                        data-aos="fade-up"
                        data-aos-delay={300 + (content.listing?.length || 0) * 100}
                    >
                        {content.bottomdesc.map((item, index) => (
                            <p key={index}>{item.bottomdesc}</p>
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}