import React from 'react';
import styled from 'styled-components/macro';

const ShoppingCartItemContainer = styled.div`
    display: flex;
    margin: 1rem 0;
`

const Thumbnail = styled.img`
    display: block;
    width: 30%;
`

const Details = styled.div`
    align-self: center;
    font-size: 1.5rem;
    width: 70%;
    padding-left: 2rem;
`

const DetailsName = styled.div`
    font-weight: bold;
`

const ShoppingCartItem = ({ item: { imageUrl, name, price, qty } }) => {
    return (
        <ShoppingCartItemContainer>
            <Thumbnail src={imageUrl} alt={name} />
            <Details>
                <DetailsName>{name}</DetailsName>
                <div>
                    <span>{qty}</span> x <span>${price}</span>
                </div>
            </Details>
        </ShoppingCartItemContainer>
    );
};

export default ShoppingCartItem;