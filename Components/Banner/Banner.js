import React, { useEffect, useRef } from "react";
import Image from 'next/image';
import Button from "../Button/Button";
import styles from './Banner.module.css'
// import img from '../../assets/images/testbanner 1.png'
import { FaAppleAlt } from 'react-icons/fa';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Typed from 'typed.js';
import animate from 'animate.css';
function Banner() {
   const el = useRef(null);
   useEffect(() => {
      const typed = new Typed(el.current, {
         strings: ['Priority'],
         startDelay: 300,
         typeSpeed: 150,
         backDelay: 2000,
         smartBackspace: false,
         showCursor: false,
         loop: true
      })
   });
   return (
      <div className={styles.bannerSecction}>
         <div className={styles.bannerBox}>
            <div className={styles.bannerContent}>
               <div>
                  <button className={`${styles.button} ${'animate__animated animate__pulse'}`} > Welcome to Ava's Salon </button>
               </div>
               <h2 className={`${styles.bannerTitle} ${'animate__animated animate__zoomInDown'}`}>Your Satisfaction Is Our   <span className={styles.lifestyle} ref={el}></span></h2>
               <p className={`${styles.bannerDescription} ${'animate__animated animate__slideInDown'}`}>Healthy switcher chefs do all the prep work, like peeding,
                  chopping & marinating, so you can eath a helthy meal.</p>
               <div>
                  <button className={`${styles.secondBtn} ${'animate__animated animate__pulse'}`}> Get In contact  <AiOutlineArrowRight className={styles.bannerSecondBtnIcon} /> </button>
               </div>
            </div>
            <div className={`${styles.bannerImgSection} ${'animate__animated animate__zoomIn '}`}>
            </div>
         </div>
      </div>
   );
}

export default Banner;