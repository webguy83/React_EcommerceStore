import React, { useContext } from 'react';
import styled from 'styled-components/macro';
import { CartContext } from '../../contexts/cart';
import CustomButton from '../UI/CustomButton';

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
// jsx

const CollectionItem = ({ item }) => {
    const { name, imageUrl, price } = item;
    const { addItemToCart } = useContext(CartContext)
    return (
        <ColItem>
            <Image imageUrl={imageUrl} />
            <ColFooter>
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </ColFooter>
            <CustomButton click={() => addItemToCart(item)} addToCart value="Add to Cart" />
        </ColItem>
    );
};

export default CollectionItem;