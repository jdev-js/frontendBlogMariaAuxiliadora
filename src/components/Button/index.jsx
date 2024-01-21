import styles from './style.module.css'

export function ButtonIcon({children,onClick: handleClick}) {
  return (
    <button onClick={handleClick} className={styles.buttonIcon}>{children}</button>
  )
}

export function ButtonSmall({children,onClick: handleClick}){
    return (
        <button onClick={handleClick} className={styles.buttonSmall}>{children}</button>
      )
}

export function ButtonLarge({children,onClick: handleClick,style}){
    return (
        <button style={style} onClick={handleClick} className={styles.buttonLarge}>{children}</button>
      )
}

export function ButtonGhostLarge({children, onClick: handleClick}){
  return (
    <button onClick={handleClick} className={styles.buttonLargeGhost}>{children}</button>
  )
}