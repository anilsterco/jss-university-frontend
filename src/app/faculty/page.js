"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RxCaretRight } from "react-icons/rx";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import Link from "next/link";

const BASE_URL = "http://sd7:8080/jss/api";

export default function FacultyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [facultyListData, setFacultyListData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [apiLoading, setApiLoading] = useState(false);

  // Fetch data with filters
  const fetchFacultyData = async (search = "", school = "", type = "") => {
    try {
      setApiLoading(true);

      // Build query parameters
      const params = new URLSearchParams();
      if (search) params.append("search", search);
      if (school) params.append("school", school);
      if (type) params.append("type", type);

      const queryString = params.toString();
      const url = queryString
        ? `${BASE_URL}/faculties?${queryString}`
        : `${BASE_URL}/faculties`;

      const res = await fetch(url);

      if (!res.ok) {
        console.error("API Error:", res.status);
        throw new Error(`Failed to fetch faculty data: ${res.status}`);
      }

      const data = await res.json();
      console.log("API Response:", data);

      // Check the actual structure of your API response
      const facultyData =
        data.faculty || data.data?.faculty || data.data || data;
      setFacultyListData(facultyData || []);
    } catch (err) {
      console.error("Error fetching faculties:", err);
      setFacultyListData([]);
    } finally {
      setLoading(false);
      setApiLoading(false);
    }
  };

  // Initial data load
  useEffect(() => {
    fetchFacultyData();
  }, []);

  // Handle search and filter changes - debounced API call
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      fetchFacultyData(searchTerm, selectedSchool, selectedType);
      setVisibleCount(6); // Reset visible count when filters change
    }, 500); // 500ms debounce

    return () => clearTimeout(timeoutId);
  }, [searchTerm, selectedSchool, selectedType]);

  // Extract unique schools and types for dropdowns from current data
  const schools = [
    ...new Set(
      facultyListData.map((faculty) => faculty.school).filter(Boolean)
    ),
  ];
  const types = [
    ...new Set(facultyListData.map((faculty) => faculty.type).filter(Boolean)),
  ];

  return (
    <main className="site_main">
      {/* Title Section */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="innnr_head">
                <h2>FACULTY</h2>
                <h3>
                  MEET OUR <span>FACULTY</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar */}
      <section className="program-search faulty-sec">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="faulty-box">
                <div className="search-box">
                  <input
                    type="text"
                    placeholder="Search by keywords"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  <button type="submit"></button>
                </div>

                <div className="faulty-drop-down">
                  <select
                    className="form-select"
                    value={selectedSchool}
                    onChange={(e) => setSelectedSchool(e.target.value)}
                  >
                    <option value="">Select School</option>
                    {schools.map((school, index) => (
                      <option key={index} value={school}>
                        {school}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="faulty-drop-down">
                  <select
                    className="form-select"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="">Select Faculty Type</option>
                    {types.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              {apiLoading && (
                <div className="text-center mt-2">
                  <small>Loading...</small>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Faculty List */}
      <section className="faulty-sec1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              {loading ? (
                <div className="text-center py-5">
                  <p>Loading faculty data...</p>
                </div>
              ) : (
                <>
                  <div className="program-list-boxs faulty-list">
                    {facultyListData.slice(0, visibleCount).map((faculty) => (
                      <div className="faulty-list-box" key={faculty.id}>
                        <div className="faulty-img">
                          <figure>
                            <img
                              src={faculty.image}
                              alt={faculty.name}
                              className="img-fluid w-100"
                              style={{
                                width: "300px",
                                height: "300px",
                                objectFit: "cover",
                              }}
                              onError={(e) => {
                                e.target.src = "/default-avatar.png";
                              }}
                            />
                          </figure>
                        </div>
                        <div className="faulty-text">
                          <h4>{faculty.name}</h4>
                          <p>
                            {faculty.designation || faculty.type || "Faculty"}
                          </p>
                          <span>
                            <RxCaretRight className="right-arrow" />
                          </span>
                        </div>
                        <Link
                          href={`/faculty/${faculty.slug || faculty.id}`}
                          className="streched_link"
                        ></Link>
                      </div>
                    ))}
                  </div>

                  {/* No Results */}
                  {!loading && facultyListData.length === 0 && (
                    <div className="text-center py-5">
                      <p>No faculty members found.</p>
                    </div>
                  )}

                  {/* Load More */}
                  {visibleCount < facultyListData.length && (
                    <div className="load-more-container">
                      <a
                        id="loadMore"
                        onClick={() => setVisibleCount((prev) => prev + 6)}
                        style={{ cursor: "pointer" }}
                      >
                        Load More
                        <i className="bi bi-arrow-down ps-2"></i>
                      </a>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
