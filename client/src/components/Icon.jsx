import React, { useContext } from 'react';
import { CartContext } from '../contexts/cart';
import styled from 'styled-components/macro';

const IconContainer = styled.div`
    position: relative;
    cursor: pointer;

    &:hover, &:active {
        color: var(--sec);
        transition: var(--btnTrans);
    }

    & .cart {
        font-size: 3.8rem;
    }
`

const Counter = styled.span`
    position: absolute;
    left: -5%;
    top: -10%;
    color: var(--prim);
    width: 100%;
    height: 100%;
    text-align: center;
`

const Icon = () => {
    const { iconCartHidden, toggleMiniCartHidden, cartItemsAmount } = useContext(CartContext);
    return (
        iconCartHidden ? null : <IconContainer onClick={() => toggleMiniCartHidden()}>
            <Counter>{cartItemsAmount}</Counter>
            <span role="img" aria-label="cart" className="cart">&#128722;</span>
        </IconContainer>
    );
};

export default Icon;