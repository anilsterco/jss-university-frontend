import DepartmentCards from "@/component/sections/DepartmentCards";
import TabSection from "@/component/sections/TabSection";

export default function DepartmentClient() {
  return (
    <>
      <section className="testimonial_detail">
        <TabSection title={"Departments"} subtitle={""} tabs={[]} />
      </section>

      <section className="inner_page">
        <div className="container">
          <h1 className={`innerPage_title text-center`}>Departments</h1>

          <DepartmentCards data={[]} />
        </div>
      </section>
    </>
  );
}
