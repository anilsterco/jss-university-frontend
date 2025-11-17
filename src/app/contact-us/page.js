"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { MdMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";
import { State } from "country-state-city";

const BASE_URL = "https://project-demo.in/jss/api/contact-info";
const Courses_List_URL = "https://project-demo.in/jss/api/course-list";

export default function ContactSection() {
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
    title: "GET IN TOUCH WITH US",
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
    <section className={styles.contactSection}>
      <div className="container">
        <div className="text-center mb-4">
          <p className={styles.topText}>{contactData.subtitle}</p>
          <h2 className={`${styles.mainHeading} highlighted-title`}>
            {contactData.title}
          </h2>
        </div>

        <div className={`row ${styles.contentRow}`}>
          <div className="col-md-12 d-flex">
            <div className={styles.imageWrapper}>
              <Image
                src={contactData.img}
                alt="JSS Campus"
                width={700}
                height={500}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            <div className={styles.formBox}>
              <h5 className={styles.formHeading}>Let's Connect</h5>
              <p className={styles.formSubText}>
                Fill in the details below and our counselor will get in touch
                with you at the earliest.
              </p>

              <form onSubmit={handleSubmit}>
                <div className="mb-3">
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
                <div className="mb-3">
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
                <div className="mb-3 contact-form-no-input">
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
                <div className="mb-3 state-list">
                  <select
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    required
                    className="state-dropdown"
                  >
                    <option value="">Select State</option>
                    {stateList.map((s) => (
                      <option key={s.isoCode} value={s.name}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="mb-3">
                  <select
                    name="course"
                    value={formData.course}
                    onChange={handleChange}
                    required
                    className="state-dropdown"
                  >
                    <option value="">Select Course</option>
                    {courseList.map((course) => (
                      <option key={course.id} value={course.name}>
                        {course.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-check mb-3 p-0 d-flex gap-3">
                  <input
                    type="checkbox"
                    name="agree"
                    id="agreeCheck"
                    checked={formData.agree}
                    style={{ width: "20px", height: "20px" }}
                    onChange={handleChange}
                  />
                  <label htmlFor="agreeCheck" style={{ fontSize: "13px" }}>
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

        <div className={`row ${styles.infoRow}`}>
          <div className="col-md-4">
            <span className={styles.yellowLine}></span>
            <p className={styles.address}>{contactUsData.address}</p>
          </div>

          <div
            className={`${styles.borderBox} col-md-4 d-flex justify-content-center`}
          >
            <div className={styles.infoBox}>
              <MdMailOutline color="#018ce8" fontSize={18} />
              <span>{contactUsData.email}</span>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <div className={styles.infoBox}>
              <BiPhoneCall color="#018ce8" fontSize={16} />
              <span>{contactUsData.phone}</span>
            </div>
          </div>
        </div>

        <div className={styles.mapContainer}>
          <p className={styles.topText}>FIND JSS UNIVERSITY ON THE MAP</p>
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              width: "100%",
              height: "500px",
            }}
          >
            <iframe
              src={contactUsData.direction_url}
              width="100%"
              height="100%"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
