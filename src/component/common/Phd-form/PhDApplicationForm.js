"use client";
import React, { useState } from "react";

import styles from "./PhdForm.module.css";

export default function PhDApplicationForm() {
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPopup, setShowPopup] = useState(false);


  const [formData, setFormData] = useState({
    applicant_name: "",
    father_name: "",
    mother_name: "",
    gender: "",
    dob: "",
    age: "",
    category: "",
    nationality: "",
    religion: "",
    phone: "",
    mobile: "",
    email: "",
    address: "",

    tenth_institution: "",
    tenth_board: "",
    tenth_passing_year: "",
    tenth_subject: "",
    tenth_marks: "",
    tenth_class_rank: "",

    intermediate_institution: "",
    intermediate_board: "",
    intermediate_passing_year: "",
    intermediate_subject: "",
    intermediate_marks: "",
    intermediate_class_rank: "",

    bachelor_institution: "",
    bachelor_board: "",
    bachelor_passing_year: "",
    bachelor_subject: "",
    bachelor_marks: "",
    bachelor_class_rank: "",

    master_institution: "",
    master_board: "",
    master_passing_year: "",
    master_subject: "",
    master_marks: "",
    master_class_rank: "",

    mphil_institution: "",
    mphil_board: "",
    mphil_passing_year: "",
    mphil_subject: "",
    mphil_marks: "",
    mphil_class_rank: "",

    gate_institution: "",
    gate_board: "",
    gate_passing_year: "",
    gate_subject: "",
    gate_marks: "",
    gate_class_rank: "",

    published_articles: "",
    awards: "",
    other_particulars: "",
    previous_registration_details: "",
    research_area: "",
    proposed_research_topic: "",

    writeup_file: null,

    not_working_declaration: false,
    information_correct_declaration: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrors({});
    setMessage("");


    try {
      const payload = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        if (value !== null && value !== undefined) {
          if (key === "writeup_file") {
            if (value && value instanceof File) {
              payload.append(key, value);
            }
          } else {
            payload.append(key, value);
          }
        }
      });

      payload.append(
        "experiences",
        JSON.stringify(experiences.filter(e => e.designation || e.institution))
      );

      payload.append(
        "research_experiences",
        JSON.stringify(researchExperiences.filter(e => e.designation || e.fundingAgency))
      );

      const response = await fetch(
        "https://project-demo.in/jss/api/phd-application-form",
        {
          method: "POST",
          body: payload,
          mode: "cors",
          credentials: "omit",
        }
      );

      const text = await response.text();

      console.log("STATUS:", response.status);
      console.log("RAW RESPONSE:", text);

      let result = null;

      try {
        result = text ? JSON.parse(text) : {};
      } catch (err) {
        console.log("JSON parse failed:", err);
      }

      if (!response.ok) {
        setMessage(result?.message || "Submission failed");
        setErrors(result?.errors || {});
        return;
      }

      setMessage(result?.message || "Submitted successfully");
      setErrors({});
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
      }, 3000);


    } catch (error) {
      console.log("Submit Error:", error);
      setMessage("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];

    setFormData((prev) => ({
      ...prev,
      writeup_file: file,
    }));
  };

  const [experiences, setExperiences] = useState([
    {
      designation: "",
      institution: "",
      from: "",
      to: "",
      appointmentDate: "",
    },
  ]);
  const [researchExperiences, setResearchExperiences] = useState([
    {
      designation: "",
      fundingAgency: "",
      from: "",
      to: "",
      theme: "",
    },
  ]);





  const addExperience = () => {
    setExperiences([
      ...experiences,
      {
        designation: "",
        institution: "",
        from: "",
        to: "",
        appointmentDate: "",
      },
    ]);
  };

  const addResearchExperience = () => {
    setResearchExperiences([
      ...researchExperiences,
      {
        designation: "",
        fundingAgency: "",
        from: "",
        to: "",
        theme: "",
      },
    ]);
  };

  const academicRows = [
    "10th Std.",
    "Intermediate/10+2/PUC",
    "Bachelor's Degree",
    "Master's Degree",
    "M.Phil",
    "GATE/NET/Others",
  ];

  const academicFieldMap = {
    "10th Std.": "tenth",
    "Intermediate/10+2/PUC": "intermediate",
    "Bachelor's Degree": "bachelor",
    "Master's Degree": "master",
    "M.Phil": "mphil",
    "GATE/NET/Others": "gate",
  };


  console.log(experiences);
  console.log(researchExperiences);

  return (
    <div className={`container ${styles.formContainer}`}>
      {message && (
        <div style={{
          margin: "10px 0",
          padding: "10px",
          background: "#f0f0f0",
          border: "1px solid #ccc"
        }}>
          {message}
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <h1 className={styles.mainTitle}>
          JSS University Noida - Ph.D Application Form
        </h1>

        <section className={styles.FormSec}>
          <h2 className={styles.sectionTitle}>Personal Details</h2>

          <div className={styles.formGrid}>
            <input
              type="text"
              name="applicant_name"
              placeholder="Applicant Name (CAPITAL LETTERS)"
              className={styles.input}
              value={formData.applicant_name}
              onChange={handleChange}
              required
            />

            {errors.applicant_name && (
              <p className={styles.error}>
                {errors.applicant_name[0]}
              </p>
            )}

            <input
              type="text"
              name="father_name"
              placeholder="Father/Guardian Name"
              className={styles.input}
              value={formData.father_name}
              onChange={handleChange}
            />
            {errors.father_name && (
              <p className={styles.error}>
                {errors.father_name[0]}
              </p>
            )}

            <input
              type="text"
              name="mother_name"
              placeholder="Mother Name"
              className={styles.input}
              value={formData.mother_name}
              onChange={handleChange}
            />
            {errors.mother_name && (
              <p className={styles.error}>
                {errors.mother_name[0]}
              </p>
            )}

            <select
              name="gender"
              className={styles.input}
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              {errors.gender && (
                <p className={styles.error}>
                  {errors.gender[0]}
                </p>
              )}
            </select>

            <input
              type="date"
              name="dob"
              className={styles.input}
              value={formData.dob}
              onChange={handleChange}
            />

            {errors.dob && (
              <p className={styles.error}>
                {errors.dob[0]}
              </p>
            )}

            <input
              type="number"
              name="age"
              placeholder="Age"
              className={styles.input}
              value={formData.age}
              onChange={handleChange}
            />

            {errors.age && (
              <p className={styles.error}>
                {errors.age[0]}
              </p>
            )}

            <select
              name="category"
              className={styles.input}
              value={formData.category}
              onChange={handleChange}
            >
              <option value="">Select Category</option>
              <option value="GN">GN</option>
              <option value="OBC">OBC</option>
              <option value="SC">SC</option>
              <option value="ST">ST</option>
              <option value="Others">Others</option>
              {errors.category && (
                <p className={styles.error}>
                  {errors.category[0]}
                </p>
              )}
            </select>

            <input
              type="text"
              name="nationality"
              placeholder="Nationality"
              className={styles.input}
              value={formData.nationality}
              onChange={handleChange}
            />
            {errors.nationality && (
              <p className={styles.error}>
                {errors.nationality[0]}
              </p>
            )}

            <input
              type="text"
              name="religion"
              placeholder="Religion"
              className={styles.input}
              value={formData.religion}
              onChange={handleChange}
            />
            {errors.religion && (
              <p className={styles.error}>
                {errors.religion[0]}
              </p>
            )}

            <input
              type="text"
              name="phone"
              placeholder="Phone"
              className={styles.input}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && (
              <p className={styles.error}>
                {errors.phone[0]}
              </p>
            )}

            <input
              type="text"
              name="mobile"
              placeholder="Mobile"
              className={styles.input}
              value={formData.mobile}
              onChange={handleChange}
            />
            {errors.mobile && (
              <p className={styles.error}>
                {errors.mobile[0]}
              </p>
            )}

            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <p className={styles.error}>
                {errors.email[0]}
              </p>
            )}

            <textarea
              name="address"
              placeholder="Address for Communication"
              className={styles.textarea}
              value={formData.address}
              rows={3}
              onChange={handleChange}
            />
          </div>

          {errors.applicant_name && (
            <p className={styles.error}>{errors.applicant_name[0]}</p>
          )}

          {errors.email && (
            <p className={styles.error}>{errors.email[0]}</p>
          )}
        </section>

        <section className={styles.FormSec}>
          <h2 className={styles.sectionTitle}>Academic Details</h2>

          {academicRows.map((qualification, index) => {
            const prefix = academicFieldMap[qualification];

            return (
              <div key={index} className={styles.academicBlock}>
                <h3 className={styles.subHeading}>{qualification}</h3>

                <div className={styles.formGrid}>
                  <input
                    type="text"
                    name={`${prefix}_institution`}
                    placeholder="Name of School / College / Institution / University"
                    className={styles.input}
                    value={formData[`${prefix}_institution`]}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name={`${prefix}_board`}
                    placeholder="Board / University"
                    className={styles.input}
                    value={formData[`${prefix}_board`]}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name={`${prefix}_passing_year`}
                    placeholder="Month and Year of Passing"
                    className={styles.input}
                    value={formData[`${prefix}_passing_year`]}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name={`${prefix}_subject`}
                    placeholder="Subject"
                    className={styles.input}
                    value={formData[`${prefix}_subject`]}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name={`${prefix}_marks`}
                    placeholder="% Marks"
                    className={styles.input}
                    value={formData[`${prefix}_marks`]}
                    onChange={handleChange}
                  />

                  <input
                    type="text"
                    name={`${prefix}_class_rank`}
                    placeholder="Class / Rank"
                    className={styles.input}
                    value={formData[`${prefix}_class_rank`]}
                    onChange={handleChange}
                  />
                </div>
              </div>
            );
          })}

          <p className={styles.note}>
            * Attach copies of all relevant certificates.
          </p>
        </section>


        <section className={styles.FormSec}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Teaching / Professional Experience
            </h2>

            <button
              type="button"
              className={styles.addBtn}
              onClick={addExperience}
            >
              + Add Experience
            </button>
          </div>

          {experiences.map((exp, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.cardTitle}>
                Experience {index + 1}
              </div>

              <div className={styles.formGrid}>
                {/* Designation */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>Designation</span>
                  <input
                    type="text"
                    value={exp.designation}
                    onChange={(e) => {
                      const updated = [...experiences];
                      updated[index].designation = e.target.value;
                      setExperiences(updated);
                    }}
                    placeholder="Enter Designation"
                    className={styles.input}
                  />
                </div>

                {/* Institution */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>Institution</span>
                  <input
                    type="text"
                    value={exp.institution}
                    onChange={(e) => {
                      const updated = [...experiences];
                      updated[index].institution = e.target.value;
                      setExperiences(updated);
                    }}
                    placeholder="Enter Institution"
                    className={styles.input}
                  />
                </div>

                {/* From Date */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>From Date</span>
                  <input
                    type="date"
                    value={exp.from}
                    onChange={(e) => {
                      const updated = [...experiences];
                      updated[index].from = e.target.value;
                      setExperiences(updated);
                    }}
                    className={styles.input}
                  />
                </div>

                {/* To Date */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>To Date</span>
                  <input
                    type="date"
                    value={exp.to}
                    onChange={(e) => {
                      const updated = [...experiences];
                      updated[index].to = e.target.value;
                      setExperiences(updated);
                    }}
                    className={styles.input}
                  />
                </div>

                {/* Appointment Date */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>
                    Date of Appointment
                  </span>
                  <input
                    type="date"
                    value={exp.appointmentDate}
                    onChange={(e) => {
                      const updated = [...experiences];
                      updated[index].appointmentDate = e.target.value;
                      setExperiences(updated);
                    }}
                    className={styles.input}
                  />
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.FormSec}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Research Experience Details
            </h2>

            <button
              type="button"
              className={styles.addBtn}
              onClick={addResearchExperience}
            >
              + Add Research Experience
            </button>
          </div>

          {researchExperiences.map((item, index) => (
            <div key={index} className={styles.experienceCard}>
              <div className={styles.cardTitle}>
                Research Experience {index + 1}
              </div>

              <div className={styles.formGrid}>
                {/* Designation / Fellowship */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>
                    Designation / Fellowship
                  </span>
                  <input
                    type="text"
                    value={item.designation}
                    onChange={(e) => {
                      const updated = [...researchExperiences];
                      updated[index].designation = e.target.value;
                      setResearchExperiences(updated);
                    }}
                    className={styles.input}
                    placeholder="JRF / SRF / Research Associate"
                  />
                </div>

                {/* Funding Agency */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>
                    Funding Agency
                  </span>
                  <input
                    type="text"
                    value={item.fundingAgency}
                    onChange={(e) => {
                      const updated = [...researchExperiences];
                      updated[index].fundingAgency = e.target.value;
                      setResearchExperiences(updated);
                    }}
                    placeholder="Enter Funding Agency"
                    className={styles.input}
                  />
                </div>

                {/* From Date */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>
                    From Date
                  </span>
                  <input
                    type="date"
                    value={item.from}
                    onChange={(e) => {
                      const updated = [...researchExperiences];
                      updated[index].from = e.target.value;
                      setResearchExperiences(updated);
                    }}
                    className={styles.input}
                  />
                </div>

                {/* To Date */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>
                    To Date
                  </span>
                  <input
                    type="date"
                    value={item.to}
                    onChange={(e) => {
                      const updated = [...researchExperiences];
                      updated[index].to = e.target.value;
                      setResearchExperiences(updated);
                    }}
                    className={styles.input}
                  />
                </div>

                {/* Theme of Research */}
                <div className={styles.fieldGroup}>
                  <span className={styles.fieldLabel}>
                    Theme of Research
                  </span>
                  <input
                    type="text"
                    value={item.theme}
                    onChange={(e) => {
                      const updated = [...researchExperiences];
                      updated[index].theme = e.target.value;
                      setResearchExperiences(updated);
                    }}
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
              name="published_articles"
              value={formData.published_articles}
              onChange={handleChange}
              placeholder="Published Articles / Research Papers / Books"
              className={styles.textarea}
              rows="4"
            />


            <textarea
              placeholder="Awards, Medals, Prizes and Honors"
              className={styles.textarea}
              value={formData.awards}
              name="awards"
              onChange={handleChange}
              rows="4"
            />

            <textarea
              placeholder="Any Other Particulars"
              className={styles.textarea}
              value={formData.other_particulars}
              name="other_particulars"
              onChange={handleChange}
              rows="4"
            />

            <textarea
              placeholder="Previous Ph.D / M.Phil Registration Details"
              className={styles.textarea}
              value={formData.previous_registration_details}
              name="previous_registration_details"
              onChange={handleChange}
              rows="4"
            />

            <textarea
              placeholder="Broad Field / Area of Research"
              className={styles.textarea}
              value={formData.research_area}
              name="research_area"
              onChange={handleChange}
              rows="4"
            />

            <textarea
              placeholder="Proposed Research Topic"
              className={styles.textarea}
              name="proposed_research_topic"
              value={formData.proposed_research_topic}
              onChange={handleChange}
              rows="4"
            />

            <label className={styles.uploadLabel}>
              Attach One Page Write-up
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                name="writeup_file"
                onChange={handleFileChange}
              />
            </label>
          </div>
        </section>

        {/* Declaration */}
        <section className={styles.declarationSection}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="not_working_declaration"
              checked={formData.not_working_declaration}
              onChange={handleChange}
            />
            I declare that I am not working anywhere either on a
            Full-time or Part-time basis.
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              name="information_correct_declaration"
              checked={formData.information_correct_declaration}
              onChange={handleChange}
            />
            I declare that the information furnished above is correct
            and I shall abide by the rules and regulations of
            JSS University Noida.
          </label>

          {Object.keys(errors).length > 0 && (
            <div className={styles.errorBox}>
              {Object.entries(errors).map(([key, value]) => (
                <p key={key}>
                  {key}: {Array.isArray(value) ? value[0] : value}
                </p>
              ))}
            </div>
          )}

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </section>
      </form>
      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popup}>
            <div className={styles.successIcon}>✓</div>

            <h3>Application Submitted</h3>

            <p>{message}</p>

            <button
              type="button"
              onClick={() => setShowPopup(false)}
              className={styles.popupBtn}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}