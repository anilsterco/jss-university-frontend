"use client";
import React, { useState } from "react";

import styles from "./CareersFormData.module.css";

export default function CareersFormData() {
    const [formData, setFormData] = useState({
        full_name: "",
        email: "",
        mobile: "",
        city: "",
        aadhar_number: "",
        pan_number: "",
        address: "",

        school: "",
        department: "",
        post_applied_for: "",

        teaching_experience: "",
        current_designation: "",
        current_organization: "",
        experience_type: "",

        highest_qualification: "",
        net_eligibility_qualification: "",
        phd_status: "",
        specialization: "",
        research_experience: "",

        indexed_journal_publications: 0,
        conference_publications: 0,
        research_profile_link: "",

        utility_patents_filed: 0,
        utility_patents_published: 0,
        utility_patents_granted: 0,

        phd_scholars_guided: 0,
        ongoing_scholars: 0,

        declaration_accepted: false,
        terms_accepted: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: type === "checkbox" ? checked : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setMessage("");

        try {
            const response = await fetch(
                "https://project-demo.in/jss/api/career-form",
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            const result = await response.json();

            if (response.ok && result.success) {
                setMessage("Application submitted successfully.");

                setFormData({
                    full_name: "",
                    email: "",
                    mobile: "",
                    city: "",
                    aadhar_number: "",
                    pan_number: "",
                    address: "",
                    school: "",
                    department: "",
                    post_applied_for: "",
                    teaching_experience: "",
                    current_designation: "",
                    current_organization: "",
                    experience_type: "",
                    highest_qualification: "",
                    net_eligibility_qualification: "",
                    phd_status: "",
                    specialization: "",
                    research_experience: "",
                    indexed_journal_publications: 0,
                    conference_publications: 0,
                    research_profile_link: "",
                    utility_patents_filed: 0,
                    utility_patents_published: 0,
                    utility_patents_granted: 0,
                    phd_scholars_guided: 0,
                    ongoing_scholars: 0,
                    declaration_accepted: false,
                    terms_accepted: false,
                });
            } else {
                setMessage(result.message || "Submission failed");
            }
        } catch (error) {
            console.error(error);
            setMessage("Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={`container ${styles.formContainer}`}>
            <form onSubmit={handleSubmit}>
                <h1 className={styles.mainTitle}>
                    Faculty Recruitment Application Form
                </h1>
                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>Personal Details</h2>

                    <div className={styles.formGrid}>

                        <input
                            type="text"
                            name="fullName"
                            placeholder="Full Name"
                            className={styles.input}
                            onChange={handleChange}
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            className={styles.input}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="mobile"
                            placeholder="WhatsApp Mobile Number"
                            className={styles.input}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="city"
                            placeholder="Current City & State"
                            className={styles.input}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="aadhar"
                            placeholder="Aadhar ID Number"
                            className={styles.input}
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="pan"
                            placeholder="PAN Card Number"
                            className={styles.input}
                            onChange={handleChange}
                        />
                        <textarea
                            name="address"
                            placeholder="Residential Address"
                            className={styles.textarea}
                            rows="3"
                            onChange={handleChange}
                        />
                    </div>
                </section>

                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>
                        Position Applied For
                    </h2>

                    <div className={styles.formGrid}>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                School Applying For
                            </span>
                            <select
                                name="school"
                                className={styles.input}
                                onChange={handleChange}>
                                <option value="">Select School</option>
                                <option>School of Engineering</option>
                                <option>College of Pharmacy</option>
                                <option>School of Management</option>
                                <option>School of Computer Applications</option>
                                <option>School of Applied Sciences</option>
                                <option>School of Humanities and Social Sciences</option>
                                <option>School of Life Sciences</option>
                            </select>
                        </div>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Department Applying For
                            </span>
                            <select
                                name="school"
                                className={styles.input}
                                onChange={handleChange}>
                                <option value="">Select Department</option>
                                <option>Aerospace Engineering</option>
                                <option>Artificial Intelligence and Machine Learning</option>
                                <option>Civil Engineering</option>
                                <option>Electrical and Electronics Engineering</option>
                                <option>Electrical Engineering</option>
                                <option>Electronics And Communication Engineering</option>
                                <option>Mechanical Engineering</option>
                            </select>
                        </div>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Post Applying For
                            </span>

                            <select
                                name="post"
                                className={styles.input}
                                onChange={handleChange}
                            >
                                <option value="">Select Post</option>

                                <option>Professor</option>
                                <option>Associate Professor</option>
                                <option>Assistant Professor</option>
                                <option>Adjunct Faculty</option>
                            </select>
                        </div>

                    </div>
                </section>

                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>
                        Professional Experience
                    </h2>

                    <div className={styles.formGrid}>

                        <select className={styles.input}>
                            <option value="">
                                Teaching Experience (in Years)
                            </option>
                            <option>Fresher</option>
                            <option>Less than 1 Year</option>
                            <option>1-3 Years</option>
                            <option>3-5 Years</option>
                            <option>5+ Years</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Current / Last Designation"
                            className={styles.input}
                        />

                        <input
                            type="text"
                            placeholder="Current / Last Organization"
                            className={styles.input}
                        />

                        <select className={styles.input}>
                            <option value="">Experience Type</option>
                            <option>Teaching</option>
                            <option>Industry</option>
                            <option>Research</option>
                            <option>Administration</option>
                        </select>

                    </div>
                </section>


                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>
                        Academic Qualifications
                    </h2>

                    <div className={styles.formGrid}>

                        <select className={styles.input}>
                            <option value="">Highest Qualification</option>
                            <option>Bachelor's Degree</option>
                            <option>Master's Degree</option>
                            <option>M.Phil</option>
                            <option>PhD</option>
                            <option>Postdoctoral Research</option>
                            <option>Diploma/Certification</option>
                        </select>

                        <select className={styles.input}>
                            <option value="">
                                NET / Eligibility Qualification
                            </option>

                            <option>Qualified UGC NET</option>
                            <option>Qualified CSIR NET</option>
                            <option>Qualified SET</option>
                            <option>NET/SET Not Qualified</option>
                            <option>NET Exempted</option>
                        </select>

                        <select className={styles.input}>
                            <option value="">PhD Status</option>
                            <option>Not Enrolled</option>
                            <option>Pursuing PhD</option>
                            <option>PhD Awarded</option>
                        </select>

                        <input
                            type="text"
                            placeholder="Specialization / Subject Area"
                            className={styles.input}
                        />
                        <select className={styles.input}>
                            <option value="">Research Experience</option>
                            <option>None</option>
                            <option>Less than 1 Year</option>
                            <option>1-3 Years</option>
                            <option>3+ Years</option>
                        </select>

                    </div>
                </section>
                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>Publications</h2>

                    <div className={styles.formGrid}>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Number of Indexed Journal Publications
                            </span>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Number of Conference Publications
                            </span>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Google Scholar / Research Profile Link
                            </span>
                            <input
                                type="url"
                                className={styles.input}
                                placeholder="https://"
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>Patents / IPR</h2>

                    <div className={styles.formGrid}>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Number of Utility Patents Filed
                            </span>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Number of Utility Patents Published
                            </span>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Number of Utility Patents Granted
                            </span>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>
                    </div>
                </section>
                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>
                        PhD Guidance / Research Supervision
                    </h2>

                    <div className={styles.formGrid}>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Number of PhD Scholars Guided
                            </span>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Number of Ongoing Scholars
                            </span>
                            <input
                                type="number"
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.declarationSection}>
                    <h2 className={styles.sectionTitle}>Declaration</h2>

                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        I hereby declare that all information submitted by me is true and
                        correct to the best of my knowledge. I understand that any false
                        information may lead to cancellation of my candidature.
                    </label>

                    <label className={styles.checkboxLabel}>
                        <input type="checkbox" />
                        I agree to the terms and conditions of JSS University Noida.
                    </label>

                    <button
                        type="submit"
                        className={styles.submitBtn}
                    >
                        Submit Application
                    </button>
                </section>
            </form>
        </div>
    );
}