import styles from "./style.module.css"

function CardBanco({ srcIcon, nameBanco, size, margin, url }) {
  return (
    <a href={url} target='_blank' className={styles.cardContainer}>
      <img
        style={{ marginRight: margin }}
        width={size.width}
        height={size.height}
        className={styles.img}
        src={srcIcon}
        alt={`${nameBanco}`}
      />
      <span className={styles.title}>{nameBanco}</span>
    </a>
  )
}
export default CardBanco
