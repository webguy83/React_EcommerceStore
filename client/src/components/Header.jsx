import React, { useContext } from 'react';
import Logo from './Logo';
import ShoppingCartIcon from './Icon';
import { Link, NavLink } from 'react-router-dom';
import MiniCart from './MiniCart';
import styled, { css } from 'styled-components/macro';
import { UserContext } from '../contexts/user';
import { CartContext } from '../contexts/cart';

// css

const LinkMainStyles = css`
    text-decoration: none;
    color: var(--prim);

    &:hover, &:active {
        color: var(--sec);
        transition: var(--btnTrans);
    }
`

const NotLastChildStyles = css`
    :not(:last-child) {
        margin-right: 4rem;
    }
`

const DisplayName = styled.p`
    font-size: 1.3rem;
    margin: 0 5rem 0 1rem;
`

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    position: relative;
    margin-bottom: 2rem;

    @media (max-width: 720px) {
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

    @media (max-width: 600px) {
        flex-direction: column;
        justify-content: center;
        margin-top: 2rem;
    }
`

const LogoGroup = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const NavLinkContainer = styled(NavLink)`
    ${LinkMainStyles}
    ${NotLastChildStyles}

    cursor: pointer;

    @media (max-width: 600px) {
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
            <LogoGroup>
                <LogoLink to="/">
                    <Logo />
                </LogoLink>
                <DisplayName>{`Hello, ${currentUser ? currentUser.displayName : "Guest"}!`}</DisplayName>
            </LogoGroup>

            <NavList>
                <NavLinkContainer activeStyle={NavLinkActiveState} exact to="/shop">Shop</NavLinkContainer>
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