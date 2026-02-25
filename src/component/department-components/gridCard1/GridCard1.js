import styles from './gridCard.module.css'

export default function GridCard1({ data, id }) {
    return (
        <div className={`${styles.card} ${id < 3 && styles.borderTop}`}>
            <p>{data.content}</p>
        </div>
    )
}