import styles from './style.module.css'
import UserNurse from '../Icons/UserNurse'
import imgURL from './../../asset/image2.png'

export default function WarnigParroco() {
  return (
    <div className={styles.containerWarnig}>
      <UserNurse width={80} height={80} fill={'#88d4f2'}/>
      <h4 className={styles.titleText}>Crea una reseña del sacerdote actual</h4>
      <span className={styles.descritionText}>Tambien puedes publicar una reseña del parroco anterior (opcional)</span>
    </div>
  )
}

export function NotParroco(){
  return(
    <div className={styles.containerNotArticulo}>
    <img src={imgURL}/>
    <h4>Sin hay parrocos disponibles</h4>
  </div>
  )
}
