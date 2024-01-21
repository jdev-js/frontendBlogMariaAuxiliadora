import styles from "./style.module.css"
import ArrowLeftIcon from "../../components/Icons/ArrowLeft"
import { Link, useNavigate } from "react-router-dom"
import Logo from "../../asset/logo1.png"
import banescoIcon from "../../asset/IconBancos/banesco.png"
import bncIcon from "../../asset/IconBancos/bnc.png"
import mercantilIcon from "../../asset/IconBancos/mercantil.png"
import venezuelaIcon from "../../asset/IconBancos/venezuela.png"
import CardBanco from "../../components/CardBanco"
import { ButtonLarge } from "../../components/Button"
import Donation from "../../components/Icons/Donation"
import imgURL from "../../asset/img4.jpg"

const dateBancos = [
  {
    nameBanco: "Venezuela",
    size: { width: 30, height: 30 },
    margin: 0,
    srcIcon: venezuelaIcon,
    url: "https://www.bancodevenezuela.com/index.html",
  },
  {
    nameBanco: "Mercantil",
    size: { width: 22, height: 22 },
    margin: 4,
    srcIcon: mercantilIcon,
    url: "https://www.mercantilbanco.com/mercprod/index.html",
  },
  {
    nameBanco: "Banesco",
    size: { width: 30, height: 30 },
    margin: 4,
    srcIcon: banescoIcon,
    url: "https://www.banesco.com/",
  },
  {
    nameBanco: "BNC",
    size: { width: 30, height: 30 },
    margin: 4,
    srcIcon: bncIcon,
    url: "https://www.bncenlinea.com/",
  },
]

export default function DonationPage() {
  const navigate = useNavigate()

  return (
    <section className={styles.containerSection}>
      <div className={styles.sectionHeader}>
        <Link className={styles.arrowIcon} to='/'>
          <ArrowLeftIcon fill='#bcbcbc' width={25} height={25} />
        </Link>
        <img src={Logo} className={styles.img} />
        <span className={styles.head}>Aporta con un corazón humilde</span>
      </div>
      <div className={styles.listBancos}>
        {dateBancos.map((item, index) => (
          <CardBanco {...item} key={index} />
        ))}
      </div>
      <div className={styles.containerWarnig}>
        <picture className={styles.imgContainer}>
          <img src={imgURL} alt='' />
        </picture>
        <span className={styles.textWarning}>
          Beneficios de tu donación a la iglesia:
        </span>
        <span className={styles.textDescriptionWarnig}>
          <span className={styles.ptsList}></span> Compra de recursos
          Eucaristicos, como: Hostias, vino, ofrendas.
        </span>
        <span className={styles.textDescriptionWarnig}>
          <span className={styles.ptsList}></span> Almuerzos para niños de bajo
          recursos y/o fundaciones.
        </span>
        <span className={styles.textDescriptionWarnig}>
          <span className={styles.ptsList}></span> Mantenimiento del templo o
          casa parroquial.
        </span>
        <span className={styles.textDescriptionWarnig}>
          <span className={styles.ptsList}></span> Actividades religiosas
        </span>
        <ButtonLarge
          onClick={() => navigate("/donation/auth")}
          style={{ marginTop: "20px" }}
        >
          <Donation
            width={20}
            height={20}
            fill={"#ffff"}
            style={{ marginRight: 5 }}
          />
          Ya done
        </ButtonLarge>
      </div>
    </section>
  )
}
