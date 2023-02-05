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
        <main>
            <div>
                <h1></h1>
                <h1></h1>
            </div>
            <div>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
            </div>
            <div>
                <h2></h2>
                <h2></h2>
            </div>
            <div>
                <h3></h3>
            </div>
            <img src='/icons/leftArrow.png'/>
            <img src='/icons/rightArrow.png'/>
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
