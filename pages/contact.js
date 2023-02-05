import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function About() {
    return (
        <>
        <Head>
            <title>Contact Us</title>
            <meta name="author" content="MDIA 2109" />
            <meta property="og:title" content="Assignment #1 - Contact Us Page" />
            <meta property="og:description" content="BCIT Digital Design and Development Diploma" />
            <link rel="icon" href="/favicon.png" />
        </Head>
        <main>
            <div>
                <h1></h1>
            </div>
            <div>
                <p></p>
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