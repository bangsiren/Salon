import React from "react";
import styles from './Footer.module.css';
import { FaFacebookF } from 'react-icons/fa';
import { MdNotifications } from 'react-icons/md';
import { FaInstagram } from 'react-icons/fa';
function Footer() {
    return (
        <div className={styles.footerSection}>

            <div className={styles.footerTopSection}>
                <div className={styles.aboutVertigo}>
                    <h3 className={styles.vertigoLogo}>Vertigo</h3>
                    <p className={styles.vertigoAboutConent}>The blogs about coffee will help you a lot about how it
                        is prepared, its waiting time, for a good quality coffee. blogs about coffee will help. Learn more.
                        coffee will help. Learn more.</p>
                </div>
                <div className={styles.vertigoNavigation}>
                    <h3 className={styles.navLinksTitle}>NAVIGATION</h3>
                    <ul className={styles.ul}>
                        <li className={styles.navLinks}><a>Menu</a></li>
                        <li className={styles.navLinks}><a>About Us</a></li>
                        <li className={styles.navLinks}><a>Contact Us</a></li>
                        <li className={styles.navLinks}><a>Events</a></li>
                        <li className={styles.navLinks}><a>Main Dishes</a></li>
                    </ul>
                </div>
                <div className={styles.vertigoDishesSection}>
                    <h3 className={styles.vertigoDishes}>Dishes</h3>
                    <p className={styles.vertigoDishesDescription}>Salade De Fruits
                        Taro Saouce JauneBoillon De SilureBouillon De ChevreViande De Brouse</p>
                </div>
                <div className={styles.vertigoSocilaIcons}>
                    <h2 className={styles.followUs}>Follow Us</h2>
                    <div className={styles.socialMediaBox}>
                        <div className={styles.socialMediaBody}> <FaFacebookF size={15} color='white' /></div>
                        <div className={styles.socialMediaBody}> <MdNotifications size={15} color='white' /></div>
                        <div className={styles.socialMediaBody}> <FaInstagram size={15} color='white' /></div>

                    </div>
                </div>

            </div>

            <div className={styles.footerMidSection}>
                <div>
                    <h3 className={styles.openingHours}>OPENING HOURS</h3>
                    <h4 className={styles.footerTime}>Monday - Friday <br /> 8:00 am to 9:00 pm</h4>
                </div>
                <div>
                    <h3 className={styles.openingHours} >OPENING HOURS</h3>
                    <h4 className={styles.footerTime} >Saturday <br />  8:00 am to 9:00 pm</h4>
                </div>
                <div>
                    <h3 className={styles.openingHours}>OPENING HOURS</h3>
                    <h4 className={styles.footerTime} >Sunday <br />  8:00 am to 9:00 pm</h4>
                </div>
            </div>

            <div className={styles.footerBottomSection}>
                <hr className={styles.footerLine} />
                <h3 className={styles.footerCopyRight}>@2022 Vertigo. All Rights Reserve</h3>
            </div>
        </div>
    );
}

export default Footer;