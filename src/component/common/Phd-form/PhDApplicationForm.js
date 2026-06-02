"use client";
import React, { useState } from "react";

import styles from "./PhdForm.module.css";
import { style } from "framer-motion/client";

export default function PhDApplicationForm() {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const academicRows = [
    "10th Std.",
    "Intermediate/10+2/PUC",
    "Bachelor's Degree",
    "Master's Degree",
    "M.Phil",
    "GATE/NET/Others",
  ];

  return (
    <div className={`container ${styles.formContainer}`}>

      <h1 className={styles.mainTitle}>
        JSS University Noida - Ph.D Application Form
      </h1>

      {/* Personal Details */}
      <section className={styles.FormSec}>
        <h2 className={styles.sectionTitle}>A. Personal Details</h2>

        <div className={styles.formGrid}>
          <input
            type="text"
            name="applicantName"
            placeholder="Applicant Name (CAPITAL LETTERS)"
            className={styles.input}
            onChange={handleChange}
          />

          <input
            type="text"
            name="fatherName"
            placeholder="Father/Guardian Name"
            className={styles.input}
            onChange={handleChange}
          />

          <input
            type="text"
            name="motherName"
            placeholder="Mother Name"
            className={styles.input}
            onChange={handleChange}
          />

          <select
            name="gender"
            className={styles.input}
            onChange={handleChange}
          >
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
          </select>

          <input
            type="date"
            name="dob"
            className={styles.input}
            onChange={handleChange}
          />

          <input
            type="number"
            name="age"
            placeholder="Age"
            className={styles.input}
            onChange={handleChange}
          />

          <select
            name="category"
            className={styles.input}
            onChange={handleChange}
          >
            <option value="">Category</option>
            <option>GN</option>
            <option>OBC</option>
            <option>SC</option>
            <option>ST</option>
            <option>Others</option>
          </select>

          <input
            type="text"
            name="nationality"
            placeholder="Nationality"
            className={styles.input}
            onChange={handleChange}
          />

          <input
            type="text"
            name="religion"
            placeholder="Religion"
            className={styles.input}
            onChange={handleChange}
          />



          <input
            type="text"
            name="phone"
            placeholder="Phone"
            className={styles.input}
            onChange={handleChange}
          />

          <input
            type="text"
            name="mobile"
            placeholder="Mobile"
            className={styles.input}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            className={styles.input}
            onChange={handleChange}
          />

          <textarea
            name="address"
            placeholder="Address for Communication"
            className={styles.textarea}
            rows="1"
            onChange={handleChange}
          />
        </div>
      </section>

      <section className={styles.FormSec}>
        <h2 className={styles.sectionTitle}>B. Academic Details</h2>

        {academicRows.map((qualification, index) => (
          <div key={index} className={styles.academicBlock}>
            <h3 className={styles.subHeading}>{qualification}</h3>

            <div className={styles.formGrid}>
              <input
                type="text"
                placeholder="Name of School / College / Institution / University"
                className={styles.input}
              />

              <input
                type="text"
                placeholder="Board / University"
                className={styles.input}
              />

              <input
                type="text"
                placeholder="Month and Year of Passing"
                className={styles.input}
              />

              <input
                type="text"
                placeholder="Subject"
                className={styles.input}
              />

              <input
                type="text"
                placeholder="% Marks"
                className={styles.input}
              />

              <input
                type="text"
                placeholder="Class / Rank"
                className={styles.input}
              />
            </div>
          </div>
        ))}

        <p className={styles.note}>
          * Attach copies of all relevant certificates.
        </p>
      </section>

     <section className={styles.FormSec}>
  <h2 className={styles.sectionTitle}>
    C. Teaching / Professional Experience
  </h2>

  {[1, 2, 3, 4].map((item) => (
    <div key={item} className={styles.experienceBlock}>
      <h3 className={styles.subHeading}>Experience {item}</h3>

      <div className={styles.formGrid}>

        <div className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>Designation</span>
          <input
            type="text"
            placeholder="Enter Designation"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>Institution</span>
          <input
            type="text"
            placeholder="Enter Institution"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>From </span>
          <input
            type="date"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>To </span>
          <input
            type="date"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>Date of Appointment</span>
          <input
            type="date"
            className={styles.input}
          />
        </div>

      </div>
    </div>
  ))}
</section>

    <section className={styles.FormSec}>
  <h2 className={styles.sectionTitle}>
    D. Research Experience Details
  </h2>

  {[1, 2, 3, 4].map((item) => (
    <div key={item} className={styles.experienceBlock}>
      <h3 className={styles.subHeading}>
        Research Experience {item}
      </h3>

      <div className={styles.formGrid}>

        <div className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>
            Designation / Fellowship
          </span>
          <input
            type="text"
            placeholder="JRF / SRF / Research Associate"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>
            Funding Agency
          </span>
          <input
            type="text"
            placeholder="Enter Funding Agency"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>
            From 
          </span>
          <input
            type="date"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>
            To 
          </span>
          <input
            type="date"
            className={styles.input}
          />
        </div>

        <div className={styles.fieldGroup}>
          <span className={styles.fieldLabel}>
            Theme of Research
          </span>
          <input
            type="text"
            placeholder="Enter Research Theme"
            className={styles.input}
          />
        </div>

      </div>
    </div>
  ))}
</section>
      <section className={styles.FormSec}>
        <h2 className={styles.sectionTitle}>Additional Information</h2>

        <div className={styles.formGrid}>
          <textarea
            placeholder="Published Articles / Research Papers / Books"
            className={styles.textarea}
            rows="4"
          />

          <textarea
            placeholder="Awards, Medals, Prizes and Honors"
            className={styles.textarea}
            rows="4"
          />

          <textarea
            placeholder="Any Other Particulars"
            className={styles.textarea}
            rows="4"
          />

          <textarea
            placeholder="Previous Ph.D / M.Phil Registration Details"
            className={styles.textarea}
            rows="4"
          />

          <textarea
            placeholder="Broad Field / Area of Research"
            className={styles.textarea}
            rows="4"
          />

          <textarea
            placeholder="Proposed Research Topic"
            className={styles.textarea}
            rows="4"
          />

          <label className={styles.uploadLabel}>
            Attach One Page Write-up
            <input type="file" className={styles.input} />
          </label>
        </div>
      </section>



      {/* Declaration */}
      <section className={styles.declarationSection}>
        <label className={styles.checkboxLabel}>
          <input type="checkbox" />
          I declare that I am not working anywhere either on a
          Full-time or Part-time basis.
        </label>

        <label className={styles.checkboxLabel}>
          <input type="checkbox" />
          I declare that the information furnished above is correct
          and I shall abide by the rules and regulations of
          JSS University Noida.
        </label>



        <button
          type="submit"
          className={styles.submitBtn}
        >
          Submit Application
        </button>
      </section>
    </div>
  );
}