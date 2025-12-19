// components/department-components/HODMessage/index.js
"use client";
import React, { useEffect } from "react";
import styles from "./hod-message.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const HODMessage = ({ data }) => {
  // 🔹 Dummy data fallback
  const dummyHodData = {
    title: "HOD MESSAGE",
    img: "/images/home-page/second-section-banner.png",
    name: "Dr. Dhiraj Pandey",
    designation: "Head of the Department",
    message: [
      "He has over 21 years of academic and research experience and published over 50+ research articles in International Journals and Conferences of repute. Articles are published in publications such as Elsevier, Springer, Taylor& Francis, Inderscience, IGiglobal USA and most of the articles are SCI/Scopus indexed. He has contributed as an author in several book chapters in leading publications such as Elsevier, Springer etc.",
      "He has also been contributing as a reviewer for several international journals and associated with several technical societies of repute such as IEEE (Senior Member), ISTE (Life Member), etc. He has guided more than 40 UG/PG level projects. He has also supervised two candidates for their doctoral research work (PhD) in the field of natural language processing and deep learning.",
    ],
  };

  const hodData = data || dummyHodData;

  // 🔹 Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.card} data-aos="fade-up">

          <div className="row g-0 justify-content-center align-items-center row_padding">

            {/* Image Section */}
            <div className="col-xl-4" data-aos="fade-right" data-aos-delay="200">
              <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={hodData.img}
                    alt={hodData?.name || "Head of Department"}
                    width={476}
                    height={473}
                    className={` w-100 hod_img ${styles.hodImage} ${styles.shineImage}`}
                    style={{ objectFit: "cover" }}
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="col-xl-7" data-aos="fade-left" data-aos-delay="400">
              <div className={styles.content}>
                <h3 className={styles.title}>{hodData.title}</h3>

                <div className={styles.messageText}>
                  {hodData.message &&
                    hodData.message.map((paragraph, index) => (
                      <p key={index} className={styles.paragraph}>
                        {paragraph}
                      </p>
                    ))}
                </div>

                <div className={styles.hodInfo}>
                  <h4 className={styles.hodName}>{hodData.name}</h4>
                  <p className={styles.hodDesignation}>{hodData.designation}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default HODMessage;
