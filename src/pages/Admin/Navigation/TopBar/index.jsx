import styles from './style.module.css'
import { useNavigate } from 'react-router-dom' 

export default function TopBar() {
  const navigate = useNavigate()
  const logout = () => {
    globalThis.localStorage.clear()
    navigate('/')
  }
  return (
    <div className={styles.containerTopBar}>
      <span className={styles.textLogout} onClick={logout}>Logout</span>
    </div>
  )
}
