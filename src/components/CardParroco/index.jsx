import { ButtonIcon } from '../Button'
import EyeIcon from '../Icons/Eye'
import CloseIcon from '../Icons/Close'
import PencilIcon from '../Icons/Pencil'
import styles from './style.module.css'
import { useMutation } from '@apollo/client'
import { useNavigate } from 'react-router-dom'
import { DELETE_PARROCO } from '../../graphql/parroco/mutation'
import { useState } from 'react'
import Modal from '../Modal'
import { FormUpdateParroco } from '../FormParroco'

export default function CardParroco({parroco,refetch}){
    const [deleteParroco] = useMutation(DELETE_PARROCO)
    const navigate = useNavigate()
    const [showModal,setShowModal] = useState(false)

    const handleClose = () => {
      deleteParroco({ variables: { id: parroco.id } }).then((res) =>{
        refetch()
      })
    }
  
    const handleFinally = () => {
        refetch()
        setShowModal(false)
    }

    return(
      <div className={styles.card}>
          <div className={styles.info}>
            <h1 className={styles.title}>{parroco?.name}</h1>
          </div>
          <div className={styles.containerButton}>
              <ButtonIcon onClick={() => navigate(`/parroco/${parroco?.id}`)}>
                <EyeIcon />
              </ButtonIcon>
              <ButtonIcon onClick={handleClose}>
                <CloseIcon />
              </ButtonIcon>
          </div>
          {
            showModal && (
                <Modal onClose={() => setShowModal(false)} title={"Editar Parroco"}>
                    <FormUpdateParroco idParroco={parroco.id} type={parroco.type} onFinally={handleFinally}/>
                </Modal>
            )
          }
      </div>
    )
  }