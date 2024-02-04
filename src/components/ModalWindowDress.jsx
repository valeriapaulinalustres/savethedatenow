import styles from "../styles/ModalWindowDress.module.css";
import { IoClose } from "react-icons/io5";

function ModalWindowDress({close}) {
  return (
    <div className={styles.modalActivity}>
      <div className={styles.windowActivity}>
        <div className={styles.title}>Dress Code</div>
        <div className={styles.close}>
          <IoClose className={styles.icon} onClick={close}/>
        </div>
      <div className={styles.container}>

      </div>
      
      </div>
    </div>
  );
}

export default ModalWindowDress;

// style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", opacity: 0, zIndex:-1}}
