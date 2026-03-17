import styles from "./iqac.module.css";
import AccordionTable from "@/component/common/accordionTable/AccordionTable";

export default function IQAC({ data }) {
  return (
    <section className={styles.inner_page}>
      <div className="container">
        <AccordionTable data={data} heading="FAQs" />
      </div>
    </section>
  );
}
