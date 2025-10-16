"use client";
import { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import styles from "./news-events.module.css";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";

export default function EventsSection() {
  const allEvents = [
    {
      id: 1,
      title: "Sed ut perspiciatis unde omnis iste natus error sit",
      date: "October 18, 2024",
      category: "Technology",
      type: "Event",
      month: "October",
      school: "Engineering",
      img: "/images/home-page/card-img.png",
      upcoming: true,
    },
    {
      id: 2,
      title: "Lorem ipsum dolor sit amet, consectet adipiscing elit.",
      date: "October 16, 2025",
      category: "Festival",
      month: "October",
      school: "Design",
      img: "/images/home-page/card-img.png",
      description:
        "Writing for The Conversation, Professor Hayley Fowler, Paul Davies, and Simon Lee discuss how the rapidly warming climate impacts creativity.",
    },
    {
      id: 3,
      title: "Business Today Codestorm 2.0",
      date: "October 10, 2024",
      category: "Business",
      month: "October",
      school: "Management",
      img: null,
      bgColor: "#B72833",
    },
    {
      id: 4,
      title: "dolor sit amet, consectetur adipiscing elit.",
      date: "July 10, 2024",
      category: "Education",
      month: "July",
      school: "Architecture",
      img: "/images/home-page/card-img.png",
    },
    {
      id: 5,
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      date: "July 20, 2024",
      category: "Education",
      month: "July",
      school: "Architecture",
      img: "/images/home-page/card-img.png",
    },
    {
      id: 6,
      title: "Annual Fest that celebrates everything JSS stands for",
      date: "August 18, 2024",
      category: "Cultural",
      month: "August",
      school: "Engineering",
      img: null,
      bgColor: "#002E6E",
    },
    {
      id: 7,
      title: "Sed ut perspiciatis unde omnis iste natus error sit.",
      date: "August 14, 2024",
      category: "Workshop",
      month: "August",
      school: "Robotics",
      img: "/images/home-page/card-img.png",
    },
    {
      id: 8,
      title: "Perspiciatis unde omnis iste natus error sit.",
      date: "August 14, 2024",
      category: "Workshop",
      month: "August",
      school: "Robotics",
      img: "/images/home-page/card-img.png",
    },
  ];

  const upCommingEvents = [
    {
      id: 1,
      title: "Techtonic Summit: Ideas That Shake The Future",
      date: "October 18, 2024",
      category: "Technology",
      month: "October",
      school: "Engineering",
      img: "/images/home-page/upcoming-banner.png",
      upcoming: true,
    },
    {
      id: 2,
      title: "Ideas That Shake The Future",
      date: "October 18, 2024",
      category: "Technology",
      month: "October",
      school: "Engineering",
      img: "/images/home-page/upcoming-banner.png",
      upcoming: true,
    },
  ];

  const secondryItem = {
    id: 1,
    title: "SUMMER BEATS FESTIVAL 2025",
    desc: "Writing for The Conversation, Professor Hayley Fowler, Paul Davies and Dr Simon Lee discuss how the rapidly warming climate",
    date: "October 16, 2025",
    category: "Technology",
    month: "October",
    school: "Engineering",
    img: "/images/home-page/secondry-banner.png",
    // upcoming: true,
  };

  const [filters, setFilters] = useState({
    category: "All",
    month: "All",
    school: "All",
  });

  const months = ["All", "January", "July", "August", "October"];
  const schools = [
    "All",
    "Engineering",
    "Design",
    "Management",
    "Architecture",
    "Robotics",
  ];

  const filteredEvents = allEvents.filter((event) => {
    const byMonth = filters.month === "All" || event.month === filters.month;
    const bySchool =
      filters.school === "All" || event.school === filters.school;
    return byMonth && bySchool;
  });

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <section className={styles.eventsSection}>
      {/* Main Banner */}
      <div className={styles.bannerWrapper}>
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
              <Image
                src={event.img}
                alt={event.title}
                layout="responsive"
                width={1200}
                height={400}
                style={{ width: "100%", height: "auto" }}
                className={styles.bannerImage}
              />
              <div className={styles.bannerTextBox}>
                <p className={styles.upcomingTag}>UPCOMING EVENTS</p>
                <h3 className={styles.bannerTitle}>
                  {event.title.toUpperCase()}
                </h3>
                <p className={styles.bannerDate}>{event.date}</p>
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
        <div className={`d-flex justify-content-end gap-2 ${styles.filters}`}>
          <select
            className="form-select"
            onChange={(e) => handleFilter("month", e.target.value)}
            value={filters.month}
          >
            {months.map((m) => (
              <option key={m}>{m}</option>
            ))}
          </select>
          <select
            className="form-select"
            onChange={(e) => handleFilter("school", e.target.value)}
            value={filters.school}
          >
            {schools.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      {/* Secondary Banner with Text */}
      <div className={`row mt-5 w-100 m-auto ${styles.secondarySection}`}>
        <div className="col-md-7">
          <div className={styles.secondaryImageWrapper}>
            <Image
              src={secondryItem.img}
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
            <p className={styles.eventDate}>October 16, 2025</p>
            <h3 className={styles.eventTitle}>SUMMER BEATS FESTIVAL 2025</h3>
            <p className={styles.eventDesc}>
              Writing for The Conversation, Professor Hayley Fowler and Simon
              Lee discuss how the rapidly warming climate influences creativity.
            </p>
          </div>
        </div>
      </div>

      {/* Event Cards */}
      <div className={`row  w-100 m-auto ${styles.cardsRow}`}>
        {filteredEvents.map((event) => (
          <div key={event.id} className="col-md-3 mb-4">
            <div
              className={`${styles.eventCard} ${
                !event.img ? styles.textOnlyCard : ""
              }`}
              style={
                !event.img ? { backgroundColor: event.bgColor || "#EEE" } : {}
              }
            >
              <p className={styles.eventType}>
                {event.img === null ? "Event" : ""}
              </p>
              {event.img ? (
                <Image
                  src={event.img}
                  alt={event.title}
                  width={400}
                  height={250}
                  layout="responsive"
                  className={styles.eventImage}
                />
              ) : null}
              <div className={styles.cardBody}>
                <h5 className={styles.cardTitle}>{event.title}</h5>
                <p className={styles.cardDate}>{event.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
