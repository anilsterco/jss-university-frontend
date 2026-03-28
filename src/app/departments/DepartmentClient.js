import DepartmentCards from "@/component/sections/DepartmentCards";
import TabSection from "@/component/sections/TabSection";

export default function DepartmentClient({ schools = [] }) {
  return (
    <>
      <section className="testimonial_detail">
        <TabSection
          title={"Departments"}
          subtitle={""}
          tabs={schools.map((s) => ({ name: s.name, slug: s.slug }))}
        />
      </section>

      {schools.map((school) => (
        <section className="inner_page" key={school.id}>
          <div className="container">
            {/* School name as heading */}
            <h1 className="innerPage_title text-center">{school.name}</h1>

            {/* Departments of this school */}
            <DepartmentCards data={school.departments || []} />
          </div>
        </section>
      ))}
    </>
  );
}
