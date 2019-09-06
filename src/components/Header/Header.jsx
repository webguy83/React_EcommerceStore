import React from 'react';
import Logo from '../Logo/Logo';
import ShoppingCartIcon from '../ShoppingCart/Icon/Icon';

import { connect } from 'react-redux';

import { auth } from '../../helpers/firebase';

import { navItem, header } from './Header.module.scss';

import { Link } from 'react-router-dom';
import MiniCart from '../ShoppingCart/MiniCart/MiniCart';
import { toggleMiniCartHidden } from '../../store/actions/minicart';

const Header = ({ currentUser, miniCartHidden, toggleMiniCartHidden }) => {
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
                <ShoppingCartIcon toggleMiniCartHidden={toggleMiniCartHidden} />
            </nav>
            {miniCartHidden ? null : <MiniCart />}
        </div>
    );
};

const mapStateToProps = ({ user, miniCart }) => {
    return {
        currentUser: user.currentUser,
        miniCartHidden: miniCart.miniCartHidden
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleMiniCartHidden: () => dispatch(toggleMiniCartHidden())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);