import Image from "next/image";
import styles from './imageContent.module.css'

export default function ImageContent({ data, id }) {

    return (
        <div key={id} className={`${styles.singleImageContent} ${styles[data.type]}`}>
            <div className={`row ${(id % 2) !== 0 && 'flex-row-reverse'}`}>
                <div className="col-6 px_3xl_1_2">
                    <Image
                        src={data.thumbnailImage}
                        width={683}
                        height={520}
                        alt=""
                        style={{
                            width: "100%",
                            height: "auto"
                        }}
                    />
                </div>

                <div className="col-6 px_3xl_1_2">
                    <div className={`${styles.content_col} ${data?.type && styles[data.type]} ${id % 2 !== 0 && styles.odd}`}>
                        <div className={styles.descGroup}>
                            {data?.desc && data.desc.map((singleDesc, descIdx) => (
                                <p key={descIdx} className={styles.desc}>{singleDesc.desc}</p>
                            ))}
                        </div>
                        {data?.subHeading && (
                            <h5 className={styles.subHeading}>{data.subHeading}</h5>
                        )}
                        {data?.listing && (
                            <ul className={styles.ul}>
                                {data.listing.map((singleList, listIdx) => (
                                    <li key={listIdx}>{singleList.listing}</li>
                                ))}
                            </ul>
                        )}
                        {data?.bottomDesc && (
                            <p className={styles.bottomDesc}>{data.bottomDesc}</p>
                        )}
                    </div>
                </div>
            </div>

            {styles?.extraInfo && <h5 className={styles.extraInfo}>{data.extraInfo}</h5>}
        </div>
    )
}