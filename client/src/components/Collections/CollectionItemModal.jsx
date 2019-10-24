import React, { useState } from 'react';
import Modal from 'react-modal';
import styled, { createGlobalStyle } from 'styled-components/macro';
import CustomButton from '../UI/CustomButton';
import CloseButton from '../UI/CloseButton';
import Spinner from '../UI/Spinner';
// css

const ModalOverlay = createGlobalStyle`
    .ModalOverlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgb(74, 74, 74, .7);
    }
    .ReactModal__Content {
        opacity: 0;
        transition: all 500ms ease-in-out;
        background: linear-gradient(#ffffff, #f1f1f1);
    }
    
    .ReactModal__Content--after-open{
        opacity: 1;
    }
`

const ModalContainer = styled.div`
    position: relative;

    & h2 {
        text-align: center;
        margin-bottom: 1.3rem;
    }

    & figure {
        & img {
            width: 100%;
            max-height: 47vh;
            object-fit: cover;
            max-width: 80rem;
            margin: 0 auto;
            display: block;
            border: .1rem solid var(--prim);
        }
        & figcaption {
            font-size: 1.5rem;
            margin-top: 1.3rem;
            text-align: center;
        }
    }

    & p {
        font-size: 2.2rem;
        text-align: center;
        margin-top: 1.3rem;
    }
`
// jsx

const CollectionItemModal = ({ onRequestClose, addItemToCart, product, ...props }) => {
    const [bgImageLoaded, setbgImageLoaded] = useState(false);

    const onImageLoadedSuccess = () => {
        setbgImageLoaded(true);
    }

    Modal.setAppElement('#root');
    const { images, name, price, description, loc } = product;
    return (
        <Modal overlayClassName="ModalOverlay"
            onRequestClose={onRequestClose}
            style={{
                content: {
                    top: "50%",
                    right: "auto",
                    bottom: "auto",
                    left: " 50%",
                    marginRight: '-50%',
                    transform: 'translate(-50%, -50%)'
                }
            }}
            {...props}
        >
            <ModalOverlay />
            <ModalContainer>
                <CloseButton style={{
                    position: "absolute",
                    right: 0
                }}
                    closeElm={() => onRequestClose()}
                />
                <h2>{name}</h2>
                {!bgImageLoaded ? <Spinner /> : null}
                <figure>
                    <img src={images["largest"]} onLoad={() => onImageLoadedSuccess()} alt={name} />
                    <figcaption>{description} - <strong>{loc}</strong></figcaption>
                </figure>
                <p>Cost: <strong>${price}</strong></p>
                <CustomButton
                    value="Add to Cart"
                    style={{
                        margin: "1.3rem auto",
                        display: "block"
                    }}
                    click={() => {
                        addItemToCart(product);
                        onRequestClose();
                    }} />
            </ModalContainer>
        </Modal>
    );
};

export default CollectionItemModal;