import {ButtonIcon} from '../Button'
import styles from './style.module.css'
import PencilIcon from '../Icons/Pencil'
import CloseIcon from '../Icons/Close'
import EyeIcon from '../Icons/Eye'
import { useMutation } from '@apollo/client'
import { DELETE_POST } from '../../graphql/posts/mutation'
import { FormUpdatePost } from '../FormPost'
import { useNavigate } from 'react-router-dom'
import Modal from '../Modal'
import { useState } from 'react'

export default function CardPost({data = {},refetch}){
  const navigate = useNavigate()
  const [deletePost] = useMutation(DELETE_POST)
  const [show,setShow] = useState(false)

    const handleClose = () => () => {
      deletePost({ variables: {
        id: data.id
      } }).then((_) => {
        refetch()
      })
    }

    const handleFinally = () => {
      refetch()
      setShow(false)
    }

    return(
    <div className={styles.card}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <h4 className={styles.date}>{data.date}</h4>
        </div>
        <div className={styles.containerButton}>
            <ButtonIcon onClick={() => navigate(`/post/${data.id}`)}>
              <EyeIcon />
            </ButtonIcon>
            <ButtonIcon onClick={handleClose()}>
              <CloseIcon />
            </ButtonIcon>
        </div>

        {
          show && <Modal onClose={() => setShow(false)} title={"Editar Post"}>
            <FormUpdatePost data={data} idPost={data.id} refetch={refetch} onFinally={handleFinally} onCloseModal={() => setShow(false)}/>
          </Modal> 
        }
      </div>
    )
}