import { useState } from "react";
import Button from "../components/Button";

import DiscPlayer from "../components/discPlayer/DiscPlayer";
import Dress from "../components/dress/Dress";
import Suit from "../components/suit/Suit";
import styles from "../styles/PartyDetails.module.css";
import ModalWindowDress from "../components/ModalWindowDress";

function PartyDetails() {
  const [dressCode, setDressCode] = useState(false);

  const textMusic = "Elegir canciones";
  const dress = "Ver";

  function handleOpenDressCode() {
    setDressCode(true);
  }

  function handleCloseDressCode() {
    setDressCode(false);
  }

  return (
    <section className={styles.partyDetailsContainer}>
      <div className={styles.textContainer}>
        <div className={styles.title}>La Fiesta</div>
        <p>Hagamos una fiesta soñada</p>
      </div>
      <div className={styles.partyDetailsSubcontainer}>
        <div className={styles.classContainer}>
          <p className={styles.cardTitle}>Vestimenta</p>
          <div className={styles.dressSuitContainer}>
            <Dress />
            <Suit />
          </div>
          <p className={styles.text}>Sugerencias para tu vestuario</p>
          <Button text={dress} func={handleOpenDressCode} />
        </div>
        {/* <Confetti /> */}
        <div className={styles.classContainer}>
          <div className={styles.cardTitle}>Música</div>
          <DiscPlayer />
          <p className={styles.text}>
            ¿Qué música te gustaría escuchar en la fiesta?
          </p>
          <a
            target="_blank"
            rel="noreferrer"
            className={styles.ahref}
            href="https://docs.google.com/forms/d/e/1FAIpQLSfGnylb6dwnof5LFXG-4RfEci4tmx1d_covALNcbrTOU7Fimg/viewform?usp=sf_link"
          >
            <Button text={textMusic} />
          </a>
        </div>
      </div>
      {dressCode && <ModalWindowDress close={handleCloseDressCode} />}
    </section>
  );
}

export default PartyDetails;
