import Image from "next/image";

export default function ImageContent({ data, id }) {
    return (
        <div key={id}>
            <div className="row">
                <div className="col-6">
                    <Image
                        src={data.thumbnailImage}
                        width={683}
                        height={520}
                        style={{
                            width: "100%",
                            height: "auto"
                        }}
                    />
                </div>

                <div className="col-6">
                    <div className="content_col">
                        {data?.desc && data.desc.map((singleDesc, descIdx) => (
                            <p>{singleDesc.desc}</p>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    )
}