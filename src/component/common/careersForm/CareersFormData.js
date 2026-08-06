"use client";
import React, { useState, useRef } from "react";

import styles from "./CareersFormData.module.css";
import { BASE_URL } from "@/config/config.mjs";

export default function CareersFormData() {
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [errors, setErrors] = useState({});
    const [showPopup, setShowPopup] = useState(false);
    const fileInputRef = useRef(null);

    const [formData, setFormData] = useState({
        full_name: null,
        email: null,
        mobile: null,
        city: null,
        aadhar_number: null,
        pan_number: null,
        address: null,
        school: null,
        department: null,
        post_applied_for: null,
        scopus_id: null,
        indexed_journal_publications: null,
        conference_publications: null,
        research_profile_link: null,
        utility_patents_filed: null,
        utility_patents_published: null,
        utility_patents_granted: null,
        phd_scholars_guided: null,
        ongoing_scholars: null,
        other_achievements: null,
        declaration_accepted: false,
        terms_accepted: false,
    });

    const [academicQualifications, setAcademicQualifications] = useState([
        {
            highest_qualification: null,
            net_eligibility_qualification: null,
            phd_status: null,
            specialization: null,
            research_experience: null,
            degree: null,
            university: null,
            year_of_passing: null,
            division: null,
            overall_percentage: null,
        },
    ]);

    const [professionalExperiences, setProfessionalExperiences] = useState([
        {
            teaching_experience: null,
            current_designation: null,
            current_organization: null,
            experience_type: null,
        },
    ]);

    const addAcademicQualification = () => {
        setAcademicQualifications([
            ...academicQualifications,
            {
                highest_qualification: null,
                net_eligibility_qualification: null,
                phd_status: null,
                specialization: null,
                research_experience: null,
                degree: null,
                university: null,
                year_of_passing: null,
                division: null,
                overall_percentage: null,
            },
        ]);
    };

    const addProfessionalExperience = () => {
        setProfessionalExperiences([
            ...professionalExperiences,
            {
                teaching_experience: null,
                current_designation: null,
                current_organization: null,
                experience_type: null,
            },
        ]);
    };

    const handleAcademicChange = (index, e) => {
        const { name, value } = e.target;
        const updated = [...academicQualifications];
        updated[index][name] = value;
        setAcademicQualifications(updated);
    };

    const handleProfessionalChange = (index, e) => {
        const { name, value } = e.target;
        const updated = [...professionalExperiences];
        updated[index][name] = value;
        setProfessionalExperiences(updated);
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

        setLoading(true);
        setMessage("");
        setErrors({});

        const form = new FormData();

        // Flat fields
        Object.entries(formData).forEach(([key, value]) => {
            if (value === null || value === undefined) return; // skip nulls
            form.append(key, typeof value === "boolean" ? (value ? 1 : 0) : value);
        });

        // Academic qualifications — bracket notation so Laravel parses it as a nested array
        academicQualifications.forEach((qualification, index) => {
            Object.entries(qualification).forEach(([key, value]) => {
                if (value === null || value === undefined || value === "") return;
                form.append(`academic_qualifications[${index}][${key}]`, value);
            });
        });

        // Professional experience — backend field is singular "professional_experience"
        professionalExperiences.forEach((exp, index) => {
            Object.entries(exp).forEach(([key, value]) => {
                if (value === null || value === undefined || value === "") return;
                form.append(`professional_experience[${index}][${key}]`, value);
            });
        });

        const selectedFile = fileInputRef.current?.files?.[0];
        if (selectedFile) {
            form.append("writeup_file", selectedFile);
        }

        try {
            const response = await fetch(
                `${BASE_URL}career-form`,
                {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        // Do NOT set Content-Type manually — the browser sets the
                        // correct multipart boundary automatically for FormData
                    },
                    body: form,
                }
            );
            const result = await response.json();

            if (response.ok) {
                setMessage(result.message || "Application submitted successfully");
                setErrors({});
                setShowPopup(true);

                setTimeout(() => {
                    setShowPopup(false);
                }, 3000);

                // reset form
                setFormData({
                    full_name: null,
                    email: null,
                    mobile: null,
                    city: null,
                    aadhar_number: null,
                    pan_number: null,
                    address: null,
                    school: null,
                    department: null,
                    post_applied_for: null,
                    scopus_id: null,
                    indexed_journal_publications: null,
                    conference_publications: null,
                    research_profile_link: null,
                    utility_patents_filed: null,
                    utility_patents_published: null,
                    utility_patents_granted: null,
                    phd_scholars_guided: null,
                    ongoing_scholars: null,
                    other_achievements: null,
                    declaration_accepted: false,
                    terms_accepted: false,
                });

                setAcademicQualifications([
                    {
                        highest_qualification: null,
                        net_eligibility_qualification: null,
                        phd_status: null,
                        specialization: null,
                        research_experience: null,
                        degree: null,
                        university: null,
                        year_of_passing: null,
                        division: null,
                        overall_percentage: null,
                    },
                ]);

                setProfessionalExperiences([
                    {
                        teaching_experience: null,
                        current_designation: null,
                        current_organization: null,
                        experience_type: null,
                    },
                ]);

                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }
            } else {
                setMessage(result.message || "Validation Failed");
                setErrors(result.errors || {});
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
                        <div className="fild-col">
                            <input
                                type="text"
                                name="full_name"
                                placeholder="Full Name"
                                className={styles.input}
                                value={formData.full_name || ""}
                                onChange={handleChange}
                            />
                            {errors.full_name && (
                                <p className={styles.error}>{errors.full_name[0]}</p>
                            )}
                        </div>
                        <div className="fild-col">
                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                className={styles.input}
                                value={formData.email || ""}
                                onChange={handleChange}
                            />
                            {errors.email && (
                                <p className={styles.error}>{errors.email[0]}</p>
                            )}
                        </div>
                        <div className="fild-col">
                            <input
                                type="text"
                                name="mobile"
                                placeholder="WhatsApp Mobile Number"
                                value={formData.mobile || ""}
                                className={styles.input}
                                onChange={handleChange}
                            />
                            {errors.mobile && (
                                <p className={styles.error}>{errors.mobile[0]}</p>
                            )}
                        </div>
                        <div className="fild-col">
                            <input
                                type="text"
                                name="city"
                                placeholder="Current City & State"
                                className={styles.input}
                                value={formData.city || ""}
                                onChange={handleChange}
                            />
                            {errors.city && (
                                <p className={styles.error}>{errors.city[0]}</p>
                            )}
                        </div>
                        <div className="fild-col">
                            <input
                                type="text"
                                name="aadhar_number"
                                placeholder="Aadhar ID Number"
                                className={styles.input}
                                value={formData.aadhar_number || ""}
                                onChange={handleChange}
                            />
                            {errors.aadhar_number && (
                                <p className={styles.error}>{errors.aadhar_number[0]}</p>
                            )}
                        </div>
                        <div className="fild-col">
                            <input
                                type="text"
                                name="pan_number"
                                placeholder="PAN Card Number"
                                className={styles.input}
                                value={formData.pan_number || ""}
                                onChange={handleChange}
                            />
                            {errors.pan_number && (
                                <p className={styles.error}>{errors.pan_number[0]}</p>
                            )}
                        </div>
                        <div className="fild-col">
                            <textarea
                                name="address"
                                placeholder="Residential Address"
                                className={styles.textarea}
                                value={formData.address || ""}
                                rows="3"
                                onChange={handleChange}
                            />
                            {errors.address && (
                                <p className={styles.error}>{errors.address[0]}</p>
                            )}
                        </div>
                    </div>
                </section>

                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>Position Applied For</h2>

                    <div className={styles.formGrid}>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>School Applying For</span>
                            <select
                                name="school"
                                className={styles.input}
                                value={formData.school || ""}
                                onChange={handleChange}
                            >
                                <option value="">Select School</option>
                                <option value="School of Engineering">School of Engineering</option>
                                <option value="College of Pharmacy">College of Pharmacy</option>
                                <option value="School of Management">School of Management</option>
                                <option value="School of Computer Applications">School of Computer Applications</option>
                                <option value="School of Applied Sciences">School of Applied Sciences</option>
                                <option value="School of Humanities and Social Sciences">School of Humanities and Social Sciences</option>
                                <option value="School of Life Sciences">School of Life Sciences</option>
                            </select>
                            {errors.school && (
                                <p className={styles.error}>{errors.school[0]}</p>
                            )}
                        </div>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>Department Applying For</span>
                            <select
                                name="department"
                                className={styles.input}
                                onChange={handleChange}
                                value={formData.department || ""}
                            >
                                <option value="">Select Department</option>
                                <option value="Aerospace Engineering">Aerospace Engineering</option>
                                <option value="Artificial Intelligence and Machine Learning">Artificial Intelligence and Machine Learning</option>
                                <option value="Civil Engineering">Civil Engineering</option>
                                <option value="Electrical and Electronics Engineering">Electrical and Electronics Engineering</option>
                                <option value="Electrical Engineering">Electrical Engineering</option>
                                <option value="Electronics And Communication Engineering">Electronics And Communication Engineering</option>
                                <option value="Mechanical Engineering">Mechanical Engineering</option>
                            </select>
                            {errors.department && (
                                <p className={styles.error}>{errors.department[0]}</p>
                            )}
                        </div>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>Post Applying For</span>
                            <select
                                name="post_applied_for"
                                value={formData.post_applied_for || ""}
                                onChange={handleChange}
                                className={styles.input}
                            >
                                <option value="">Select Post</option>
                                <option value="Professor">Professor</option>
                                <option value="Associate Professor">Associate Professor</option>
                                <option value="Assistant Professor">Assistant Professor</option>
                                <option value="Adjunct Faculty">Adjunct Faculty</option>
                            </select>
                            {errors.post_applied_for && (
                                <p className={styles.error}>{errors.post_applied_for[0]}</p>
                            )}
                        </div>
                    </div>
                </section>

                <section className={styles.FormSec}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Professional Experience</h2>
                        <button
                            type="button"
                            className={styles.addBtn}
                            onClick={addProfessionalExperience}
                        >
                            + Add Experience
                        </button>
                    </div>

                    {professionalExperiences.map((exp, index) => (
                        <div key={index} className={styles.experienceCard}>
                            <div className={styles.cardTitle}>Experience {index + 1}</div>

                            <div className={styles.formGrid}>
                                <select
                                    name="teaching_experience"
                                    value={exp.teaching_experience || ""}
                                    onChange={(e) => handleProfessionalChange(index, e)}
                                    className={styles.input}
                                >
                                    <option value="">Teaching Experience (in Years)</option>
                                    <option>Fresher</option>
                                    <option>Less than 1 Year</option>
                                    <option>1-3 Years</option>
                                    <option>3-5 Years</option>
                                    <option>5+ Years</option>
                                </select>

                                <input
                                    type="text"
                                    name="current_designation"
                                    value={exp.current_designation || ""}
                                    placeholder="Current / Last Designation"
                                    className={styles.input}
                                    onChange={(e) => handleProfessionalChange(index, e)}
                                />

                                <input
                                    type="text"
                                    name="current_organization"
                                    value={exp.current_organization || ""}
                                    placeholder="Current / Last Organization"
                                    className={styles.input}
                                    onChange={(e) => handleProfessionalChange(index, e)}
                                />

                                <select
                                    name="experience_type"
                                    value={exp.experience_type || ""}
                                    onChange={(e) => handleProfessionalChange(index, e)}
                                    className={styles.input}
                                >
                                    <option value="">Experience Type</option>
                                    <option>Teaching</option>
                                    <option>Industry</option>
                                    <option>Research</option>
                                    <option>Administration</option>
                                </select>
                            </div>
                        </div>
                    ))}
                </section>

                <section className={styles.FormSec}>
                    <div className={styles.sectionHeader}>
                        <h2 className={styles.sectionTitle}>Academic Qualifications</h2>
                        <button
                            type="button"
                            className={styles.addBtn}
                            onClick={addAcademicQualification}
                        >
                            + Add Qualification
                        </button>
                    </div>

                    {academicQualifications.map((qualification, index) => (
                        <div key={index} className={styles.experienceCard}>
                            <div className={styles.cardTitle}>Qualification {index + 1}</div>

                            <div className={styles.formGrid}>
                                <select
                                    name="highest_qualification"
                                    value={qualification.highest_qualification || ""}
                                    onChange={(e) => handleAcademicChange(index, e)}
                                    className={styles.input}
                                >
                                    <option value="">Highest Qualification</option>
                                    <option>Bachelor's Degree</option>
                                    <option>Master's Degree</option>
                                    <option>M.Phil</option>
                                    <option>PhD</option>
                                    <option>Postdoctoral Research</option>
                                    <option>Diploma/Certification</option>
                                </select>

                                <select
                                    name="net_eligibility_qualification"
                                    value={qualification.net_eligibility_qualification || ""}
                                    onChange={(e) => handleAcademicChange(index, e)}
                                    className={styles.input}
                                >
                                    <option value="">NET / Eligibility Qualification</option>
                                    <option>Qualified UGC NET</option>
                                    <option>Qualified CSIR NET</option>
                                    <option>Qualified SET</option>
                                    <option>NET/SET Not Qualified</option>
                                    <option>NET Exempted</option>
                                </select>

                                <select
                                    name="phd_status"
                                    value={qualification.phd_status || ""}
                                    onChange={(e) => handleAcademicChange(index, e)}
                                    className={styles.input}
                                >
                                    <option value="">PhD Status</option>
                                    <option>Not Enrolled</option>
                                    <option>Pursuing PhD</option>
                                    <option>PhD Awarded</option>
                                </select>

                                <input
                                    type="text"
                                    name="specialization"
                                    value={qualification.specialization || ""}
                                    placeholder="Specialization / Subject Area"
                                    className={styles.input}
                                    onChange={(e) => handleAcademicChange(index, e)}
                                />

                                <select
                                    name="research_experience"
                                    value={qualification.research_experience || ""}
                                    onChange={(e) => handleAcademicChange(index, e)}
                                    className={styles.input}
                                >
                                    <option value="">Research Experience</option>
                                    <option>None</option>
                                    <option>Less than 1 Year</option>
                                    <option>1-3 Years</option>
                                    <option>3+ Years</option>
                                </select>

                                <input
                                    type="text"
                                    name="degree"
                                    value={qualification.degree || ""}
                                    placeholder="Degree"
                                    className={styles.input}
                                    onChange={(e) => handleAcademicChange(index, e)}
                                />

                                <input
                                    type="text"
                                    name="university"
                                    value={qualification.university || ""}
                                    placeholder="University/College Name"
                                    className={styles.input}
                                    onChange={(e) => handleAcademicChange(index, e)}
                                />

                                <input
                                    type="text"
                                    name="year_of_passing"
                                    value={qualification.year_of_passing || ""}
                                    placeholder="Year of Passing"
                                    className={styles.input}
                                    onChange={(e) => handleAcademicChange(index, e)}
                                />

                                <input
                                    type="text"
                                    name="overall_percentage"
                                    value={qualification.overall_percentage || ""}
                                    placeholder="Overall Percentage"
                                    className={styles.input}
                                    onChange={(e) => handleAcademicChange(index, e)}
                                />

                                <input
                                    type="text"
                                    name="division"
                                    value={qualification.division || ""}
                                    placeholder="Division"
                                    className={styles.input}
                                    onChange={(e) => handleAcademicChange(index, e)}
                                />
                            </div>
                        </div>
                    ))}
                </section>

                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>Publications</h2>

                    <div className={styles.formGrid}>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Number of Indexed Journal Publications (Scopus & WoS only)
                            </span>
                            <input
                                type="number"
                                name="indexed_journal_publications"
                                value={formData.indexed_journal_publications || ""}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>
                                Number of Indexed conference publications (Scopus & WoS only)
                            </span>
                            <input
                                type="number"
                                name="conference_publications"
                                value={formData.conference_publications || ""}
                                onChange={handleChange}
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
                                name="research_profile_link"
                                value={formData.research_profile_link || ""}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="https://"
                            />
                            {errors.research_profile_link && (
                                <p className={styles.error}>{errors.research_profile_link[0]}</p>
                            )}
                        </div>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>Scopus ID</span>
                            <input
                                type="text"
                                name="scopus_id"
                                value={formData.scopus_id || ""}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Enter Scopus ID"
                            />
                            {errors.scopus_id && (
                                <p className={styles.error}>{errors.scopus_id[0]}</p>
                            )}
                        </div>
                    </div>
                </section>

                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>Patents / IPR</h2>

                    <div className={styles.formGrid}>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>Number of Utility Patents Filed</span>
                            <input
                                type="number"
                                name="utility_patents_filed"
                                value={formData.utility_patents_filed || ""}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>Number of Utility Patents Published</span>
                            <input
                                type="number"
                                name="utility_patents_published"
                                value={formData.utility_patents_published || ""}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>Number of Utility Patents Granted</span>
                            <input
                                type="number"
                                name="utility_patents_granted"
                                value={formData.utility_patents_granted || ""}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>PhD Guidance / Research Supervision</h2>

                    <div className={styles.formGrid}>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>Number of PhD Scholars Guided</span>
                            <input
                                type="number"
                                name="phd_scholars_guided"
                                value={formData.phd_scholars_guided || ""}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>

                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>Number of Ongoing Scholars</span>
                            <input
                                type="number"
                                name="ongoing_scholars"
                                value={formData.ongoing_scholars || ""}
                                onChange={handleChange}
                                className={styles.input}
                                placeholder="Enter Number"
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>Other Achievements</h2>

                    <div className={styles.formGrid}>
                        <div className={styles.fieldGroup}>
                            <span className={styles.fieldLabel}>Other Achievements</span>
                            <textarea
                                name="other_achievements"
                                value={formData.other_achievements || ""}
                                onChange={handleChange}
                                className={styles.textarea}
                                placeholder="Enter Other Achievements"
                                rows="6"
                            />
                        </div>
                    </div>
                </section>

                <section className={styles.FormSec}>
                    <h2 className={styles.sectionTitle}>Upload Resume/CV</h2>
                    <div className={styles.formGrid}>
                        <div className={styles.fieldGroup}>
                            <input
                                type="file"
                                name="writeup_file"
                                accept=".pdf,.doc,.docx"
                                className={styles.input}
                                ref={fileInputRef}
                            />
                            {errors.writeup_file && (
                                <p className={styles.error}>{errors.writeup_file[0]}</p>
                            )}
                        </div>
                    </div>
                </section>

                <section className={styles.declarationSection}>
                    <h2 className={styles.sectionTitle}>Declaration</h2>

                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="declaration_accepted"
                            checked={formData.declaration_accepted}
                            onChange={handleChange}
                        />
                        I hereby declare that all information submitted by me is true and
                        correct to the best of my knowledge. I understand that any false
                        information may lead to cancellation of my candidature.
                        {errors.declaration_accepted && (
                            <p className={styles.error}>{errors.declaration_accepted[0]}</p>
                        )}
                    </label>

                    <label className={styles.checkboxLabel}>
                        <input
                            type="checkbox"
                            name="terms_accepted"
                            checked={formData.terms_accepted}
                            onChange={handleChange}
                        />
                        I agree to the terms and conditions of JSS University Noida.
                        {errors.terms_accepted && (
                            <p className={styles.error}>{errors.terms_accepted[0]}</p>
                        )}
                    </label>
                    {message && (
                        <div
                            className={
                                Object.keys(errors).length ? styles.errorBox : styles.success
                            }
                        >
                            {message}
                        </div>
                    )}

                    <button type="submit" className={styles.submitBtn} disabled={loading}>
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