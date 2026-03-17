import styles from "./faq.module.css";

export default function Faq({ data, heading }) {
  return (
    <>
      <h5 className={`heading ${styles.faq_heading}`}>{heading}</h5>
      <div className="faqList">
        {data?.map((faq, index) => (
          <details key={index} className="faqItem">
            <summary className="faqQuestion">
              <span className="faq_heading">{faq.question || faq.name}</span>
              <span className="icon"></span>
            </summary>
            <div className="faqAnswer">
              <p dangerouslySetInnerHTML={{ __html: faq.answer || faq.slug }} />
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
