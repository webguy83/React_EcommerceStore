import React from 'react';
import Logo from '../Logo/Logo';
import ShoppingCartIcon from '../ShoppingCart/Icon/Icon';

import { connect } from 'react-redux';

import { selectMiniCartHidden, selectCurrentUser } from '../../store/selectors';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../helpers/firebase';

import { navItem, header } from './Header.module.scss';

import { Link } from 'react-router-dom';
import MiniCart from '../ShoppingCart/MiniCart/MiniCart';

const Header = ({ currentUser, miniCartHidden }) => {
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
                <ShoppingCartIcon />
            </nav>
            {miniCartHidden ? null : <MiniCart />}
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    miniCartHidden: selectMiniCartHidden,
});

export default connect(mapStateToProps)(Header);