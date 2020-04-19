import React from 'react';

import { connect } from 'react-redux';

import './checkout-item.component';
import './checkout-item.styles.scss';

import { removeItem } from '../../redux/cart/cart.actions';




const CheckoutItem = ({cartItem, removeItem}) => {
    
    const {name, imageUrl, price, qty} = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{qty}</span>
            <span className="price">${price}</span>
            <div className="remove-btn" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);