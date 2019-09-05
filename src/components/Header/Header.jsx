import React from 'react';
import Logo from '../Logo/Logo';
import ShoppingCartIcon from '../ShoppingCart/Icon/Icon';

import { connect } from 'react-redux';

import { auth } from '../../helpers/firebase';

import { navItem, header } from './Header.module.scss';

import { Link } from 'react-router-dom';

const Header = ({ currentUser }) => {
    return (
        <div className={header}>
            <Link to="/">
                <Logo />
            </Link>
            <nav>
                <Link className={navItem} to="/shop">Shop</Link>
                <Link className={navItem} to="/contact">Contact</Link>
                {
                    currentUser ? <div className={navItem} onClick={() => auth.signOut()}>Sign Out</div> : <Link className={navItem} to="/signinregistration">Sign In / Registration</Link>
                }
                <Link className={navItem} to="#"><ShoppingCartIcon /></Link>
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