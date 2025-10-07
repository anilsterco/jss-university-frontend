// "use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa";
import { LuCircleArrowRight } from "react-icons/lu";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/navigation";

const placementsData = {
  title:
    "FROM <span class='blue-text'>CAMPUS</span> TO <span class='blue-text'>CORPORATE</span>",
  stats: [
    { number: "5000+", label: "STUDENTS HIRED" },
    { number: "22.5", label: "LPA MAX" },
    { number: "2000+", label: "RECRUITERS" },
  ],
  testimonials: [
    {
      img: "/images/home-page/testimonial-placeholder.png",
      text: "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet.",
      name: "Jane Doe",
      role: "Product Engineer, TCS",
    },
    {
      img: "/images/home-page/testimonial-placeholder.png",
      text: "Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh.",
      name: "John Smith",
      role: "Software Engineer, Infosys",
    },
    {
      img: "/images/home-page/testimonial-placeholder.png",
      text: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      name: "Anita Verma",
      role: "Business Analyst, IBM",
    },
  ],
  wallOfFame: {
    img: "/images/home-page/third-section-banner.png",
    text: "JSS <span class='text-warning'>PLACEMENTS 2023</span> WALL OF FAME",
    link: "#",
  },
  recruiters: [
    { name: "Flipkart", logo: "/images/home-page/flipkart-logo.png" },
    { name: "TCS", logo: "/images/home-page/tcs-logo.png" },
    { name: "Swiggy", logo: "/images/home-page/swiggy-logo.png" },
    { name: "TCS", logo: "/images/home-page/tcs-logo.png" },
    { name: "Flipkart", logo: "/images/home-page/flipkart-logo.png" },
    { name: "Swiggy", logo: "/images/home-page/swiggy-logo.png" },
    { name: "Flipkart", logo: "/images/home-page/flipkart-logo.png" },
    { name: "TCS", logo: "/images/home-page/tcs-logo.png" },
    { name: "Swiggy", logo: "/images/home-page/swiggy-logo.png" },
    { name: "TCS", logo: "/images/home-page/tcs-logo.png" },
  ],
};

export default function PlacementsSection() {
  // Styles object
  const styles = {
    wallOfFameText: {
      left: '6%',
      width: '35%',
      bottom: '10%'
    },
    thirdSection: {
      padding: '10rem 0rem 10rem 10rem',
      width: '100%',
      margin: 'auto',
      background: '#f6f6f6'
    },
    blueBg: {
      background: '#16344e',
      width: '100%',
      maxWidth: '13%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0
    },
    thirdSectionStatsH3: {
      fontSize: '3rem'
    },
    thirdSectionStatsP: {
      fontSize: '0.9rem',
      fontWeight: 500
    }
  };

  return (
    <>
      <section className="container-fluid py-5 third-section" style={styles.thirdSection}>
        {/* Section Header */}
        <div className="mb-5">
          <p className="fw-bold text-uppercase small text-muted mb-2">
            Placements
          </p>
          <h2
            className="fw-bold display-6"
            dangerouslySetInnerHTML={{ __html: placementsData.title }}
          />
        </div>

        <div className="row g-4 w-100 m-auto">
          {/* Left Content */}
          <div className="col-lg-7 ps-0">
            {/* Stats Row */}
            <div className="row mb-5 pb-4 w-100 m-auto third-section-stats">
              {placementsData.stats.map((stat, i) => (
                <div key={i} className="col-md-4 text-center border p-3">
                  <h3 className="fw-bold" style={styles.thirdSectionStatsH3}>{stat.number}</h3>
                  <p className="mb-0" style={styles.thirdSectionStatsP}>{stat.label}</p>
                </div>
              ))}
            </div>

            {/* Testimonial Slider */}
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={{
                nextEl: ".testimonial-next",
                prevEl: ".testimonial-prev",
              }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              style={{ padding: "20px 20px" }}
              className="testimonial-slider"
            >
              <div style={styles.blueBg}></div>
              {placementsData.testimonials.map((t, i) => (
                <SwiperSlide key={i}>
                  <div className="d-flex align-items-center gap-4">
                    {/* Testimonial Image */}
                    <div className="position-relative">
                      <div
                        className=""
                        style={{ width: "140px", height: "160px" }}
                      ></div>
                      <Image
                        src={t.img}
                        alt={t.name}
                        width={140}
                        height={160}
                        priority
                        className="position-absolute top-0 start-0 rounded shadow"
                      />
                    </div>
                    {/* Testimonial Text */}
                    <div>
                      <FaQuoteLeft className="mb-3" color="#b08f29" />
                      <p className="">{t.text}”</p>
                      <h6 className="small mb-0 blue-text">{t.name}</h6>
                      <small className="">{t.role}</small>
                      <div className="d-flex gap-2 mt-3">
                        <button className="testimonial-prev btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2">
                          <FaChevronLeft size={8} />
                        </button>
                        <button className="testimonial-next btn btn-outline-secondary btn-sm rounded-circle d-flex align-items-center py-2">
                          <FaChevronRight size={8} />
                        </button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Right Wall of Fame */}
          <div className="col-lg-5 d-flex justify-content-end px-0">
            <div
              className="position-relative bg-light d-flex align-items-center justify-content-center rounded"
              style={{ height: "100%", width: "80%" }}
            >
              <Image
                src={placementsData.wallOfFame.img}
                alt="Wall of Fame"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="rounded"
              />
              <div
                className="position-absolute text-white fw-bold fs-3 wall-of-fame-text"
                style={styles.wallOfFameText}
                dangerouslySetInnerHTML={{
                  __html: placementsData.wallOfFame.text,
                }}
              />
              <Link
                href={placementsData.wallOfFame.link}
                className="position-absolute wall-of-fame-link"
              >
                <LuCircleArrowRight size={20} color="#fff" />
              </Link>
            </div>
          </div>
        </div>

        {/* Recruiters Row */}
        <div className="border-top mt-5 pt-4">
          <p className="fw-bold small text-uppercase mb-3 blue-text">
            Our Recruiters
          </p>
          <div className="d-flex flex-wrap gap-4 align-items-center">
            <Swiper
              modules={[Navigation, Autoplay]}
              navigation={false}
              loop={true}
              spaceBetween={10}
              slidesPerView={7}
              className="recruiters-slider"
            >
              {placementsData.recruiters.map((rec, i) => (
                <SwiperSlide key={i}>
                  <Image
                    key={i}
                    src={rec.logo}
                    alt={rec.name}
                    width={150}
                    height={80}
                    className="img-fluid"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
}