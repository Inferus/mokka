



import Image from 'next/image'
import { useState } from 'react'
import logo from '../img/white_cat.svg'
import close from '../img/close.svg'
import styles from '../styles/Home.module.css'
export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    const menuHandler = ()=> {
        setIsOpen(!isOpen)
      }

  return (
    <header  className={styles.header}>
      <div className={isOpen ? styles.menu_open : styles.menu}>
        <div onClick={menuHandler} className={styles.cross}><Image  width={60} src={close} alt="Cross" /></div>
<ul  className={styles.menu__list} >
          <li >
            <a className={styles.nav__link} href="#">Home</a></li>
          <li><a className={styles.nav__link} href="#">About</a></li>
          <li><a className={styles.nav__link} href="#">Contact</a></li>
          </ul>
</div>
        <div className={styles.container}>        
        <nav className={styles.header__nav} >
        <a href="#"><Image width={70} height={70} src={logo}></Image></a>
<div onClick={menuHandler} className={styles.burger}>

</div>


          <ul  className={styles.header__menu} >
          <li >
            <a className={styles.nav__link} href="#">Home</a></li>
          <li><a className={styles.nav__link} href="#">About</a></li>
          <li><a className={styles.nav__link} href="#">Contact</a></li>
          </ul>
        </nav>
        </div>
      </header>
  )
}
