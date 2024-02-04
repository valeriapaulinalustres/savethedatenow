import Button from "../components/Button";
import Brindis from "../components/brindis/Brindis";
import styles from "../styles/Schedule.module.css";

function Schedule() {
  const howToArriveText = "Como llegar";
  const confirmArrival = "Confirmar Asistencia";
  return (
    <section className={styles.schedule}>
      {/* <div className={styles.divisor}></div> */}
      <div className={styles.scheduleTitle}>Agendá la Fiesta:</div>
      <p>
        Te espero el viernes 12 de abril de 2024 a las 21:00 hs en el Salón Cassano Eventos
      </p>
      <Brindis />
      <h3>Dirección</h3>

      <p>Río Negro 1270, El Palomar</p>
      <Button text={howToArriveText} />
      <p>Espero que puedas venir a compartir conmigo</p>
      <Button text={confirmArrival}></Button>
    </section>
  );
}

export default Schedule;
