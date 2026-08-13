"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "@/styles/style.css";
import "@/styles/custom.style.css";
import { BASE_URL } from "@/config/config.mjs";

export default function LeadershipClient() {
  const [academicCouncil, setAcademicCouncil] = useState(null);
  const [loading, setLoading] = useState(true);

  const pathname = usePathname();

  useEffect(() => {
    setLoading(true);

    const fetchLeadershipData = fetch(`${BASE_URL}academic-council`)
      .then((res) => res.json())
      .then((resJson) => {
        if (resJson.success) {
          const data = resJson.academic_council;
          setAcademicCouncil(data || null);
        }
      })
      .catch((err) => console.error("Academic Council API fetch error:", err));

    Promise.all([fetchLeadershipData]).finally(() =>
      setLoading(false),
    );
  }, []);



  return (
    <>
      {/* Inner Title & Tabs */}

      {loading && (
        <div className="text-center p-10">
          <p>Loading Leadership Data...</p>
        </div>
      )}

      {!loading && (
        <div className="text-center p-10">
          <p>No Leadership Data Found</p>
        </div>
      )}

      {!loading && academicCouncil && (
        <>



          <seection className="fee_sturc_admain ">
            <div className="container">
              <div className="fee_strcu_table">
                <div className="fee_table_wrapper">
                  <table className="fee_table">
                    <thead>
                      <tr>
                        <th>Sr. No</th>
                        <th>Name</th>
                        <th>Designation</th>
                        {/* {section.items[0].tableHeadings.map((th, thIndex) => (
                      <th key={thIndex}>{th.tableHeading}</th>
                    ))} */}
                      </tr>
                    </thead>
                    <tbody>

                      {academicCouncil.map((leader, itemIdx) => (
                        <tr key={leader.id}>
                          <td>{itemIdx + 1}</td>
                          <td>{leader.name}</td>
                          <td>{leader.designation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </seection>


        </>
      )}
    </>
  );
}
