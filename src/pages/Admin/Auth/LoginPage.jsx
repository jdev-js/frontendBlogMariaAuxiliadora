import {Link} from 'react-router-dom'
import Logo from '../../../asset/logo1.png'
import styles from './style.module.css'
import Input from '../../../components/Input'
import { ButtonLarge } from '../../../components/Button'
import { useMutation } from "@apollo/client"
import { LOGIN_ADMIN } from '../../../graphql/admin/mutation'
import { useState } from 'react'
import ArrowLeftIcon from '../../../components/Icons/ArrowLeft'
import { useNavigate } from 'react-router-dom'

export default function AdminPage() {
  const [LOGIN] = useMutation(LOGIN_ADMIN)
  const navigate = useNavigate()
  const [username,setUsername] = useState("")
  const [password,setPassword] = useState("")

  const onSubmitForm = () => {
    LOGIN({ variables: {
      "input": {
        "username": username,
        "password": password,
      }
    }}).then(response => {
      globalThis.localStorage.setItem('admin',JSON.stringify(response.data.loginAdmin))
      navigate("/admin/")
    }).catch(err => {
      console.log(err)
    })
  }

  return (
    <section className={styles.containerSection}>
      <div className={styles.sectionHeader}>
        <Link className={styles.arrowIcon} to="/">
          <ArrowLeftIcon fill="#bcbcbc" width={30} height={30} />
        </Link>
        <img src={Logo} className={styles.img}/>
        <span className={styles.head}>Por favor, Inicia Sesion</span>
      </div>
      <label className={styles.spanInput}>Usuario*</label>
      <Input value={username} placeholder={'Escribe tu usuario, por favor'} onChange={setUsername} />
      <label className={styles.spanInput} >Contraseña*:</label>
      <Input value={password} placeholder={'Escribe tu contraseña, por favor'} onChange={setPassword} />
      <ButtonLarge onClick={onSubmitForm}>Listo</ButtonLarge>
      <span className={styles.textWarning}>Advertencia:</span>
      <span className={styles.textDescriptionWarnig}><span className={styles.ptsList}></span> Solo el administrador tiene acceso a la cuenta</span>
    </section>
  )
}
