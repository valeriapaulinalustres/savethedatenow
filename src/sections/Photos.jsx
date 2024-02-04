import styles from '../styles/Photos.module.css'
import borderFlower from "../assets/img/floresLavanda.png";
import beach from "../assets/img/beach.jpg";
import Confetti from '../components/confetti/Confetti'

function Photos() {
  return (
 
    <section className={styles.wood}>
      <div className={styles.title}>Mis 15 años</div>
    <div className={styles.photoBigContainer}>
      <div className={styles.photoGroupContainer}>
        <div className={styles.photoContainer}>
          <img src={beach} className={styles.imgInContainer}></img>
        </div>
        <div className={styles.photoContainer}>
          <img src={beach} className={styles.imgInContainer}></img>
        </div>
      </div>
      <div className={styles.photoGroupContainer}>
        <div className={styles.photoContainer}>
          <img src={beach} className={styles.imgInContainer}></img>
        </div>
        <div className={styles.photoContainer}>
          <img src={beach} className={styles.imgInContainer}></img>
        </div>
      </div>
    </div>

    <img src={borderFlower} className={styles.borderFlower}></img>
    <img src={borderFlower} className={styles.borderFlower2}></img>
    <img src={borderFlower} className={styles.borderFlower3}></img>
    <img src={borderFlower} className={styles.borderFlower4}></img>

    {/* <img src={beach} className={styles.smallPicture1}></img> */}

  
  </section>
  )
}

export default Photos