import Link from '../NavLink'
import styles from './style.module.css'
import HomeIcon from '../Icons/Home'
import CalendaryIcon from '../Icons/Calendary'
import UserGroup from '../Icons/UserGroup'
import UserNurse from '../Icons/UserNurse'
import PencilIcon from '../Icons/Pencil'
import UserIcon from '../Icons/User'
import { useLocation } from 'react-router-dom'

export default function Navbar() {
  const { pathname } = useLocation()
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <Link to={'/'}>
          <HomeIcon width={20} height={20} style={{  marginRight: 8 }} fill={pathname === "/" ? "#88d4f2" :"#bcbcbc"} />
          Home 
          </Link>
        <Link to={'/event'}>
          <CalendaryIcon width={20} height={20} style={{ marginRight: 8}} fill={pathname === "/event" ? "#88d4f2" :"#bcbcbc"}/>
          Eventos
          </Link>
        <Link to={'/article'}>
          <PencilIcon width={20} height={20} style={{ marginRight: 8}} fill={pathname === "/article" ? "#88d4f2" :"#bcbcbc"}/>
          Articulos
          </Link>
        <Link to={'/group'}>
          <UserGroup width={20} height={20} style={{ marginRight: 8}} fill={pathname === "/group" ? "#88d4f2" :"#bcbcbc"}/>
          Grupos
        </Link>
        <Link to={'/parroco'}>
          <UserNurse width={20} height={20} style={{ marginRight: 8}} fill={pathname === "/parroco" ? "#88d4f2" :"#bcbcbc"}/>
          Parrocos
        </Link>
        <Link to={'/admin/auth'}>
          <UserIcon width={20} height={20} style={{ marginRight: 8}} fill={"#ff4a9b"}/>
          Admin
        </Link>
      </ul>
    </nav>
  )
}
