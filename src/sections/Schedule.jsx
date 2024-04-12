import { useState } from "react";
import Button from "../components/Button";
import Brindis from "../components/brindis/Brindis";
import styles from "../styles/Schedule.module.css";
import ModalWindow from "../components/ModalWindow";

function Schedule() {
  const [map, setMap] = useState(false);

  const howToArriveText = "Cómo llegar";
  const confirmArrival = "Confirmar Asistencia";

  function handleClickMap() {
    setMap(true);
  }

  function handleCloseMap() {
    setMap(false);
  }

  return (
    <section className={styles.schedule}>
      {/* <div className={styles.divisor}></div> */}
      <div className={styles.scheduleTitle}>Agendá la Fiesta:</div>
      <Brindis />
      <h3 className={styles.subtitle}>Fecha</h3>
      <p className={styles.text}>Viernes 12 de abril de 2024 a las 21:00 hs</p>

      <h3 className={styles.subtitle}>Lugar</h3>
      <p className={styles.text}>Cassano Eventos</p>
      <p className={styles.text}>Río Negro 1270, El Palomar</p>
      <a href="https://www.google.com/maps/place/DAR,+R%C3%ADo+Negro+1270,+B1685+El+Palomar,+Provincia+de+Buenos+Aires/@-34.615663,-58.5856481,17z/data=!3m1!4b1!4m6!3m5!1s0x95bcb869f8d2d70f:0x634aed80593af51a!8m2!3d-34.615663!4d-58.5830732!16s%2Fg%2F11c5dv35zp?entry=ttu" target="_blank" className={styles.href} rel="noreferrer">

      <Button text={howToArriveText} func={handleClickMap} />
</a>
      <p className={styles.text}>Te espero para compartir conmigo</p>
      <a
        className={styles.ahref}
        rel="noreferrer"
        target="_blank"
        href="https://docs.google.com/forms/d/e/1FAIpQLSfXX6TBGKTkphoNBnpKJxfoc0r64YHGP9uFepNZ4T_XBL7ymg/viewform?usp=sf_link"
      >
        <Button text={confirmArrival}></Button>
      </a>

      {map && <ModalWindow close={handleCloseMap} />}
    </section>
  );
}

export default Schedule;
