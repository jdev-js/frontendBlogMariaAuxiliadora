import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_PARROCO } from '../../graphql/parroco/query'
import styles from './style.module.css'
import Loading from '../Loading'
import CalendaryIcon from '../Icons/Calendary'
import UserNurseIcon from '../Icons/UserNurse'


export default function ParrocoDetails() {
    const { id } = useParams()
    const { data,loading } = useQuery(GET_PARROCO, { variables: {
      "id": id
    } })
    const dateObject = new Date()

  return (
    <>
    { loading 
      ? <Loading />
      :(
      <div className={styles.containerPage}>
       <div className={styles.infoBlog}>
        <h1 className={styles.titleBlog}>{data?.getParroco?.name}</h1>
        <div className={styles.containerTextInfo}>
          <CalendaryIcon width={20} height={20} fill={"#8d8d8d"} />
          <h4>{ dateObject.toLocaleDateString("en", data?.getParroco?.create_at)}</h4>
        </div>
        <div className={styles.containerTextInfo}>
          <UserNurseIcon width={20} height={20} fill={"#8d8d8d"} />
          <h4>{ data?.getParroco?.type === "ACT" ? "Parroco Actual" : "Parroco Anterior" }</h4>
        </div>
      </div>
      <picture className={styles.imageContainer}>
        <img src={data?.getParroco?.imageURL}/>
      </picture>
      <div className={styles.descriptionBlog}>
        <span>{data?.getParroco?.description}</span>
      </div>
    </div> )
    }
    </>
    
  )
}
