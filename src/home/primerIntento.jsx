import styles from "../styles/Home.module.css";
import mainPhoto from "../assets/img/mainPhoto.jpg";
import wood from "../assets/img/madera.jpg";
import room from "../assets/img/salon.jpg";
import clockFrame from "../assets/img/guirnaldaFloralRosa.avif";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import moment from "moment";
import { useState } from "react";

function Home() {
  const [days, setDays] = useState();
  const [months, setMonths] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  setInterval(myCallback, 1000);

  function myCallback() {
    let now = moment();

    let birthday = moment("April 7th, 2024 21:00:00", "MMM-DD-YYYY HH:mm:ss");
    //console.log(now.format('MMM-DD HH:mm:ss'), birthday.format('MMM-DD HH:mm:ss'))

    //console.log(moment.duration(birthday - now)._data)
    setMonths(moment.duration(birthday - now)._data.months);
    setDays(moment.duration(birthday - now)._data.days);
    setHours(moment.duration(birthday - now)._data.hours);
    setMinutes(moment.duration(birthday - now)._data.minutes);
    setSeconds(moment.duration(birthday - now)._data.seconds);
  }

  return (
    <div className={styles.container}>
      <section className={styles.firstSectionContainer}>
        <div className={styles.mainPicture}>
          <img src={mainPhoto}></img>
        </div>
        <div className={styles.titlesFirstSection}>
          <h1 className={styles.h1}>Clara</h1>
          <h2 className={styles.h2}>Mis quince años</h2>
          <h3 className={styles.h3}>13.4.24</h3>
          <IoIosArrowDown className={styles.arrowIcon} />
        </div>
      </section>

      <section className={styles.secondSectionContainer}>
        <div className={styles.textContainer}>
          <RiDoubleQuotesL className={styles.comillas} />

          <p className={styles.invitationText}>
            Te espero para que podamos compartir juntos una noche mágica que
            será inolvidable
          </p>
          <RiDoubleQuotesR className={styles.comillas} />
        </div>

        <h4 className={styles.falta}>Falta:</h4>

        <div className={styles.clockFrameContainer}>
          <img src={clockFrame} className={styles.frame} />
          <div className={styles.clockContainer}>
            <div className={styles.clockColumn}>
              <div>{days}</div>
              <div>Días</div>
            </div>
            <div className={styles.clockColumn}>
              <div>{hours}</div>
              <div>Hs</div>
            </div>
            <div className={styles.clockColumn}>
              <div>{minutes}</div>
              <div>Min</div>
            </div>
            <div className={styles.clockColumn}>
              <div>{seconds}</div>
              <div>Seg</div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.thirdSectionContainer}>
        <div className={styles.woodContainer}>
          <img src={wood} className={styles.wood}></img>
        </div>
        <div className={styles.thirdSectionChild}>
          <div className={styles.titleThirdSection}>Agendá la fecha</div>
          <h3>7 de Abril de 2024, 21 hs</h3>
          <h2>El lugar</h2>
          <h3>Salón Emperador</h3>
          <h4>Av. Rivadavia 12876, Ramos Mejía</h4>
          <button className={styles.button}>Cómo llegar</button>

          <div className={styles.roomContainer}>
            <img src={room} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
