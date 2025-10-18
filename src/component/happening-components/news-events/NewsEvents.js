"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./news-events.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { BsArrowRightCircle } from "react-icons/bs";
import Link from "next/link";
import { LuLoader } from "react-icons/lu";
import { useQuery } from "@tanstack/react-query";
import { happeningAPI } from "@/lib/api";

export default function EventsSection() {
  const [filters, setFilters] = useState({
    month: "All",
    school: "All",
  });

  // Format month name to number (January -> 1, February -> 2, etc.)
  const formatMonthToNumber = (monthName) => {
    const months = {
      All: "All",
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

  // Build query parameters based on filters
  const buildQueryParams = () => {
    const params = new URLSearchParams();

    if (filters.month !== "All") {
      const monthNumber = formatMonthToNumber(filters.month);
      params.append("month", monthNumber);
    }

    if (filters.school !== "All") {
      const schoolId = getSchoolId(filters.school);
      params.append("school", schoolId);
    }

    return params.toString();
  };

  // Map school names to IDs
  const getSchoolId = (schoolName) => {
    const schoolMap = {
      Engineering: 3,
      Design: 2,
      Management: 3,
      Architecture: 4,
      Robotics: 5,
    };
    return schoolMap[schoolName] || 3;
  };

  // Use React Query with dynamic query key based on filters
  const { data, isLoading, error } = useQuery({
    queryKey: ["news-events", filters.month, filters.school], // More specific query key
    queryFn: () => {
      const queryParams = buildQueryParams();
      const endpoint = queryParams
        ? `/happenings?${queryParams}`
        : "/happenings";
      return happeningAPI.getEvents(endpoint);
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    cacheTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
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

  const months = [
    "All",
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

  const schools = [
    "All",
    "Engineering",
    "Design",
    "Management",
    "Architecture",
    "Robotics",
  ];

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  if (isLoading)
    return (
      <div style={{ height: "100vh", textAlign: "center", marginTop: "5rem" }}>
        <LuLoader />
      </div>
    );
  if (error) return <div>Error loading data</div>;

  return (
    <section className={styles.eventsSection}>
      {/* Main Banner */}
      <div className={styles.bannerWrapper}>
        {upCommingEvents.length > 0 ? (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
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
                <Link href={"#"}>
                  <Image
                    src={event.banner_image}
                    alt={event.title}
                    layout="responsive"
                    width={1200}
                    height={400}
                    style={{ width: "100%", height: "auto" }}
                    className={styles.bannerImage}
                  />
                </Link>
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
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div style={{ textAlign: "center", padding: "4rem" }}>
            No Upcoming Events
          </div>
        )}

        <div className={`d-flex justify-content-end gap-2 ${styles.filters}`}>
          <select
            className="form-select"
            onChange={(e) => handleFilter("month", e.target.value)}
            value={filters.month}
          >
            {months.map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <select
            className="form-select"
            onChange={(e) => handleFilter("school", e.target.value)}
            value={filters.school}
          >
            {schools.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
      </div>

      {secondryItem != null ? (
        <div className={`row mt-5 w-100 m-auto ${styles.secondarySection}`}>
          <div className="col-md-7">
            <div className={styles.secondaryImageWrapper}>
              <Image
                src={secondryItem.banner_image}
                alt="Secondary Event"
                layout="responsive"
                width={700}
                height={400}
                className={styles.secondaryImage}
              />
            </div>
          </div>
          <div className="col-md-5">
            <div className={styles.secondaryText}>
              <p className={styles.eventDate}>
                {formatDate(secondryItem.event_date_from)}
              </p>
              <h3 className={styles.eventTitle}>{secondryItem.title}</h3>
              <p className={styles.eventDesc}>{secondryItem.desc}</p>
              <Link href={"#"} style={{ color: "inherit" }}>
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

      {/* Event Cards */}
      {allEvents.length > 0 ? (
        <div className={`row w-100 m-auto ${styles.cardsRow}`}>
          {allEvents.map((event, index) => {
            const darkColors = ["#16344E", "#B08F29", "#00489A", "#AF251C"];
            const shuffledColors = [...darkColors].sort(
              () => Math.random() - 0.5
            );
            const bgColor = shuffledColors[index % 4];

            return (
              <div key={event.id} className="col-md-3 mb-4">
                <Link href={`#`} style={{ color: "inherit" }}>
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
      ) : (
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          No Result Found
        </div>
      )}
    </section>
  );
}
