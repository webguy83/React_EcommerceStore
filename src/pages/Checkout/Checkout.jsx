import React from 'react';

import { connect } from 'react-redux';

import { selectCartItems, selectCartItemsTotal } from '../../store/selectors';
import { createStructuredSelector } from 'reselect';

import { CheckoutContainer, header } from './Checkout.module.scss';
import CheckoutDesktop from '../../components/Checkout/Desktop/CheckoutDesktop';

const Checkout = ({ cartItems, cartItemsTotal }) => {
    return (
        <div className={CheckoutContainer}>
            <h1 className={header}>Checkout</h1>
            <CheckoutDesktop cartItemsTotal={cartItemsTotal} 
                            cartItems={cartItems}
            />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal
});

export default connect(mapStateToProps)(Checkout); 