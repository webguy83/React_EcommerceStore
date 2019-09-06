import React from 'react';

import { customButtonContainer, googleSignIn, addToCartBtn } from './CustomButton.module.scss';

const CustomButton =  ({ type, value, click, google, addToCart }) => {
    const defaultColour = google ? googleSignIn : addToCart ? addToCartBtn : "";
    return (
        <button onClick={click}
                type={type}
                className={
                customButtonContainer.concat(` ${defaultColour}`)}>{value}
        </button>
    );
};

export default CustomButton;