"use client";
import styles from "./fnq.module.css";
import { CiCirclePlus, CiCircleMinus } from "react-icons/ci";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function FAQSection({ data }) {
  const defaultFaqs = [
    {
      question: "How safe is the campus?",
      answer:
        "Campus safety is a top priority. We have a dedicated security team, surveillance systems, and emergency response protocols to ensure a safe environment for all students and staff.",
    },
    {
      question: "What programs are offered at JSS?",
      answer:
        "We offer undergraduate, postgraduate, and doctoral programs across multiple disciplines including engineering, management, pharmacy, and sciences.",
    },
    {
      question: "How can I apply for admission?",
      answer:
        "Applications can be submitted online through the official university portal. Ensure you meet the eligibility criteria before applying.",
    },
    {
      question: "Are there scholarships available?",
      answer:
        "Yes, we offer several merit-based and need-based scholarships for eligible students.",
    },
  ];

  const faqData = data && data.length ? data : defaultFaqs;
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleOpen = (index, e) => {
    e.preventDefault(); // Prevent default details toggle
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter((i) => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <h5
          className={styles.heading}
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          FREQUENTLY ASKED QUESTIONS
        </h5>

        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <details
              key={index}
              className={styles.faqItem}
              open={openIndexes.includes(index)}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
            >
              <summary
                className={styles.faqQuestion}
                onClick={(e) => toggleOpen(index, e)}
              >
                {openIndexes.includes(index) ? (
                  <CiCircleMinus className={styles.icon} />
                ) : (
                  <CiCirclePlus className={styles.icon} />
                )}
                <span>{item.question}</span>
              </summary>
              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
