import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import styled, { createGlobalStyle } from 'styled-components/macro';
import CustomButton from '../UI/CustomButton';
import CloseButton from '../UI/CloseButton';
import useMediaQuery from 'react-use-media-query-hook';
import Spinner from '../UI/Spinner';

// css

const ModalOverlay = createGlobalStyle`
    .ModalOverlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(74, 74, 74, .7);
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

    & .imageHolder {
        
        max-width: 80rem;

        & img {
            width: 100%;
            max-height: 47vh;
            object-fit: cover;
            max-width: 80rem;
            margin: 0 auto;
            display: block;
            border: .1rem solid var(--prim);
        }
        & p {
            font-size: 1.5rem;
            margin: .5rem 0;
            text-align: center;
        }
    }

    & span {
        font-size: 2.2rem;
        text-align: center;
        margin-right: 2rem;
    }

    .costDetails {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
// jsx

const loadImg = (url) => {
    return new Promise((res, rej) => {
        const img = new Image();
        img.addEventListener('load', () => res(img));
        img.addEventListener('error', (error) => rej(error));
        img.src = url;
    })
}

const CollectionItemModal = ({ onRequestClose, addItemToCart, product, ...props }) => {
    const [modalImg, setModalImg] = useState(null);

    const largest = useMediaQuery('(min-width: 860px)');
    const large = useMediaQuery('(min-width: 660px) and (max-width: 859px)');
    const medium = useMediaQuery('(min-width: 530px) and (max-width: 659px)');
    const small = useMediaQuery('(min-width: 460px) and (max-width: 529px)');

    const { images, name, price, description, loc } = product;

    let imgSize = "";

    if (largest) {
        imgSize = "largest";
    } else if (large) {
        imgSize = "large";
    } else if (medium) {
        imgSize = "medium";
    } else if (small) {
        imgSize = "small";
    } else {
        imgSize = "smallest"
    }

    useEffect(() => {
        loadImg(images[imgSize])
            .then(img => setModalImg(img))
            .catch(err => console.error(err))
    }, [images, imgSize])

    Modal.setAppElement('#root');

    return (
        !modalImg ? <Spinner /> : <Modal overlayClassName="ModalOverlay"
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
                <div className="imageHolder">
                    <picture>
                        <source media="(min-width: 860px)" srcSet={images["largest"]} />
                        <source media="(min-width: 660px)" srcSet={images["large"]} />
                        <source media="(min-width: 530px)" srcSet={images["medium"]} />
                        <source media="(min-width: 460px)" srcSet={images["small"]} />
                        <source media="(max-width: 459px)" srcSet={images["smallest"]} />
                        <img src={modalImg.src} alt={name} />
                    </picture>

                    <p className="desc">{description} - <strong>{loc}</strong></p>
                </div>
                <div className="costDetails">
                    <span>Cost: <strong>${price}</strong></span>
                    <CustomButton
                        value="Add to Cart"
                        style={{
                            display: "block"
                        }}
                        click={() => {
                            addItemToCart(product);
                            onRequestClose();
                        }} />
                </div>
            </ModalContainer>
        </Modal>
    );
};

export default CollectionItemModal;