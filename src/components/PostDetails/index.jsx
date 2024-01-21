import { useParams } from 'react-router-dom'
import { useQuery } from '@apollo/client'
import { GET_POST } from '../../graphql/posts/query'
import styles from './style.module.css'
import Loading from '../Loading'
import CalendaryIcon from '../Icons/Calendary'


export default function PostDetails() {
    const { id } = useParams()
    const { data,loading } = useQuery(GET_POST, { variables: {
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
        <h1 className={styles.titleBlog}>{data?.getPost?.title}</h1>
        <div className={styles.containerTextInfo}>
          <CalendaryIcon width={20} height={20} fill={"#8d8d8d"} />
          <h4>{ dateObject.toLocaleDateString("en", data?.getPost?.create_at)}</h4>
        </div>
      </div>
      <picture className={styles.imageContainer}>
        <img src={data?.getPost?.imageURL}/>
      </picture>
      <div className={styles.descriptionBlog}>
        <span>{data?.getPost?.body}</span>
      </div>
    </div> )
    }
    </>
    
  )
}
