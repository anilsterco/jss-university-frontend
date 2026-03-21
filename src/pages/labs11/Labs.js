import Image from "next/image";
import styles from "./labs.module.css";
import Link from "next/link";
import AboutOne from "@/component/sections/AboutOne";
import LabCard from "@/component/sections/LabCard";

export default function Labspage({ data }) {
  console.log("lab card data", data);
  return (
    <>
      {data?.[0]?.type == "topBanner" && (
        <AboutOne data={data} extraClass={"inner_lab_page"} />
      )}

      <section
        className={` ${styles.labs_page} ${styles.inner_page} ${data?.[0]?.type == "topBanner" ? "inner_lab_data_no_spacing" : ""}`}
      >
        <div className="container">
          {/* <p className={`text-center ${styles.sub_heading}`}>
            Committed to producing industry-ready engineers through advanced
            laboratories, research, and practical exposure.
          </p> */}

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

          <LabCard data={data} />
        </div>
      </section>
    </>
  );
}
