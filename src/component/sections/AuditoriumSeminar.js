import Image from "next/image";

export default function AuditoriumSeminar({ data = [] }) {
  const renderSection = (section, index) => {
    if (section.type !== "auditoriumSeminar") return null;

    const item = section.items?.[0];

    return (
      <section className="seminar_main  pb-0" key={`auditorium-${index}`}>
        <div className="container max-content-lg ps-lg-0 ms-lg-0">
          <div className="semi_gridmain">
            <div className="semi_imgsec">
              <figure className="shine-effect">
                <Image
                  src={item?.image}
                  alt={item?.title || "Auditorium / Seminar Hall"}
                  width={1255}
                  height={790}
                  className="img-fluid w-100"
                  data-aos="fade-up"
                  data-aos-delay="200"
                  loading="lazy"
                />
              </figure>
            </div>

            <div className="semi_cont_sec">
              <h5>{item?.title}</h5>

              {Array.isArray(item?.decs) &&
                item.decs.map((d, idx) => (
                  <p key={idx}>{d.decs}</p>
                ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return <>{data.map((section, index) => renderSection(section, index))}</>;
}
