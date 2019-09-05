import React from 'react';
import { MiniCartContainer, cartItems } from './MiniCart.module.scss';
import CustomButton from '../../UI/CustomButton/CustomButton';

const MiniCart = () => {
    return (
        <div className={MiniCartContainer}>
            <h2>Your Cart</h2>
            <div className={cartItems}></div>
            <CustomButton value="Checkout" />
        </div>
    );
};

export default MiniCart;