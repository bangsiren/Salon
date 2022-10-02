import React from 'react'
import styles from './Navbar.module.css'
import Button from '../Button/Button';
import Cart from '../Cart/Cart';
import { CgSearch } from 'react-icons/cg';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineMenu } from 'react-icons/ai';
import { ImCancelCircle } from 'react-icons/im';
import { RiSearchFill } from 'react-icons/ri';
import Link from "next/link";
import Image from 'next/image';
const navLinks = [
  {
    title: "Home",
    path: "/"
  },
  {
    title: "Contact",
    path: "/contact"
  },
  {
    title: "About",
    path: "/about"
  },
  {
    title: "Hair Styles",
    path: "/hairstyles"
  },
];
let logo = require('../../assets/images/avaLogo.png');

function Navbar({ isHome }) {

  let showNavHandler = () => {
    document.getElementById('menu').style.display = 'block'
  }
  let hidNavHandler = () => {
    console.log('hide nav')
    document.getElementById('menu').style.display = 'none';
  }
  let showSearchInput = () => {
    document.getElementById('search').style.display = 'block';

  }
  let hideSearchInput = () => {
    document.getElementById('search').style.display = 'none';
  }
  return (
    <div className={`${styles.navBg} ${ styles.navTransparent}`}>

      {/* ============= Mobile Section  ===============*/}

      <div id='menu' className={`${styles.mobileHeaderBg} ${'animate__animated animate__fadeInDown'}`}>
        <Button className={styles.mobileLoginBtn} />
        <ImCancelCircle className={styles.cancel} onClick={hidNavHandler} size={30} />
        <ul className={styles.mobileUl}>
          <Link href='/'>
            <li className={`${styles.dotSection}  ${styles.list}`}><a className={styles.aMobile}>Home</a><div className={styles.activeDotMobile}></div></li>
          </Link>
          <Link href='/about'>
            <li className={`${styles.linkesDropDownMobile}  ${styles.list}`}><a className={styles.aMobile} >About</a></li>
          </Link>
          <Link href='/contact'>
            <li className={`${styles.linkesDropDownMobile}  ${styles.list}`}><a className={styles.aMobile} >Contact </a></li>
          </Link>
          <Link href='/hairstyle'>
            <li className={styles.mobileList}><a className={styles.aMobile}>Hair Styles</a></li>
          </Link>
        </ul>
      </div>


      <div className={styles.nav}>
        <div >
          <Link href='/'>
          <Link href='/'>
            <h3 className={`${styles.vertigoLogo} ${!isHome ? styles.white : ''}`}>Ava's Salon</h3>
          </Link>
          </Link>
        </div>
        <div>
          <ul className={styles.ul}>
            <Link href='/'>
              <li className={`${styles.dotSection} ${styles.list}`}><a className={`${styles.a} ${!isHome ? styles.white : ''}`}>Home</a><div className={`${styles.activeDot} ${isHome ? styles.activeDotBg : styles.activeDotBgWhite}`}></div></li>
            </Link>
            <Link href='/about'>
              <li className={`${styles.linkesDropDown}  ${styles.list}`}><a className={`${styles.a} ${!isHome ? styles.white : ''}`} >About</a></li>
            </Link>
            <Link href='/contact'>
              <li className={`${styles.linkesDropDown}  ${styles.list}`}><a className={`${styles.a} ${!isHome ? styles.white : ''}`} > Contact</a></li>
            </Link>
            <Link href='/hairstyle'>
              <li className={styles.list}><a className={`${styles.a} ${!isHome ? styles.white : ''}`}>Hair Styles</a></li>
            </Link>
          </ul>
        </div>

        <div className={styles.navIcons}>
          <div id='search' className={styles.searchInputBox} >
            <input className={styles.searchInput} type="text" placeholder="Search" />
            <button><RiSearchFill onClick={hideSearchInput} className={styles.searchBtn} size={14} /></button>
          </div>
          <CgSearch onClick={showSearchInput} className={styles.search} size={25} color={ '#fff'} />
          <Cart isHome={isHome} />
          <AiOutlineMenu onClick={showNavHandler} className={styles.toggleBtn} size={25} color={isHome ? '#66402B' : '#fff'} />
        </div>

      </div>
    </div>
  );
}

export default Navbar;