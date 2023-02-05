import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>Home</title>
        <meta name="author" content="MDIA 2109" />
        <meta property="og:title" content="Assignment #1 - Home Page" />
        <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
        <link rel="icon" href="/favicon.png" />
    </Head>
    <main className={styles.homeMain}>
      <nav className={styles.navbar}>
        <img src='/icons/menu-icon.png'/>
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
