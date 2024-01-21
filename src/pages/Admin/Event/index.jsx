import { ButtonLarge } from '../../../components/Button'
import Modal from '../../../components/Modal'
import styles from './style.module.css'
import {useState} from 'react'
import { GET_EVENTS } from '../../../graphql/event/query'
import EventCard from '../../../components/EventCard'
import { FormCreateEvent } from '../../../components/FormEvent'
import { useQuery } from '@apollo/client'
import NotEvent from '../../../components/WarnigEvent'
import Loading from '../../../components/Loading'

export default function EventAdmin() {
  const [showModal,setShowModal] = useState(false)
  const { data, loading, refetch } = useQuery(GET_EVENTS)
  return (
    <div className={styles.containerPage}>
      <div className={styles.buttonContainer}>
        <ButtonLarge onClick={() => setShowModal(!showModal)}>Nuevo Evento</ButtonLarge>
      </div>
      <div className={styles.result}>
        {loading 
          ? <Loading /> 
          : (data?.getEvents.length > 0) 
            ? (data?.getEvents.map((item,index) => <EventCard refetch={refetch} data={item} key={index}/>) )
            : <NotEvent />
        }
      </div>
      {
        showModal && <Modal title={"Nuevo Evento"} onClose={() => setShowModal(!showModal)}>
            <FormCreateEvent onCloseModal={() => setShowModal(!showModal)} refetch={refetch}/>
        </Modal>
      }
    </div>
  )
}
