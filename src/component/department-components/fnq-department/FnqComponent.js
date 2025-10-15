// components/FAQSection.jsx
import styles from "./fnq.module.css";
import { CiCirclePlus } from "react-icons/ci";

export default function FAQSection({ faqs = [] }) {
  // Fallback default FAQs if none passed from props (SSR friendly)
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

  const faqData = faqs.length > 0 ? faqs : defaultFaqs;

  return (
    <section className={styles.faqSection}>
      <div className="container">
        <h5 className={styles.heading}>FREQUENTLY ASKED QUESTIONS</h5>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <details key={index} className={`${styles.faqItem}`}>
              <summary className={styles.faqQuestion}>
                <span className={styles.icon}></span>
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
