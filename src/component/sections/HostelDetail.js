
import Image from "next/image";

export default function AboutOne({ data }) {

  const renderSection = (section, sectionIndex) => {
    switch (section.type) {
      case "hostelDetail":
        const item = section.items[0];
        return (
          <section
            
            className="hostal_detailmain"
            key={sectionIndex}
            id={item.sectionId}
          >
            <div className="container" id="hosteldetail">
              <div className="hostal_title">
                {item.heading && <h5>{item.heading}</h5>}
                {item.subheading && <h4>{item.subheading}</h4>}
              </div>
              <div className="hostal_detail_grid">
                <div className="host_de_grid">
                  {item.imageOne && (
                    <div className="hostal_det_col">
                      <figure className="shine-effect">
                        <Image
                          src={item.imageOne}
                          alt={item.heading || "Hostel Image 1"}
                          width={685}
                          height={550}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="200"
                        />
                      </figure>
                    </div>
                  )}

                  {item.imageSecond && (
                    <div className="hostal_det_col">
                      <figure className="shine-effect">
                        <Image
                          src={item.imageSecond}
                          alt={item.heading || "Hostel Image 2"}
                          width={685}
                          height={550}
                          className="img-fluid w-100"
                          data-aos="fade-up"
                          data-aos-delay="400"
                        />
                      </figure>
                    </div>
                  )}
                </div>
                {item.buttonText && item.buttonlink && (
                  <div className="hostal_d_btns">
                    <a className="btn btn-warning" href={item.buttonlink}>
                      {item.buttonText}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };
  return <>{data?.map((section, index) => renderSection(section, index))}</>;
}
