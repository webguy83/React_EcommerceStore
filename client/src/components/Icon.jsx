import React, { useContext } from 'react';
import { CartContext } from '../contexts/cart';
import styled from 'styled-components/macro';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const IconContainer = styled.div`
    position: relative;
    cursor: pointer;

    &:hover, &:active {
        color: var(--sec);
        transition: var(--btnTrans);
    }
`

const Counter = styled.span`
    position: absolute;
    left: 8%;
    top: 14%;
    color: white;
    width: 100%;
    height: 100%;
    text-align: center;
`

const Icon = () => {
    const { iconCartHidden, toggleMiniCartHidden, cartItemsAmount } = useContext(CartContext);
    return (
        iconCartHidden ? null : <IconContainer onClick={() => toggleMiniCartHidden()}>
            <FontAwesomeIcon icon={faShoppingCart} size="3x" />
            <Counter>{cartItemsAmount}</Counter>
        </IconContainer>
    );
};

export default Icon;