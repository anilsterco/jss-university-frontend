"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

export default function SocietiesEvent({ data }) {
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
        (item) => item.type === "societiesEvent"
    );

    if (!section?.items?.length) return null;

    const content = section.items[0];

    return (
        <section className="societies_events">
            <div className="container">
                <div className="col-lg-10 mx-auto">
                    {/* Header */}
                    <div
                        className="societies_events_header"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        {content?.subheading && (
                            <h5 className="event_subheading">
                                {content.subheading}
                            </h5>
                        )}

                        {content?.heading && (
                            <h2
                                className="event_heading"
                                dangerouslySetInnerHTML={{
                                    __html: content.heading,
                                }}
                            />
                        )}

                        {content?.decs && (
                            <p className="event_desc">
                                {content.decs}
                            </p>
                        )}
                    </div>
                </div>

                {/* Events Grid */}
                <div className="events_heading">
                    {content?.title && (
                        <h3
                            className="event_title"
                            data-aos="fade-up"
                            data-aos-delay="200"
                        >
                            {content.title}
                        </h3>
                    )}

                </div>
                <div className="events_grid">
                    {content?.imagebox?.map((event, index) => (
                        <Link
                            href={event?.url || "#"}
                            key={index}
                            className="event_card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            {event?.image && (
                                <div className="event_image shine-effect">
                                    <Image
                                        src={event.image}
                                        alt={event.title || "Event"}
                                        width={432}
                                        height={428}
                                        className="w-100 event_img"
                                    />
                                </div>
                            )}

                            <div className="event_content">
                                {event?.title && <h4>{event.title}</h4>}

                                {event?.decs && (
                                    <p>{event.decs}</p>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}