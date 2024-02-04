import styles from '../styles/LastPage.module.css'
import Button from '../components/Button'

function LastPage() {

const upload = 'Subí tus fotos'

  return (
    <section className={styles.lastPage}>
      <h2>Ayudame a guardar recuerdos</h2>

      <p>Subí tus fotos de la fiesta y divertite con las fotos subidas por los demás invitados</p>
<Button text={upload}/>

<div styles={styles.finalGreeting}>
   <h2>Clara</h2> 
   <h3>Mis quince años</h3>
</div>

        </section>
  )
}

export default LastPage