import React, { useEffect, useContext, useState } from 'react';
import { CartContext } from '../contexts/cart';
import CheckoutDesktopMobile from '../components/Checkout';
import StripeButton from '../components/UI/StripeButton';
import styled from 'styled-components/macro';
import ConfirmationMsg from '../components/UI/ConfirmationMsg';

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
    const [purchaseStatus, setPurchaseStatus] = useState("");
    useEffect(() => {
        setIconCartHidden(true);
        return () => {
            setIconCartHidden(false);
        }
    }, [setIconCartHidden])

    const statusMessages = {
        success: "Success! Your purchase has completed and you will receive your photos within 5 to 7 days.",
        fail: "Sorry, there was in issue with your purchase! Please contact support if this issue persists.",
        sending: "Purchasing..."
    }

    return (
        <CheckoutContainer>
            <Header>Checkout</Header>
            {purchaseStatus === "" ?
                <CheckoutDesktopMobile cartItemsTotal={cartItemsTotalPrice} cartItems={cartItems} />
                : <ConfirmationMsg status={purchaseStatus} statusMessages={statusMessages} />}
            {cartItems.length > 0 ?
                <>
                    <CreditCardWarning><strong>Test credit card #:</strong> 4242 4242 4242 4242<br /><strong>Expires:</strong> 01/20<br /><strong>CVC:</strong> 123</CreditCardWarning>
                    <StripeButton setPurchaseStatus={(status) => setPurchaseStatus(status)} price={cartItemsTotalPrice} />
                </> : null}
        </CheckoutContainer>
    );
};

export default Checkout; 