"use client";

import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function Features({ items }) {
  return (
    <main className="about-page">
      <div className="about-content-layout">
        {items.map((feature) => (
          <section className="about_one" key={feature.item_uuid}>
            <div className="container">
              <div className="abt_cntnt">
                <p>{feature.description}</p>

                <figure>
                  <Image
                    src={feature.file}
                    alt={feature.title}
                    width={800}
                    height={500}
                    className="img-fluid w-100"
                  />
                </figure>
              </div>

              <div className="estblish">
                <p>{feature.title}</p>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
