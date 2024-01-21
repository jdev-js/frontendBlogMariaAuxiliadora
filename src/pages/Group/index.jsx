import Header from '../../components/Header'
import Search from '../../components/Search'
import styles from './style.module.css'
import { useState } from 'react'
import { SEARCH_POSTS, GET_POSTS } from '../../graphql/posts/query'
import { useQuery, useLazyQuery } from '@apollo/client'
import { TYPE_POST } from '../../constans'
import CardPostClient from '../../components/CardPostClient'
import Loading from '../../components/Loading'
import { NotGroup } from '../../components/WarnigGroup'

const ResultSearch = ({data}) => {
  return(
    <div className={styles.searchContainer}>
      <h2>Resultado de la busqueda: </h2>
      <div className={styles.result}>
        {
          data?.map((article,index) => <CardPostClient key={index} data={article}/>)
        }
      </div>
    </div>
  )
}
const ResultPost = ({data}) => {
  return(
      <div className={styles.result}>
        {
          data.map((article) => <CardPostClient key={article.id} data={article}/>)
        }
      </div>
  )
}

export default function GroupPage() {
  const [search,setSearch] = useState("")
  const {data: dataPost, loading} = useQuery(GET_POSTS,{ variables: { typePost: TYPE_POST.GROUP } })
  const [searchPost,{data: dataSearchPost, loading: loadingSearchPost}] = useLazyQuery(SEARCH_POSTS)

  const handleSearch = () => {
    searchPost({ variables: { "search": search, "typePost": TYPE_POST.GROUP } })
  }
  return (
    <>
    <Header />
    <main className={styles.mainContainer}>
      <Search onSearch={handleSearch} setSearch={setSearch}/>
      {
        dataSearchPost
          ? loadingSearchPost ? <Loading /> : <ResultSearch data={dataSearchPost?.searchPost}/>
          : loading ? <Loading /> : dataPost?.getPosts?.length > 0 ? <ResultPost data={dataPost?.getPosts}/> : <NotGroup />
      }
    </main>
    </>
  )
}
