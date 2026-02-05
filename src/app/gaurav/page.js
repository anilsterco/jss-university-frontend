"use client";
import React from "react";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade } from "swiper/modules";

const Page = () => {
  const sections = [
    { type: "aboutjss_banner" },
    { type: "empower_sec" },
    { type: "fostering_sec" },
    { type: "about_heritage" },
    { type: "heritage_principal" },
    { type: "campus_facilites" },
    { type: "amenities_section" },
    { type: "sports_facilities" },
  ];

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      /* ================= ABOUT JSS BANNER ================= */

      case "aboutjss_banner":
        return (
          <section className="about_jssmain" key={sectionIndex}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="about_subtitle">
                    <h5 data-aos="fade-up" data-aos-delay="200">
                      In Pursuit of Excellence
                    </h5>
                    <p data-aos="fade-up" data-aos-delay="200">
                      JSS Mahavidyapeetha (JSSMVP) began in 1928 with a small
                      hostel in Mysore, offering accommodation to students
                      pursuing higher studies. In 1954, His Holiness Jagadguru
                      Dr. Sri Shivarathri Rajendra Mahaswamiji formally
                      established JSSMVP, now a global movement rooted in the
                      philosophy of human development through education, health,
                      and dignity for all.
                    </p>
                  </div>

                  <figure
                    className="shine-effect"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <Image
                      src="/images/about-page/aboutjss_banner.webp"
                      alt="About JSS Academy"
                      width={800}
                      height={500}
                      className="img-fluid w-100"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        );

      /* ================= TOP BANNER ================= */

      case "empower_sec":
        return (
          <section className="about_jsstwo" key={sectionIndex}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="grid_emaboutjss">
                    <div className="grid_em_leftsec">
                      <div className="about_subtitle">
                        <h5>Empowering People through Education</h5>
                        <p>
                          Education is the most powerful tool for transforming
                          lives. From its first initiative in 1928 — a free
                          hostel run under the guidance of Sri Suttur Math — to
                          its expansive network today, JSS Mahavidyapeetha has
                          been at the forefront of change through education.
                        </p>
                      </div>

                      <p>
                        Thanks to the tireless dedication of Jagadguru Dr. Sri
                        Shivarathri Rajendra Mahaswamiji, JSSMVP now manages
                        over 300 institutions, ranging from kindergartens to
                        postgraduate centres and postdoctoral research
                        facilities, serving more than 1,00,000 students
                        annually.
                      </p>
                      <p>
                        The Mahavidyapeetha’s educational spectrum is vast:
                        crèches for children of rural working women, primary and
                        secondary schools in both Kannada and English,
                        polytechnics, professional colleges in medicine,
                        engineering, and other disciplines — all supported by
                        modern infrastructure and a committed team of highly
                        qualified educators. Its institutions span diverse
                        geographies, from remote tribal villages to metropolitan
                        hubs like Bengaluru, Noida, New Delhi, Ooty, and
                        Coimbatore, and extend their presence globally to the
                        United States, Mauritius, and Dubai.
                      </p>
                    </div>

                    <div className="grid_em_rigt">
                      {" "}
                      {/* ✅ fixed */}
                      <div className="empo_rgt_imgsec">
                        <figure className="shine-effect">
                          <Image
                            src="/images/about-page/aboutjss_empower.webp"
                            alt="About JSS Academy"
                            width={800}
                            height={520}
                            className="img-fluid w-100"
                          />
                        </figure>
                      </div>
                      <div className="ab_jss_coutsec">
                        <div className="ab_jss_c_col">
                          <h4>1,00,000</h4>
                          <p>STUDENTS SERVED ANNUALLY</p>
                        </div>

                        <div className="ab_jss_c_col">
                          <h4>300+</h4>
                          <p>INSTITUTIONS MANAGED BY JSSMVP</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      /* ================= Fostering ================= */

      case "fostering_sec":
        return (
          <section className="about_fost_sec" key={sectionIndex}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ab_fost_grid">
                    <div className="ab_fost_lft_col">
                      <h5 data-aos="fade-up" data-aos-delay="200">
                        Fostering Creativity & Celebrating Culture
                      </h5>
                      <p data-aos="fade-up" data-aos-delay="200">
                        JSSMVP’s vision extends well beyond academics. It
                        actively promotes rural development by providing skills
                        training, empowering communities, and ensuring access to
                        both traditional and modern healthcare. It supports the
                        arts, literature, and cultural preservation, while also
                        working to restore and protect historic temples and
                        monuments.
                      </p>
                      <p data-aos="fade-up" data-aos-delay="200">
                        Through this holistic approach — blending education,
                        community service, cultural enrichment, and heritage
                        conservation — JSS Mahavidyapeetha continues to shape
                        lives, nurture values, and inspire progress.
                      </p>
                      <a
                        data-aos="fade-up"
                        data-aos-delay="200"
                        className="learn_more"
                        href="javascript:void()"
                      >
                        Learn more about JSSMVP
                      </a>
                    </div>

                    <div className="grid_em_rigt">
                      <div className="empo_rgt_imgsec">
                        <figure className="shine-effect">
                          <Image
                            src="/images/about-page/ab_fostering.webp"
                            alt="About JSS Academy"
                            width={683}
                            height={750}
                            className="img-fluid w-100"
                            data-aos="fade-up"
                            data-aos-delay="200"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      /* ================= Heritageone ================= */
      case "about_heritage":
        return (
          <section className="about_heri_one_sec" key={sectionIndex}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="ab_heri_grid">
                    <div className="ab_heri_lft_img">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/heritage_01.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                    </div>

                    <div className="ab_heri_rgt_con">
                      <h3>
                        Sri Suttur Math, with a legacy spanning over a thousand
                        years, is a renowned pilgrim centre dedicated to the
                        spiritual and educational upliftment of people across
                        all religions and faiths. A revered seat of knowledge
                        and wisdom, it has worked ceaselessly for human welfare
                        since its inception.
                      </h3>
                      <p>
                        Jagadguru Sri Veerasimhasana Mahasamsthana Math, Suttur,
                        is more than a spiritual institution — it is a living
                        movement championing social and economic justice on the
                        foundation of deep spiritual ideals, as envisioned by
                        great Shaivaite thinkers. From its origins on the banks
                        of the River Kapila in Karnataka, its influence has now
                        reached communities across India and many parts of the
                        world.
                      </p>
                      <p>
                        {" "}
                        For centuries, eminent Pontiffs have led the Math, each
                        contributing uniquely to spiritual enrichment and social
                        upliftment. This steady evolution reflects the shared
                        growth of the Math and its followers — a journey that is
                        ongoing rather than a singular event.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      /* ================= Heritagetwo ================= */

      case "heritage_principal":
        return (
          <section className="heri_principalmain" key={sectionIndex}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="hei__princi_grid">
                    <h3>
                      Rooted in the Veerashaiva faith, the Math draws
                      inspiration from the teachings of saints, seers, writers,
                      and philosophers. Its core spiritual essence lies in two
                      principles:
                    </h3>

                    <div className="heri_prici_names">
                      <h5>TOLERANCE TOWARDS ALL LIVING BEINGS</h5>
                      <h5>WORK AS A FORM OF WORSHIP</h5>
                    </div>

                    <figure className="shine-effect">
                      <Image
                        src="/images/about-page/heri_principal.webp"
                        alt="About JSS Academy"
                        width={800}
                        height={520}
                        className="img-fluid w-100"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </figure>
                    <div className="heri_pri_btm_text">
                      <h3>
                        These values, championed by Sri Basaveshwara in the 12th
                        century, inspired far-reaching social reforms and
                        continue to guide the Math’s mission today.
                      </h3>
                      <p>
                        Sri Suttur Math stands as one of the foremost
                        institutions preserving and promoting Veerashaivism,
                        spreading the ideals of universal brotherhood, human
                        values, and ethics through diverse spiritual, cultural,
                        and educational activities worldwide.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      /* ================= Campus Facilities ================= */
      case "campus_facilites":
        return (
          <section className="campu_facilities" key={sectionIndex}>
            <div className="container cus_container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="campus_titlemain">
                    <h5>Hostel</h5>
                    <p>
                      The College has separate hostel facilities for both boys &
                      girls. Rooms are spacious, clean, airy and well maintained
                      with common bathrooms and are available on multi-sharing
                      basis.
                    </p>
                  </div>
                  <div className="campu_grid_main capus_grid_one">
                    <div className="cumpus_left_img">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/campus_01.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                    </div>
                    <div className="campu_con_rgt">
                      <p>
                        Each room is provided with beds, wardrobes, study tables
                        and chairs. Round-the-clock power back-up facility as
                        well as security is available. Water purifiers and water
                        coolers are installed to provide potable water.
                        Provision has been made for AC equipped rooms to meet
                        the specific requirement of the students. Both the
                        hostels have limited capacity and will be available for
                        UG students only.
                      </p>
                      <h2>
                        THE ALLOTMENT OF HOSTEL <br></br> WILL BE DONE ON
                        <span>
                          {" "}
                          FIRST COME <br></br> FIRST SERVE BASIS.
                        </span>
                      </h2>
                    </div>
                  </div>
                  <div className="campu_grid_main capus_grid_two">
                    <div className="campu_con_rgt">
                      <p>
                        Hostel has a provision for a visitor(s) room, a spacious
                        well-lit common room with a large television and
                        comfortable seating arrangement, recreational
                        facilities, facilities for indoor games, newspapers &
                        magazines, wi-fi connectivity. Spacious dining rooms and
                        modern kitchens ensure that students are served with
                        nutritious food in a good ambiance. There is a dedicated
                        team consisting of wardens and caretakers to help, guide
                        and solve problems of the boarders. Students are advised
                        to read the rules and regulations of the college related
                        to hostel.
                      </p>
                      <div className="ab_jss_coutsec">
                        <div className="ab_jss_c_col">
                          <h4>300+</h4>
                          <p>
                            SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT
                          </p>
                        </div>

                        <div className="ab_jss_c_col">
                          <h4>150+</h4>
                          <p>
                            SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="cumpus_left_img">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/campus_02.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      /* ================= Amenities Centre ================= */
      case "amenities_section":
        return (
          <section className="ameminites_listmain" key={sectionIndex}>
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="amenities_title">
                    <h5>Amenities Centre</h5>
                    <p>
                      A Primary health centre is fully functional at the amenity
                      centre block in the campus. Centre is equipped to provide
                      the medical facilities such as emergency aid, primary day
                      care admissions, OPD consultation, dressing, intravenous
                      fluids, analgesics and antipyretics and counselling. A
                      doctor and nursing staff is in place and they are
                      available from 9am to 5pm daily. The PHC also has
                      transport (on call) facility available to transfer the
                      patients to advanced centres for further treatment.
                    </p>
                  </div>
                  <div className="amenities_gridmain">
                    <div className="ameniti_item_col">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/amenities_01.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                      <figcaption>
                        <p>Multipurpose Hall</p>
                      </figcaption>
                      <a href="Javascript:void()" className="page_link"></a>
                    </div>
                    <div className="ameniti_item_col">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/amenities_01.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                      <figcaption>
                        <p>Reprographics Facilities</p>
                      </figcaption>
                      <a href="Javascript:void()" className="page_link"></a>
                    </div>
                    <div className="ameniti_item_col">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/amenities_01.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                      <figcaption>
                        <p>Coffee Day Shop</p>
                      </figcaption>
                      <a href="Javascript:void()" className="page_link"></a>
                    </div>
                    <div className="ameniti_item_col">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/amenities_01.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                      <figcaption>
                        <p>General Utilities Shop</p>
                      </figcaption>
                      <a href="Javascript:void()" className="page_link"></a>
                    </div>
                    <div className="ameniti_item_col">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/amenities_01.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                      <figcaption>
                        <p>Primary Health Center</p>
                      </figcaption>
                      <a href="Javascript:void()" className="page_link"></a>
                    </div>
                    <div className="ameniti_item_col">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/amenities_01.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                      <figcaption>
                        <p>Fitness Center</p>
                      </figcaption>
                      <a href="Javascript:void()" className="page_link"></a>
                    </div>
                  </div>
                  <div className="amenities_loadmore">
                    <div className="load_m_btnsec">
                      <a href="javascript:void()">
                        LOAD MORE <i className="bi bi-arrow-down"></i>{" "}
                      </a>
                    </div>
                    <p>
                      Come here to enjoy healthy and hygienically cooked food,
                      both mouth watering and delicious. Adequate facilities
                      such as clean drinking water and clean environment are
                      also provided to the students and Faculty of JSS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      /* ================= Sports Facilities ================= */
      case "sports_facilities":
        return (
          <section className="sport_fac_swiper" key={sectionIndex}>
            <Swiper
              modules={[Navigation, EffectFade]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: `.earlygrowth-next-${sectionIndex}`,
                prevEl: `.earlygrowth-prev-${sectionIndex}`,
              }}
            >
              <SwiperSlide>
                <div className="sports_fac_slider">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/sport_faciliti_01.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1920}
                      height={720}
                      style={{objectFit:"cover"}}
                    />
                  </figure>

                  <div className="container">
                    <div className="spo_fa_content">
                      <div className="spo_sli_hed">
                        <h5>Sports Facilities</h5>
                        <h6>
                          While JSS Academy of Higher Education & Research,
                          Noida, prioritizes academic excellence across various
                          disciplines, it is equally committed to fostering a
                          vibrant sports culture.
                        </h6>
                      </div>
                      <div className="spo_fa_counsec">
                        <h4>500+</h4>
                        <p>SED UT PERSPICIATIS UNDE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h1>Come here to enjoy - 2</h1>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h1>Come here to enjoy - 3</h1>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h1>Come here to enjoy - 4</h1>
              </SwiperSlide>
              <SwiperSlide>
                {" "}
                <h1>Come here to enjoy - 5</h1>
              </SwiperSlide>
            </Swiper>
          </section>
        );

      /* ================= DEFAULT ================= */

      default:
        return null;
    }
  };

  return <>{sections.map((section, index) => renderSection(section, index))}</>;
};

export default Page;
