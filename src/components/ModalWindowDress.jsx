import styles from "../styles/ModalWindowDress.module.css";
import { IoClose } from "react-icons/io5";
import Dress from "../components/dress/Dress";
import Suit from "./suit/Suit";
import Sneaker from "./sneaker/Sneaker";
import Shoe from "./shoe/Shoe";

function ModalWindowDress({ close }) {
  return (
    <div className={styles.modalActivity}>
      <div className={styles.windowActivity}>
        <div className={styles.title}>
          Dress Code 
        </div>
        <p className={styles.code}>Elegante</p>
        <div className={styles.close}>
          <IoClose className={styles.icon} onClick={close} />
        </div>
        <div className={styles.container}>
          <div className={styles.iconContainer}>
            <Dress />
            <Suit />
            <Shoe />
            <Sneaker />
          </div>
          {/* <p className={styles.text}>Trae un accesorio sorprendente para el Baile Carioca. ¡El más ingenioso tiene premio!</p> */}
        </div>
      </div>
    </div>
  );
}

export default ModalWindowDress;

// style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", opacity: 0, zIndex:-1}}
