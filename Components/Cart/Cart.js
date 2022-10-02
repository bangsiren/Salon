import React from "react";
import styles from './Cart.module.css';
import { BiCart } from 'react-icons/bi'
function Cart({ isHome }) {
    return (
        <div className={styles.cartContainer}>
            <div className={`${styles.cartNumberDiv} ${ styles.numBgHome}`}><span className={styles.cartNumber}>5</span></div>
            <BiCart className={styles.addToCard} size={20} color={isHome ? '#66402B' : '#fff'} />
        </div>
    );
}

export default Cart;