"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

import styles from "@/component/happening-components/news-events/news-events.module.css";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import { LuLoader } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { happeningAPI } from "@/lib/api";
import Pagination from "@/component/common/pagination-component/Pagination";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function UpcomingEvents({ className, programId, type }) {
  const [filters, setFilters] = useState({
    month: "",
    school: "",
    page: 1,
  });

  const [resolvedProgramId, setResolvedProgramId] = useState(null);

  useEffect(() => {
    if (programId) {
      setResolvedProgramId(programId);
    }
  }, [programId]);


  const { data, isLoading, error } = useQuery({
    queryKey: [
      "happenings",
      filters.month,
      filters.school,
      filters.page,
    ],
    queryFn: () => {
      return happeningAPI.getEvents(`happenings/upcoming`);
    },
    staleTime: 5 * 60 * 1000,
    cacheTime: 10 * 60 * 1000,
    keepPreviousData: true,
  });

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const secondryItem = data?.data?.first_event || null;
  const allEvents = data?.data?.other_events || [];
  const currentPage = data?.data?.pagination?.current_page || filters.page;
  const totalPages = data?.data?.pagination?.last_page || 1;


  const handlePageChange = (page) => {
    setFilters((prev) => ({ ...prev, page }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const resetFilters = () => {
    setFilters({
      page: 1,
      month: "",
      school: "",
    });
  };

  if ((isLoading && !data))
    return (
      <div style={{ height: "100vh", textAlign: "center", marginTop: "5rem" }}>
        <LuLoader />
      </div>
    );

  if (error) return <div>Error loading data</div>;

  return (
    <main className="site_main">
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">

                <h3>
                  Upcoming <span>Events</span>
                </h3>

              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={`${styles.eventsSection}`}>

        <div className="container midd_events">
          {secondryItem != null ? (
            <div className={`row ${styles.secondarySection}`}>
              <div className="col-lg-7 col-md-12">
                <div className={styles.secondaryImageWrapper}>
                  {secondryItem.banner_image && (
                    <Image
                      src={secondryItem.banner_image}
                      alt="Secondary Event"
                      width={812}
                      height={437}
                      className={`${styles.secondaryImage}`}
                    />
                  )}
                </div>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className={styles.secondaryText}>
                  <p className={styles.eventDate}>
                    {formatDate(secondryItem.event_date_from)}
                  </p>
                  <h3
                    className={styles.eventTitle}
                    dangerouslySetInnerHTML={{ __html: secondryItem.title }}
                  ></h3>
                  <p className={styles.eventDesc}>{secondryItem.desc}</p>
                  <Link
                    href={`/happenings/${secondryItem.slug || secondryItem.id}`}
                    style={{ color: "inherit" }}
                  >
                    <BsArrowRightCircle fontSize={20} />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div style={{ textAlign: "center", marginTop: "5rem" }}>
              No Result Found
            </div>
          )}
        </div>

        <div className="container">
          {allEvents.length > 0 ? (
            <>
              <div
                className={`events_row latest-event m-auto ${styles.cardsRow}`}
              >
                {allEvents.map((event, index) => {
                  const darkColors = ["#00489A", "#AF251C", "#AF251C"];
                  const shuffledColors = [...darkColors].sort(
                    () => Math.random() - 0.5,
                  );
                  const bgColor = shuffledColors[index % 4];

                  return (
                    <div key={event.id} className="events_col">
                      <Link
                        href={`/happenings/${event.slug || event.id}`}
                        style={{ color: "inherit" }}
                      >
                        <div
                          className={`${styles.eventCard} ${!event.banner_image ? styles.textOnlyCard : ""
                            }`}
                          style={
                            !event.banner_image
                              ? { backgroundColor: event.bgColor || bgColor }
                              : {}
                          }
                        >
                          <p className={styles.eventType}>
                            {!event.banner_image ? "Event" : ""}
                          </p>
                          {event.banner_image ? (
                            <Image
                              src={event.banner_image}
                              alt={event.title}
                              width={400}
                              height={250}
                              layout="responsive"
                              className={styles.eventImage}
                            />
                          ) : null}
                          <div className={styles.cardBody}>
                            <h5 className={styles.cardTitle}>{event.title}</h5>
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

              <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={handlePageChange}
                maxVisiblePages={5}
              />
            </>
          ) : (
            <div style={{ textAlign: "center", marginTop: "5rem" }}>
              No Result Found
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
