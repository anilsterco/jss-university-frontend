import Image from "next/image";
import styles from "./labs.module.css";
import Link from "next/link";

export default function Labspage({ data }) {
  return (
    <>
      <section
        className={`grid_card_design2_section ${styles.labs_page} ${styles.inner_page}`}
      >
        <div className="container">
          <h4 className={`${styles.heading} text-center`}>Labs</h4>
          <p className={`text-center ${styles.sub_heading}`}>
            Committed to producing industry-ready engineers through advanced
            laboratories, research, and practical exposure.
          </p>

          <div className="row mx_3xl_-1_3 mt_3xl_7">
            {data?.data &&
              data.data.map((singleCard, cardIdx) => (
                <div key={cardIdx} className={` px_3xl_1_3 col-md-4`}>
                  <div className="single_card">
                    <div className="thumbnail">
                      <Image
                        src={singleCard.image || singleCard.img}
                        alt="image"
                        height={415}
                        width={500}
                        alt="image"
                        style={{
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>

                    <div className="content">
                      <div className="left">
                        <h5 className="name">{singleCard.title}</h5>
                        <div className="bar"></div>
                      </div>
                      <div className="right">
                        <Link href={`/${singleCard.url}`}>
                          <Image
                            alt="image"
                            src="/images/icons/arrow2.svg"
                            height={22}
                            width={22}
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {data?.bottomSubHeading && (
            <p className="bottom_sub_heading">
              <strong>{data.bottomSubHeading}</strong>
            </p>
          )}

          {data?.bottomDesc && <p className="bottom_desc">{data.bottomDesc}</p>}
        </div>
      </section>

      <section className="table_section">
        <div className="container">
          <h4 className="heading">Additional Lab Facility</h4>
          <table className="table-lab table table-bordered">
            <thead>
              <tr>
                <th>Sl. No</th>
                <th>test</th>
                <th>test1</th>
              </tr>
            </thead>
            <tbody>
              {data?.lab_page_data?.name_of_laboratory?.map((lab, idx) => (
                <tr key={idx}>
                  <td>{idx + 1}</td>
                  <td>{lab}</td>
                  <td>{data.lab_page_data.name_of_equipment?.[idx] || "—"}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* images */}

          <div className={styles.table_images}>
            <div className="row">
              {data?.lab_page_data?.lab_images.map((singleImage, imageIdx) => (
                <div className="col-md-4" key={imageIdx}>
                  <Image
                    src={singleImage}
                    width={446}
                    height={300}
                    alt="image"
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
