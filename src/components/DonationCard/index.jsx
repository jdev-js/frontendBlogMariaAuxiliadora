import styles from './style.module.css'
import CloseIcon from '../Icons/Close'
import { ButtonIcon } from '../Button'
import { useMutation } from '@apollo/client'
import { DELETE_DONATION } from '../../graphql/donation/mutation'

export default function DonationCard({data,refetch}) {
  const [deleteDonation] = useMutation(DELETE_DONATION)
  const dateObject = new Date()

  const handleClick = () => {
    deleteDonation().then((res) => {
      if(res.data?.deleteDonation === true) refetch()
    })
  }

  return (
    <div className={styles.cardDonation}>
        <div>
          <h4 className={styles.nameDonation}>{data?.nameDonation}</h4>
          <h4 className={styles.create_at}>{ dateObject.toLocaleDateString("en",data?.create_at)}</h4>
        </div>
        <ButtonIcon onClick={handleClick}>
            <CloseIcon />
        </ButtonIcon>
  </div>
  )
}
