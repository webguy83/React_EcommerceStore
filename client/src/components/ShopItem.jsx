import React from 'react';
import styled, { css } from 'styled-components/macro';
import { withRouter } from 'react-router-dom';
import ContentBox from './UI/ContentBox';
import ItemProductPreview from './ItemProductPreview';
import { lowerCaseCountry } from '../helpers/generic';

const big = css`
    grid-column: 1 / -1;

    @media (max-width: 750px) {
        grid-column: auto;  
    }
`
const ShopItemBackground = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
`

const ShopItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: .1rem solid var(--prim);
    overflow: hidden;
    
    ${({ size }) => {
        return size === "big" ? big : null
    }}
`

const ShopItem = ({ title, image, size, history, match }) => {
    return (
        <ShopItemContainer size={size} onClick={() => history.push(`${match.url}shop/${lowerCaseCountry(title)}`)} >
            <ItemProductPreview bgImage={image} title={title} textContent="Shop for photos now!" />
        </ShopItemContainer>
    );
};

export default withRouter(ShopItem);