import Image from "next/image";
import Link from "next/link";

export default function GridCardDesign3({ data }) {

  return (
    <>
      {data?.map((section, sectionIndex) => {
        if (section.type !== "gridCardDesign3") return null;
        if (!section.items?.length) return null;

        return (
          <div
          key={sectionIndex}
            className={`gridCardDesign3_section ${section?.items[0].sectionType}`}
          >
            <div className="container">
              <div className="grid">
                {section?.items[0]?.cardGroup &&
                  section?.items[0]?.cardGroup.length > 0 &&
                  section?.items[0]?.cardGroup.map((item, itemIndex) => {
                    return (
                      <div key={itemIndex} className={`single_card`}>
                        <Link
                          href={item?.pdf ? item.pdf : ''}
                          style={{ color: "inherit" }}
                          target="_blank"
                        >
                          {item?.thumbnail ? (
                            <figure>
                              <Image
                                src={item?.thumbnail}
                                alt={item?.title}
                                width={400}
                                height={250}
                                loading="lazy"
                                layout="responsive"
                                className="eventImage"
                              />
                            </figure>
                          ) : null}
                          <div className={"content"}>
                            {item?.title && (
                              <h5 className={"title"}>{item?.title}</h5>
                            )}
                            {item?.date && (
                              <p className="cardDate">{item?.date}</p>
                            )}
                          </div>
                        </Link>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
