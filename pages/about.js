import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'
import data from '../data/word.json'

export default function About() {

    const [ information, setInformation ] = useState([...data]);
    console.log(data);

    // Dropdown Menu

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
            <title>About Us</title>
            <meta name="author" content="MDIA 2109" />
            <meta property="og:title" content="Assignment #1 - About Us Page" />
            <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={styles.aboutMain}>
            <nav className={styles.navbar}>
                <div>
                    <img onClick={() => OpenDropdownMenu()} src='/icons/menu-icon.png'/>
                    <div id='displayMenu' className={styles.dropdownMenu}>
                        <span className={styles.closeDropdownMenu} onClick={() => CloseDropdownMenu()}>x</span>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="../about">About</a></li>
                            <li><a href="../contact">Contact</a></li>
                        </ul>
                    </div>
                </div>       
                <img src='/icons/graduation-hat.png'/>
            </nav>
            <div className={styles.aboutPageText}>
                <h1 className={styles.aboutUsTitles}><span>About Us</span></h1>
                <p className={styles.firstParagraph}>We are proud to deliver an education that goes betond textbooks and classrooms.</p>
                <p className={styles.aboutPageTextMargin}>
                    Our students gain technical skills, real-world experience, and problem-solving ability
                    needed to embrace complexity and lead innovation in a rapidly changing workforce.
                </p>
                <p className={styles.aboutPageTextMargin}>Though close collaboration with industry, our network of alumni and partners continue to achieve global success</p>
                <h3 className={styles.aboutPageTextMargin}>information Sessions</h3>
                <p className={styles.aboutPageTextMargin}>
                    Information sessions are a simple way to figure out next step along your career path. 
                    Learn more about the programs that interest you.
                </p>
                <h2 className={styles.aboutPageTextMargin}>Big Info</h2>
                <p className={styles.aboutPageTextMargin}>
                    Big Info is the largest program expo and information session at BCIT. It's your chance to find out about all our programs - 
                    from business, computing, and health to engineering, trades, and applied sciences.
                </p>
                <p className={styles.aboutPageTextMargin}>If you missed our fall event the next Big Info is scheduled to return on February 15, 2023</p>
                <h2 className={styles.aboutPageTextMargin}>Campus Tours</h2>
                <p className={styles.aboutPageTextMargin}>Tours run weekdays September to May, on our Burnaby campus. see BCIT in person and get a taste of campus life.</p>    
                <a href="/" className={styles.upwardArrow}>
                    <span>
                        <img src='/icons/upwardArrow.png'/>
                    </span>
                </a>
                <a href="/contact" className={styles.downwardArrowAboutPage}>
                    <span>
                        <img src='/icons/downwardArrow.png'/>

                    </span>
                </a>     
                <div className={styles.displayCarouselImages}>
                        {information && information.map((info, index) => {
                            return(
                                <div id='carouselImage'
                                    className={ styles.carouselImagesDisplay }
                                    style={{
                                        height: "200px", 
                                        backgroundRepeat: "no-repeat", 
                                        backgroundSize: "cover",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        margin: "40px 0px"
                                    }}>                             
                                    <img className={styles.fade} src={info.img} />
                                    <div id='testOnImageHere' 
                                        className={styles.carouselImagesTest}
                                        style={{
                                        backgroundColor: "rgba(16, 46, 53, 0.5)",
                                        padding: "10px",
                                        margin: "0px 50px"
                                    }}>                       
                                        <h5>{info.value}</h5>
                                    </div>
                                </div>
                            )
                        })}                        
                    <div className={styles.carouselArrows}>
                        <img src='/icons/leftArrow.png' />
                        <img src='/icons/rightArrow.png'/>                     
                    </div>                     
                </div>
                <h1 className={styles.aboutUsTitles}><span>Department</span></h1>
                <ul className={styles.departmentList}>
                    <li>Applied & Natural Sciences</li>
                    <li>Business & Media</li>
                    <li>Computing & IT</li>
                    <li>Engineerin</li>
                    <li>Health Sciences</li>
                    <li>Trades & Apprenticeships</li>
                </ul>
            </div>
        </main>
        </>
    )
}
