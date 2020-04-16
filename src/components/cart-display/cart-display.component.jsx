import React from 'react';
import CustomBtn from '../custom-btn/custom-btn.component';
import './cart-display.styles.scss';

const CartDisplay = () => {
    return(
        <div className="cart-display">
            <div className="cart-items"></div>
            <CustomBtn>go to checkout</CustomBtn>
        </div>
    );
}

export default CartDisplay;