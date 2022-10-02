import React from "react";
import styles from './Button.module.css'
import { RiLoginCircleLine } from 'react-icons/ri';
function Button({ showLeftIcon, showRightI, isHome }) {
    return (
        <div>
            <button className={`${styles.button} ${isHome ? styles.buttonBgHome : styles.buttonBg} ${'animate__animated animate__pulse'}`}> <RiLoginCircleLine color="white" className={styles.loginBtnIcon} />Login</button>
        </div>
    );
}

export default Button;