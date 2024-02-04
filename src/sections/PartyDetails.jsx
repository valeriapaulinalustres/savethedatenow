import Button from "../components/Button";
import Confetti from "../components/confetti/Confetti";

import DiscPlayer from "../components/discPlayer/DiscPlayer";
import Dress from "../components/dress/Dress";
import Suit from "../components/suit/Suit";
import styles from "../styles/PartyDetails.module.css";

function PartyDetails() {
  const textMusic = "Elegir canciones";
  const dress = "Ver";

  return (
    <section className={styles.partyDetailsContainer}>
      <div className={styles.textContainer}>
        <div className={styles.title}>La Fiesta</div>
        <p>Hagamos una fiesta soñada</p>
      </div>
      <div className={styles.partyDetailsSubcontainer}>
        <div className={styles.classContainer}>
          <p className={styles.cardTitle}>Dress Code</p>
          <div className={styles.dressSuitContainer}>
            <Dress />
            <Suit />
          </div>
          <p>Sugerencias para tu vestuario</p>
          <Button text={dress} />
        </div>
        <Confetti />
        <div className={styles.classContainer}>
          <div className={styles.cardTitle}>Música</div>
          <DiscPlayer />
          <p>¿Qué música te gustaría escuchar en la fiesta?</p>
          <Button text={textMusic} />
        </div>
      </div>
    </section>
  );
}

export default PartyDetails;
