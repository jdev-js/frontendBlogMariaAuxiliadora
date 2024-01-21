import styles from './style.module.css'
import Input from '../Input'
import { ButtonSmall } from '../Button'
import { CREATE_EVENT, UPDATE_EVENT } from '../../graphql/event/mutation'
import { GET_EVENT } from '../../graphql/event/query'
import { useMutation, useQuery } from '@apollo/client'
import DropZone from '../DropZone'
import { useState, useEffect } from 'react'

export function FormCreateEvent({onCloseModal,refetch}){
    const [createEvent] = useMutation(CREATE_EVENT)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [date,setDate] = useState("")
    const [hours,setHours] = useState("")
    const [imageURL, setImageURL] = useState(null)
  
    const onSubmit = (e) => {
      e.preventDefault()
      if(title != "" && description != "" && date != "" && imageURL != ""){

        createEvent({ variables: {
          "input": {title,description,date,imageURL,hours}
        }})
        .then(response => {
          if(response.data.createEvent === true){
            onCloseModal()
            refetch()
          }
        })
        .catch(error => {
          console.log(error)
        })
      }
    }
    return(
        <form className={styles.formContainer}>
              <div className={styles.containerInputs}>
                <div className={styles.inputContainer}>
                  <span>
                  Title*
                  </span>
                  <Input value={title} onChange={setTitle} small={true} placeholder='Ingrese el titulo, por favor'/>
                </div>
                <div className={styles.inputContainer}>
                  <span>
                  Description*
                  </span>
                  <Input value={description} onChange={setDescription} small={true} placeholder='Ingrese el description, por favor'/>
                </div>
                <div className={styles.inputContainer}>
                  <span>
                  Date*
                  </span>
                  <Input type={"date"} value={date} onChange={setDate} small={true}/>
                </div>
                <div className={styles.inputContainer}>
                  <span>
                  Hours*
                  </span>
                  <Input value={hours} onChange={setHours} small={true} placeholder='0:00pm'/>
                </div>
              </div>
              
              <DropZone value={imageURL} onChangeState={setImageURL}/>
              <ButtonSmall onClick={onSubmit}>Crear Post</ButtonSmall>
            </form>
    )
}

export function FormUpdateEvent({onCloseModal,refetch,data}){
  const [date,setDate] = useState("")
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [hours,setHours] = useState("")
  const [imageURL,setImageURL] = useState(null)
  const [updateEvent] = useMutation(UPDATE_EVENT) 
  const { data: dataEvent } = useQuery(GET_EVENT,{ variables: { id: data.id } })

  function handleUpdate(e){
    e.preventDefault()
    const inputs = { date,title,description,imageURL,hours }
    if(title != "" && description != "" && date != "" && imageURL != ""){
    updateEvent({variables: {input: { ...inputs}, "id": data.id}}).then((res) => {
        onCloseModal()
        refetch()
    })
    }
  }
    useEffect(() => {
      setTitle(dataEvent?.getEvent?.title)
      setImageURL(dataEvent?.getEvent?.imageURL)
      setDescription(dataEvent?.getEvent?.description)
      setDate(dataEvent?.getEvent?.date)
      setHours(dataEvent?.getEvent?.hours)
    },[dataEvent])
  
  return(
    <form className={styles.formContainer}>
    <div className={styles.containerInputs}>
      <div className={styles.inputContainer}>
        <span>
        Title*
        </span>
        <Input value={title} onChange={setTitle} small={true} placeholder='Ingrese el titulo, por favor' />
      </div>
      <div className={styles.inputContainer}>
        <span>
        Description*
        </span>
        <Input value={description} onChange={setDescription} small={true} placeholder='Ingrese el descricion, por favor'/>
      </div>
      <div className={styles.inputContainer}>
        <span>
        Date*
        </span>
        <Input type={"date"} value={date} onChange={setDate} small={true}/>
      </div>
      <div className={styles.inputContainer}>
        <span>
        Hours*
        </span>
        <Input value={hours} onChange={setHours} small={true} placeholder='0:00pm'/>
      </div>
    </div>
    <DropZone value={imageURL} onChangeState={setImageURL}/>
    <ButtonSmall onClick={handleUpdate}>Editar Post</ButtonSmall>
  </form>
  )
}
