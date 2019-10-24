import React, { useContext, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components/macro';
import { CartContext } from '../../contexts/cart';
import CustomButton from '../UI/CustomButton';
import { CSSTransition } from 'react-transition-group';
import CollectionItemModal from './CollectionItemModal';
import ItemProductPreview from '../ItemProductPreview';

// css

const OverlayStyles = createGlobalStyle`
    #root .overlay-enter {
        opacity: 0;
    }
    #root .overlay-enter-active {
        opacity: .7;
        transition: opacity .3s;
    }
    #root .overlay-enter-done {
        opacity: .7;
    }
    #root .overlay-exit{
        opacity: .7;
    }
    #root .overlay-exit-active {
        opacity: 0;
        transition: opacity .3s;
    }
`

const ColItem = styled.div`
    width: 100%;
    height: 42vh;
    min-height: 20rem;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & .ItemProductPreviewGroup {
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
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
    height: 100%;
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
            <OverlayStyles />
            {showModal ?
                <CollectionItemModal addItemToCart={addItemToCart}
                    product={item}
                    isOpen={showModal}
                    onRequestClose={onModalClose} />
                : null
            }
            <CSSTransition
                in={itemPurchased}
                timeout={300}
                unmountOnExit
                classNames="overlay">
                <PurchasedOverlay>
                    <PurchasedOverlayText>Added to Cart!</PurchasedOverlayText>
                </PurchasedOverlay>
            </CSSTransition>
            <div className="ItemProductPreviewGroup" onClick={() => {
                setShowModal(true)
            }}>
                <ItemProductPreview show={itemPurchased} bgImage={imageUrl} title="View" textContent="Click for details!" />
            </div>
            <CustomButton
                style={{
                    position: "absolute",
                    bottom: "2.2rem"
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
            <ColFooter>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </ColFooter>
        </ColItem>
    );
};

export default CollectionItem;