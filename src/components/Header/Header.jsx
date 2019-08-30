import React from 'react';
import Logo from '../Logo/Logo';

import { auth } from '../../helpers/firebase';

import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

export default ({ currentUser }) => {
    return (
        <div className={styles.header}>
            <Link to="/">
                <Logo />
            </Link>
            <nav>
                <Link className={styles.navItem} to="/shop">Shop</Link>
                <Link className={styles.navItem} to="/contact">Contact</Link>
                {
                    currentUser ? <div className={styles.navItem} onClick={() => auth.signOut()}>Sign Out</div> : <Link className={styles.navItem} to="/signup">Sign Up</Link>
                }
                
            </nav>
        </div>
    );
};