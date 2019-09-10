import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { iconCartHidden } from '../../store/actions/minicart';

import { selectCartItems, selectCartItemsTotal } from '../../store/selectors';
import { createStructuredSelector } from 'reselect';

import { CheckoutContainer, header } from './Checkout.module.scss';
import CheckoutDesktop from '../../components/Checkout/Desktop/CheckoutDesktop';
import CheckoutMobile from '../../components/Checkout/Mobile/CheckoutMobile';

const Checkout = ({ cartItems, cartItemsTotal, iconCartHidden }) => {

    useEffect(() => {
        iconCartHidden(true);
        return () => {
            iconCartHidden(false);
        }
    }, [iconCartHidden])

    return (
        <div className={CheckoutContainer}>
            <h1 className={header}>Checkout</h1>
            <CheckoutDesktop cartItemsTotal={cartItemsTotal}
                cartItems={cartItems}
            />
            <CheckoutMobile cartItemsTotal={cartItemsTotal}
                cartItems={cartItems} />
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    cartItemsTotal: selectCartItemsTotal
});

const mapDispatchToProps = (dispatch) => {
    return {
        iconCartHidden: (hide) => {
            dispatch(iconCartHidden(hide))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Checkout); 