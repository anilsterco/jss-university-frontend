import Image from 'next/image'
import styles from './counterCard.module.css'

export default function CounterCard({ data }) {
    return (
        <div className={styles.counter_card}>
            {data.title && <h4 className={styles.count}>{data.title}</h4>}
            {data.image && (
                <Image
                    src={data.image}
                    height={73}
                    width={73}
                    alt={data.desc || data.title || 'image'}
                    loading='lazy'
                />
            )}
            <p className={styles.desc}>{data.desc}</p>
        </div>
    )
}