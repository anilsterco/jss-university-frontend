"use client";

import { useState } from "react";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function GrantsReceived({ data = [] }) {

  const [grandActiveTab, setGrandActiveTab] = useState("grand_tab1");

  const handleGrandTabClick = (tab) => {
    setGrandActiveTab(tab);
  };

  const renderSection = (section, index) => {
    if (section.type !== "grantsreceived") return null;

    return (
      <section className="grans_tab_mainsec" key={index}>
            <div className="container">
              <div className="grand_tabs_main faci_diff_tabs">
                <nav className="growth-tabs">
                  <ul>
                    <li>
                      <button
                        className={
                          grandActiveTab === "grand_tab1" ? "active" : ""
                        }
                        onClick={() => handleGrandTabClick("grand_tab1")}
                      >
                        Grants Received - Ongoing
                      </button>
                    </li>

                    <li>
                      <button
                        className={
                          grandActiveTab === "grand_tab2" ? "active" : ""
                        }
                        onClick={() => handleGrandTabClick("grand_tab2")}
                      >
                        Grants Received - Completed (2019-2023)
                      </button>
                    </li>
                  </ul>
                </nav>

                <div className="grand_tabs_content">
                  <div
                    className={`grand_tab_panel ${grandActiveTab === "grand_tab1" ? "active" : ""}`}
                  >
                    <div className="grand_proj_table_wrap">
                      <table className="grand_proj_table">
                        <thead>
                          <tr>
                            <th>Sl. No</th>
                            <th>Branch</th>
                            <th>Year 1</th>
                            <th>Year 2</th>
                            <th>Year 3</th>
                            <th>Year 4</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>ECE</td>
                            <td>
                              Next Generation Organic Farming using AI,
                              Robotics, and IoT for Women Entrepreneurship in
                              KOT Village, Dadri, Gautam Buddha Nagar, Uttar
                              Pradesh
                            </td>
                            <td>38,00,000</td>
                            <td>DST</td>
                            <td>
                              Dr Gayatri Sakya-PI, Dr. Chhaya Grover Co-PI, Ms.
                              Monika Malik, Co-PI
                            </td>
                            <td>2023</td>
                          </tr>

                          <tr>
                            <td>CSE</td>
                            <td>
                              Peer to Peer Energy Training System Using Block
                              Chain Technology
                            </td>
                            <td>5,00,000</td>
                            <td>CST UP</td>
                            <td>
                              Dr. Nitima Malsa - PI, Dr. Rachna Jain, Dr. Sun
                              Singh Rawat & D. Vimal Gupta-Co-PI
                            </td>
                            <td>2023</td>
                          </tr>

                          <tr>
                            <td>Chemistry</td>
                            <td>
                              Development of Women Entrepreneurship for low-cost
                              Sanitary Napkins production
                            </td>
                            <td>14,97,000</td>
                            <td>DSIR-TDUPW programme of A2K+ Scheme</td>
                            <td>Dr Ashima Srivastava</td>
                            <td>2022</td>
                          </tr>

                          <tr>
                            <td>Institute</td>
                            <td>AICTE IDEA Lab</td>
                            <td>1,09,42,000</td>
                            <td>AICTE</td>
                            <td>Mr. Sampath Kumar, Dr. Sanjiba Kumar Bisoyi</td>
                            <td>2021</td>
                          </tr>

                          <tr>
                            <td>EE</td>
                            <td>
                              Maximum power Extraction from Solar PV Array on
                              distributed system using soft computing techniques
                            </td>
                            <td>5,00,000</td>
                            <td>VRPS</td>
                            <td>Dr. APJAKTU</td>
                            <td>2019</td>
                          </tr>

                          <tr>
                            <td>CSE</td>
                            <td>
                              Alcohol detection system to prevent road accidents
                            </td>
                            <td>4,50,000</td>
                            <td>VRPS, Dr. APJAKTU</td>
                            <td>Mr. Ajay Kumar Verma</td>
                            <td>2019</td>
                          </tr>

                          <tr>
                            <td>ECE</td>
                            <td>
                              PCB Prototype Machine with e-CAD Interfacing and
                              3D Printer
                            </td>
                            <td>3,25,000</td>
                            <td>Dr. APJAKTU</td>
                            <td>Mr. Sampath Kumar V</td>
                            <td>2017</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div
                    className={`grand_tab_panel ${grandActiveTab === "grand_tab2" ? "active" : ""}`}
                  >
                    <div className="grand_proj_table_wrap">
                      <table className="grand_proj_table">
                        <thead>
                          <tr>
                            <th>Sl. No</th>
                            <th>Branch 2</th>
                            <th>Year 1</th>
                            <th>Year 2</th>
                            <th>Year 3</th>
                            <th>Year 4</th>
                          </tr>
                        </thead>

                        <tbody>
                          <tr>
                            <td>ECE</td>
                            <td>
                              Next Generation Organic Farming using AI,
                              Robotics, and IoT for Women Entrepreneurship in
                              KOT Village, Dadri, Gautam Buddha Nagar, Uttar
                              Pradesh
                            </td>
                            <td>38,00,000</td>
                            <td>DST</td>
                            <td>
                              Dr Gayatri Sakya-PI, Dr. Chhaya Grover Co-PI, Ms.
                              Monika Malik, Co-PI
                            </td>
                            <td>2023</td>
                          </tr>

                          <tr>
                            <td>CSE</td>
                            <td>
                              Peer to Peer Energy Training System Using Block
                              Chain Technology
                            </td>
                            <td>5,00,000</td>
                            <td>CST UP</td>
                            <td>
                              Dr. Nitima Malsa - PI, Dr. Rachna Jain, Dr. Sun
                              Singh Rawat & D. Vimal Gupta-Co-PI
                            </td>
                            <td>2023</td>
                          </tr>

                          <tr>
                            <td>Chemistry</td>
                            <td>
                              Development of Women Entrepreneurship for low-cost
                              Sanitary Napkins production
                            </td>
                            <td>14,97,000</td>
                            <td>DSIR-TDUPW programme of A2K+ Scheme</td>
                            <td>Dr Ashima Srivastava</td>
                            <td>2022</td>
                          </tr>

                          <tr>
                            <td>Institute</td>
                            <td>AICTE IDEA Lab</td>
                            <td>1,09,42,000</td>
                            <td>AICTE</td>
                            <td>Mr. Sampath Kumar, Dr. Sanjiba Kumar Bisoyi</td>
                            <td>2021</td>
                          </tr>

                          <tr>
                            <td>EE</td>
                            <td>
                              Maximum power Extraction from Solar PV Array on
                              distributed system using soft computing techniques
                            </td>
                            <td>5,00,000</td>
                            <td>VRPS</td>
                            <td>Dr. APJAKTU</td>
                            <td>2019</td>
                          </tr>

                          <tr>
                            <td>CSE</td>
                            <td>
                              Alcohol detection system to prevent road accidents
                            </td>
                            <td>4,50,000</td>
                            <td>VRPS, Dr. APJAKTU</td>
                            <td>Mr. Ajay Kumar Verma</td>
                            <td>2019</td>
                          </tr>

                          <tr>
                            <td>ECE</td>
                            <td>
                              PCB Prototype Machine with e-CAD Interfacing and
                              3D Printer
                            </td>
                            <td>3,25,000</td>
                            <td>Dr. APJAKTU</td>
                            <td>Mr. Sampath Kumar V</td>
                            <td>2017</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
    );
  };

  return <>{data.map((section, index) => renderSection(section, index))}</>;
}
