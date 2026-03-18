import ProgramBox from "@/component/programBox/ProgramBox";
import styles from "./program.module.css";

export default function Programs({ data }) {
  return (
    <section className={styles.inner_page}>
      <div className="container">
        <h1 className={`${styles.innerPage_title} text-center`}>Programs</h1>

        <div className={styles.programs_grid}>
          {data?.map((singleData, singleIdx) => (
            <div key={singleIdx} className="grid_card">
              <ProgramBox key={singleIdx} data={singleData} type="program" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
