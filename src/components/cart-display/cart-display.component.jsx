import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/cart-item.component';
import CustomBtn from '../custom-btn/custom-btn.component';
import './cart-display.styles.scss';

import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDisplay = ({cartItems}) => {
    return(
        <div className="cart-display">
            <div className="cart-items">
                {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)}
            </div>
            <CustomBtn>go to checkout</CustomBtn>
        </div>
    );
}


const mapStateToProps = (state) => ({
    cartItems : selectCartItems(state)
});

export default connect(mapStateToProps, null)(CartDisplay);