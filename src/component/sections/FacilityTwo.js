import Image from "next/image";

export default function FacilityTwo({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "amenitiescentre") return null;

        const headerItem = section.items?.[0];
        const boxes = headerItem?.boxex || [];

        return (
          <section
            className="ameminites_listmain"
            key={`amenities-${sectionIndex}`}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  {(headerItem?.title || headerItem?.subtitle) && (
                    <div className="amenities_title">
                      {headerItem.title && <h5>{headerItem.title}</h5>}
                      {headerItem.subtitle && <p>{headerItem.subtitle}</p>}
                    </div>
                  )}
                  <div className="amenities_gridmain">
                    {boxes.map((box, idx) => (
                      <div className="ameniti_item_col" key={idx}>
                        {box.image && (
                          <figure className="shine-effect">
                            <Image
                              src={box.image}
                              alt={box.heading || "Amenity"}
                              width={800}
                              height={520}
                              loading="lazy"
                              className="img-fluid w-100"
                            />
                          </figure>
                        )}

                        {box.heading && (
                          <figcaption>
                            <p>{box.heading}</p>
                          </figcaption>
                        )}
                      </div>
                      
                    ))}
                  </div>
                   <div className="bottom_dec">
                     {headerItem.desc && <p>{headerItem.desc}</p>}

                   </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
