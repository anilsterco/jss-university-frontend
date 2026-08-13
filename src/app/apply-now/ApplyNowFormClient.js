"use client";

import { useState, useMemo } from "react";
import "./applyNow.css";
import { BASE_URL, WEB_URL } from "@/config/config.mjs";
import Link from "next/link";

export default function ApplyNowFormClient({ schools = [] }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    qualification: "",
    school: "",
    department: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [loading, setLoading] = useState(false);

  // Derived from schools prop + selected school — no useEffect needed
  const selectedDepartments = useMemo(
    () => schools.find((s) => s.name === form.school)?.departments ?? [],
    [schools, form.school]
  );

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Enter a valid email";
    if (!form.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\+?[\d\s\-()]{8,}$/.test(form.phone))
      newErrors.phone = "Enter a valid phone number";
    if (!form.qualification) newErrors.qualification = "Enter qualification";
    if (!form.school) newErrors.school = "Select a school";
    if (!form.department) newErrors.department = "Select a stream";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "school") updated.department = "";
      return updated;
    });
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);
      const response = await fetch(`${BASE_URL}apply-form`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) throw new Error("Failed to submit form");

      setSubmitted(true);
      setErrors({});
    } catch (error) {
      console.error("Submit error:", error.message);
      setErrors((prev) => ({ ...prev, api: error.message }));
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setForm({
      name: "",
      email: "",
      phone: "",
      qualification: "",
      school: "",
      department: "",
    });
    setErrors({});
    setSubmitted(false);
  };

  if (submitted) {
    return (
      <div className="apply-wrapper">
        <div className="container">
          <div className="apply-card success-card">
            <div className="success-icon">✓</div>
            <h2 className="success-title">Application Submitted!</h2>
            <p className="success-text">
              Thank you, <strong>{form.name}</strong>. We've received your
              application for <strong>{form.department}</strong> at{" "}
              <strong>{form.school}</strong>. We'll be in touch at{" "}
              <strong>{form.email}</strong> shortly.
            </p>
            <Link href={WEB_URL} className="btn-primary btn-submit">
              Go to Homepage
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="apply-wrapper">
      <div className="container">
        {errors.api && <div className="form-error">{errors.api}</div>}

        <div className="apply-card">
          <div className="apply-header">
            <div className="header-content">
              <span className="header-eyebrow">Admissions 2025–26</span>
              <h1 className="header-title ">Apply Now</h1>
              <p className="header-subtitle">
                Begin your journey — fill out the form below to get started.
              </p>
            </div>
          </div>

          <form className="apply-form" onSubmit={handleSubmit} noValidate>
            {/* <div className="section-label">Personal Details</div> */}

            <div className="field-group">
              {/* Name */}
              <div
                className={`field ${errors.name ? "field--error" : ""} ${focused === "name" ? "field--focused" : ""}`}
              >
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
              <div
                className={`field ${errors.email ? "field--error" : ""} ${focused === "email" ? "field--focused" : ""}`}
              >
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
              <div
                className={`field ${errors.phone ? "field--error" : ""} ${focused === "phone" ? "field--focused" : ""}`}
              >
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

            {/* <div className="section-label">Academic Background</div> */}

            <div className="field-group">
              {/* Qualification */}
              <div
                className={`field ${errors.qualification ? "field--error" : ""} ${focused === "qualification" ? "field--focused" : ""}`}
              >
                <label className="field-label" htmlFor="qualification">
                  Qualification
                </label>
                <input
                  id="qualification"
                  name="qualification"
                  type="text"
                  className="field-input"
                  placeholder="Enter Qualification"
                  value={form.qualification}
                  onChange={handleChange}
                  onFocus={() => setFocused("qualification")}
                  onBlur={() => setFocused(null)}
                />
                {errors.qualification && (
                  <span className="field-error">{errors.qualification}</span>
                )}
              </div>

              {/* School */}
              <div
                className={`field ${errors.school ? "field--error" : ""} ${focused === "school" ? "field--focused" : ""}`}
              >
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
                    {schools.map((school, idx) => (
                      <option key={idx} value={school.name}>
                        {school.name}
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
              <div
                className={`field ${errors.department ? "field--error" : ""} ${focused === "department" ? "field--focused" : ""} ${!form.school ? "field--disabled" : ""}`}
              >
                <label className="field-label" htmlFor="department">
                  Stream
                </label>
                <div className="select-wrapper">
                  <select
                    id="department"
                    name="department"
                    className="field-select"
                    value={form.department}
                    onChange={handleChange}
                    onFocus={() => setFocused("department")}
                    onBlur={() => setFocused(null)}
                    disabled={!form.school}
                  >
                    <option value="">
                      {form.school ? "Select stream" : "Select a school first"}
                    </option>
                    {selectedDepartments.map((dept) => (
                      <option key={dept.name} value={dept.name}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  <span className="select-arrow">▾</span>
                </div>
                {errors.department && (
                  <span className="field-error">{errors.department}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="btn-primary btn-submit"
              disabled={loading}
            >
              {loading ? (
                "Loading..."
              ) : (
                <>
                  Submit Application
                  <span className="btn-arrow">→</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}