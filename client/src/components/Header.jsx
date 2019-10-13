import React, { useContext } from 'react';
import Logo from './Logo';
import ShoppingCartIcon from './Icon';
import { Link, NavLink } from 'react-router-dom';
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
    margin-bottom: 3rem;

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

const NavLinkContainer = styled(NavLink)`
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

const NavLinkActiveState = {
    "opacity": .5,
    "cursor": "auto"
}
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
                <NavLinkContainer activeStyle={NavLinkActiveState} to="/shop">Shop</NavLinkContainer>
                <NavLinkContainer activeStyle={NavLinkActiveState} to="/contact">Contact</NavLinkContainer>
                {
                    currentUser ? <NavLinkContainer as="div" activeStyle={NavLinkActiveState} to="" onClick={() => signOutUser()}>Sign Out</NavLinkContainer> : <NavLinkContainer activeStyle={NavLinkActiveState} to="/signinregistration">Sign In / Registration</NavLinkContainer>
                }
                <ShoppingCartIcon />
            </NavList>
            {miniCartHidden ? null : <MiniCart />}
        </HeaderContainer>
    );
};

export default Header;