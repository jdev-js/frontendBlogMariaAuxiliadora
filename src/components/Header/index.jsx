import Navbar from '../Navbar'
import Logo from '../../asset/logo1.png'
import styles from './style.module.css'
import Carrucel from '../Carrucel'
import { useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()

  return (
    <header className={styles.header}>
        <div className={styles.containerDescription}>
        <figure>
          <img className={styles.img} src={Logo} />
        </figure>
        <span>Parroquia</span>
        <span>Maria Auxiliadora</span>
        </div>
        <div className={styles.containerNavCarrucel}>
          <Navbar />
          { pathname === "/" && (
          <div className={styles.containerCarrucel}>
            <Carrucel />
          </div>)}
        </div>
    </header>
  )
}
