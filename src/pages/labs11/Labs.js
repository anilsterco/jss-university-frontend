"use client"
import Image from "next/image";
import styles from "./labs.module.css";
import Link from "next/link";
import AboutOne from "@/component/sections/AboutOne";
import LabCard from "@/component/sections/LabCard";
import { usePathname } from "next/navigation";

export default function Labspage({ data }) {
  const pathname = usePathname();

  const slug = pathname.split('/').filter(Boolean)[1]

  return (
    <>
      {data?.[0]?.type == "topBanner" && (
        <AboutOne data={data} extraClass={"inner_lab_page"} />
      )}

      <section
        className={` ${styles.labs_page} ${styles.inner_page} ${data?.[0]?.type == "topBanner" ? "inner_lab_data_no_spacing" : ""}`}
      >
        <div className="container">
          {slug == 'information-technology' && (
            <>
              <div className="container">
                <h5 class="about_subtitle">Labs</h5>
                  <p className={`text-center`}>
                  The Department of Information Technology is equipped with well-established laboratories that support both academic and research activities. These laboratories are designed to provide students with hands-on experience in core and emerging areas of computing, enabling the effective application of theoretical concepts.
                  </p>
    
                  <p className={`text-center`}>
                  Each laboratory is equipped with the necessary hardware and software resources aligned with the curriculum requirements of undergraduate and postgraduate programs. They facilitate practical sessions, project development, and research activities, thereby enhancing students’ technical competencies and problem-solving skills.
                  </p>
    
                  <p className={`text-center`}>
                  In addition to regular lab sessions, the department actively promotes innovation and experiential learning through project-based work and research initiatives conducted within these laboratories.
                  </p>
              </div>
            </>
          )}
          

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
