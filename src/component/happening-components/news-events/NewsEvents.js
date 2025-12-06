"use client";
import { useState } from "react";
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

export default function EventsSection() {
  const [filters, setFilters] = useState({
    month: "",
    school: "",
    page: 1,
  });

  const {
    data: schoolsList,
    isLoading: schoolsLoading,
    error: schoolsError,
  } = useQuery({
    queryKey: ["schools"],
    queryFn: () => schoolListAPI.getSchoolList(),
    staleTime: 10 * 60 * 1000,
  });

  const { data, isLoading, error } = useQuery({
    queryKey: ["news-events", filters.month, filters.school, filters.page],
    queryFn: () => {
      const queryParams = buildQueryParams();
      const endpoint = `/happenings?${queryParams}`;
      return happeningAPI.getEvents(endpoint);
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

  const schools = schoolsList?.data || [];
  const upCommingEvents = data?.data?.upcoming_events || [];
  const secondryItem = data?.data?.first_event || null;
  const allEvents = data?.data?.other_events || [];
  const currentPage = data?.data?.pagination?.current_page || filters.page;
  const totalPages = data?.data?.pagination?.last_page || 1;

  const buildQueryParams = () => {
    const params = new URLSearchParams();

    // Always add page parameter
    params.append("page", filters.page);

    if (filters.month !== "") {
      const monthNumber = formatMonthToNumber(filters.month);
      params.append("month", monthNumber);
    }

    if (filters.school !== "") {
      const schoolId = getSchoolId(filters.school);
      params.append("school", schoolId);
    }

    return params.toString();
  };

  const getSchoolId = (schoolName) => {
    const school = schools.find((s) => s.name === schoolName);
    return school?.id || null;
  };

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

  if ((isLoading && !data) || (schoolsLoading && !schoolsList))
    return (
      <div style={{ height: "100vh", textAlign: "center", marginTop: "5rem" }}>
        <LuLoader />
      </div>
    );
  if (error || schoolsError) return <div>Error loading data</div>;

  const resetFilters = () => {
    setFilters({
      page: 1,
      month: "",
      school: "",
    });
  };

  return (
    <section className={styles.eventsSection}>
      <div className={styles.bannerWrapper}>
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
                <Link href={"#"}>
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

      {secondryItem != null ? (
        <div className={`row mt-5 w-100 m-auto ${styles.secondarySection}`}>
          <div className="col-md-7">
            <div className={styles.secondaryImageWrapper}>
              {secondryItem.banner_image && (
                <Image
                  src={secondryItem.banner_image}
                  alt="Secondary Event"
                  layout="responsive"
                  width={700}
                  height={400}
                  className={styles.secondaryImage}
                />
              )}
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
        <>
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

          {/* Pagination Component */}
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
    </section>
  );
}
