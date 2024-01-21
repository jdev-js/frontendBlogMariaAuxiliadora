import Header from '../../components/Header'
import styles from './style.module.css'
import { useQuery } from '@apollo/client'
import { GET_PARROCOS } from '../../graphql/parroco/query'
import CardParrocoClient from '../../components/CardParrocoClient'
import Loading from '../../components/Loading'
import { NotParroco } from '../../components/WarnigParroco'

function ResultParroco({data}){
  return(
    <>
      {
        data.map((parroco) => <CardParrocoClient data={parroco} key={parroco.id}/>)
      }
    </>
  )
}

export default function ParrocoPage() {
  const {data,loading} = useQuery(GET_PARROCOS)

  return (
    <>
    <Header />
    <main className={styles.containerPage}>
    <div className={styles.result}>
      {
        loading 
        ? <Loading />
        : data?.getParrocos?.length > 0
          ? <ResultParroco data={data?.getParrocos}/>
          : <NotParroco />
      }
    </div>
    </main>
    </>
  )
}
