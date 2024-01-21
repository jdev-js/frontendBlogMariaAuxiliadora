import styles from './style.module.css'

export default function DropZone({onChangeState,value}) {
    const handleFDrop = e => {
        e.preventDefault()
        const DroppendFiles = Array.from(e.dataTransfer.files)
        const reader = new FileReader()
    
        reader.onload = function(e){
            onChangeState(e.target.result)
        }
        reader.readAsDataURL(DroppendFiles[0])
    }

    const handleFileInputChange = e => {
        const selectedFiles = Array.from(e.target.files)
        const reader = new FileReader()
    
        reader.onload = function(e){
        onChangeState(e.target.result)
        }
        reader.readAsDataURL(selectedFiles[0])
    }


  return (
    <>
    {
        value != null
            ? (<div className={styles.imgContainer}>
                <button 
                onClick={() => { 
                    onChangeState(null)
                }} 
                className={styles.buttonCLoseImg}>X</button>
                <img src={value} alt="" />
            </div> )
            : <div 
            onDragOver={(e) => e.preventDefault()}
            className={styles.fileDropArea}
            onDrop={handleFDrop}
            >
                <input 
                style={{ display: "none" }}
                onChange={handleFileInputChange}
                type='file' 
                id='file-input' 
                />
                <label htmlFor='file-input' className={styles.fileInputLabel}>
                    Arrastra y suelta archivos aqui o haz click para selecionar archivos
                </label>
        
            </div>
    }
    </>
  )
}
