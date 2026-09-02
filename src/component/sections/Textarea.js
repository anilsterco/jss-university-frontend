export default function Textarea({ data }) {

  return (
    <>
      {data?.map((section) => {
        if (section.type !== "textArea") return null;
        if (!section.items?.length) return null;

        return (
          section?.items &&
          section.items.length >= -1 &&
          section.items.map((item, idx) => (
            <section key={idx} className={`amenities_section`}>
              <div className="container">
                <div key={idx}>
                  {item?.textarea && (
                    <div dangerouslySetInnerHTML={{ __html: item.textarea }} />
                  )}
                </div>
              </div>
            </section>
          ))
        );
      })}
    </>
  );
}
