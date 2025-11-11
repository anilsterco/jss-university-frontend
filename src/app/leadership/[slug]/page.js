"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import "@/styles/style.css";
import "@/styles/custom.style.css";

// Mock data – Replace with API data later
const leadersData = [
  {
    id: 1,
    slug: "jagadguru-sri-shivarathri",
    name: "JAGADGURU SRI SHIVARATHRI",
    spanName: "DESHIKENDRA MAHASWAMIJI",
    designation: "Chancellor",
    topImage: "/images/custom-page/about/jagadguru.png",
    bioImage: "/images/custom-page/about/leaderhip-placeholder.png",
    messageImage: "/images/custom-page/about/chancellor-message.png",
    quoteIcon: "/images/custom-page/about/quote.png",
    description: {
      intro:
        "His Holiness Jagadguru Sri Shivarathri Deshikendra Mahaswamiji assumed leadership in 1986 after spiritual training under his illustrious predecessor, HH Jagadguru Dr. Sri Shivarathri Rajendra Mahaswamiji, founder of JSS Mahavidyapeetha.",
      paragraph:
        "As Chancellor of JSS University, Noida, His Holiness blends spiritual wisdom, inclusive leadership, and a global vision to guide the University’s mission and growth. Under his stewardship, JSS University, Noida, upholds the values of academic excellence, service to society, and innovation in education.",
      biography:
        "At the young age of 29, His Holiness assumed leadership of the Math and has since extended its presence across India and abroad, establishing educational institutions in Noida (Uttar Pradesh), as well as cultural and spiritual centres in New Delhi, USA, Mauritius, and Dubai. His work addresses challenges in literacy, healthcare, employment generation, and value-building within society, earning recognition and respect worldwide.",
    },
    message: {
      heading: "Message from the Chancellor",
      subheading:
        "We are happy to state that all members of JSS University, Noida are committed to building a vibrant future for this institution.",
      paragraphs: [
        "Guided by an excellent strategic plan and the legacy of success provided by JSS Mahavidyapeetha, the University is dedicated to combining academic excellence with an unwavering commitment to innovation, quality, and service.",
        "JSS University, Noida, is the result of concerted efforts to re-orient tertiary education — particularly technical education — under the aegis of JSS Mahavidyapeetha. Founded as the educational arm of Sri Suttur Math, the Mahavidyapeetha has, for decades, embraced the value of Education for All.",
        "The University’s genesis coincided with the Mahavidyapeetha’s large-scale socio-economic mission marking the centenary celebrations of HH Jagadguru Sri Dr. Shivarathri Rajendra Mahaswamiji. We are confident that JSS University, Noida, will redefine the purpose of technical education and leave a significant mark on India’s educational landscape.",
      ],
      footer: {
        quote:
          "This vision can only be realised through the proactive participation of all stakeholders. True success is built on collective effort, and together we can align with the nation’s vision for innovation, skills, and research. We welcome all to join us in transforming education — not just to teach how to make a living, but how to make a life. Education is the soul of society, and it is our moral duty to use it to transmit the heritage of civilization to future generations. This Academy and its legacy of greatness belong to them, and it is our responsibility to pass it forward.",
        name: "Jagadguru Sri Shivarathri Deshikendra Mahaswamiji",
        designation: "Chancellor, JSS University, Noida",
      },
    },
  },
];

export default function LeadershipDetailsPage({ params }) {
  const unwrappedParams = use(params);
  const { slug } = unwrappedParams;

  const leader = leadersData.find((l) => l.slug === slug);

  if (!leader) {
    return (
      <main className="site_main">
        <div className="container text-center py-5">
          <h2>Leader not found</h2>
          <Link href="/about" className="btn btn-primary mt-4">
            ← Back to Leadership
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="site_main">
      {/* ========== TITLE SECTION ========== */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="innnr_head">
                <h2>ABOUT</h2>
                <h3>
                  SRI SUTTUR MATH THE <span>1000-YEAR LEGACY</span>
                </h3>
                <ul>
                  <li>
                    <Link href="/about">About JSS</Link>
                  </li>
                  <li>
                    <Link href="/about">About JSSMVP</Link>
                  </li>
                  <li>
                    <Link href="/about">Heritage</Link>
                  </li>
                  <li className="active">
                    <Link href="/about">Leadership</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP TOP IMAGE SECTION ========== */}
      <section className="leadership_dtls_one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="top_img">
                <figure>
                  <Image
                    src={leader.topImage}
                    alt={leader.name}
                    width={1200}
                    height={600}
                    style={{ width: "100%", height: "auto" }}
                    className="img-fluid w-100"
                  />
                  <figcaption>
                    <div className="desgtn">
                      <h3>
                        {leader.name} <span>{leader.spanName}</span>
                      </h3>
                      <h5>{leader.designation}</h5>
                      <p>
                        <strong>
                          His Holiness {leader.name} {leader.spanName}
                        </strong>{" "}
                        {leader.description.paragraph}
                      </p>
                    </div>
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== LEADERSHIP DESCRIPTION SECTION ========== */}
      <section className="leadership_dtls_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <div className="row">
                <div className="col-lg-6">
                  <div className="leadership_two_cnt">
                    <h5>{leader.description.intro}</h5>
                    <p>{leader.description.paragraph}</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="leadership_two_img">
                    <Image
                      src={leader.bioImage}
                      alt={leader.name}
                      width={600}
                      height={400}
                      style={{ width: "100%", height: "auto" }}
                      className="img-fluid"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="biographi_section">
              <h3>Biography</h3>
              <p>{leader.description.biography}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========== MESSAGE SECTION ========== */}
      <section className="message_section">
        <div className="container">
          <div className="message_warpper">
            <div className="row">
              <div className="col-lg-6">
                <div className="message_text">
                  <figure>
                    <Image
                      src={leader.quoteIcon}
                      alt="quote"
                      width={50}
                      height={50}
                      style={{ width: "100%", height: "auto" }}
                      className="img-fluid"
                    />
                  </figure>
                  <h3>{leader.message.heading}</h3>
                  <h5>{leader.message.subheading}</h5>

                  {leader.message.paragraphs.map((para, index) => (
                    <p key={index}>{para}</p>
                  ))}
                </div>
              </div>

              <div className="col-lg-6">
                <div className="message_img">
                  <div className="message_img-thumb">
                    <figure>
                      <Image
                        src={leader.messageImage}
                        alt="message"
                        width={600}
                        height={500}
                        style={{ width: "100%", height: "auto" }}
                        className="img-fluid"
                      />
                    </figure>
                    <div className="message_img-thumb-grp">
                      <div className="message_img-thumb-icon"></div>
                      <div className="message_img-thumb-cont">
                        <h6>WATCH MESSAGE FROM</h6>
                        <h4>
                          {leader.name} <br />
                          {leader.spanName}
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="message_footer">
              <p>{leader.message.footer.quote}</p>
              <h5>
                His Holiness <span>{leader.message.footer.name}</span>
              </h5>
              <h5>{leader.message.footer.designation}</h5>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
