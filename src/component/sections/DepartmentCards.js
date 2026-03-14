import { WEB_URL } from "@/config/config";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DepartmentCards({ tabs, heading, activeTab, data }) {
  // Simply filter — no state, no useEffect
  const filteredFaculty =
    tabs?.filter((tab) => tab.category === activeTab) || data;

  console.log(filteredFaculty);

  return (
    <div className="faculty_grids">
      <div className="container">
        {heading && <h5 className="about_subtitle">{heading}</h5>}

        <div className="faculty_row">
          {filteredFaculty?.map((faculty, facultyIdx) => (
            <div className="faculty_col" key={facultyIdx}>
              <div className="singleCard">
                <Link href={`${WEB_URL}department/${faculty?.slug}`}>
                  <div className="faulty-img">
                    <figure>
                      <Image
                        src={
                          faculty.image
                            ? faculty.image
                            : "/images/virtual-campus.png"
                        }
                        alt={faculty.name}
                        className="img-fluid w-100"
                        style={{ maxWidth: "100%", height: "auto" }}
                        width={432}
                        height={428}
                      />
                    </figure>
                  </div>
                  <div className="content">
                    <h4 className="name">{faculty.name}</h4>
                    <p className="designation">
                      {faculty.designation || faculty.type}
                    </p>
                    <div className="bar" />
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
