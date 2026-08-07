
import Link from "next/link";
import { BASE_URL, WEB_URL } from "@/config/config.mjs";
import "./footer.css";

async function getFooterData() {
  try {
    const res = await fetch(`${BASE_URL}footer`, {
      
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    return await res.json();
  } catch (err) {
    console.error("Footer data fetch error:", err);
    return null;
  }
}

function renderIcon(icon) {
  switch (icon) {
    case "facebook":
      return <img src="/images/footer/dash_facebook.svg" alt="Facebook" />;
    case "instagram":
      return <img src="/images/footer/dash_insta.svg" alt="Instagram" />;
    case "youtube":
      return <img src="/images/footer/dash_youtube.svg" alt="YouTube" />;
    case "twitter":
      return <img src="/images/footer/dash_linkdin.svg" alt="Twitter" />;
    default:
      return null;
  }
}

export default async function Footer() {
  const data = await getFooterData();

  if (!data) {
    return (
      <footer className="footer_section">
        <div className="container">
          <div className="bottom_footer">
            <p className="mb-0">
              © Copyright {new Date().getFullYear()} - JSS. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer_section">
      <div className="deshFooter">
        <div className="container">
          <div className="footer_contact">
            <div className="footer_left">
              <div className="footer_logo">
                <img
                  src="/images/footer/footer-logo.webp"
                  alt="Logo"
                  style={{ width: "9rem" }}
                />
              </div>
              <div className="connect_contant">
                <p className="fw-bold text-info">Connect with us</p>
                <p>{data.address}</p>
                <div className="col-md-12">
                  <ul className="list-unstyled d-flex flex-column flex-md-row flex-wrap  mb-0">
                    <li>
                      <a className="CTA_Number" href={`tel:${data.phone}`}>{`+${data.phone}`}</a>
                    </li>
                    <li>
                      <a className="CTA_Email" href={`mailto:${data.email}`}>{data.email}</a>
                    </li>
                    {data.landlines.map((line, i) => {
                      const digits = line.replace(/[^\d+]/g, "");
                      return (
                        <li key={i}>
                          <a className="CTA_Number" href={`tel:${digits}`}>{line}</a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
            <div className="footer_right">
              <a
                className="get_direc"
                href="https://maps.app.goo.gl/ju8YpZh7ibsUxFPZ8"
                target="_blank"
              >
                GET DIRECTIONS
              </a>
              <div className="social-icons">
                <p>Follow us on</p>
                <ul className="list-unstyled">
                  {data.socials.map((s, i) => (
                    <li key={i}>
                      <Link
                        href={s.url}
                        target="_blank"
                        className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: "20px", height: "20px" }}
                        aria-label={`Follow us on ${s.icon}`}
                      >
                        {renderIcon(s.icon)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-12 mx-auto">
            <div className="footer_border">
              <div className="footer_link">
                <ul className="list-unstyled">
                  {data.sections.map((section, i) => (
                    <li key={i}>
                      <a
                        href={WEB_URL + section.url ?? "#"}
                        className="links-itams"
                        aria-label={`View ${section.title}`}
                      >
                        {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="quick_link">
                <span className="side-border">Quick Links</span>
                <ul className="quick-item">
                  {data.quickLinks.map((link, i) => (
                    <li key={i}>
                      <a
                        href={link.target_blank ? link.url : WEB_URL + link.url}
                        className="link-item"
                        target={link.target_blank ? "_blank" : "_self"}
                        aria-label={`View ${link.label}`}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="bottom_footer">
            <p className="mb-1 mb-md-0">
              © Copyright {new Date().getFullYear()} - JSS. All Rights Reserved.
            </p>
            <p className="mb-0">
              Website Design and Development by{" "}
              <a href="https://www.stercodigitex.com/" target="_blank">
                Sterco Digitex
              </a>{" "}
            </p>
          </div>
        </div>
      </div>

      {/* mobFooter start */}

      <div className="container mobFooter">
        <div className="col-md-10 mx-auto">
          <div className="connect_contant space-y-4">
            <div className="col-md-12 text-center">
              <p className="fw-bold text-info text-lg connect">Connect with us</p>
              <p className="text-sm">{data.address}</p>
              <ul className="list-unstyled d-block text-center">
                {data.phone && (
                  <li>
                    <a className="CTA_Number" href={`tel:+${data.phone}`}>{`+${data.phone}`}</a>
                  </li>
                )}
              </ul>
            </div>
          </div>

          <div className="footer_link">
            <ul className="list-unstyled Grid2">
              {data.sections?.map((section, i) => (
                <li key={i}>
                  <a
                    href={WEB_URL + section.url ?? "#"}
                    className="hover:text-info transition-colors"
                  >
                    {section.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="quick_link">
            <p>Quick Links</p>
            <ul className="quick-item">
              {data.quickLinks?.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.target_blank ? link.url : WEB_URL + link.url}
                    className="link-item"
                    target={link.target_blank ? "_blank" : "_self"}
                    aria-label={`View ${link.label}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="follow-col">
            <div className="social-icons">
              <p className="font-medium ">Follow us on</p>
              <ul className="list-unstyled mb-1 mx-auto justify-content-center flex gap-3">
                {data.socials.map((icon, iconIdx) => (
                  <li key={iconIdx}>
                    <a
                      href={icon.url}
                      target="_blank"
                      className="btn btn-outline-light btn-sm rounded-circle d-flex align-items-center justify-content-center"
                      style={{ width: "20px", height: "20px" }}
                    >
                      {renderIcon(icon.icon)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ===== BOTTOM FOOTER ===== */}
          <div className="container footer_cnt">
            <div className="col-lg-8 d-flex justify-content-center mx-auto">
              <div className="copy-rights">
                <p>
                  © Copyright {new Date().getFullYear()} - JSS. All Rights
                  Reserved.
                </p>
                <p className="mb-0 text-center">
                  Website Design and Development by{" "}<br />
                  <a href="https://www.stercodigitex.com/" target="_blank">
                    Sterco Digitex
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
}