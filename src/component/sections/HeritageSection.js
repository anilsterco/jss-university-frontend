export default function AboutOne({ data }) {

  if (!data || data.length === 0) return null;
  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "heritageSection") return null;

        return section.items
          ?.sort((a, b) => a.position - b.position)
          .map((item, idx) => (
            <section
              className="heri_principalmain"
              key={`heritage-${sectionIndex}-${idx}`}
              data-aos="fade-up"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="hei__princi_grid">
                      {item.subtitle && (
                        <h3 data-aos="fade-up" data-aos-delay="100">
                          {item.subtitle}
                        </h3>
                      )}
                      <div
                        className="heri_prici_names"
                        data-aos="fade-up"
                        data-aos-delay="200"
                      >
                        {item.titleOne && (
                          <h5 className="titleOne">{item.titleOne}</h5>
                        )}
                        {(item.titleTwo || item["Title Two"]) && (
                          <h5 className="titleTwo">
                            {item.titleTwo || item["Title Two"]}
                          </h5>
                        )}
                      </div>
                      {/* {item.image && (
                        <figure
                          className="shine-effect"
                          data-aos="zoom-in"
                          data-aos-delay="300"
                        >
                          <Image
                            src={item.image}
                            alt={item.titleOne || "Heritage Section"}
                            width={1390}
                            height={550}
                            className="img-fluid w-100"
                          />
                        </figure>
                      )} */}

                      {item?.video_url && (
                        <iframe
                          width="100%"
                          height="546"
                          src={item.video_url.replace("watch?v=", "embed/")}
                          title="video"
                          frameBorder="0"
                          allowFullScreen
                        ></iframe>
                      )}<div
                        className="heri_pri_btm_text"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        {item.subtitleBelow && <h3>{item.subtitleBelow}</h3>}
                        {item.descBelow && <p>{item.descBelow}</p>}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          ));
      })}
    </>
  );
}
