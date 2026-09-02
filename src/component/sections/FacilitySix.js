import Image from "next/image";

export default function FacilitySix({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <>
      {data.map((section, sectionIndex) => {
        if (section.type !== "cafeteriaGuest") return null;

        const items = [...section.items].sort(
          (a, b) => Number(a.position || 0) - Number(b.position || 0),
        );

        return items.map((item, idx) => (
          <section id="mentoring-scheme"
            className={`cafe_gues_mainsec  ${
              items[0].belowtitle ? "" : ""
            } ${item.sectionType}`}
            key={`cafeguest-${sectionIndex}-${idx}`}
          >
            <div className="container">
              <div
                className={`cafe_gues_gridone ${
                  items[0].belowtitle ? "mb-0" : ""
                }`}
              >
                {item.image && (
                  <div className="cafe_imgsec">
                    <figure className="shine-effect img-full">
                      <Image
                        src={item.image}
                        alt={item.title || "Cafeteria"}
                        className="w-100"
                        width={600}
                        height={400}
                        loading="lazy"
                      />
                    </figure>
                  </div>
                )}
                <div className="cafe_contentsec campu_con_rgt">
                  {item.title && <h5>{item.title}</h5>}
                  {Array.isArray(item.desc) &&
                    item.desc.map((d, didx) => <p key={didx}>{d.paragraph}</p>)}
                  {item.belowtitle && (
                    <h2
                      dangerouslySetInnerHTML={{
                        __html: item.belowtitle,
                      }}
                    />
                  )}
                </div>
              </div>
            </div>
          </section>
        ));
      })}
    </>
  );
}
