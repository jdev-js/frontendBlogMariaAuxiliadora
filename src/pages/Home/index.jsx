import Header from "../../components/Header"
import styles from "./style.module.css"
import imgSRC from "../../asset/img5.jpg"
import { useQuery } from "@apollo/client"
import { GET_PARROCOS } from "../../graphql/parroco/query"

export default function HomePage() {
  const { data, loading } = useQuery(GET_PARROCOS)

  const getParrocos = data?.getParrocos

  return (
    <>
      <Header />
      <main className={styles.mainContainer}>
        <section className={styles.card}>
          <div className={styles.img}>
            <img src={imgSRC} alt='Imagen de la parroquia' />
          </div>
          <div className={styles.info}>
            <h4>Historia</h4>
            <span>
              Todo comenzo en un galpón ubicado en el Sector 12 de
              Octubre,gracias a la iniciativa de la Señora Maritza y la
              coloboración de la comunidad.Este lugar fue elegido como sitio de
              reunión para las misas dominicales. Con el apoyo de las hermanas
              Salesianas. la comunidad crecio, y se decidio nombrarla Parroquia
              Maria Auxiliadora.
            </span>
          </div>
        </section>

        {getParrocos
          ?.filter((parroco) => parroco.type === "ACT")
          .map((parroco) => {
            return (
              <section key={parroco.id} className={styles.card}>
                <div className={styles.img}>
                  <img src={parroco.imageURL} alt='Imagen del parroco' />
                </div>
                <div className={styles.info}>
                  <h4>{parroco.name}</h4>
                  <h6 className={styles.parracoTime}>
                    {parroco.type === "ACT" ? "Parroco Actual" : null}
                  </h6>
                  <span>{parroco.description}</span>
                </div>
              </section>
            )
          })}
      </main>
      <footer>
        <div className={styles.containerRedSocial}>
          <span>Siguenos en: </span>
          <a
            style={{ display: "block", width: "26px", height: "26px" }}
            href='https://www.instagram.com/'
          >
            <svg
              width={25}
              style={{ marginLeft: "5px" }}
              height={25}
              viewBox='0 0 448 512'
            >
              <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
            </svg>
          </a>
        </div>
        <span>@Todos los Derechos reservado</span>
      </footer>
    </>
  )
}
