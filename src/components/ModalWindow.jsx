import styles from "../styles/ModalWindow.module.css";
import { IoClose } from "react-icons/io5";
import Button from "./Button";

function ModalWindow({close}) {

  const map = "Ampliar Mapa"

  return (
    <div className={styles.modalActivity}>
      <div className={styles.windowActivity}>
        <div className={styles.title}>Cómo llegar</div>
        <div className={styles.close}>
          <IoClose className={styles.icon} onClick={close}/>
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.545094334144!2d-58.5856481244578!3d-34.615662972949934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb869f8d2d70f%3A0x634aed80593af51a!2sDAR%2C%20R%C3%ADo%20Negro%201270%2C%20B1685%20El%20Palomar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1707083460601!5m2!1ses!2sar"
          width="600"
          height="450"
          allowfullscreen=""
         title="map"
          referrerpolicy="no-referrer-when-downgrade"
    style={{border:"none"}}
        ></iframe>
        <a href="https://www.google.com/maps/place/DAR,+R%C3%ADo+Negro+1270,+B1685+El+Palomar,+Provincia+de+Buenos+Aires/@-34.615663,-58.5856481,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb869f8d2d70f:0x634aed80593af51a!8m2!3d-34.615663!4d-58.5830732!16s%2Fg%2F11c5dv35zp?entry=ttu" target="_blank" className={styles.href} rel="noreferrer">

        <Button text={map} />
        </a>
      </div>
    </div>
  );
}

export default ModalWindow;

// style={{position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none", opacity: 0, zIndex:-1}}
