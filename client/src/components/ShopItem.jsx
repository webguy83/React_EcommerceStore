import React from 'react';
import styled, { css } from 'styled-components/macro';
import { withRouter } from 'react-router-dom';
import ContentBox from './UI/ContentBox';
import { lowerCaseCountry } from '../helpers/generic';

const big = css`
    grid-column: 1 / -1;

    @media (max-width: 750px) {
        grid-column: auto;  
    }
`

const ShopItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: .1rem solid black;
    overflow: hidden;

    &:hover {
        cursor: pointer;

        & .shopItemBackground {
            transform: scale(1.1);
            transition: transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        & .content {
            opacity: .9;
            transition: all .3s ease-out;
        }
    }
    
    ${({ size }) => {
        return size === "big" ? big : "small"
    }}
`

const ShopItemBackground = styled.div`
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
`

const ShopItem = ({ title, image, size, history, match }) => {
    return (
        <ShopItemContainer size={size} onClick={() => history.push(`${match.url}shop/${lowerCaseCountry(title)}`)} >
            <ShopItemBackground style={{
                backgroundImage: `url(${image})`
            }} />
            <ContentBox title={title} textContent="Shop for photos now!" />
        </ShopItemContainer>
    );
};

export default withRouter(ShopItem);