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

    .fas {
        font-size: 4.4rem;
    }
`

const Counter = styled.span`
    position: absolute;
    left: 9%;
    top: 7%;
    color: #fff;
    width: 100%;
    height: 100%;
    text-align: center;
`

const Icon = () => {
    const { iconCartHidden, toggleMiniCartHidden, cartItemsAmount } = useContext(CartContext);
    return (
        iconCartHidden ? null : <IconContainer onClick={() => toggleMiniCartHidden()}>
            <Counter>{cartItemsAmount}</Counter>
            <i class="fas fa-shopping-cart"></i>
        </IconContainer>
    );
};

export default Icon;