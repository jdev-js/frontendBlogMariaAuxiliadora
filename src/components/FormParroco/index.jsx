import DropZone from '../DropZone'
import { useMutation, useQuery } from '@apollo/client'
import { GET_PARROCO } from '../../graphql/parroco/query'
import { UPDATE_PARROCO, CREATE_PARROCO } from '../../graphql/parroco/mutation'
import { ButtonLarge } from '../Button'
import Input from '../Input'
import styles from './styles.module.css'
import { useState,useEffect } from 'react'

export function FormUpdateParroco({type,idParroco,onFinally}) {
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [imageURL,setImageURL] = useState("")
    const [updateParroco] = useMutation(UPDATE_PARROCO)
    const {data} = useQuery(GET_PARROCO, { variables: { id: idParroco } })

    const handleUpdate = (e) => {
        e.preventDefault()
        const inputs = { name, description,imageURL, type }
        if(name != "" && description != "" && imageURL != ""){
            updateParroco({variables: { input: { ...inputs }, id: idParroco }}).then(res => {
                onFinally()
            })
        }
    }

    useEffect(() => {
        setName(data?.getParroco?.name)
        setDescription(data?.getParroco?.description)
        setImageURL(data?.getParroco?.imageURL)
    },[data])

    return(
      <form className={styles.formContainer}>
      <div className={styles.containerInputs}>
        <div className={styles.inputContainer}>
          <span>
          Name*
          </span>
          <Input value={name} onChange={setName} small={true} placeholder='Ingrese el Name, por favor' />
        </div>
        <div className={styles.inputContainer}>
          <span>
          Description*
          </span>
          <Input value={description} onChange={setDescription} small={true} placeholder='Ingrese el descricion, por favor'/>
        </div>
      </div>
      <DropZone value={imageURL} onChangeState={setImageURL}/>
      <ButtonLarge onClick={handleUpdate}>Editar Parroco</ButtonLarge>
    </form>
    )
}

export function FormCreateParroco({type,onFinally}){
    const [name,setName] = useState("")
    const [description,setDescription] = useState("")
    const [imageURL,setImageURL] = useState(null)
    const [createParroco] = useMutation(CREATE_PARROCO)

    const handleCreate = (e) => {
        e.preventDefault()
        const inputs = { name, description,imageURL, type: type }
        if(name != "" && description != "" && imageURL != ""){
            createParroco({variables: { input: { ...inputs } }}).then(res => {
                onFinally()
            })
        }
    }

    return(
      <form className={styles.formContainer}>
      <div className={styles.containerInputs}>
        <div className={styles.inputContainer}>
          <span>
          Name*
          </span>
          <Input value={name} onChange={setName} small={true} placeholder='Ingrese el Name, por favor' />
        </div>
        <div className={styles.inputContainer}>
          <span>
          Description*
          </span>
          <Input value={description} onChange={setDescription} small={true} placeholder='Ingrese el descricion, por favor'/>
        </div>
      </div>
      <DropZone value={imageURL} onChangeState={setImageURL}/>
      <ButtonLarge onClick={handleCreate}>Crear Parroco</ButtonLarge>
    </form>
    )
}