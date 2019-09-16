import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { iconCartHidden } from '../../store/actions/minicart';
import { selectCartItems, selectCartItemsTotal } from '../../store/selectors';
import { createStructuredSelector } from 'reselect';
import CheckoutDesktop from '../../components/Checkout/Desktop/CheckoutDesktop';
import CheckoutMobile from '../../components/Checkout/Mobile/CheckoutMobile';
import StripeButton from '../../components/UI/StripeButton/StripeButton';
import styled from 'styled-components';

// css
const CheckoutContainer = styled.div`
    display: flex;
    flex-direction: column;

    & button {
        align-self: flex-end;
        margin-top: 1rem;
    }
`

const Header = styled.h1`
    text-align: center;
    margin-bottom: 5rem;
`

const CreditCardWarning = styled.p`
    color: red;
    font-size: 1.8rem;
    align-self: flex-end;
    margin-top: 2rem;
`

// jsx

const Checkout = ({ cartItems, cartItemsTotal, iconCartHidden }) => {
    useEffect(() => {
        iconCartHidden(true);
        return () => {
            iconCartHidden(false);
        }
    }, [iconCartHidden])

    return (
        <CheckoutContainer>
            <Header>Checkout</Header>
            <CheckoutDesktop cartItemsTotal={cartItemsTotal}
                cartItems={cartItems}
            />
            <CheckoutMobile cartItemsTotal={cartItemsTotal}
                cartItems={cartItems} />
            <CreditCardWarning><strong>Test credit card #:</strong> 4242 4242 4242 4242<br /><strong>Expires:</strong> 01/20<br /><strong>CVC:</strong> 123</CreditCardWarning>
            <StripeButton price={cartItemsTotal} />
        </CheckoutContainer>
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