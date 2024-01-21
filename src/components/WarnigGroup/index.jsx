import styles from './style.module.css'
import GroupIcon from '../Icons/UserGroup'
import imgURL from './../../asset/image2.png'

export default function WarnigGroup() {
  return (
    <div className={styles.containerWarnig}>
      <GroupIcon width={80} height={80} fill={'#88d4f2'}/>
      <h4 className={styles.titleText}>Publica grupos de formación</h4>
      <span className={styles.descritionText}>Ejemplo: grupos de comunion, confirmación, grupos de apostolados. entre otros</span>
    </div>
  )
}

export function NotGroup(){
  return(
    <div className={styles.containerNotArticulo}>
    <img src={imgURL}/>
    <h4>Sin grupos disponibles</h4>
  </div>
  )
}
