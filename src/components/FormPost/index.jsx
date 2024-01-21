import { useMutation, useQuery } from '@apollo/client'
import { GET_POST } from '../../graphql/posts/query'
import { CREATE_POST, UPDATE_POST } from '../../graphql/posts/mutation'
import { ButtonLarge } from '../Button'
import Input,{ AreaInput } from '../Input'
import DropZone from '../DropZone'
import { useState, useEffect } from 'react'
import styles from './style.module.css'

export const FormCreatePost = ({typePost,onFinally,refetch}) => {
    const [createPost] = useMutation(CREATE_POST)
    const [title,setTitle] = useState("")
    const [description,setDescription] = useState("")
    const [body,setBody] = useState("")
    const [date,setDate] = useState("")
    const [imageURL, setImageURL] = useState(null)
  
    const onSubmit = (e) => {
      e.preventDefault()
      if(title != "" && description != "" && date != "" && body != "" && imageURL != ""){
        createPost({ variables: {
          "input": {title,description,body,imageURL,typePost}
        }})
        .then(response => {
            onFinally()
            refetch()
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
                  Body*
                  </span>
                  <AreaInput value={body} onChange={setBody}/>
                </div>
              </div>
              <DropZone value={imageURL} onChangeState={setImageURL}/>
              <ButtonLarge onClick={onSubmit}>Crear Post</ButtonLarge>
            </form>
    )
}

export function FormUpdatePost({idPost,onFinally,refetch}) {
  const [title,setTitle] = useState("")
  const [description,setDescription] = useState("")
  const [body,setBody] = useState("")
  const [imageURL,setImageURL] = useState(null)
  const [updatePost] = useMutation(UPDATE_POST) 
  const { data: dataPost } = useQuery(GET_POST,{ variables: { id: idPost } })

  const handleUpdate = e => {
    e.preventDefault()
    const inputs = { title,description,imageURL,body }
    if(title != "" && description != "" && imageURL != ""){
      updatePost({variables: {input: { ...inputs }, id: idPost}}).then((res) => {
        refetch()
        onFinally()
      })
    }
  }

    useEffect(() => {
      setTitle(dataPost?.getPost?.title)
      setImageURL(dataPost?.getPost?.imageURL)
      setDescription(dataPost?.getPost?.description)
      setBody(dataPost?.getPost?.body)
    },[dataPost])

  return(
    <form className={styles.formContainer}>
    <div className={styles.containerInputs}>
      <div className={styles.inputContainer}>
        <span>
        Title*
        </span>
        <Input value={title} onChange={setTitle} small={true} placeholder='Ingrese el Name, por favor' />
      </div>
      <div className={styles.inputContainer}>
        <span>
        Description*
        </span>
        <Input value={description} onChange={setDescription} small={true} placeholder='Ingrese el descricion, por favor'/>
      </div>
      <div className={styles.inputContainer}>
        <span>
        Body*
        </span>
        <AreaInput value={body} onChange={setBody}/>
      </div>
      </div>
    <DropZone value={imageURL} onChangeState={setImageURL}/>
    <ButtonLarge onClick={handleUpdate}>Editar Post</ButtonLarge>
  </form>
  )
}