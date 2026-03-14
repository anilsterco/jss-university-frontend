import DepartmentCards from "@/component/sections/DepartmentCards";
import styles from "./faculties.module.css";
import FacultyCards from "@/component/sections/FacultyCards";

export default function Departments({ data }) {
  console.log("department data", data);
  return (
    <section className={styles.inner_page}>
      <div className="container">
        <h1 className={`${styles.innerPage_title} text-center`}>Departments</h1>

        <DepartmentCards data={data} />
      </div>
    </section>
  );
}
