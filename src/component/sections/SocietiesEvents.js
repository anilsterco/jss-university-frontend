import Image from "next/image";
import Link from "next/link";

export default function SocietiesEvent({ data }) {

    const section = data?.find(
        (item) => item.type === "societiesEvent"
    );

    if (!section?.items?.length) return null;

    const content = section.items[0];
    console.log('data', content);

    return (
        <section className={`societies_events ${content?.custom_class}`}>
            <div className="container">
                <div className={`${content?.custom_class != 'department_society_achivement' ? 'col-lg-10 mx-auto' : ''}`}>
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

                        {/* {content?.decs && (
                            <p className="event_desc">
                                {content.decs}
                            </p>
                        )} */}
                        {content?.decs && (
                            <p
                                className=""
                                dangerouslySetInnerHTML={{ __html: content.decs }}
                            />
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
                                        loading="lazy"
                                    />
                                </div>
                            )}

                            <div className="event_content">
                                {event?.title && <h4>{event.title}</h4>}

                                {event?.decs && (
                                    <p>{event.decs}</p>
                                )}
                                {event?.icon && (
                                    <div className="event_icon">
                                        <Image
                                            src={event.icon}
                                            alt={event.title || "Icon"}
                                            width={40}
                                            height={40}
                                            loading="lazy"
                                        />
                                    </div>
                                )}
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}