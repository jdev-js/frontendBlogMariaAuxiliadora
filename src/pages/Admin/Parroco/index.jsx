import { ButtonGhostLarge, ButtonLarge } from '../../../components/Button'
import styles from './style.module.css'
import { GET_PARROCOS } from '../../../graphql/parroco/query' 
import { useQuery } from '@apollo/client'
import Loading from '../../../components/Loading'
import WarnigParroco from '../../../components/WarnigParroco'
import { FormCreateParroco } from '../../../components/FormParroco'
import { useState } from 'react'
import Modal from '../../../components/Modal'
import CardParroco from '../../../components/CardParroco'

const TYPE_PARROCO = {
  ACT: "ACT",
  ANT: "ANT"
}

export default function ParrocoAdmin() {
  const {data, loading,refetch} = useQuery(GET_PARROCOS)
  const [typeParroco,setTypeParroco] = useState("")
  const [showModal,setShowModal] = useState(false)

  const handleFinally = () => {
    refetch()
    setShowModal(false)
  }

  const handleShowModal = (type) => () => {
    setTypeParroco(type)
    setShowModal(true)
  }

  return (
    <div className={styles.containerPage}>
      <div className={styles.containerButton}>
        <ButtonGhostLarge onClick={handleShowModal(TYPE_PARROCO.ANT)}>Parroco Anterior</ButtonGhostLarge>
        <ButtonLarge onClick={handleShowModal(TYPE_PARROCO.ACT)}>Parroco Actual</ButtonLarge>
      </div> 
      {
          loading === true
            ? <Loading />
            : data?.getParrocos?.length > 0
              ? (
              <div className={styles.result}>
                <div className={styles.containerParroco}>
                  <h4>Parroco Actual: </h4>
                  {
                    data?.getParrocos?.filter((parroco => parroco.type === "ACT")).map((parroco) => <CardParroco key={parroco.id} parroco={parroco} refetch={refetch}/>)
                  }
                </div>
                <div  className={styles.containerParroco}>
                  <h4>Parroco Anterior:</h4>
                  {
                    data?.getParrocos?.filter((parroco => parroco.type === "ANT")).map((parroco) => <CardParroco key={parroco.id} parroco={parroco} refetch={refetch}/>)
                  }
                </div>
              </div>)
              : <WarnigParroco />
      }
      {
        showModal && (
        <Modal onClose={() => setShowModal(false)}>
            { 
            typeParroco === TYPE_PARROCO.ACT 
              ? <FormCreateParroco type={TYPE_PARROCO.ACT} onFinally={handleFinally}/>
              : <FormCreateParroco type={TYPE_PARROCO.ANT} onFinally={handleFinally}/>
            }
        </Modal>)
      }
    </div>
  )
}
