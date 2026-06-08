import Image from "next/image";
import Link from "next/link";

import "@/styles/style.css";
import "@/styles/custom.style.css";
import { BASE_URL, WEB_URL } from "@/config/config";

export default async function LeadershipClientDetail({ leader }) {
  const { sections } = leader;

  const fetchPageData = await fetch(`${BASE_URL}pages/leadership`);
  const pageData = await fetchPageData.json();

  return (
    <main className="site_main">
      {/* TITLE SECTION */}
      <section className="inner-title">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="innnr_head">
                {pageData?.tabs?.subTitle && (
                  <h2
                    dangerouslySetInnerHTML={{
                      __html: pageData?.tabs?.subTitle,
                    }}
                  />
                )}
                <ul>
                  {pageData?.tabs?.tabs.map((tab, index) => (
                    <li
                      key={index}
                      className={tab.url.includes("leadership") ? "active" : ""}
                    >
                      <Link href={`${WEB_URL + tab.url}`}>{tab.text}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TOP IMAGE SECTION */}
      <section className="leadership_dtls_one">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">
              <div className="top_img">
                <figure>
                  <Image
                    src={sections.banners.banner_image}
                    alt={sections.banners.name}
                    width={1200}
                    height={600}
                    className="img-fluid w-100"
                  />
                  <figcaption>
                    <div className="desgtn">
                      <h3>{sections.banners.name}</h3>
                      {sections?.banners?.designation && (
                        <h5>{sections.banners.designation}</h5>
                      )}
                      {sections?.banners?.short_description && (
                        <p
                          dangerouslySetInnerHTML={{
                            __html: sections.banners.short_description,
                          }}
                        />
                      )}
                    </div>
                  </figcaption>
                </figure>
              </div>
              <div className="leadership_two_cnt2">
                <h3>{sections.banners.name}</h3>
                <h5>{sections.banners.designation}</h5>
                <p>{sections.banners.short_description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT / DESCRIPTION SECTION */}
      <section className="leadership_dtls_two">
        <div className="container">
          <div className="row">
            <div className="col-lg-11">
              <div className="leader_row">
                <div className="leader_col">
                  <div className="leadership_two_cnt">
                    <h5>{sections.about?.description[0]}</h5>
                    {sections?.about?.description?.map((desc, descIdx) => {
                      if (descIdx !== 0) {
                        return <p key={descIdx}>{desc}</p>;
                      }
                    })}
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

      {/* MESSAGE SECTION */}
      {sections.message_from_chancellor?.message.length > 0 && (
        <section className="message_section">
          <div className="container">
            <div className="message_warpper">
              {sections.message_from_chancellor?.designation
                ?.toLowerCase()
                .includes("chancellor") && (
                  <figure>
                    <Image
                      src="/images/custom-page/about/quote.png"
                      alt="Quote Icon"
                      width={148}
                      height={100}
                      style={{ height: "100%" }}
                      className="tesIcon"
                    />
                  </figure>
                )}
              <div className="row">
                <div className="col-lg-12">
                  <div className="message_text">
                    {sections.message_from_chancellor?.designation
                      ?.toLowerCase()
                      .includes("chancellor") && (
                        // <h3>{sections.message_from_chancellor.designation}</h3>
                        <h3>Message</h3>
                      )}
                    {sections.message_from_chancellor?.message?.map(
                      (msg, index) => (
                        <p key={index}>{msg}</p>
                      ),
                    )}
                  </div>
                </div>
              </div>
              <div className="message_footer_section">
                <h4>{sections.message_from_chancellor?.name}</h4>
              </div>
            </div>
          </div>
        </section>
      )}
      <div className="container">
        <div className="col-lg-12 mx-auto">
          <div className="back_btn_wrap text-center">
            <Link href="/leadership" className="back_btn">
              ←
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
