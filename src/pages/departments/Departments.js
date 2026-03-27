import DepartmentCards from "@/component/sections/DepartmentCards";
import styles from "./faculties.module.css";
import FacultyCards from "@/component/sections/FacultyCards";

export default function Departments({ data, title, type }) {
  return (
    <section className={styles.inner_page}>
      <div className="container">
        <h1
          className={`${styles.innerPage_title} ${type == "alumni" ? "text-center" : "text-center"}`}
        >
          {title ? title : "Departments"}
        </h1>

        <DepartmentCards data={data} type={type} />
      </div>
    </section>
  );
}
