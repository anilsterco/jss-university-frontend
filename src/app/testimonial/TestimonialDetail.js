import TabSection from "@/component/sections/TabSection";
import Image from "next/image";
import "@/styles/style.css";
import "@/styles/custom.style.css";

export default function TestimonialDetail({ hasTabs }) {
  const sections = {
    banners: {
      name: "DR. B. SURESH",
      designation: "PRO CHANCELLOR",
      short_description:
        "Visionary Leadership in Higher Education\r\nA university must be a space where knowledge is created, minds meet, innovation addresses future needs, and students emerge as responsible, enlightened citizens. The true measure of a university lies in its relevance to society and the impact it creates — values that are deeply embedded in JSS University, Noida’s ethos.",
      banner_image:
        "https://project-demo.in/jss/assets/img/leadership/1773120266_banner_69afab0ac1e63.webp",
    },
    about: {
      description: [
        "Built on the strong foundation and legacy of JSS Institutions, ‘Quality’ and ‘Excellence’ have been the guiding principles for JSS University, Noida, evident from its remarkable strides in national and international benchmarking within a year of establishment.",
        "A Legacy of Academic and Institutional Excellence",
      ],
      image:
        "https://project-demo.in/jss/assets/img/leadership/1773122628_69afb4444d380.webp",
    },
    message_from_chancellor: {
      message: [
        "The developmental journey of JSS Academy of Higher Education and Research, Mysuru — the parent institution — has gone beyond physical infrastructure to encompass the entire spectrum of education. Strong governance, visionary leadership, committed faculty, and a diverse student body have been the pillars of its rapid progress.",
        "Strategic national and international collaborations, along with optimal resource allocation to high-impact projects, have consistently strengthened the institution’s capabilities. The integration of health sciences as the core academic focus was only the beginning; sustaining this focus, expanding responsibly, and working collaboratively have driven multiple successes.",
        "Looking ahead, JSSAHER’s ongoing planning process will continue to guide its growth, shaped by evolving societal and economic trends, while staying true to its mission of delivering world-class education rooted in values.",
      ],
      name: "DR. B. SURESH",
      designation: "PRO CHANCELLOR",
      video: "",
      message_image:
        "https://project-demo.in/jss/assets/img/leadership/1773120923_69afad9b9a914.webp",
    },
  };

  return (
    <>
      <section className="testimonial_detail">
        {hasTabs && (
          <TabSection
            title={data.tabs.title}
            subtitle={data.tabs.subTitle}
            tabs={data.tabs.tabs}
            slug={data.slug}
          />
        )}
      </section>
      <section className="leadership_dtls_two testimonial_detail_section">
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
                  <div className="leadership_two_img right_col">
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
                    {sections.message_from_chancellor.name && (
                      <h5 className="name">
                        {sections.message_from_chancellor.name}
                      </h5>
                    )}
                    {sections.message_from_chancellor.designation && (
                      <p className="designation">
                        {sections.message_from_chancellor.designation}
                      </p>
                    )}
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
    </>
  );
}
