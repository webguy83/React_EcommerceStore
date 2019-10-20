import React from 'react';
import Modal from 'react-modal';
import styled from 'styled-components/macro';
import CustomButton from '../UI/CustomButton';
import CloseButton from '../UI/CloseButton';

// css
const ModalContainer = styled.div`
    position: relative;

    & h2 {
        text-align: center;
        margin-bottom: 1.3rem;
    }

    & figure {
        & img {
            width: 100%;
            max-height: 38vh;
            object-fit: cover;
            max-width: 80rem;
            margin: 0 auto;
            display: block;
        }
        & figcaption {
            font-size: 1.3rem;
            margin-top: 1.3rem;
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
    Modal.setAppElement('#root');

    return (
        <Modal onRequestClose={onRequestClose} {...props}>
            <ModalContainer>
                <CloseButton style={{
                    position: "absolute",
                    right: 0
                }}
                    closeElm={() => onRequestClose()}
                />
                <h2>A new Modal!</h2>
                <figure>
                    <img src="https://via.placeholder.com/800" alt="A noob image" />
                    <figcaption>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus eos atque, amet, quia repellat eius fugit repudiandae porro enim eligendi sequi. Consequatur, alias beatae! At quasi vero sunt incidunt eius!</figcaption>
                </figure>
                <p>Cost: <strong>$25</strong></p>
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