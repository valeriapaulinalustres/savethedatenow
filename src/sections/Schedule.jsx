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
      <Button text={howToArriveText} onClick={handleClickMap} />
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
