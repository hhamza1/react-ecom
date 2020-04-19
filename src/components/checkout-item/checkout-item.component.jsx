import React from 'react';

import './checkout-item.component';
import './checkout-item.styles.scss';


const CheckoutItem = ({cartItem : {name, imageUrl, price, qty}}) => {
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">{qty}</span>
            <span className="price">${price}</span>
            <div className="remove-btn">&#10005;</div>
        </div>
    );
}

export default CheckoutItem;