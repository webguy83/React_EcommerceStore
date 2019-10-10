import React, { useEffect, useContext } from 'react';
import { CartContext } from '../contexts/cart';
import CheckoutDesktopMobile from '../components/Checkout';
import StripeButton from '../components/UI/StripeButton';
import styled from 'styled-components/macro';

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

const Checkout = () => {
    const { cartItems, setIconCartHidden, cartItemsTotalPrice } = useContext(CartContext);
    useEffect(() => {
        setIconCartHidden(true);
        return () => {
            setIconCartHidden(false);
        }
    }, [setIconCartHidden])

    return (
        <CheckoutContainer>
            <Header>Checkout</Header>
            <CheckoutDesktopMobile cartItemsTotal={cartItemsTotalPrice} cartItems={cartItems} />
            {
                cartItems.length > 0 ?
                    <>
                        <CreditCardWarning><strong>Test credit card #:</strong> 4242 4242 4242 4242<br /><strong>Expires:</strong> 01/20<br /><strong>CVC:</strong> 123</CreditCardWarning>
                        <StripeButton price={cartItemsTotalPrice} />
                    </>
                    :
                    null
            }

        </CheckoutContainer>
    );
};

export default Checkout; 