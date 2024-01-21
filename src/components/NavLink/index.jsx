import { useLocation, Link } from 'react-router-dom'
import styles from './style.module.css'

export default function NavLink({to,children}) {
    const { pathname } = useLocation()
    const active = to === pathname
    return (
        <Link className={ active ? styles.active : to === "/admin" ? styles.linkAdmin :styles.link } to={to}>
        {children}
        </Link>
    )
} 