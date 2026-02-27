"use client";

import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function UniversityGreen({ data = [] }) {
  const renderSection = (section, index) => {
    if (section.type !== "universityGreen") return null;
    const items = [...(section.items || [])].sort(
      (a, b) => (a.position || 0) - (b.position || 0)
    );

    return (
      <section className="uni_green_ini_sec university_sec" key={`uni-green-${index}`}>
        <div className="containerMD">
          {items.map((item, idx) => (
            <div key={idx}>
              <div className="uni_green_grid">
                <div className="uni_green_con">
                  <h5>{item?.title}</h5>
                  {Array.isArray(item?.decs) &&
                    item.decs.map((d, i) => <p key={i}>{d.decs}</p>)}
                </div>

                <div className="uni_conte_img">
                  <figure className="shine-effect">
                    <Image
                      src={item?.image}
                      alt={item?.title || "University Green"}
                      width={800}
                      height={520}
                      className="img-fluid w-100"
                      data-aos="fade-up"
                      data-aos-delay="200"
                    />
                  </figure>
                </div>
              </div>
              {idx !== items.length - 1 && <hr />}
            </div>
          ))}
        </div>
      </section>
    );
  };

  return <>{data.map((section, index) => renderSection(section, index))}</>;
}
