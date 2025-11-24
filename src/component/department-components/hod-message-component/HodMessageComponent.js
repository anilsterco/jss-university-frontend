import React from "react";
import styles from "./hod-message.module.css";
import Image from "next/image";

const HODMessage = ({ data }) => {
  // Dynamic data structure
  const dummyHodData = {
    title: "HOD MESSAGE",
    img: "/images/home-page/second-section-banner.png",
    name: "Dr. Dhiraj Pandey",
    designation: "Head of the Department",
    message: [
      "He has over 21 years of academic and research experience and published over 50+ research articles in International Journals and Conferences of repute. Articles are published in publications such as Elsevier, Springer, Taylor& Francis, Inderscience, IGiglobal USA and most of the articles are SCI/Scopus indexed. He has contributed as an author in several book chapters in leading publications such as Elsevier, Springer etc.",
      "He has also been contributing as are view for several international journal so and associated with several technical societies of repute such as IEEE (Senior Member), ISTE (Life Member)etc. He has guided more than 40UG/PG level projects. He has also supervised two candidates for their doctoral research work (PhD) in the ield of natural language processing and deep learning.",
    ],
  };

  const hodData = data ? data : dummyHodData;

  return (
    <div className={styles.container}>
      <div className="container">
        <div className={styles.card}>
          <div className="row g-0 justify-content-center">
            {/* Image Section - Positioned outside card */}
            <div className="col-md-4">
              <div className={styles.imageContainer}>
                <div className={styles.imagePlaceholder}>
                  <Image
                    src={hodData.img}
                    alt={hodData?.name || "Head of Department"}
                    width={350}
                    height={350}
                    className={styles.hodImage}
                  />
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="col-md-7">
              <div className={styles.content}>
                <h3 className={styles.title}>{hodData.title}</h3>

                <div className={styles.messageText}>
                  {hodData.message &&
                    hodData.message.length > 0 &&
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

      {/* Bootstrap CSS CDN */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
    </div>
  );
};

export default HODMessage;
