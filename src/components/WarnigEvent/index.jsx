import styles from './style.module.css'
import CalendaryIcon from '../Icons/Calendary'
import imgURL from './../../asset/image2.png'


export default function WarnigEvent() {
  return (
    <div className={styles.containerWarnig}>
      <CalendaryIcon width={80} height={80} fill={'#88d4f2'}/>
      <h4 className={styles.titleText}>Crea nuevos eventos</h4>
      <span className={styles.descritionText}>Por recomendación planifica las actividades por fin de semana.</span>
    </div>
  )
}

export function NotEvent(){
  return(
    <div className={styles.containerNotArticulo}>
    <img src={imgURL}/>
    <h4>Noy hay Eventos disponibles</h4>
  </div>
  )
}
