import styles from "./auth.module.css"
import { ButtonLarge } from "../../components/Button"
import CheckIcon from "../../components/Icons/Check"
import ArrowLeftIcon from "../../components/Icons/ArrowLeft"
import { Link } from "react-router-dom"
import Input from "../../components/Input"
import Logo from "../../asset/logo1.png"
import { useState } from "react"
import { useMutation } from "@apollo/client"
import { CREATE_DONATION } from "../../graphql/donation/mutation"
import Finally from "./Finally"

export default function Auth() {
  const [name, setName] = useState("")
  const [error, setError] = useState(false)
  const [check, setCheck] = useState(false)
  const [createDonation] = useMutation(CREATE_DONATION)

  const handleClick = () => {
    if (error != true) {
      createDonation({ variables: { input: { nameDonation: name } } })
        .then((res) => {
          if (res?.data?.createDonation === true) {
            setCheck(true)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }

  const handleChange = (value) => {
    if (value != "") setError(false)
    if (value == "") setError(true)
    setName(value)
  }

  return (
    <>
      {check === true ? (
        <Finally />
      ) : (
        <section className={styles.containerSection}>
          <div className={styles.sectionHeader}>
            <Link className={styles.arrowIcon} to='/'>
              <ArrowLeftIcon fill='#bcbcbc' width={25} height={25} />
            </Link>
            <img src={Logo} className={styles.img} />
            <span className={styles.head}>Quien Eres?</span>
          </div>

          <div className={styles.containerForm}>
            <span className={styles.spanInput}>Tu nombre*</span>
            <Input
              value={name}
              onChange={handleChange}
              style={{ border: error ? "2px solid #fc447e" : "none" }}
              placeholder={"Escribe su nombre, por favor"}
            />
            <ButtonLarge
              onClick={handleClick}
              style={{ marginTop: "20px", marginBottom: "0px" }}
            >
              <CheckIcon
                width={20}
                height={20}
                fill={"#ffff"}
                style={{ marginRight: 5 }}
              />
              Finalizado
            </ButtonLarge>
          </div>

          <div className={styles.containerWarnig}>
            <span className={styles.textWarning}>
              Beneficios de tu donación a la iglesia:
            </span>
            <span className={styles.textDescriptionWarnig}>
              <span className={styles.ptsList}></span> Compra de recursos
              Eucaristicos, como: Hostias, vino, ofrendas.
            </span>
            <span className={styles.textDescriptionWarnig}>
              <span className={styles.ptsList}></span> Almuerzos para niños de
              bajo recursos y/o fundaciones.
            </span>
          </div>
        </section>
      )}
    </>
  )
}
