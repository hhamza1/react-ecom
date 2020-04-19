import React from 'react';

import { connect } from 'react-redux';

import './checkout-item.component';
import './checkout-item.styles.scss';

import { addItem, removeItem, reduceItem } from '../../redux/cart/cart.actions';




const CheckoutItem = ({cartItem, addItem, reduceItem, removeItem}) => {
    
    const {name, imageUrl, price, qty} = cartItem;

    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt={name} />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={()=> reduceItem(cartItem)}>&#10094;</div>
                <span className="value">{qty}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">${price}</span>
            <div className="remove-btn" onClick={() => removeItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    removeItem : item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    reduceItem: item => dispatch(reduceItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);