
import Link from "next/link";

export default function ComingSoon({ data }) {
  const renderSection = (section, index) => {
    switch (section.type) {
      case "comingSoon":
        const item = section.items[0]; // only 1 item in array

        return (
          <section key={`coming-soon-${index}`} className="coming-soon">
            <div className="container">
              <div className="coming-container">
                <h3 className="title">Coming Soon</h3>
                <p className="subtitle">{item.message ?? 'We’re working hard to bring something amazing!'}</p>

                <div className="btn-div">
                  <Link href="/" className="admission-btn comming-soon-btn">
                    Go to Home
                  </Link>
                </div>
              </div>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return <>{data.map((section, index) => renderSection(section, index))}</>;
}