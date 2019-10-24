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

const CustomButtonContainer = styled.button`
    min-width: 11rem;
    padding: 1rem;
    cursor: pointer;
    text-transform: uppercase;
    font-family: inherit;
    font-size: 1.4rem;
    font-weight: bold;
    border: .1rem solid white;
    background-color: var(--prim);
    color: white;
    outline: none;
    transition: all .3s ease-out;

    &:hover, &:active {
        background-color: var(--sec);
        transition: var(--btnTrans);
    }

    ${({ defaultColour }) => {
        return defaultColour;
    }}
`
// jsx

const CustomButton = ({ type, value, click, google, ...otherProps}) => {
    const defaultColour = google ? GoogleSignIn : "";
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