import Header from '../../components/Header'
import { useQuery } from '@apollo/client'
import Loading from '../../components/Loading'
import { GET_EVENTS } from '../../graphql/event/query'
import styles from './style.module.css'
import { ButtonLarge } from '../../components/Button'
import ClockIcon from '../../components/Icons/Clock'
import CalendaryIcon from '../../components/Icons/Calendary'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { NotEvent } from '../../components/WarnigEvent'

const EventCardUser = ({data}) => {
  const dateObject = new Date()
  const navigate = useNavigate()

  return (
  <div className={styles.cardEventClient}>
    <picture className={styles.imgContainer}>
      <img src={data.imageURL} alt="" />
    </picture>
    <div className={styles.infoEvent}>
      <h1 className={styles.title}>{data.title}</h1>
      <div className={styles.containerTextInfo}>
        <CalendaryIcon width={20} height={20} fill="#8d8d8d"/>
        <h4>{dateObject.toLocaleDateString("en", data.date)}</h4>
      </div>
      <div className={styles.containerTextInfo}>
        <ClockIcon width={20} height={20} fill="#8d8d8d"/>
        <h4 className={styles.date}>{data.hours}</h4>
      </div>
      <div className={styles.containerButton}>
        <ButtonLarge onClick={() => navigate(`/event/${data.id}`)}>
          Ver Informacion
        </ButtonLarge>
      </div>
    </div>
  </div>)
}

export default function EventPage() {
  const { data, loading } = useQuery(GET_EVENTS, { pollInterval: 6000 })

  return (
    <>
    <Header />
    <div className={styles.result}>
        { 
          data?.getEvents?.length > 0
            ? loading 
              ? <Loading />
              : (
                data?.getEvents?.map((event,index) => <EventCardUser data={event} key={index}/>)
              )
            : <NotEvent />
        }
    </div>
    </>
  )
}
