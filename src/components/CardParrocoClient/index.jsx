import { useNavigate } from 'react-router-dom'
import styles from './style.module.css'
import { ButtonLarge } from '../Button'
import CalendaryIcon from '../Icons/Calendary'

export default function EventCardUser({data}){
    const dateObject = new Date()
    const navigate = useNavigate()

    let newDescription = null
    if(data?.description.length > 20){
      newDescription = `${data?.description.slice(0,20)}...`
    } else{
      newDescription = data?.description
    }
    
    return (
    <div className={styles.cardParrocoClient}>
      <picture className={styles.imgContainer}>
        <img src={data.imageURL} alt="" />
      </picture>
      <div className={styles.info}>
        <h1 className={styles.title}>{data.name}</h1>
        <div className={styles.containerTextInfo}>
          <CalendaryIcon width={20} height={20} fill="#8d8d8d"/>
          <h4>{dateObject.toLocaleDateString("en", data.create_at)}</h4>
        </div>
        <span className={styles.decription}>{newDescription}</span>
        <div className={styles.containerButton}>
          <ButtonLarge onClick={() => navigate(`/parroco/${data.id}`)}>
            Ver Informacion
          </ButtonLarge>
        </div>
      </div>
    </div>)
}