import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const OpenDropdownMenu = () => {
    var displayMenu = document.getElementById('displayMenu');
    displayMenu.style.display = "block"; 
  }

  const CloseDropdownMenu = () => {
    var displayMenu = document.getElementById('displayMenu');
    displayMenu.style.display = "none"; 
  }

  return (
    
    <>
    <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </Head>
    <main className={styles.homeMain}>
      <nav className={styles.navbar}>
        <div>
          <img onClick={() => OpenDropdownMenu()} src='/icons/menu-icon.png'/>
          <div id='displayMenu' className={styles.dropdownMenu}>
            <h1 className={styles.closeDropdownMenu} onClick={() => CloseDropdownMenu()}>x</h1>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="../about">About</a></li>
              <li><a href="../contact">Contact</a></li>
            </ul>
          </div>
        </div>       
        <img src='/icons/graduation-hat.png'/>
      </nav>
      <h1 className={styles.header}>An investment in knowledge pays the best interest.</h1>
      <p className={styles.paragraph}>
        Different than a college or university, the British Columbia Institute of Technology offers practical, 
        flexible, applied education with instructors who have direct, hands-on experience in their field.
      </p>
      <a href="../about" className={styles.moreAboutButton}>
        <button className={styles.buttonContactUs}>More About Us</button>
      </a>
      <a href="../contact" className={styles.contactUsButton}>
        <button className={styles.buttonContactUs}>Contact Us</button>
      </a>
      <a href="../about">
          <span>
              <img className={styles.downwardArrow} src='/icons/downwardArrow.png'/>
          </span>
      </a>
    </main>
    </>
  )
}
