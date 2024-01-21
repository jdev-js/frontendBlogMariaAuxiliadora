import styles from './style.module.css'
import PencilIcon from '../Icons/Pencil'
import imgURL from './../../asset/image2.png'

export default function WarnigArticle() {
  return (
    <div className={styles.containerWarnig}>
      <PencilIcon width={80} height={80} fill={'#88d4f2'}/>
      <h4 className={styles.titleText}>Crea nuevos articulos de valor</h4>
      <span className={styles.descritionText}>Por favor, elimina los articulos sin importancia para no colapsar el sistema de blog</span>
    </div>
  )
}

export function NotArticle(){
  return(
    <div className={styles.containerNotArticulo}>
    <img src={imgURL}/>
    <h4>Noy hay articulos disponibles</h4>
  </div>
  )
}