import CounterCard from "../department-components/counterCard/CounterCard";

export default function CountAlumni({ data }) {

    const renderSection = (section, sectionIndex) => {
        switch (section.type) {
            case "countAlumni":
                return (
                    <section key={sectionIndex} className="count_alumni_section">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-md-10">
                                    <div className="row">
                                        {section?.items && section.items.length >= -1 && section.items.map((item, idx) => (
                                            <div key={idx} className="col-3">
                                                <CounterCard key={idx} data={item} />
                                            </div>
                                        ))}
                                    </div>

                                </div>


                            </div>
                        </div>

                    </section>
                )
        }
    }

    return (
        <>
            {data && data.length > 0 ? (
                data.map((section, index) => renderSection(section, index))
            ) : (
                <div className="abt_cntnt" data-aos="fade-up">
                    <p>There is no data!</p>
                </div>
            )}
        </>
    )
}