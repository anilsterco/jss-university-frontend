export default function TestimonialDetail() {
  return (
    <section className="leadership_dtls_two">
      <div className="container">
        <div className="row">
          <div className="col-lg-11">
            <div className="leader_row">
              <div className="leader_col">
                <div className="leadership_two_cnt">
                  <h5>{sections.about.description[0]}</h5>
                  <p>{sections.about.description[1]}</p>
                </div>
              </div>
              <div className="leader_col">
                <div className="leadership_two_img">
                  <figure
                    style={{
                      position: "relative",
                      width: "608px",
                      height: "403px",
                    }}
                  >
                    <Image
                      src={sections.message_from_chancellor.message_image}
                      alt={sections.banners.name}
                      className="img-fluid"
                      fill
                      style={{
                        objectFit: "cover",
                        objectPosition: "top",
                      }}
                    />
                  </figure>
                </div>
              </div>
            </div>
          </div>
          {sections?.biography && (
            <div className="biographi_section">
              <h3>Biography</h3>
              <p>{sections.biography}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
