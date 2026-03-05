export default function Faq({ data, heading }) {
  return (
    <>
      <h5 className="heading">{heading}</h5>
      <div className="faqList">
        {data?.map((faq, index) => (
          <details key={faq.id} className="faqItem">
            <summary className="faqQuestion">
              <span className="icon"></span>
              <span>{faq.question}</span>
            </summary>
            <div className="faqAnswer">
              <p>{faq.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </>
  );
}
