import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function About() {
    return (
        <>
        <Head>
            <title>About Us</title>
            <meta name="author" content="MDIA 2109" />
            <meta property="og:title" content="Assignment #1 - About Us Page" />
            <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={styles.aboutMain}>
            <nav className={styles.navbar}>
                <img src='/icons/menu-icon.png'/>
                <img src='/icons/graduation-hat.png'/>
            </nav>
            <div>
                <h1 className={styles.aboutUsTitles}><span>About Us</span></h1>
                <p></p>
                <p></p>
                <p></p>
                <h3></h3>
                <p></p>
                <h2></h2>
                <p></p>
                <p></p>
                <h2></h2>
                <p></p>
                <h1>Department</h1>
            </div>
            <img className={styles.carouselArrows} src='/icons/leftArrow.png'/>
            <img className={styles.carouselArrows} src='/icons/rightArrow.png'/>
            <div id='carouselImage' 
                style={{
                    height: "200px", 
                    backgroundRepeat: "no-repeat", 
                    backgroundSize: "cover",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "40px 0px"
                }}>  
            </div>
            <div id='testOnImageHere' 
                style={{
                    backgroundColor: "rgba(16, 46, 53, 0.5)",
                    padding: "10px",
                    margin: "0px 50px"
                }}>
            </div>
            <ul>
                <li>Applied & Natural Sciences</li>
                <li>Business & Media</li>
                <li>Computing & IT</li>
                <li>Engineerin</li>
                <li>Health Sciences</li>
                <li>Trades & Apprenticeships</li>
            </ul>
            <a>
                <span>
                    <img/>
                    <img/>
                </span>
            </a>
        </main>
        </>
    )
}
