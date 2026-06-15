
import Link from "next/link";
import styles from "./news-events.module.css";
import Image from "next/image";
export default function SocietyHappenings({ allEvents }) {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <section className="department_society_happenings">
            <div className="container">
                {allEvents.length > 0 ? (
                    <div className={`latest-event m-auto ${styles.cardsRow}`}>
                        <div className="about_subtitle" data-aos="fade-up" data-aos-delay="100">Happenings</div>
                        <div
                            className={`events_row `}
                            data-aos="fade-up" data-aos-delay="100"
                        >
                            {allEvents?.map((event, index) => {
                                return (
                                    <div key={event.id} className="events_col">
                                        <Link
                                            href={`/happenings/${event.slug || event.id}`}
                                        >
                                            <div

                                            >
                                                {/* <p className={styles.eventType}>
                                                    {!event.banner_image ? "Event" : ""}
                                                </p> */}
                                                {event.image ? (
                                                    <Image
                                                        src={event.image}
                                                        alt={event.title}
                                                        width={400}
                                                        height={250}
                                                        layout="responsive"
                                                        className={styles.eventImage}
                                                    />
                                                ) : null}
                                                <div className={styles.cardBody}>
                                                    <h5 className={styles.cardTitle} dangerouslySetInnerHTML={{ __html: event.title }} />
                                                    <p className={styles.cardDate}>
                                                        {formatDate(event.event_date_from)}
                                                    </p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                );
                            })}
                        </div>

                        {/* <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            onPageChange={handlePageChange}
                            maxVisiblePages={5}
                        /> */}
                    </div>
                ) : (
                    <div style={{ textAlign: "center", marginTop: "5rem" }}>
                        No Result Found
                    </div>
                )}
            </div>
        </section>
    )
}