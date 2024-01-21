import Header from '../../components/Header'
import Search from '../../components/Search'
import CardPostClient from '../../components/CardPostClient'
import { useState } from 'react'
import { useQuery,useLazyQuery } from '@apollo/client'
import { GET_POSTS, SEARCH_POSTS } from '.././../graphql/posts/query'
import { TYPE_POST } from '../../constans'
import Loading from '../../components/Loading'
import styles from './style.module.css'
import { NotArticle } from '../../components/WarnigArticle'

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

export default function ArticlePage() {
  const [search,setSearch] = useState("") 
  const {data: dataPost, loading} = useQuery(GET_POSTS,{ variables: { typePost: TYPE_POST.ARTICLE } })
  const [searchPost,{data: dataSearchPost, loading: loadingSearchPost}] = useLazyQuery(SEARCH_POSTS)

  const handleSearch = () => {
    searchPost({ variables: { "search": search, "typePost": TYPE_POST.ARTICLE } })
  }


  return (
    <>
    <Header />
    <main className={styles.mainContainer}>
    <Search setSearch={setSearch} onSearch={handleSearch}/>
      {
        dataSearchPost
          ? loadingSearchPost ? <Loading /> : <ResultSearch data={dataSearchPost?.searchPost}/>
          : loading ? <Loading /> : dataPost?.getPosts?.length > 0 ? dataPost?.getPosts?.map((article) => <CardPostClient key={article.id} data={article}/>) : <NotArticle />
      }
    </main>
    </>
  )
}
 