// component/sections/TestimonialDetail.js

import TabSection from "@/component/sections/TabSection";
import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function TestimonialDetail({ data }) {
  if (!data) return null;

  const imageUrl = data.image?.startsWith("http")
    ? data.image
    : `https://project-demo.in/jss/${data.image}`;

  return (
    <>
      <section className="testimonial_detail">
        <TabSection title={data.name} subtitle={"Testimonial"} tabs={[]} />
      </section>

      <section className="leadership_dtls_two testimonial_detail_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <div className="leader_row">
                {/* Left — text content */}
                <div className="leader_col">
                  <div className="leadership_two_cnt extra_details">
                    {data.title && <h5>{data.title}</h5>}
                    {data.short_description && <p>{data.short_description}</p>}
                    {data.description && <p>{data.description}</p>}

                    {(data.course || data.batch) && (
                      <p className="testimonial-course">
                        {[data.course, data.batch].filter(Boolean).join(" · ")}
                      </p>
                    )}

                    {data.company && (
                      <p className="testimonial-company">{data.company}</p>
                    )}

                    {data.location && (
                      <p className="testimonial-location">{data.location}</p>
                    )}
                  </div>
                </div>

                {/* Right — image + name + designation */}
                <div className="leader_col">
                  <div className="leadership_two_img right_col">
                    <figure
                      style={{
                        position: "relative",
                        width: "608px",
                        height: "403px",
                      }}
                    >
                      <Image
                        src={imageUrl}
                        alt={data.alt_text || data.name}
                        className="img-fluid"
                        fill
                        style={{
                          objectFit: "cover",
                          objectPosition: "top",
                        }}
                      />
                    </figure>

                    {data.name && <h5 className="name">{data.name}</h5>}
                    {data.designation && (
                      <p className="designation">{data.designation}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Video — if available */}
            {/* {data.video_url && (
              <div className="col-lg-11 mt-4">
                <div className="testimonial-video">
                  <iframe
                    src={
                      data.video_url
                        .replace("youtu.be/", "www.youtube.com/embed/")
                        .split("?")[0]
                    }
                    width="100%"
                    height="450"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )} */}
          </div>
        </div>
      </section>
    </>
  );
}
