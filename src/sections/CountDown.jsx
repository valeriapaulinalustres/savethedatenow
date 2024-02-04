import clockFrame from "../assets/img/marcoDelicado.png";
import { RiDoubleQuotesL } from "react-icons/ri";
import { RiDoubleQuotesR } from "react-icons/ri";
import styles from '../styles/CountDown.module.css'
import { useState } from "react";
import moment from "moment";
import borderFlower from "../assets/img/florBorde.png";

function CountDown() {

    const [days, setDays] = useState();
    const [months, setMonths] = useState();
    const [hours, setHours] = useState();
    const [minutes, setMinutes] = useState();
    const [seconds, setSeconds] = useState();
  
    setInterval(myCallback, 1000);
  
    function myCallback() {
      let now = moment();
  
      let birthday = moment("April 12th, 2024 21:00:00", "MMM-DD-YYYY HH:mm:ss");
      //console.log(now.format('MMM-DD HH:mm:ss'), birthday.format('MMM-DD HH:mm:ss'))
  
      //console.log(moment.duration(birthday - now)._data)
      setMonths(moment.duration(birthday - now)._data.months);
      setDays(moment.duration(birthday - now)._data.days);
      setHours(moment.duration(birthday - now)._data.hours);
      setMinutes(moment.duration(birthday - now)._data.minutes);
      setSeconds(moment.duration(birthday - now)._data.seconds);
    }

  return (
    <section className={styles.countDown}>
    <div className={styles.textContainer}>
      <RiDoubleQuotesL className={styles.comillas} />
      <p className={styles.invitationText}>
        Te espero para que podamos compartir juntos una noche mágica que
        será inolvidable
      </p>
      <RiDoubleQuotesR className={styles.comillas} />
    </div>
    <div className={styles.timeLeftTitleContainer}>

    <h4 className={styles.timeLeftTitle}>Falta:</h4>
    </div>
    <div className={styles.clockFrameContainer}>
      <img src={clockFrame} className={styles.frame} alt='clock'/>
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
    {/* <img src={borderFlower} className={styles.borderFlower} alt='flower'></img> */}
  </section>

  )
}

export default CountDown