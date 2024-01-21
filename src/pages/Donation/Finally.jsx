import styles from './finally.module.css'
import { useNavigate } from 'react-router-dom'
import imgURL from '../../asset/image1.png'
import { ButtonLarge } from '../../components/Button'
import HomeIcon from '../../components/Icons/Home'

export default function Finally() {
    const navigate = useNavigate()
    const handleCLick = () => {
        navigate('/')
    }

  return (
    <main className={styles.containerSection}>
        <img className={styles.img} src={imgURL} alt="" />
        <h4 className={styles.head}>Muchas gracias por tu donación, Dios te bendiga</h4>
        <ButtonLarge onClick={handleCLick} style={{marginTop: "10px", width: "160px"}}>
            <HomeIcon width={20} height={20} fill="#fff" style={{marginRight: "8px"}}/>
            Volver al menu
        </ButtonLarge>
    </main>
  )
}
