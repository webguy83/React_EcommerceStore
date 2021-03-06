import React, { useContext } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { CartContext } from '../../contexts/cart';

import StripeLogo from './logo.svg';

const StripeButton = ({ price, setPurchaseStatus }) => {
    const { clearCart } = useContext(CartContext);
    const stripePrice = price * 100;
    const pubKey = "pk_test_qA1t0QAGVZHm4k4dI7Mj0MH0004ZvVtscR";

    const onToken = (token) => {
        setPurchaseStatus("sending");
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: stripePrice,
                token
            }
        }).then(() => {
            clearCart();
            setPurchaseStatus("success");
        }).catch(() => {
            setPurchaseStatus("fail");
        })
    }

    return (
        <StripeCheckout
            label="Pay Now"
            name="Photos of Asia"
            image={StripeLogo}
            billingAddress
            shippingAddress
            currency="CAD"
            description={`Your total price is $${price}.`}
            amount={stripePrice}
            panelLabel="Pay Now"
            stripeKey={pubKey}
            token={onToken}
        />
    );
};

export default StripeButton;