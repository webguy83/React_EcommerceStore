import React from 'react';
import styled, { css } from 'styled-components';

// css
const GoogleSignIn = css`
    background-color: #4285F4;
    color: white;
    border: none;
    
    &:hover {
        background-color: #f4b400
    }
`

const AddToCartBtn = css`
    background-color: #f4b400
    color: black;

    &:hover {
        background-color: white;
    }
`

const CustomButtonContainer = styled.button`
    min-width: 11rem;
    padding: 1rem;
    cursor: pointer;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: bold;
    border: .1rem solid white;
    background-color: black;
    color: white;
    outline: none;
    transition: all .3s ease-out;

    &:hover, &:active {
        color: black;
        background-color: white;
        transition: all .3s ease-out;
    }

    ${({ defaultColour }) => {
        return defaultColour;
    }}
`
// jsx

const CustomButton = ({ type, value, click, google, addToCart, ...otherProps}) => {
    const defaultColour = google ? GoogleSignIn : addToCart ? AddToCartBtn : "";
    return (
        <CustomButtonContainer onClick={click}
            type={type}
            defaultColour={defaultColour}
            {...otherProps}
            >{value}
        </CustomButtonContainer>
    );
};

export default CustomButton;