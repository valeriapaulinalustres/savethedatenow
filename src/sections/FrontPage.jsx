import { IoIosArrowDown } from "react-icons/io";
import styles from '../styles/FrontPage.module.css'

function FrontPage() {
  return (
    <section className={styles.presentation}>
    <div className={styles.presentationTitle}>
      <h1 className={styles.h1}>Clara</h1>
      <h2 className={styles.h2}>Mis quince años</h2>
      <h3 className={styles.h3}>12.4.24</h3>
      <IoIosArrowDown className={styles.arrowIcon} />
    </div>
  </section>

  )
}

export default FrontPage