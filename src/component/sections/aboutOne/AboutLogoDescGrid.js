
import Image from "next/image";
import Link from "next/link";

export default function AboutLogoDescGrid({section}){
    return(
        <div className="container">
            <div className="row justify-content-center">
              {section.items
                ?.sort(
                  (a, b) => Number(a.position || 0) - Number(b.position || 0),
                )
                .map((item, i) => {
                  const hasFigure =
                    item.figure !== null &&
                    item.figure !== undefined &&
                    item.figure !== "";
                  return (
                    <div
                      className="col-12 col-sm-6 col-lg-3 mb-4"
                      key={item.id || item.item_uuid || i}
                    >
                      <div className="estab_slide_item h-100 position-relative">
                        <figure
                          data-aos="fade-up"
                          data-aos-delay={i * 150}
                          data-aos-duration="800"
                          className="h-100"
                        >
                          {hasFigure ? (
                            <>
                              <figcaption>
                                <h4 className="estab_figure">
                                  <span> #</span>
                                  {String(item.figure)}
                                </h4>
                                {item.description && <p>{item.description}</p>}
                              </figcaption>
                              {item.file && (
                                <Image
                                  src={item.file}
                                  alt={item.description || "figure"}
                                  width={120}
                                  height={30}
                                  style={{ objectFit: "contain" }}
                                />
                              )}
                            </>
                          ) : (
                            <>
                              {item.file && (
                                <Image
                                  src={item.file}
                                  alt={item.description || "logo"}
                                  width={100}
                                  height={100}
                                />
                              )}
                              {item?.title && (
                                <h5 className="mt-4 grid_title">
                                  {item.title}
                                </h5>
                              )}
                              {item.description && (
                                <figcaption
                                  className={item?.title ? "mt-1" : "mt-3"}
                                >
                                  <p>{item.description}</p>
                                </figcaption>
                              )}

                              {item.Listiing && item.Listiing.length > 0 && (
                                <ul className="awaid-list">
                                  {item.Listiing.map((listItem, index) => (
                                    <li key={index}>{listItem.Listiing}</li>
                                  ))}
                                </ul>
                              )}
                            </>
                          )}
                        </figure>
                        {item?.url && (
                          <Link
                            href={item.url}
                            className="links"
                            target="_blank"
                            aria-label={`View ${item.title}`}
                          />
                        )}
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
    )
}