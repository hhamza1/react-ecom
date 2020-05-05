import React from 'react';

import Logo from '../../assets/logo.svg';

import './stripe-btn.styles.scss';
import StripeCheckout from 'react-stripe-checkout';


const StripeBtn = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_YY5t7lIMXorq87bAVW4sHZLG00OPQfRH4X'

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


    return (
        <StripeCheckout 
            label='Pay Now'
            name='React ECOM'
            billingAddress
            shippingAddress
            image={Logo}
            description={`Your total is : ${price} $`}
            amount={priceForStripe}
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeBtn;