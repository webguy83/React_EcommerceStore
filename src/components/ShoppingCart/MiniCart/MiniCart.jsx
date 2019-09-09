import React from 'react';
import { MiniCartContainer, items, emptyMiniCart, emptyMessage } from './MiniCart.module.scss';
import CustomButton from '../../UI/CustomButton/CustomButton';

import { selectCartItems } from '../../../store/selectors';
import { createStructuredSelector } from 'reselect';

import { connect } from 'react-redux';

import ShoppingCartItem from '../ShoppingCartItem/ShoppingCartItem';

const MiniCart = ({ cartItems }) => {
    return (
        <div className={MiniCartContainer}>
            <h2>Your Cart</h2>
            {cartItems.length > 0 ?
                <div className={items}>
                    {cartItems.map(item => {
                        return <ShoppingCartItem key={item.id} item={item} />
                    })}
                </div> :
                <div className={emptyMiniCart}>
                    <p className={emptyMessage}>Your shopping cart is empty!</p>
                </div>}
            <CustomButton value="Checkout" />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default connect(mapStateToProps)(MiniCart);