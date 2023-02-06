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
            <div>
                <h1 className={styles.contactUsTitles}>Contact Us</h1>
            </div>
            <div className={styles.letsChatText}>
                <p>Want to discuss? Lets chat!</p>
            </div>
            <div>
                <form>
                    <fieldset>
                        <table>
                            <thead>
                                <tr></tr>
                                <tr></tr>
                            </thead>
                            <thead></thead>
                        </table>
                    </fieldset>
                </form>
                <input id='firstName' placeholder='First Name Here'></input>
                <input id='lastName'></input>
                <input id='email'></input>
            </div>
        </main>
        </>
    )
}