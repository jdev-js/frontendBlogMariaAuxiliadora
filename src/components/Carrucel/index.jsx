import "./carrucel.css"
import { ButtonLarge } from "../Button"
import DonationIcon from "../Icons/Donation"
import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import img1 from "../../asset/img3.jpg"

const images = [img1]

export default function Carrucel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const navigate = useNavigate()
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === images.length - 1 ? 0 : prevSlide + 1
    )
  }

  useEffect(() => {
    const interval = globalThis.setInterval(() => {
      nextSlide()
    }, 5000)
    return () => {
      clearInterval(interval)
    }
  }, [])

  return (
    <div className='carrucel-container'>
      <div className='slide-container'>
        {images.map((image, index) => {
          return (
            <div
              className={
                index === currentSlide
                  ? "slide active"
                  : index === currentSlide - 1 ||
                    (index === 0 && currentSlide === images.length - 1)
                  ? "slide prev"
                  : "slide next"
              }
              key={index}
            >
              {index === currentSlide && (
                <img src={image} alt={`Slide ${index}`} />
              )}
            </div>
          )
        })}
        <div className='info-carrucel'>
          <h4>Bienvenidos al portal de Maria Auxiliadora</h4>
          <h2>
            Ayudanos a manterner fundaciones. Dios te bendiga hoy y siempre
          </h2>
          <ButtonLarge onClick={() => navigate("/donation")}>
            <DonationIcon width={20} height={20} fill={"#ffff"} />
            Donación
          </ButtonLarge>
        </div>
      </div>
    </div>
  )
}
