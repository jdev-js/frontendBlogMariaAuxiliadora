import styles from './style.module.css'

export default function Input({value,placeholder,onChange,small,style,type}) {
  return (
    <>
    {
      small === true
      ? <input type={type} style={style} className={styles.inputSmall} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} value={value}/>
      : <input type={type} style={style} className={styles.input} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} value={value}/> 
    }
    </>
  )
}


export const AreaInput = ({onChange,value}) => {
  return(
    <textarea value={value} className={styles.areaInput} onChange={(e) => onChange(e.target.value)} placeholder='Ingresa el body de el Post'/>
  )
}
