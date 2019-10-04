import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

import StripeLogo from './logo.svg';

const StripeButton = ({ price }) => {
    const stripePrice = price * 100;
    const pubKey = "pk_test_qA1t0QAGVZHm4k4dI7Mj0MH0004ZvVtscR";

    const onToken = (token) => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: stripePrice,
                token
            }
        }).then(() => {
            alert('Thank you for your purchase!')
        }).catch(err => {
            console.log(`Payment error: ${JSON.parse(err)}`)
            alert('There was an issue with your payment sorry :(. Please verify your card!')
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