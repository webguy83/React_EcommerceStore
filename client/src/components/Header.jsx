import React, { useContext } from 'react';
import Logo from './Logo';
import ShoppingCartIcon from './Icon';
import { Link } from 'react-router-dom';
import MiniCart from './MiniCart';
import styled, { css } from 'styled-components';
import { UserContext } from '../contexts/user';
import { CartContext } from '../contexts/cart';

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

const Header = () => {
    const { currentUser, signOutUser } = useContext(UserContext)
    const { miniCartHidden } = useContext(CartContext);

    return (
        <HeaderContainer>
            <LogoLink to="/">
                <Logo />
            </LogoLink>
            <NavList>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                {
                    currentUser ? <NavLink as="div" to="" onClick={() => signOutUser()}>Sign Out</NavLink> : <NavLink to="/signinregistration">Sign In / Registration</NavLink>
                }
                <ShoppingCartIcon />
            </NavList>
            {miniCartHidden ? null : <MiniCart />}
        </HeaderContainer>
    );
};

export default Header;