"use client";

import { useState } from "react";
import './applyNow.css'

const SCHOOLS = [
  "School of Engineering & Technology",
  "School of Business & Management",
  "School of Arts & Humanities",
  "School of Sciences",
  "School of Law",
  "School of Medicine & Health Sciences",
  "School of Architecture & Design",
  "School of Education",
];

const STREAMS = {
  "School of Engineering & Technology": [
    "Computer Science & Engineering",
    "Electronics & Communication",
    "Mechanical Engineering",
    "Civil Engineering",
    "Information Technology",
    "Electrical Engineering",
  ],
  "School of Business & Management": [
    "Business Administration (MBA)",
    "Marketing",
    "Finance & Accounting",
    "Human Resource Management",
    "Operations Management",
  ],
  "School of Arts & Humanities": [
    "English Literature",
    "History",
    "Philosophy",
    "Psychology",
    "Sociology",
    "Political Science",
  ],
  "School of Sciences": [
    "Physics",
    "Chemistry",
    "Mathematics",
    "Biology",
    "Biotechnology",
    "Environmental Science",
  ],
  "School of Law": [
    "LLB (Hons)",
    "Corporate Law",
    "Criminal Law",
    "International Law",
    "Intellectual Property Law",
  ],
  "School of Medicine & Health Sciences": [
    "MBBS",
    "Nursing",
    "Pharmacy",
    "Public Health",
    "Physiotherapy",
  ],
  "School of Architecture & Design": [
    "Architecture",
    "Interior Design",
    "Urban Planning",
    "Graphic Design",
    "Fashion Design",
  ],
  "School of Education": [
    "B.Ed (Primary)",
    "B.Ed (Secondary)",
    "Special Education",
    "Educational Psychology",
  ],
};

const QUALIFICATIONS = [
  "10th (Secondary)",
  "12th (Higher Secondary)",
  "Diploma",
  "Bachelor's Degree",
  "Master's Degree",
  "PhD",
  "Other",
];

export default function ApplyNowForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    school: "",
    stream: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);

  const availableStreams = form.school ? STREAMS[form.school] || [] : [];

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-()]{8,}$/.test(form.phone))
      newErrors.phone = "Enter a valid phone number";
    if (!form.qualification) newErrors.qualification = "Select a qualification";
    if (!form.school) newErrors.school = "Select a school";
    if (!form.stream) newErrors.stream = "Select a stream";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "school") updated.stream = "";
      return updated;
    });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      qualification: "",
      school: "",
      stream: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <>
        <div className="apply-wrapper">
          <div className="container">
            <div className="apply-card success-card">
                <div className="success-icon">✓</div>
                <h2 className="success-title">Application Submitted!</h2>
                <p className="success-text">
                Thank you, <strong>{form.name}</strong>. We've received your
                application for <strong>{form.stream}</strong> at{" "}
                <strong>{form.school}</strong>. We'll be in touch at{" "}
                <strong>{form.email}</strong> shortly.
                </p>
                <button className="btn-primary" onClick={handleReset}>
                Submit Another Application
                </button>
            </div>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="apply-wrapper">
        <div className="container">
        <div className="apply-card">
          <div className="apply-header">
            <div className="header-content">
              <span className="header-eyebrow">Admissions 2025–26</span>
              <h1 className="header-title">Apply Now</h1>
              <p className="header-subtitle">
                Begin your journey — fill out the form below to get started.
              </p>
            </div>
          </div>

          <form className="apply-form" onSubmit={handleSubmit} noValidate>
            <div className="section-label">Personal Details</div>

            <div className="field-group">
              {/* Name */}
              <div className={`field ${errors.name ? "field--error" : ""} ${focused === "name" ? "field--focused" : ""}`}>
                <label className="field-label" htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="field-input"
                  placeholder="e.g. Arjun Sharma"
                  value={form.name}
                  onChange={handleChange}
                  onFocus={() => setFocused("name")}
                  onBlur={() => setFocused(null)}
                />
                {errors.name && (
                  <span className="field-error">{errors.name}</span>
                )}
              </div>

              {/* Email */}
              <div className={`field ${errors.email ? "field--error" : ""} ${focused === "email" ? "field--focused" : ""}`}>
                <label className="field-label" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="field-input"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  onFocus={() => setFocused("email")}
                  onBlur={() => setFocused(null)}
                />
                {errors.email && (
                  <span className="field-error">{errors.email}</span>
                )}
              </div>

              {/* Phone */}
              <div className={`field ${errors.phone ? "field--error" : ""} ${focused === "phone" ? "field--focused" : ""}`}>
                <label className="field-label" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="field-input"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={handleChange}
                  onFocus={() => setFocused("phone")}
                  onBlur={() => setFocused(null)}
                />
                {errors.phone && (
                  <span className="field-error">{errors.phone}</span>
                )}
              </div>
            </div>

            <div className="section-label">Academic Background</div>

            <div className="field-group">
              {/* Qualification */}
              <div className={`field ${errors.qualification ? "field--error" : ""} ${focused === "qualification" ? "field--focused" : ""}`}>
                <label className="field-label" htmlFor="qualification">
                  Qualification
                </label>
                <div className="select-wrapper">
                  <select
                    id="qualification"
                    name="qualification"
                    className="field-select"
                    value={form.qualification}
                    onChange={handleChange}
                    onFocus={() => setFocused("qualification")}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="">Select qualification</option>
                    {QUALIFICATIONS.map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▾</span>
                </div>
                {errors.qualification && (
                  <span className="field-error">{errors.qualification}</span>
                )}
              </div>

              {/* School */}
              <div className={`field ${errors.school ? "field--error" : ""} ${focused === "school" ? "field--focused" : ""}`}>
                <label className="field-label" htmlFor="school">
                  School
                </label>
                <div className="select-wrapper">
                  <select
                    id="school"
                    name="school"
                    className="field-select"
                    value={form.school}
                    onChange={handleChange}
                    onFocus={() => setFocused("school")}
                    onBlur={() => setFocused(null)}
                  >
                    <option value="">Select school</option>
                    {SCHOOLS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▾</span>
                </div>
                {errors.school && (
                  <span className="field-error">{errors.school}</span>
                )}
              </div>

              {/* Stream */}
              <div className={`field ${errors.stream ? "field--error" : ""} ${focused === "stream" ? "field--focused" : ""} ${!form.school ? "field--disabled" : ""}`}>
                <label className="field-label" htmlFor="stream">
                  Stream
                </label>
                <div className="select-wrapper">
                  <select
                    id="stream"
                    name="stream"
                    className="field-select"
                    value={form.stream}
                    onChange={handleChange}
                    onFocus={() => setFocused("stream")}
                    onBlur={() => setFocused(null)}
                    disabled={!form.school}
                  >
                    <option value="">
                      {form.school ? "Select stream" : "Select a school first"}
                    </option>
                    {availableStreams.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▾</span>
                </div>
                {errors.stream && (
                  <span className="field-error">{errors.stream}</span>
                )}
              </div>
            </div>

            <button type="submit" className="btn-primary btn-submit">
              Submit Application
              <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
        </div>
      </div>
    </>
  );
}