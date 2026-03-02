import Link from 'next/link'
import styles from './programBox.module.css'
import Image from 'next/image'

export default function ProgramBox({ data, type }) {
    return (
        <div className={styles.cusProgramBox}>
            <Link
                href={`/programs/${data.slug ?? ""}`}
                className={styles.strechedLink}
            >
                <figure>
                    <Image
                        src={
                            (data.image || data.banner) ??
                            "/images/programs/program-img.webp"
                        }
                        alt="program-image"
                        width={type == 'program' ? 673 : 400}
                        height={type == 'program' ? 320 : 250}
                        className="img-fluid w-100"
                    />
                </figure>
                <div className={`${styles.cusProgramText} ${type == 'program' && styles.no_animate}`}>
                    <p>{data.degree_name}</p>
                    <h6>{data.name}</h6>
                    <span>
                        Know More{" "}
                        <i className="bi bi-chevron-right"></i>
                    </span>
                </div>
            </Link>
        </div>
    )
}