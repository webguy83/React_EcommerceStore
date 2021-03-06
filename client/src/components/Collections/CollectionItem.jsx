import React, { useContext, useState } from "react";
import styled, { createGlobalStyle } from "styled-components/macro";
import { CartContext } from "../../contexts/cart";
import CustomButton from "../UI/CustomButton";
import { CSSTransition } from "react-transition-group";
import CollectionItemModal from "./CollectionItemModal";
import ItemProductPreview from "../ItemProductPreview";
import LazyLoad from "react-lazyload";

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
`;

const ColItem = styled.div`
  width: 100%;
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
`;

const ColFooter = styled.div`
  width: 100%;
  font-size: 1.4rem;
  background-color: black;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const PurchasedOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #fff;
  opacity: 0.7;
`;

const PurchasedOverlayText = styled.p`
  font-size: 2.8rem;
  transform: rotate(-15deg);
`;

// jsx

const CollectionItem = ({ item, itemPurchased }) => {
  const { name, images, price } = item;
  const { addItemToCart, removeItemFromCart } = useContext(CartContext);
  const [showModal, setShowModal] = useState(false);

  const onModalClose = () => {
    setShowModal(false);
  };

  return (
    <LazyLoad height="100%">
      <ColItem>
        <OverlayStyles />
        {showModal ? (
          <CollectionItemModal
            addItemToCart={addItemToCart}
            product={item}
            isOpen={showModal}
            onRequestClose={onModalClose}
          />
        ) : null}
        <CSSTransition
          in={itemPurchased}
          timeout={300}
          unmountOnExit
          classNames="overlay"
        >
          <PurchasedOverlay>
            <PurchasedOverlayText>Added to Cart! &#10004;</PurchasedOverlayText>
          </PurchasedOverlay>
        </CSSTransition>
        <div
          className="ItemProductPreviewGroup"
          onClick={() => {
            setShowModal(true);
          }}
        >
          <ItemProductPreview
            show={itemPurchased}
            bgImage={images["large"]}
            title="View"
            textContent="Click for details!"
          />
        </div>
        <CustomButton
          style={{
            position: "absolute",
            bottom: "1.6rem"
          }}
          value={itemPurchased ? "Remove From Cart" : "Add to Cart"}
          click={e => {
            e.stopPropagation();
            if (!itemPurchased) {
              addItemToCart(item);
            } else {
              removeItemFromCart(item);
            }
          }}
        />
        <ColFooter>
          <span className="name">{name}</span>
          <span className="price">${price}</span>
        </ColFooter>
      </ColItem>
    </LazyLoad>
  );
};

export default CollectionItem;
