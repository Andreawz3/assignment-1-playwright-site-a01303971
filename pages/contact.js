import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import { useState } from 'react'

export default function About() {

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
            <title>Contact Us</title>
            <meta name="author" content="MDIA 2109" />
            <meta property="og:title" content="Assignment #1 - Contact Us Page" />
            <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <main className={styles.contactMain}>
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
            <div>
                <h1 className={styles.contactUsTitles}>Contact Us</h1>
            </div>
            <div className={styles.letsChatText}>
                <p>Want to discuss? Lets chat!</p>
            </div>
            <div className={styles.userInputInfo}>
                <form>
                    <fieldset>
                        <table>
                            <thead className={styles.userFullName}>
                                <tr>
                                    <td>First Name:</td>
                                    <td><input id='firstName' placeholder='First Name Here'></input></td> 
                                </tr>
                                <tr>
                                    <td>Last Name:</td>
                                    <td><input id='lastName' placeholder='Last Name Here'></input></td>
                                </tr>
                            </thead>
                            <thead className={styles.userEmail}>
                                <tr>
                                    <td>Email:</td>
                                    <td><input id='email' placeholder='Email Here'></input></td>
                                </tr>
                            </thead>
                        </table>
                    </fieldset>
                </form>
            </div>
            <a href="/about" className={styles.upwardArrow}>
                <img src='/icons/upwardArrow.png'/>
            </a>
        </main>
        </>
    )
}