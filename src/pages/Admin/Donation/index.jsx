import { ButtonGhostLarge } from '../../../components/Button'
import DonationCard from '../../../components/DonationCard'
import Loading from '../../../components/Loading'
import styles from './style.module.css'
import { GET_DONATIONS } from '../../../graphql/donation/query'
import { DELETES_DONATIONS } from '../../../graphql/donation/mutation'
import { useQuery, useMutation } from '@apollo/client'

export default function DonationAdmin() {
  const [deletesDonations] = useMutation(DELETES_DONATIONS)
  const { data, loading, refetch } = useQuery(GET_DONATIONS)

  const handleClick = () => {
    deletesDonations().then((res) => {
      if(res?.data?.deletesDonations === true){
        refetch()
      }
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className={styles.containerPage}>
      <div className={styles.containerButton}>
        <ButtonGhostLarge onClick={handleClick}>Eliminar Todo</ButtonGhostLarge>
      </div>
      <div className={styles.result}>
        {
          loading 
            ? <Loading />
            : data?.getDonations?.map((donation) => <DonationCard key={donation?.id} data={donation} refetch={refetch} />)
        }
      </div>
    </div>
  )
}
