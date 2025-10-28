"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./page.module.css";
import { MdMailOutline } from "react-icons/md";
import { BiPhoneCall } from "react-icons/bi";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    course: "",
    agree: false,
  });

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

  // This is placeholder — you’ll connect your API later
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // TODO: connect API endpoint here
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
          {/* Left Image */}
          <div className="col-md-12  d-flex">
            <div className={`${styles.imageWrapper}`}>
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
                    className=""
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
                    className=""
                    placeholder="Email"
                    value={formData.email}
                    autoComplete="off"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="tel"
                    name="phone"
                    className=""
                    placeholder="Phone no."
                    value={formData.phone}
                    autoComplete="off"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="state"
                    className=""
                    placeholder="State"
                    value={formData.state}
                    autoComplete="off"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <input
                    type="text"
                    name="course"
                    className=""
                    placeholder="Course"
                    autoComplete="off"
                    value={formData.course}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-check mb-3 p-0 d-flex gap-3">
                  <input
                    type="checkbox"
                    name="agree"
                    className="form-check-inputs"
                    id="agreeCheck"
                    checked={formData.agree}
                    style={{ borderBottom: "#1px solid #ffff", width: "auto" }}
                    onChange={handleChange}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="agreeCheck"
                    style={{ fontSize: "13px" }}
                  >
                    I agree to receive information regarding my enquiry.
                  </label>
                </div>

                <button type="submit" className={styles.submitBtn}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Info */}
        <div className={`row ${styles.infoRow} `}>
          <div className="col-md-4">
            <span className={styles.yellowLine}></span>
            <p className={styles.address}>
              JSS ACADEMY OF TECHNICAL EDUCATION, NOIDA C-20/1, SECTOR-62,
              NOIDA, DISTT. U.P, INDIA-201301
            </p>
          </div>

          <div
            className={`${styles.borderBox} col-md-4 d-flex justify-content-center`}
          >
            <div className={styles.infoBox}>
              <i className="bi bi-envelope-fill"></i>
              <span className="d-flex gap-3">
                <span className={styles.mailIcon}>
                  <MdMailOutline color="#018ce8" fontSize={18} />
                </span>{" "}
                principal@jssaten.ac.in
              </span>
            </div>
          </div>

          <div className="col-md-4 d-flex justify-content-center">
            <div className={styles.infoBox}>
              <span className={styles.mailIcon}>
                <BiPhoneCall color="#018ce8" fontSize={16} />
              </span>
              <span>0120-2401442</span>
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.510377947031!2d77.36215517474078!3d28.62089717568222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cef77a2c1b1ff%3A0x2d8a5f937c7a1efb!2sJSS%20Academy%20of%20Technical%20Education!5e0!3m2!1sen!2sin!4v1697033045605!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
