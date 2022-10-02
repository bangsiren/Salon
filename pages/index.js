import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import Products from '../Components/Products/Products'
import Footer from '../Components/Footer/Footer'
export default function Home() {
  return (
    <div className={styles.container}>
    
      <Navbar />
      <Banner />
      <div className={styles.Products}>
         <h2 className={styles.productHeading}>
               Prace Your Order And Come At the Available Time 
         </h2>
         <Products className={styles.menuCardImage} />
      </div>
 
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
             <h3 className={`${styles.vertigoLogo}}`}>Ava's Salon</h3>
          </span>
        </a>
      </footer>
    </div>
  )
}
