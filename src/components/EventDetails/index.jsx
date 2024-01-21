import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_EVENT } from '../../graphql/event/query'
import styles from './style.module.css'
import Loading from '../Loading'
import ClockIcon from '../Icons/Clock'
import CalendaryIcon from '../Icons/Calendary'


export default function EventDetails() {
    const { id } = useParams()
    const { data,loading } = useQuery(GET_EVENT, { variables: {
      "id": id
    } })

  return (
    <>
    { loading 
      ? <Loading />
      :(
      <div className={styles.containerPage}>
       <div className={styles.infoBlog}>

        <h1 className={styles.titleBlog}>{data?.getEvent?.title}</h1>
        <div className={styles.containerTextInfo}>
          <CalendaryIcon width={20} height={20} fill={"#8d8d8d"} />
          <h4>{data?.getEvent?.date}</h4>
        </div>
        <div className={styles.containerTextInfo}>
          <ClockIcon width={20} height={20} fill={"#8d8d8d"}/>
          <h4>{data?.getEvent?.hours}</h4>
        </div>

      </div>
      <picture className={styles.imageContainer}>
        <img src={data?.getEvent?.imageURL}/>
      </picture>
      <div className={styles.descriptionBlog}>
        <span>{data?.getEvent.description}</span>
      </div>
    </div> )
    }
    </>
    
  )
}
