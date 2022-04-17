import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

import Metatags from "../components/Metatags";

export default function Home() {
  return (<>
    {/* Load Metatags */}
    <Metatags/>

    {/* Main Site */}
    <header id={styles.header}>
      <h1 data-aos="fade-right" data-aos-duration="1000" data-aos-easing="ease-in-out">Fullstream Applications</h1>
      <h2 data-aos="fade-left" data-aos-delay="100" data-aos-duration="1000" data-aos-easing="ease-in-out">Applications with <span>real world</span> uses made by <span>young developers</span></h2>
    </header>
    <main id={styles.main}>
      <div id={styles.about}>
        <h2><span>About</span> Us</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
      <div id={styles.projects}>
        <h2>Our <span>Projects</span></h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </main>

    {/* Initialize AOS */}
    <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
    <script>
      AOS.init();
    </script>
  </>)
}
