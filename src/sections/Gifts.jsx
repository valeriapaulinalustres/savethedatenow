import Button from '../components/Button'
import Gift from '../components/gift/Gift'
import styles from '../styles/Gifts.module.css'

function Gifts() {

const cbu = 'CBU'

  return (
    <section className={styles.giftsContainer}>
<h2>Regalo</h2>
<Gift />

<p>Ayudame a hacer realidad mi sueño</p>
<Button text={cbu}/>
    </section>
  )
}

export default Gifts