"use client";
import React, { useEffect, useState } from "react";
import styles from "./hod-message.module.css";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const HODMessage = ({ data }) => {
  const [expanded, setExpanded] = useState(false);

  // 🔹 Dummy data fallback
  const dummyHodData = {
    title: "HOD MESSAGE",
    img: "/images/home-page/second-section-banner.png",
    name: "Dr. Dhiraj Pandey",
    designation: "Head of the Department",
    messages: [
      "He has over 21 years of academic and research experience and published over 50+ research articles in International Journals and Conferences of repute. Articles are published in publications such as Elsevier, Springer, Taylor& Francis, Inderscience, IGiglobal USA and most of the articles are SCI/Scopus indexed. He has contributed as an author in several book chapters in leading publications such as Elsevier, Springer etc.",
      "He has also been contributing as a reviewer for several international journals and associated with several technical societies of repute such as IEEE (Senior Member), ISTE (Life Member), etc. He has guided more than 40 UG/PG level projects. He has also supervised two candidates for their doctoral research work (PhD) in the field of natural language processing and deep learning.",
    ],
  };

  // Normalize messages — handles both string[] and {message: string}[]
  const normalizeMessages = (messages) => {
    if (!Array.isArray(messages)) return [];
    return messages
      .map((m) => (typeof m === "string" ? m : m?.message || ""))
      .filter(Boolean);
  };

  const normalizedData = data
    ? {
        title: data?.title,
        img: data?.image || data?.img,
        name: data?.name,
        designation: data?.designation,
        designation2: data?.designation2,
        subMessage: data?.subMessage,
        messages: normalizeMessages(data?.message || data?.messages),
        type: data?.type,
        sectionType: data?.sectionType,
        listGroup: data?.listGroup,
      }
    : null;

  const hodData = normalizedData || dummyHodData;

  const hasMore = hodData.messages.length > 2;
  const visibleMessages = expanded
    ? hodData.messages
    : hodData.messages.slice(0, 2);

  // 🔹 Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <div
      className={`hod_message_section ${styles.hod_message_section} ${styles[hodData?.type] || ""} ${styles[hodData?.sectionType]}`}
    >
      <div className={`${styles.container} ${styles[hodData?.type] || ""}`}>
        <div className="container">
          <div className={styles.card} data-aos="fade-up">
            <div className={`${styles.hodRow} hod_row`}>
              <div
                className={`${styles.hodCol} ${styles.left_col} left_col`}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <Image
                  src={
                    hodData?.img ||
                    "/images/home-page/second-section-banner.png"
                  }
                  alt={hodData?.name || "Head of Department"}
                  width={590}
                  height={700}
                  className={`w-100 hod_img ${styles.hodImage} ${styles.shineImage}`}
                />
              </div>

              <div
                className={styles.hodCol}
                data-aos="fade-left"
                data-aos-delay="400"
              >
                <div className={styles.content}>
                  {hodData?.type !== "department" && (
                    <Image
                      src="/images/about-page/quote-left.svg"
                      alt="icon"
                      width={36}
                      height={31}
                      className={styles.icons}
                    />
                  )}

                  {hodData?.title && (
                    <h3 className={`${styles.title} hod_title`}>
                      {hodData.title}
                    </h3>
                  )}

                  {hodData?.subMessage && (
                    <p className={styles.subMessage}>
                      <strong>{hodData.subMessage}</strong>
                    </p>
                  )}

                  {(hodData?.messages?.length > 0 ||
                    hodData?.listGroup?.length > 0) && (
                    <div className={styles.messageText}>
                      {visibleMessages?.map((paragraph, index) => (
                        <p key={index} className={styles.paragraph}>
                          {paragraph}
                        </p>
                      ))}

                      {hodData?.listGroup?.length > 0 && (
                        <ul className={`${styles.listGroup} list_group`}>
                          {hodData?.listGroup?.map((list, listIdx) => (
                            <li key={listIdx}>{list.list}</li>
                          ))}
                        </ul>
                      )}

                      {hasMore && (
                        <button
                          className={styles.arrowLink}
                          onClick={() => setExpanded((prev) => !prev)}
                        >
                          {expanded ? "Read Less" : "Read More"}
                          <Image
                            src="/images/icons/read_more.png"
                            alt="arrow"
                            width={22}
                            height={22}
                            style={{
                              transform: expanded
                                ? "rotate(180deg)"
                                : "rotate(0deg)",
                              transition: "transform 0.3s ease",
                            }}
                          />
                        </button>
                      )}
                    </div>
                  )}

                  <div className={styles.hodInfo}>
                    <h4 className={styles.hodName}>{hodData.name}</h4>
                    <p className={styles.hodDesignation}>
                      {hodData.designation}
                    </p>
                    {hodData?.designation2 && (
                      <p className={styles.hodDesignation}>
                        {hodData.designation2}
                      </p>
                    )}
                  </div>

                  <div className={styles.lineHod}>
                    <Image
                      src="/images/about-page/hod_line_image.svg"
                      alt="arrow"
                      width={5}
                      height={430}
                    />
                  </div>
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
