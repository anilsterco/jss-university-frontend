

export default function Editor({ data }) {


  return (
    <>
      {data?.map((section, sectionIndex) => {
        if (section.type !== "editor") return null;
        if (!section.items?.length) return null;

        return (
          section?.items &&
          section.items.length >= -1 &&
          section.items.map((item, idx) => (
            <section key={idx} className={`editor_page`}>
                <div key={idx}>
                  {item?.editor && (
                    <div dangerouslySetInnerHTML={{ __html: item.editor }} />
                  )}
                </div>
            </section>
          ))
        );
      })}
    </>
  );
}
