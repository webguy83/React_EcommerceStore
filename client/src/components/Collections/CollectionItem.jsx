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
import CollectionItemModal from './CollectionItemModal';
import ContentBox from '../UI/ContentBox';
// css

const ColItem = styled.div`
    width: 100%;
    height: 42vh;
    min-height: 20rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Item = styled.div`
    width: 100%;
    height: 90%;
    background-size: cover;
    background-position: center;
    background-image: url(${({ imageUrl }) => imageUrl});
    display: flex;
    justify-content: center;
    align-items: flex-end;
    cursor: pointer;
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
    opacity: .7;
`

const PurchasedOverlayText = styled.p`
    font-size: 2.8rem;
    transform: rotate(-45deg);
`

// jsx

const CollectionItem = ({ item, itemPurchased }) => {
    const { name, imageUrl, price } = item;
    const { addItemToCart, removeItemFromCart } = useContext(CartContext);
    const [showModal, setShowModal] = useState(false);

    const onModalClose = () => {
        setShowModal(false);
    }

    return (
        <ColItem>
            {showModal ?
                <CollectionItemModal addItemToCart={addItemToCart} product={item} isOpen={showModal} onRequestClose={onModalClose} />
                : null
            }
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

            <Item imageUrl={imageUrl} onClick={(e) => {
                setShowModal(true)
            }}>
                {!itemPurchased ? <ContentBox title="View" textContent="Click for details!" style={{
                    position: "absolute",
                    top: "40%"
                }} /> : null}
                <CustomButton
                    style={{
                        "opacity": .7
                    }}

                    value={itemPurchased ?
                        "Remove From Cart"
                        : "Add to Cart"
                    } click={(e) => {
                        e.stopPropagation();
                        if (!itemPurchased) {
                            addItemToCart(item);
                        } else {
                            removeItemFromCart(item);
                        }
                    }} />
            </Item>
            <ColFooter>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </ColFooter>
        </ColItem>
    );
};

export default CollectionItem;