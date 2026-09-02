import Image from "next/image";

export default function SocietiesFaculties({ data }) {
  const section = data?.find(
    (item) => item.type === "societiesFculties"
  );

  if (!section?.items?.length) return null;

  const content = section.items[0];

  return (
    <section className="societies_faculties">
      <div className="container">
        {/* Header */}
        <div className="societies_header">
          {content.Subheading && (
            <h5
              className="societies_subheading"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              {content.Subheading}
            </h5>
          )}

          {content.Heading && (
            <h2
              className="societies_heading"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              {content.Heading}
            </h2>
          )}

          {content.Desc && (
            <p
              className="societies_desc"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              {content.Desc}
            </p>
          )}
        </div>

        {/* Faculty Grid */}
        <div className="societies_grid">
          {content.image?.map((faculty, index) => (
            <div
              className="faculty_card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={700 + index * 200}
            >
              <div className="faculty_image">
                <figure className="shine-effect">
                  <Image
                    src={faculty.image}
                    alt={faculty.title}
                    width={684}
                    height={428}
                    className="w-100 faculty_img"
                    loading="lazy"
                  />
                </figure>
              </div>

              <div className="faculty_content">
                <h3>{faculty.title}</h3>

                <h6>{faculty.designation}</h6>

                <p>{faculty.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}