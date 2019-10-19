import React, { useContext, useState } from 'react';
import styled from 'styled-components/macro';
import { CartContext } from '../../contexts/cart';
import CustomButton from '../UI/CustomButton';
import { CSSTransition } from 'react-transition-group';
import {
    overlayEnter,
    overlayEnterActive,
    overlayEnterDone,
    overlayExit,
    overlayExitActive
} from './Styles/CollectionItem.module.css';

// css

const ColItem = styled.div`
    width: 100%;
    height: 42vh;
    min-height: 20rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    & > button {
        position: absolute;
        opacity: .7;
        bottom: 6rem;
    }
`
const Image = styled.div`
    width: 100%;
    height: 90%;
    background-size: cover;
    background-position: center;
    background-image: url(${({ imageUrl }) => imageUrl});
`

const ColFooter = styled.div`
    width: 100%;
    font-size: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center; 
`
const PurchasedOverlay = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    height: 42vh;
    background-color: #fff;
`

const PurchasedOverlayText = styled.p`
    font-size: 2.8rem;
    transform: rotate(-45deg);
`
// jsx

const CollectionItem = ({ item, itemPurchased }) => {
    const { name, imageUrl, price } = item;
    const { addItemToCart, removeItemFromCart } = useContext(CartContext);

    return (
        <ColItem>
            <CSSTransition
                in={itemPurchased}
                timeout={300}
                unmountOnExit
                classNames={{
                    enter: overlayEnter,
                    enterActive: overlayEnterActive,
                    enterDone: overlayEnterDone,
                    exit: overlayExit,
                    exitActive: overlayExitActive
                   }}>
                <PurchasedOverlay>
                    <PurchasedOverlayText>Added to Cart!</PurchasedOverlayText>
                </PurchasedOverlay>
            </CSSTransition>

            <Image imageUrl={imageUrl} />
            <ColFooter>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </ColFooter>
            <CustomButton addToCart
                value={itemPurchased ?
                    "Remove From Cart"
                    : "Add to Cart"
                } click={() => {
                    if (!itemPurchased) {
                        addItemToCart(item);
                    } else {
                        removeItemFromCart(item);
                    }
                }} />
        </ColItem>
    );
};

export default CollectionItem;