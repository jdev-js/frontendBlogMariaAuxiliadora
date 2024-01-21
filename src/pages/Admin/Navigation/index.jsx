import { useLocation, Link} from 'react-router-dom'
import styles from './style.module.css'
import logoURL from '../../../asset/logo1.png'

import HomeIcon from '../../../components/Icons/Home'
import CalendaryIcon from '../../../components/Icons/Calendary'
import PencilIcon from '../../../components/Icons/Pencil'
import UserGroupIcon from '../../../components/Icons/UserGroup'
import ParrocosIcon from '../../../components/Icons/UserNurse'
import DonationIcon from '../../../components/Icons/Donation'

export default function NavigationAdmin() {
  const { pathname } = useLocation()

  return (
    <div className={styles.containerNavbar}>
        <img src={logoURL} className={styles.image}/>
        <nav className={styles.navbar}>
          <ul className={styles.listMenu}>
            <Link className={pathname === "/admin/home" ? styles.active : styles.link} to="home">
              <HomeIcon width={25} height={25} style={{ marginRight: 8}} fill={pathname === "/admin/home" ? "#88d4f2" :"#bcbcbc"}/>
              Inicio
            </Link>
            <Link className={pathname === "/admin/event" ? styles.active : styles.link} to="event">
              <CalendaryIcon width={25} height={25} style={{ marginRight: 8}} fill={pathname === "/admin/event" ? "#88d4f2" :"#bcbcbc"}/>
              Eventos
              </Link>
            <Link className={pathname === "/admin/post" ? styles.active : styles.link} to="post">
              <PencilIcon width={25} height={25} style={{ marginRight: 8}} fill={pathname === "/admin/post" ? "#88d4f2" :"#bcbcbc"}/>
              Articulos
              </Link>
            <Link className={pathname === "/admin/group" ? styles.active : styles.link} to="group">
              <UserGroupIcon width={25} height={25} style={{ marginRight: 8}} fill={pathname === "/admin/group" ? "#88d4f2" :"#bcbcbc"}/>
              Grupos
              </Link>
            <Link className={pathname === "/admin/parroco" ? styles.active : styles.link} to="parroco">
              <ParrocosIcon width={25} height={25} style={{ marginRight: 8}} fill={pathname === "/admin/parroco" ? "#88d4f2" :"#bcbcbc"}/>
              Parrocos
              </Link>
            <Link className={pathname === "/admin/donation" ? styles.active : styles.link} to="donation">
              <DonationIcon width={30} height={30} style={{ marginRight: 8}} fill={pathname === "/admin/donation" ? "#88d4f2" :"#bcbcbc"}/>
              Donaciones
              </Link>
          </ul>
        </nav>
    </div>
  )
}
