import { ButtonLarge } from '../../../components/Button'
import styles from './style.module.css'
import WarnigArticle from '../../../components/WarnigArticle'
import { TYPE_POST } from '../../../constans'
import { useState } from 'react'
import Modal from '../../../components/Modal'
import { FormCreatePost } from '../../../components/FormPost'
import CardPost from '../../../components/CardPost'
import { useQuery } from '@apollo/client'
import { GET_POSTS } from '../../../graphql/posts/query'
import Loading from '../../../components/Loading'

const ResultPost = ({data,refetch}) => {
  return(
    <div className={styles.result}>
      {
        data.map((post) => <CardPost refetch={refetch} data={post} key={post.id}/>)
      }
    </div>
  )
}

export default function Post() {
  const [showModal,setShowModal] = useState(false)
  const { data, loading, refetch } = useQuery(GET_POSTS, { variables: { typePost: TYPE_POST.ARTICLE } })
  return(
    <div className={styles.containerPage}>
      <div className={styles.containerButton}>
        <ButtonLarge onClick={() => setShowModal(true)}>Nuevo Articulo</ButtonLarge>
      </div> 

      {
        loading
          ? <Loading />
          : data?.getPosts?.length > 0
            ? <ResultPost refetch={refetch} data={data?.getPosts}/>
            : <WarnigArticle />
      }

      {
        showModal && (
          <Modal title={"Crear Post"} onClose={() => setShowModal(false)}>
            <FormCreatePost onFinally={() => setShowModal(false)} refetch={refetch} typePost={TYPE_POST.ARTICLE}/>
          </Modal>
        )
      }
    </div>
  )
}
