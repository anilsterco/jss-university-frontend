"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { MdMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { State } from "country-state-city";

const BASE_URL = "https://project-demo.in/jss/api/contact-info";
const Courses_List_URL = "https://project-demo.in/jss/api/course-list";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    course: "",
    agree: false,
  });

  const [contactUsData, setContactUsData] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const res = await fetch(BASE_URL);
        const data = await res.json();
        setContactUsData(data.data[0] || []);
      } catch (err) {
        console.error(err);
        setContactUsData([]);
      }
    };
    fetchContactData();

    const fetchCourseList = async () => {
      try {
        const res = await fetch(Courses_List_URL);
        const data = await res.json();
        setCourseList(data.data);
      } catch (err) {
        console.error(err);
        setCourseList([]);
      }
    };
    fetchCourseList();

    const states = State.getStatesOfCountry("IN");
    setStateList(states);
  }, []);

  const contactData = {
    subtitle: "CONTACT US",
    title: "GET IN TOUCH <span> WITH US</span>",
    img: "/images/home-page/contact-us-banner.png",
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSubmitting) return;
    setIsSubmitting(true);

    const submitForm = new FormData();

    submitForm.append("name", formData.name);
    submitForm.append("email", formData.email);
    submitForm.append("phone", formData.phone);
    submitForm.append("state", formData.state);
    submitForm.append("course", formData.course);
    submitForm.append("consent", formData.agree ? "1" : "0");

    try {
      const res = await fetch("https://project-demo.in/jss/api/contact-form", {
        method: "POST",
        body: submitForm,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      console.log("API Response:", data);

      alert("Form submitted successfully!");

      setFormData({
        name: "",
        email: "",
        phone: "",
        state: "",
        course: "",
        agree: false,
      });
    } catch (err) {
      console.error("Error:", err);
      alert("An error occurred while submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section className={styles.contactSection}>
        <div className="container">
          <div className="text-center mb-4">
            <h2 className={styles.topText}>{contactData.subtitle}</h2>
            <h3
              className={styles.topText}
              dangerouslySetInnerHTML={{ __html: contactData.title }}
            ></h3>
          </div>
        </div>
      </section>
      <section className={styles.contactSecond}>
        <div className="container">
          <div className={`row ${styles.contentRow}`}>
            <div className="col-md-12">
              <div className={styles.contactDetails}>
                <div className={styles.imageWrapper}>
                  <Image
                    src={contactData.img}
                    className={styles.ContactBanner}
                    alt="JSS Campus"
                    width={700}
                    height={500}
                    priority
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className={styles.formBox}>
                  <h5 className={styles.formHeading}>Let's Connect</h5>
                  <p className={styles.formSubText}>
                    Fill in the details below and our counselor will get in
                    touch with you at the earliest.
                  </p>

                  <div className={styles.ContactForm}>
                    <form onSubmit={handleSubmit}>
                      <div className={styles.Form_fild}>
                        <input
                          type="text"
                          name="name"
                          placeholder="Name"
                          value={formData.name}
                          autoComplete="off"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.Form_fild}>
                        <input
                          type="email"
                          name="email"
                          placeholder="Email"
                          value={formData.email}
                          autoComplete="off"
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className={styles.Form_fild}>
                        <input
                          type="tel"
                          name="phone"
                          placeholder="Phone no."
                          value={formData.phone}
                          autoComplete="off"
                          onChange={handleChange}
                          pattern="[0-9]{10}"
                          maxLength="10"
                          required
                        />
                      </div>
                      <div className={styles.Form_fild}>
                        <select
                          name="state"
                          value={formData.state}
                          onChange={handleChange}
                          required
                          className={styles.stateDropdown}
                        >
                          <option value="">Select State</option>
                          {stateList.map((s) => (
                            <option key={s.isoCode} value={s.name}>
                              {s.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className={styles.Form_fild}>
                        <select
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                          required
                          className={styles.stateDropdown}
                        >
                          <option value="">Select Course</option>
                          {courseList.map((course) => (
                            <option key={course.id} value={course.name}>
                              {course.name}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className={styles.CheckCol}>
                        <input
                          type="checkbox"
                          name="agree"
                          id="agreeCheck"
                          className={styles.CheckBox}
                          checked={formData.agree}
                          onChange={handleChange}
                        />
                        <label
                          htmlFor="agreeCheck"
                          className={styles.lableFild}
                        >
                          I agree to receive information regarding my enquiry.
                        </label>
                      </div>

                      <button
                        type="submit"
                        className={styles.submitBtn}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
              <div className={styles.ContactInfo}>
                <ul className={`${styles.infoRow}`}>
                  <li>
                    <p className={styles.address}>{contactUsData.address}</p>
                  </li>
                  <li>
                    <a href="" className={styles.ContactAdd}>
                      <MdMailOutline
                        color="#018ce8"
                        fontSize={16}
                        className={styles.ContactIcons}
                      />
                      <span>{contactUsData.email}</span>
                    </a>
                    <a href="" className={styles.ContactAdd}>
                      <BiPhoneCall
                        color="#018ce8"
                        fontSize={16}
                        className={styles.ContactIcons}
                      />
                      <span>{contactUsData.phone}</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.mapSection}>
        <div className="container">
          <div className={styles.mapContainer}>
            <h3 className={styles.topText}>FIND JSS UNIVERSITY ON THE MAP</h3>
            <div
              className={styles.ContactMap}
              style={{
                width: "100%",
                height: "500px",
              }}
            >
              <iframe
                src={contactUsData.direction_url}
                className={styles.mapIframs}
                width="100%"
                height={580}
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
