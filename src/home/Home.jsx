import styles from "../styles/Home.module.css";
import Dress from "../components/dress/Dress";
import FrontPage from "../sections/FrontPage";
import CountDown from "../sections/CountDown";
import Schedule from "../sections/Schedule";
import Photos from "../sections/Photos";
import PartyDetails from "../sections/PartyDetails";
import Gifts from "../sections/Gifts";
import LastPage from "../sections/LastPage";
import Footer from "../sections/Footer";
import Final from "../sections/Final";

function Home() {
  return (
    <div className={styles.portada}>
      <div className={styles.parallax}></div>

      <FrontPage />
      <CountDown />
      <Schedule />
      <div className={styles.parallax2}></div>
      <Photos />
      <PartyDetails />
      <div className={styles.parallax3}></div>
      {/* <Gifts />
     <LastPage /> */}
     <Final />
<Footer />
    </div>
  );
}

export default Home;
