import Image from "next/image";

export default function Grants({ data = [] }) {
  const renderSection = (section, index) => {
    if (section.type !== "grants") return null;

    const item = section.items?.[0];

    return (
      <section className="grands_mainsec" key={`grants-${index}`}>
        <div className="container">
          <div className="publi_title">
            <h5 className="heading_title">{item?.title}</h5>
            <h4>{item?.subtitle}</h4>
            <p>{item?.bottomdecs}</p>
          </div>

          <div className="grands_maingrid">
            <div className="grands_imgsec">
              <figure className="shine-effect">
                <Image
                  src={item?.image}
                  alt={item?.title || "Grants"}
                  width={683}
                  height={520}
                  className="img-fluid"
                  loading="lazy"
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
              </figure>
            </div>
            <div className="grands_content">
              {Array.isArray(item?.rightdecs) &&
                item.rightdecs.map((r, idx) => <p key={idx}>{r.Rightdecs}</p>)}
                {item?.pdftext && (
              <div className="downlo_guides">
                  <a
                    href={item?.pdficon || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pdf_link"
                  >
                    {item.pdficon && (
                      <figure className="shine-effect">
                        <Image
                          src={"/images/icons/pdf.png"}
                          alt="PDF Icon"
                          width={15}
                          height={20}
                          loading="lazy"
                          className="img-fluid"
                        />
                      </figure>
                    )}
                    {item.pdftext}
                  </a>
              </div>
                )}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return <>{data.map((section, index) => renderSection(section, index))}</>;
}
