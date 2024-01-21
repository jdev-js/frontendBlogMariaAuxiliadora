import styles from './style.module.css'

function CardBanco({srcIcon,nameBanco,size,margin}) {
  return (
    <div className={styles.cardContainer}>
        <img style={{ marginRight: margin }} width={size.width} height={size.height} className={styles.img} src={srcIcon} alt={`${nameBanco}`} />
        <span className={styles.title}>{nameBanco}</span>
    </div>
  )
}
export default CardBanco