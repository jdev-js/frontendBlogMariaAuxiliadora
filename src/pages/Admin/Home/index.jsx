import imgURL from '../../../asset/image1.png'
import styles from './style.module.css'

export default function HomeAdmin() {
  return (
    <div className={styles.containerPage}>
      <img src={imgURL} className={styles.img} />
      <h4 className={styles.titleText}>Bienvenido Administrador</h4>
      <span className={styles.descritionText}>Dios bendiga las obras reaizadas por medio de esta plataforma. Amén.</span>
    </div>
  )
}
