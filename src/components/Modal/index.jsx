import styles from './style.module.css'
import { ButtonIcon } from '../Button'
import CloseIcon from '../Icons/Close'
export default function Modal({onClose: handleClick,title,children}) {
  return (
    <div className={styles.modalBackground}>
        <div className={styles.modalContainer}>
          <div className={styles.toolsContainer}>
            <span className={styles.titleModal}>{title}</span>
            <div className={styles.containerButton}>
              <ButtonIcon onClick={handleClick} >
                <CloseIcon width={12} height={12}/>
              </ButtonIcon>
            </div>
          </div>
          <div className={styles.content}>
            {children}
          </div>
        </div>
    </div>
  )
}
