import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import StripeLogo from './logo.svg';

const StripeButton = ({ price }) => {
    const stripePrice = price * 100;
    const pubKey = "pk_test_qA1t0QAGVZHm4k4dI7Mj0MH0004ZvVtscR"; 

    const onToken = (token) => {
        console.log(token);
        console.log('Payment successful!');
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