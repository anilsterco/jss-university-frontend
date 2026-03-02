import styles from "./faculties.module.css";
import FacultyCards from "@/component/sections/FacultyCards";

export default function Faculties({ data }) {
  return (
    <section className={styles.inner_page}>
      <div className="container">
        <h1 className={`${styles.innerPage_title} text-center`}>Faculties</h1>

        <FacultyCards data={data} />
      </div>
    </section>
  );
}
