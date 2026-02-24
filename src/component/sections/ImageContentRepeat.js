import Image from "next/image";
import CounterCard from "../department-components/counterCard/CounterCard";
import ImageContent from "../department-components/imageContent/ImageContent";

export default function ImageContentRepeat({ data }) {

    const renderSection = (section, sectionIndex) => {
        switch (section.type) {
            case "imageContentRepeat":
                return (
                    <div key={sectionIndex} className="single_image_content">
                        {section?.items && section.items.length >= -1 && section.items.map((item, idx) => (
                            <ImageContent key={idx} data={item} id={idx} />
                        ))}
                    </div>
                )

            default:
                return (
                    <h1>there is some error in switch!!</h1>
                )
        }
    }

    return (
        <section className="image_content_repeat_section">
            <div className="container">
                {data && data.length > 0 ? (
                    data.map((section, index) => renderSection(section, index))
                ) : (
                    <div className="abt_cntnt" data-aos="fade-up">
                        <p>There is no data!</p>
                    </div>
                )}
            </div>
        </section>
    )
}