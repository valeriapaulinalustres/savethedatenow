import styles from "../styles/Photos.module.css";
import borderFlower from "../assets/img/floresLavanda.png";
import photo from "../assets/img/DSC_6106.jpg";
import photo2 from "../assets/img/DSC_6284.jpg";
import photo3 from "../assets/img/DSC_6271.jpg";
import photo4 from "../assets/img/DSC_6223.jpg";

function Photos() {
  return (
    <section className={styles.wood}>
      <div className={styles.title}>Mis 15 años</div>
      <div className={styles.photoBigContainer}>
        <div className={styles.photoGroupContainer}>
          <div className={styles.photoContainer}>
            <img src={photo} className={styles.imgInContainer} alt="beach"></img>
          </div>
          <div className={styles.photoContainer}>
            <img src={photo2} className={styles.imgInContainer}></img>
          </div>
        </div>
        <div className={styles.photoGroupContainer}>
          <div className={styles.photoContainer}>
            <img src={photo3} className={styles.imgInContainer}></img>
          </div>
          <div className={styles.photoContainer}>
            <img src={photo4} className={styles.imgInContainer}></img>
          </div>
        </div>
      </div>

      <img src={borderFlower} className={styles.borderFlower}></img>
      <img src={borderFlower} className={styles.borderFlower2}></img>
      <img src={borderFlower} className={styles.borderFlower3}></img>
      <img src={borderFlower} className={styles.borderFlower4}></img>

      {/* <img src={beach} className={styles.smallPicture1}></img> */}
    </section>
  );
}

export default Photos;
