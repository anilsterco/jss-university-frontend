"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { RxCaretRight } from "react-icons/rx";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import { facultyData } from "./facultyData"; 
import Link from "next/link";

// Dummy data (replace with API data later)
// const facultyData = [
//   {
//     id: 1,
//     name: "Dr. K. K. Sharma",
//     designation: "Executive Secretary",
//     image: "/images/home-page/seven-dummy-img.png",
//     link: "#",
//     school: "Engineering",
//     type: "Full-Time",
//   },
//   {
//     id: 2,
//     name: "Dr. R. K. Agarwal",
//     designation: "Executive Secretary",
//     image: "/images/home-page/seven-dummy-img.png",
//     link: "#",
//     school: "Computing",
//     type: "Visiting",
//   },
//   {
//     id: 3,
//     name: "Dr. S. K. Verma",
//     designation: "Executive Secretary",
//     image: "/images/home-page/seven-dummy-img.png",
//     link: "#",
//     school: "Architecture",
//     type: "Full-Time",
//   },
//   {
//     id: 4,
//     name: "Dr. K. K. Sharma",
//     designation: "Executive Secretary",
//     image: "/images/home-page/seven-dummy-img.png",
//     link: "#",
//     school: "Engineering",
//     type: "Full-Time",
//   },
//   {
//     id: 5,
//     name: "Dr. R. K. Agarwal",
//     designation: "Executive Secretary",
//     image: "/images/home-page/seven-dummy-img.png",
//     link: "#",
//     school: "Computing",
//     type: "Visiting",
//   },
//   {
//     id: 6,
//     name: "Dr. S. K. Verma",
//     designation: "Executive Secretary",
//     image: "/images/home-page/seven-dummy-img.png",
//     link: "#",
//     school: "Architecture",
//     type: "Full-Time",
//   },
//   {
//     id: 7,
//     name: "Dr. P. K. Verma",
//     designation: "Executive Secretary",
//     image: "/images/home-page/seven-dummy-img.png",
//     link: "#",
//     school: "Architecture",
//     type: "Full-Time",
//   },
//   {
//     id: 8,
//     name: "Dr. N. K. Kohli",
//     designation: "Executive Secretary",
//     image: "/images/home-page/seven-dummy-img.png",
//     link: "#",
//     school: "Architecture",
//     type: "Full-Time",
//   },
// ];

export default function FacultyPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSchool, setSelectedSchool] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);
  const [filteredFaculty, setFilteredFaculty] = useState(facultyData);

  // Filter logic
  useEffect(() => {
    let filtered = facultyData.filter((f) => {
      const matchSearch =
        f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        f.designation.toLowerCase().includes(searchTerm.toLowerCase());
      const matchSchool = !selectedSchool || f.school === selectedSchool;
      const matchType = !selectedType || f.type === selectedType;
      return matchSearch && matchSchool && matchType;
    });
    setFilteredFaculty(filtered);
  }, [searchTerm, selectedSchool, selectedType]);

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
                    <option value="Engineering">Engineering</option>
                    <option value="Computing">Computing</option>
                    <option value="Architecture">Architecture</option>
                  </select>
                </div>

                <div className="faulty-drop-down">
                  <select
                    className="form-select"
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                  >
                    <option value="">Select Faculty Type</option>
                    <option value="Full-Time">Full-Time</option>
                    <option value="Visiting">Visiting</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty List */}
      <section className="faulty-sec1">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="program-list-boxs faulty-list">
                {filteredFaculty.slice(0, visibleCount).map((faculty) => (
                  <div className="faulty-list-box" key={faculty.id}>
                    <div className="faulty-img">
                      <figure>
                        <Image
                          src={faculty.image}
                          alt={faculty.name}
                          width={300}
                          height={300}
                          className="img-fluid w-100"
                        />
                      </figure>
                    </div>
                    <div className="faulty-text">
                      <h4>{faculty.name}</h4>
                      <p>{faculty.designation}</p>
                      <span>
                        <RxCaretRight className="right-arrow" />
                      </span>
                    </div>
                    <Link href={`/faculty/${faculty.id}`}  className="streched_link"></Link>
                  </div>
                ))}
              </div>

              {/* Load More */}
              {visibleCount < filteredFaculty.length && (
                <div className="load-more-container">
                  <a
                    id="loadMore"
                    onClick={() => setVisibleCount((prev) => prev + 6)}
                  >
                    Load More
                    <i className="bi bi-arrow-down ps-2"></i>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
