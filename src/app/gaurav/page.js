"use client";
import React, { useState, useRef } from "react";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper/modules";

const Page = () => {
  const [activeGrowthTab, setActiveGrowthTab] = useState("faci_di_tab1");
  const [activeeligibility, setactiveeligibility] = useState("eligi_tab_01");
  const [activeIndex, setActiveIndex] = useState(null);

  const contentRefs = useRef([]);

  const handleGrowthTabClick = (tab) => {
    setActiveGrowthTab(tab);
  };

  const handleeligiblitytab = (tab) => {
    setactiveeligibility(tab);
  };
  const items = [
    {
      title: "Ramps and Elevators",
      content:
        "The university campus is equipped with ramps and elevators to facilitate easy access to all academic and administrative buildings for students with mobility challenges.",
    },
    {
      title: "Wheelchair Availability",
      content:
        "The university campus is equipped with ramps and elevators to facilitate easy access to all academic and administrative buildings for students with mobility challenges.",
    },
    {
      title: "Accessible Washrooms",
      content:
        "The university campus is equipped with ramps and elevators to facilitate easy access to all academic and administrative buildings for students with mobility challenges.",
    },
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const admissionFaqItems = [
    {
      title: "Eligibility for Admission and Counselling Procedure",
      content: `
      <h5>Eligibility for Admission and Counselling Procedure</h5>
      <p>Part A (30 MCQ’s)</p>
      <p>Part B (2 Subjective Questions)</p>
    `,
    },
    {
      title: "What type of questions will be asked in the entrance test?",
      content: `
      <h5>Eligibility for Admission and Counselling Procedure</h5>
      <p>Part A (30 MCQ’s)</p>
      <p>Part B (2 Subjective Questions)</p>
    `,
    },
    {
      title: "What is the time duration of DET?",
      content: `
      <h5>Eligibility for Admission and Counselling Procedure</h5>
      <p>Part A (30 MCQ’s)</p>
      <p>Part B (2 Subjective Questions)</p>
    `,
    },
    {
      title:
        "I have appeared for another national level entrance test (UCEED/ NID/NIFT). Do I still need to appear for JKLU-DET?",
      content: `
      <h5>Eligibility for Admission and Counselling Procedure</h5>
      <p>Part A (30 MCQ’s)</p>
      <p>Part B (2 Subjective Questions)</p>
    `,
    },
    {
      title: "Do I need to carry stationary to the exam hall?",
      content: `
      <h5>Eligibility for Admission and Counselling Procedure</h5>
      <p>Part A (30 MCQ’s)</p>
      <p>Part B (2 Subjective Questions)</p>
    `,
    },
    {
      title: "When can I expect the result of DET?",
      content: `
      <h5>Eligibility for Admission and Counselling Procedure</h5>
      <p>Part A (30 MCQ’s)</p>
      <p>Part B (2 Subjective Questions)</p>
    `,
    },
    {
      title: "What is expected to be seen in a portfolio?",
      content: `
      <h5>Eligibility for Admission and Counselling Procedure</h5>
      <p>Part A (30 MCQ’s)</p>
      <p>Part B (2 Subjective Questions)</p>
    `,
    },
    {
      title: "Are the interviews held offline or online?",
      content: `
      <h5>Eligibility for Admission and Counselling Procedure</h5>
      <p>Part A (30 MCQ’s)</p>
      <p>Part B (2 Subjective Questions)</p>
    `,
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  const bodyRefs = useRef([]);

  const toggleAdmissionFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const [scuActiveTab, setScuActiveTab] = useState("scu_tab1");

  const handleScuTabChange = (tabId) => {
    setScuActiveTab(tabId);
  };

  const [grandActiveTab, setGrandActiveTab] = useState("grand_tab1");

  const handleGrandTabClick = (tabId) => {
    setGrandActiveTab(tabId);
  };

  // ✅ Example data — replace with your CMS data
  const sections = [
    { type: "aboutjss_banner" },
    { type: "empower_sec" },
    { type: "fostering_sec" },
    { type: "about_heritage" },
    { type: "heritage_principal" },
    { type: "campus_facilites" },
    { type: "amenities_section" },
    { type: "sports_facilities" },
    { type: "university_boasts" },
    { type: "atm-section" },
    { type: "Cafeteria" },
    { type: "academic_classroom" },
    { type: "academic_lab" },
    { type: "Research_Labs" },
    { type: "Library_Information_Centre" },
    { type: "Library_Information_Centre_two" },
    { type: "seminar-hall" },
    { type: "university-init" },
    { type: "facilities-diffrent" },
    { type: "adminssion-section" },
    { type: "Eligibility-section" },
    { type: "Fee-Structure" },
    { type: "Scholarship-section" },
    { type: "Admissions-Office-Contacts" },
    { type: "hostal-detailsection" },
    { type: "addmins-faq-section" },
    { type: "student-life-seaction" },
    { type: "Mentoring-Scheme" },
    { type: "Equal_Opportunity" },
    { type: "Socio-Economically" },
    { type: "Student-clubs-student-supp" },
    { type: "research-facilities" },
    { type: "research-facilities-banner" },
    { type: "extented-institue" },
    { type: "research-credenital" },
    { type: "Publication_Patents" },
    { type: "grands-section" },
    { type: "grands-tabs-section" },
    { type: "Consultancy" },

    
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
            <div className="containerMD">
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
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: `.earlygrowth-next-${sectionIndex}`,
                prevEl: `.earlygrowth-prev-${sectionIndex}`,
              }}
              pagination={{
                clickable: true,
                el: `.sports-pagination-${sectionIndex}`,
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
                      height={790}
                      style={{ objectFit: "cover" }}
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
                <div className="sports_fac_slider">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/sport_faciliti_02.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1920}
                      height={790}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <div className="container">
                    <div className="spo_fa_content">
                      <div className="spo_sli_hed">
                        <h5>Football</h5>
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
                <div className="sports_fac_slider">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/sport_faciliti_03.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1920}
                      height={790}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <div className="container">
                    <div className="spo_fa_content">
                      <div className="spo_sli_hed">
                        <h5>Basketball</h5>
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
                <div className="sports_fac_slider">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/sport_faciliti_04.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1920}
                      height={790}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <div className="container">
                    <div className="spo_fa_content">
                      <div className="spo_sli_hed">
                        <h5>Badminton</h5>
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
                <div className="sports_fac_slider">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/sport_faciliti_05.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1920}
                      height={790}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <div className="container">
                    <div className="spo_fa_content">
                      <div className="spo_sli_hed">
                        <h5>Table Tennis</h5>
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
            </Swiper>
            {/* <div className={`sports-pagination-${sectionIndex}`}></div> */}
          </section>
        );

      case "university_boasts":
        return (
          <section className="uni_boasts_rag_sec" key={sectionIndex}>
            <div className="container">
              <div className="uni_bo_title">
                <h4>
                  The university boasts a range of sports facilities designed to
                  cater to a variety of interests and skill levels. Students can
                  engage in popular sports such as cricket, where they can enjoy
                  well-maintained pitches and equipment.
                </h4>
                <p>
                  For those interested in indoor games, the university provides
                  excellent facilities for chess, offering a quiet and
                  competitive environment. Additionally, traditional Indian
                  sports like kho-kho are encouraged, with dedicated spaces for
                  practice and play.
                </p>
              </div>
              <div>
                <div className="uni_bo_topsec">
                  <div className="uni_b_imgsec">
                    <figure className="shine-effect img-full">
                      <Image
                        src="/images/about-page/uni_boa_main.webp"
                        alt="About JSS Academy"
                        className="w-100"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        width={800}
                        height={520}
                      />
                    </figure>
                  </div>
                  <div className="uni_bo_text">
                    <p>
                      {" "}
                      Basketball enthusiasts have access to well-equipped courts
                      that meet international standards, promoting both
                      recreational and competitive play. Badminton players can
                      take advantage of the indoor courts, ensuring that weather
                      conditions do not hinder their practice sessions.
                      Volleyball players, too, benefit from the university’s
                      commitment to sports, with outdoor courts available for
                      regular matches and training.
                    </p>
                    <p>
                      Beyond these, JSS Academy recognizes the importance of
                      sports in overall development and well-being, organizing
                      various tournaments and sports events throughout the
                      academic year.{" "}
                    </p>
                    <p>
                      The university’s focus on sports is not merely about
                      providing facilities but also about encouraging a balanced
                      lifestyle, teamwork, and physical fitness among its
                      students and faculty. In the future, the academy aims to
                      expand its sports infrastructure further, ensuring that
                      all students have ample opportunities to pursue their
                      athletic interests.
                    </p>
                  </div>
                </div>
                <div className="uni_boa_grid">
                  <div className="uni_boa_itemse">
                    <figure className="shine-effect img-full">
                      <Image
                        src="/images/about-page/uni_boa_grid_01.webp"
                        alt="About JSS Academy"
                        className="w-100"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        width={446}
                        height={300}
                      />
                    </figure>
                    <figcaption>
                      <p>Kho Kho</p>
                    </figcaption>
                    <a href="javascript:void()" className="page_link"></a>
                  </div>
                  <div className="uni_boa_itemse">
                    <figure className="shine-effect img-full">
                      <Image
                        src="/images/about-page/uni_boa_grid_02.webp"
                        alt="About JSS Academy"
                        className="w-100"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        width={446}
                        height={300}
                      />
                    </figure>
                    <figcaption>
                      <p>Table Tennis</p>
                    </figcaption>
                    <a href="javascript:void()" className="page_link"></a>
                  </div>
                  <div className="uni_boa_itemse">
                    <figure className="shine-effect img-full">
                      <Image
                        src="/images/about-page/uni_boa_grid_04.webp"
                        alt="About JSS Academy"
                        className="w-100"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        width={446}
                        height={300}
                      />
                    </figure>
                    <figcaption>
                      <p> Kabaddi</p>
                    </figcaption>
                    <a href="javascript:void()" className="page_link"></a>
                  </div>
                  <div className="uni_boa_itemse">
                    <figure className="shine-effect img-full">
                      <Image
                        src="/images/about-page/uni_boa_grid_03.webp"
                        alt="About JSS Academy"
                        className="w-100"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        width={446}
                        height={300}
                      />
                    </figure>
                    <figcaption>
                      <p>Chess</p>
                    </figcaption>
                    <a href="javascript:void()" className="page_link"></a>
                  </div>
                  <div className="uni_boa_itemse">
                    <figure className="shine-effect img-full">
                      <Image
                        src="/images/about-page/uni_boa_grid_06.webp"
                        alt="About JSS Academy"
                        className="w-100"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        width={446}
                        height={300}
                      />
                    </figure>
                    <figcaption>
                      <p>Basketball</p>
                    </figcaption>
                    <a href="javascript:void()" className="page_link"></a>
                  </div>
                  <div className="uni_boa_itemse">
                    <figure className="shine-effect img-full">
                      <Image
                        src="/images/about-page/uni_boa_grid_05.webp"
                        alt="About JSS Academy"
                        className="w-100"
                        data-aos="fade-up"
                        data-aos-delay="200"
                        width={446}
                        height={300}
                      />
                    </figure>
                    <figcaption>
                      <p>Badminton</p>
                    </figcaption>
                    <a href="javascript:void()" className="page_link"></a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "atm-section":
        return (
          <section className="atm_mainsec" key={sectionIndex}>
            <div className="container">
              <div className="atm_fac_grid">
                <div className="atm_g_cont">
                  <h5>Bank ATM</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione
                  </p>
                  <p>
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem
                  </p>
                </div>
                <div className="atm_g_imgsec">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/atm_facilit_01.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={683}
                      height={750}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        );

      /* ================= Cafeteria ================= */

      case "Cafeteria":
        return (
          <section className="cafe_gues_mainsec" key={sectionIndex}>
            <div className="container">
              <div className="cafe_gues_gridone">
                <div className="cafe_imgsec">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/cafeteria_01.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={600}
                      height={400}
                    />
                  </figure>
                </div>
                <div className="cafe_contentsec">
                  <h5>Cafeteria</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione
                  </p>
                  <p>
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem
                  </p>
                </div>
              </div>
              <div className="guest_gridmain">
                <div className="gue_leftcontent">
                  <h5>Guest House</h5>
                  <h4>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit
                  </p>
                </div>
                <div className="gue_img_rgt">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/guest_01.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={800}
                      height={520}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        );

      case "academic_classroom":
        return (
          <section key={sectionIndex} className="aca_main_clsroom">
            <div className="container">
              <div className="aca_clsroom_banner">
                <h5>Classrooms</h5>
                <h6>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo.
                </h6>
                <div className="cls_room_ba_imgsec">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/classroom_banner_01.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1390}
                      height={550}
                    />
                  </figure>
                  <figcaption>
                    <div className="cls_countsec">
                      <h5>150+</h5>
                      <p>SED UT PERSPICIATIS UNDE OMNIS ISTE NATUS ERROR SIT</p>
                    </div>
                  </figcaption>
                </div>
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet
                </p>
              </div>
            </div>
          </section>
        );

      case "academic_lab":
        return (
          <section key={sectionIndex} className="academic_labmain">
            <div className="container max-content-lg pe-lg-0 me-lg-0">
              <div className="academic_grid">
                <div className="academic_lab_leftsec">
                  <h5>Academic Labs</h5>
                  <h4>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis
                  </h4>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur
                  </p>
                  <div className="ab_jss_coutsec">
                    <div className="ab_jss_c_col">
                      <h4>1,00,000</h4>
                      <p>STUDENTS SERVED ANNUALLY</p>
                    </div>
                    <div className="ab_jss_c_col">
                      <h4>300+</h4>
                      <p>INSTITUTIONS ARE NOW MANAGED BY JSSMVP</p>
                    </div>
                  </div>
                </div>
                <div className="acade_lab_slider">
                  <Swiper
                    modules={[Navigation, EffectFade, Autoplay, Pagination]}
                    fadeEffect={{ crossFade: true }}
                    spaceBetween={30}
                    slidesPerView={1.75}
                    loop={true}
                    navigation={{
                      prevEl: ".academic_labs_prev",
                      nextEl: ".academic_labs_next",
                    }}
                  >
                    <SwiperSlide>
                      <figure className="shine-effect img-full">
                        <Image
                          src="/images/about-page/academic_lab_01.webp"
                          alt="About JSS Academy"
                          className="w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                          width={800}
                          height={520}
                        />
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                      <figure className="shine-effect img-full">
                        <Image
                          src="/images/about-page/academic_lab_02.webp"
                          alt="About JSS Academy"
                          className="w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                          width={800}
                          height={520}
                        />
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                      <figure className="shine-effect img-full">
                        <Image
                          src="/images/about-page/academic_lab_03.webp"
                          alt="About JSS Academy"
                          className="w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                          width={800}
                          height={520}
                        />
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                      <figure className="shine-effect img-full">
                        <Image
                          src="/images/about-page/academic_lab_04.webp"
                          alt="About JSS Academy"
                          className="w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                          width={800}
                          height={520}
                        />
                      </figure>
                    </SwiperSlide>
                    <div className="ac_pagination">
                      <button className="ac_swi_btn academic_labs_next">
                        <img
                          src="/images/about-page/academic_lab_next.svg"
                          alt="About JSS Academy"
                          className="img-fluid"
                        />
                      </button>
                      <button className="ac_swi_btn academic_labs_prev">
                        {" "}
                        <img
                          src="/images/about-page/academic_lab_next.svg"
                          alt="About JSS Academy"
                          className="img-fluid"
                        />
                      </button>
                    </div>
                  </Swiper>
                </div>
              </div>
            </div>
          </section>
        );

      case "Research_Labs":
        return (
          <section key={sectionIndex} className="research_labmain">
            <div className="container">
              <div className="amenities_title">
                <h5>Research Labs</h5>
                <p>
                  JSS University Noida is actively involved in diverse areas of
                  research and offers consultancy services to industry.
                  Currently there is more thrust on inter disciplinary research
                  activities. Sponsored research projects investigated by the
                  faculty and supported by Government and research organizations
                  have helped the Institute in setting up state of the art
                  Laboratory facilities and equipment necessary for carrying out
                  high quality research.
                </p>
              </div>
            </div>
            <div className="containerMD">
              <div className="research_grid_one">
                <div className="researh_imgsec">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/research_lab_01.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={800}
                      height={520}
                    />
                  </figure>
                </div>
                <div className="research_cont">
                  <p>
                    Research projects of academic nature as well as those aimed
                    at solving industrial problems are being pursued. JSS
                    University Noida strongly believe that Research is integral
                    part of the Teaching Learning process and a powerful form of
                    learning by doing. Our students enrich their education
                    through engaging in frontline, faculty-led research.
                    Research flourishes in all the Departments and across the
                    disciplines. This definitely be helpful to transform the
                    leading-edge technology into a new horizon.
                  </p>
                  <p>
                    The research centers at JSS University Noida focus on
                    finding solutions to disruptive interdisciplinary /
                    cross-disciplinary research problems leading to a
                    significant societal and/or economic impact. Through its
                    extensive network of skilled research faculty, graduate
                    students and collaborators, the Institute is working in
                    advance research areas, creating unique research training
                    opportunities and increasing its competitiveness.
                  </p>
                </div>
              </div>
              <div className="research_grid_two">
                <div className="research_cont">
                  <h2>
                    {" "}
                    <span>RESEARCH AT JSS UNIVERSITY</span> NOIDA IS AN INTEGRAL
                    PART OF THE CURRICULUM AND A MAJOR COMPONENT OF THE
                    TEACHING-LEARNING PROCESS.
                  </h2>
                  <p>
                    The institute has attracted significant research grants from
                    various funding agencies, and various industries. The Office
                    of the Dean-Research facilitates and coordinate all research
                    and development activities of the Institute. The
                    communication and coordination work, compilation and
                    dissemination of scientific and technical information,
                    registration for patent, etc. are attended by this Office.
                  </p>
                </div>
                <div className="researh_imgsec">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/research_lab_02.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={800}
                      height={520}
                    />
                  </figure>
                </div>
              </div>
            </div>
            <div className="container">
              <div className="re_lab_objective">
                <h4>Objectives</h4>
                <div className="re_obj_grid">
                  <div className="re_obj_card">
                    <p>
                      To establish collaborations and work closely with the
                      industries.
                    </p>
                  </div>
                  <div className="re_obj_card">
                    <p>
                      To initiate and coordinate the inter disciplinary research
                      and consultancy activities.
                    </p>
                  </div>
                  <div className="re_obj_card">
                    <p>
                      To strengthen the academic research, undertake sponsored
                      projects and consultancy.
                    </p>
                  </div>
                  <div className="re_obj_card">
                    <p>
                      To guide and support the faculties and students to submit
                      research proposals to funding agencies.
                    </p>
                  </div>
                  <div className="re_obj_card">
                    <p>
                      To receive funds from external agencies to support
                      research activities in the college and for carrying out
                      projects..
                    </p>
                  </div>
                  <div className="re_obj_card">
                    <p>
                      To guide and support the faculties and students to work
                      towards achieving the “Best” and encourage them to obtain
                      “Patents”.
                    </p>
                  </div>
                  <div className="re_obj_card">
                    <p>
                      To encourage the faculties and students to take up
                      innovative projects and participate in National and Inter
                      National competitions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "Library_Information_Centre":
        return (
          <section key={sectionIndex} className="library_centre_main">
            <Swiper
              modules={[Navigation, EffectFade, Autoplay, Pagination]}
              effect="fade"
              fadeEffect={{ crossFade: true }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: `.earlygrowth-next-${sectionIndex}`,
                prevEl: `.earlygrowth-prev-${sectionIndex}`,
              }}
              pagination={{
                clickable: true,
                el: `.sports-pagination-${sectionIndex}`,
              }}
            >
              <SwiperSlide>
                <div className="sports_fac_slider">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/library_01.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1920}
                      height={790}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <div className="container">
                    <div className="spo_fa_content">
                      <div className="spo_sli_hed">
                        <h5>Library & Information Centre</h5>
                        <p>
                          JSS University Noida's Library & Information Centre is
                          a cornerstone of academic life on campus, providing an
                          extensive collection of resources and state-of-the-art
                          facilities to support the educational and research
                          needs of students, faculty, and staff. The library is
                          dedicated to fostering a rich learning environment
                          through its comprehensive services and diverse
                          resources.
                        </p>
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
                <div className="sports_fac_slider">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/sport_faciliti_02.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1920}
                      height={790}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <div className="container">
                    <div className="spo_fa_content">
                      <div className="spo_sli_hed">
                        <h5>Library & Learning Resource Centre</h5>
                        <p>
                          JSS University Noida's Library & Information Centre is
                          a cornerstone of academic life on campus, providing an
                          extensive collection of resources and state-of-the-art
                          facilities to support the educational and research
                          needs of students, faculty, and staff. The library is
                          dedicated to fostering a rich learning environment
                          through its comprehensive services and diverse
                          resources.
                        </p>
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
                <div className="sports_fac_slider">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/sport_faciliti_03.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1920}
                      height={790}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <div className="container">
                    <div className="spo_fa_content">
                      <div className="spo_sli_hed">
                        <h5>Knowledge & Information Centre</h5>
                        <p>
                          JSS University Noida's Library & Information Centre is
                          a cornerstone of academic life on campus, providing an
                          extensive collection of resources and state-of-the-art
                          facilities to support the educational and research
                          needs of students, faculty, and staff. The library is
                          dedicated to fostering a rich learning environment
                          through its comprehensive services and diverse
                          resources.
                        </p>
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
                <div className="sports_fac_slider">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/sport_faciliti_04.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1920}
                      height={790}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <div className="container">
                    <div className="spo_fa_content">
                      <div className="spo_sli_hed">
                        <h5>Academic Resource Centre</h5>
                        <p>
                          JSS University Noida's Library & Information Centre is
                          a cornerstone of academic life on campus, providing an
                          extensive collection of resources and state-of-the-art
                          facilities to support the educational and research
                          needs of students, faculty, and staff. The library is
                          dedicated to fostering a rich learning environment
                          through its comprehensive services and diverse
                          resources.
                        </p>
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
                <div className="sports_fac_slider">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/sport_faciliti_05.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={1920}
                      height={790}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <div className="container">
                    <div className="spo_fa_content">
                      <div className="spo_sli_hed">
                        <h5>Learning Resource Hub</h5>
                        <p>
                          JSS University Noida's Library & Information Centre is
                          a cornerstone of academic life on campus, providing an
                          extensive collection of resources and state-of-the-art
                          facilities to support the educational and research
                          needs of students, faculty, and staff. The library is
                          dedicated to fostering a rich learning environment
                          through its comprehensive services and diverse
                          resources.
                        </p>
                      </div>
                      <div className="spo_fa_counsec">
                        <h4>500+</h4>
                        <p>SED UT PERSPICIATIS UNDE</p>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </section>
        );

      /* ================= Campus Facilities ================= */
      case "Library_Information_Centre_two":
        return (
          <section className="lib_cen_main" key={sectionIndex}>
            <div className="containerMD">
              <div className="row">
                <div className="col-lg-12">
                  <div className="campu_grid_main capus_grid_one">
                    <div className="cumpus_left_img">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/library_02.webp"
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
                        The library houses a vast collection of books, journals,
                        periodicals, and digital resources across various
                        disciplines. It offers both physical and electronic
                        access to a wide range of academic materials, ensuring
                        that users have the resources they need for their
                        studies and research. The digital library provides
                        access to numerous online databases, e-journals, and
                        e-books, allowing for seamless and convenient access to
                        information from anywhere on campus.
                      </p>
                      <p>
                        Equipped with modern technology, the Library &
                        Information Centre features dedicated computer
                        workstations, high-speed internet access, and advanced
                        search tools to facilitate efficient information
                        retrieval. The library also provides quiet study areas,
                        group study rooms, and comfortable reading spaces,
                        catering to different study preferences and needs.
                      </p>
                    </div>
                  </div>
                  <div className="campu_grid_main capus_grid_two">
                    <div className="campu_con_rgt">
                      <p>
                        In addition to its rich collection and user-friendly
                        facilities, the Library & Information Centre at JSS
                        University Noida is committed to promoting a culture of
                        reading and lifelong learning. The library regularly
                        organizes book clubs, author talks, and literary events,
                        providing a platform for intellectual exchange and
                        community engagement.
                      </p>
                      <p>
                        The library's commitment to excellence extends beyond
                        traditional resources, as it continuously explores
                        innovative ways to enhance its services. By integrating
                        new technologies and adopting best practices in library
                        science, the Library & Information Centre strives to
                        remain at the forefront of academic support and resource
                        provision.
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
                          src="/images/about-page/library_03.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                      <p>
                        JSS University Noida's Library & Information Centre is
                        more than just a repository of books; it is a dynamic
                        learning hub that empowers users to achieve academic
                        success and fosters a vibrant intellectual community.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "seminar-hall":
        return (
          <section className="seminar_main" key={sectionIndex}>
            <div className="container max-content-lg ps-lg-0 ms-lg-0">
              <div className="semi_gridmain">
                <div className="semi_imgsec">
                  <figure className="shine-effect">
                    <Image
                      src="/images/about-page/saminar_01.webp"
                      alt="About JSS Academy"
                      width={1255}
                      height={790}
                      className="img-fluid w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    />
                  </figure>
                </div>
                <div className="semi_cont_sec">
                  <h5>Auditorium / Seminar Hall</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                  <p>
                    Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                    amet, consectetur, adipisci velit, sed quia non numquam eius
                    modi tempora incidunt ut labore et dolore magnam aliquam
                    quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                    exercitationem ullam corporis suscipit laboriosam, nisi ut
                    aliquid ex ea commodi consequatur? Quis autem vel eum iure
                    reprehenderit qui in ea voluptate velit esse quam nihil
                    molestiae consequatur, vel illum qui dolorem eum fugiat quo
                    voluptas nulla pariatur? At vero eos et accusamus et iusto
                    odio dignissimos
                  </p>
                </div>
              </div>
            </div>
          </section>
        );

      case "university-init":
        return (
          <section className="uni_green_ini_sec" key={sectionIndex}>
            <div className="containerMD">
              <div className="uni_green_grid">
                <div className="uni_green_con">
                  <h5>University Green Initiatives</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione
                  </p>
                  <p>
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem
                  </p>
                </div>
                <div className="uni_conte_img">
                  <figure className="shine-effect">
                    <Image
                      src="/images/about-page/uni_green_01.webp"
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
              <hr></hr>
              <div className="uni_green_grid">
                <div className="uni_green_con">
                  <h5>Transportation</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione
                  </p>
                  <p>
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem
                  </p>
                </div>
                <div className="uni_conte_img">
                  <figure className="shine-effect">
                    <Image
                      src="/images/about-page/uni_green_01.webp"
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
          </section>
        );

      case "facilities-diffrent":
        return (
          <section className="facilities_diffent" key={sectionIndex}>
            <div className="container">
              <div className="fac_diff_title">
                <h5>
                  Facilities for Differently Abled at JSS University, Noida
                </h5>
                <p>
                  At JSS University, Noida, we are committed to fostering an
                  inclusive and accessible environment for all our students,
                  including those with disabilities. Our campus is designed to
                  ensure that differently-abled individuals can navigate and
                  participate in academic and extracurricular activities with
                  ease and dignity. Below are the key facilities and provisions
                  available:
                </p>
              </div>
              <div className="faci_diff_tabs">
                <nav className="growth-tabs">
                  <ul>
                    <li>
                      <button
                        type="button"
                        className={
                          activeGrowthTab === "faci_di_tab1" ? "active" : ""
                        }
                        onClick={() => handleGrowthTabClick("faci_di_tab1")}
                      >
                        Accessible Infrastructure
                      </button>
                    </li>

                    <li>
                      <button
                        type="button"
                        className={
                          activeGrowthTab === "faci_di_tab2" ? "active" : ""
                        }
                        onClick={() => handleGrowthTabClick("faci_di_tab2")}
                      >
                        Hostel and Residential Facilities
                      </button>
                    </li>

                    <li>
                      <button
                        type="button"
                        className={
                          activeGrowthTab === "faci_di_tab3" ? "active" : ""
                        }
                        onClick={() => handleGrowthTabClick("faci_di_tab3")}
                      >
                        Campus Mobility and Transportation
                      </button>
                    </li>

                    <li>
                      <button
                        type="button"
                        className={
                          activeGrowthTab === "faci_di_tab4" ? "active" : ""
                        }
                        onClick={() => handleGrowthTabClick("faci_di_tab4")}
                      >
                        Awareness and Sensitization
                      </button>
                    </li>
                  </ul>
                </nav>

                <div className="grow_tb_contsec">
                  <div
                    id="faci_di_tab1"
                    className={`growth-item ${activeGrowthTab === "faci_di_tab1" ? "active" : ""}`}
                  >
                    <div className="fac_tab_con">
                      <div className="fac_dif_tbimg">
                        <figure className="shine-effect">
                          <Image
                            src="/images/about-page/fac_diff_01.webp"
                            alt="About JSS Academy"
                            width={800}
                            height={520}
                            className="img-fluid w-100"
                            data-aos="fade-up"
                            data-aos-delay="200"
                          />
                        </figure>
                      </div>
                      <div className="faci_accordion">
                        {items.map((item, index) => (
                          <div className="faci_acc_item" key={index}>
                            <button
                              className={`faci_acc_header ${activeIndex === index ? "active" : ""
                                }`}
                              onClick={() => toggleAccordion(index)}
                            >
                              <span className="faci_acc_icon">
                                {activeIndex === index ? (
                                  <figure className="shine-effect">
                                    <Image
                                      src="/images/about-page/accodin_minus.svg"
                                      alt="About JSS Academy"
                                      width={18}
                                      height={18}
                                      className="img-fluid w-100"
                                      data-aos="fade-up"
                                      data-aos-delay="200"
                                    />
                                  </figure>
                                ) : (
                                  <figure className="shine-effect">
                                    <Image
                                      src="/images/about-page/accodin_plus.svg"
                                      alt="About JSS Academy"
                                      width={18}
                                      height={18}
                                      className="img-fluid w-100"
                                      data-aos="fade-up"
                                      data-aos-delay="200"
                                    />
                                  </figure>
                                )}
                              </span>
                              <span>{item.title}</span>

                              {/* ICON */}
                            </button>

                            <div
                              className={`faci_acc_body ${activeIndex === index ? "open" : ""
                                }`}
                            >
                              <p>{item.content}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div
                    id="faci_di_tab2"
                    className={`growth-item ${activeGrowthTab === "faci_di_tab2" ? "active" : ""}`}
                  >
                    <div className="growth-content">
                      No slider content available 2
                    </div>
                  </div>
                  <div
                    id="faci_di_tab3"
                    className={`growth-item ${activeGrowthTab === "faci_di_tab3" ? "active" : ""}`}
                  >
                    <div className="growth-content">
                      <div className="growth-list">
                        No slider content available 3
                      </div>
                    </div>
                  </div>
                  <div
                    id="faci_di_tab4"
                    className={`growth-item ${activeGrowthTab === "faci_di_tab4" ? "active" : ""}`}
                  >
                    <div className="growth-content">
                      <div className="growth-list">
                        No slider content available 4
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="fac_accbtm">
                At JSS University, Noida, we believe that every student,
                regardless of their physical abilities, should have equal
                opportunities to succeed and thrive. Our facilities and support
                systems are continuously evolving to meet the needs of our
                diverse student body, ensuring an inclusive and empowering
                educational experience for all.
              </p>
            </div>
          </section>
        );

      case "adminssion-section":
        return (
          <section className="admission_hero" key={sectionIndex}>
            <div className="container">
              <div className="admin_h_title">
                <h4>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
                  looked up one of the more obscure Latin words, consectetur.
                </h4>
              </div>

              <figure className="shine-effect">
                <Image
                  src="/images/about-page/admission_hero_01.webp"
                  alt="About JSS Academy"
                  width={1390}
                  height={550}
                  className="img-fluid w-100"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
              </figure>
              <div className="ad_selec_procss">
                <h5>Selection Process</h5>
                <div className="ad_selec_grid">
                  <div className="ad_sel_col">
                    <div className="ad_se_content">
                      <div className="se_step">
                        Step
                        <span>01</span>
                      </div>
                      <p>
                        Candidates who apply online for the admission will be
                        shortlisted on the basis of
                      </p>
                      <ul>
                        <li>
                          CAT/XAT/GMAT/CMAT/MAT score (as per the eligibility)
                        </li>
                        <li>Past Academic Record</li>
                      </ul>
                    </div>
                  </div>
                  <div className="ad_sel_col">
                    <div className="ad_se_content">
                      <div className="se_step">
                        Step
                        <span>02</span>
                      </div>
                      <p>
                        Only shortlisted candidates will be called for the
                        selection process which consists of Extempore & Personal
                        Interview (PI).
                      </p>
                    </div>
                  </div>
                  <div className="ad_sel_col">
                    <div className="ad_se_content">
                      <div className="se_step">
                        Step
                        <span>03</span>
                      </div>
                      <p>
                        The candidates would be required to upload their
                        entrance test percentiles (CAT/XAT/GMAT/CMAT/MAT) the
                        moment results are out.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "Eligibility-section":
        return (
          <section className="eligibilty_main" key={sectionIndex}>
            <div className="container">
              <div className="eligib_grid_ad">
                <div className="eligib_cont">
                  <h5>Eligibility</h5>
                  <h2>
                    PROGRAMS OFFERED FOR ADMISSION IN THE ACADEMIC{" "}
                    <span>YEAR 2025-26</span>
                  </h2>
                  <div className="edigiblity_tabs">
                    <nav className="growth-tabs">
                      <ul>
                        <li>
                          <button
                            type="button"
                            className={
                              activeeligibility === "eligi_tab_01"
                                ? "active"
                                : ""
                            }
                            onClick={() => handleeligiblitytab("eligi_tab_01")}
                          >
                            Undergraduate Programs
                          </button>
                        </li>

                        <li>
                          <button
                            type="button"
                            className={
                              activeeligibility === "eligi_tab_02"
                                ? "active"
                                : ""
                            }
                            onClick={() => handleeligiblitytab("eligi_tab_02")}
                          >
                            Post graduate programs
                          </button>
                        </li>

                        <li>
                          <button
                            type="button"
                            className={
                              activeeligibility === "eligi_tab_03"
                                ? "active"
                                : ""
                            }
                            onClick={() => handleeligiblitytab("eligi_tab_03")}
                          >
                            Pharmacy Programs
                          </button>
                        </li>
                      </ul>
                    </nav>

                    <div className="eligi_tab_con">
                      <div
                        id="eligi_tab_01"
                        className={`growth-item ${activeeligibility === "eligi_tab_01" ? "active" : ""}`}
                      >
                        <p>Admission For B. Tech First-year</p>
                        <ul>
                          <li>
                            50% of total seats in each B.Tech Course are filled
                            through JEE (Main) 2025 All India Rank (CRL).
                          </li>
                          <li>
                            Remaining seats in each B.Tech Courses will be
                            filled through 10+2 Examination PCM Percentage.
                          </li>
                          <li>
                            Vacant Seats are inter-transferable between the
                            above categories.
                          </li>
                        </ul>
                      </div>
                      <div
                        id="eligi_tab_02"
                        className={`growth-item ${activeeligibility === "eligi_tab_02" ? "active" : ""}`}
                      >
                        <div className="growth-content">
                          <p>Admission For B. Tech Second-year</p>
                          <ul>
                            <li>
                              50% of total seats in each B.Tech Course are
                              filled through JEE (Main) 2025 All India Rank
                              (CRL).
                            </li>
                            <li>
                              Remaining seats in each B.Tech Courses will be
                              filled through 10+2 Examination PCM Percentage.
                            </li>
                            <li>
                              Vacant Seats are inter-transferable between the
                              above categories.
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div
                        id="eligi_tab_03"
                        className={`growth-item ${activeeligibility === "eligi_tab_03" ? "active" : ""}`}
                      >
                        <div className="growth-content">
                          <div className="growth-list">
                            <p>Admission For B. Tech Third-year </p>
                            <ul>
                              <li>
                                50% of total seats in each B.Tech Course are
                                filled through JEE (Main) 2025 All India Rank
                                (CRL).
                              </li>
                              <li>
                                Remaining seats in each B.Tech Courses will be
                                filled through 10+2 Examination PCM Percentage.
                              </li>
                              <li>
                                Vacant Seats are inter-transferable between the
                                above categories.
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="eligib_imgsec">
                  <figure className="shine-effect">
                    <Image
                      src="/images/about-page/program_off.webp"
                      alt="About JSS Academy"
                      width={1390}
                      height={550}
                      className="img-fluid w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        );

      case "Fee-Structure":
        return (
          <section className="fee_sturc_admain" key={sectionIndex}>
            <div className="container">
              <div className="fee_stru_title">
                <h5>Fee Structure 2025-26</h5>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled.
                </p>
              </div>
              <div className="fee_strcu_table">
                <div className="fee_table_wrapper">
                  <table className="fee_table">
                    <thead>
                      <tr>
                        <th>Sl. No</th>
                        <th>Branch</th>
                        <th>Year 1</th>
                        <th>Year 2</th>
                        <th>Year 3</th>
                        <th>Year 4</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td>1</td>
                        <th>CSE</th>
                        <td>Rs. 2,50,000</td>
                        <td>Rs. 2,50,000</td>
                        <td>Rs. 2,50,000</td>
                        <td>Rs. 2,50,000</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <th>CSE (AIML)</th>
                        <td>Rs. 2,50,000</td>
                        <td>Rs. 2,50,000</td>
                        <td>Rs. 2,50,000</td>
                        <td>Rs. 2,50,000</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <th>IT</th>
                        <td>Rs. 2,25,000</td>
                        <td>Rs. 2,25,000</td>
                        <td>Rs. 2,25,000</td>
                        <td>Rs. 2,25,000</td>
                      </tr>
                      <tr>
                        <td>4</td>
                        <th>CSE (DS)</th>
                        <td>Rs. 2,25,000</td>
                        <td>Rs. 2,25,000</td>
                        <td>Rs. 2,25,000</td>
                        <td>Rs. 2,25,000</td>
                      </tr>
                      <tr>
                        <td>5</td>
                        <th>ECE</th>
                        <td>Rs. 2,00,000</td>
                        <td>Rs. 2,00,000</td>
                        <td>Rs. 2,00,000</td>
                        <td>Rs. 2,00,000</td>
                      </tr>
                      <tr>
                        <td>6</td>
                        <th>Robotics & AI</th>
                        <td>Rs. 2,00,000</td>
                        <td>Rs. 2,00,000</td>
                        <td>Rs. 2,00,000</td>
                        <td>Rs. 2,00,000</td>
                      </tr>
                      <tr>
                        <td>7</td>
                        <th>MCA</th>
                        <td>Rs. 1,75,000</td>
                        <td>Rs. 1,75,000</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>8</td>
                        <th>MBA (General)</th>
                        <td>Rs. 2,50,000</td>
                        <td>Rs. 2,50,000</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>9</td>
                        <th>MBA (Finance)</th>
                        <td>Rs. 2,50,000</td>
                        <td>Rs. 2,50,000</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>10</td>
                        <th>M.Sc</th>
                        <td>Rs. 75,000</td>
                        <td>Rs. 75,000</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>11</td>
                        <th>B.Pharm</th>
                        <td>Rs. 1,55,000</td>
                        <td>Rs. 1,55,000</td>
                        <td>Rs. 1,55,000</td>
                        <td>Rs. 1,55,000</td>
                      </tr>
                      <tr>
                        <td>12</td>
                        <th>D.Pharm</th>
                        <td>Rs. 60,000</td>
                        <td>Rs. 60,000</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>13</td>
                        <th>M.Pharm</th>
                        <td>Rs. 1,68,750</td>
                        <td>Rs. 1,68,750</td>
                        <td>-</td>
                        <td>-</td>
                      </tr>
                      <tr>
                        <td>14</td>
                        <th>Civil Engineering</th>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                      </tr>
                      <tr>
                        <td>15</td>
                        <th>Electrical Engineering</th>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                      </tr>
                      <tr>
                        <td>16</td>
                        <th>Electrical & Electronics Engineering</th>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                      </tr>
                      <tr>
                        <td>17</td>
                        <th>Mechanical Engineering</th>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                        <td>Rs. 1,30,000</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>
        );

      case "Scholarship-section":
        return (
          <section className="scholarship_main" key={sectionIndex}>
            <div className="container">
              <div className="schol_ad_tgrid">
                <div className="schol_tigsec">
                  <figure className="shine-effect">
                    <Image
                      src="/images/about-page/ad_scholar_01.webp"
                      alt="About JSS Academy"
                      width={800}
                      height={520}
                      className="img-fluid w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    />
                  </figure>
                </div>
                <div className="schol_contsec">
                  <h5>Scholarship</h5>
                  <h4>
                    Scholarship facilities are available for students under
                    various schemes depending upon merit as well as category.
                  </h4>
                  <p>
                    Students who are eligible to apply can contact college
                    scholarship staff member in the accounts section. Also refer
                    scholarship “Student Support portal” of our college website.
                    Do not apply through private agencies. All scholarship
                    information is available in the website of respective
                    categories.
                  </p>
                </div>
              </div>
              <div className="sch_secondsec">
                <h6>Please refer the website information as mentioned below</h6>
                <div className="sch_seb_grid">
                  <div className="sch_b_gcol">
                    <p>
                      AICTE Prime Minister Special Scholarship Scheme (For J&K
                      and Uttarakhand students only)
                    </p>
                  </div>
                  <div className="sch_b_gcol">
                    <p>
                      National Scholarship Portal - NSP: Minority (Muslim/
                      Sikh/Jain/Christian) Scholarship: (Merit Cum means)
                    </p>
                  </div>
                  <div className="sch_b_gcol">
                    <p>
                      National Scholarship Portal - NSP: AICTE “Pragati” and
                      “Saksham” Scholarship schemes
                    </p>
                  </div>
                  <div className="sch_b_gcol">
                    <p>
                      National Scholarship Portal - NSP: Central Sector Scheme
                      (MHRD)
                    </p>
                  </div>
                  <div className="sch_b_gcol">
                    <p>
                      State Scholarship Portal (SSP) - Post Matric Scholarship
                      for SC, ST, Minority, Brahmin (EWS), Backward Classes,
                      Relatives of Disabled and Disabled students & Defence SSP
                      Scholarship
                    </p>
                  </div>
                  <div className="sch_b_gcol">
                    <p>Jindal Scholarship</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "Admissions-Office-Contacts":
        return (
          <section className="admins_of_con" key={sectionIndex}>
            <div className="container">
              <div className="ad_offc_contact">
                <div className="ad_of_conimg">
                  <figure className="shine-effect">
                    <Image
                      src="/images/about-page/admission_contact_img.webp"
                      alt="About JSS Academy"
                      width={693}
                      height={267}
                      className="img-fluid w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    />
                  </figure>
                </div>
                <div className="add_of_context">
                  <h5>Admissions Office Contacts</h5>
                  <ul>
                    <li>
                      Phone : <a href="tel:+91- 9311830458">+91- 9311830458</a>
                    </li>
                    <li>
                      Email :{" "}
                      <a href="mailto:admissions@jssuninoida.edu.in">
                        admissions@jssuninoida.edu.in
                      </a>
                    </li>
                    <li>
                      Landline :{" "}
                      <a href="tel:0120-2401484">0120-2401484 (Direct)</a>
                      <a href="tel:0120-2400115">0120-2400115</a>
                      <a href="tel:0120-2401442">0120-2401442</a>
                      <a href="tel:0120-2401449">0120-2401449 (EPBX)</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        );

      case "hostal-detailsection":
        return (
          <section className="hostal_detailmain" key={sectionIndex}>
            <div className="container">
              <div className="hostal_title">
                <h5>Hostel Details</h5>
                <h4>
                  The College has separate hostel facilities for both boys &
                  girls. Rooms are spacious, clean, airy and well maintained
                  with common bathrooms and are available on multi-sharing
                  basis. Each room is provided with beds, wardrobes, study
                  tables and chairs.
                </h4>
              </div>
              <div className="hostal_detail_grid">
                <div className="host_de_grid">
                  <div className="hostal_det_col">
                    <figure className="shine-effect">
                      <Image
                        src="/images/about-page/hostal_detail_01.webp"
                        alt="About JSS Academy"
                        width={685}
                        height={550}
                        className="img-fluid w-100"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </figure>
                  </div>
                  <div className="hostal_det_col">
                    <figure className="shine-effect">
                      <Image
                        src="/images/about-page/hostal_detail_02.webp"
                        alt="About JSS Academy"
                        width={685}
                        height={550}
                        className="img-fluid w-100"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </figure>
                  </div>
                </div>
                <div className="hostal_d_btns">
                  <a className="btn btn-warning" href="javscript:void()">
                    Learn more about Hostel
                  </a>
                </div>
              </div>
            </div>
          </section>
        );

      case "addmins-faq-section":
        return (
          <section className="addmission_faq_main" key={sectionIndex}>
            <div className="container">
              <h5 className="faq_title">FAQs</h5>
              {admissionFaqItems.map((item, index) => (
                <div className="admission_faq_item" key={index}>
                  {/* HEADER */}
                  <button
                    className={`admission_faq_header ${openIndex === index ? "active" : ""
                      }`}
                    onClick={() => toggleAdmissionFaq(index)}
                  >
                    <span>{item.title}</span>
                    <span className="admission_faq_icon">
                      <Image
                        src={
                          openIndex === index
                            ? "/images/about-page/admission_faq_minus.svg"
                            : "/images/about-page/admission_faq_plus.svg"
                        }
                        alt="toggle"
                        width={18}
                        height={18}
                      />
                    </span>
                  </button>
                  <div
                    ref={(el) => (bodyRefs.current[index] = el)}
                    className="admission_faq_body"
                    style={{
                      height:
                        openIndex === index
                          ? bodyRefs.current[index]?.scrollHeight + "px"
                          : "0px",
                    }}
                  >
                    <div
                      className="admission_faq_inner"
                      dangerouslySetInnerHTML={{ __html: item.content }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case "student-life-seaction":
        return (
          <section className="student_lifesec" key={sectionIndex}>
            <div className="container">
              <div className="stuent_life_hero">
                <div className="studen_title">
                  <h5>Student Life</h5>
                  <h4>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi arch
                  </h4>
                </div>
                <figure className="shine-effect">
                  <Image
                    src="/images/about-page/student_life_banner.webp"
                    alt="About JSS Academy"
                    width={1390}
                    height={550}
                    className="img-fluid w-100"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  />
                </figure>
                <div className="stud_disction">
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est,
                    qui dolorem ipsum quia dolor sit amet, consectetur
                  </p>
                </div>
              </div>
            </div>
          </section>
        );

      /* ================= Campus Facilities ================= */
      case "Mentoring-Scheme":
        return (
          <section
            className="lib_cen_main mentoring_scheme_sec"
            key={sectionIndex}
          >
            <div className="containerMD">
              <div className="row">
                <div className="col-lg-12">
                  <div className="montor_title">
                    <div className="studen_title">
                      <h5>Mentoring Scheme</h5>
                      <h4>
                        In the broad sense, a mentor is someone who takes a
                        special interest in helping person to motivate and de
                        velop him/her in to a successful professional. In the
                        present scenario, the concept of mentoring has found
                        application in every forum of learning.
                      </h4>
                    </div>
                  </div>
                  <div className="mentring_grid men_gridone">
                    <div className="mentring_imlft">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/mentoring_scheme_01.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                    </div>
                    <div className="mentor_content ">
                      <p>
                        In academics, mentor is often used synonymously with
                        faculty adviser. A mentoring relationship develops over
                        an extended period, during which a student's needs and
                        the nature of the relationship tend to change. Mentor
                        will try to be aware of these changes and vary the
                        degree and type of attention, help, advice, information,
                        and encouragement. In general, an effective mentoring
                        relationship is characterized by mutual respect, trust,
                        understanding, and empathy. Good mentors are able to
                        share life experiences and wisdom, as well as technical
                        expertise.
                      </p>
                      <p>
                        They are good listeners, good observers, and good
                        problem-solvers of mentees. They make an effort to know,
                        accept, and respect the goals and interests of the
                        mentees.
                      </p>
                    </div>
                  </div>
                  <div className="mentring_grid men_gridtwo">
                    <div className="mentor_content">
                      <p>
                        At, JSS Noida University, a systematic mentoring system
                        is in place to ensure overall development of the
                        students, which includes personal, professional and
                        career development. At present, there are more than 3000
                        students studying in different discipline and these
                        students are monitored and mentored by around 150
                        faculty mentors.
                      </p>
                      <p>
                        Mentors will be in touch with mentees even after
                        completion of their degrees. Mentors collects the
                        placement/higher studies details of the mentees, shares
                        job opportunities for needy people, invites them to
                        participate in college events like cultural fests,
                        Technical talks, Alumni meets, etc.
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
                    <div className="mentring_imlft">
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/mentoring_scheme_02.webp"
                          alt="About JSS Academy"
                          width={800}
                          height={520}
                          className="img-fluid"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="mentor_com_main">
                    <div></div>
                    <ul className="mento_complist">
                      <li>
                        <a href="javscript:void()">
                          {" "}
                          <figure className="shine-effect">
                            <Image
                              src="/images/about-page/pdf_icon.webp"
                              alt="About JSS Academy"
                              width={15}
                              height={20}
                              className="img-fluid"
                              data-aos="fade-up"
                              data-aos-delay="200"
                            />
                          </figure>{" "}
                          Grievance Redressal Committee-JSSUN- Complain
                          committee
                        </a>
                      </li>
                      <li>
                        <a href="javscript:void()">
                          {" "}
                          <figure className="shine-effect">
                            <Image
                              src="/images/about-page/pdf_icon.webp"
                              alt="About JSS Academy"
                              width={15}
                              height={20}
                              className="img-fluid"
                              data-aos="fade-up"
                              data-aos-delay="200"
                            />
                          </figure>{" "}
                          Facilities for differently-abled
                        </a>
                      </li>
                      <li>
                        <a href="javscript:void()">
                          {" "}
                          <figure className="shine-effect">
                            <Image
                              src="/images/about-page/pdf_icon.webp"
                              alt="About JSS Academy"
                              width={15}
                              height={20}
                              className="img-fluid"
                              data-aos="fade-up"
                              data-aos-delay="200"
                            />
                          </figure>{" "}
                          Anti-Ragging Cell
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "Equal_Opportunity":
        return (
          <section className="atm_mainsec equal_opportunity" key={sectionIndex}>
            <div className="container">
              <div className="atm_fac_grid">
                <div className="atm_g_cont">
                  <h5>Equal Opportunity Cell</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione
                  </p>
                  <p>
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem
                  </p>
                </div>
                <div className="atm_g_imgsec">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/equal_opp_01.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={683}
                      height={750}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        );

      case "Socio-Economically":
        return (
          <section className="socio_econo_sec" key={sectionIndex}>
            <div className="containerMD">
              <section className="sedg_section_wrap">
                <div className="sedg_row_block">
                  <div className="sedg_img_col">
                    <figure className="shine-effect">
                      <Image
                        src="/images/about-page/socio_eco_01.webp"
                        alt="About JSS Academy"
                        width={600}
                        height={600}
                        className="img-fluid"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </figure>
                  </div>

                  <div className="sedg_content_col">
                    <h3 className="sedg_title">
                      Socio-Economically Disadvantaged Groups Cell (SEDG)
                    </h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione
                    </p>
                    <p>
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem. Ut
                      enim ad minima veniam, quis nostrum exercitationem
                    </p>
                  </div>
                </div>

                <hr></hr>

                <div className="sedg_row_block">
                  <div className="sedg_img_col">
                    <figure className="shine-effect">
                      <Image
                        src="/images/about-page/socio_eco_01.webp"
                        alt="About JSS Academy"
                        width={600}
                        height={600}
                        className="img-fluid"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </figure>
                  </div>

                  <div className="sedg_content_col">
                    <h3 className="sedg_title">Co curricular support</h3>
                    <p>
                      Sed ut perspiciatis unde omnis iste natus error sit
                      voluptatem accusantium doloremque laudantium, totam rem
                      aperiam, eaque ipsa quae ab illo inventore veritatis et
                      quasi architecto beatae vitae dicta sunt explicabo. Nemo
                      enim ipsam voluptatem quia voluptas sit aspernatur aut
                      odit aut fugit, sed quia consequuntur magni dolores eos
                      qui ratione
                    </p>
                    <p>
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem. Ut
                      enim ad minima veniam, quis nostrum exercitationem
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </section>
        );

      case "Student-clubs-student-supp":
        return (
          <section className="student_clubsmain" key={sectionIndex}>
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-11">
                  <div className="stu_clubs_title">
                    <h5 className="heading_title">Student Clubs</h5>
                    <p>
                      At JSS University, Noida, we are committed to fostering an
                      inclusive and accessible environment for all our students,
                      including those with disabilities. Our campus is designed
                      to ensure that differently-abled individuals can navigate
                      and participate in academic and extracurricular activities
                      with ease and dignity. Below are the key facilities and
                      provisions available:
                    </p>
                  </div>
                  <div className="scu_tabs_main">
                    <nav className="scu_tabs_nav">
                      <ul className="scu_tabs_ul">
                        <li className="scu_tabs_li">
                          <button
                            type="button"
                            className={
                              scuActiveTab === "scu_tab1" ? "active" : ""
                            }
                            onClick={() => handleScuTabChange("scu_tab1")}
                          >
                            CSI
                          </button>
                        </li>

                        <li className="scu_tabs_li">
                          <button
                            type="button"
                            className={
                              scuActiveTab === "scu_tab2" ? "active" : ""
                            }
                            onClick={() => handleScuTabChange("scu_tab2")}
                          >
                            SAE
                          </button>
                        </li>

                        <li className="scu_tabs_li">
                          <button
                            type="button"
                            className={
                              scuActiveTab === "scu_tab3" ? "active" : ""
                            }
                            onClick={() => handleScuTabChange("scu_tab3")}
                          >
                            IETE
                          </button>
                        </li>

                        <li className="scu_tabs_li">
                          <button
                            type="button"
                            className={
                              scuActiveTab === "scu_tab5" ? "active" : ""
                            }
                            onClick={() => handleScuTabChange("scu_tab5")}
                          >
                            ISTE
                          </button>
                        </li>
                        <li className="scu_tabs_li">
                          <button
                            type="button"
                            className={
                              scuActiveTab === "scu_tab6" ? "active" : ""
                            }
                            onClick={() => handleScuTabChange("scu_tab6")}
                          >
                            IEEE
                          </button>
                        </li>
                      </ul>
                    </nav>

                    {/* -------- CONTENT -------- */}
                    <div className="scu_tabs_content">
                      <div
                        className={`scu_tab_panel ${scuActiveTab === "scu_tab1" ? "active" : ""}`}
                      >
                        <div className="scu_tab_inner">
                          <div className="scu_gridmain">
                            <div className="scu_imgsec">
                              <figure className="shine-effect">
                                <Image
                                  src="/images/about-page/studnet_clubs_01.webp"
                                  alt="About JSS Academy"
                                  width={800}
                                  height={520}
                                  className="img-fluid"
                                  data-aos="fade-up"
                                  data-aos-delay="200"
                                />
                              </figure>
                            </div>
                            <div className="scu_content">
                              <h4>JCSI (Computer Society of India)</h4>
                              <p>
                                JCSI (Computer Society of India) Student Branch
                                is the official branch under CSI Ghaziabad
                                Chapter. The mission of CSI is to facilitate
                                research, knowledge sharing, learning and career
                                enhancement for all categories of IT
                                Professionals, while simultaneously inspiring
                                and nurturing new entrants into the industry and
                                helping them to integrate into the IT community.
                              </p>
                              <h6>Objective</h6>
                              <ul>
                                <li>
                                  To enrich and empower the minds of students by
                                  conducting technical Quizzes Competitions
                                  regularly.
                                </li>
                                <li>
                                  {" "}
                                  To organize the Technical, Non-Technical{" "}
                                </li>
                                <li>
                                  events To improve the leadership quality among
                                  the students
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className={`scu_tab_panel ${scuActiveTab === "scu_tab2" ? "active" : ""}`}
                      >
                        <div className="scu_tab_inner">SAE</div>
                      </div>

                      <div
                        className={`scu_tab_panel ${scuActiveTab === "scu_tab3" ? "active" : ""}`}
                      >
                        <div className="scu_tab_inner">IETE</div>
                      </div>

                      <div
                        className={`scu_tab_panel ${scuActiveTab === "scu_tab4" ? "active" : ""}`}
                      >
                        <div className="scu_tab_inner">ISTE</div>
                      </div>
                      <div
                        className={`scu_tab_panel ${scuActiveTab === "scu_tab5" ? "active" : ""}`}
                      >
                        <div className="scu_tab_inner">IEEE</div>
                      </div>
                      <div
                        className={`scu_tab_panel ${scuActiveTab === "scu_tab6" ? "active" : ""}`}
                      >
                        <div className="scu_tab_inner">IEEE</div>
                      </div>
                    </div>
                  </div>
                  <div className="scu_benfits">
                    <h5> Benefits </h5>
                    <div className="scu_benift_grid">
                      <div className="scu_benifit_col">
                        <p>
                          Industry recognized CSI certification opportunities.
                        </p>
                      </div>
                      <div className="scu_benifit_col">
                        <p>
                          CSI Minor Research project funding up to Rs. 50000/-
                        </p>
                      </div>
                      <div className="scu_benifit_col">
                        <p>
                          Appreciation letter / certificate for performance
                          excellence.
                        </p>
                      </div>
                      <div className="scu_benifit_col">
                        <p>
                          A forum for activities like Paper Presentations, Quiz,
                          Competitions and Exhibitions.
                        </p>
                      </div>
                      <div className="scu_benifit_col">
                        <p>
                          Technology updates through Conferences, Seminars,
                          Tutorials & workshop at discounted rates.
                        </p>
                      </div>{" "}
                      <div className="scu_benifit_col">
                        <p>
                          To be a part of the distinguished fraternity of famous
                          IT industry leaders, brilliant scientists and
                          dedicated academicians through Networking.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "research-facilities-banner":
        return (
          <section className="resea_facili_main" key={sectionIndex}>
            <div className="container">
              <div className="res_bannesec">
                <div className="rese_title_sec">
                  <h5 className="heading_title">Research Facilities</h5>
                  <h4>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi arch
                  </h4>
                </div>
                <figure className="shine-effect">
                  <Image
                    src="/images/about-page/reasec_facility_01.webp"
                    alt="About JSS Academy"
                    width={1390}
                    height={550}
                    className="img-fluid"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  />
                </figure>
              </div>
            </div>
          </section>
        );

      case "extented-institue":
        return (
          <section className="resea_facili_main" key={sectionIndex}>
            <div className="container">
              <div className="exte_mainsec">
                <h6>
                  The following facilities are extended by the institution:
                </h6>
                <div className="exten_grid">
                  <div className="exte_imgsec">
                    <figure className="shine-effect">
                      <Image
                        src="/images/about-page/exten_intitue_01.webp"
                        alt="About JSS Academy"
                        width={1390}
                        height={550}
                        className="img-fluid"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      />
                    </figure>
                  </div>
                  <div className="exten_listyle">
                    <ul>
                      <li>
                        Faculty members are encouraged to involve UG/PG
                        student’s research projects
                      </li>
                      <li>
                        Departments have established facilities with necessary
                        software’s like Cadence, MATLAB, Optimizer, (to be
                        mentioned other major software PAN Institute) etc. and
                        has established Centre of Excellence with modern
                        facilities for faculty members and students to do
                        research in various domains.
                      </li>
                      <li>
                        There shall be provision for the following categories of
                        candidates for admission to Ph.D. Programs
                      </li>
                      <li>
                        Full-Time: Candidates who shall pursue P.hD. program on
                        full time basis
                      </li>
                      <li>
                        Part-Time: In-service candidates having a minimum
                        professional experience of one year after his / her PG
                        Degree are eligible to pursue Ph.D. program on a part
                        time basis. (Refer AKTU guidelines for more details).
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "research-credenital":
        return (
          <section className="research_cre_main" key={sectionIndex}>
            <div className="containerMD">
              <div className="res_cre_bor"></div>
            </div>
            <div className="container">
              <div className="index_res_grid">
                <div className="resea_cre_items">
                  <h3>
                    Following are the brief of Research credentials of the
                    Institute for the past five years
                  </h3>
                  <div className="ab_jss_coutsec">
                    <div className="ab_jss_c_col">
                      <h4>41</h4>
                      <p>PATENTS GRANTED</p>
                    </div>
                    <div className="ab_jss_c_col">
                      <h4>130</h4>
                      <p>PATENTS PUBLISHED</p>
                    </div>
                    <div className="ab_jss_c_col">
                      <h4>55</h4>
                      <p>FACULTY PURSUING PH.D.</p>
                    </div>
                    <div className="ab_jss_c_col">
                      <h4>78</h4>
                      <p>FACULTY WITH PH.D. QUALIFICATIONS</p>
                    </div>
                  </div>
                </div>
                <div className="resea_cre_items2">
                  <h3>
                    Indexed Research Publications for <br></br> the last five
                    years
                  </h3>
                  <div className="fee_strcu_table">
                    <div className="fee_table_wrapper">
                      <table className="fee_table">
                        <thead>
                          <tr>
                            <th>Year</th>
                            <th>SCOPUS</th>
                            <th>WOS</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2024</td>
                            <td>69</td>
                            <td>39</td>
                            <td>108</td>
                          </tr>
                          <tr>
                            <td>2023</td>
                            <td>149</td>
                            <td>90</td>
                            <td>239</td>
                          </tr>
                          <tr>
                            <td>2022</td>
                            <td>165</td>
                            <td>91</td>
                            <td>256</td>
                          </tr>
                          <tr>
                            <td>2021</td>
                            <td>78</td>
                            <td>23</td>
                            <td>101</td>
                          </tr>
                          <tr>
                            <td>2020</td>
                            <td>76</td>
                            <td>43</td>
                            <td>119</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="containerMD">
              <div className="res_cre_bor"></div>
            </div>
          </section>
        );

      case "Publication_Patents":
        return (
          <section className="pulication_patent" key={sectionIndex}>
            <div className="container">
              <div className="publi_title">
                <h5 className="heading_title">Publication Patents</h5>
                <h4>
                  The IPR Cell of JSSATEN established to take care of the
                  activities related to patent filing and evaluation,
                  copyrights, design and other Intellectual Property Rights
                  (IPR).
                </h4>
              </div>
              <div className="publi_gridmain">
                <div className="publi_content">
                  <h6>Objectives</h6>
                  <p>
                    The main objective of an IPR Cell under academics is to
                    integrate IPR with the education process and identify
                    innovations arising out of the research outcomes. The Cell
                    also aims to offer support to innovators to realize the
                    commercial benefits of their innovations.
                  </p>
                </div>
                <div className="public_table">
                  <p>SUMMARY OF PATENT PUBLISHED AND GRANT DETAILS</p>
                  <div className="fee_strcu_table">
                    <div className="fee_table_wrapper">
                      <table className="fee_table">
                        <thead>
                          <tr>
                            <th>Year</th>
                            <th>SCOPUS</th>
                            <th>WOS</th>
                            <th>Total</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>2024</td>
                            <td>69</td>
                            <td>39</td>
                            <td>108</td>
                          </tr>
                          <tr>
                            <td>2023</td>
                            <td>149</td>
                            <td>90</td>
                            <td>239</td>
                          </tr>
                          <tr>
                            <td>2022</td>
                            <td>165</td>
                            <td>91</td>
                            <td>256</td>
                          </tr>
                          <tr>
                            <td>2021</td>
                            <td>78</td>
                            <td>23</td>
                            <td>101</td>
                          </tr>
                          <tr>
                            <td>2020</td>
                            <td>76</td>
                            <td>43</td>
                            <td>119</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "grands-section":
        return (
          <section className="grands_mainsec" key={sectionIndex}>
            <div className="container">
              <div className="publi_title">
                <h5 className="heading_title">Grants</h5>
                <h4>
                  A culture of research is of paramount importance to the future
                  strategic development of JSS Academy of Technical Education
                  Noida which lays the foundations for strengthening the bridge
                  between teaching and research.
                </h4>
                <p>
                  JSS Academy of Technical Education Noida is committed to
                  develop a thriving community of researchers that impacts upon
                  both higher education and the wider society. All faculty
                  members and students are engaged in both fundamental and
                  applied research in a variety of areas.
                </p>
              </div>
              <div className="grands_maingrid">
                <div className="grands_imgsec">
                  <figure className="shine-effect">
                    <Image
                      src="/images/about-page/grands_01.webp"
                      alt="About JSS Academy"
                      width={600}
                      height={400}
                      className="img-fluid"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    />
                  </figure>
                </div>
                <div className="grands_content">
                  <p>
                    JSSATEN faculty have implemented R&D projects and
                    consultancy services to Government agencies, public and
                    private sector industries. Grants received by various
                    government and research organizations have helped the
                    Institute in procuring state of the art instruments and
                    equipment necessary for carrying out high quality research
                    and to conduct various research promotion activities.
                  </p>
                  <p>
                    Institute has received a prestigious AICTE-IDEA Lab from All
                    India Council of Technical Education (AICTE), New Delhi in
                    the AY 2021-22. The grant is for the set-up, implementation
                    and sustenance of AICTE-IDEA Lab which shall be a game
                    changer for providing the much-needed Industry 4.0 skills to
                    different stakeholders; students of engineering. diploma,
                    ITI, and schools, to be more precise. The total project is
                    of Rs. 1.0942 Cr.
                  </p>

                  <div className="downlo_guides">
                    <a href="javascript:void()">
                      {" "}
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/pdf_icon.webp"
                          alt="About JSS Academy"
                          width={15}
                          height={20}
                          className="img-fluid"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>{" "}
                      Ph.D. Scholars & Guides
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );

      case "grands-tabs-section":
        return (
          <section className="grans_tab_mainsec" key={sectionIndex}>
            <div className="container">
              <div className="grand_tabs_main faci_diff_tabs">
                <nav className="growth-tabs">
                  <ul>
                    <li>
                      <button
                        className={
                          grandActiveTab === "grand_tab1" ? "active" : ""
                        }
                        onClick={() => handleGrandTabClick("grand_tab1")}
                      >
                        Grants Received - Ongoing
                      </button>
                    </li>

                    <li>
                      <button
                        className={
                          grandActiveTab === "grand_tab2" ? "active" : ""
                        }
                        onClick={() => handleGrandTabClick("grand_tab2")}
                      >
                        Grants Received - Completed (2019-2023)
                      </button>
                    </li>
                  </ul>
                </nav>

                <div className="grand_tabs_content">
                  <div
                    className={`grand_tab_panel ${grandActiveTab === "grand_tab1" ? "active" : ""}`}
                  >
                    <div className="grand_proj_table_wrap">
                      <table className="grand_proj_table">
                        <thead>
                          <tr>
                            <th>Sl. No</th>
                            <th>Branch</th>
                            <th>Year 1</th>
                            <th>Year 2</th>
                            <th>Year 3</th>
                            <th>Year 4</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>ECE</td>
                            <td>
                              Next Generation Organic Farming using AI,
                              Robotics, and IoT for Women Entrepreneurship in
                              KOT Village, Dadri, Gautam Buddha Nagar, Uttar
                              Pradesh
                            </td>
                            <td>38,00,000</td>
                            <td>DST</td>
                            <td>
                              Dr Gayatri Sakya-PI, Dr. Chhaya Grover Co-PI, Ms.
                              Monika Malik, Co-PI
                            </td>
                            <td>2023</td>
                          </tr>

                          <tr>
                            <td>CSE</td>
                            <td>
                              Peer to Peer Energy Training System Using Block
                              Chain Technology
                            </td>
                            <td>5,00,000</td>
                            <td>CST UP</td>
                            <td>
                              Dr. Nitima Malsa - PI, Dr. Rachna Jain, Dr. Sun
                              Singh Rawat & D. Vimal Gupta-Co-PI
                            </td>
                            <td>2023</td>
                          </tr>

                          <tr>
                            <td>Chemistry</td>
                            <td>
                              Development of Women Entrepreneurship for low-cost
                              Sanitary Napkins production
                            </td>
                            <td>14,97,000</td>
                            <td>DSIR-TDUPW programme of A2K+ Scheme</td>
                            <td>Dr Ashima Srivastava</td>
                            <td>2022</td>
                          </tr>

                          <tr>
                            <td>Institute</td>
                            <td>AICTE IDEA Lab</td>
                            <td>1,09,42,000</td>
                            <td>AICTE</td>
                            <td>Mr. Sampath Kumar, Dr. Sanjiba Kumar Bisoyi</td>
                            <td>2021</td>
                          </tr>

                          <tr>
                            <td>EE</td>
                            <td>
                              Maximum power Extraction from Solar PV Array on
                              distributed system using soft computing techniques
                            </td>
                            <td>5,00,000</td>
                            <td>VRPS</td>
                            <td>Dr. APJAKTU</td>
                            <td>2019</td>
                          </tr>

                          <tr>
                            <td>CSE</td>
                            <td>
                              Alcohol detection system to prevent road accidents
                            </td>
                            <td>4,50,000</td>
                            <td>VRPS, Dr. APJAKTU</td>
                            <td>Mr. Ajay Kumar Verma</td>
                            <td>2019</td>
                          </tr>

                          <tr>
                            <td>ECE</td>
                            <td>
                              PCB Prototype Machine with e-CAD Interfacing and
                              3D Printer
                            </td>
                            <td>3,25,000</td>
                            <td>Dr. APJAKTU</td>
                            <td>Mr. Sampath Kumar V</td>
                            <td>2017</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div
                    className={`grand_tab_panel ${grandActiveTab === "grand_tab2" ? "active" : ""}`}
                  >
                    <div className="grand_proj_table_wrap">
                      <table className="grand_proj_table">
                        <thead>
                          <tr>
                            <th>Sl. No</th>
                            <th>Branch 2</th>
                            <th>Year 1</th>
                            <th>Year 2</th>
                            <th>Year 3</th>
                            <th>Year 4</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>ECE</td>
                            <td>
                              Next Generation Organic Farming using AI,
                              Robotics, and IoT for Women Entrepreneurship in
                              KOT Village, Dadri, Gautam Buddha Nagar, Uttar
                              Pradesh
                            </td>
                            <td>38,00,000</td>
                            <td>DST</td>
                            <td>
                              Dr Gayatri Sakya-PI, Dr. Chhaya Grover Co-PI, Ms.
                              Monika Malik, Co-PI
                            </td>
                            <td>2023</td>
                          </tr>

                          <tr>
                            <td>CSE</td>
                            <td>
                              Peer to Peer Energy Training System Using Block
                              Chain Technology
                            </td>
                            <td>5,00,000</td>
                            <td>CST UP</td>
                            <td>
                              Dr. Nitima Malsa - PI, Dr. Rachna Jain, Dr. Sun
                              Singh Rawat & D. Vimal Gupta-Co-PI
                            </td>
                            <td>2023</td>
                          </tr>

                          <tr>
                            <td>Chemistry</td>
                            <td>
                              Development of Women Entrepreneurship for low-cost
                              Sanitary Napkins production
                            </td>
                            <td>14,97,000</td>
                            <td>DSIR-TDUPW programme of A2K+ Scheme</td>
                            <td>Dr Ashima Srivastava</td>
                            <td>2022</td>
                          </tr>

                          <tr>
                            <td>Institute</td>
                            <td>AICTE IDEA Lab</td>
                            <td>1,09,42,000</td>
                            <td>AICTE</td>
                            <td>Mr. Sampath Kumar, Dr. Sanjiba Kumar Bisoyi</td>
                            <td>2021</td>
                          </tr>

                          <tr>
                            <td>EE</td>
                            <td>
                              Maximum power Extraction from Solar PV Array on
                              distributed system using soft computing techniques
                            </td>
                            <td>5,00,000</td>
                            <td>VRPS</td>
                            <td>Dr. APJAKTU</td>
                            <td>2019</td>
                          </tr>

                          <tr>
                            <td>CSE</td>
                            <td>
                              Alcohol detection system to prevent road accidents
                            </td>
                            <td>4,50,000</td>
                            <td>VRPS, Dr. APJAKTU</td>
                            <td>Mr. Ajay Kumar Verma</td>
                            <td>2019</td>
                          </tr>

                          <tr>
                            <td>ECE</td>
                            <td>
                              PCB Prototype Machine with e-CAD Interfacing and
                              3D Printer
                            </td>
                            <td>3,25,000</td>
                            <td>Dr. APJAKTU</td>
                            <td>Mr. Sampath Kumar V</td>
                            <td>2017</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );


      case "Consultancy":
        return (
          <section className="atm_mainsec consultancy_main" key={sectionIndex}>
            <div className="container">
              <div className="atm_fac_grid">
                <div className="atm_g_cont">
                  <h5>Consultancy</h5>
                  <p>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione
                  </p>
                  <p>
                    voluptatem sequi nesciunt. Neque porro quisquam est, qui
                    dolorem ipsum quia dolor sit amet, consectetur, adipisci
                    velit, sed quia non numquam eius modi tempora incidunt ut
                    labore et dolore magnam aliquam quaerat voluptatem. Ut enim
                    ad minima veniam, quis nostrum exercitationem
                  </p>
                  <div className="downlo_guides">
                    <a href="javascript:void()">
                      {" "}
                      <figure className="shine-effect">
                        <Image
                          src="/images/about-page/pdf_icon.webp"
                          alt="About JSS Academy"
                          width={15}
                          height={20}
                          className="img-fluid"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>{" "}
                      Reasearch Advisory Cell
                    </a>
                  </div>
                </div>
                <div className="atm_g_imgsec">
                  <figure className="shine-effect img-full">
                    <Image
                      src="/images/about-page/consultancy_01.webp"
                      alt="About JSS Academy"
                      className="w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                      width={683}
                      height={750}
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </section>
        );







      default:
        return null;
    }
  };

  return <>{sections.map((section, index) => renderSection(section, index))}</>;
};

export default Page;
