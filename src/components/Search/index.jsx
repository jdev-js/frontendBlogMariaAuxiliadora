import styles from './style.module.css'

export default function Search({setSearch,onSearch}){
    return(
        <div className={styles.inputContainer}>
            <input 
                onKeyDown={(e) => {
                    e.key === "Enter" 
                        ? onSearch()
                        : null
                }} 
                className={styles.searchInput} 
                onChange={(e) => setSearch(e.target.value)}
                placeholder={"Buscador...."} />
        </div>
    )
}