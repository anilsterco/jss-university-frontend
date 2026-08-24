export default function PlacementProcedure({ data }) {
  const renderSection = (section, index) => {
    if (section.type !== "placementProcedure") return null;

    const item = section.items?.[0];
    if (!item) return null;

    const boxes =
      item.boxes?.filter((box) => box?.title || box?.subtitle) || [];

    return (
      <div key={index}>
        {item.heading && (
          <div className="procedure_heading">
            <h2>{item.heading}</h2>
            <p>{item.description}</p>
          </div>
        )}
        <div className="placement_procedure">
          {boxes.map((box, i) => (
            <div key={i} className="procedure_box" data-aos="zoom-in">
              {box.title && <h3>{box.title}</h3>}
              {box.subtitle && <p>{box.subtitle}</p>}
            </div>
          ))}
        </div>

        {item?.bottomDescription && item?.bottomDescription.length > 0 && (
          <div className="bottom_desc">
            {item.bottomDescription?.map((desc, descIdx) => (
              <p
                key={descIdx}
                dangerouslySetInnerHTML={{ __html: desc.desc }}
                className="mt-5"
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <section
      className={`placement_proSec ${data?.[0]?.items?.[0].sectionType}`}
    >
      <div className="container">
        {data?.map((section, index) => renderSection(section, index))}
      </div>
    </section>
  );
}
