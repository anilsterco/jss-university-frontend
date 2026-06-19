"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function AboutFive({ data }) {
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

    if (!data?.length) return null;

    return (
        <>
            {data.map((section, index) => {
                const yukti = section.items?.[0];

                return (
                    <section
                        key={`yukti-${index}`}
                        className="yukti_section"
                        data-aos="fade-up"
                    >
                        <div className="container">
                            {/* Heading */}
                            <div
                                className="section_heading"
                                data-aos="fade-up"
                            >
                                <h2
                                    dangerouslySetInnerHTML={{
                                        __html: yukti?.heading,
                                    }}
                                />

                                {yukti?.desc && (
                                    <p>{yukti.desc}</p>
                                )}
                            </div>

                            <div className="yukti_grid">
                                {yukti?.objectives?.map(
                                    (objective, objIndex) => (
                                        <div
                                            key={objIndex}
                                            className="yukti_card"
                                            data-aos="fade-up"
                                            data-aos-delay={objIndex * 100}
                                        >
                                            <h3>{objective.title}</h3>

                                            <ul className="custom-list">
                                                {objective.listing?.map(
                                                    (item, itemIndex) => (
                                                        <li key={itemIndex}>
                                                            {item.points}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    )
                                )}
                            </div>
                            {yukti?.bottomdesc?.length > 0 &&
                                yukti.bottomdesc.map((item, index) => (
                                    <p
                                        key={index}
                                        dangerouslySetInnerHTML={{ __html: item.bottomdesc }}
                                    />
                                ))
                            }



                        </div>
                    </section>
                );
            })}
        </>
    );
}

