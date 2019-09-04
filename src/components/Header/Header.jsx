import React from 'react';
import Logo from '../Logo/Logo';

import { connect } from 'react-redux';

import { auth } from '../../helpers/firebase';

import styles from './Header.module.scss';

import { Link } from 'react-router-dom';

const Header = ({ currentUser }) => {
    return (
        <div className={styles.header}>
            <Link to="/">
                <Logo />
            </Link>
            <nav>
                <Link className={styles.navItem} to="/shop">Shop</Link>
                <Link className={styles.navItem} to="/contact">Contact</Link>
                {
                    currentUser ? <div className={styles.navItem} onClick={() => auth.signOut()}>Sign Out</div> : <Link className={styles.navItem} to="/signinregistration">Sign In / Registration</Link>
                }

            </nav>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser
    }
}

export default connect(mapStateToProps)(Header);