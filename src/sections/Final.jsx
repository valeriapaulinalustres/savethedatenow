import styles from "../styles/Final.module.css";

function Final() {
  return (
    <section className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.h1Final}>Clara</h1>
        <h2 className={styles.h2Final}>Mis quince años</h2>
        <h3 className={styles.h3Final}>12.4.24</h3>
      </div>
      <div className={styles.linksContainer}>
        <p className={styles.link}>Confirmar Asistencia</p>
        <p className={styles.link}>Sugerir canción</p>
      </div>
    </section>
  );
}

export default Final;
