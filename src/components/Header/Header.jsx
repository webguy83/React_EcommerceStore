import React from 'react';
import Logo from '../Logo/Logo';
import ShoppingCartIcon from '../ShoppingCart/Icon/Icon';
import { connect } from 'react-redux';
import { selectMiniCartHidden, selectCurrentUser } from '../../store/selectors';
import { createStructuredSelector } from 'reselect';
import { auth } from '../../helpers/firebase';
import { Link } from 'react-router-dom';
import MiniCart from '../ShoppingCart/MiniCart/MiniCart';
import styled, { css } from 'styled-components';

// css

const LinkMainStyles = css`
    text-decoration: none;
    color: black;
`

const NotLastChildStyles = css`
    :not(:last-child) {
        margin-right: 4rem;
    }
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 2rem;

    @media (max-width: 670px) {
        flex-direction: column;
        align-items: center;
    }
`

const LogoLink = styled(Link)`
    ${LinkMainStyles}
`

const NavList = styled.nav`
    font-size: 1.8rem;
    display: flex;
    align-items: center;

    @media (max-width: 670px) {
        flex-direction: column;
        justify-content: center;
        margin-top: 2rem;
    }
`

const NavLink = styled(Link)`
    ${LinkMainStyles}
    ${NotLastChildStyles}

    cursor: pointer;

    @media (max-width: 670px) {
        :not(:last-child) {
            margin-right: 0;
            margin-bottom: 2rem;
        }
    }
`
// jsx

const Header = ({ currentUser, miniCartHidden }) => {
    return (
        <HeaderContainer>
            <LogoLink to="/">
                <Logo />
            </LogoLink>
            <NavList>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {
                    currentUser ? <NavLink as="div" onClick={() => auth.signOut()}>Sign Out</NavLink> : <NavLink to="/signinregistration">Sign In / Registration</NavLink>
                }
                <ShoppingCartIcon />
            </NavList>
            {miniCartHidden ? null : <MiniCart />}
        </HeaderContainer>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    miniCartHidden: selectMiniCartHidden,
});

export default connect(mapStateToProps)(Header);