"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination as SwiperPagination,
  Autoplay,
} from "swiper/modules";
import styles from "./news-events.module.css";
import { FaChevronRight, FaChevronLeft, FaChevronDown } from "react-icons/fa6";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import { LuLoader } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { happeningAPI, schoolListAPI } from "@/lib/api";
import Pagination from "@/component/common/pagination-component/Pagination";

export default function EventsSection({ className, programId, type }) {
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

  const {
    data: schoolsList,
    isLoading: schoolsLoading,
    error: schoolsError,
  } = useQuery({
    queryKey: ["schools"],
    queryFn: () => schoolListAPI.getSchoolList(),
    staleTime: 10 * 60 * 1000,
  });

  const schools = schoolsList?.data || [];

  const getSchoolId = (schoolName) => {
    const school = schools.find((s) => s.name === schoolName);
    return school?.id || null;
  };

  const formatMonthToNumber = (monthName) => {
    const months = {
      January: 1,
      February: 2,
      March: 3,
      April: 4,
      May: 5,
      June: 6,
      July: 7,
      August: 8,
      September: 9,
      October: 10,
      November: 11,
      December: 12,
    };
    return months[monthName];
  };

  const buildQueryParams = (pid) => {
    const params = new URLSearchParams();

    params.append("page", filters.page);

    if (filters.month !== "") {
      const monthNumber = formatMonthToNumber(filters.month);
      params.append("month", monthNumber);
    }

    // Use "school" or "department" key based on type
    const filterKey = type === "department" ? "department" : "school";

    if (pid) {
      params.append(filterKey, pid);
    } else if (filters.school !== "") {
      const schoolId = getSchoolId(filters.school);
      if (schoolId) params.append(filterKey, schoolId);
    }

    return params.toString();
  };

  const { data, isLoading, error } = useQuery({
    queryKey: [
      "happenings",
      filters.month,
      filters.school,
      filters.page,
      resolvedProgramId,
    ],
    queryFn: () => {
      const queryParams = buildQueryParams(resolvedProgramId);
      return happeningAPI.getEvents(`/happenings?${queryParams}`);
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

  const upCommingEvents = data?.data?.upcoming_events || [];
  const secondryItem = data?.data?.first_event || null;
  const allEvents = data?.data?.other_events || [];
  const currentPage = data?.data?.pagination?.current_page || filters.page;
  const totalPages = data?.data?.pagination?.last_page || 1;

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const handleFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
      ...(key !== "page" && { page: 1 }),
    }));
  };

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

  if ((isLoading && !data) || (schoolsLoading && !schoolsList))
    return (
      <div style={{ height: "100vh", textAlign: "center", marginTop: "5rem" }}>
        <LuLoader />
      </div>
    );

  if (error || schoolsError) return <div>Error loading data</div>;

  return (
    <section className={`${styles.eventsSection}`}>
      <div
        className={`${styles.bannerWrapper} ${
          className == "inner_happening" && "d-none"
        }`}
      >
        {upCommingEvents.length > 0 ? (
          <Swiper
            modules={[Navigation, SwiperPagination, Autoplay]}
            navigation={{
              nextEl: ".upcoming-next",
              prevEl: ".upcoming-prev",
            }}
            loop={true}
            spaceBetween={20}
            slidesPerView={1}
            className={styles.swiperContainer}
          >
            {upCommingEvents.map((event) => (
              <SwiperSlide key={event.id}>
                <Link href={`/happenings/${event.slug || event.id}`}>
                  {event.banner_image && (
                    <Image
                      src={event.banner_image}
                      alt={event.title}
                      layout="responsive"
                      width={1200}
                      height={400}
                      style={{ width: "100%", height: "auto" }}
                      className={styles.bannerImage}
                    />
                  )}
                </Link>
                <div className="container p-sm-0">
                  <div className={styles.bannerTextBox}>
                    <p className={styles.upcomingTag}>
                      {event.event_type?.toUpperCase() || "EVENT"}
                    </p>
                    <h3 className={styles.bannerTitle}>
                      {event.title?.toUpperCase()}
                    </h3>
                    <p className={styles.bannerDate}>
                      {formatDate(event.event_date_from)}
                    </p>
                    <div className="d-flex gap-2">
                      <button className="upcoming-prev btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2">
                        <FaChevronLeft size={8} color={"white"} />
                      </button>
                      <button className="upcoming-next btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2">
                        <FaChevronRight size={8} color={"white"} />
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem" }}>
            No Upcoming Events
          </div>
        )}

        <div
          className={`d-flex filter-sec justify-content-end gap-2 ${styles.filters}`}
        >
          {filters.month !== "" || filters.school !== "" ? (
            <button className={styles.resetFilterButton} onClick={resetFilters}>
              Reset Filters
            </button>
          ) : null}
          <div className={styles.filterItem}>
            <select
              className="form-select"
              onChange={(e) => handleFilter("month", e.target.value)}
              value={filters.month}
            >
              <option value="" disabled hidden>
                Select Month
              </option>
              {months.map((m) => (
                <option key={m} value={m}>
                  {m}
                </option>
              ))}
            </select>
            <FaChevronDown />
          </div>
          <div className={styles.filterItem}>
            <select
              className="form-select"
              onChange={(e) => handleFilter("school", e.target.value)}
              value={filters.school}
            >
              <option value="" disabled hidden>
                Select School
              </option>
              {schools.map((s) => (
                <option key={s.id} value={s.name}>
                  {s.name}
                </option>
              ))}
            </select>
            <FaChevronDown />
          </div>
        </div>
      </div>

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
                        className={`${styles.eventCard} ${
                          !event.banner_image ? styles.textOnlyCard : ""
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
  );
}
