import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'; 

import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeBtn from '../../components/striple-btn/stripe-btn.component';

import './checkout.styles.scss';

const Checkout = ({cartItems, cartTotal}) => {
    return (
        <div className="checkout">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.length ? (cartItems.map(cartItem => 
                    <CheckoutItem 
                        key={cartItem.id} 
                        cartItem={cartItem} 
                    />))
                : (<span className="empty-cart">The cart is empty</span>)
            }
            <div className="total">
                <span>Total: ${cartTotal}</span>
            </div>
            <div className="warning">
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVC : 123 
            </div>
            <StripeBtn price={cartTotal} />
        </div>
    );
}

const mapStateToProps = createStructuredSelector({
    cartItems : selectCartItems,
    cartTotal: selectCartTotal
})


export default connect(mapStateToProps, null)(Checkout);