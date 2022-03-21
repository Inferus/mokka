import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
export default function Home() {




  return (
    <div>
      <Head>
        <title>Mokka</title>
        <meta name="description" content="Mokka restaurant" />
       
      </Head>
  
  <Header/>
      
      <main className={styles.main}>
     
        <section className={styles.intro}>
          <div className={styles.greet}>
          <h1 className={styles.greet__main}> Mokka </h1>
          <h2 className={styles.greet__description}> the dining room </h2>
          <a href="#footer" className={styles.btn}>book table</a>
        </div>
        </section>

       
      </main>

      <footer id='footer' className={styles.footer}>
      <div className={styles.container}>
<form  className={styles.form}>
    <label className={styles.form__label} htmlFor="Name"> Name </label>
    <input className={styles.form__input} type="text" name="Name" />
    <label className={styles.form__label} htmlFor="Telephone"> Phone number</label>
    <input className={styles.form__input} type="text" name="Telephone" />
    <button className={styles.btn}>Book</button>
</form>

</div>
      </footer>
    </div>
  )
}
