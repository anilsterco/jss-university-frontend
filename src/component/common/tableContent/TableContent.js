"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import styles from "./tableContent.module.css";

const TableContent = ({ data }) => {
  // 🔹 Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section
      className={`${styles.tableContentSection} ${styles[data?.sectionType]}`}
    >
      <div className="container">
        <div className={styles.grid}>
          <div className="left_col">
            {data?.leftTitle && (
              <h4 className={styles.left_title}>{data?.leftTitle}</h4>
            )}
            {data?.leftTable &&
              data.leftTable.map((tableData, tableIdx) => (
                <div
                  key={tableIdx}
                  className={`table_section ${styles.table_section}`}
                >
                  <div className=" table-responsive" key={tableIdx}>
                    <table
                      className={`table-lab table table-bordered ${styles.tableLab}`}
                    >
                      <thead>
                        <tr>
                          {tableData?.tableHeading.map((th, thIndex) => (
                            <th key={thIndex} className={styles.th}>
                              {th.th}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {tableData.tableBody.map((item, itemIdx) => (
                          <tr key={itemIdx}>
                            <td className={styles.td}>{item.sno}</td>
                            <td className={styles.td}>{item.session}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
          </div>

          <div className={styles.right_col}>
            <div className={styles.border_col}>
              {data?.rightTitle && (
                <h4 className={styles.right_title}>{data?.rightTitle}</h4>
              )}
              {data?.rightLists && (
                <ul className={styles.ul}>
                  {data.rightLists.map((singleLi, liIdx) => (
                    <li key={liIdx} className={styles.li}>
                      {singleLi.list}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableContent;
