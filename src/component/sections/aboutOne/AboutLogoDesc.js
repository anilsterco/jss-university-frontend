import Image from "next/image";
import Link from "next/link";

export default function AboutLogoDesc({section}){
    return(
        <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-12">
                <div className="row g-4">
                  {section.items
                    ?.sort(
                      (a, b) =>
                        Number(a.position || 0) - Number(b.position || 0),
                    )
                    .map((item, i) => {
                      const hasFigure =
                        item.figure !== null &&
                        item.figure !== undefined &&
                        item.figure !== "";

                      return (
                        <div
                          className="col-12 col-sm-6 col-md-4 col-lg-3"
                          key={item.id || item.item_uuid || i}
                        >
                          <div className="estab_slide_item h-100">
                            {item?.url ? (
                              <Link href={item.url} target="_blank">
                                <figure
                                  data-aos="fade-up"
                                  data-aos-delay={i * 150}
                                  data-aos-duration="800"
                                >
                                  {hasFigure ? (
                                    <>
                                      <figcaption>
                                        <h4 className="estab_figure">
                                          <span>#</span>
                                          {String(item.figure)}
                                        </h4>

                                        {item.description && (
                                          <p>{item.description}</p>
                                        )}
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

                                      {item.description && (
                                        <figcaption>
                                          <p>{item.description}</p>
                                        </figcaption>
                                      )}
                                    </>
                                  )}
                                </figure>
                              </Link>
                            ) : (
                              <figure
                                data-aos="fade-up"
                                data-aos-delay={i * 150}
                                data-aos-duration="800"
                              >
                                {hasFigure ? (
                                  <>
                                    <figcaption>
                                      <h4 className="estab_figure">
                                        <span>#</span>
                                        {String(item.figure)}
                                      </h4>

                                      {item.description && (
                                        <p>{item.description}</p>
                                      )}
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
                                    {item.description && (
                                      <figcaption>
                                        <p>{item.description}</p>
                                      </figcaption>
                                    )}
                                  </>
                                )}
                              </figure>
                            )}
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
          </div>
    )
}