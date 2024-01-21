import {ButtonIcon} from '../Button'
import styles from './style.module.css'
import PencilIcon from '../Icons/Pencil'
import CloseIcon from '../Icons/Close'
import EyeIcon from '../Icons/Eye'
import { useMutation } from '@apollo/client'
import { DELETE_EVENT } from '../../graphql/event/mutation'
import { FormUpdateEvent } from '../FormEvent'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal'
import { useState } from 'react'

export default function EventCard({data = {},refetch}){
  const navigate = useNavigate()
  const [deleteEvent] = useMutation(DELETE_EVENT)
  const [show,setShow] = useState(false)

    const handleClose = () => () => {
      deleteEvent({ variables: {
        id: data.id
      } }).then((_) => {
        refetch()
      })
    }

    return(
    <div className={styles.cardEvent}>
        <div className={styles.infoEvent}>
          <h1 className={styles.title}>{data.title}</h1>
          <h4 className={styles.date}>{data.date}</h4>
        </div>
        <div className={styles.containerButton}>
            <ButtonIcon onClick={() => navigate(`/event/${data.id}`)}>
              <EyeIcon />
            </ButtonIcon>
            <ButtonIcon onClick={handleClose()}>
              <CloseIcon />
            </ButtonIcon>
        </div>

        {
          show && <Modal onClose={() => setShow(false)} title={"Editar Evento"}>
            <FormUpdateEvent data={data} refetch={refetch} onCloseModal={() => setShow(false)}/>
          </Modal> 
        }
      </div>
    )
}