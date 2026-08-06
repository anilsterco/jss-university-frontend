import DepartmentCards from "@/component/sections/DepartmentCards";
import styles from "./faculties.module.css";
import FacultyCards from "@/component/sections/FacultyCards";

export default function Departments({ data, title, type }) {
  return (
    <section className={styles.inner_page}>
      <div className="container">
        <h2
          className={`${styles.innerPage_title} ${type == "alumni" ? "text-center" : "text-center"}`}
        >
          {title ? title : "Departments"}
        </h2>

        <DepartmentCards data={data} type={type} />
      </div>
    </section>
  );
}
