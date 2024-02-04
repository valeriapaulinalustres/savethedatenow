import styles from "../styles/Final.module.css";
import Gift from "../components/gift/Gift"

function Final() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.h1Final}>Clara</h1>
        <h2 className={styles.h2Final}>Mis XV años</h2>
        <h3 className={styles.h3Final}>12.4.24</h3>
      </div>
      <div className={styles.gift}>

      <Gift />
      </div>
      <div className={styles.linksContainer}>
        <a
          className={styles.ahref}
          rel="noreferrer"
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSfXX6TBGKTkphoNBnpKJxfoc0r64YHGP9uFepNZ4T_XBL7ymg/viewform?usp=sf_link"
        >
          <p className={styles.link}>Confirmar Asistencia</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          className={styles.ahref}
          href="https://docs.google.com/forms/d/e/1FAIpQLSfGnylb6dwnof5LFXG-4RfEci4tmx1d_covALNcbrTOU7Fimg/viewform?usp=sf_link"
        >
          <p className={styles.link}>Sugerir canción</p>
        </a>
      </div>
    </section>
  );
}

export default Final;
