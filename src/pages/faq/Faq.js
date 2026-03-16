import Faq from "@/component/common/faq/Faq";
import styles from "./faq.module.css";

export default function FaqPage({ data }) {
  console.log("faq data", data);
  return (
    <section className={styles.inner_page}>
      <div className="container">
        <Faq data={data} heading="FAQs" />
      </div>
    </section>
  );
}
